<script lang="ts">
  import { Link, Picture } from '@components'

  import { isOpen } from '@stores/aboutPageStore'

  if (typeof window !== 'undefined' && window.location.hash === '#about') {
    isOpen.set(true)
  }
</script>

<div class="about-page" class:visible={$isOpen}>
  <div class="content">
    <div>
      <div>
        <Picture
          imgClass="about-page-img"
          src="/img/me3.jpg"
          height="800"
          width="800"
          alt=""
          role="presentation"
        />

        <!-- <p>
          LITTO / Daniela Weiss
          <br />
          *1984, Vienna
        </p> -->
      </div>

      <h4 class="header">
        Rules are undefined, rites are reversed and perception is twisted, places participate as
        players, identities become blurred and time glitches away.
      </h4>

      <p class="clearboth">
        Litto / Daniela Weiss is a media artist who examines the worlds of analogue and digital art
        in form of VR and AR installations. Having a background in visual arts and applied Business
        Administration, she also began her studies in digital art in 2017 and Experimental Game
        Cultures in 2021 (Vienna University of Applied Arts), expanding her artistic research from
        interaction design and UX Design to the field of mixed reality. In 2020, she co-founded the
        web-based AR platform
        <Link class="dark underline" href="https://artificialmuseum.com">
          the Artificial Museum
        </Link>
        and build interactive AR sculptures in public space. The mirror is a continuous symbol in her
        work.
      </p>

      <div class="cv">
        <h5>Individual participation in Exhibitions/Festivals/Conferences (selected)</h5>

        <ul>
          <li>
            2023 »Aaron Swartz« <b>ARS Electronica 2023</b> In cooperation with Schuberttheater and Hidéo
            SNES, Linz, Austria
          </li>
          <li>2023 »Reterritorialized Spaces«, <b>Parallel Vienna</b>, ArteCont, Austria</li>

          <li>
            2023 »Reterritorialized Spaces« <b>Wiener Lichtblicke</b>, Justizpalast, Vienna, Austria
          </li>

          <li>2023 »Das Vorspiel« <b>ARSE Electronica</b>, Monochrom, Linz, Austria</li>
          <li>
            2023 »Reterritorialized Spaces« <b>Vienna Digital Summer</b>, ArteCont, Virtual
            Exhibition Vienna, Austria
          </li>
          <li>
            2023 »Reterritorialized Spaces« <b>Symposion Lindabrunn</b>, Enzesfeld-Lindabrunn,
            Austria
          </li>
          <li>
            2023 »Inside Out« with Hidéo SNES <b>Gallery Frewein-Kazakbaev</b>, Vienna, Austria
          </li>
          <li>2023 »Game Over or Replay«, <b>A MAZE Festival</b>, Berlin, Germany</li>
          <br />
          <li>
            2022 »Game Over or Replay«, Next Generation, <b>Galarie Monfort</b>, Portorož, Slovenia
          </li>
          <li>
            2022 »Real Mirror« Re.pairing Future, Digital Art Dep. <b>CRIATECH Festival 2022</b>,
            Aveiro, Portugal
          </li>
          <li>2022 »Reterritorialized Spaces« <b>Demo Festival</b>, Schlanders, South Tirol</li>
          <li>
            2022 »Reterritorialized Spaces«, <b>Parallel Vienna</b>, Semmelweisklinik, Vienna,
            Austria
          </li>
          <li>
            2022 »Game Over or Replay«, <b>Angewandte Festival</b> / University of Applied Arts, Vienna,
            Austria
          </li>
          <li>2022 »FaceMirror«, <b>Hybrid Biennale</b>, Hellerau, Dresden, Germany</li>
          <li>2022 »Hr. Litto: speaking«, CIVA Festival, <b>Belvedere 21</b>, Vienna, Austria</li>
          <br />
          <li>2021 »MirroredSpaces«, <b>ARS Electronica</b>, Linz, Austria</li>
          <li>2021 »RealMirror«, In the Kitchen, <b>Medienwerkstatt</b>, Vienna, Austria</li>
          <br />
          <li>
            2020 »Das Vorspiel« Navigieren im Postdigitalen, <b>Angewandte Innovation Laboratory</b
            >, Vienna, Austria
          </li>
          <br />
          <li>2019 »Kostprobe?«, <b>Roboexotica 2019</b>, Vienna, Austria</li>
          <li>2019 »RealMirror«, Klangmanifeste, <b>Echoräume</b>, Vienna, Austria</li>
          <li>
            2019 »AR Paintings« HACKIDC Digital Art Exhibition 2019 <b>IDC Herzliya</b>, Tel Aviv,
            Israel
          </li>
          <li>
            2019 »Translation of Complexity«, Solo Exhibition, Reindorfgassen Fest, <b
              >Sound:frame, Improper Walls</b
            > in collab with Artivive, Vienna, Austria
          </li>
          <li>2019 »Das Vorspiel« Performance, Schwelle 7, Vienna, Austria</li>
          <li>2019 »Real Mirror«, Glowing Globe, <b>Gallery KORTIL</b>, Rijeka, Croatia</li>
          <li>2019 »AR Paintings« <b>Public Gallery SEE Djerba</b>, Tunisia</li>
          <li>
            2019 »RealMirror 2.0«, <b>Angewandte Festival</b> / University of Applied Arts, Vienna, Austria
          </li>
          <li>2019 »RealMirror 2.0«, <b>ANIMAFEST</b>, Zagreb, Croatia</li>
          <li>
            2019 International Student Film Festival, <b>Beit Hashanti Gala Exhibition</b>, Negev
            Desert, Israel
          </li>
          <br />
          <li>
            2018 »RealMirror«, FuckReality, <b>Kunstraum Niederösterreich</b>, Digital Art,
            University of Applied Arts, Vienna, Austria
          </li>
          <li>
            2018 »AR Paintings« <b>Vienna Design Week</b>, in collab with Artivive, Burggasse 98,
            Vienna, Austria
          </li>
          <li>
            2018 »AR Paintings« <b>Chengdu Creativity & Design Week</b> in collab with Artivive, Chengdu,
            China
          </li>
          <li>
            2018 »AR Paintings« <b>Bangkok Art And Culture Centre (Bacc)</b> in collab with Artivive,
            Bangkok, Thailand
          </li>
        </ul>

        <h5>Co-Organized and Curated Exhibitions</h5>
        <ul>
          <li></li>
          <li>2023 »Reterritorialized Spaces«, Symposion Lindabrunn, Austria</li>
          <li>
            2023 »Artificial Museum« A MAZE Festival AR Exhibition on sight Experimental Game
            Cultures Margarete Jahrmann, Berlin, Germany
          </li>
          <li>
            2023 »Translunar Formations« , in collaboration with PIXFilm Gallery Toronto, Canada
          </li>
          <li>
            2022 »Electro-Esoteric Avatare Seance«, CIVA Festival, Belvedere 21, Vienna, Austria
          </li>
          <li>2021 »Movement«, ArtificialMuseum, PIXFilmGallery, Toronto, Canada</li>
          <li>2021 »Opposition«, Medienwerkstatt, Vienna, Austria</li>
          <li>2020 »The System« Phase 1, Yppenplatz, Vienna, Austria (funded by KOER)</li>
        </ul>

        <h5>Scholarships</h5>
        <ul>
          <li>2023 Symposion Lindabrunn, Enzesfeld-Lindabrunn, Austria</li>
          <li>2022 Hellerau, Dresden, Germany</li>
          <li>2021 Dialogfelder Eins, Klub Solitär e.V., Chemnitz Germany</li>
          <li>2017 Austrian Days in Gdansk – Sopot – Gdynia, Gdansk Poland</li>
        </ul>

        <h5>Experience</h5>
        <ul>
          <li>
            2017 - 2023 artistic practice in Augmented Reality and Virtual Reality, Javascript,
            Three.js, Blender 3D, Touch Designer, Unreal Engine
          </li>
          <li>
            2010 - 2017 User Experience and Web Design, Freelancing: Berlin, Amsterdam, Vienna
          </li>
          <li>
            clients: Do&Co, Wimmer Beton, NTRY Ticketing, Wien Extra, Carsten Gerhards, Fortunes,
            Usus KreativKollektiv, Edenspiekermann, Virtual Identity.
          </li>
        </ul>

        <h5>Education</h5>
        <ul>
          <li>2020 – now Artificial Museum artistic direction artistic research and development</li>
          <li>2021 – now SystemKollektiv workshop, teaching, curation, organisation</li>
          <li>
            2021 – 2022 Experimental Game Cultures, University of Applied Arts, Vienna, Austria
          </li>
          <li>2016 – 2022 Digital Art, University of Applied Arts, Vienna, Austria</li>
          <li>2012 Graduation Communication Design, Die Graphische, Vienna, Austria</li>
          <li>
            2009 Graduation Business Administration at Business University (Mag), Vienna, Austria
          </li>
        </ul>
      </div>

      <div class="links">
        <div class="link">
          <Link class="dark underline" href="https://artificialmuseum.com">Artificial Museum</Link>
        </div>

        <div class="link">
          <Link class="dark underline" href="https://thesystem.at">SystemKollektiv</Link>
        </div>

        <div class="link">
          <Link class="dark underline" href="mailto:litto.eu@gmail.com">mail</Link>
        </div>

        <div class="link">
          <Link class="dark underline" href="https://www.instagram.com/ms.litto/">instagram</Link>
        </div>

        <div class="link">
          <Link
            class="dark underline"
            href="https://www.youtube.com/channel/UCcxT3SlAYNaOL3sEuRNH90w"
          >
            youtube
          </Link>
        </div>

        <div class="link">
          <Link class="dark underline" href="https://github.com/mslitto">github</Link>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  /* About Page */
  .about-page {
    // background-color: rgba(250,0,110, 0.9);
    font-weight: 200;
    font-size: 20px;
    opacity: 0;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    /*transition left 300ms, top 300ms, opacity 500ms*/
    position: fixed;
    overflow-y: auto;

    display: none;

    /*
      image z-index gets incremented.
      we will assume nobody will hover 100.000 times without reloading
    */
    z-index: 100000;

    &.visible {
      display: inherit;
      opacity: 1;
    }

    h5 {
      font-weight: bold;
      font-size: 0.9em;
    }

    .content {
      background: linear-gradient(rgba(255, 189, 235, 0.9) 0%, rgba(250, 0, 110, 0.9) 100%);
    }
  }

  li {
    margin: 0 0 0.6em;
  }

  .header {
    clear: both;
    font-size: 1.4em;
  }

  .content {
    padding: 0 5% 200px;
    color: var(--black);
    text-align: left;

    :global(.about-page-img) {
      width: 100%;
      float: left;
      margin: 0 1em 1em 0;
      height: auto;
    }

    p {
      margin: 0.8em 0;
    }
  }

  @media screen and (min-width: 800px) {
    .header {
      clear: none;
      font-size: 1.8em;
    }
    .content {
      position: absolute;
      top: 0;
      width: 100%;

      > div {
        max-width: 950px;
        margin: 0 auto;
      }

      :global(.about-page-img) {
        width: 40%;
      }
    }
  }

  @media screen and (min-width: 1180px) {
    .header {
      font-size: 2.2em;
    }

    .content {
      :global(.about-page-img) {
        width: 30%;
      }
    }
  }
</style>
