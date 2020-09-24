import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';

const Index = () => {
  const posts = usePosts();

  return (
    <Layout>
      <h2>Hi all, fancy title here</h2>
      <hr></hr>
      <h3>Blog posts:</h3>
      {posts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  );
};

export default Index;
