import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const Index = () => {
  return (
    <Layout>
      <h1>Home / Index page</h1>
      <Link to="/about">To About page</Link>
    </Layout>
  );
};

export default Index;
