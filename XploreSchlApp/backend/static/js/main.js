 // static/js/main.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM is ready.');

    // Form submission
    document.getElementById('commentForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the comment text from the textarea
        const commentText = document.getElementById('commentText').value;

        // Make an API request to submit the comment
        axios.post('http://localhost:5000/api/comments', {
            comment: commentText,
            // Include any additional fields like user_id if needed
        })
        .then(response => {
            console.log('Comment submitted successfully:', response.data.message);

            // Update the UI (optional)
            addCommentToUI({
                text: commentText,
                username: 'Current User',  // Replace with the actual username or user data
                timestamp: new Date().toISOString(),  // Use the current timestamp
            });

            // Optionally, show a success message
            alert('Comment submitted successfully!');
        })
        .catch(error => {
            console.error('Error submitting comment:', error.response.data.error);

            // Optionally, show an error message
            alert('Error submitting comment. Please try again.');
        });

        // Clear the comment textarea after submission
        document.getElementById('commentText').value = '';
    });

    // Function to add a new comment to the UI
    function addCommentToUI(comment) {
        const commentsContainer = document.getElementById('commentsContainer');

        // Create a new comment element
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <p>${comment.text}</p>
            <p>By: ${comment.username} | Posted on: ${comment.timestamp}</p>
        `;

        // Append the new comment to the comments container
        commentsContainer.appendChild(commentElement);
    }
});
