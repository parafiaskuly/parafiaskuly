import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import {
 NoImage, PostFull, PostFullHeader, PostFullTitle,
} from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

function Msze() {
  return (
    <IndexLayout>
      <Helmet>
        <title>Msze Święte</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false}/>
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">Msze Święte</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h5>Czas letni</h5>
                  <p>
                    <strong>Niedziele i Święta:</strong> 09:00, 12:00
                    <br/>
                    <strong>Dni powszednie:</strong> 18:00
                  </p>
                  <h5>Czas zimowy</h5>
                  <p>
                    <strong>Niedziele i Święta:</strong> 09:00, 12:00
                    <br/>
                    <strong>Dni powszednie:</strong> 17:00
                  </p>
                </div>
              </PostFullContent>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">Nabożeństwa</PostFullTitle>
              </PostFullHeader>
              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <strong>Majówka i nabożeństwo czerwcowe</strong> po Mszy św. wieczornej
                  <h5>Adwent</h5>
                  <p>
                    <strong>Roraty (środy i soboty):</strong> 07:15
                  </p>
                  <h5>Wielki Post</h5>
                  <p>
                    <strong>Droga Krzyżowa</strong> pół godziny przed Mszą św. wieczorną
                  </p>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer/>
      </Wrapper>
    </IndexLayout>
  );
}

export default Msze;
