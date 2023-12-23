[// src/App.js

import React from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  return (
    <div>
      <h1>Campus Explorer</h1>
      <CommentList />
      <CommentForm />
    </div>
  );
}

export default App;
