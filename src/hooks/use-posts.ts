import { graphql, useStaticQuery } from "gatsby";

export type PostResult = {
  frontmatter: {
    author: string;
    slug: string;
    title: string;
  };
  excerpt: string;
};

export type Post = {
  author: string;
  slug: string;
  title: string;
  excerpt: string;
};

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            author
            slug
            title
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(
    (post: PostResult) =>
      ({
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        slug: post.frontmatter.slug,
        excerpt: post.excerpt,
      } as Post)
  );
};

export default usePosts;
