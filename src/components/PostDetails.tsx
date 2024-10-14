import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../type/Post';
import { getPostBySlug } from '../services/PostService';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

import '../styles/post-details.css';

const PostDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post>();
  const [error, setError] = useState<string | null>(null);
  const [fetchTrigger, setFetchTrigger] = useState(false);
  // if there's error with the fetch, fetchTrigger change state to call useEffect
  // the current boolean of fetchTrigger means nothing

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postData = await getPostBySlug(slug!);
        setPost(postData);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch post');
      }
    };

    fetchPosts();
  }, [slug, fetchTrigger]);

  const refresh = () => {
    setFetchTrigger(prev => !prev);
  }

  if (!post) {
    return <></>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-3">
      {error !== null ? (
        <div className="flex flex-col items-center justify-center">
          <div className="text-red-500 text-center mb-4">Failed to fetch posts</div>
          <button onClick={refresh} className="max-w-xs bg-green-500 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"> 
            Refresh page
          </button>
        </div>
      ) : (
        <div className="p-6 max-w-3xl mx-auto">
          <h1 className="text-4xl dark:text-gray-300 font-bold mb-4">{post.title}</h1>
          {/* <ReactMarkdown className="prose dark:prose-invert text-lg dark:text-gray-300" rehypePlugins={[rehypeRaw] as never}>{post.content}</ReactMarkdown> */}
          <ReactMarkdown
            className="prose dark:prose-invert text-lg dark:text-gray-300"
            rehypePlugins={[rehypeRaw] as never}
            components={{
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              figure: ({ node, ...props }) => (
                <figure className="text-center my-4">
                  {props.children}
                </figure>
              ),
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              figcaption: ({ node, ...props }) => (
                <figcaption className="italic text-gray-500 dark:text-gray-400 mt-2">
                  {props.children}
                </figcaption>
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
