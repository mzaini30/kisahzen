import{S as Z,i as w,s as A,e as g,t as M,k as E,c as v,a as k,h as q,d as f,m as b,b as p,g as j,H as y,j as H,w as I,O as L,x as O,y as z,q as B,o as C,B as N,M as U,U as D}from"../chunks/vendor-3263695e.js";import{M as F}from"../chunks/meta-58d51597.js";import{p as S}from"../chunks/post-ecd33c6f.js";import{p as G}from"../chunks/stores-c7647922.js";function K(i,a,s){const t=i.slice();return t[3]=a[s],t}function P(i){let a,s,t=i[3].judul+"",u,h,n;return{c(){a=g("li"),s=g("a"),u=M(t),n=E(),this.h()},l(r){a=v(r,"LI",{class:!0});var c=k(a);s=v(c,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var _=k(s);u=q(_,t),_.forEach(f),n=b(c),c.forEach(f),this.h()},h(){p(s,"href",h="/post/"+i[3].slug),p(s,"sveltekit:prefetch",""),p(s,"class","hover:underline"),p(a,"class","svelte-169o244")},m(r,c){j(r,a,c),y(a,s),y(s,u),y(a,n)},p(r,c){c&1&&t!==(t=r[3].judul+"")&&H(u,t),c&1&&h!==(h="/post/"+r[3].slug)&&p(s,"href",h)},d(r){r&&f(a)}}}function J(i){let a,s,t,u,h,n,r,c;a=new F({});let _=i[0],o=[];for(let e=0;e<_.length;e+=1)o[e]=P(K(i,_,e));return{c(){I(a.$$.fragment),s=E(),t=g("h1"),u=M("Semua Kisah Zen"),h=E(),n=g("main"),r=g("ol");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){const m=L('[data-svelte="svelte-8i0ezi"]',document.head);O(a.$$.fragment,m),m.forEach(f),s=b(e),t=v(e,"H1",{class:!0});var l=k(t);u=q(l,"Semua Kisah Zen"),l.forEach(f),h=b(e),n=v(e,"MAIN",{class:!0});var d=k(n);r=v(d,"OL",{});var x=k(r);for(let $=0;$<o.length;$+=1)o[$].l(x);x.forEach(f),d.forEach(f),this.h()},h(){document.title="Kisah Zen",p(t,"class","judul svelte-169o244"),p(n,"class","semua-app svelte-169o244")},m(e,m){z(a,document.head,null),j(e,s,m),j(e,t,m),y(t,u),j(e,h,m),j(e,n,m),y(n,r);for(let l=0;l<o.length;l+=1)o[l].m(r,null);c=!0},p(e,[m]){if(m&1){_=e[0];let l;for(l=0;l<_.length;l+=1){const d=K(e,_,l);o[l]?o[l].p(d,m):(o[l]=P(d),o[l].c(),o[l].m(r,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=_.length}},i(e){c||(B(a.$$.fragment,e),c=!0)},o(e){C(a.$$.fragment,e),c=!1},d(e){N(a),e&&f(s),e&&f(t),e&&f(h),e&&f(n),U(o,e)}}}function Q(i,a,s){let t;D(i,G,n=>s(1,t=n));let u=S;function h(){if(t.url.searchParams.get("kategori")){let n=t.url.searchParams.get("kategori");s(0,u=S.filter(r=>r.kategori==n))}else s(0,u=S)}return i.$$.update=()=>{i.$$.dirty&2&&(t.url.searchParams.get("kategori"),h())},[u,t]}class X extends Z{constructor(a){super();w(this,a,Q,J,A,{})}}export{X as default};
