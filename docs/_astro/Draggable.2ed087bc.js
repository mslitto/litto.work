import{i as be,S as le,a as ae,s as ce,e as P,b as F,c as z,d as k,f as R,g as w,h as d,j as B,k as M,l as ve,m as ke,n as Me,o as De,p as N,q as ue,r as fe,t as y,u as _,v as b,w as E,x as O,y as W,z as A,A as Ie,B as He,C as S,D as Ee,E as Pe,F as ze,G as Ce,H as Le,I as ee,J as te,K as ye,L as Oe,M as We,N as ne}from"./index.678146af.js";/* empty css                       *//* empty css                       */const T=(n,e,t)=>n&&n.addEventListener(e,t),j=(n,e,t)=>n&&n.removeEventListener(e,t);function Be(n,{delay:e=0,duration:t=400,easing:s=be}={}){const l=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:h=>`opacity: ${h*l}`}}function Xe(n){let e,t,s,l,h;return{c(){e=P("a"),t=F("svg"),s=F("path"),l=F("path"),this.h()},l(i){e=z(i,"A",{class:!0,href:!0,target:!0});var a=k(e);t=R(a,"svg",{viewBox:!0,height:!0,width:!0});var r=k(t);s=R(r,"path",{class:!0,d:!0}),k(s).forEach(w),l=R(r,"path",{class:!0,d:!0}),k(l).forEach(w),r.forEach(w),a.forEach(w),this.h()},h(){d(s,"class","arrow svelte-1vmxaqd"),d(s,"d","M9 34V9h25v25z"),d(l,"class","triangle svelte-1vmxaqd"),d(l,"d","M0 0l20.8 20.8 9.3-9.3H24.5v-2h9v9h-2v-5.6l-9.3 9.3L43 43V0H0z"),d(t,"viewBox","0 0 42 42"),d(t,"height","42"),d(t,"width","42"),d(e,"class","DraggableLink svelte-1vmxaqd"),d(e,"href",n[0]),d(e,"target",n[1])},m(i,a){B(i,e,a),M(e,t),M(t,s),M(t,l)},p(i,[a]){a&1&&d(e,"href",i[0]),a&2&&d(e,"target",i[1])},i(i){i&&(h||ve(()=>{h=ke(e,Be,{}),h.start()}))},o:Me,d(i){i&&w(e)}}}function Ye(n,e,t){let{href:s=""}=e,{external:l}=e,h;return De(l)?h=l:l&&(h="_blank"),n.$$set=i=>{"href"in i&&t(0,s=i.href),"external"in i&&t(2,l=i.external)},[s,h,l]}class qe extends le{constructor(e){super(),ae(this,e,Ye,Xe,ce,{href:0,external:2})}}const G=N(""),V=N(""),se=N(0);function oe(n){let e,t;return e=new qe({props:{href:n[2],external:n[0]}}),{c(){Pe(e.$$.fragment)},l(s){ze(e.$$.fragment,s)},m(s,l){Ce(e,s,l),t=!0},p(s,l){const h={};l&4&&(h.href=s[2]),l&1&&(h.external=s[0]),e.$set(h)},i(s){t||(W(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){Le(e,s)}}}function re(n){let e,t,s,l,h,i,a,r=n[4]&&ie(n);return{c(){e=P("picture"),r&&r.c(),t=ue(),s=P("img"),this.h()},l(c){e=z(c,"PICTURE",{class:!0});var p=k(e);r&&r.l(p),t=fe(p),s=z(p,"IMG",{src:!0,alt:!0,role:!0,class:!0}),p.forEach(w),this.h()},h(){ee(s.src,l=n[1])||d(s,"src",l),d(s,"alt",""),d(s,"role","presentation"),d(s,"class","svelte-1lfkp9r"),d(e,"class",h=te(`Picture ${n[3]}`)+" svelte-1lfkp9r")},m(c,p){B(c,e,p),r&&r.m(e,null),M(e,t),M(e,s),n[20](s),i||(a=b(s,"load",n[8]),i=!0)},p(c,p){c[4]?r?r.p(c,p):(r=ie(c),r.c(),r.m(e,t)):r&&(r.d(1),r=null),p&2&&!ee(s.src,l=c[1])&&d(s,"src",l),p&8&&h!==(h=te(`Picture ${c[3]}`)+" svelte-1lfkp9r")&&d(e,"class",h)},d(c){c&&w(e),r&&r.d(),n[20](null),i=!1,a()}}}function ie(n){let e,t;return{c(){e=P("source"),this.h()},l(s){e=z(s,"SOURCE",{srcset:!0,class:!0}),this.h()},h(){ye(e,t=n[1].replace(/\.(jpg|png|gif)$/,".webp"))||d(e,"srcset",t),d(e,"class","svelte-1lfkp9r")},m(s,l){B(s,e,l)},p(s,l){l&2&&t!==(t=s[1].replace(/\.(jpg|png|gif)$/,".webp"))&&d(e,"srcset",t)},d(s){s&&w(e)}}}function Fe(n){let e,t,s,l,h,i=n[2]&&n[13]===n[1]&&oe(n),a=n[1]&&re(n);return{c(){e=P("div"),i&&i.c(),t=ue(),a&&a.c(),this.h()},l(r){e=z(r,"DIV",{class:!0});var c=k(e);i&&i.l(c),t=fe(c),a&&a.l(c),c.forEach(w),this.h()},h(){d(e,"class","Draggable svelte-1lfkp9r"),y(e,"dragged",n[12]===n[1]),y(e,"dropped",n[13]===n[1]),_(e,"left",n[9].left),_(e,"top",n[9].top),_(e,"z-index",n[9].zIndex),_(e,"transition",n[9].transition),_(e,"opacity",n[9].opacity)},m(r,c){B(r,e,c),i&&i.m(e,null),M(e,t),a&&a.m(e,null),n[21](e),s=!0,l||(h=[b(e,"drop",n[7]),b(e,"dragstart",E(n[19])),b(e,"mousedown",n[6]),b(e,"touchstart",O(E(n[5]))),b(e,"touchmove",O(E(n[5]))),b(e,"touchend",O(E(n[5]))),b(e,"touchcancel",O(E(n[5])))],l=!0)},p(r,[c]){r[2]&&r[13]===r[1]?i?(i.p(r,c),c&8198&&W(i,1)):(i=oe(r),i.c(),W(i,1),i.m(e,t)):i&&(Oe(),A(i,1,1,()=>{i=null}),Ie()),r[1]?a?a.p(r,c):(a=re(r),a.c(),a.m(e,null)):a&&(a.d(1),a=null),(!s||c&4098)&&y(e,"dragged",r[12]===r[1]),(!s||c&8194)&&y(e,"dropped",r[13]===r[1]),c&512&&_(e,"left",r[9].left),c&512&&_(e,"top",r[9].top),c&512&&_(e,"z-index",r[9].zIndex),c&512&&_(e,"transition",r[9].transition),c&512&&_(e,"opacity",r[9].opacity)},i(r){s||(W(i),s=!0)},o(r){A(i),s=!1},d(r){r&&w(e),i&&i.d(),a&&a.d(),n[21](null),l=!1,He(h)}}}function Re(n,e,t){let s,l,h;S(n,G,o=>t(12,s=o)),S(n,se,o=>t(24,l=o)),S(n,V,o=>t(13,h=o));let{external:i=""}=e,{src:a}=e,{href:r=""}=e,{pictureClass:c=""}=e,{webp:p=!0}=e,v,D;const C={left:0,top:0};let u={left:"100%",top:"100%",transition:null,opacity:"1",zIndex:0};const X=o=>parseInt(o.replace("%","")),I=(o,f)=>f/window[`inner${o}`]*100,Y=(o,f)=>f*window[`inner${o}`]/100,he=o=>{const f=o.changedTouches[0];let m="mouseup";o.type==="touchstart"?m="mousedown":o.type==="touchmove"?m="mousemove":o.type==="touchend"&&(m="mouseup");const g=new MouseEvent(m,{view:window,bubbles:!0,cancelable:!0,screenX:f.screenX,screenY:f.screenY,clientX:f.clientX,clientY:f.clientY});return f.target.dispatchEvent(g),!1},U=o=>o.clientX>=window.innerWidth||o.clientX<=0||o.clientY>=window.innerHeight||o.clientY<=0,de=o=>{const f=o.target;s===a||f.tagName!=="IMG"||(G.set(a),V.set(""),se.set(l+1),C.left=o.clientX-Y("Width",X(u.left)),C.top=o.clientY-Y("Height",X(u.top)),t(9,u.transition="none",u),t(9,u.zIndex=l,u),t(9,u.opacity="0.8",u),T(document,"mousemove",q),T(document,"mouseup",L),T(document,"mouseout",J))},L=()=>{s===a&&(G.set(""),V.set(a),t(9,u.transition=null,u),t(9,u.opacity="1",u),j(document,"mousemove",q),j(document,"mouseup",L),j(document,"mouseout",J))},J=o=>{U(o)&&L()},q=o=>{if(v){const f={left:window.innerWidth-v.clientWidth,top:window.innerHeight-v.clientHeight},m=Math.floor(Math.max(0,Math.min(o.clientX-C.left,f.left)));t(9,u.left=`${I("Width",m)}%`,u);let g=o.clientY-C.top;g<0?g=0:g>f.top&&(g=f.top),t(9,u.top=`${I("Height",g)}%`,u)}},K=()=>{const f=D.getBoundingClientRect();let m=f.width,g=f.height,Q="0",Z="0";const x=window.innerWidth*.7;if(m>x){const H=m/x+.1;m/=H,g/=H}const $=window.innerHeight*.7;if(g>$){const H=g/$+.1;g/=H,m/=H}const _e=window.innerWidth-m,we=window.innerHeight-g;Q=Math.random()*_e,Z=Math.random()*we,t(9,u.left=`${Math.floor(I("Width",Q))}%`,u),t(9,u.top=`${Math.floor(I("Height",Z))}%`,u)};Ee(()=>{const o=Math.random(),f={left:"100%",top:"100%"};o>.7?f.left=`-${f.left}`:o<.3&&(f.top=`-${f.top}`),t(9,u.left=f.left,u),t(9,u.top=f.top,u),D.complete&&K()});function pe(o){We.call(this,n,o)}function ge(o){ne[o?"unshift":"push"](()=>{D=o,t(11,D)})}function me(o){ne[o?"unshift":"push"](()=>{v=o,t(10,v)})}return n.$$set=o=>{"external"in o&&t(0,i=o.external),"src"in o&&t(1,a=o.src),"href"in o&&t(2,r=o.href),"pictureClass"in o&&t(3,c=o.pictureClass),"webp"in o&&t(4,p=o.webp)},n.$$.update=()=>{n.$$.dirty&512},[i,a,r,c,p,he,de,L,K,u,v,D,s,h,X,I,Y,U,q,pe,ge,me]}class Ge extends le{constructor(e){super(),ae(this,e,Re,Fe,ce,{external:0,src:1,href:2,pictureClass:3,webp:4,getPos:14,percentFromPixels:15,pixelsFromPercent:16,touchHandler:5,isOutOfBounds:17,onDrag:6,onDrop:7,onMousemove:18,onLoad:8})}get getPos(){return this.$$.ctx[14]}get percentFromPixels(){return this.$$.ctx[15]}get pixelsFromPercent(){return this.$$.ctx[16]}get touchHandler(){return this.$$.ctx[5]}get isOutOfBounds(){return this.$$.ctx[17]}get onDrag(){return this.$$.ctx[6]}get onDrop(){return this.$$.ctx[7]}get onMousemove(){return this.$$.ctx[18]}get onLoad(){return this.$$.ctx[8]}}export{Ge as default};
