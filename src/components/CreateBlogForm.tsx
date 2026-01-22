import { useState } from "react";
import { useCreateBlog } from "../hooks/useBlogQueries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const CreateBlogForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    coverImage: "",
    content: "",
  });

  const createBlogMutation = useCreateBlog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const categoryArray = formData.category
      .split(",")
      .map((cat) => cat.trim().toUpperCase())
      .filter((cat) => cat.length > 0);

    try {
      await createBlogMutation.mutateAsync({
        title: formData.title,
        category: categoryArray,
        description: formData.description,
        coverImage: formData.coverImage,
        content: formData.content,
      });

      // Reset form and close dialog
      setFormData({
        title: "",
        category: "",
        description: "",
        coverImage: "",
        content: "",
      });
      setOpen(false);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Create New Blog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <Label htmlFor="category">Categories (comma-separated)</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
              placeholder="e.g., TECH, FINANCE"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
              placeholder="Enter a short description"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="coverImage">Cover Image URL</Label>
            <Input
              id="coverImage"
              value={formData.coverImage}
              onChange={(e) =>
                setFormData({ ...formData, coverImage: e.target.value })
              }
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
              placeholder="Enter the full blog content"
              rows={8}
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={createBlogMutation.isPending}>
              {createBlogMutation.isPending ? "Creating..." : "Create Blog"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>

          {createBlogMutation.isError && (
            <p className="text-sm text-destructive">
              Error creating blog. Please try again.
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
