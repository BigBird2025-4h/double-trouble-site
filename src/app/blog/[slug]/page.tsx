import { getPosts } from "../utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function BlogPost({ params }: any) {
  const { slug } = await params;

  const posts = getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-white">
        <h1 className="text-red-500 text-2xl">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-500 mb-2">
        {post.title}
      </h1>

      <p className="text-gray-500 mb-8">{post.date}</p>

      <article className="prose prose-invert prose-blue max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}