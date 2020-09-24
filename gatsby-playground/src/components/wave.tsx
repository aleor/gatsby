import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <button
        css={css`
          background: lightseagreen;
          border: none;
          color: white;
          font-size: 1.25rem;
          cursor: pointer;
        `}
        onClick={() => {
          setWaves(waves + 1);
          setClicked(true);
        }}
      >
        {label}
      </button>
      <div
        css={css`
          display: ${clicked ? 'block' : 'none'};
        `}
      >
        Thanks!
      </div>
    </>
  );
};

export default Wave;
