import{S as s,i as t,s as e,j as l,g as a,d as n,e as r,t as c,y as o,c as i,a as h,b as u,f,h as m,n as d,l as p}from"./client.d0e59491.js";function g(s,t,e){const l=s.slice();return l[1]=t[e],l}function y(s){let t,e;return{c(){t=r("video"),this.h()},l(s){t=i(s,"VIDEO",{class:!0,src:!0,autoplay:!0,loop:!0,muted:!0,playsinline:!0}),h(t).forEach(n),this.h()},h(){f(t,"class","item svelte-1f9em6n"),t.src!==(e=s[1].url)&&f(t,"src",e),t.autoplay=!0,t.loop=!0,t.muted=!0,t.playsInline=!0},m(s,e){a(s,t,e)},p(s,l){1&l&&t.src!==(e=s[1].url)&&f(t,"src",e)},d(s){s&&n(t)}}}function v(s){let t,e;return{c(){t=r("img"),this.h()},l(s){t=i(s,"IMG",{class:!0,src:!0}),this.h()},h(){f(t,"class","item svelte-1f9em6n"),t.src!==(e=s[1].url)&&f(t,"src",e)},m(s,e){a(s,t,e)},p(s,l){1&l&&t.src!==(e=s[1].url)&&f(t,"src",e)},d(s){s&&n(t)}}}function E(s){let t,e;function r(s,e){return(null==t||1&e)&&(t=!!s[1].contentType.startsWith("image")),t?v:y}let c=r(s,-1),o=c(s);return{c(){o.c(),e=l()},l(s){o.l(s),e=l()},m(s,t){o.m(s,t),a(s,e,t)},p(s,t){c===(c=r(s,t))&&o?o.p(s,t):(o.d(1),(o=c(s))&&(o.c(),o.m(e.parentNode,e)))},d(s){o.d(s),s&&n(e)}}}function I(s){let t,e,l,y,v,I=s[0],j=[];for(let t=0;t<I.length;t+=1)j[t]=E(g(s,I,t));return{c(){t=r("div"),e=r("h1"),l=c("Snippets of my work in (mostly) chronological order"),y=r("div"),v=r("div");for(let s=0;s<j.length;s+=1)j[s].c();this.h()},l(s){o('[data-svelte="svelte-1iatj35"]',document.head).forEach(n),t=i(s,"DIV",{class:!0});var a=h(t);e=i(a,"H1",{class:!0});var r=h(e);l=u(r,"Snippets of my work in (mostly) chronological order"),r.forEach(n),a.forEach(n),y=i(s,"DIV",{class:!0});var c=h(y);v=i(c,"DIV",{class:!0});var f=h(v);for(let s=0;s<j.length;s+=1)j[s].l(f);f.forEach(n),c.forEach(n),this.h()},h(){document.title="Gallery",f(e,"class","title"),f(t,"class","content"),f(v,"class","assets svelte-1f9em6n"),f(y,"class","container")},m(s,n){a(s,t,n),m(t,e),m(e,l),a(s,y,n),m(y,v);for(let s=0;s<j.length;s+=1)j[s].m(v,null)},p(s,[t]){if(1&t){let e;for(I=s[0],e=0;e<I.length;e+=1){const l=g(s,I,e);j[e]?j[e].p(l,t):(j[e]=E(l),j[e].c(),j[e].m(v,null))}for(;e<j.length;e+=1)j[e].d(1);j.length=I.length}},i:d,o:d,d(s){s&&n(t),s&&n(y),p(j,s)}}}async function j({params:s,query:t}){const e=await this.fetch("gallary.json");return{assets:await e.json()}}function w(s,t,e){let{assets:l}=t;return s.$set=(s=>{"assets"in s&&e(0,l=s.assets)}),[l]}export default class extends s{constructor(s){super(),t(this,s,w,I,e,{assets:0})}}export{j as preload};
