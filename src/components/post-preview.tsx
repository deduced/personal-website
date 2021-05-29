import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import { TPost } from "../queries/post";
import ReadLink from "./read-link";

interface PostPreviewProps {
  post: TPost;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;
        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>

      <p>{post.excerpt}</p>

      <ReadLink to={post.slug}>Read this post</ReadLink>
    </article>
  );
};

export default PostPreview;
