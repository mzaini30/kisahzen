function d(){}function P(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function T(){return Object.create(null)}function m(t){t.forEach(M)}function W(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function st(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function J(t){return Object.keys(t).length===0}function K(t,...n){if(t==null)return d;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(K(n,e))}function at(t,n,e,i){if(t){const c=z(t,n,e,i);return t[0](c)}}function z(t,n,e,i){return t[1]&&i?P(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],u=Math.max(n.dirty.length,c.length);for(let o=0;o<u;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function dt(t,n,e,i,c,s){if(c){const u=z(n,e,i,s);t.p(u,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let $=!1;function Q(){$=!0}function R(){$=!1}function U(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const l=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=l?c+1:U(1,c,b=>n[e[b]].claim_order,l))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],u=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);s.reverse(),u.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<u.length;r++){for(;l<s.length&&u[r].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(u[r],a)}}function X(t,n){if($){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){$&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Y(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Z(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function gt(){return A(" ")}function bt(){return A("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t){return function(n){return n.preventDefault(),t.call(this,n)}}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,c=!1){et(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function L(t,n,e,i){return B(t,c=>c.nodeName===n,c=>{const s=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];e[o.name]||s.push(o.name)}s.forEach(u=>c.removeAttribute(u))},()=>i(n))}function Et(t,n,e){return L(t,n,e,Z)}function kt(t,n,e){return L(t,n,e,tt)}function it(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function St(t){return it(t," ")}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Nt(t,n){t.value=n==null?"":n}function jt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function y(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function vt(t){w().$$.on_mount.push(t)}function qt(t){w().$$.after_update.push(t)}function Ct(t,n){w().$$.context.set(t,n)}function Mt(t){return w().$$.context.get(t)}const g=[],O=[],E=[],D=[],F=Promise.resolve();let N=!1;function H(){N||(N=!0,F.then(I))}function Tt(){return H(),F}function j(t){E.push(t)}const v=new Set;let k=0;function I(){const t=p;do{for(;k<g.length;){const n=g[k];k++,y(n),rt(n.$$)}for(y(null),g.length=0,k=0;O.length;)O.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];v.has(e)||(v.add(e),e())}E.length=0}while(g.length);for(;D.length;)D.pop()();N=!1,v.clear(),y(t)}function rt(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const S=new Set;let _;function zt(){_={r:0,c:[],p:_}}function Bt(){_.r||m(_.c),_=_.p}function ct(t,n){t&&t.i&&(S.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if(S.has(t))return;S.add(t),_.c.push(()=>{S.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Ot(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const u=t[s],o=n[s];if(o){for(const r in u)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[s]=o}else for(const r in u)c[r]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Dt(t){return typeof t=="object"&&t!==null?t:{}}function Ft(t){t&&t.c()}function Ht(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:u,after_update:o}=t.$$;c&&c.m(n,e),i||j(()=>{const r=s.map(M).filter(W);u?u.push(...r):m(r),t.$$.on_mount=[]}),o.forEach(j)}function ot(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(g.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function It(t,n,e,i,c,s,u,o=[-1]){const r=p;y(t);const l=t.$$={fragment:null,ctx:null,props:s,update:d,not_equal:c,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:T(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};u&&u(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,b,...q)=>{const C=q.length?q[0]:b;return l.ctx&&c(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&lt(t,f)),b}):[],l.update(),a=!0,m(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){Q();const f=nt(n.target);l.fragment&&l.fragment.l(f),f.forEach(Y)}else l.fragment&&l.fragment.c();n.intro&&ct(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),R(),I()}y(r)}class Pt{$destroy(){ot(this,1),this.$destroy=d}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Wt(t,n=d){let e;const i=new Set;function c(o){if(G(t,o)&&(t=o,e)){const r=!h.length;for(const l of i)l[1](),h.push(l,t);if(r){for(let l=0;l<h.length;l+=2)h[l][0](h[l+1]);h.length=0}}}function s(o){c(o(t))}function u(o,r=d){const l=[o,r];return i.add(l),i.size===1&&(e=n(c)||d),o(t),()=>{i.delete(l),i.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:u}}export{ot as A,P as B,Wt as C,Tt as D,tt as E,kt as F,X as G,d as H,at as I,xt as J,yt as K,m as L,jt as M,st as N,$t as O,dt as P,ht as Q,_t as R,Pt as S,ft as T,Mt as U,mt as V,Nt as W,nt as a,wt as b,Et as c,Y as d,Z as e,pt as f,it as g,At as h,It as i,gt as j,bt as k,St as l,zt as m,Lt as n,Bt as o,ct as p,Ct as q,qt as r,G as s,A as t,vt as u,Ft as v,Ht as w,ut as x,Ot as y,Dt as z};
