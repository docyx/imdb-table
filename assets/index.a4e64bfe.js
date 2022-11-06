(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function T(){}function xe(e){return e()}function ue(){return Object.create(null)}function I(e){e.forEach(xe)}function Te(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ie(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode.removeChild(e)}function H(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function x(){return A(" ")}function Me(){return A("")}function O(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ne(e){return Array.from(e.childNodes)}function oe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ae(e,t){e.value=t==null?"":t}function Pe(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,r,t),l}let D;function q(e){D=e}function Ee(){if(!D)throw new Error("Function called outside component initialization");return D}function Re(e){Ee().$$.on_mount.push(e)}function Be(){const e=Ee();return(t,n,{cancelable:r=!1}={})=>{const l=e.$$.callbacks[t];if(l){const o=Pe(t,n,{cancelable:r});return l.slice().forEach(c=>{c.call(e,o)}),!o.defaultPrevented}return!0}}const B=[],V=[],W=[],te=[],Se=Promise.resolve();let ne=!1;function Le(){ne||(ne=!0,Se.then(je))}function qe(){return Le(),Se}function le(e){W.push(e)}function Fe(e){te.push(e)}const Y=new Set;let G=0;function je(){const e=D;do{for(;G<B.length;){const t=B[G];G++,q(t),De(t.$$)}for(q(null),B.length=0,G=0;V.length;)V.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];Y.has(n)||(Y.add(n),n())}W.length=0}while(B.length);for(;te.length;)te.pop()();ne=!1,Y.clear(),q(e)}function De(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}const U=new Set;let M;function Ge(){M={r:0,c:[],p:M}}function We(){M.r||I(M.c),M=M.p}function N(e,t){e&&e.i&&(U.delete(e),e.i(t))}function F(e,t,n,r){if(e&&e.o){if(U.has(e))return;U.add(e),M.c.push(()=>{U.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Ue(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function ie(e){e&&e.c()}function J(e,t,n,r){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),r||le(()=>{const c=e.$$.on_mount.map(xe).filter(Te);e.$$.on_destroy?e.$$.on_destroy.push(...c):I(c),e.$$.on_mount=[]}),o.forEach(le)}function K(e,t){const n=e.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function He(e,t){e.$$.dirty[0]===-1&&(B.push(e),Le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,r,l,o,c,s=[-1]){const a=D;q(e);const i=e.$$={fragment:null,ctx:[],props:o,update:T,not_equal:l,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ue(),dirty:s,skip_bound:!1,root:t.target||a.$$.root};c&&c(i.root);let u=!1;if(i.ctx=n?n(e,t.props||{},(f,d,...y)=>{const _=y.length?y[0]:d;return i.ctx&&l(i.ctx[f],i.ctx[f]=_)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](_),u&&He(e,f)),d}):[],i.update(),u=!0,I(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const f=Ne(t.target);i.fragment&&i.fragment.l(f),f.forEach(w)}else i.fragment&&i.fragment.c();t.intro&&N(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),je()}q(a)}class Q{$destroy(){K(this,1),this.$destroy=T}$on(t,n){if(!Te(n))return T;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ve="https://imdb-table.vercel.app/api",se=async e=>await(await fetch(`${Ve}/${e}`)).json(),Ze=async e=>await se(`search?q=${e}`),ze=async e=>(await se(`id?id=${e}`)).id,Je=async e=>await se(`ratings?id=${e}`);var Ke=typeof global=="object"&&global&&global.Object===Object&&global;const Xe=Ke;var Qe=typeof self=="object"&&self&&self.Object===Object&&self,Ye=Xe||Qe||Function("return this")();const Oe=Ye;var et=Oe.Symbol;const Z=et;var Ae=Object.prototype,tt=Ae.hasOwnProperty,nt=Ae.toString,R=Z?Z.toStringTag:void 0;function lt(e){var t=tt.call(e,R),n=e[R];try{e[R]=void 0;var r=!0}catch{}var l=nt.call(e);return r&&(t?e[R]=n:delete e[R]),l}var rt=Object.prototype,ot=rt.toString;function it(e){return ot.call(e)}var st="[object Null]",ct="[object Undefined]",fe=Z?Z.toStringTag:void 0;function ut(e){return e==null?e===void 0?ct:st:fe&&fe in Object(e)?lt(e):it(e)}function at(e){return e!=null&&typeof e=="object"}var ft="[object Symbol]";function dt(e){return typeof e=="symbol"||at(e)&&ut(e)==ft}var pt=/\s/;function ht(e){for(var t=e.length;t--&&pt.test(e.charAt(t)););return t}var mt=/^\s+/;function gt(e){return e&&e.slice(0,ht(e)+1).replace(mt,"")}function re(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var de=0/0,_t=/^[-+]0x[0-9a-f]+$/i,bt=/^0b[01]+$/i,yt=/^0o[0-7]+$/i,vt=parseInt;function pe(e){if(typeof e=="number")return e;if(dt(e))return de;if(re(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=re(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=gt(e);var n=bt.test(e);return n||yt.test(e)?vt(e.slice(2),n?2:8):_t.test(e)?de:+e}var wt=function(){return Oe.Date.now()};const ee=wt;var $t="Expected a function",kt=Math.max,Ct=Math.min;function xt(e,t,n){var r,l,o,c,s,a,i=0,u=!1,f=!1,d=!0;if(typeof e!="function")throw new TypeError($t);t=pe(t)||0,re(n)&&(u=!!n.leading,f="maxWait"in n,o=f?kt(pe(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d);function y(k){var j=r,P=l;return r=l=void 0,i=k,c=e.apply(P,j),c}function _(k){return i=k,s=setTimeout($,t),u?y(k):c}function v(k){var j=k-a,P=k-i,ce=t-j;return f?Ct(ce,o-P):ce}function S(k){var j=k-a,P=k-i;return a===void 0||j>=t||j<0||f&&P>=o}function $(){var k=ee();if(S(k))return h(k);s=setTimeout($,v(k))}function h(k){return s=void 0,d&&r?y(k):(r=l=void 0,c)}function E(){s!==void 0&&clearTimeout(s),i=0,r=a=l=s=void 0}function m(){return s===void 0?c:h(ee())}function L(){var k=ee(),j=S(k);if(r=arguments,l=this,a=k,j){if(s===void 0)return _(a);if(f)return clearTimeout(s),s=setTimeout($,t),y(a)}return s===void 0&&(s=setTimeout($,t)),c}return L.cancel=E,L.flush=m,L}function he(e,t,n){const r=e.slice();return r[11]=t[n],r}function me(e){let t,n,r=e[2].length===0&&e[1].trim()!=="",l=e[2],o=[];for(let s=0;s<l.length;s+=1)o[s]=_e(he(e,l,s));let c=r&&be();return{c(){t=b("div");for(let s=0;s<o.length;s+=1)o[s].c();n=x(),c&&c.c(),p(t,"class","absolute bg-neutral-800 w-full text-lg font-medium max-h-56 overflow-scroll")},m(s,a){C(s,t,a);for(let i=0;i<o.length;i+=1)o[i].m(t,null);g(t,n),c&&c.m(t,null)},p(s,a){if(a&20){l=s[2];let i;for(i=0;i<l.length;i+=1){const u=he(s,l,i);o[i]?o[i].p(u,a):(o[i]=_e(u),o[i].c(),o[i].m(t,n))}for(;i<o.length;i+=1)o[i].d(1);o.length=l.length}a&6&&(r=s[2].length===0&&s[1].trim()!==""),r?c||(c=be(),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},d(s){s&&w(t),H(o,s),c&&c.d()}}}function ge(e){let t,n,r=e[11].secondaryLabel+"",l;return{c(){t=b("span"),n=A("\u2022 "),l=A(r),p(t,"class","text-neutral-400")},m(o,c){C(o,t,c),g(t,n),g(t,l)},p(o,c){c&4&&r!==(r=o[11].secondaryLabel+"")&&oe(l,r)},d(o){o&&w(t)}}}function _e(e){let t,n=e[11].label+"",r,l,o,c,s=e[11].secondaryLabel&&ge(e);function a(){return e[10](e[11])}return{c(){t=b("button"),r=A(n),l=x(),s&&s.c(),p(t,"class","w-full p-3 hover:bg-neutral-700 text-left")},m(i,u){C(i,t,u),g(t,r),g(t,l),s&&s.m(t,null),o||(c=O(t,"click",a),o=!0)},p(i,u){e=i,u&4&&n!==(n=e[11].label+"")&&oe(r,n),e[11].secondaryLabel?s?s.p(e,u):(s=ge(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(i){i&&w(t),s&&s.d(),o=!1,c()}}}function be(e){let t;return{c(){t=b("p"),t.textContent="No results found.",p(t,"class","text-neutral-500 p-3")},m(n,r){C(n,t,r)},d(n){n&&w(t)}}}function Tt(e){let t,n,r,l=e[3]&&e[1].trim()!=="",o,c,s=l&&me(e);return{c(){t=b("div"),n=b("input"),r=x(),s&&s.c(),p(n,"type","text"),p(n,"class","bg-transparent border-b border-b-white p-1 text-xl focus:outline-none focus:border-b-yellow-400 transition-colors"),p(n,"placeholder","TV show name"),p(t,"class","relative"),p(t,"id","container")},m(a,i){C(a,t,i),g(t,n),e[7](n),ae(n,e[1]),g(t,r),s&&s.m(t,null),o||(c=[O(n,"input",e[8]),O(n,"input",e[5]),O(n,"focus",e[9])],o=!0)},p(a,[i]){i&2&&n.value!==a[1]&&ae(n,a[1]),i&10&&(l=a[3]&&a[1].trim()!==""),l?s?s.p(a,i):(s=me(a),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i:T,o:T,d(a){a&&w(t),e[7](null),s&&s.d(),o=!1,I(c)}}}function Et(e,t,n){let{inputEl:r=null}=t,{getAutocompletions:l}=t;const o=Be();let c="",s=[],a=!1;const i=xt(()=>{if(c===""){n(2,s=[]);return}l(c).then(_=>n(2,s=_))},300);function u(_){V[_?"unshift":"push"](()=>{r=_,n(0,r)})}function f(){c=this.value,n(1,c)}const d=()=>n(3,a=!0),y=_=>o("autocomplete-click",_.id);return e.$$set=_=>{"inputEl"in _&&n(0,r=_.inputEl),"getAutocompletions"in _&&n(6,l=_.getAutocompletions)},[r,c,s,a,o,i,l,u,f,d,y]}class St extends Q{constructor(t){super(),X(this,t,Et,Tt,z,{inputEl:0,getAutocompletions:6})}}function Lt(e){let t;return{c(){t=b("a"),t.innerHTML='<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#facc15; color:#151513; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm svelte-10qsoqp"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',p(t,"href","https://github.com/docyx/imdb-table"),p(t,"class","github-corner svelte-10qsoqp"),p(t,"aria-label","View source on GitHub")},m(n,r){C(n,t,r)},p:T,i:T,o:T,d(n){n&&w(t)}}}class jt extends Q{constructor(t){super(),X(this,t,null,Lt,z,{})}}function ye(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function ve(e,t,n){const r=e.slice();return r[10]=t[n],r[12]=n,r}function we(e,t,n){const r=e.slice();return r[13]=t[n],r[15]=n,r}function $e(e){let t,n=e[15]+1+"",r,l;return{c(){t=b("th"),r=A(n),p(t,"scope","col"),p(t,"class",l=`${e[2]===e[15]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)},m(o,c){C(o,t,c),g(t,r)},p(o,c){c&4&&l!==(l=`${o[2]===o[15]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)&&p(t,"class",l)},d(o){o&&w(t)}}}function Ot(e){let t;return{c(){t=b("td"),p(t,"class","bg-neutral-700"),p(t,"title","This episode is not rated on IMDb.")},m(n,r){C(n,t,r)},p:T,d(n){n&&w(t)}}}function At(e){let t,n,r=e[10][0].toFixed(1)+"",l,o,c,s,a;function i(){return e[5](e[9],e[12])}return{c(){t=b("td"),n=b("a"),l=A(r),p(n,"class","block p-1"),p(n,"href",o=`https://www.imdb.com/title/${e[10][1]}/`),p(t,"class",c=`${e[4](e[10][0])}`)},m(u,f){C(u,t,f),g(t,n),g(n,l),s||(a=[O(t,"mouseenter",i),O(t,"mouseleave",e[6])],s=!0)},p(u,f){e=u,f&1&&r!==(r=e[10][0].toFixed(1)+"")&&oe(l,r),f&1&&o!==(o=`https://www.imdb.com/title/${e[10][1]}/`)&&p(n,"href",o),f&1&&c!==(c=`${e[4](e[10][0])}`)&&p(t,"class",c)},d(u){u&&w(t),s=!1,I(a)}}}function ke(e){let t;function n(o,c){return o[10]?At:Ot}let r=n(e),l=r(e);return{c(){l.c(),t=Me()},m(o,c){l.m(o,c),C(o,t,c)},p(o,c){r===(r=n(o))&&l?l.p(o,c):(l.d(1),l=r(o),l&&(l.c(),l.m(t.parentNode,t)))},d(o){l.d(o),o&&w(t)}}}function Ce(e){let t,n,r=e[9]+1+"",l,o,c,s,a=e[7],i=[];for(let u=0;u<a.length;u+=1)i[u]=ke(ve(e,a,u));return{c(){t=b("tr"),n=b("th"),l=A(r),c=x();for(let u=0;u<i.length;u+=1)i[u].c();s=x(),p(n,"scope","row"),p(n,"class",o=`${e[1]===e[9]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`),p(t,"class","p-2")},m(u,f){C(u,t,f),g(t,n),g(n,l),g(t,c);for(let d=0;d<i.length;d+=1)i[d].m(t,null);g(t,s)},p(u,f){if(f&2&&o!==(o=`${u[1]===u[9]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`)&&p(n,"class",o),f&23){a=u[7];let d;for(d=0;d<a.length;d+=1){const y=ve(u,a,d);i[d]?i[d].p(y,f):(i[d]=ke(y),i[d].c(),i[d].m(t,s))}for(;d<i.length;d+=1)i[d].d(1);i.length=a.length}},d(u){u&&w(t),H(i,u)}}}function It(e){let t,n,r,l,o,c,s,a,i,u,f,d,y,_=Array(e[3]),v=[];for(let h=0;h<_.length;h+=1)v[h]=$e(we(e,_,h));let S=e[0],$=[];for(let h=0;h<S.length;h+=1)$[h]=Ce(ye(e,S,h));return{c(){t=b("div"),t.innerHTML=`<div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6"><div class="flex items-center"><div class="w-5 h-5 bg-green-500 mr-2"></div> 
      <p>8.5\u201310.0</p></div> 
    <div class="flex items-center"><div class="w-5 h-5 bg-yellow-500 mr-2"></div> 
      <p>7.6\u20138.4</p></div> 
    <div class="flex items-center"><div class="w-5 h-5 bg-orange-500 mr-2"></div> 
      <p>6.5\u20137.5</p></div> 
    <div class="flex items-center"><div class="w-5 h-5 bg-red-500 mr-2"></div> 
      <p>0.0\u20136.4</p></div></div>`,n=x(),r=b("div"),l=b("div"),o=b("table"),c=b("tr"),s=b("th"),a=x();for(let h=0;h<v.length;h+=1)v[h].c();i=x();for(let h=0;h<$.length;h+=1)$[h].c();u=x(),f=b("p"),f.textContent="Episode",d=x(),y=b("p"),y.textContent="Season",p(t,"class","mb-3 flex items-center justify-center"),p(c,"class","sticky top-0 bg-neutral-900"),p(o,"class","table-auto m-auto"),p(f,"class","absolute text-xl top-0 left-0 right-0 mx-auto"),p(y,"class","absolute text-xl -left-9 top-1/2 bottom-1/2 transform -rotate-90"),p(l,"class","relative p-8"),p(r,"class","max-w-[100vw] overflow-x-auto")},m(h,E){C(h,t,E),C(h,n,E),C(h,r,E),g(r,l),g(l,o),g(o,c),g(c,s),g(c,a);for(let m=0;m<v.length;m+=1)v[m].m(c,null);g(o,i);for(let m=0;m<$.length;m+=1)$[m].m(o,null);g(l,u),g(l,f),g(l,d),g(l,y)},p(h,[E]){if(E&4){_=Array(h[3]);let m;for(m=0;m<_.length;m+=1){const L=we(h,_,m);v[m]?v[m].p(L,E):(v[m]=$e(L),v[m].c(),v[m].m(c,null))}for(;m<v.length;m+=1)v[m].d(1);v.length=_.length}if(E&23){S=h[0];let m;for(m=0;m<S.length;m+=1){const L=ye(h,S,m);$[m]?$[m].p(L,E):($[m]=Ce(L),$[m].c(),$[m].m(o,null))}for(;m<$.length;m+=1)$[m].d(1);$.length=S.length}},i:T,o:T,d(h){h&&w(t),h&&w(n),h&&w(r),H(v,h),H($,h)}}}function Mt(e,t,n){let{ratings:r}=t,l=null,o=null,c=r.reduce((u,f)=>f.length>u?f.length:u,0);const s=u=>u>=8.5?"bg-green-500":u>=7.6?"bg-yellow-500":u>=6.5?"bg-orange-500":"bg-red-500",a=(u,f)=>{n(1,l=u),n(2,o=f)},i=()=>{n(1,l=null),n(2,o=null)};return e.$$set=u=>{"ratings"in u&&n(0,r=u.ratings)},[r,l,o,c,s,a,i]}class Nt extends Q{constructor(t){super(),X(this,t,Mt,It,z,{ratings:0})}}function Pt(e){let t,n,r,l,o,c;function s(i){e[7](i)}let a={getAutocompletions:e[3]};return e[0]!==void 0&&(a.inputEl=e[0]),l=new St({props:a}),V.push(()=>Ue(l,"inputEl",s)),l.$on("autocomplete-click",e[4]),{c(){t=b("div"),n=b("h1"),n.textContent="IMDb Table",r=x(),ie(l.$$.fragment),p(n,"class","text-5xl font-bold mb-4 text-center"),p(t,"class","m-auto")},m(i,u){C(i,t,u),g(t,n),g(t,r),J(l,t,null),c=!0},p(i,u){const f={};!o&&u&1&&(o=!0,f.inputEl=i[0],Fe(()=>o=!1)),l.$set(f)},i(i){c||(N(l.$$.fragment,i),c=!0)},o(i){F(l.$$.fragment,i),c=!1},d(i){i&&w(t),K(l)}}}function Rt(e){let t,n,r,l,o,c,s,a,i,u;return n=new Nt({props:{ratings:e[2]}}),{c(){t=b("div"),ie(n.$$.fragment),r=x(),l=b("div"),o=b("button"),o.textContent="\u{1F4CB} Copy link",c=x(),s=b("button"),s.textContent="\u2B05\uFE0F Go back",p(o,"class","bg-transparent text-yellow-400"),p(s,"class","bg-transparent text-yellow-400"),p(l,"class","flex flex-col mt-4 space-y-3"),p(t,"class","text-center py-4 m-auto")},m(f,d){C(f,t,d),J(n,t,null),g(t,r),g(t,l),g(l,o),g(l,c),g(l,s),a=!0,i||(u=[O(o,"click",e[6]),O(s,"click",e[5])],i=!0)},p(f,d){const y={};d&4&&(y.ratings=f[2]),n.$set(y)},i(f){a||(N(n.$$.fragment,f),a=!0)},o(f){F(n.$$.fragment,f),a=!1},d(f){f&&w(t),K(n),i=!1,I(u)}}}function Bt(e){let t;return{c(){t=b("p"),t.textContent="Loading...",p(t,"class","m-auto")},m(n,r){C(n,t,r)},p:T,i:T,o:T,d(n){n&&w(t)}}}function qt(e){let t,n,r,l,o,c;t=new jt({});const s=[Bt,Rt,Pt],a=[];function i(u,f){return u[1]?0:u[2].length?1:2}return l=i(e),o=a[l]=s[l](e),{c(){ie(t.$$.fragment),n=x(),r=b("div"),o.c(),p(r,"class","min-h-[90vh] flex m-auto")},m(u,f){J(t,u,f),C(u,n,f),C(u,r,f),a[l].m(r,null),c=!0},p(u,[f]){let d=l;l=i(u),l===d?a[l].p(u,f):(Ge(),F(a[d],1,1,()=>{a[d]=null}),We(),o=a[l],o?o.p(u,f):(o=a[l]=s[l](u),o.c()),N(o,1),o.m(r,null))},i(u){c||(N(t.$$.fragment,u),N(o),c=!0)},o(u){F(t.$$.fragment,u),F(o),c=!1},d(u){K(t,u),u&&w(n),u&&w(r),a[l].d()}}}function Ft(e,t,n){let r=null,l=!1,o=[];Re(async()=>{const y=new URLSearchParams(location.search).get("id");y?await i(y):r==null||r.focus()});const c=async d=>(await Ze(d)).map(_=>{var v;return{id:_.id,label:_.title,secondaryLabel:(v=_.year)==null?void 0:v.toString()}}),s=async d=>await i(d.detail),a=async()=>{n(2,o=[]),history.pushState({},"","/imdb-table/"),await qe(),r==null||r.focus()},i=async d=>{try{n(1,l=!0);const y=await ze(d);if(!y){n(1,l=!1);return}const _=await Je(y);n(1,l=!1),n(2,o=_);const v=new URLSearchParams(location.search);v.set("id",d),history.pushState({},"",`${location.href.split("?")[0]}?${v}`)}catch{n(1,l=!1)}},u=()=>{navigator.clipboard.writeText(location.href)};function f(d){r=d,n(0,r)}return[r,l,o,c,s,a,u,f]}class Dt extends Q{constructor(t){super(),X(this,t,Ft,qt,z,{})}}new Dt({target:document.getElementById("app")});
