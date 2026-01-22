import { Blog, CreateBlogInput } from "../types/blog";

const API_URL = "http://localhost:3001";

export const blogApi = {
  // Get all blogs
  getAllBlogs: async (): Promise<Blog[]> => {
    const response = await fetch(`${API_URL}/blogs`);
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    return response.json();
  },

  // Get blog by ID
  getBlogById: async (id: number): Promise<Blog> => {
    const response = await fetch(`${API_URL}/blogs/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }
    return response.json();
  },

  // Create new blog
  createBlog: async (blog: CreateBlogInput): Promise<Blog> => {
    const response = await fetch(`${API_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...blog,
        date: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to create blog");
    }
    return response.json();
  },
};
