import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");

      return {
        slug,
        title: slug.replace(/-/g, " "),
      };
    });
}