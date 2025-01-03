// src/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use the useQuery hook with additional options
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts',
    fetchPosts,
    {
      // Set cache time (in milliseconds)
      cacheTime: 1000 * 60 * 5, // 5 minutes

      // Set stale time (in milliseconds)
      staleTime: 1000 * 60 * 1, // 1 minute

      // Prevent refetching when the window is focused
      refetchOnWindowFocus: false,

      // Keep previous data while refetching
      keepPreviousData: true
    }
  );

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {/* Button to manually trigger a refetch */}
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {/* Map over the fetched posts and display them */}
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
