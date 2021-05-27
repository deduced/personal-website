import { Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const About: React.FC<PageProps> = ({}) => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Proper write-up coming soon. For now, you can check out my</p>
      <Link to="https://github.com/deduced" target="_blank">
        GitHub profile
      </Link>{" "}
      or{" "}
      <Link to="https://www.linkedin.com/in/carlos-astrada/" target="_blank">
        LinkedIn profile
      </Link>
      .
    </Layout>
  );
};

export default About;
