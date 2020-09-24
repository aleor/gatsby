import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <h2>Page 2</h2>
    <Link to="/">Home page</Link>
  </Layout>
);

export default SecondPage;
