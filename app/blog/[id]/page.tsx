import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

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

async function fetchPost(id: string) {
  const response = await fetch(`/api/sheets/${id}`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data.data as BlogPost;
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="btn btn-ghost btn-sm mb-6 inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="card bg-base-100 shadow-xl">
          {post.imageUrl && (
            <figure className="relative h-96">
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

          <div className="card-body prose max-w-none">
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

            <h1 className="card-title text-3xl text-success mb-6">
              {post.title}
            </h1>

            <div className="text-base-content/80">
              {post.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}