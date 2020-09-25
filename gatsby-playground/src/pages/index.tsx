import { Link } from 'gatsby';
import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/usePosts';

const Index = () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h3>Blog posts</h3>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};

export default Index;
