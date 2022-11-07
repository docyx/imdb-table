(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function L(){}function Xe(e){return e()}function Ae(){return Object.create(null)}function M(e){e.forEach(Xe)}function Qe(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function st(e){return Object.keys(e).length===0}function ct(e,...t){if(e==null)return L;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ye(e,t,n){e.$$.on_destroy.push(ct(t,n))}function Ie(e,t,n){return e.set(n),t}function d(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function F(e){return document.createTextNode(e)}function C(){return F(" ")}function ut(){return F("")}function N(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function at(e){return Array.from(e.childNodes)}function $e(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ne(e,t){e.value=t==null?"":t}function ft(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,l,t),o}let le;function ee(e){le=e}function et(){if(!le)throw new Error("Function called outside component initialization");return le}function dt(e){et().$$.on_mount.push(e)}function ht(){const e=et();return(t,n,{cancelable:l=!1}={})=>{const o=e.$$.callbacks[t];if(o){const r=ft(t,n,{cancelable:l});return o.slice().forEach(c=>{c.call(e,r)}),!r.defaultPrevented}return!0}}const Y=[],fe=[],ce=[],ve=[],tt=Promise.resolve();let we=!1;function nt(){we||(we=!0,tt.then(lt))}function Pe(){return nt(),tt}function ke(e){ce.push(e)}function pt(e){ve.push(e)}const ge=new Set;let se=0;function lt(){const e=le;do{for(;se<Y.length;){const t=Y[se];se++,ee(t),mt(t.$$)}for(ee(null),Y.length=0,se=0;fe.length;)fe.pop()();for(let t=0;t<ce.length;t+=1){const n=ce[t];ge.has(n)||(ge.add(n),n())}ce.length=0}while(Y.length);for(;ve.length;)ve.pop()();we=!1,ge.clear(),ee(e)}function mt(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ke)}}const ue=new Set;let G;function _t(){G={r:0,c:[],p:G}}function bt(){G.r||M(G.c),G=G.p}function V(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function te(e,t,n,l){if(e&&e.o){if(ue.has(e))return;ue.add(e),G.c.push(()=>{ue.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function gt(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function Te(e){e&&e.c()}function he(e,t,n,l){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),l||ke(()=>{const c=e.$$.on_mount.map(Xe).filter(Qe);e.$$.on_destroy?e.$$.on_destroy.push(...c):M(c),e.$$.on_mount=[]}),r.forEach(ke)}function pe(e,t){const n=e.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(e,t){e.$$.dirty[0]===-1&&(Y.push(e),nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,n,l,o,r,c,i=[-1]){const a=le;ee(e);const s=e.$$={fragment:null,ctx:[],props:r,update:L,not_equal:o,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Ae(),dirty:i,skip_bound:!1,root:t.target||a.$$.root};c&&c(s.root);let p=!1;if(s.ctx=n?n(e,t.props||{},(u,h,..._)=>{const v=_.length?_[0]:h;return s.ctx&&o(s.ctx[u],s.ctx[u]=v)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](v),p&&yt(e,u)),h}):[],s.update(),p=!0,M(s.before_update),s.fragment=l?l(s.ctx):!1,t.target){if(t.hydrate){const u=at(t.target);s.fragment&&s.fragment.l(u),u.forEach(T)}else s.fragment&&s.fragment.c();t.intro&&V(e.$$.fragment),he(e,t.target,t.anchor,t.customElement),lt()}ee(a)}class _e{$destroy(){pe(this,1),this.$destroy=L}$on(t,n){if(!Qe(n))return L;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!st(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const vt="https://imdb-table.vercel.app/api",Se=async e=>await(await fetch(`${vt}/${e}`)).json(),wt=async e=>await Se(`search?q=${e}`),kt=async e=>(await Se(`id?id=${e}`)).id,Ct=async e=>await Se(`ratings?id=${e}`),J=[];function $t(e,t=L){let n;const l=new Set;function o(i){if(re(e,i)&&(e=i,n)){const a=!J.length;for(const s of l)s[1](),J.push(s,e);if(a){for(let s=0;s<J.length;s+=2)J[s][0](J[s+1]);J.length=0}}}function r(i){o(i(e))}function c(i,a=L){const s=[i,a];return l.add(s),l.size===1&&(n=t(o)||L),i(e),()=>{l.delete(s),l.size===0&&(n(),n=null)}}return{set:o,update:r,subscribe:c}}const rt=["bg-green-500","bg-yellow-500","bg-orange-500","bg-red-500"],X=["bg-[#018571]","bg-[#80cdc1]","bg-[#dfc27d]","bg-[#a6611a]"],Re=localStorage.getItem("colors"),ne=$t(Re?JSON.parse(Re):rt);ne.subscribe(e=>localStorage.setItem("colors",JSON.stringify(e)));var Tt=typeof global=="object"&&global&&global.Object===Object&&global;const St=Tt;var Lt=typeof self=="object"&&self&&self.Object===Object&&self,Et=St||Lt||Function("return this")();const ot=Et;var Ot=ot.Symbol;const de=Ot;var it=Object.prototype,xt=it.hasOwnProperty,jt=it.toString,Q=de?de.toStringTag:void 0;function At(e){var t=xt.call(e,Q),n=e[Q];try{e[Q]=void 0;var l=!0}catch{}var o=jt.call(e);return l&&(t?e[Q]=n:delete e[Q]),o}var It=Object.prototype,Nt=It.toString;function Pt(e){return Nt.call(e)}var Rt="[object Null]",Mt="[object Undefined]",Me=de?de.toStringTag:void 0;function qt(e){return e==null?e===void 0?Mt:Rt:Me&&Me in Object(e)?At(e):Pt(e)}function Bt(e){return e!=null&&typeof e=="object"}var Ft="[object Symbol]";function Dt(e){return typeof e=="symbol"||Bt(e)&&qt(e)==Ft}var Ut=/\s/;function Gt(e){for(var t=e.length;t--&&Ut.test(e.charAt(t)););return t}var Wt=/^\s+/;function zt(e){return e&&e.slice(0,Gt(e)+1).replace(Wt,"")}function Ce(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var qe=0/0,Ht=/^[-+]0x[0-9a-f]+$/i,Jt=/^0b[01]+$/i,Vt=/^0o[0-7]+$/i,Zt=parseInt;function Be(e){if(typeof e=="number")return e;if(Dt(e))return qe;if(Ce(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=zt(e);var n=Jt.test(e);return n||Vt.test(e)?Zt(e.slice(2),n?2:8):Ht.test(e)?qe:+e}var Kt=function(){return ot.Date.now()};const ye=Kt;var Xt="Expected a function",Qt=Math.max,Yt=Math.min;function en(e,t,n){var l,o,r,c,i,a,s=0,p=!1,u=!1,h=!0;if(typeof e!="function")throw new TypeError(Xt);t=Be(t)||0,Ce(n)&&(p=!!n.leading,u="maxWait"in n,r=u?Qt(Be(n.maxWait)||0,t):r,h="trailing"in n?!!n.trailing:h);function _(k){var j=l,q=o;return l=o=void 0,s=k,c=e.apply(q,j),c}function v(k){return s=k,i=setTimeout(b,t),p?_(k):c}function w(k){var j=k-a,q=k-s,W=t-j;return u?Yt(W,r-q):W}function A(k){var j=k-a,q=k-s;return a===void 0||j>=t||j<0||u&&q>=r}function b(){var k=ye();if(A(k))return $(k);i=setTimeout(b,w(k))}function $(k){return i=void 0,h&&l?_(k):(l=o=void 0,c)}function E(){i!==void 0&&clearTimeout(i),s=0,l=a=o=i=void 0}function P(){return i===void 0?c:$(ye())}function R(){var k=ye(),j=A(k);if(l=arguments,o=this,a=k,j){if(i===void 0)return v(a);if(u)return clearTimeout(i),i=setTimeout(b,t),_(a)}return i===void 0&&(i=setTimeout(b,t)),c}return R.cancel=E,R.flush=P,R}function Fe(e,t,n){const l=e.slice();return l[12]=t[n],l}function De(e){let t,n,l=e[3].length===0&&e[2].trim()!=="",o=e[3],r=[];for(let i=0;i<o.length;i+=1)r[i]=Ge(Fe(e,o,i));let c=l&&We();return{c(){t=m("div");for(let i=0;i<r.length;i+=1)r[i].c();n=C(),c&&c.c(),f(t,"class","absolute bg-neutral-800 w-full text-lg font-medium max-h-56 overflow-scroll")},m(i,a){S(i,t,a);for(let s=0;s<r.length;s+=1)r[s].m(t,null);d(t,n),c&&c.m(t,null)},p(i,a){if(a&40){o=i[3];let s;for(s=0;s<o.length;s+=1){const p=Fe(i,o,s);r[s]?r[s].p(p,a):(r[s]=Ge(p),r[s].c(),r[s].m(t,n))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}a&12&&(l=i[3].length===0&&i[2].trim()!==""),l?c||(c=We(),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},d(i){i&&T(t),ae(r,i),c&&c.d()}}}function Ue(e){let t,n,l=e[12].secondaryLabel+"",o;return{c(){t=m("span"),n=F("\u2022 "),o=F(l),f(t,"class","text-neutral-400")},m(r,c){S(r,t,c),d(t,n),d(t,o)},p(r,c){c&8&&l!==(l=r[12].secondaryLabel+"")&&$e(o,l)},d(r){r&&T(t)}}}function Ge(e){let t,n=e[12].label+"",l,o,r,c,i=e[12].secondaryLabel&&Ue(e);function a(){return e[11](e[12])}return{c(){t=m("button"),l=F(n),o=C(),i&&i.c(),f(t,"class","w-full p-3 hover:bg-neutral-700 text-left")},m(s,p){S(s,t,p),d(t,l),d(t,o),i&&i.m(t,null),r||(c=N(t,"click",a),r=!0)},p(s,p){e=s,p&8&&n!==(n=e[12].label+"")&&$e(l,n),e[12].secondaryLabel?i?i.p(e,p):(i=Ue(e),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(s){s&&T(t),i&&i.d(),r=!1,c()}}}function We(e){let t;return{c(){t=m("p"),t.textContent="No results found.",f(t,"class","text-neutral-500 p-3")},m(n,l){S(n,t,l)},d(n){n&&T(t)}}}function tn(e){let t,n,l,o=e[4]&&e[2].trim()!=="",r,c,i=o&&De(e);return{c(){t=m("div"),n=m("input"),l=C(),i&&i.c(),f(n,"type","text"),f(n,"class","bg-transparent border-b border-b-white p-1 text-xl focus:outline-none focus:border-b-yellow-400 transition-colors"),f(n,"placeholder",e[1]),f(t,"class","relative"),f(t,"id","container")},m(a,s){S(a,t,s),d(t,n),e[8](n),Ne(n,e[2]),d(t,l),i&&i.m(t,null),r||(c=[N(n,"input",e[9]),N(n,"input",e[6]),N(n,"focus",e[10])],r=!0)},p(a,[s]){s&2&&f(n,"placeholder",a[1]),s&4&&n.value!==a[2]&&Ne(n,a[2]),s&20&&(o=a[4]&&a[2].trim()!==""),o?i?i.p(a,s):(i=De(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i:L,o:L,d(a){a&&T(t),e[8](null),i&&i.d(),r=!1,M(c)}}}function nn(e,t,n){let{placeholder:l=null}=t,{inputEl:o=null}=t,{getAutocompletions:r}=t;const c=ht();let i="",a=[],s=!1;const p=en(()=>{if(i===""){n(3,a=[]);return}r(i).then(w=>n(3,a=w))},300);function u(w){fe[w?"unshift":"push"](()=>{o=w,n(0,o)})}function h(){i=this.value,n(2,i)}const _=()=>n(4,s=!0),v=w=>c("autocomplete-click",w.id);return e.$$set=w=>{"placeholder"in w&&n(1,l=w.placeholder),"inputEl"in w&&n(0,o=w.inputEl),"getAutocompletions"in w&&n(7,r=w.getAutocompletions)},[o,l,i,a,s,c,p,r,u,h,_,v]}class ln extends _e{constructor(t){super(),me(this,t,nn,tn,re,{placeholder:1,inputEl:0,getAutocompletions:7})}}function rn(e){let t;return{c(){t=m("a"),t.innerHTML='<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#facc15; color:#151513; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm svelte-10qsoqp"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',f(t,"href","https://github.com/docyx/imdb-table"),f(t,"class","github-corner svelte-10qsoqp"),f(t,"aria-label","View source on GitHub")},m(n,l){S(n,t,l)},p:L,i:L,o:L,d(n){n&&T(t)}}}class on extends _e{constructor(t){super(),me(this,t,null,rn,re,{})}}function ze(e,t,n){const l=e.slice();return l[8]=t[n],l[10]=n,l}function He(e,t,n){const l=e.slice();return l[11]=t[n],l[13]=n,l}function Je(e,t,n){const l=e.slice();return l[14]=t[n],l[16]=n,l}function Ve(e){let t,n=e[16]+1+"",l,o;return{c(){t=m("th"),l=F(n),f(t,"scope","col"),f(t,"class",o=`${e[2]===e[16]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)},m(r,c){S(r,t,c),d(t,l)},p(r,c){c&4&&o!==(o=`${r[2]===r[16]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)&&f(t,"class",o)},d(r){r&&T(t)}}}function sn(e){let t;return{c(){t=m("td"),f(t,"class","bg-neutral-700"),f(t,"title","This episode is not rated on IMDb.")},m(n,l){S(n,t,l)},p:L,d(n){n&&T(t)}}}function cn(e){let t,n,l=e[11][0].toFixed(1)+"",o,r,c,i,a;function s(){return e[6](e[10],e[13])}return{c(){t=m("td"),n=m("a"),o=F(l),f(n,"class","block p-1"),f(n,"href",r=`https://www.imdb.com/title/${e[11][1]}/`),f(t,"class",c=`${e[5](e[11][0])}`)},m(p,u){S(p,t,u),d(t,n),d(n,o),i||(a=[N(t,"mouseenter",s),N(t,"mouseleave",e[7])],i=!0)},p(p,u){e=p,u&1&&l!==(l=e[11][0].toFixed(1)+"")&&$e(o,l),u&1&&r!==(r=`https://www.imdb.com/title/${e[11][1]}/`)&&f(n,"href",r),u&1&&c!==(c=`${e[5](e[11][0])}`)&&f(t,"class",c)},d(p){p&&T(t),i=!1,M(a)}}}function Ze(e){let t;function n(r,c){return r[11]?cn:sn}let l=n(e),o=l(e);return{c(){o.c(),t=ut()},m(r,c){o.m(r,c),S(r,t,c)},p(r,c){l===(l=n(r))&&o?o.p(r,c):(o.d(1),o=l(r),o&&(o.c(),o.m(t.parentNode,t)))},d(r){o.d(r),r&&T(t)}}}function Ke(e){var p;let t,n,l=e[10]+1+"",o,r,c,i,a=(p=e[8])!=null?p:Array(e[4]),s=[];for(let u=0;u<a.length;u+=1)s[u]=Ze(He(e,a,u));return{c(){t=m("tr"),n=m("th"),o=F(l),c=C();for(let u=0;u<s.length;u+=1)s[u].c();i=C(),f(n,"scope","row"),f(n,"class",r=`${e[1]===e[10]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`),f(t,"class","p-2")},m(u,h){S(u,t,h),d(t,n),d(n,o),d(t,c);for(let _=0;_<s.length;_+=1)s[_].m(t,null);d(t,i)},p(u,h){var _;if(h&2&&r!==(r=`${u[1]===u[10]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`)&&f(n,"class",r),h&55){a=(_=u[8])!=null?_:Array(u[4]);let v;for(v=0;v<a.length;v+=1){const w=He(u,a,v);s[v]?s[v].p(w,h):(s[v]=Ze(w),s[v].c(),s[v].m(t,i))}for(;v<s.length;v+=1)s[v].d(1);s.length=a.length}},d(u){u&&T(t),ae(s,u)}}}function un(e){let t,n,l,o,r,c,i,a,s,p,u,h,_,v,w,A,b,$,E,P,R,k,j,q,W,be,Z,B,D,U,Le,Ee,Oe,xe,oe,je,ie,z=Array(e[4]),O=[];for(let g=0;g<z.length;g+=1)O[g]=Ve(Je(e,z,g));let H=e[0],x=[];for(let g=0;g<H.length;g+=1)x[g]=Ke(ze(e,H,g));return{c(){t=m("div"),n=m("div"),l=m("div"),o=m("div"),c=C(),i=m("p"),i.textContent="8.5\u201310.0",a=C(),s=m("div"),p=m("div"),h=C(),_=m("p"),_.textContent="7.6\u20138.4",v=C(),w=m("div"),A=m("div"),$=C(),E=m("p"),E.textContent="6.5\u20137.5",P=C(),R=m("div"),k=m("div"),q=C(),W=m("p"),W.textContent="0.0\u20136.4",be=C(),Z=m("div"),B=m("div"),D=m("table"),U=m("tr"),Le=m("th"),Ee=C();for(let g=0;g<O.length;g+=1)O[g].c();Oe=C();for(let g=0;g<x.length;g+=1)x[g].c();xe=C(),oe=m("p"),oe.textContent="Episode",je=C(),ie=m("p"),ie.textContent="Season",f(o,"class",r=`w-5 h-5 mr-2 ${e[3][0]}`),f(l,"class","flex items-center"),f(p,"class",u=`w-5 h-5 mr-2 ${e[3][1]}`),f(s,"class","flex items-center"),f(A,"class",b=`w-5 h-5 mr-2 ${e[3][2]}`),f(w,"class","flex items-center"),f(k,"class",j=`w-5 h-5 mr-2 ${e[3][3]}`),f(R,"class","flex items-center"),f(n,"class","flex flex-col sm:flex-row space-x-0 sm:space-x-6"),f(t,"class","mb-3 flex items-center justify-center"),f(U,"class","sticky top-0 bg-neutral-900"),f(D,"class","table-auto m-auto"),f(oe,"class","absolute text-xl top-0 left-0 right-0 mx-auto"),f(ie,"class","absolute text-xl -left-9 top-1/2 bottom-1/2 transform -rotate-90"),f(B,"class","relative p-8"),f(Z,"class","max-w-[100vw] overflow-x-auto")},m(g,I){S(g,t,I),d(t,n),d(n,l),d(l,o),d(l,c),d(l,i),d(n,a),d(n,s),d(s,p),d(s,h),d(s,_),d(n,v),d(n,w),d(w,A),d(w,$),d(w,E),d(n,P),d(n,R),d(R,k),d(R,q),d(R,W),S(g,be,I),S(g,Z,I),d(Z,B),d(B,D),d(D,U),d(U,Le),d(U,Ee);for(let y=0;y<O.length;y+=1)O[y].m(U,null);d(D,Oe);for(let y=0;y<x.length;y+=1)x[y].m(D,null);d(B,xe),d(B,oe),d(B,je),d(B,ie)},p(g,[I]){if(I&8&&r!==(r=`w-5 h-5 mr-2 ${g[3][0]}`)&&f(o,"class",r),I&8&&u!==(u=`w-5 h-5 mr-2 ${g[3][1]}`)&&f(p,"class",u),I&8&&b!==(b=`w-5 h-5 mr-2 ${g[3][2]}`)&&f(A,"class",b),I&8&&j!==(j=`w-5 h-5 mr-2 ${g[3][3]}`)&&f(k,"class",j),I&4){z=Array(g[4]);let y;for(y=0;y<z.length;y+=1){const K=Je(g,z,y);O[y]?O[y].p(K,I):(O[y]=Ve(K),O[y].c(),O[y].m(U,null))}for(;y<O.length;y+=1)O[y].d(1);O.length=z.length}if(I&55){H=g[0];let y;for(y=0;y<H.length;y+=1){const K=ze(g,H,y);x[y]?x[y].p(K,I):(x[y]=Ke(K),x[y].c(),x[y].m(D,null))}for(;y<x.length;y+=1)x[y].d(1);x.length=H.length}},i:L,o:L,d(g){g&&T(t),g&&T(be),g&&T(Z),ae(O,g),ae(x,g)}}}function an(e,t,n){let l;Ye(e,ne,u=>n(3,l=u));let{ratings:o}=t,r=null,c=null,i=o.reduce((u,h)=>(h==null?void 0:h.length)>u?h.length:u,0);const a=u=>u>=8.5?l[0]:u>=7.6?l[1]:u>=6.5?l[2]:l[3],s=(u,h)=>{n(1,r=u),n(2,c=h)},p=()=>{n(1,r=null),n(2,c=null)};return e.$$set=u=>{"ratings"in u&&n(0,o=u.ratings)},[o,r,c,l,i,a,s,p]}class fn extends _e{constructor(t){super(),me(this,t,an,un,re,{ratings:0})}}function dn(e){let t,n,l,o,r,c,i,a,s,p,u,h,_,v;function w(b){e[10](b)}let A={placeholder:"TV show name",getAutocompletions:e[5]};return e[1]!==void 0&&(A.inputEl=e[1]),o=new ln({props:A}),fe.push(()=>gt(o,"inputEl",w)),o.$on("autocomplete-click",e[6]),{c(){t=m("div"),n=m("h1"),n.textContent="IMDb Table",l=C(),Te(o.$$.fragment),c=C(),i=m("div"),a=m("label"),s=m("input"),p=C(),u=m("p"),u.textContent="Colorblind mode",f(n,"class","text-5xl font-bold mb-4 text-center"),f(s,"type","checkbox"),f(s,"class","accent-yellow-400 border border-red-400"),f(u,"class","text-neutral-400"),f(a,"class","flex items-center space-x-1.5"),f(i,"class","flex items-center justify-center mt-4"),f(t,"class","m-auto")},m(b,$){S(b,t,$),d(t,n),d(t,l),he(o,t,null),d(t,c),d(t,i),d(i,a),d(a,s),s.checked=e[0],d(a,p),d(a,u),h=!0,_||(v=[N(s,"change",e[11]),N(s,"change",e[7])],_=!0)},p(b,$){const E={};!r&&$&2&&(r=!0,E.inputEl=b[1],pt(()=>r=!1)),o.$set(E),$&1&&(s.checked=b[0])},i(b){h||(V(o.$$.fragment,b),h=!0)},o(b){te(o.$$.fragment,b),h=!1},d(b){b&&T(t),pe(o),_=!1,M(v)}}}function hn(e){let t,n,l,o,r,c,i,a,s,p;return n=new fn({props:{ratings:e[3]}}),{c(){t=m("div"),Te(n.$$.fragment),l=C(),o=m("div"),r=m("button"),r.textContent="\u{1F4CB} Copy link",c=C(),i=m("button"),i.textContent="\u2B05\uFE0F Go back",f(r,"class","bg-transparent text-yellow-400"),f(i,"class","bg-transparent text-yellow-400"),f(o,"class","flex flex-col mt-4 space-y-3"),f(t,"class","text-center py-4 m-auto")},m(u,h){S(u,t,h),he(n,t,null),d(t,l),d(t,o),d(o,r),d(o,c),d(o,i),a=!0,s||(p=[N(r,"click",e[9]),N(i,"click",e[8])],s=!0)},p(u,h){const _={};h&8&&(_.ratings=u[3]),n.$set(_)},i(u){a||(V(n.$$.fragment,u),a=!0)},o(u){te(n.$$.fragment,u),a=!1},d(u){u&&T(t),pe(n),s=!1,M(p)}}}function pn(e){let t;return{c(){t=m("p"),t.textContent="Loading...",f(t,"class","m-auto")},m(n,l){S(n,t,l)},p:L,i:L,o:L,d(n){n&&T(t)}}}function mn(e){let t,n,l,o,r,c,i,a;t=new on({});const s=[pn,hn,dn],p=[];function u(h,_){return h[2]?0:h[3].length?1:2}return o=u(e),r=p[o]=s[o](e),{c(){Te(t.$$.fragment),n=C(),l=m("div"),r.c(),f(l,"class","min-h-[90vh] flex m-auto")},m(h,_){he(t,h,_),S(h,n,_),S(h,l,_),p[o].m(l,null),c=!0,i||(a=N(window,"popstate",e[4]),i=!0)},p(h,[_]){let v=o;o=u(h),o===v?p[o].p(h,_):(_t(),te(p[v],1,1,()=>{p[v]=null}),bt(),r=p[o],r?r.p(h,_):(r=p[o]=s[o](h),r.c()),V(r,1),r.m(l,null))},i(h){c||(V(t.$$.fragment,h),V(r),c=!0)},o(h){te(t.$$.fragment,h),te(r),c=!1},d(h){pe(t,h),h&&T(n),h&&T(l),p[o].d(),i=!1,a()}}}function _n(e,t,n){let l;Ye(e,ne,b=>n(12,l=b));let o=l[0]===X[0]&&l[1]===X[1]&&l[2]===X[2]&&l[3]===X[3],r=null,c=!1,i=[];dt(async()=>{const $=new URLSearchParams(location.search).get("id");$?await _($):r==null||r.focus()});const a=()=>{if(location.search){const $=new URLSearchParams(location.search).get("id");$&&_($);return}n(3,i=[]),Pe().then(()=>r==null?void 0:r.focus())},s=async b=>(await wt(b)).map(E=>{var P;return{id:E.id,label:E.title,secondaryLabel:(P=E.year)==null?void 0:P.toString()}}),p=async b=>await _(b.detail),u=({currentTarget:b})=>{b.checked?Ie(ne,l=X,l):Ie(ne,l=rt,l)},h=async()=>{n(3,i=[]),history.pushState({},"","/imdb-table/"),await Pe(),r==null||r.focus()},_=async b=>{try{n(2,c=!0);const $=await kt(b);if(!$){n(2,c=!1);return}const E=await Ct($);n(2,c=!1),n(3,i=E);const P=new URLSearchParams(location.search);P.set("id",b),history.pushState({},"",`${location.href.split("?")[0]}?${P}`)}catch{n(2,c=!1)}},v=()=>{navigator.clipboard.writeText(location.href)};function w(b){r=b,n(1,r)}function A(){o=this.checked,n(0,o)}return[o,r,c,i,a,s,p,u,h,v,w,A]}class bn extends _e{constructor(t){super(),me(this,t,_n,mn,re,{})}}new bn({target:document.getElementById("app")});
