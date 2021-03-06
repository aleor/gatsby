import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: Roboto, Sans-Serial;
            line-height: 1.4;
            font-size: 18px;

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-widht: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
