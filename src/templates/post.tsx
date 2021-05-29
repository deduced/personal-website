import React from "react";
import { format } from "date-fns";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import ReadLink from "../components/read-link";

interface PostTemplateProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        author: string;
        date: string;
      };
      body: string;
    };
  };
}

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`;

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const post = data.mdx;
  const formattedDate = format(new Date(post.frontmatter.date), "yyyy/dd/MM");

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        posted on {formattedDate}
      </p>

      <p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </p>
      <ReadLink to="/">Back to all posts</ReadLink>
    </Layout>
  );
};
export default PostTemplate;
