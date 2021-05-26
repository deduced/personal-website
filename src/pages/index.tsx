import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

// markup
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>My Website</h1>
      <p>Coming soon! </p>
    </Layout>
  );
};

export default IndexPage;
