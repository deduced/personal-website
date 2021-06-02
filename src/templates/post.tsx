import React from "react";
import { format } from "date-fns";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { IPostTemplateProps } from "../queries/post";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import ReadLink from "../components/read-link";
import Link from "../components/link";

const PostTemplate: React.FC<IPostTemplateProps> = ({ data }) => {
  const post = data.mdx;
  const formattedDate = format(new Date(post.frontmatter.date), "yyyy/MM/dd");

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
        <MDXProvider
          components={{
            a: Link,
          }}
        >
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </p>
      <ReadLink to="/">Back to all posts</ReadLink>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date
        title
      }
      body
    }
  }
`;

export default PostTemplate;
