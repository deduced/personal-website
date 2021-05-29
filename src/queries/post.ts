import { graphql } from "gatsby";

export interface IPostFrontmatter {
  author: string;
  date: string;
  slug: string;
  title: string;
}

export type TPost = IPostFrontmatter & {
  excerpt: string;
};

export interface IPostTemplateProps {
  data: {
    mdx: {
      frontmatter: IPostFrontmatter;
      body: string;
    };
  };
}

export interface IPostQueryResult {
  frontmatter: IPostFrontmatter;
  excerpt: string;
}

export const postFragments = graphql`
  fragment IPostFrontmatter on MdxFrontmatter {
    author
    date
    title
    slug
  }
`;
