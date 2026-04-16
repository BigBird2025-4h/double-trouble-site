import Link from "next/link";
import { getPosts } from "lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-blue-500">
        Blog / Media
      </h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-6 rounded-xl border border-[#30363d] hover:shadow-[0_0_20px_rgba(0,0,255,0.2)] transition">
              <h2 className="text-xl font-semibold">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {new Date(post.date).toDateString()}
              </p>

              <p className="text-gray-400 mt-3 text-sm">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}