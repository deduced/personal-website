import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

export interface IPostFrontmatter {
  author: string;
  date: string;
  image: {
    sharp: {
      fluid: FluidObject;
    };
  };
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
    image {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    title
    slug
  }
`;
