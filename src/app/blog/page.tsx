import { getPosts } from "./utils";
import Link from "next/link";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-blue-500">
        Blog
      </h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="border border-[#30363d] p-5 rounded-lg hover:shadow-[0_0_20px_rgba(0,0,255,0.25)] transition">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}