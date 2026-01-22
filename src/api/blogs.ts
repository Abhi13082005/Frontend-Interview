export interface Blog {
  id?: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}

const API_URL = "http://localhost:3001/blogs";

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};
