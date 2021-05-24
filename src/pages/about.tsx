import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const About: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is my web site</p>
      <Link to="/">Back to home</Link>
    </Layout>
  );
};

export default About;
