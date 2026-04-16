import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "src/content/blog",
    `${params.slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {params.slug.replace(/-/g, " ")}
      </h1>

      <pre className="whitespace-pre-wrap text-gray-300">
        {content}
      </pre>
    </div>
  );
}