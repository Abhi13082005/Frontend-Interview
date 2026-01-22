import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BlogList } from "./components/BlogList";
import { BlogDetail } from "./components/BlogDetail";
import { CreateBlogForm } from "./components/CreateBlogForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function BlogApp() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">CA Monk Blog</h1>
            <p className="text-muted-foreground">
              Stay updated with the latest trends in finance, accounting, and
              career growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Panel - Blog List */}
            <div className="space-y-4">
              <CreateBlogForm />
              <div className="h-[calc(100vh-20rem)] overflow-y-auto pr-2">
                <BlogList
                  onBlogSelect={setSelectedBlogId}
                  selectedBlogId={selectedBlogId}
                />
              </div>
            </div>

            {/* Right Panel - Blog Detail */}
            <div className="h-[calc(100vh-16rem)] sticky top-20">
              <BlogDetail blogId={selectedBlogId} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogApp />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
