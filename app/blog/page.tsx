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

async function fetchData() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/sheets`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.data as BlogPost[];
}

export default async function BlogPage() {
  const posts = await fetchData();

  return (
    <div className="min-h-screen bg-base-200 p-8">
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
                      target.src = "/api/placeholder/800/400";
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