// app/blog/page.tsx (main blog listing)
import React from "react";
import Link from "next/link";
import { Calendar, User, Clock, ChevronRight } from "lucide-react";

// types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
  readTime?: string;
}

// fetching data
async function fetchData(): Promise<BlogPost[] | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/sheets`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    if (!data || !data.data || !Array.isArray(data.data)) {
      throw new Error("Data format is not as expected");
    }
    return data.data as BlogPost[];
  } catch (error) {
    console.error("Error fetching Data: ", error);
    return null;
  }
}

export default async function BlogPage() {
  const posts = await fetchData();

  // Check if posts data was successfully fetched
  if (!posts) {
    return (
      <div className="min-h-screen bg-base-100 p-8 text-center">
        <h1 className="text-4xl font-bold text-error mb-4">Error Loading Blog Posts</h1>
        <p className="text-base-content/80">Please try again later or contact support.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-success mb-4">Our Blog</h1>
          <div className="h-1 w-32 bg-warning mx-auto rounded-full"></div>
        </header>

        <div className="grid gap-8">
          {posts.map((post) => (
            <div key={post.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {post.imageUrl && (
                <figure className="relative h-64">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/api/placeholder/800/500";
                    }}
                  />
                </figure>
              )}
              
              <div className="card-body">
                <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/70 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-success" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4 text-warning" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-success" />
                    <span>{post.readTime || '5 min read'}</span>
                  </div>
                </div>

                <h2 className="card-title text-2xl text-success hover:text-warning transition-colors duration-200">
                  {post.title}
                </h2>

                <p className="text-base-content/80 line-clamp-3">{post.content}</p>

                <div className="card-actions justify-end mt-4">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="btn btn-ghost btn-sm text-warning hover:text-warning-focus gap-2"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}