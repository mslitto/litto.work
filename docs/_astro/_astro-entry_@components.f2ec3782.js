import{S as le,a as ae,s as ne,O as Ve,e as p,c as A,d as x,g as d,h as o,j as $,P as Ce,Q as Re,R as De,y as C,z as R,q as E,r as V,J as _e,I as we,k as h,n as O,T as Se,K as Ie,o as ye,p as Ge,U as he,v as Me,w as Pe,C as Ee,E as D,F as S,G as I,H as y,V as G,W as M,t as je}from"./index.89f82911.js";/* empty css                       */function xe(i){return i?.length!==void 0?i:Array.from(i)}function Te(i){let e,t;const s=i[7].default,a=Ve(s,i,i[6],null);return{c(){e=p("a"),a&&a.c(),this.h()},l(l){e=A(l,"A",{class:!0,href:!0,rel:!0,target:!0});var n=x(e);a&&a.l(n),n.forEach(d),this.h()},h(){o(e,"class",i[1]),o(e,"href",i[0]),o(e,"rel",i[2]),o(e,"target",i[3])},m(l,n){$(l,e,n),a&&a.m(e,null),t=!0},p(l,[n]){a&&a.p&&(!t||n&64)&&Ce(a,s,l,l[6],t?De(s,l[6],n,null):Re(l[6]),null),(!t||n&2)&&o(e,"class",l[1]),(!t||n&1)&&o(e,"href",l[0]),(!t||n&4)&&o(e,"rel",l[2])},i(l){t||(C(a,l),t=!0)},o(l){R(a,l),t=!1},d(l){l&&d(e),a&&a.d(l)}}}function Fe(i,e,t){let{$$slots:s={},$$scope:a}=e,{href:l}=e,{nofollow:n=!1}=e,{noreferrer:r=!1}=e,{class:c=""}=e;const g=l[0]==="/"||l[0]==="#",u=g?null:"_blank";let _;return g||(_="noopener",n&&(_+=" nofollow"),r&&(_+=" noreferrer")),i.$$set=m=>{"href"in m&&t(0,l=m.href),"nofollow"in m&&t(4,n=m.nofollow),"noreferrer"in m&&t(5,r=m.noreferrer),"class"in m&&t(1,c=m.class),"$$scope"in m&&t(6,a=m.$$scope)},[l,c,_,u,n,r,a,s]}class K extends le{constructor(e){super(),ae(this,e,Fe,Te,ne,{href:0,nofollow:4,noreferrer:5,class:1})}}function ke(i,e,t){const s=i.slice();return s[10]=e[t],s}function $e(i){let e,t;return{c(){e=p("source"),this.h()},l(s){e=A(s,"SOURCE",{srcset:!0}),this.h()},h(){Ie(e,t=i[10])||o(e,"srcset",t)},m(s,a){$(s,e,a)},p:O,d(s){s&&d(e)}}}function Le(i){let e,t,s,a,l,n=xe(i[7]),r=[];for(let c=0;c<n.length;c+=1)r[c]=$e(ke(i,n,c));return{c(){e=p("picture");for(let c=0;c<r.length;c+=1)r[c].c();t=E(),s=p("img"),this.h()},l(c){e=A(c,"PICTURE",{class:!0});var g=x(e);for(let u=0;u<r.length;u+=1)r[u].l(g);t=V(g),s=A(g,"IMG",{class:!0,src:!0,alt:!0,role:!0,height:!0,width:!0}),g.forEach(d),this.h()},h(){o(s,"class",a=_e(i[6])+" svelte-1kk4yy"),we(s.src,l=i[5])||o(s,"src",l),o(s,"alt",i[4]),o(s,"role",i[0]),o(s,"height",i[2]),o(s,"width",i[3]),o(e,"class",i[1])},m(c,g){$(c,e,g);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(e,null);h(e,t),h(e,s)},p(c,[g]){if(g&128){n=xe(c[7]);let u;for(u=0;u<n.length;u+=1){const _=ke(c,n,u);r[u]?r[u].p(_,g):(r[u]=$e(_),r[u].c(),r[u].m(e,t))}for(;u<r.length;u+=1)r[u].d(1);r.length=n.length}g&64&&a!==(a=_e(c[6])+" svelte-1kk4yy")&&o(s,"class",a),g&32&&!we(s.src,l=c[5])&&o(s,"src",l),g&16&&o(s,"alt",c[4]),g&1&&o(s,"role",c[0]),g&4&&o(s,"height",c[2]),g&8&&o(s,"width",c[3]),g&2&&o(e,"class",c[1])},i:O,o:O,d(c){c&&d(e),Se(r,c)}}}function ze(i,e,t){let{height:s}=e,{width:a}=e,{role:l=null}=e,{alt:n=null}=e,{avif:r=!1}=e,{webp:c=!0}=e,{src:g}=e,{imgClass:u=null}=e,{pictureClass:_="Picture"}=e;(n===""&&!l||!ye(l))&&(l="presentation");const m=[];return c!==!1&&m.push(g.replace(/\.(jpg|png|gif)$/,".webp")),r!==!1&&m.push(g.replace(/\.(jpg|png|gif)$/,".webp")),_.includes("Picture")||(_=`Picture ${_||void 0}`),i.$$set=v=>{"height"in v&&t(2,s=v.height),"width"in v&&t(3,a=v.width),"role"in v&&t(0,l=v.role),"alt"in v&&t(4,n=v.alt),"avif"in v&&t(8,r=v.avif),"webp"in v&&t(9,c=v.webp),"src"in v&&t(5,g=v.src),"imgClass"in v&&t(6,u=v.imgClass),"pictureClass"in v&&t(1,_=v.pictureClass)},[l,_,s,a,n,g,u,m,r,c]}class He extends le{constructor(e){super(),ae(this,e,ze,Le,ne,{height:2,width:3,role:0,alt:4,avif:8,webp:9,src:5,imgClass:6,pictureClass:1})}}const ie=Ge(!1);function Be(i){let e,t='<picture class="svelte-1fmb61e"><source srcset="/img/logo_b.webp" class="svelte-1fmb61e"/> <img src="/img/logo_b.png" height="237" width="320" alt="" role="presentation" class="svelte-1fmb61e"/></picture>',s,a;return{c(){e=p("a"),e.innerHTML=t,this.h()},l(l){e=A(l,"A",{class:!0,href:!0,target:!0,rel:!0,"data-svelte-h":!0}),he(e)!=="svelte-1ef0pxe"&&(e.innerHTML=t),this.h()},h(){o(e,"class","about-page-trigger svelte-1fmb61e"),o(e,"href","https://www.instagram.com/ms.litto"),o(e,"target","_blank"),o(e,"rel","nofollow noopener noreferrer")},m(l,n){$(l,e,n),s||(a=Me(e,"click",Pe(i[0])),s=!0)},p:O,i:O,o:O,d(l){l&&d(e),s=!1,a()}}}function Ue(i,e,t){let s;return Ee(i,ie,l=>t(1,s=l)),[()=>{s?(window.location.hash="",ie.set(!1)):(window.location.hash="#about",ie.set(!0))}]}class Ke extends le{constructor(e){super(),ae(this,e,Ue,Be,ne,{})}}function Oe(i){let e,t,s,a,l;return t=new Ke({}),a=new tt({}),{c(){e=p("div"),D(t.$$.fragment),s=E(),D(a.$$.fragment)},l(n){e=A(n,"DIV",{});var r=x(e);S(t.$$.fragment,r),s=V(r),S(a.$$.fragment,r),r.forEach(d)},m(n,r){$(n,e,r),I(t,e,null),h(e,s),I(a,e,null),l=!0},p:O,i(n){l||(C(t.$$.fragment,n),C(a.$$.fragment,n),l=!0)},o(n){R(t.$$.fragment,n),R(a.$$.fragment,n),l=!1},d(n){n&&d(e),y(t),y(a)}}}class lt extends le{constructor(e){super(),ae(this,e,null,Oe,ne,{})}}function Ne(i){let e;return{c(){e=G("the Artificial Museum")},l(t){e=M(t,"the Artificial Museum")},m(t,s){$(t,e,s)},d(t){t&&d(e)}}}function We(i){let e;return{c(){e=G("Artificial Museum")},l(t){e=M(t,"Artificial Museum")},m(t,s){$(t,e,s)},d(t){t&&d(e)}}}function qe(i){let e;return{c(){e=G("SystemKollektiv")},l(t){e=M(t,"SystemKollektiv")},m(t,s){$(t,e,s)},d(t){t&&d(e)}}}function Je(i){let e;return{c(){e=G("mail")},l(t){e=M(t,"mail")},m(t,s){$(t,e,s)},d(t){t&&d(e)}}}function Xe(i){let e;return{c(){e=G("instagram")},l(t){e=M(t,"instagram")},m(t,s){$(t,e,s)},d(t){t&&d(e)}}}function Ye(i){let e;return{c(){e=G("youtube")},l(t){e=M(t,"youtube")},m(t,s){$(t,e,s)},d(t){t&&d(e)}}}function Ze(i){let e;return{c(){e=G("github")},l(t){e=M(t,"github")},m(t,s){$(t,e,s)},d(t){t&&d(e)}}}function Qe(i){let e,t,s,a,l,n,r,c=`Rules are undefined, rites are reversed and perception is twisted, places participate as
        players, identities become blurred and time glitches away.`,g,u,_,m,v,re,B,me=`<h5 class="svelte-15g3xsj">Individual participation in Exhibitions/Festivals/Conferences (selected)</h5> <ul><li class="svelte-15g3xsj">2023 »Aaron Swartz« <b>ARS Electronica 2023</b> In cooperation with Schuberttheater and Hidéo
            SNES, Linz, Austria</li> <li class="svelte-15g3xsj">2023 »Reterritorialized Spaces«, <b>Parallel Vienna</b>, ArteCont, Austria</li> <li class="svelte-15g3xsj">2023 »Reterritorialized Spaces« <b>Wiener Lichtblicke</b>, Justizpalast, Vienna, Austria</li> <li class="svelte-15g3xsj">2023 »Das Vorspiel« <b>ARSE Electronica</b>, Monochrom, Linz, Austria</li> <li class="svelte-15g3xsj">2023 »Reterritorialized Spaces« <b>Vienna Digital Summer</b>, ArteCont, Virtual
            Exhibition Vienna, Austria</li> <li class="svelte-15g3xsj">2023 »Reterritorialized Spaces« <b>Symposion Lindabrunn</b>, Enzesfeld-Lindabrunn,
            Austria</li> <li class="svelte-15g3xsj">2023 »Inside Out« with Hidéo SNES <b>Gallery Frewein-Kazakbaev</b>, Vienna, Austria</li> <li class="svelte-15g3xsj">2023 »Game Over or Replay«, <b>A MAZE Festival</b>, Berlin, Germany</li> <br/> <li class="svelte-15g3xsj">2022 »Game Over or Replay«, Next Generation, <b>Galarie Monfort</b>, Portorož, Slovenia</li> <li class="svelte-15g3xsj">2022 »Real Mirror« Re.pairing Future, Digital Art Dep. <b>CRIATECH Festival 2022</b>,
            Aveiro, Portugal</li> <li class="svelte-15g3xsj">2022 »Reterritorialized Spaces« <b>Demo Festival</b>, Schlanders, South Tirol</li> <li class="svelte-15g3xsj">2022 »Reterritorialized Spaces«, <b>Parallel Vienna</b>, Semmelweisklinik, Vienna,
            Austria</li> <li class="svelte-15g3xsj">2022 »Game Over or Replay«, <b>Angewandte Festival</b> / University of Applied Arts, Vienna,
            Austria</li> <li class="svelte-15g3xsj">2022 »FaceMirror«, <b>Hybrid Biennale</b>, Hellerau, Dresden, Germany</li> <li class="svelte-15g3xsj">2022 »Hr. Litto: speaking«, CIVA Festival, <b>Belvedere 21</b>, Vienna, Austria</li> <br/> <li class="svelte-15g3xsj">2021 »MirroredSpaces«, <b>ARS Electronica</b>, Linz, Austria</li> <li class="svelte-15g3xsj">2021 »RealMirror«, In the Kitchen, <b>Medienwerkstatt</b>, Vienna, Austria</li> <br/> <li class="svelte-15g3xsj">2020 »Das Vorspiel« Navigieren im Postdigitalen, <b>Angewandte Innovation Laboratory</b>, Vienna, Austria</li> <br/> <li class="svelte-15g3xsj">2019 »Kostprobe?«, <b>Roboexotica 2019</b>, Vienna, Austria</li> <li class="svelte-15g3xsj">2019 »RealMirror«, Klangmanifeste, <b>Echoräume</b>, Vienna, Austria</li> <li class="svelte-15g3xsj">2019 »AR Paintings« HACKIDC Digital Art Exhibition 2019 <b>IDC Herzliya</b>, Tel Aviv,
            Israel</li> <li class="svelte-15g3xsj">2019 »Translation of Complexity«, Solo Exhibition, Reindorfgassen Fest, <b>Sound:frame, Improper Walls</b> in collab with Artivive, Vienna, Austria</li> <li class="svelte-15g3xsj">2019 »Das Vorspiel« Performance, Schwelle 7, Vienna, Austria</li> <li class="svelte-15g3xsj">2019 »Real Mirror«, Glowing Globe, <b>Gallery KORTIL</b>, Rijeka, Croatia</li> <li class="svelte-15g3xsj">2019 »AR Paintings« <b>Public Gallery SEE Djerba</b>, Tunisia</li> <li class="svelte-15g3xsj">2019 »RealMirror 2.0«, <b>Angewandte Festival</b> / University of Applied Arts, Vienna, Austria</li> <li class="svelte-15g3xsj">2019 »RealMirror 2.0«, <b>ANIMAFEST</b>, Zagreb, Croatia</li> <li class="svelte-15g3xsj">2019 International Student Film Festival, <b>Beit Hashanti Gala Exhibition</b>, Negev
            Desert, Israel</li> <br/> <li class="svelte-15g3xsj">2018 »RealMirror«, FuckReality, <b>Kunstraum Niederösterreich</b>, Digital Art,
            University of Applied Arts, Vienna, Austria</li> <li class="svelte-15g3xsj">2018 »AR Paintings« <b>Vienna Design Week</b>, in collab with Artivive, Burggasse 98,
            Vienna, Austria</li> <li class="svelte-15g3xsj">2018 »AR Paintings« <b>Chengdu Creativity &amp; Design Week</b> in collab with Artivive, Chengdu,
            China</li> <li class="svelte-15g3xsj">2018 »AR Paintings« <b>Bangkok Art And Culture Centre (Bacc)</b> in collab with Artivive,
            Bangkok, Thailand</li></ul> <h5 class="svelte-15g3xsj">Co-Organized and Curated Exhibitions</h5> <ul><li class="svelte-15g3xsj"></li> <li class="svelte-15g3xsj">2023 »Reterritorialized Spaces«, Symposion Lindabrunn, Austria</li> <li class="svelte-15g3xsj">2023 »Artificial Museum« A MAZE Festival AR Exhibition on sight Experimental Game
            Cultures Margarete Jahrmann, Berlin, Germany</li> <li class="svelte-15g3xsj">2023 »Translunar Formations« , in collaboration with PIXFilm Gallery Toronto, Canada</li> <li class="svelte-15g3xsj">2022 »Electro-Esoteric Avatare Seance«, CIVA Festival, Belvedere 21, Vienna, Austria</li> <li class="svelte-15g3xsj">2021 »Movement«, ArtificialMuseum, PIXFilmGallery, Toronto, Canada</li> <li class="svelte-15g3xsj">2021 »Opposition«, Medienwerkstatt, Vienna, Austria</li> <li class="svelte-15g3xsj">2020 »The System« Phase 1, Yppenplatz, Vienna, Austria (funded by KOER)</li></ul> <h5 class="svelte-15g3xsj">Scholarships</h5> <ul><li class="svelte-15g3xsj">2023 Symposion Lindabrunn, Enzesfeld-Lindabrunn, Austria</li> <li class="svelte-15g3xsj">2022 Hellerau, Dresden, Germany</li> <li class="svelte-15g3xsj">2021 Dialogfelder Eins, Klub Solitär e.V., Chemnitz Germany</li> <li class="svelte-15g3xsj">2017 Austrian Days in Gdansk – Sopot – Gdynia, Gdansk Poland</li></ul> <h5 class="svelte-15g3xsj">Experience</h5> <ul><li class="svelte-15g3xsj">2017 - 2023 artistic practice in Augmented Reality and Virtual Reality, Javascript,
            Three.js, Blender 3D, Touch Designer, Unreal Engine</li> <li class="svelte-15g3xsj">2010 - 2017 User Experience and Web Design, Freelancing: Berlin, Amsterdam, Vienna</li> <li class="svelte-15g3xsj">clients: Do&amp;Co, Wimmer Beton, NTRY Ticketing, Wien Extra, Carsten Gerhards, Fortunes,
            Usus KreativKollektiv, Edenspiekermann, Virtual Identity.</li></ul> <h5 class="svelte-15g3xsj">Education</h5> <ul><li class="svelte-15g3xsj">2020 – now Artificial Museum artistic direction artistic research and development</li> <li class="svelte-15g3xsj">2021 – now SystemKollektiv workshop, teaching, curation, organisation</li> <li class="svelte-15g3xsj">2021 – 2022 Experimental Game Cultures, University of Applied Arts, Vienna, Austria</li> <li class="svelte-15g3xsj">2016 – 2022 Digital Art, University of Applied Arts, Vienna, Austria</li> <li class="svelte-15g3xsj">2012 Graduation Communication Design, Die Graphische, Vienna, Austria</li> <li class="svelte-15g3xsj">2009 Graduation Business Administration at Business University (Mag), Vienna, Austria</li></ul>`,oe,w,N,P,ce,W,T,ue,q,F,fe,J,L,ge,X,z,de,Y,H,Z;return l=new He({props:{imgClass:"about-page-img",src:"/img/me3.jpg",height:"800",width:"800",alt:"",role:"presentation"}}),m=new K({props:{class:"dark underline",href:"https://artificialmuseum.com",$$slots:{default:[Ne]},$$scope:{ctx:i}}}),P=new K({props:{class:"dark underline",href:"https://artificialmuseum.com",$$slots:{default:[We]},$$scope:{ctx:i}}}),T=new K({props:{class:"dark underline",href:"https://thesystem.at",$$slots:{default:[qe]},$$scope:{ctx:i}}}),F=new K({props:{class:"dark underline",href:"mailto:litto.eu@gmail.com",$$slots:{default:[Je]},$$scope:{ctx:i}}}),L=new K({props:{class:"dark underline",href:"https://www.instagram.com/ms.litto/",$$slots:{default:[Xe]},$$scope:{ctx:i}}}),z=new K({props:{class:"dark underline",href:"https://www.youtube.com/channel/UCcxT3SlAYNaOL3sEuRNH90w",$$slots:{default:[Ye]},$$scope:{ctx:i}}}),H=new K({props:{class:"dark underline",href:"https://github.com/mslitto",$$slots:{default:[Ze]},$$scope:{ctx:i}}}),{c(){e=p("div"),t=p("div"),s=p("div"),a=p("div"),D(l.$$.fragment),n=E(),r=p("h4"),r.textContent=c,g=E(),u=p("p"),_=G(`Litto / Daniela Weiss is a media artist who examines the worlds of analogue and digital art
        in form of VR and AR installations. Having a background in visual arts and applied Business
        Administration, she also began her studies in digital art in 2017 and Experimental Game
        Cultures in 2021 (Vienna University of Applied Arts), expanding her artistic research from
        interaction design and UX Design to the field of mixed reality. In 2020, she co-founded the
        web-based AR platform
        `),D(m.$$.fragment),v=G(`
        and build interactive AR sculptures in public space. The mirror is a continuous symbol in her
        work.`),re=E(),B=p("div"),B.innerHTML=me,oe=E(),w=p("div"),N=p("div"),D(P.$$.fragment),ce=E(),W=p("div"),D(T.$$.fragment),ue=E(),q=p("div"),D(F.$$.fragment),fe=E(),J=p("div"),D(L.$$.fragment),ge=E(),X=p("div"),D(z.$$.fragment),de=E(),Y=p("div"),D(H.$$.fragment),this.h()},l(f){e=A(f,"DIV",{class:!0});var b=x(e);t=A(b,"DIV",{class:!0});var Q=x(t);s=A(Q,"DIV",{class:!0});var k=x(s);a=A(k,"DIV",{});var ee=x(a);S(l.$$.fragment,ee),ee.forEach(d),n=V(k),r=A(k,"H4",{class:!0,"data-svelte-h":!0}),he(r)!=="svelte-2c9q0c"&&(r.textContent=c),g=V(k),u=A(k,"P",{class:!0});var U=x(u);_=M(U,`Litto / Daniela Weiss is a media artist who examines the worlds of analogue and digital art
        in form of VR and AR installations. Having a background in visual arts and applied Business
        Administration, she also began her studies in digital art in 2017 and Experimental Game
        Cultures in 2021 (Vienna University of Applied Arts), expanding her artistic research from
        interaction design and UX Design to the field of mixed reality. In 2020, she co-founded the
        web-based AR platform
        `),S(m.$$.fragment,U),v=M(U,`
        and build interactive AR sculptures in public space. The mirror is a continuous symbol in her
        work.`),U.forEach(d),re=V(k),B=A(k,"DIV",{class:!0,"data-svelte-h":!0}),he(B)!=="svelte-s3j1nr"&&(B.innerHTML=me),oe=V(k),w=A(k,"DIV",{class:!0});var j=x(w);N=A(j,"DIV",{class:!0});var te=x(N);S(P.$$.fragment,te),te.forEach(d),ce=V(j),W=A(j,"DIV",{class:!0});var se=x(W);S(T.$$.fragment,se),se.forEach(d),ue=V(j),q=A(j,"DIV",{class:!0});var ve=x(q);S(F.$$.fragment,ve),ve.forEach(d),fe=V(j),J=A(j,"DIV",{class:!0});var be=x(J);S(L.$$.fragment,be),be.forEach(d),ge=V(j),X=A(j,"DIV",{class:!0});var pe=x(X);S(z.$$.fragment,pe),pe.forEach(d),de=V(j),Y=A(j,"DIV",{class:!0});var Ae=x(Y);S(H.$$.fragment,Ae),Ae.forEach(d),j.forEach(d),k.forEach(d),Q.forEach(d),b.forEach(d),this.h()},h(){o(r,"class","header svelte-15g3xsj"),o(u,"class","clearboth svelte-15g3xsj"),o(B,"class","cv"),o(N,"class","link"),o(W,"class","link"),o(q,"class","link"),o(J,"class","link"),o(X,"class","link"),o(Y,"class","link"),o(w,"class","links"),o(s,"class","svelte-15g3xsj"),o(t,"class","content svelte-15g3xsj"),o(e,"class","about-page svelte-15g3xsj"),je(e,"visible",i[0])},m(f,b){$(f,e,b),h(e,t),h(t,s),h(s,a),I(l,a,null),h(s,n),h(s,r),h(s,g),h(s,u),h(u,_),I(m,u,null),h(u,v),h(s,re),h(s,B),h(s,oe),h(s,w),h(w,N),I(P,N,null),h(w,ce),h(w,W),I(T,W,null),h(w,ue),h(w,q),I(F,q,null),h(w,fe),h(w,J),I(L,J,null),h(w,ge),h(w,X),I(z,X,null),h(w,de),h(w,Y),I(H,Y,null),Z=!0},p(f,[b]){const Q={};b&2&&(Q.$$scope={dirty:b,ctx:f}),m.$set(Q);const k={};b&2&&(k.$$scope={dirty:b,ctx:f}),P.$set(k);const ee={};b&2&&(ee.$$scope={dirty:b,ctx:f}),T.$set(ee);const U={};b&2&&(U.$$scope={dirty:b,ctx:f}),F.$set(U);const j={};b&2&&(j.$$scope={dirty:b,ctx:f}),L.$set(j);const te={};b&2&&(te.$$scope={dirty:b,ctx:f}),z.$set(te);const se={};b&2&&(se.$$scope={dirty:b,ctx:f}),H.$set(se),(!Z||b&1)&&je(e,"visible",f[0])},i(f){Z||(C(l.$$.fragment,f),C(m.$$.fragment,f),C(P.$$.fragment,f),C(T.$$.fragment,f),C(F.$$.fragment,f),C(L.$$.fragment,f),C(z.$$.fragment,f),C(H.$$.fragment,f),Z=!0)},o(f){R(l.$$.fragment,f),R(m.$$.fragment,f),R(P.$$.fragment,f),R(T.$$.fragment,f),R(F.$$.fragment,f),R(L.$$.fragment,f),R(z.$$.fragment,f),R(H.$$.fragment,f),Z=!1},d(f){f&&d(e),y(l),y(m),y(P),y(T),y(F),y(L),y(z),y(H)}}}function et(i,e,t){let s;return Ee(i,ie,a=>t(0,s=a)),typeof window<"u"&&window.location.hash==="#about"&&ie.set(!0),[s]}class tt extends le{constructor(e){super(),ae(this,e,et,Qe,ne,{})}}export{lt as AboutPage};