import { Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const About: React.FC<PageProps> = ({}) => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        A blog about full stack web development, entrepreneurship, and data
        science. The focus is on practical applications, but I'll will include
        bug-fixes or any other content that I think might be useful to myself or
        the community at large.
      </p>
      <p>
        This blog is open-source, so feel free to{" "}
        <Link to="https://github.com/deduced/personal-website">
          poke around.
        </Link>
      </p>
      <p>
        Find me on:
        <ul>
          <li>
            <Link to="https://github.com/deduced" target="_blank">
              GitHub
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/carlos-astrada/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </p>
    </Layout>
  );
};

export default About;
