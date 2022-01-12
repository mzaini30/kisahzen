import{S as y,i as h,s as v,J as E,k as T,e as u,t as $,m as S,c as d,a as p,h as g,d as c,g as x,H as m,Q as k,R as q,T as A,q as C,o as F}from"../../chunks/vendor-3263695e.js";function b(r){let l,i,a,o,n;const _=r[1].default,t=E(_,r,r[0],null);return{c(){t&&t.c(),l=T(),i=u("div"),a=u("script"),o=$(`document
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
      });`),f.forEach(c),s.forEach(c)},m(e,s){t&&t.m(e,s),x(e,l,s),x(e,i,s),m(i,a),m(a,o),n=!0},p(e,[s]){t&&t.p&&(!n||s&1)&&k(t,_,e,e[0],n?A(_,e[0],s,null):q(e[0]),null)},i(e){n||(C(t,e),n=!0)},o(e){F(t,e),n=!1},d(e){t&&t.d(e),e&&c(l),e&&c(i)}}}function I(r,l,i){let{$$slots:a={},$$scope:o}=l;return r.$$set=n=>{"$$scope"in n&&i(0,o=n.$$scope)},[o,a]}class j extends y{constructor(l){super();h(this,l,I,b,v,{})}}export{j as default};
