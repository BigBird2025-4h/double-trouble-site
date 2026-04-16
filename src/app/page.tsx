import Hero from "../components/Hero";
import Sections from "../components/Sections";
import { getPosts } from "../lib/posts";

export default function Home() {
  const posts = getPosts();
  const latest = posts[posts.length - 1];

  return (
    <>
      <Hero />
      <Sections latestPost={latest} />
    </>
  );
}