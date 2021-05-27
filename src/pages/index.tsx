import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/layout";
import usePosts, { Post } from "../hooks/use-posts";
import PostPreview from "../components/post-preview";
import Hero from "../components/hero";

const IndexPage: React.FC<PageProps> = () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h2>Latest Blog Posts</h2>
        {posts.map((post: Post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};

export default IndexPage;
