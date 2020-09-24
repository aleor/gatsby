import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1 rem;
      }
    `}
  >
    <h4>
      <Link to={post.slug}>{post.title}</Link>
    </h4>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>read the post &rarr;</ReadLink>
  </article>
);

export default PostPreview;
