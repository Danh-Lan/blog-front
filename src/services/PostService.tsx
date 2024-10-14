import Post from "../type/Post";

async function addCategoryToPost(postId: number, categoryId: number): Promise<Post | null> {
  try {
    const response = await fetch(`http://localhost:8080/api/blog/post/${postId}/add-category/${categoryId}`, {
      method: 'POST'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const postAfterAdded: Post = await response.json();
    return postAfterAdded;

  } catch (error) {
    console.error('Error adding category to post: ', error);
    return null;
  }
}

async function removeCategoryFromPost(postId: number, categoryId: number): Promise<Post | null> {
  try {
    const response = await fetch(`http://localhost:8080/api/blog/post/${postId}/remove-category/${categoryId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const postAfterRemoved: Post = await response.json();
    return postAfterRemoved;

  } catch (error) {
    console.error('Error removing category from post: ', error);
    return null;
  }
}

async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  try {
    const response = await fetch(`http://localhost:8080/api/blog/post/get-by-category/${categoryId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const postsByCategory: Post[] = await response.json();
    return postsByCategory;

  } catch (error) {
    console.error('Error getting posts by category: ', error);
    return [];
  }
}

async function getPostBySlug(slug: string): Promise<Post> {
  try {
    const response = await fetch(`http://localhost:8080/api/blog/post/get/${slug}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const post: Post = await response.json();
    return post;

  } catch (error) {
    console.error('Error fetching post by slug: ', error);
    throw error;
  }
}


async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch('http://localhost:8080/api/blog/post/get-all');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts: Post[] = await response.json();
    return posts;

  } catch (error) {
    console.error('Error fetching posts: ', error);
    throw error;
  }
}

async function createPost(post: Post): Promise<Post | null> {
  try {
    const response = await fetch('http://localhost:8080/api/blog/post/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const createdPost: Post = await response.json();
    return createdPost;

  } catch (error) {
    console.error('Error creating post: ', error);
    return null;
  }
}

async function updatePost(id: number, post: Post): Promise<Post | null> {
  try {
    const response = await fetch(`http://localhost:8080/api/blog/post/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updatedPost: Post = await response.json();
    return updatedPost;

  } catch (error) {
    console.error('Error updating post: ', error);
    return null;
  }
}

async function deletePost(id: number): Promise<boolean> {
  try {
    const response = await fetch(`http://localhost:8080/api/blog/post/delete/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;

  } catch (error) {
    console.error('Error deleting post: ', error);
    return false;
  }
}

export { addCategoryToPost, removeCategoryFromPost, getPostsByCategory, getPostBySlug, getAllPosts, createPost, updatePost, deletePost };