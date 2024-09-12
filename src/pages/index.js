import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby site!">
      <p>I'm making this by following the Gatsby tutorial.</p>
    </Layout>
  );
};
export default IndexPage;

export const Head = () => <title>Home Page</title>;
