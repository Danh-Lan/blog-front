import React from 'react';
import Post from '../type/Post';

const PostComponent: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="p-4 bg-white dark:bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">{post.title}</h2>
      <p className="text-gray-600 dark:text-gray-500 mb-6">{post.frontMatter}</p>
      <div className="flex flex-wrap">
        {post.categories && Array.from(post.categories).map((category, index) => (
          <span key={index} className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full">
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostComponent;
