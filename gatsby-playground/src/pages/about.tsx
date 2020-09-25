import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <h4>
      Gatsvy playground for: components, MDX, hooks, images (via gatsby
      plugins).
    </h4>
    <hr />
    <Link to="/">To Home page</Link>
  </Layout>
);

export default SecondPage;
