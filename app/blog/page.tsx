// app/blog/page.tsx (main blog listing)
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, User, Clock, ChevronRight } from "lucide-react";

// types/blog.ts
export interface BlogPost {
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

  // Function to truncate content
  const truncateContent = (content: string, length = 150) => {
    return content.length > length ? content.substring(0, length) + '...' : content;
  };

  // Client-side component for handling state
  const BlogCard = ({ post }: { post: BlogPost }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-[400px]'}`}>
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

          <div className="transition-all duration-300 overflow-hidden" style={{ maxHeight: isExpanded ? '1000px' : '100px' }}>
            {isExpanded ? post.content : truncateContent(post.content)}
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn btn-ghost btn-sm text-warning hover:text-warning-focus gap-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
            <ChevronRight className="w-4 h-4 transform transition-transform" style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-success mb-4">Our Blog</h1>
          <div className="h-1 w-32 bg-secondary mx-auto rounded-full"></div>
        </header>

        <div className="grid gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}