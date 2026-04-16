import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

function parseFrontmatter(fileContent: string) {
  const match = fileContent.match(/---([\s\S]*?)---/);
  const frontmatter = match?.[1] ?? "";

  const lines = frontmatter.split("\n").filter(Boolean);

  const data: Record<string, string> = {};

  for (const line of lines) {
    const [key, ...value] = line.split(":");
    data[key.trim()] = value.join(":").trim();
  }

  return data;
}

export function getPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const frontmatter = parseFrontmatter(fileContent);

    return {
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || "1970-01-01",
      description: frontmatter.description || "",
    };
  });

  // SORT BY DATE (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}