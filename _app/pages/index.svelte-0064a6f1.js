import{S as O,i as R,s as T,e as b,j as E,t as I,c as j,a as x,l as $,g as M,d as f,O as K,b as i,f as y,G as m,h as Z,v as z,N as H,w as L,x as U,p as B,n as D,A as F,L as J,T as Q}from"../chunks/vendor-547f1dc6.js";import{M as V}from"../chunks/meta-407558ab.js";import{p as P}from"../chunks/post-eee2ecd0.js";import{p as W}from"../chunks/stores-53022bf6.js";function w(o,r,a){const s=o.slice();return s[3]=r[a],s}function G(o){let r,a,s,h,p,l,u,_=o[3].judul+"",c,e,n,t=o[3].kategori+"",d,k,S;return{c(){r=b("section"),a=b("a"),s=b("img"),p=E(),l=b("p"),u=b("span"),c=I(_),e=E(),n=b("span"),d=I(t),S=E(),this.h()},l(g){r=j(g,"SECTION",{class:!0});var v=x(r);a=j(v,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var A=x(a);s=j(A,"IMG",{src:!0,alt:!0,class:!0}),p=$(A),l=j(A,"P",{class:!0});var N=x(l);u=j(N,"SPAN",{class:!0});var q=x(u);c=M(q,_),q.forEach(f),e=$(N),n=j(N,"SPAN",{class:!0});var C=x(n);d=M(C,t),C.forEach(f),N.forEach(f),A.forEach(f),S=$(v),v.forEach(f),this.h()},h(){K(s.src,h=o[3].gambar)||i(s,"src",h),i(s,"alt",""),i(s,"class","svelte-1xc0k38"),i(u,"class","judulnya svelte-1xc0k38"),i(n,"class","kategori svelte-1xc0k38"),i(l,"class","svelte-1xc0k38"),i(a,"href",k="/post/"+o[3].slug),i(a,"sveltekit:prefetch",""),i(a,"class","card svelte-1xc0k38"),i(r,"class","app svelte-1xc0k38")},m(g,v){y(g,r,v),m(r,a),m(a,s),m(a,p),m(a,l),m(l,u),m(u,c),m(l,e),m(l,n),m(n,d),m(r,S)},p(g,v){v&1&&!K(s.src,h=g[3].gambar)&&i(s,"src",h),v&1&&_!==(_=g[3].judul+"")&&Z(c,_),v&1&&t!==(t=g[3].kategori+"")&&Z(d,t),v&1&&k!==(k="/post/"+g[3].slug)&&i(a,"href",k)},d(g){g&&f(r)}}}function X(o){let r,a,s,h,p,l,u;r=new V({});let _=o[0],c=[];for(let e=0;e<_.length;e+=1)c[e]=G(w(o,_,e));return{c(){z(r.$$.fragment),a=E(),s=b("h1"),h=I("Kisah Zen"),p=E(),l=b("main");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){const n=H('[data-svelte="svelte-8i0ezi"]',document.head);L(r.$$.fragment,n),n.forEach(f),a=$(e),s=j(e,"H1",{class:!0});var t=x(s);h=M(t,"Kisah Zen"),t.forEach(f),p=$(e),l=j(e,"MAIN",{class:!0});var d=x(l);for(let k=0;k<c.length;k+=1)c[k].l(d);d.forEach(f),this.h()},h(){document.title="Kisah Zen",i(s,"class","judul svelte-1xc0k38"),i(l,"class","semua-app svelte-1xc0k38")},m(e,n){U(r,document.head,null),y(e,a,n),y(e,s,n),m(s,h),y(e,p,n),y(e,l,n);for(let t=0;t<c.length;t+=1)c[t].m(l,null);u=!0},p(e,[n]){if(n&1){_=e[0];let t;for(t=0;t<_.length;t+=1){const d=w(e,_,t);c[t]?c[t].p(d,n):(c[t]=G(d),c[t].c(),c[t].m(l,null))}for(;t<c.length;t+=1)c[t].d(1);c.length=_.length}},i(e){u||(B(r.$$.fragment,e),u=!0)},o(e){D(r.$$.fragment,e),u=!1},d(e){F(r),e&&f(a),e&&f(s),e&&f(p),e&&f(l),J(c,e)}}}function Y(o,r,a){let s;Q(o,W,l=>a(1,s=l));let h=P;function p(){if(location.search){let l=decodeURIComponent(location.search.replace("?kategori=",""));console.log(l),a(0,h=P.filter(u=>u.kategori==l))}else a(0,h=P)}return p(),o.$$.update=()=>{o.$$.dirty&2&&(s.url.searchParams.get("kategori"),p())},[h,s]}class le extends O{constructor(r){super();R(this,r,Y,X,T,{})}}export{le as default};
