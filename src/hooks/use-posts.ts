import { graphql, useStaticQuery } from "gatsby";
import { IPostQueryResult } from "../queries/post";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            author
            date
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#70478F", highlight: "#D3DB84" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            slug
            title
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post: IPostQueryResult) => ({
    author: post.frontmatter.author,
    date: post.frontmatter.date,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
  }));
};

export default usePosts;
