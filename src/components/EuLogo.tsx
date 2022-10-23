import React from 'react';
import { css } from '@emotion/react';

export const EuLogo: React.FC = () => {
  return (
    <div>
      <div css={EuLogoPhantom} />
      <div css={EuLogoCss}>
        <a href=""><span css={HideCss}>Fundusze Unijne</span></a>
      </div>
    </div>
  );
};

const EuLogoCss = css`
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
`;

const EuLogoPhantom = css`
  display: block;
  padding: 20px;
  height: 60px;
  width: 100%;
`;

const HideCss = css`
  display: none;
`;

