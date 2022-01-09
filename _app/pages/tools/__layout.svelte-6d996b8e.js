import{S as y,i as h,s as v,I as E,j as $,e as u,t as T,l as S,c as d,a as p,g,d as c,f as x,G as m,P as A,Q as C,R as F,p as b,n as k}from"../../chunks/vendor-44dfed64.js";function q(r){let l,i,a,o,n;const _=r[1].default,t=E(_,r,r[0],null);return{c(){t&&t.c(),l=$(),i=u("div"),a=u("script"),o=T(`document
      .querySelectorAll(".shiki code .line span:first-child")
      .forEach((x) => {
        if (
          (x.innerText == "+" || x.innerText == "-" || x.innerText == "!") &&
          x.getAttribute("style") == "color: #ECEFF4"
        ) {
          x.style.display = "none";
        }
      });`)},l(e){t&&t.l(e),l=S(e),i=d(e,"DIV",{});var s=p(i);a=d(s,"SCRIPT",{});var f=p(a);o=g(f,`document
      .querySelectorAll(".shiki code .line span:first-child")
      .forEach((x) => {
        if (
          (x.innerText == "+" || x.innerText == "-" || x.innerText == "!") &&
          x.getAttribute("style") == "color: #ECEFF4"
        ) {
          x.style.display = "none";
        }
      });`),f.forEach(c),s.forEach(c)},m(e,s){t&&t.m(e,s),x(e,l,s),x(e,i,s),m(i,a),m(a,o),n=!0},p(e,[s]){t&&t.p&&(!n||s&1)&&A(t,_,e,e[0],n?F(_,e[0],s,null):C(e[0]),null)},i(e){n||(b(t,e),n=!0)},o(e){k(t,e),n=!1},d(e){t&&t.d(e),e&&c(l),e&&c(i)}}}function I(r,l,i){let{$$slots:a={},$$scope:o}=l;return r.$$set=n=>{"$$scope"in n&&i(0,o=n.$$scope)},[o,a]}class P extends y{constructor(l){super();h(this,l,I,q,v,{})}}export{P as default};
