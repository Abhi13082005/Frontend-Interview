import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { blogApi } from "../services/blogApi";
import { CreateBlogInput } from "../types/blog";

// Query keys
export const blogKeys = {
  all: ["blogs"] as const,
  detail: (id: number) => ["blogs", id] as const,
};

// Get all blogs
export const useGetBlogs = () => {
  return useQuery({
    queryKey: blogKeys.all,
    queryFn: blogApi.getAllBlogs,
  });
};

// Get blog by ID
export const useGetBlogById = (id: number | null) => {
  return useQuery({
    queryKey: id ? blogKeys.detail(id) : ["blogs", "null"],
    queryFn: () => {
      if (!id) throw new Error("No ID provided");
      return blogApi.getBlogById(id);
    },
    enabled: !!id,
  });
};

// Create blog mutation
export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blog: CreateBlogInput) => blogApi.createBlog(blog),
    onSuccess: () => {
      // Invalidate and refetch blogs list
      queryClient.invalidateQueries({ queryKey: blogKeys.all });
    },
  });
};
