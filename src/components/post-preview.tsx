import React from "react";
import Image from "gatsby-image";
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
        display: flex;
        margin-top: 0;
        padding-bottom: 1rem;
        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100%;
        `}
      >
        <Image
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={post.title}
          fluid={post.image.sharp.fluid}
        />
      </Link>
      <div>
        <h3>
          <Link to={post.slug}>{post.title}</Link>
        </h3>

        <p>{post.excerpt}</p>

        <ReadLink to={post.slug}>Read this post</ReadLink>
      </div>
    </article>
  );
};

export default PostPreview;
