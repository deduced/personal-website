import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import usePosts, { Post } from "../hooks/use-posts";
import PostPreview from "../components/PostPreview";
import Hero from "../components/Hero";

const IndexPage: React.FC<PageProps> = () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h2>Read My Blog</h2>
        {posts.map((post: Post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};

export default IndexPage;
