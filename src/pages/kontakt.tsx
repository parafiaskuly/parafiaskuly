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

function Kontakt() {
  return (
    <IndexLayout>
      <Helmet>
        <title>Kontakt</title>
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
                <PostFullTitle className="post-full-title">Kontakt</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h6>Parafia Rzymskokatolickia pod wezwaniem św. Apostołów Piotra i Pawła w
                    Skułach
                  </h6>
                  <p>
                    dek. mszczonowski, gm. Żabia Wola, pow. Grodzisk Mazowiecki<br/>
                    ul. Mszczonowska 4<br/>
                    96-321 Skuły
                  </p>
                  <h6>Kancelaria</h6>
                  <p>
                    <strong>Poniedziałek:</strong> 9:00 - 10:00<br/>
                    <strong>Środa:</strong> 8:00 - 10:00<br/>
                    <strong>Piątek:</strong> 16:00 - 17:45<br/>
                    <strong>telefon:</strong> <a href="tel:+48 46 857 98 26">+48 46 857 98 26</a>
                  </p>
                  <h6>Proboszcz</h6>
                  <p>
                    ks. Sławomir Bogdanowicz
                  </p>
                  <h6>Numer parafialnego rachunku bankowego</h6>
                  <p>
                    97 9291 0001 0210 5329 2000 0010
                  </p>
                  <h6>1,5% podatku na remont kościoła</h6>
                  <p>
                    Wypełniając PIT–28, PIT–36, PIT–36L, PIT–37, PIT–38 lub PIT–OP można przekazać 1,5% podatku na remont kościoła. Aby to zrobić w rubryce <em>Wniosek o przekazanie 1,5% podatku należnego na rzecz organizacji pożytku publicznego OPP</em> należy podać nr KRS <strong>0000252350</strong> należący do Caritas Diecezji Łowickiej. <em>Ważne jest, żeby jako cel szczegółowy wpisać <strong>Na remont kościoła Parafii Rzymskokatolickiej pod wezwaniem św. Apostołów Piotra i Pawła w Skułach</strong></em>.
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

export default Kontakt;
