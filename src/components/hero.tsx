import React from "react";
import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";
import { Link, graphql, useStaticQuery } from "gatsby";

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #f2e6fd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p {
    color: #222;
    margin-top: 0;
  }

  a {
    color: #222;
    margin-top: 0.5rem;
  }
`;

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Deducible</h1>
        <p>
          A blog about modern full stack web development, entrepreneurship, and
          data science.
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
