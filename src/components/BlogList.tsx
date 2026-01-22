import { useGetBlogs } from "../hooks/useBlogQueries";
import { BlogCard } from "./BlogCard";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogListProps {
  onBlogSelect: (id: number) => void;
  selectedBlogId: number | null;
}

export const BlogList = ({ onBlogSelect, selectedBlogId }: BlogListProps) => {
  const { data: blogs, isLoading, error } = useGetBlogs();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-40 w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-destructive">
          Error loading blogs. Please try again.
        </p>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">
          No blogs found. Create your first blog!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onBlogSelect(blog.id)}
          isSelected={selectedBlogId === blog.id}
        />
      ))}
    </div>
  );
};
