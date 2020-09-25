import React from 'react';
import useInstagram from '../hooks/useInstagram';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

const Insta = () => {
  const instaPhoto = useInstagram();
  const { username } = instaPhoto[0];
  return (
    <div
      css={css`
        margin-top: 2rem;
      `}
    >
      <h3>Latest Instagram posts from @gatsbyjs (instagram id: {username})</h3>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
        `}
      >
        {instaPhoto.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}/`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;

                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
      </div>
      <p>Sample of polling data from third-party source (Instagram). </p>
      <a href="https://www.gatsbyjs.com/plugins/?=source" target="_blank">
        600+ plugins for other datasources
      </a>
    </div>
  );
};

export default Insta;
