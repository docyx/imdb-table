(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function S(){}function Ke(e){return e()}function Ae(){return Object.create(null)}function M(e){e.forEach(Ke)}function Xe(e){return typeof e=="function"}function le(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function it(e){return Object.keys(e).length===0}function st(e,...t){if(e==null)return S;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Qe(e,t,n){e.$$.on_destroy.push(st(t,n))}function Ie(e,t,n){return e.set(n),t}function p(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function C(){return B(" ")}function ct(){return B("")}function R(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ut(e){return Array.from(e.childNodes)}function Ce(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ne(e,t){e.value=t==null?"":t}function at(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,l,t),r}let ne;function Y(e){ne=e}function Ye(){if(!ne)throw new Error("Function called outside component initialization");return ne}function ft(e){Ye().$$.on_mount.push(e)}function dt(){const e=Ye();return(t,n,{cancelable:l=!1}={})=>{const r=e.$$.callbacks[t];if(r){const o=at(t,n,{cancelable:l});return r.slice().forEach(c=>{c.call(e,o)}),!o.defaultPrevented}return!0}}const Q=[],fe=[],ce=[],ve=[],et=Promise.resolve();let we=!1;function tt(){we||(we=!0,et.then(nt))}function pt(){return tt(),et}function ke(e){ce.push(e)}function ht(e){ve.push(e)}const ge=new Set;let se=0;function nt(){const e=ne;do{for(;se<Q.length;){const t=Q[se];se++,Y(t),mt(t.$$)}for(Y(null),Q.length=0,se=0;fe.length;)fe.pop()();for(let t=0;t<ce.length;t+=1){const n=ce[t];ge.has(n)||(ge.add(n),n())}ce.length=0}while(Q.length);for(;ve.length;)ve.pop()();we=!1,ge.clear(),Y(e)}function mt(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ke)}}const ue=new Set;let G;function _t(){G={r:0,c:[],p:G}}function bt(){G.r||M(G.c),G=G.p}function J(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function ee(e,t,n,l){if(e&&e.o){if(ue.has(e))return;ue.add(e),G.c.push(()=>{ue.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function gt(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function Te(e){e&&e.c()}function pe(e,t,n,l){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),l||ke(()=>{const c=e.$$.on_mount.map(Ke).filter(Xe);e.$$.on_destroy?e.$$.on_destroy.push(...c):M(c),e.$$.on_mount=[]}),o.forEach(ke)}function he(e,t){const n=e.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(e,t){e.$$.dirty[0]===-1&&(Q.push(e),tt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,n,l,r,o,c,s=[-1]){const a=ne;Y(e);const i=e.$$={fragment:null,ctx:[],props:o,update:S,not_equal:r,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Ae(),dirty:s,skip_bound:!1,root:t.target||a.$$.root};c&&c(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},(u,m,...v)=>{const w=v.length?v[0]:m;return i.ctx&&r(i.ctx[u],i.ctx[u]=w)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](w),d&&yt(e,u)),m}):[],i.update(),d=!0,M(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const u=ut(t.target);i.fragment&&i.fragment.l(u),u.forEach(T)}else i.fragment&&i.fragment.c();t.intro&&J(e.$$.fragment),pe(e,t.target,t.anchor,t.customElement),nt()}Y(a)}class _e{$destroy(){he(this,1),this.$destroy=S}$on(t,n){if(!Xe(n))return S;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!it(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const vt="https://imdb-table.vercel.app/api",Ee=async e=>await(await fetch(`${vt}/${e}`)).json(),wt=async e=>await Ee(`search?q=${e}`),kt=async e=>(await Ee(`id?id=${e}`)).id,$t=async e=>await Ee(`ratings?id=${e}`),H=[];function Ct(e,t=S){let n;const l=new Set;function r(s){if(le(e,s)&&(e=s,n)){const a=!H.length;for(const i of l)i[1](),H.push(i,e);if(a){for(let i=0;i<H.length;i+=2)H[i][0](H[i+1]);H.length=0}}}function o(s){r(s(e))}function c(s,a=S){const i=[s,a];return l.add(i),l.size===1&&(n=t(r)||S),s(e),()=>{l.delete(i),l.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:c}}const lt=["bg-green-500","bg-yellow-500","bg-orange-500","bg-red-500"],K=["bg-[#018571]","bg-[#80cdc1]","bg-[#dfc27d]","bg-[#a6611a]"],Re=localStorage.getItem("colors"),te=Ct(Re?JSON.parse(Re):lt);te.subscribe(e=>localStorage.setItem("colors",JSON.stringify(e)));var Tt=typeof global=="object"&&global&&global.Object===Object&&global;const Et=Tt;var St=typeof self=="object"&&self&&self.Object===Object&&self,Lt=Et||St||Function("return this")();const rt=Lt;var Ot=rt.Symbol;const de=Ot;var ot=Object.prototype,xt=ot.hasOwnProperty,jt=ot.toString,X=de?de.toStringTag:void 0;function At(e){var t=xt.call(e,X),n=e[X];try{e[X]=void 0;var l=!0}catch{}var r=jt.call(e);return l&&(t?e[X]=n:delete e[X]),r}var It=Object.prototype,Nt=It.toString;function Rt(e){return Nt.call(e)}var Mt="[object Null]",Pt="[object Undefined]",Me=de?de.toStringTag:void 0;function qt(e){return e==null?e===void 0?Pt:Mt:Me&&Me in Object(e)?At(e):Rt(e)}function Bt(e){return e!=null&&typeof e=="object"}var Ft="[object Symbol]";function Dt(e){return typeof e=="symbol"||Bt(e)&&qt(e)==Ft}var Gt=/\s/;function Ut(e){for(var t=e.length;t--&&Gt.test(e.charAt(t)););return t}var Wt=/^\s+/;function zt(e){return e&&e.slice(0,Ut(e)+1).replace(Wt,"")}function $e(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Pe=0/0,Ht=/^[-+]0x[0-9a-f]+$/i,Jt=/^0b[01]+$/i,Vt=/^0o[0-7]+$/i,Zt=parseInt;function qe(e){if(typeof e=="number")return e;if(Dt(e))return Pe;if($e(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=$e(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=zt(e);var n=Jt.test(e);return n||Vt.test(e)?Zt(e.slice(2),n?2:8):Ht.test(e)?Pe:+e}var Kt=function(){return rt.Date.now()};const ye=Kt;var Xt="Expected a function",Qt=Math.max,Yt=Math.min;function en(e,t,n){var l,r,o,c,s,a,i=0,d=!1,u=!1,m=!0;if(typeof e!="function")throw new TypeError(Xt);t=qe(t)||0,$e(n)&&(d=!!n.leading,u="maxWait"in n,o=u?Qt(qe(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m);function v($){var A=l,P=r;return l=r=void 0,i=$,c=e.apply(P,A),c}function w($){return i=$,s=setTimeout(y,t),d?v($):c}function g($){var A=$-a,P=$-i,U=t-A;return u?Yt(U,o-P):U}function k($){var A=$-a,P=$-i;return a===void 0||A>=t||A<0||u&&P>=o}function y(){var $=ye();if(k($))return L($);s=setTimeout(y,g($))}function L($){return s=void 0,m&&l?v($):(l=r=void 0,c)}function O(){s!==void 0&&clearTimeout(s),i=0,l=a=r=s=void 0}function re(){return s===void 0?c:L(ye())}function N(){var $=ye(),A=k($);if(l=arguments,r=this,a=$,A){if(s===void 0)return w(a);if(u)return clearTimeout(s),s=setTimeout(y,t),v(a)}return s===void 0&&(s=setTimeout(y,t)),c}return N.cancel=O,N.flush=re,N}function Be(e,t,n){const l=e.slice();return l[12]=t[n],l}function Fe(e){let t,n,l=e[3].length===0&&e[2].trim()!=="",r=e[3],o=[];for(let s=0;s<r.length;s+=1)o[s]=Ge(Be(e,r,s));let c=l&&Ue();return{c(){t=h("div");for(let s=0;s<o.length;s+=1)o[s].c();n=C(),c&&c.c(),f(t,"class","absolute bg-neutral-800 w-full text-lg font-medium max-h-56 overflow-scroll")},m(s,a){E(s,t,a);for(let i=0;i<o.length;i+=1)o[i].m(t,null);p(t,n),c&&c.m(t,null)},p(s,a){if(a&40){r=s[3];let i;for(i=0;i<r.length;i+=1){const d=Be(s,r,i);o[i]?o[i].p(d,a):(o[i]=Ge(d),o[i].c(),o[i].m(t,n))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}a&12&&(l=s[3].length===0&&s[2].trim()!==""),l?c||(c=Ue(),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},d(s){s&&T(t),ae(o,s),c&&c.d()}}}function De(e){let t,n,l=e[12].secondaryLabel+"",r;return{c(){t=h("span"),n=B("\u2022 "),r=B(l),f(t,"class","text-neutral-400")},m(o,c){E(o,t,c),p(t,n),p(t,r)},p(o,c){c&8&&l!==(l=o[12].secondaryLabel+"")&&Ce(r,l)},d(o){o&&T(t)}}}function Ge(e){let t,n=e[12].label+"",l,r,o,c,s=e[12].secondaryLabel&&De(e);function a(){return e[11](e[12])}return{c(){t=h("button"),l=B(n),r=C(),s&&s.c(),f(t,"class","w-full p-3 hover:bg-neutral-700 text-left")},m(i,d){E(i,t,d),p(t,l),p(t,r),s&&s.m(t,null),o||(c=R(t,"click",a),o=!0)},p(i,d){e=i,d&8&&n!==(n=e[12].label+"")&&Ce(l,n),e[12].secondaryLabel?s?s.p(e,d):(s=De(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(i){i&&T(t),s&&s.d(),o=!1,c()}}}function Ue(e){let t;return{c(){t=h("p"),t.textContent="No results found.",f(t,"class","text-neutral-500 p-3")},m(n,l){E(n,t,l)},d(n){n&&T(t)}}}function tn(e){let t,n,l,r=e[4]&&e[2].trim()!=="",o,c,s=r&&Fe(e);return{c(){t=h("div"),n=h("input"),l=C(),s&&s.c(),f(n,"type","text"),f(n,"class","bg-transparent border-b border-b-white p-1 text-xl focus:outline-none focus:border-b-yellow-400 transition-colors"),f(n,"placeholder",e[1]),f(t,"class","relative"),f(t,"id","container")},m(a,i){E(a,t,i),p(t,n),e[8](n),Ne(n,e[2]),p(t,l),s&&s.m(t,null),o||(c=[R(n,"input",e[9]),R(n,"input",e[6]),R(n,"focus",e[10])],o=!0)},p(a,[i]){i&2&&f(n,"placeholder",a[1]),i&4&&n.value!==a[2]&&Ne(n,a[2]),i&20&&(r=a[4]&&a[2].trim()!==""),r?s?s.p(a,i):(s=Fe(a),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i:S,o:S,d(a){a&&T(t),e[8](null),s&&s.d(),o=!1,M(c)}}}function nn(e,t,n){let{placeholder:l=null}=t,{inputEl:r=null}=t,{getAutocompletions:o}=t;const c=dt();let s="",a=[],i=!1;const d=en(()=>{if(s===""){n(3,a=[]);return}o(s).then(g=>n(3,a=g))},300);function u(g){fe[g?"unshift":"push"](()=>{r=g,n(0,r)})}function m(){s=this.value,n(2,s)}const v=()=>n(4,i=!0),w=g=>c("autocomplete-click",g.id);return e.$$set=g=>{"placeholder"in g&&n(1,l=g.placeholder),"inputEl"in g&&n(0,r=g.inputEl),"getAutocompletions"in g&&n(7,o=g.getAutocompletions)},[r,l,s,a,i,c,d,o,u,m,v,w]}class ln extends _e{constructor(t){super(),me(this,t,nn,tn,le,{placeholder:1,inputEl:0,getAutocompletions:7})}}function rn(e){let t;return{c(){t=h("a"),t.innerHTML='<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#facc15; color:#151513; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm svelte-10qsoqp"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',f(t,"href","https://github.com/docyx/imdb-table"),f(t,"class","github-corner svelte-10qsoqp"),f(t,"aria-label","View source on GitHub")},m(n,l){E(n,t,l)},p:S,i:S,o:S,d(n){n&&T(t)}}}class on extends _e{constructor(t){super(),me(this,t,null,rn,le,{})}}function We(e,t,n){const l=e.slice();return l[8]=t[n],l[10]=n,l}function ze(e,t,n){const l=e.slice();return l[11]=t[n],l[13]=n,l}function He(e,t,n){const l=e.slice();return l[14]=t[n],l[16]=n,l}function Je(e){let t,n=e[16]+1+"",l,r;return{c(){t=h("th"),l=B(n),f(t,"scope","col"),f(t,"class",r=`${e[2]===e[16]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)},m(o,c){E(o,t,c),p(t,l)},p(o,c){c&4&&r!==(r=`${o[2]===o[16]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)&&f(t,"class",r)},d(o){o&&T(t)}}}function sn(e){let t;return{c(){t=h("td"),f(t,"class","bg-neutral-700"),f(t,"title","This episode is not rated on IMDb.")},m(n,l){E(n,t,l)},p:S,d(n){n&&T(t)}}}function cn(e){let t,n,l=e[11][0].toFixed(1)+"",r,o,c,s,a;function i(){return e[6](e[10],e[13])}return{c(){t=h("td"),n=h("a"),r=B(l),f(n,"class","block p-1"),f(n,"href",o=`https://www.imdb.com/title/${e[11][1]}/`),f(t,"class",c=`${e[5](e[11][0])}`)},m(d,u){E(d,t,u),p(t,n),p(n,r),s||(a=[R(t,"mouseenter",i),R(t,"mouseleave",e[7])],s=!0)},p(d,u){e=d,u&1&&l!==(l=e[11][0].toFixed(1)+"")&&Ce(r,l),u&1&&o!==(o=`https://www.imdb.com/title/${e[11][1]}/`)&&f(n,"href",o),u&1&&c!==(c=`${e[5](e[11][0])}`)&&f(t,"class",c)},d(d){d&&T(t),s=!1,M(a)}}}function Ve(e){let t;function n(o,c){return o[11]?cn:sn}let l=n(e),r=l(e);return{c(){r.c(),t=ct()},m(o,c){r.m(o,c),E(o,t,c)},p(o,c){l===(l=n(o))&&r?r.p(o,c):(r.d(1),r=l(o),r&&(r.c(),r.m(t.parentNode,t)))},d(o){r.d(o),o&&T(t)}}}function Ze(e){var d;let t,n,l=e[10]+1+"",r,o,c,s,a=(d=e[8])!=null?d:Array(e[4]),i=[];for(let u=0;u<a.length;u+=1)i[u]=Ve(ze(e,a,u));return{c(){t=h("tr"),n=h("th"),r=B(l),c=C();for(let u=0;u<i.length;u+=1)i[u].c();s=C(),f(n,"scope","row"),f(n,"class",o=`${e[1]===e[10]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`),f(t,"class","p-2")},m(u,m){E(u,t,m),p(t,n),p(n,r),p(t,c);for(let v=0;v<i.length;v+=1)i[v].m(t,null);p(t,s)},p(u,m){var v;if(m&2&&o!==(o=`${u[1]===u[10]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`)&&f(n,"class",o),m&55){a=(v=u[8])!=null?v:Array(u[4]);let w;for(w=0;w<a.length;w+=1){const g=ze(u,a,w);i[w]?i[w].p(g,m):(i[w]=Ve(g),i[w].c(),i[w].m(t,s))}for(;w<i.length;w+=1)i[w].d(1);i.length=a.length}},d(u){u&&T(t),ae(i,u)}}}function un(e){let t,n,l,r,o,c,s,a,i,d,u,m,v,w,g,k,y,L,O,re,N,$,A,P,U,be,V,q,F,D,Se,Le,Oe,xe,oe,je,ie,W=Array(e[4]),x=[];for(let _=0;_<W.length;_+=1)x[_]=Je(He(e,W,_));let z=e[0],j=[];for(let _=0;_<z.length;_+=1)j[_]=Ze(We(e,z,_));return{c(){t=h("div"),n=h("div"),l=h("div"),r=h("div"),c=C(),s=h("p"),s.textContent="8.5\u201310.0",a=C(),i=h("div"),d=h("div"),m=C(),v=h("p"),v.textContent="7.6\u20138.4",w=C(),g=h("div"),k=h("div"),L=C(),O=h("p"),O.textContent="6.5\u20137.5",re=C(),N=h("div"),$=h("div"),P=C(),U=h("p"),U.textContent="0.0\u20136.4",be=C(),V=h("div"),q=h("div"),F=h("table"),D=h("tr"),Se=h("th"),Le=C();for(let _=0;_<x.length;_+=1)x[_].c();Oe=C();for(let _=0;_<j.length;_+=1)j[_].c();xe=C(),oe=h("p"),oe.textContent="Episode",je=C(),ie=h("p"),ie.textContent="Season",f(r,"class",o=`w-5 h-5 mr-2 ${e[3][0]}`),f(l,"class","flex items-center"),f(d,"class",u=`w-5 h-5 mr-2 ${e[3][1]}`),f(i,"class","flex items-center"),f(k,"class",y=`w-5 h-5 mr-2 ${e[3][2]}`),f(g,"class","flex items-center"),f($,"class",A=`w-5 h-5 mr-2 ${e[3][3]}`),f(N,"class","flex items-center"),f(n,"class","flex flex-col sm:flex-row space-x-0 sm:space-x-6"),f(t,"class","mb-3 flex items-center justify-center"),f(D,"class","sticky top-0 bg-neutral-900"),f(F,"class","table-auto m-auto"),f(oe,"class","absolute text-xl top-0 left-0 right-0 mx-auto"),f(ie,"class","absolute text-xl -left-9 top-1/2 bottom-1/2 transform -rotate-90"),f(q,"class","relative p-8"),f(V,"class","max-w-[100vw] overflow-x-auto")},m(_,I){E(_,t,I),p(t,n),p(n,l),p(l,r),p(l,c),p(l,s),p(n,a),p(n,i),p(i,d),p(i,m),p(i,v),p(n,w),p(n,g),p(g,k),p(g,L),p(g,O),p(n,re),p(n,N),p(N,$),p(N,P),p(N,U),E(_,be,I),E(_,V,I),p(V,q),p(q,F),p(F,D),p(D,Se),p(D,Le);for(let b=0;b<x.length;b+=1)x[b].m(D,null);p(F,Oe);for(let b=0;b<j.length;b+=1)j[b].m(F,null);p(q,xe),p(q,oe),p(q,je),p(q,ie)},p(_,[I]){if(I&8&&o!==(o=`w-5 h-5 mr-2 ${_[3][0]}`)&&f(r,"class",o),I&8&&u!==(u=`w-5 h-5 mr-2 ${_[3][1]}`)&&f(d,"class",u),I&8&&y!==(y=`w-5 h-5 mr-2 ${_[3][2]}`)&&f(k,"class",y),I&8&&A!==(A=`w-5 h-5 mr-2 ${_[3][3]}`)&&f($,"class",A),I&4){W=Array(_[4]);let b;for(b=0;b<W.length;b+=1){const Z=He(_,W,b);x[b]?x[b].p(Z,I):(x[b]=Je(Z),x[b].c(),x[b].m(D,null))}for(;b<x.length;b+=1)x[b].d(1);x.length=W.length}if(I&55){z=_[0];let b;for(b=0;b<z.length;b+=1){const Z=We(_,z,b);j[b]?j[b].p(Z,I):(j[b]=Ze(Z),j[b].c(),j[b].m(F,null))}for(;b<j.length;b+=1)j[b].d(1);j.length=z.length}},i:S,o:S,d(_){_&&T(t),_&&T(be),_&&T(V),ae(x,_),ae(j,_)}}}function an(e,t,n){let l;Qe(e,te,u=>n(3,l=u));let{ratings:r}=t,o=null,c=null,s=r.reduce((u,m)=>(m==null?void 0:m.length)>u?m.length:u,0);const a=u=>u>=8.5?l[0]:u>=7.6?l[1]:u>=6.5?l[2]:l[3],i=(u,m)=>{n(1,o=u),n(2,c=m)},d=()=>{n(1,o=null),n(2,c=null)};return e.$$set=u=>{"ratings"in u&&n(0,r=u.ratings)},[r,o,c,l,s,a,i,d]}class fn extends _e{constructor(t){super(),me(this,t,an,un,le,{ratings:0})}}function dn(e){let t,n,l,r,o,c,s,a,i,d,u,m,v,w;function g(y){e[9](y)}let k={placeholder:"TV show name",getAutocompletions:e[4]};return e[1]!==void 0&&(k.inputEl=e[1]),r=new ln({props:k}),fe.push(()=>gt(r,"inputEl",g)),r.$on("autocomplete-click",e[5]),{c(){t=h("div"),n=h("h1"),n.textContent="IMDb Table",l=C(),Te(r.$$.fragment),c=C(),s=h("div"),a=h("label"),i=h("input"),d=C(),u=h("p"),u.textContent="Colorblind mode",f(n,"class","text-5xl font-bold mb-4 text-center"),f(i,"type","checkbox"),f(i,"class","accent-yellow-400 border border-red-400"),f(u,"class","text-neutral-400"),f(a,"class","flex items-center space-x-1.5"),f(s,"class","flex items-center justify-center mt-4"),f(t,"class","m-auto")},m(y,L){E(y,t,L),p(t,n),p(t,l),pe(r,t,null),p(t,c),p(t,s),p(s,a),p(a,i),i.checked=e[0],p(a,d),p(a,u),m=!0,v||(w=[R(i,"change",e[10]),R(i,"change",e[6])],v=!0)},p(y,L){const O={};!o&&L&2&&(o=!0,O.inputEl=y[1],ht(()=>o=!1)),r.$set(O),L&1&&(i.checked=y[0])},i(y){m||(J(r.$$.fragment,y),m=!0)},o(y){ee(r.$$.fragment,y),m=!1},d(y){y&&T(t),he(r),v=!1,M(w)}}}function pn(e){let t,n,l,r,o,c,s,a,i,d;return n=new fn({props:{ratings:e[3]}}),{c(){t=h("div"),Te(n.$$.fragment),l=C(),r=h("div"),o=h("button"),o.textContent="\u{1F4CB} Copy link",c=C(),s=h("button"),s.textContent="\u2B05\uFE0F Go back",f(o,"class","bg-transparent text-yellow-400"),f(s,"class","bg-transparent text-yellow-400"),f(r,"class","flex flex-col mt-4 space-y-3"),f(t,"class","text-center py-4 m-auto")},m(u,m){E(u,t,m),pe(n,t,null),p(t,l),p(t,r),p(r,o),p(r,c),p(r,s),a=!0,i||(d=[R(o,"click",e[8]),R(s,"click",e[7])],i=!0)},p(u,m){const v={};m&8&&(v.ratings=u[3]),n.$set(v)},i(u){a||(J(n.$$.fragment,u),a=!0)},o(u){ee(n.$$.fragment,u),a=!1},d(u){u&&T(t),he(n),i=!1,M(d)}}}function hn(e){let t;return{c(){t=h("p"),t.textContent="Loading...",f(t,"class","m-auto")},m(n,l){E(n,t,l)},p:S,i:S,o:S,d(n){n&&T(t)}}}function mn(e){let t,n,l,r,o,c;t=new on({});const s=[hn,pn,dn],a=[];function i(d,u){return d[2]?0:d[3].length?1:2}return r=i(e),o=a[r]=s[r](e),{c(){Te(t.$$.fragment),n=C(),l=h("div"),o.c(),f(l,"class","min-h-[90vh] flex m-auto")},m(d,u){pe(t,d,u),E(d,n,u),E(d,l,u),a[r].m(l,null),c=!0},p(d,[u]){let m=r;r=i(d),r===m?a[r].p(d,u):(_t(),ee(a[m],1,1,()=>{a[m]=null}),bt(),o=a[r],o?o.p(d,u):(o=a[r]=s[r](d),o.c()),J(o,1),o.m(l,null))},i(d){c||(J(t.$$.fragment,d),J(o),c=!0)},o(d){ee(t.$$.fragment,d),ee(o),c=!1},d(d){he(t,d),d&&T(n),d&&T(l),a[r].d()}}}function _n(e,t,n){let l;Qe(e,te,k=>n(11,l=k));let r=l[0]===K[0]&&l[1]===K[1]&&l[2]===K[2]&&l[3]===K[3],o=null,c=!1,s=[];ft(async()=>{const y=new URLSearchParams(location.search).get("id");y?await m(y):o==null||o.focus()});const a=async k=>(await wt(k)).map(L=>{var O;return{id:L.id,label:L.title,secondaryLabel:(O=L.year)==null?void 0:O.toString()}}),i=async k=>await m(k.detail),d=({currentTarget:k})=>{k.checked?Ie(te,l=K,l):Ie(te,l=lt,l)},u=async()=>{n(3,s=[]),history.pushState({},"","/imdb-table/"),await pt(),o==null||o.focus()},m=async k=>{try{n(2,c=!0);const y=await kt(k);if(!y){n(2,c=!1);return}const L=await $t(y);n(2,c=!1),n(3,s=L);const O=new URLSearchParams(location.search);O.set("id",k),history.pushState({},"",`${location.href.split("?")[0]}?${O}`)}catch{n(2,c=!1)}},v=()=>{navigator.clipboard.writeText(location.href)};function w(k){o=k,n(1,o)}function g(){r=this.checked,n(0,r)}return[r,o,c,s,a,i,d,u,v,w,g]}class bn extends _e{constructor(t){super(),me(this,t,_n,mn,le,{})}}new bn({target:document.getElementById("app")});
