import { useState } from "react";
import BlogList from "../BlogList";
import BlogDetail from "../BlogDetail";

export default function Home() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <h1 className="text-3xl font-bold">CA Monk Blog</h1>
          <p className="text-gray-500 mt-1">
            Stay updated with the latest trends in finance, accounting, and
            career growth
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT SIDEBAR */}
        <aside className="space-y-4">
          <h2 className="font-semibold text-lg">Latest Articles</h2>
          <BlogList onSelect={setSelectedBlogId} />
        </aside>

        {/* RIGHT CONTENT */}
        <section className="md:col-span-2 bg-white rounded-lg shadow p-6">
          {selectedBlogId ? (
            <BlogDetail id={selectedBlogId} />
          ) : (
            <p className="text-gray-500">Select an article to read</p>
          )}
        </section>
      </main>
    </div>
  );
}
