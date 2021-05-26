import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

// markup
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Coming Soon!</h1>
      <p>
        A blog about modern full stack web development, entrepreneurship, and
        some data science sprinkled in.
      </p>
    </Layout>
  );
};

export default IndexPage;
