import{S as t,i as s,s as e,e as l,t as o,c as n,a as r,b as a,d as h,f as c,g as f,h as i,C as u,y as g,n as p,l as d}from"./client.d0e59491.js";function m(t,s,e){const l=t.slice();return l[1]=s[e],l}function v(t){let s,e,g,p,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),g=o(d),this.h()},l(t){s=n(t,"LI",{});var l=r(s);e=n(l,"A",{rel:!0,href:!0});var o=r(e);g=a(o,d),o.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",p="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,g)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(g,d),1&s&&p!==(p="blog/"+t[1].slug)&&c(e,"href",p)},d(t){t&&h(s)}}}function E(t){let s,e,c,u=t[0],E=[];for(let s=0;s<u.length;s+=1)E[s]=v(m(t,u,s));return{c(){s=l("h1"),e=o("Recent posts"),c=l("ul");for(let t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){g('[data-svelte="svelte-8igfff"]',document.head).forEach(h),s=n(t,"H1",{});var l=r(s);e=a(l,"Recent posts"),l.forEach(h),c=n(t,"UL",{});var o=r(c);for(let t=0;t<E.length;t+=1)E[t].l(o);o.forEach(h),this.h()},h(){document.title="Blog"},m(t,l){f(t,s,l),i(s,e),f(t,c,l);for(let t=0;t<E.length;t+=1)E[t].m(c,null)},p(t,[s]){if(1&s){let e;for(u=t[0],e=0;e<u.length;e+=1){const l=m(t,u,e);E[e]?E[e].p(l,s):(E[e]=v(l),E[e].c(),E[e].m(c,null))}for(;e<E.length;e+=1)E[e].d(1);E.length=u.length}},i:p,o:p,d(t){t&&h(s),t&&h(c),d(E,t)}}}async function b({params:t,query:s}){const e=await this.fetch("blog.json");return{posts:await e.json()}}function j(t,s,e){let{posts:l}=s;return t.$set=(t=>{"posts"in t&&e(0,l=t.posts)}),[l]}export default class extends t{constructor(t){super(),s(this,t,j,E,e,{posts:0})}}export{b as preload};
