import React, { useEffect, useState } from 'react';
import Post from '../type/Post';  // Import the Post type
import PostComponent from './PostComponent';  // Import the PostComponent
import { Link } from 'react-router-dom';
import { getAllPosts } from '../services/PostService';

const MainContent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getAllPosts();
        setPosts(postsData);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch posts');
      }
    };

    fetchPosts();
  }, []);

  const refresh = () => {
    window.location.reload();
  }

  return (
    <div className="max-w-4xl mx-auto mt-3">
      <h1 className="text-4xl font-bold dark:text-gray-300 text-center mb-6">Blog Posts</h1>
      {error !== null ? (
        <div className="flex flex-col items-center justify-center">
          <div className="text-red-500 text-center mb-4">Failed to fetch posts</div>
          <button onClick={refresh} className="max-w-xs bg-green-500 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"> 
            Refresh page
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/posts/${post.slug}`}>
                <PostComponent post={post} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContent;
