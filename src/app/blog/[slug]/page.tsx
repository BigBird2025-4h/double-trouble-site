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

  const file = fs.readFileSync(filePath, "utf-8");

  // crude split (frontmatter removed)
  const content = file.split("---").slice(2).join("---");

  return (
    <div className="max-w-3xl mx-auto">
      <article className="prose prose-invert">
        {content}
      </article>
    </div>
  );
}