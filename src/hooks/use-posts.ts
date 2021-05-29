import { graphql, useStaticQuery } from "gatsby";
import { TPost, IPostQueryResult } from "../queries/post";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            author
            date
            slug
            title
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(
    (post: IPostQueryResult) =>
      ({
        author: post.frontmatter.author,
        date: post.frontmatter.date,
        excerpt: post.excerpt,
        slug: post.frontmatter.slug,
        title: post.frontmatter.title,
      } as TPost)
  );
};

export default usePosts;
