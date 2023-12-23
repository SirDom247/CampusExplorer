// CommentForm.js

import React, { useState } from 'react';

const CommentForm = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the comment to the backend API
      const response = await fetch('http://localhost:5000/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });

      if (response.ok) {
        console.log('Comment submitted successfully!');
        setComment('');
      } else {
        console.error('Failed to submit comment.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your comment here..."
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
