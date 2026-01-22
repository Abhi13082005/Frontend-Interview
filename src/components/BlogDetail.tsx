import { useGetBlogById } from "../hooks/useBlogQueries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogDetailProps {
  blogId: number | null;
}

export const BlogDetail = ({ blogId }: BlogDetailProps) => {
  const { data: blog, isLoading, error } = useGetBlogById(blogId!);

  if (!blogId) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Select a blog to view details</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-destructive">Error loading blog details</p>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="h-full overflow-auto">
      <CardHeader>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="flex flex-wrap gap-2 mb-2">
          {blog.category.map((cat, index) => (
            <Badge key={index} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-3xl">{blog.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{formatDate(blog.date)}</p>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold mb-4">{blog.description}</p>
        <div className="prose prose-sm max-w-none">
          <p className="whitespace-pre-wrap">{blog.content}</p>
        </div>
      </CardContent>
    </Card>
  );
};
