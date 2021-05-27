import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import usePosts, { Post } from "../hooks/use-posts";
import { PostResult } from "../hooks/use-posts";
import PostPreview from "../components/PostPreview";

// markup
const IndexPage: React.FC<PageProps> = () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Coming Soon!</h1>
      <p>
        A blog about modern full stack web development, entrepreneurship, and
        some data science sprinkled in.
      </p>

      <h2>Read My Blog</h2>
      {posts.map((post: Post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default IndexPage;
