<script lang="ts">
  import { Link, Picture } from '$lib/index'
  import { isAboutPageOpen } from '$lib/stores/index'

  if (typeof window !== 'undefined' && window.location.hash === '#about') {
    isAboutPageOpen.set(true)
  }

  $: className = $isAboutPageOpen ? ' visible' : ''

  const links = [
    { text: 'Artificial Museum', href: "https://artificialmuseum.com" },
    { text: 'SystemKollektiv', href: "https://thesystem.at" },
    { text: 'mail', href: "mailto:litto.eu@gmail.com", },
    { text: 'twitter', href: "https://twitter.com/ms_litto" },
    { text: 'instagram', href: "https://www.instagram.com/ms.litto/" },
    { text: 'youtube', href: "https://www.youtube.com/channel/UCcxT3SlAYNaOL3sEuRNH90w?view_as=subscriber" },
    { text: 'github', href: "https://github.com/mslitto" },
  ]
</script>

<div class="about-page{className}">
  <div class="content">
    <div>
      <div>
        <Picture
          imgClass="inline left"
          src="/img/me_02.jpg"
          height="800"
          width="800"
          alt=""
          role="presentation"
        />

        <p>
          LITTO / Daniela Weiss
          <br /> *1984, Vienna
        </p>
      </div>

      <h4 class="header maybe-float">
        In Litto's virtual world, rules are undefined, rites are reversed and perception is
        twisted, places participate as players, identities become blurred and time glitches away.
      </h4>

      <p class="maybe-float">
        Her art research deals with the intersections between the physical, virtual and
        imaginative worlds. She uses a multi-disciplinary approach, utilizing analogue skills,
        programming and 3d art to create immersive experiences.
      </p>

      <p class="cv clearboth">
        <br />
        <b>Individual participation in Exhibitions/Festivals/Conferences (selected)</b>
        <br />
        2022 »FaceMirror«, Hybrid Biennale, Hellerau, Dresden, Germany
        <br />
        2022 »Hr. Litto: speaking«, CIVA Festival, Belvedere 21, Vienna, Austria
        <br />
        2021 »MirroredSpaces«, ARS Electronica, Linz, Austria
        <br />
        2021 »ArtificialMuseum«, Places VR Festival 2021, Gelsenkirchen, Germany
        <br />
        2021 »MirroredSpaces«, Angewandte Festival / University of Applied Arts, Vienna, Austria
        <br />
        2021 »RealMirror«, In the Kitchen, Medienwerkstatt, Vienna, Austria
        <br />
        2020 Gallerie Frewein-Kazakbaev, Vienna, Austria
        <br />
        2020 »Vorspiel« Navigieren im Postdigitalen, Angewandte Innovation Laboratory, Vienna, Austria
        <br />
        2019 »Kostprobe?«, Roboexotica 2019, Vienna, Austria
        <br />
        2019 »RealMirror«, Klangmanifeste, Echoräume, Vienna, Austria
        <br />
        2019 HACKIDC Digital Art Exhibition 2019 IDC Herzliya, Tel Aviv, Israel
        <br />
        2019 »Translation of Complexity«, Solo Exhibition, Reindorfgassen Fest, Sound:frame, Improper
        Walls, Vienna, Austria
        <br />
        2019 »Vorspiel« Performance, Schwelle 7, Vienna, Austria
        <br />
        2019 »Real Mirror«, Glowing Globe, Gallery KORTIL, Rijeka, Croatia
        <br />
        2019 ON Public Gallery SEE Djerba, Tunisia
        <br />
        2019 »RealMirror 2.0«, Angewandte Festival / University of Applied Arts, Vienna, Austria
        <br />
        2019 »RealMirror 2.0«, ANIMAFEST, Zagreb, Croatia
        <br />
        2019 International Student Film Festival, Beit Hashanti Gala Exhibition, Negev Desert, Israel
        <br />
        2019 PARTISANEN, Villa Schapira, Max-Emanuel-Strasse 17, 1180 Vienna, Austria
        <br />
        2018 »RealMirror«, FuckReality, Kunstraum Niederösterreich, Digital Art, University of Applied
        Arts, Vienna, Austria
        <br />
        2018 Vienna Design Week, Burggasse 98, Vienna, Austria
        <br />
        2018 Chengdu Creativity & Design Week, Chengdu, China
        <br />
        2018 Bangkok Art And Culture Centre (Bacc), Bangkok, Thailand
        <br />
        2017 »Restricted Area #17«, SightSeeing Company & UsusKreativkollektiv
        <br />
        <br />
        <b>Co-Organized Exhibitions</b>
        <br />
        2022 »Electro-Esoteric Avatare Seance«, CIVA Festival, Belvedere 21, Vienna, Austria
        <br />
        2021 »Movement«, ArtificialMuseum, PIXFilmGallery, Toronto, Canada
        <br />
        2021 »Opposition«, Medienwerkstatt, Vienna, Austria
        <br />
        2020 »The System« Phase 1, Yppenplatz, Vienna, Austria (funded by KOER)
        <br />
        <br />
        <b>Scholarships</b>
        <br />
        2022 Hellerau, Dresden, Germany
        <br />
        2021 Dialogfelder Eins, Klub Solitär e.V., Chemnitz Germany
        <br />
        2017 Austrian Days in Gdansk – Sopot – Gdynia, Gdansk Poland
        <br />
        <br />
        <b>Experience</b>
        <br />
        2017 - 2022 artistic practice in Augmented Reality and Virtual Reality, Three.js, Blender 3D,
        Touch Designer
        <br />
        2010 - 2017 User Experience and Web Design, Freelancing: Berlin, Amsterdam, Vienna
        <br />
        clients: Do&Co, Wimmer Beton, NTRY Ticketing, Wien Extra, Carsten Gerhards, Fortunes, Usus
        KreativKollektiv, Edenspiekermann, Virtual Identity.
        <br />
        <br />
        <b>Education</b>
        <br />
        2021-2022 Experimental Game Cultures, University of Applied Arts, Vienna, Austria
        <br />
        2016 - 2022 Digital Art, University of Applied Arts, Vienna, Austria
        <br />
        2012 Graduation Communication Design, Die Graphische, Vienna, Austria
        <br />
        2009 Graduation Business Administration at Business University (Mag), Vienna, Austria
      </p>

      {#each links as { href, text }}
        <div class="link">
          <Link dark={true} underline={true} {href}>{text}</Link>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  /* About Page */
  .about-page {
    background-color: rgba(255, 0, 132, 0.9);
    font-weight: 200;
    font-size: 20px;
    opacity: 0;
    height: 100%;
    height: 100vh;
    width: 100%;
    width: 100vw;
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
  }

  .visible {
    display: inherit;
    opacity: 1;
  }

  .header {
    font-size: 1.4em;
  }

  .content {
    margin: 0 5%;
    color: var(--black);
    padding: 0 0 200px;
    text-align: left;

    p {
      margin: 0.8em 0;
    }

    .link {
      line-height: 1.9em;
      padding-right: 10px;
      float: left;
    }
  }

  @media screen and (max-width: 1000px) {
    .maybe-float {
      clear: both;
    }
  }
</style>
