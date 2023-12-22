from flask import Flask, request, render_template, jsonify, redirect, url_for
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
import json

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/institutions_db'
mongo = PyMongo(app)
bcrypt = Bcrypt(app)

# Homepage
@app.route('/')
def index():
    return render_template('index.html')

# retrieve data from json file
file_path = 'institution_data.json'

with open(file_path, 'r') as json_file:
    institutions_data = json.load(json_file)

# Insert data into MongoDB on startup
def insert_data_into_mongo():
    try:
        mongo.db.institutions.insert_many(institutions_data)
        print('Data inserted into MongoDB successfully.')
    except Exception as e:
        print(f'Error inserting data into MongoDB: {str(e)}')

# Endpoint to query institutions based on state
@app.route('/search', methods=['GET'])
def search_institutions():
    try:
        state = request.args.get('state')
        # Query MongoDB
        institutions = mongo.db.institutions.find({'state': state})

        # Process the query results
        result = [
            {'name': inst['name'], 'state': inst['state'], 'ownership': inst['ownership']}
            for inst in institutions
        ]

        return jsonify({'institutions': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Endpoint to get all institutions from the MongoDB database
@app.route('/all_institutions', methods=['GET'])
def get_all_institutions():
    try:
        institutions = mongo.db.institutions.find()

        # Process the query results
        result = [
            {'name': inst['name'], 'state': inst['state'], 'ownership': inst['ownership']}
            for inst in institutions
        ]

        return jsonify({'institutions': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Register user 
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        data = request.form
        email = data.get('email')
        password = data.get('password')
        
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        user = {'email': email, 'password': hashed_password}
        mongo.db.users.insert_one(user)

        return redirect(url_for('login'))

    return render_template('register.html')

# Login user
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.form
        email = data.get('email')
        password = data.get('password')

        user = mongo.db.users.find_one({'email': email})

        if user and bcrypt.check_password_hash(user['password'], password):
            # Implement session or token-based authentication here
            return redirect(url_for('comments'))
        else:
            return render_template('login.html', message='Invalid credentials')

    return render_template('login.html')

# Comments page
@app.route('/comments')
def comments():
    # Implement logic to retrieve and display comments
    return render_template('comments.html')


# Insert data into MongoDB on startup
insert_data_into_mongo()

if __name__ == '__main__':
    app.run(debug=True)
