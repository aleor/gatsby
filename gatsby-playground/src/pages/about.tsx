import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <h2>This is About page.</h2>
    <Link to="/">To Home page</Link>
  </Layout>
);

export default SecondPage;
