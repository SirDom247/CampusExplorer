// CommentList.js

import React, { useState, useEffect } from 'react';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Implement logic to fetch comments from the backend (via API, for example)
    // Update the comments state with the fetched data
    const fetchData = async () => {
      try {
        const response = await fetch('/api/comments'); // Update the API endpoint
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;

