import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h1>OH SNAP!! </h1>
      <p>We got a 404 up in here! </p>
      <Link to="/">Back to home</Link>
    </Layout>
  );
};

export default NotFoundPage;
