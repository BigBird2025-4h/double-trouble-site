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

  // DEBUG SAFETY
  if (!fs.existsSync(filePath)) {
    console.log("Missing file:", filePath);
    return notFound();
  }

  const file = fs.readFileSync(filePath, "utf-8");

  const content = file.split("---").slice(2).join("---");

  return (
    <div className="max-w-3xl mx-auto">
      <pre className="whitespace-pre-wrap text-gray-300">
        {content}
      </pre>
    </div>
  );
}