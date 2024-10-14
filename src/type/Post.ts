import Category from "./Category";

interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  frontMatter: string;
  categories: Set<Category>;
  createdAt: Date;
  updatedAt: Date; 
};

export default Post;