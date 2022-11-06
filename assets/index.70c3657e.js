(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function E(){}function Ee(e){return e()}function ce(){return Object.create(null)}function O(e){e.forEach(Ee)}function Te(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ne(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function D(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function C(){return j(" ")}function Me(){return j("")}function L(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Pe(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ue(e,t){e.value=t==null?"":t}function Re(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,l,t),r}let q;function R(e){q=e}function Se(){if(!q)throw new Error("Function called outside component initialization");return q}function Be(e){Se().$$.on_mount.push(e)}function qe(){const e=Se();return(t,n,{cancelable:l=!1}={})=>{const r=e.$$.callbacks[t];if(r){const o=Re(t,n,{cancelable:l});return r.slice().forEach(c=>{c.call(e,o)}),!o.defaultPrevented}return!0}}const P=[],U=[],G=[],ee=[],Le=Promise.resolve();let te=!1;function je(){te||(te=!0,Le.then(Oe))}function Fe(){return je(),Le}function ne(e){G.push(e)}function Ge(e){ee.push(e)}const Q=new Set;let F=0;function Oe(){const e=q;do{for(;F<P.length;){const t=P[F];F++,R(t),We(t.$$)}for(R(null),P.length=0,F=0;U.length;)U.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];Q.has(n)||(Q.add(n),n())}G.length=0}while(P.length);for(;ee.length;)ee.pop()();te=!1,Q.clear(),R(e)}function We(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const W=new Set;let I;function De(){I={r:0,c:[],p:I}}function Ue(){I.r||O(I.c),I=I.p}function x(e,t){e&&e.i&&(W.delete(e),e.i(t))}function B(e,t,n,l){if(e&&e.o){if(W.has(e))return;W.add(e),I.c.push(()=>{W.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function He(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function oe(e){e&&e.c()}function Z(e,t,n,l){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),l||ne(()=>{const c=e.$$.on_mount.map(Ee).filter(Te);e.$$.on_destroy?e.$$.on_destroy.push(...c):O(c),e.$$.on_mount=[]}),o.forEach(ne)}function z(e,t){const n=e.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ve(e,t){e.$$.dirty[0]===-1&&(P.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,l,r,o,c,s=[-1]){const a=q;R(e);const i=e.$$={fragment:null,ctx:[],props:o,update:E,not_equal:r,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ce(),dirty:s,skip_bound:!1,root:t.target||a.$$.root};c&&c(i.root);let u=!1;if(i.ctx=n?n(e,t.props||{},(f,d,...p)=>{const b=p.length?p[0]:d;return i.ctx&&r(i.ctx[f],i.ctx[f]=b)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](b),u&&Ve(e,f)),d}):[],i.update(),u=!0,O(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const f=Pe(t.target);i.fragment&&i.fragment.l(f),f.forEach($)}else i.fragment&&i.fragment.c();t.intro&&x(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),Oe()}R(a)}class K{$destroy(){z(this,1),this.$destroy=E}$on(t,n){if(!Te(n))return E;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ze="https://imdb-table.vercel.app/api",ie=async e=>await(await fetch(`${Ze}/${e}`)).json(),ze=async e=>await ie(`search?q=${e}`),Je=async e=>(await ie(`id?id=${e}`)).id,Ke=async e=>await ie(`ratings?id=${e}`);var Xe=typeof global=="object"&&global&&global.Object===Object&&global;const Qe=Xe;var Ye=typeof self=="object"&&self&&self.Object===Object&&self,et=Qe||Ye||Function("return this")();const Ae=et;var tt=Ae.Symbol;const H=tt;var Ie=Object.prototype,nt=Ie.hasOwnProperty,lt=Ie.toString,M=H?H.toStringTag:void 0;function rt(e){var t=nt.call(e,M),n=e[M];try{e[M]=void 0;var l=!0}catch{}var r=lt.call(e);return l&&(t?e[M]=n:delete e[M]),r}var ot=Object.prototype,it=ot.toString;function st(e){return it.call(e)}var ct="[object Null]",ut="[object Undefined]",ae=H?H.toStringTag:void 0;function at(e){return e==null?e===void 0?ut:ct:ae&&ae in Object(e)?rt(e):st(e)}function ft(e){return e!=null&&typeof e=="object"}var dt="[object Symbol]";function ht(e){return typeof e=="symbol"||ft(e)&&at(e)==dt}var pt=/\s/;function mt(e){for(var t=e.length;t--&&pt.test(e.charAt(t)););return t}var gt=/^\s+/;function _t(e){return e&&e.slice(0,mt(e)+1).replace(gt,"")}function le(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var fe=0/0,bt=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,vt=/^0o[0-7]+$/i,wt=parseInt;function de(e){if(typeof e=="number")return e;if(ht(e))return fe;if(le(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=le(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=_t(e);var n=yt.test(e);return n||vt.test(e)?wt(e.slice(2),n?2:8):bt.test(e)?fe:+e}var $t=function(){return Ae.Date.now()};const Y=$t;var kt="Expected a function",Ct=Math.max,Et=Math.min;function Tt(e,t,n){var l,r,o,c,s,a,i=0,u=!1,f=!1,d=!0;if(typeof e!="function")throw new TypeError(kt);t=de(t)||0,le(n)&&(u=!!n.leading,f="maxWait"in n,o=f?Ct(de(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d);function p(w){var S=l,N=r;return l=r=void 0,i=w,c=e.apply(N,S),c}function b(w){return i=w,s=setTimeout(T,t),u?p(w):c}function v(w){var S=w-a,N=w-i,se=t-S;return f?Et(se,o-N):se}function g(w){var S=w-a,N=w-i;return a===void 0||S>=t||S<0||f&&N>=o}function T(){var w=Y();if(g(w))return m(w);s=setTimeout(T,v(w))}function m(w){return s=void 0,d&&l?p(w):(l=r=void 0,c)}function A(){s!==void 0&&clearTimeout(s),i=0,l=a=r=s=void 0}function xe(){return s===void 0?c:m(Y())}function X(){var w=Y(),S=g(w);if(l=arguments,r=this,a=w,S){if(s===void 0)return b(a);if(f)return clearTimeout(s),s=setTimeout(T,t),p(a)}return s===void 0&&(s=setTimeout(T,t)),c}return X.cancel=A,X.flush=xe,X}function he(e,t,n){const l=e.slice();return l[11]=t[n],l}function pe(e){let t,n,l=e[2].length===0&&e[1].trim()!=="",r=e[2],o=[];for(let s=0;s<r.length;s+=1)o[s]=ge(he(e,r,s));let c=l&&_e();return{c(){t=y("div");for(let s=0;s<o.length;s+=1)o[s].c();n=C(),c&&c.c(),h(t,"class","absolute bg-neutral-800 w-full text-lg font-medium max-h-56 overflow-scroll")},m(s,a){k(s,t,a);for(let i=0;i<o.length;i+=1)o[i].m(t,null);_(t,n),c&&c.m(t,null)},p(s,a){if(a&20){r=s[2];let i;for(i=0;i<r.length;i+=1){const u=he(s,r,i);o[i]?o[i].p(u,a):(o[i]=ge(u),o[i].c(),o[i].m(t,n))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}a&6&&(l=s[2].length===0&&s[1].trim()!==""),l?c||(c=_e(),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},d(s){s&&$(t),D(o,s),c&&c.d()}}}function me(e){let t,n,l=e[11].secondaryLabel+"",r;return{c(){t=y("span"),n=j("\u2022 "),r=j(l),h(t,"class","text-neutral-400")},m(o,c){k(o,t,c),_(t,n),_(t,r)},p(o,c){c&4&&l!==(l=o[11].secondaryLabel+"")&&re(r,l)},d(o){o&&$(t)}}}function ge(e){let t,n=e[11].label+"",l,r,o,c,s=e[11].secondaryLabel&&me(e);function a(){return e[10](e[11])}return{c(){t=y("button"),l=j(n),r=C(),s&&s.c(),h(t,"class","w-full p-3 hover:bg-neutral-700 text-left")},m(i,u){k(i,t,u),_(t,l),_(t,r),s&&s.m(t,null),o||(c=L(t,"click",a),o=!0)},p(i,u){e=i,u&4&&n!==(n=e[11].label+"")&&re(l,n),e[11].secondaryLabel?s?s.p(e,u):(s=me(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(i){i&&$(t),s&&s.d(),o=!1,c()}}}function _e(e){let t;return{c(){t=y("p"),t.textContent="No results found.",h(t,"class","text-neutral-500 p-3")},m(n,l){k(n,t,l)},d(n){n&&$(t)}}}function St(e){let t,n,l,r=e[3]&&e[1].trim()!=="",o,c,s=r&&pe(e);return{c(){t=y("div"),n=y("input"),l=C(),s&&s.c(),h(n,"type","text"),h(n,"class","bg-transparent border-b border-b-white p-1 text-xl focus:outline-none focus:border-b-yellow-400 transition-colors"),h(n,"placeholder","TV show name"),h(t,"class","relative"),h(t,"id","container")},m(a,i){k(a,t,i),_(t,n),e[7](n),ue(n,e[1]),_(t,l),s&&s.m(t,null),o||(c=[L(n,"input",e[8]),L(n,"input",e[5]),L(n,"focus",e[9])],o=!0)},p(a,[i]){i&2&&n.value!==a[1]&&ue(n,a[1]),i&10&&(r=a[3]&&a[1].trim()!==""),r?s?s.p(a,i):(s=pe(a),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i:E,o:E,d(a){a&&$(t),e[7](null),s&&s.d(),o=!1,O(c)}}}function Lt(e,t,n){let{inputEl:l=null}=t,{getAutocompletions:r}=t;const o=qe();let c="",s=[],a=!1;const i=Tt(()=>{if(c===""){n(2,s=[]);return}r(c).then(b=>n(2,s=b))},300);function u(b){U[b?"unshift":"push"](()=>{l=b,n(0,l)})}function f(){c=this.value,n(1,c)}const d=()=>n(3,a=!0),p=b=>o("autocomplete-click",b.id);return e.$$set=b=>{"inputEl"in b&&n(0,l=b.inputEl),"getAutocompletions"in b&&n(6,r=b.getAutocompletions)},[l,c,s,a,o,i,r,u,f,d,p]}class jt extends K{constructor(t){super(),J(this,t,Lt,St,V,{inputEl:0,getAutocompletions:6})}}function Ot(e){let t;return{c(){t=y("a"),t.innerHTML='<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#facc15; color:#151513; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm svelte-10qsoqp"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',h(t,"href","https://github.com/docyx/imdb-table"),h(t,"class","github-corner svelte-10qsoqp"),h(t,"aria-label","View source on GitHub")},m(n,l){k(n,t,l)},p:E,i:E,o:E,d(n){n&&$(t)}}}class At extends K{constructor(t){super(),J(this,t,null,Ot,V,{})}}function be(e,t,n){const l=e.slice();return l[7]=t[n],l[9]=n,l}function ye(e,t,n){const l=e.slice();return l[10]=t[n],l[12]=n,l}function ve(e,t,n){const l=e.slice();return l[13]=t[n],l[15]=n,l}function we(e){let t,n=e[15]+1+"",l,r;return{c(){t=y("th"),l=j(n),h(t,"scope","col"),h(t,"class",r=`${e[2]===e[15]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)},m(o,c){k(o,t,c),_(t,l)},p(o,c){c&4&&r!==(r=`${o[2]===o[15]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)&&h(t,"class",r)},d(o){o&&$(t)}}}function $e(e){let t,n,l=e[10][0].toFixed(1)+"",r,o,c,s,a,i;function u(){return e[5](e[9],e[12])}return{c(){t=y("td"),n=y("a"),r=j(l),h(n,"class","block p-1"),h(n,"href",o=`https://www.imdb.com/title/${e[10][1]}/`),h(t,"class",c=`${e[4](e[10][0])}`),h(t,"colspan",s=e[12]!==e[0][e[9]].length-1&&!e[0][e[9]][e[12]+1]?2:1)},m(f,d){k(f,t,d),_(t,n),_(n,r),a||(i=[L(t,"mouseenter",u),L(t,"mouseleave",e[6])],a=!0)},p(f,d){e=f,d&1&&l!==(l=e[10][0].toFixed(1)+"")&&re(r,l),d&1&&o!==(o=`https://www.imdb.com/title/${e[10][1]}/`)&&h(n,"href",o),d&1&&c!==(c=`${e[4](e[10][0])}`)&&h(t,"class",c),d&1&&s!==(s=e[12]!==e[0][e[9]].length-1&&!e[0][e[9]][e[12]+1]?2:1)&&h(t,"colspan",s)},d(f){f&&$(t),a=!1,O(i)}}}function ke(e){let t,n=e[10]&&$e(e);return{c(){n&&n.c(),t=Me()},m(l,r){n&&n.m(l,r),k(l,t,r)},p(l,r){l[10]?n?n.p(l,r):(n=$e(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(l){n&&n.d(l),l&&$(t)}}}function Ce(e){let t,n,l=e[9]+1+"",r,o,c,s,a=e[7],i=[];for(let u=0;u<a.length;u+=1)i[u]=ke(ye(e,a,u));return{c(){t=y("tr"),n=y("th"),r=j(l),c=C();for(let u=0;u<i.length;u+=1)i[u].c();s=C(),h(n,"scope","row"),h(n,"class",o=`${e[1]===e[9]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`),h(t,"class","p-2")},m(u,f){k(u,t,f),_(t,n),_(n,r),_(t,c);for(let d=0;d<i.length;d+=1)i[d].m(t,null);_(t,s)},p(u,f){if(f&2&&o!==(o=`${u[1]===u[9]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`)&&h(n,"class",o),f&23){a=u[7];let d;for(d=0;d<a.length;d+=1){const p=ye(u,a,d);i[d]?i[d].p(p,f):(i[d]=ke(p),i[d].c(),i[d].m(t,s))}for(;d<i.length;d+=1)i[d].d(1);i.length=a.length}},d(u){u&&$(t),D(i,u)}}}function It(e){let t,n,l,r,o,c,s,a,i,u,f,d=Array(e[3]),p=[];for(let g=0;g<d.length;g+=1)p[g]=we(ve(e,d,g));let b=e[0],v=[];for(let g=0;g<b.length;g+=1)v[g]=Ce(be(e,b,g));return{c(){t=y("div"),n=y("div"),l=y("table"),r=y("tr"),o=y("th"),c=C();for(let g=0;g<p.length;g+=1)p[g].c();s=C();for(let g=0;g<v.length;g+=1)v[g].c();a=C(),i=y("p"),i.textContent="Episode",u=C(),f=y("p"),f.textContent="Season",h(r,"class","sticky top-0 bg-neutral-900"),h(l,"class","table-auto m-auto"),h(i,"class","absolute text-xl top-0 left-0 right-0 mx-auto"),h(f,"class","absolute text-xl -left-9 top-1/2 bottom-1/2 transform -rotate-90"),h(n,"class","relative p-8"),h(t,"class","max-w-[100vw] overflow-x-auto")},m(g,T){k(g,t,T),_(t,n),_(n,l),_(l,r),_(r,o),_(r,c);for(let m=0;m<p.length;m+=1)p[m].m(r,null);_(l,s);for(let m=0;m<v.length;m+=1)v[m].m(l,null);_(n,a),_(n,i),_(n,u),_(n,f)},p(g,[T]){if(T&4){d=Array(g[3]);let m;for(m=0;m<d.length;m+=1){const A=ve(g,d,m);p[m]?p[m].p(A,T):(p[m]=we(A),p[m].c(),p[m].m(r,null))}for(;m<p.length;m+=1)p[m].d(1);p.length=d.length}if(T&23){b=g[0];let m;for(m=0;m<b.length;m+=1){const A=be(g,b,m);v[m]?v[m].p(A,T):(v[m]=Ce(A),v[m].c(),v[m].m(l,null))}for(;m<v.length;m+=1)v[m].d(1);v.length=b.length}},i:E,o:E,d(g){g&&$(t),D(p,g),D(v,g)}}}function xt(e,t,n){let{ratings:l}=t,r=null,o=null,c=l.reduce((u,f)=>f.length>u?f.length:u,0);const s=u=>u>=8.5?"bg-green-500":u>=7.6?"bg-yellow-500":u>=6.5?"bg-orange-500":"bg-red-500",a=(u,f)=>{n(1,r=u),n(2,o=f)},i=()=>{n(1,r=null),n(2,o=null)};return e.$$set=u=>{"ratings"in u&&n(0,l=u.ratings)},[l,r,o,c,s,a,i]}class Nt extends K{constructor(t){super(),J(this,t,xt,It,V,{ratings:0})}}function Mt(e){let t,n,l,r,o,c;function s(i){e[7](i)}let a={getAutocompletions:e[3]};return e[0]!==void 0&&(a.inputEl=e[0]),r=new jt({props:a}),U.push(()=>He(r,"inputEl",s)),r.$on("autocomplete-click",e[4]),{c(){t=y("div"),n=y("h1"),n.textContent="IMDb Table",l=C(),oe(r.$$.fragment),h(n,"class","text-5xl font-bold mb-4 text-center"),h(t,"class","m-auto")},m(i,u){k(i,t,u),_(t,n),_(t,l),Z(r,t,null),c=!0},p(i,u){const f={};!o&&u&1&&(o=!0,f.inputEl=i[0],Ge(()=>o=!1)),r.$set(f)},i(i){c||(x(r.$$.fragment,i),c=!0)},o(i){B(r.$$.fragment,i),c=!1},d(i){i&&$(t),z(r)}}}function Pt(e){let t,n,l,r,o,c,s,a,i,u;return n=new Nt({props:{ratings:e[2]}}),{c(){t=y("div"),oe(n.$$.fragment),l=C(),r=y("div"),o=y("button"),o.textContent="\u{1F4CB} Copy link",c=C(),s=y("button"),s.textContent="\u2B05\uFE0F Go back",h(o,"class","bg-transparent text-yellow-400"),h(s,"class","bg-transparent text-yellow-400"),h(r,"class","flex flex-col mt-4 space-y-3"),h(t,"class","text-center py-4 m-auto")},m(f,d){k(f,t,d),Z(n,t,null),_(t,l),_(t,r),_(r,o),_(r,c),_(r,s),a=!0,i||(u=[L(o,"click",e[6]),L(s,"click",e[5])],i=!0)},p(f,d){const p={};d&4&&(p.ratings=f[2]),n.$set(p)},i(f){a||(x(n.$$.fragment,f),a=!0)},o(f){B(n.$$.fragment,f),a=!1},d(f){f&&$(t),z(n),i=!1,O(u)}}}function Rt(e){let t;return{c(){t=y("p"),t.textContent="Loading...",h(t,"class","m-auto")},m(n,l){k(n,t,l)},p:E,i:E,o:E,d(n){n&&$(t)}}}function Bt(e){let t,n,l,r,o,c;t=new At({});const s=[Rt,Pt,Mt],a=[];function i(u,f){return u[1]?0:u[2].length?1:2}return r=i(e),o=a[r]=s[r](e),{c(){oe(t.$$.fragment),n=C(),l=y("div"),o.c(),h(l,"class","min-h-[90vh] flex m-auto")},m(u,f){Z(t,u,f),k(u,n,f),k(u,l,f),a[r].m(l,null),c=!0},p(u,[f]){let d=r;r=i(u),r===d?a[r].p(u,f):(De(),B(a[d],1,1,()=>{a[d]=null}),Ue(),o=a[r],o?o.p(u,f):(o=a[r]=s[r](u),o.c()),x(o,1),o.m(l,null))},i(u){c||(x(t.$$.fragment,u),x(o),c=!0)},o(u){B(t.$$.fragment,u),B(o),c=!1},d(u){z(t,u),u&&$(n),u&&$(l),a[r].d()}}}function qt(e,t,n){let l=null,r=!1,o=[];Be(async()=>{const p=new URLSearchParams(location.search).get("id");p?await i(p):l==null||l.focus()});const c=async d=>(await ze(d)).map(b=>{var v;return{id:b.id,label:b.title,secondaryLabel:(v=b.year)==null?void 0:v.toString()}}),s=async d=>await i(d.detail),a=async()=>{n(2,o=[]),history.pushState({},"","/imdb-table/"),await Fe(),l==null||l.focus()},i=async d=>{try{n(1,r=!0);const p=await Je(d);if(!p){n(1,r=!1);return}const b=await Ke(p);n(1,r=!1),n(2,o=b);const v=new URLSearchParams(location.search);v.set("id",d),history.pushState({},"",`${location.href.split("?")[0]}?${v}`)}catch{n(1,r=!1)}},u=()=>{navigator.clipboard.writeText(location.href)};function f(d){l=d,n(0,l)}return[l,r,o,c,s,a,u,f]}class Ft extends K{constructor(t){super(),J(this,t,qt,Bt,V,{})}}new Ft({target:document.getElementById("app")});
