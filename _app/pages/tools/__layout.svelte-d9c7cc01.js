import{S as y,i as h,s as v,I as E,j as $,e as u,t as T,l as S,c as d,a as p,g as b,d as c,f as x,G as m,P as g,Q as A,R as C,p as F,n as k}from"../../chunks/vendor-ba00745c.js";function q(r){let l,a,i,o,n;const _=r[1].default,t=E(_,r,r[0],null);return{c(){t&&t.c(),l=$(),a=u("div"),i=u("script"),o=T(`document
      .querySelectorAll(".shiki code .line span:first-child")
      .forEach((x) => {
        if (
          (x.innerText == "+" || x.innerText == "-" || x.innerText == "!") &&
          x.getAttribute("style") == "color: #ECEFF4"
        ) {
          x.style.display = "none";
        }
      });`)},l(e){t&&t.l(e),l=S(e),a=d(e,"DIV",{});var s=p(a);i=d(s,"SCRIPT",{});var f=p(i);o=b(f,`document
      .querySelectorAll(".shiki code .line span:first-child")
      .forEach((x) => {
        if (
          (x.innerText == "+" || x.innerText == "-" || x.innerText == "!") &&
          x.getAttribute("style") == "color: #ECEFF4"
        ) {
          x.style.display = "none";
        }
      });`),f.forEach(c),s.forEach(c)},m(e,s){t&&t.m(e,s),x(e,l,s),x(e,a,s),m(a,i),m(i,o),n=!0},p(e,[s]){t&&t.p&&(!n||s&1)&&g(t,_,e,e[0],n?C(_,e[0],s,null):A(e[0]),null)},i(e){n||(F(t,e),n=!0)},o(e){k(t,e),n=!1},d(e){t&&t.d(e),e&&c(l),e&&c(a)}}}function I(r,l,a){let{$$slots:i={},$$scope:o}=l;return r.$$set=n=>{"$$scope"in n&&a(0,o=n.$$scope)},[o,i]}class P extends y{constructor(l){super();h(this,l,I,q,v,{})}}export{P as default};
