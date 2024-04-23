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

function StaticContent() {
  return (
    <IndexLayout>
      <Helmet>
        <title>Dofinansowanie</title>
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
                <PostFullTitle className="post-full-title">Dofinansowanie</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h3>Historia</h3>
                  <p>
                    Mamy w Polsce piękny, jeden z nielicznych, drewnianych zabytków, którego historia sięga jeszcze najlepszych czasów
                    Korony Królestwa Polskiego i Najjaśniejszej Rzeczpospolitej. We wsi Skuły (mazowieckie) pierwszy kościół zbudowany
                    został w poł. XIV w., później na jego miejscu powstał kolejny, drewniany w XVI w., lecz nie przetrwał potopu
                    szwedzkiego. Obecny kościół pw. Świętych Piotra i Pawła zbudowano w 1674 r. dzięki staraniom miejscowego dziedzica
                    Seweryna Skulskiego i wizytatora Misjonarzy ks. Mikołaja Dufaerroy.<br/>
                    Stanowi przykład ludowej architektury sakralnej z wnętrzem ozdobionym iluzjonistyczną polichromią wykonaną na płótnie.
                    Jest niewielki i z zewnątrz dość skromny, ale zachwyca skąpanym w lekkim półmroku wnętrzem.

                    Przetrwał do dziś dzięki temu, że nasi przodkowie nie szczędzili uwagi, środków ani wysiłków – nawet podczas II wojny
                    światowej. By tylko wspomnieć największe prace:

                    <ul>
                      <li>Po stu latach w 1774 r. kościół przeszedł gruntowny remont, podczas którego dobudowano zakrystię, a ściany obito
                        płótnem, na którym wykonano malowidła – polichromie.
                      </li>
                      <li>W latach 1889-1894, pod kierunkiem architekta Juliana Ankwicza kościół przeszedł kolejny remont (m.in. wymieniono
                        podwaliny, wyremontowano konstrukcję dachową, wymieniono gontowe pokrycie dachowe na nowe).
                      </li>
                      <li>W latach 1895-1900 kościół odmalowano od zewnątrz, a wnętrze częściowo przemalowano oraz uzupełniono malowidła.</li>
                      <li>W 1927 r. w świątyni wymieniono na nowe podwaliny i pokryto dach blachą.</li>
                      <li>W latach 1939-1940 wykonane zostało ogrodzenie świątyni.</li>
                      <li>W latach 1980-1982 – miały miejsce kolejne prace ciesielskie w kościele przy remoncie więźby dachowej oraz konstrukcji ścian, jak również wymieniono podwaliny.</li>
                      <li>Ostatni większy remont miał miejsce w 1995 r. Wymieniono wówczas dźwigary, podłogę, szalunek, o 30 cm podniesiono
                        zakrystię i prezbiterium oraz wyremontowano poddasze. Teren kościoła otoczono ogrodzeniem i uporządkowano teren
                        przykościelny.
                      </li>
                    </ul>

                    Osiemnastowieczne wyposażenie kościoła wykonane jest w drzewie modrzewiowym. Ołtarz główny, dedykowany Chrystusowi
                    Ukrzyżowanemu i ołtarze boczne, z obrazami Wniebowzięcia Najświętszej Maryi Panny i Matki Bożej, utrzymane są w stylu
                    barokowym, natomiast ambona, chrzcielnica i konfesjonały w stylu rokokowym. Na chórze muzycznym zainstalowano organy
                    napędzane miechem nożnym, zbudowane przez Z. Kamińskiego w latach trzydziestych XX w.<br/>
                    Dziś zabytek jest w bardzo złym stanie technicznym. Przeciekający dach niszczy sztukaterie i polichromię. Przecieki
                    mają również bezpośredni wpływ na konstrukcję więźby i pozostałe pomieszczenia znajdujące się pod przeciekającym
                    dachem i stropem.<br/>
                    <br/>
                    Teraz nasza kolej, by uchronić przed całkowitą degradacją tak cennego, niemego świadka historii dziejów naszego narodu,
                    by służył kolejne 100 lat jako świątynia, dziedzictwo i pomnik następnym pokoleniom.
                  </p>
                  <h3>Zakres prac remontowych</h3>

                  <p>
                    Aby uchronić ten unikalny zabytek zostały zaplanowane niezbędne prace na terenie kościoła i wokół niego. W ramach
                    projektu planuje się wykonanie prac renowacyjnych, których celem będzie zatrzymanie degradacji zabytkowego kościoła w
                    Skułach.
                  </p>
                  <p>
                    Prace wykonywane w kościele w Skułach:

                    <ul>
                      <li>Od wnętrza kościoła postemplować wszystkie stropy w odległości 50 cm od ścian.</li>
                      <li>Rozebrać pokrycie kościoła z blachy wraz z deskowaniem.</li>
                      <li>Wszystkie elementy konstrukcyjne stropów i więźb z objawami porażenia przez korozję
                        biologiczną należy dokładnie przejrzeć, ociosać i oczyścić z destruktu.
                      </li>
                      <li>Przeprowadzić szczegółową ocenę stanu technicznego konstrukcji (bale, lisice, oczepy).</li>
                      <li>Usunąć destrukt stanowiący produkt korozji biologicznej z bali, wykonać flekowanie ubytków.
                        Szacunkowo można przyjąć około 20%wymiany całej kubatury ścian gr. 15 cm.
                      </li>
                      <li>Od strony wewnętrznej w sposób konserwatorski zdemontować obudowę deskową lisic-pilastrów.
                        Ocenić stan techniczny lisic oraz bali w strefie lisic.
                      </li>
                      <li>Wymienić deski okapowe pod odtworzoną szalówką.</li>
                      <li>Wykonać nowe pokrycie wraz z obróbkami, orynnowaniem i rurami spustowymi z blachy
                        tytanowo–cynkowej gr. 0,7 mm ułożonej na podwójny rąbek stojący z zastosowaniem membrany
                        systemowej pod blachę.
                      </li>
                      <li>Naprawić wykończenie podmurówki kamiennej poprzez skucie odspajających się tynków, wyrównanie
                        i wygładzenie zaprawą cementową.
                      </li>
                      <li>Wokół kościoła wykonać nową opaskę żwirową o szer. 50cmi grubości min 10 cm, z obrzeżem
                        granitowym ze spadkiem od kościoła min 3% wg.
                      </li>
                      <li>Wykonać konserwację okien oraz drzwi drewnianych zewnętrznych wejściowych. Należy wykonać
                        następujące prace budowlano–konserwatorskie przy dzwonnicy:
                        <ul>
                          <li>Rozebrać istniejące schody i wykonać nowe schody betonowe wraz z podestem.</li>
                          <li>Podest oraz schody zaopatrzyć w drewnianą balustradę o wysokości 110 cm.</li>
                          <li>Pękniętą podmurówkę wzmocnić.</li>
                        </ul>
                      </li>
                    </ul>

                    Przy wskazanych pracach ujęte zostało wykonanie robót dodatkowych, co jest podyktowane charakterem
                    przedmiotowej inwestycji. Renowacja obiektu zabytkowego niesie za sobą roboty nieprzewidziane
                    i niewidoczne na etapie dokumentacji. W tej pozycji uwzględniono około 20% robót, które mogą wystąpić.
                  </p>

                  <p>
                    Prace wykonywane wokół kościoła w Skułach:
                    <ul>
                      <li>Wymiana nawierzchni — projektuje się nawierzchnię z kostki kamiennej granitowej o wymiarach
                        7/9 w kolorze szaro żółtym lub szaro rudym. Obrzeże granitowe o wymiarach 8 × 25 (h) cm.
                      </li>
                      <li>Wymiana opaski betonowej wokół kościoła — w miejsce istniejącej opaski betonowej wykonać
                        opaskę żwirową z płukanego kolorowego żwiru rzecznego (kolor beżowy i żółty).
                        Szerokość opaski 50 cm ze spadkiem min 3% od kościoła. Grubość warstwy żwiru oraz podbudowy z
                        podsypki piaskowej min 10 cm. Obrzeże granitowe o wymiarach 6 × 20 (h) cm.
                      </li>
                      <li>Nowo projektowana brama od strony zachodniej — projektuje się bramę metalową o szerokości 250
                        cm i wysokości 170 cm
                      </li>
                      <li>Obiekty małej architektury — drewniane obiekty małej architektury takie jak figury Apostołów
                        Piotra i Pawła oraz św. Jana Pawła II, drewniany krzyż i kaplica nie wymagają specjalistycznych
                        zabiegów konserwatorskich. Należy je poddać bieżącej konserwacji. To samo dotyczy tablicy
                        pamiątkowej poświęconej księdzu prałatowi Marianowi Laskowskiemu.
                      </li>
                      <li>Pękniętą betonową podstawę zegara słonecznego należy poddać konserwacji i reperacji
                        metodami ogólnobudowlanymi oraz dwukrotnie pomalować w kolorze białym — analogicznym
                        jak obecnie.
                      </li>
                      <li>Elementy wyposażenia parkowego — Tablica informacyjna — demontaż tablicy wraz z
                        dwuteownikami, uzupełnienie uszkodzonych warstw malarskich (krawędzie) i odświeżenie
                        całej powierzchni profili.
                      </li>
                    </ul>
                  </p>
                  <h3>Koszty</h3>
                  <ul>
                    <li>Całkowita wartość projektu — 1.665.385,42 zł brutto</li>
                    <li>Podstawa obliczenia dotacji (koszty kwalifikowane) — 1.249.383,88 zł netto</li>
                    <li>Wartość dotacji UE (80% kosztów kwalifikowanych) — 999.507,10 zł</li>
                    <li>Wartość wkładu własnego (20% kosztów kwalifikowanych) — 249.876,78 zł</li>
                    <li>Wartość podatku VAT (23%), którego nie możemy odzyskać — 416.001,54 zł</li>
                    <li>RAZEM WKŁAD WŁASNY WRAZ Z PODATKIEM VAT POTRZEBNY DO ZABEZPIECZENIA NA CAŁĄ REALIZACJĘ PROJEKTU,
                      KTÓRA BĘDZIE TRWAŁA DO KOŃCA LIPCA 2023 r. — 665.878,32 zł
                    </li>
                  </ul>
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

export default StaticContent;
