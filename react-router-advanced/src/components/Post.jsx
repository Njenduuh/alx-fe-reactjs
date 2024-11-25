// src/pages/Post.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();  // Get the dynamic parameter from the URL

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>Here’s the content of blog post {postId}...</p>
    </div>
  );
};

export default Post;
