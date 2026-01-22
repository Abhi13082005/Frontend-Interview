import { Blog } from "../types/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  blog: Blog;
  onClick: () => void;
  isSelected?: boolean;
}

export const BlogCard = ({ blog, onClick, isSelected }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card
      className={`cursor-pointer hover:shadow-lg transition-shadow ${
        isSelected ? "ring-2 ring-primary" : ""
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {blog.category.map((cat, index) => (
            <Badge key={index} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl">{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{blog.description}</p>
        <p className="text-xs text-muted-foreground">{formatDate(blog.date)}</p>
      </CardContent>
    </Card>
  );
};
