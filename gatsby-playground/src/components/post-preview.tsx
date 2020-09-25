import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from './read-link';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1 rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            maring-top: 0;
          }
        `}
        alt={post.title}
      />
    </Link>
    <div>
      <h4>
        <Link to={post.slug}>{post.title}</Link>
      </h4>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read the post &rarr;</ReadLink>
    </div>
  </article>
);

export default PostPreview;
