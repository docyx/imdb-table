var gn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ba=gn((U,G)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function I(){}function Xt(e){return e()}function ct(){return Object.create(null)}function z(e){e.forEach(Xt)}function Zt(e){return typeof e=="function"}function $e(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function _n(e){return Object.keys(e).length===0}function bn(e,...t){if(e==null)return I;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Yt(e,t,n){e.$$.on_destroy.push(bn(t,n))}function ut(e,t,n){return e.set(n),t}function d(e,t){e.appendChild(t)}function L(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode.removeChild(e)}function Pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function S(){return k(" ")}function mn(){return k("")}function F(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function yn(e){return Array.from(e.childNodes)}function be(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ft(e,t){e.value=t==null?"":t}function vn(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}let me;function he(e){me=e}function Qt(){if(!me)throw new Error("Function called outside component initialization");return me}function wn(e){Qt().$$.on_mount.push(e)}function $n(){const e=Qt();return(t,n,{cancelable:r=!1}={})=>{const i=e.$$.callbacks[t];if(i){const o=vn(t,n,{cancelable:r});return i.slice().forEach(l=>{l.call(e,o)}),!o.defaultPrevented}return!0}}const pe=[],xe=[],Ee=[],Je=[],Vt=Promise.resolve();let Xe=!1;function en(){Xe||(Xe=!0,Vt.then(tn))}function dt(){return en(),Vt}function Ze(e){Ee.push(e)}function Tn(e){Je.push(e)}const ze=new Set;let Ce=0;function tn(){const e=me;do{for(;Ce<pe.length;){const t=pe[Ce];Ce++,he(t),An(t.$$)}for(he(null),pe.length=0,Ce=0;xe.length;)xe.pop()();for(let t=0;t<Ee.length;t+=1){const n=Ee[t];ze.has(n)||(ze.add(n),n())}Ee.length=0}while(pe.length);for(;Je.length;)Je.pop()();Xe=!1,ze.clear(),he(e)}function An(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ze)}}const je=new Set;let Z;function On(){Z={r:0,c:[],p:Z}}function Cn(){Z.r||z(Z.c),Z=Z.p}function oe(e,t){e&&e.i&&(je.delete(e),e.i(t))}function ge(e,t,n,r){if(e&&e.o){if(je.has(e))return;je.add(e),Z.c.push(()=>{je.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Sn(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function ot(e){e&&e.c()}function Re(e,t,n,r){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),r||Ze(()=>{const l=e.$$.on_mount.map(Xt).filter(Zt);e.$$.on_destroy?e.$$.on_destroy.push(...l):z(l),e.$$.on_mount=[]}),o.forEach(Ze)}function Ne(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function En(e,t){e.$$.dirty[0]===-1&&(pe.push(e),en(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ke(e,t,n,r,i,o,l,s=[-1]){const c=me;he(e);const a=e.$$={fragment:null,ctx:[],props:o,update:I,not_equal:i,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:ct(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};l&&l(a.root);let h=!1;if(a.ctx=n?n(e,t.props||{},(u,f,...g)=>{const _=g.length?g[0]:f;return a.ctx&&i(a.ctx[u],a.ctx[u]=_)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](_),h&&En(e,u)),f}):[],a.update(),h=!0,z(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const u=yn(t.target);a.fragment&&a.fragment.l(u),u.forEach(j)}else a.fragment&&a.fragment.c();t.intro&&oe(e.$$.fragment),Re(e,t.target,t.anchor,t.customElement),tn()}he(c)}class De{$destroy(){Ne(this,1),this.$destroy=I}$on(t,n){if(!Zt(n))return I;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!_n(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const jn="https://imdb-table.vercel.app/api",nn=async e=>await(await fetch(`${jn}/${e}`)).json(),Pn=async e=>await nn(`search?q=${e}`),xn=async e=>await nn(`info?id=${e}`),re=[];function Ln(e,t=I){let n;const r=new Set;function i(s){if($e(e,s)&&(e=s,n)){const c=!re.length;for(const a of r)a[1](),re.push(a,e);if(c){for(let a=0;a<re.length;a+=2)re[a][0](re[a+1]);re.length=0}}}function o(s){i(s(e))}function l(s,c=I){const a=[s,c];return r.add(a),r.size===1&&(n=t(i)||I),s(e),()=>{r.delete(a),r.size===0&&(n(),n=null)}}return{set:i,update:o,subscribe:l}}const Le=["bg-green-500","bg-yellow-500","bg-orange-500","bg-red-500"],Ye=["bg-[#018571]","bg-[#80cdc1] text-black","bg-[#dfc27d] text-black","bg-[#a6611a]"],pt=localStorage.getItem("colors"),ie=Ln(pt?JSON.parse(pt):Le);ie.subscribe(e=>{localStorage.setItem("colors",JSON.stringify(e))});const ht=localStorage.getItem("version"),gt=ht?parseInt(ht):-1,In=e=>{switch(e){case-1:{const t=localStorage.getItem("colors");if(!t)return;JSON.parse(t)[0]==="bg-[#018571]"&&(localStorage.clear(),ie.set(Ye));break}}};gt<0&&(In(gt),localStorage.setItem("version",JSON.stringify(0)));var Mn=typeof global=="object"&&global&&global.Object===Object&&global;const rn=Mn;var Rn=typeof self=="object"&&self&&self.Object===Object&&self,Nn=rn||Rn||Function("return this")();const B=Nn;var kn=B.Symbol;const ae=kn;var on=Object.prototype,Dn=on.hasOwnProperty,Fn=on.toString,de=ae?ae.toStringTag:void 0;function Bn(e){var t=Dn.call(e,de),n=e[de];try{e[de]=void 0;var r=!0}catch{}var i=Fn.call(e);return r&&(t?e[de]=n:delete e[de]),i}var Un=Object.prototype,Gn=Un.toString;function zn(e){return Gn.call(e)}var Hn="[object Null]",qn="[object Undefined]",_t=ae?ae.toStringTag:void 0;function le(e){return e==null?e===void 0?qn:Hn:_t&&_t in Object(e)?Bn(e):zn(e)}function se(e){return e!=null&&typeof e=="object"}var Wn="[object Symbol]";function Kn(e){return typeof e=="symbol"||se(e)&&le(e)==Wn}var Jn=Array.isArray;const Ie=Jn;var Xn=/\s/;function Zn(e){for(var t=e.length;t--&&Xn.test(e.charAt(t)););return t}var Yn=/^\s+/;function Qn(e){return e&&e.slice(0,Zn(e)+1).replace(Yn,"")}function ye(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var bt=0/0,Vn=/^[-+]0x[0-9a-f]+$/i,er=/^0b[01]+$/i,tr=/^0o[0-7]+$/i,nr=parseInt;function mt(e){if(typeof e=="number")return e;if(Kn(e))return bt;if(ye(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ye(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Qn(e);var n=er.test(e);return n||tr.test(e)?nr(e.slice(2),n?2:8):Vn.test(e)?bt:+e}var rr="[object AsyncFunction]",or="[object Function]",ir="[object GeneratorFunction]",ar="[object Proxy]";function an(e){if(!ye(e))return!1;var t=le(e);return t==or||t==ir||t==rr||t==ar}var sr=B["__core-js_shared__"];const He=sr;var yt=function(){var e=/[^.]+$/.exec(He&&He.keys&&He.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function lr(e){return!!yt&&yt in e}var cr=Function.prototype,ur=cr.toString;function Q(e){if(e!=null){try{return ur.call(e)}catch{}try{return e+""}catch{}}return""}var fr=/[\\^$.*+?()[\]{}|]/g,dr=/^\[object .+?Constructor\]$/,pr=Function.prototype,hr=Object.prototype,gr=pr.toString,_r=hr.hasOwnProperty,br=RegExp("^"+gr.call(_r).replace(fr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function mr(e){if(!ye(e)||lr(e))return!1;var t=an(e)?br:dr;return t.test(Q(e))}function yr(e,t){return e==null?void 0:e[t]}function ce(e,t){var n=yr(e,t);return mr(n)?n:void 0}var vr=ce(B,"WeakMap");const Qe=vr;var wr=9007199254740991,$r=/^(?:0|[1-9]\d*)$/;function Tr(e,t){var n=typeof e;return t=t==null?wr:t,!!t&&(n=="number"||n!="symbol"&&$r.test(e))&&e>-1&&e%1==0&&e<t}function sn(e,t){return e===t||e!==e&&t!==t}var Ar=9007199254740991;function ln(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ar}function Or(e){return e!=null&&ln(e.length)&&!an(e)}var Cr=Object.prototype;function Sr(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Cr;return e===n}function Er(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var jr="[object Arguments]";function vt(e){return se(e)&&le(e)==jr}var cn=Object.prototype,Pr=cn.hasOwnProperty,xr=cn.propertyIsEnumerable,Lr=vt(function(){return arguments}())?vt:function(e){return se(e)&&Pr.call(e,"callee")&&!xr.call(e,"callee")};const Ir=Lr;function Mr(){return!1}var un=typeof U=="object"&&U&&!U.nodeType&&U,wt=un&&typeof G=="object"&&G&&!G.nodeType&&G,Rr=wt&&wt.exports===un,$t=Rr?B.Buffer:void 0,Nr=$t?$t.isBuffer:void 0,kr=Nr||Mr;const Ve=kr;var Dr="[object Arguments]",Fr="[object Array]",Br="[object Boolean]",Ur="[object Date]",Gr="[object Error]",zr="[object Function]",Hr="[object Map]",qr="[object Number]",Wr="[object Object]",Kr="[object RegExp]",Jr="[object Set]",Xr="[object String]",Zr="[object WeakMap]",Yr="[object ArrayBuffer]",Qr="[object DataView]",Vr="[object Float32Array]",eo="[object Float64Array]",to="[object Int8Array]",no="[object Int16Array]",ro="[object Int32Array]",oo="[object Uint8Array]",io="[object Uint8ClampedArray]",ao="[object Uint16Array]",so="[object Uint32Array]",C={};C[Vr]=C[eo]=C[to]=C[no]=C[ro]=C[oo]=C[io]=C[ao]=C[so]=!0;C[Dr]=C[Fr]=C[Yr]=C[Br]=C[Qr]=C[Ur]=C[Gr]=C[zr]=C[Hr]=C[qr]=C[Wr]=C[Kr]=C[Jr]=C[Xr]=C[Zr]=!1;function lo(e){return se(e)&&ln(e.length)&&!!C[le(e)]}function co(e){return function(t){return e(t)}}var fn=typeof U=="object"&&U&&!U.nodeType&&U,_e=fn&&typeof G=="object"&&G&&!G.nodeType&&G,uo=_e&&_e.exports===fn,qe=uo&&rn.process,fo=function(){try{var e=_e&&_e.require&&_e.require("util").types;return e||qe&&qe.binding&&qe.binding("util")}catch{}}();const Tt=fo;var At=Tt&&Tt.isTypedArray,po=At?co(At):lo;const dn=po;var ho=Object.prototype,go=ho.hasOwnProperty;function _o(e,t){var n=Ie(e),r=!n&&Ir(e),i=!n&&!r&&Ve(e),o=!n&&!r&&!i&&dn(e),l=n||r||i||o,s=l?Er(e.length,String):[],c=s.length;for(var a in e)(t||go.call(e,a))&&!(l&&(a=="length"||i&&(a=="offset"||a=="parent")||o&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||Tr(a,c)))&&s.push(a);return s}function bo(e,t){return function(n){return e(t(n))}}var mo=bo(Object.keys,Object);const yo=mo;var vo=Object.prototype,wo=vo.hasOwnProperty;function $o(e){if(!Sr(e))return yo(e);var t=[];for(var n in Object(e))wo.call(e,n)&&n!="constructor"&&t.push(n);return t}function To(e){return Or(e)?_o(e):$o(e)}var Ao=ce(Object,"create");const ve=Ao;function Oo(){this.__data__=ve?ve(null):{},this.size=0}function Co(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var So="__lodash_hash_undefined__",Eo=Object.prototype,jo=Eo.hasOwnProperty;function Po(e){var t=this.__data__;if(ve){var n=t[e];return n===So?void 0:n}return jo.call(t,e)?t[e]:void 0}var xo=Object.prototype,Lo=xo.hasOwnProperty;function Io(e){var t=this.__data__;return ve?t[e]!==void 0:Lo.call(t,e)}var Mo="__lodash_hash_undefined__";function Ro(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ve&&t===void 0?Mo:t,this}function Y(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Y.prototype.clear=Oo;Y.prototype.delete=Co;Y.prototype.get=Po;Y.prototype.has=Io;Y.prototype.set=Ro;function No(){this.__data__=[],this.size=0}function Fe(e,t){for(var n=e.length;n--;)if(sn(e[n][0],t))return n;return-1}var ko=Array.prototype,Do=ko.splice;function Fo(e){var t=this.__data__,n=Fe(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Do.call(t,n,1),--this.size,!0}function Bo(e){var t=this.__data__,n=Fe(t,e);return n<0?void 0:t[n][1]}function Uo(e){return Fe(this.__data__,e)>-1}function Go(e,t){var n=this.__data__,r=Fe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function H(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}H.prototype.clear=No;H.prototype.delete=Fo;H.prototype.get=Bo;H.prototype.has=Uo;H.prototype.set=Go;var zo=ce(B,"Map");const we=zo;function Ho(){this.size=0,this.__data__={hash:new Y,map:new(we||H),string:new Y}}function qo(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Be(e,t){var n=e.__data__;return qo(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Wo(e){var t=Be(this,e).delete(e);return this.size-=t?1:0,t}function Ko(e){return Be(this,e).get(e)}function Jo(e){return Be(this,e).has(e)}function Xo(e,t){var n=Be(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function V(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}V.prototype.clear=Ho;V.prototype.delete=Wo;V.prototype.get=Ko;V.prototype.has=Jo;V.prototype.set=Xo;function Zo(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Yo(){this.__data__=new H,this.size=0}function Qo(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Vo(e){return this.__data__.get(e)}function ei(e){return this.__data__.has(e)}var ti=200;function ni(e,t){var n=this.__data__;if(n instanceof H){var r=n.__data__;if(!we||r.length<ti-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new V(r)}return n.set(e,t),this.size=n.size,this}function K(e){var t=this.__data__=new H(e);this.size=t.size}K.prototype.clear=Yo;K.prototype.delete=Qo;K.prototype.get=Vo;K.prototype.has=ei;K.prototype.set=ni;function ri(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var l=e[n];t(l,n,e)&&(o[i++]=l)}return o}function oi(){return[]}var ii=Object.prototype,ai=ii.propertyIsEnumerable,Ot=Object.getOwnPropertySymbols,si=Ot?function(e){return e==null?[]:(e=Object(e),ri(Ot(e),function(t){return ai.call(e,t)}))}:oi;const li=si;function ci(e,t,n){var r=t(e);return Ie(e)?r:Zo(r,n(e))}function Ct(e){return ci(e,To,li)}var ui=ce(B,"DataView");const et=ui;var fi=ce(B,"Promise");const tt=fi;var di=ce(B,"Set");const nt=di;var St="[object Map]",pi="[object Object]",Et="[object Promise]",jt="[object Set]",Pt="[object WeakMap]",xt="[object DataView]",hi=Q(et),gi=Q(we),_i=Q(tt),bi=Q(nt),mi=Q(Qe),X=le;(et&&X(new et(new ArrayBuffer(1)))!=xt||we&&X(new we)!=St||tt&&X(tt.resolve())!=Et||nt&&X(new nt)!=jt||Qe&&X(new Qe)!=Pt)&&(X=function(e){var t=le(e),n=t==pi?e.constructor:void 0,r=n?Q(n):"";if(r)switch(r){case hi:return xt;case gi:return St;case _i:return Et;case bi:return jt;case mi:return Pt}return t});const Lt=X;var yi=B.Uint8Array;const It=yi;var vi="__lodash_hash_undefined__";function wi(e){return this.__data__.set(e,vi),this}function $i(e){return this.__data__.has(e)}function Me(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new V;++t<n;)this.add(e[t])}Me.prototype.add=Me.prototype.push=wi;Me.prototype.has=$i;function Ti(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Ai(e,t){return e.has(t)}var Oi=1,Ci=2;function pn(e,t,n,r,i,o){var l=n&Oi,s=e.length,c=t.length;if(s!=c&&!(l&&c>s))return!1;var a=o.get(e),h=o.get(t);if(a&&h)return a==t&&h==e;var u=-1,f=!0,g=n&Ci?new Me:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var _=e[u],m=t[u];if(r)var A=l?r(m,_,u,t,e,o):r(_,m,u,e,t,o);if(A!==void 0){if(A)continue;f=!1;break}if(g){if(!Ti(t,function($,y){if(!Ai(g,y)&&(_===$||i(_,$,n,r,o)))return g.push(y)})){f=!1;break}}else if(!(_===m||i(_,m,n,r,o))){f=!1;break}}return o.delete(e),o.delete(t),f}function Si(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}function Ei(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var ji=1,Pi=2,xi="[object Boolean]",Li="[object Date]",Ii="[object Error]",Mi="[object Map]",Ri="[object Number]",Ni="[object RegExp]",ki="[object Set]",Di="[object String]",Fi="[object Symbol]",Bi="[object ArrayBuffer]",Ui="[object DataView]",Mt=ae?ae.prototype:void 0,We=Mt?Mt.valueOf:void 0;function Gi(e,t,n,r,i,o,l){switch(n){case Ui:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Bi:return!(e.byteLength!=t.byteLength||!o(new It(e),new It(t)));case xi:case Li:case Ri:return sn(+e,+t);case Ii:return e.name==t.name&&e.message==t.message;case Ni:case Di:return e==t+"";case Mi:var s=Si;case ki:var c=r&ji;if(s||(s=Ei),e.size!=t.size&&!c)return!1;var a=l.get(e);if(a)return a==t;r|=Pi,l.set(e,t);var h=pn(s(e),s(t),r,i,o,l);return l.delete(e),h;case Fi:if(We)return We.call(e)==We.call(t)}return!1}var zi=1,Hi=Object.prototype,qi=Hi.hasOwnProperty;function Wi(e,t,n,r,i,o){var l=n&zi,s=Ct(e),c=s.length,a=Ct(t),h=a.length;if(c!=h&&!l)return!1;for(var u=c;u--;){var f=s[u];if(!(l?f in t:qi.call(t,f)))return!1}var g=o.get(e),_=o.get(t);if(g&&_)return g==t&&_==e;var m=!0;o.set(e,t),o.set(t,e);for(var A=l;++u<c;){f=s[u];var $=e[f],y=t[f];if(r)var O=l?r(y,$,f,t,e,o):r($,y,f,e,t,o);if(!(O===void 0?$===y||i($,y,n,r,o):O)){m=!1;break}A||(A=f=="constructor")}if(m&&!A){var P=e.constructor,E=t.constructor;P!=E&&"constructor"in e&&"constructor"in t&&!(typeof P=="function"&&P instanceof P&&typeof E=="function"&&E instanceof E)&&(m=!1)}return o.delete(e),o.delete(t),m}var Ki=1,Rt="[object Arguments]",Nt="[object Array]",Se="[object Object]",Ji=Object.prototype,kt=Ji.hasOwnProperty;function Xi(e,t,n,r,i,o){var l=Ie(e),s=Ie(t),c=l?Nt:Lt(e),a=s?Nt:Lt(t);c=c==Rt?Se:c,a=a==Rt?Se:a;var h=c==Se,u=a==Se,f=c==a;if(f&&Ve(e)){if(!Ve(t))return!1;l=!0,h=!1}if(f&&!h)return o||(o=new K),l||dn(e)?pn(e,t,n,r,i,o):Gi(e,t,c,n,r,i,o);if(!(n&Ki)){var g=h&&kt.call(e,"__wrapped__"),_=u&&kt.call(t,"__wrapped__");if(g||_){var m=g?e.value():e,A=_?t.value():t;return o||(o=new K),i(m,A,n,r,o)}}return f?(o||(o=new K),Wi(e,t,n,r,i,o)):!1}function hn(e,t,n,r,i){return e===t?!0:e==null||t==null||!se(e)&&!se(t)?e!==e&&t!==t:Xi(e,t,n,r,hn,i)}var Zi=function(){return B.Date.now()};const Ke=Zi;var Yi="Expected a function",Qi=Math.max,Vi=Math.min;function ea(e,t,n){var r,i,o,l,s,c,a=0,h=!1,u=!1,f=!0;if(typeof e!="function")throw new TypeError(Yi);t=mt(t)||0,ye(n)&&(h=!!n.leading,u="maxWait"in n,o=u?Qi(mt(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f);function g(w){var x=r,D=i;return r=i=void 0,a=w,l=e.apply(D,x),l}function _(w){return a=w,s=setTimeout($,t),h?g(w):l}function m(w){var x=w-c,D=w-a,ee=t-x;return u?Vi(ee,o-D):ee}function A(w){var x=w-c,D=w-a;return c===void 0||x>=t||x<0||u&&D>=o}function $(){var w=Ke();if(A(w))return y(w);s=setTimeout($,m(w))}function y(w){return s=void 0,f&&r?g(w):(r=i=void 0,l)}function O(){s!==void 0&&clearTimeout(s),a=0,r=c=i=s=void 0}function P(){return s===void 0?l:y(Ke())}function E(){var w=Ke(),x=A(w);if(r=arguments,i=this,c=w,x){if(s===void 0)return _(c);if(u)return clearTimeout(s),s=setTimeout($,t),g(c)}return s===void 0&&(s=setTimeout($,t)),l}return E.cancel=O,E.flush=P,E}function rt(e,t){return hn(e,t)}function Dt(e,t,n){const r=e.slice();return r[12]=t[n],r}function Ft(e){let t,n,r=e[3].length===0&&e[2].trim()!=="",i=e[3],o=[];for(let s=0;s<i.length;s+=1)o[s]=Ut(Dt(e,i,s));let l=r&&Gt();return{c(){t=b("div");for(let s=0;s<o.length;s+=1)o[s].c();n=S(),l&&l.c(),p(t,"class","absolute bg-neutral-800 w-full text-lg font-medium max-h-56 overflow-scroll")},m(s,c){L(s,t,c);for(let a=0;a<o.length;a+=1)o[a].m(t,null);d(t,n),l&&l.m(t,null)},p(s,c){if(c&40){i=s[3];let a;for(a=0;a<i.length;a+=1){const h=Dt(s,i,a);o[a]?o[a].p(h,c):(o[a]=Ut(h),o[a].c(),o[a].m(t,n))}for(;a<o.length;a+=1)o[a].d(1);o.length=i.length}c&12&&(r=s[3].length===0&&s[2].trim()!==""),r?l||(l=Gt(),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},d(s){s&&j(t),Pe(o,s),l&&l.d()}}}function Bt(e){let t,n,r=e[12].secondaryLabel+"",i;return{c(){t=b("span"),n=k("\u2022 "),i=k(r),p(t,"class","text-neutral-400")},m(o,l){L(o,t,l),d(t,n),d(t,i)},p(o,l){l&8&&r!==(r=o[12].secondaryLabel+"")&&be(i,r)},d(o){o&&j(t)}}}function Ut(e){let t,n=e[12].label+"",r,i,o,l,s=e[12].secondaryLabel&&Bt(e);function c(){return e[11](e[12])}return{c(){t=b("button"),r=k(n),i=S(),s&&s.c(),p(t,"class","w-full p-3 hover:bg-neutral-700 text-left")},m(a,h){L(a,t,h),d(t,r),d(t,i),s&&s.m(t,null),o||(l=F(t,"click",c),o=!0)},p(a,h){e=a,h&8&&n!==(n=e[12].label+"")&&be(r,n),e[12].secondaryLabel?s?s.p(e,h):(s=Bt(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(a){a&&j(t),s&&s.d(),o=!1,l()}}}function Gt(e){let t;return{c(){t=b("p"),t.textContent="No results found.",p(t,"class","text-neutral-500 p-3")},m(n,r){L(n,t,r)},d(n){n&&j(t)}}}function ta(e){let t,n,r,i=e[4]&&e[2].trim()!=="",o,l,s=i&&Ft(e);return{c(){t=b("div"),n=b("input"),r=S(),s&&s.c(),p(n,"type","text"),p(n,"class","bg-transparent border-b border-b-white p-1 text-xl focus:outline-none focus:border-b-yellow-400 transition-colors"),p(n,"placeholder",e[1]),p(t,"class","relative"),p(t,"id","container")},m(c,a){L(c,t,a),d(t,n),e[8](n),ft(n,e[2]),d(t,r),s&&s.m(t,null),o||(l=[F(n,"input",e[9]),F(n,"input",e[6]),F(n,"focus",e[10])],o=!0)},p(c,[a]){a&2&&p(n,"placeholder",c[1]),a&4&&n.value!==c[2]&&ft(n,c[2]),a&20&&(i=c[4]&&c[2].trim()!==""),i?s?s.p(c,a):(s=Ft(c),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i:I,o:I,d(c){c&&j(t),e[8](null),s&&s.d(),o=!1,z(l)}}}function na(e,t,n){let{placeholder:r=null}=t,{inputEl:i=null}=t,{getAutocompletions:o}=t;const l=$n();let s="",c=[],a=!1;const h=ea(()=>{if(s===""){n(3,c=[]);return}o(s).then(m=>n(3,c=m))},300);function u(m){xe[m?"unshift":"push"](()=>{i=m,n(0,i)})}function f(){s=this.value,n(2,s)}const g=()=>n(4,a=!0),_=m=>l("autocomplete-click",m.id);return e.$$set=m=>{"placeholder"in m&&n(1,r=m.placeholder),"inputEl"in m&&n(0,i=m.inputEl),"getAutocompletions"in m&&n(7,o=m.getAutocompletions)},[i,r,s,c,a,l,h,o,u,f,g,_]}class ra extends De{constructor(t){super(),ke(this,t,na,ta,$e,{placeholder:1,inputEl:0,getAutocompletions:7})}}function oa(e){let t;return{c(){t=b("a"),t.innerHTML='<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#facc15; color:#151513; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm svelte-10qsoqp"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',p(t,"href","https://github.com/docyx/imdb-table"),p(t,"class","github-corner svelte-10qsoqp"),p(t,"aria-label","View source on GitHub")},m(n,r){L(n,t,r)},p:I,i:I,o:I,d(n){n&&j(t)}}}class ia extends De{constructor(t){super(),ke(this,t,null,oa,$e,{})}}function zt(e,t,n){const r=e.slice();return r[8]=t[n],r[10]=n,r}function Ht(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function qt(e,t,n){const r=e.slice();return r[14]=t[n],r[16]=n,r}function Wt(e){let t,n=e[16]+1+"",r,i;return{c(){t=b("th"),r=k(n),p(t,"scope","col"),p(t,"class",i=`${e[2]===e[16]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)},m(o,l){L(o,t,l),d(t,r)},p(o,l){l&4&&i!==(i=`${o[2]===o[16]?"text-white font-bold":"text-neutral-400 font-light"} py-2`)&&p(t,"class",i)},d(o){o&&j(t)}}}function aa(e){let t;return{c(){t=b("td"),p(t,"class","bg-neutral-700"),p(t,"title","This episode is not rated on IMDb.")},m(n,r){L(n,t,r)},p:I,d(n){n&&j(t)}}}function sa(e){let t,n,r=e[11][0].toFixed(1)+"",i,o,l,s,c;function a(){return e[6](e[10],e[13])}return{c(){t=b("td"),n=b("a"),i=k(r),p(n,"class","block p-1"),p(n,"aria-label",`Season ${e[10]+1} Episode ${e[13]+1}`),p(n,"href",o=`https://www.imdb.com/title/${e[11][1]}/`),p(t,"class",l=`${e[5](e[11][0])}`)},m(h,u){L(h,t,u),d(t,n),d(n,i),s||(c=[F(t,"mouseenter",a),F(t,"mouseleave",e[7])],s=!0)},p(h,u){e=h,u&1&&r!==(r=e[11][0].toFixed(1)+"")&&be(i,r),u&1&&o!==(o=`https://www.imdb.com/title/${e[11][1]}/`)&&p(n,"href",o),u&1&&l!==(l=`${e[5](e[11][0])}`)&&p(t,"class",l)},d(h){h&&j(t),s=!1,z(c)}}}function Kt(e){let t;function n(o,l){return o[11]?sa:aa}let r=n(e),i=r(e);return{c(){i.c(),t=mn()},m(o,l){i.m(o,l),L(o,t,l)},p(o,l){r===(r=n(o))&&i?i.p(o,l):(i.d(1),i=r(o),i&&(i.c(),i.m(t.parentNode,t)))},d(o){i.d(o),o&&j(t)}}}function Jt(e){var h;let t,n,r=e[10]+1+"",i,o,l,s,c=(h=e[8])!=null?h:Array(e[4]),a=[];for(let u=0;u<c.length;u+=1)a[u]=Kt(Ht(e,c,u));return{c(){t=b("tr"),n=b("th"),i=k(r),l=S();for(let u=0;u<a.length;u+=1)a[u].c();s=S(),p(n,"scope","row"),p(n,"class",o=`${e[1]===e[10]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`),p(t,"class","p-2")},m(u,f){L(u,t,f),d(t,n),d(n,i),d(t,l);for(let g=0;g<a.length;g+=1)a[g].m(t,null);d(t,s)},p(u,f){var g;if(f&2&&o!==(o=`${u[1]===u[10]?"text-white font-bold":"text-neutral-400 font-light"} w-10 pr-2 sticky left-0 p-1 bg-neutral-900`)&&p(n,"class",o),f&55){c=(g=u[8])!=null?g:Array(u[4]);let _;for(_=0;_<c.length;_+=1){const m=Ht(u,c,_);a[_]?a[_].p(m,f):(a[_]=Kt(m),a[_].c(),a[_].m(t,s))}for(;_<a.length;_+=1)a[_].d(1);a.length=c.length}},d(u){u&&j(t),Pe(a,u)}}}function la(e){let t,n,r,i,o,l,s,c,a,h,u,f,g,_,m,A,$,y,O,P,E,w,x,D,ee,Ue,ue,q,W,J,Ge,it,at,Te,st,Ae,lt,Oe,te=Array(e[4]),M=[];for(let v=0;v<te.length;v+=1)M[v]=Wt(qt(e,te,v));let ne=e[0],R=[];for(let v=0;v<ne.length;v+=1)R[v]=Jt(zt(e,ne,v));return{c(){t=b("div"),n=b("div"),r=b("div"),i=b("div"),l=S(),s=b("p"),s.textContent="8.5\u201310.0",c=S(),a=b("div"),h=b("div"),f=S(),g=b("p"),g.textContent="7.6\u20138.4",_=S(),m=b("div"),A=b("div"),y=S(),O=b("p"),O.textContent="6.5\u20137.5",P=S(),E=b("div"),w=b("div"),D=S(),ee=b("p"),ee.textContent="0.0\u20136.4",Ue=S(),ue=b("div"),q=b("div"),W=b("table"),J=b("tr"),Ge=b("th"),it=S();for(let v=0;v<M.length;v+=1)M[v].c();at=S();for(let v=0;v<R.length;v+=1)R[v].c();st=S(),Ae=b("p"),Ae.textContent="Episode",lt=S(),Oe=b("p"),Oe.textContent="Season",p(i,"class",o=`w-5 h-5 mr-2 ${e[3][0]}`),p(r,"class","flex items-center"),p(h,"class",u=`w-5 h-5 mr-2 ${e[3][1]}`),p(a,"class","flex items-center"),p(A,"class",$=`w-5 h-5 mr-2 ${e[3][2]}`),p(m,"class","flex items-center"),p(w,"class",x=`w-5 h-5 mr-2 ${e[3][3]}`),p(E,"class","flex items-center"),p(n,"class","flex flex-col sm:flex-row space-x-0 sm:space-x-6"),p(t,"class","mb-3 flex items-center justify-center"),p(Ge,"aria-hidden","true"),p(J,"class","sticky top-0 bg-neutral-900"),p(W,"class",Te=`table-auto m-auto${rt(e[3],Le)?" [&_td]:text-black":""}`),p(Ae,"class","absolute text-xl top-0 left-0 right-0 mx-auto"),p(Oe,"class","absolute text-xl -left-9 top-1/2 bottom-1/2 transform -rotate-90"),p(q,"class","relative p-8"),p(ue,"class","max-w-[100vw] overflow-x-auto")},m(v,N){L(v,t,N),d(t,n),d(n,r),d(r,i),d(r,l),d(r,s),d(n,c),d(n,a),d(a,h),d(a,f),d(a,g),d(n,_),d(n,m),d(m,A),d(m,y),d(m,O),d(n,P),d(n,E),d(E,w),d(E,D),d(E,ee),L(v,Ue,N),L(v,ue,N),d(ue,q),d(q,W),d(W,J),d(J,Ge),d(J,it);for(let T=0;T<M.length;T+=1)M[T].m(J,null);d(W,at);for(let T=0;T<R.length;T+=1)R[T].m(W,null);d(q,st),d(q,Ae),d(q,lt),d(q,Oe)},p(v,[N]){if(N&8&&o!==(o=`w-5 h-5 mr-2 ${v[3][0]}`)&&p(i,"class",o),N&8&&u!==(u=`w-5 h-5 mr-2 ${v[3][1]}`)&&p(h,"class",u),N&8&&$!==($=`w-5 h-5 mr-2 ${v[3][2]}`)&&p(A,"class",$),N&8&&x!==(x=`w-5 h-5 mr-2 ${v[3][3]}`)&&p(w,"class",x),N&4){te=Array(v[4]);let T;for(T=0;T<te.length;T+=1){const fe=qt(v,te,T);M[T]?M[T].p(fe,N):(M[T]=Wt(fe),M[T].c(),M[T].m(J,null))}for(;T<M.length;T+=1)M[T].d(1);M.length=te.length}if(N&55){ne=v[0];let T;for(T=0;T<ne.length;T+=1){const fe=zt(v,ne,T);R[T]?R[T].p(fe,N):(R[T]=Jt(fe),R[T].c(),R[T].m(W,null))}for(;T<R.length;T+=1)R[T].d(1);R.length=ne.length}N&8&&Te!==(Te=`table-auto m-auto${rt(v[3],Le)?" [&_td]:text-black":""}`)&&p(W,"class",Te)},i:I,o:I,d(v){v&&j(t),v&&j(Ue),v&&j(ue),Pe(M,v),Pe(R,v)}}}function ca(e,t,n){let r;Yt(e,ie,u=>n(3,r=u));let{ratings:i}=t,o=null,l=null,s=i.reduce((u,f)=>(f==null?void 0:f.length)>u?f.length:u,0);const c=u=>u>=8.5?r[0]:u>=7.6?r[1]:u>=6.5?r[2]:r[3],a=(u,f)=>{n(1,o=u),n(2,l=f)},h=()=>{n(1,o=null),n(2,l=null)};return e.$$set=u=>{"ratings"in u&&n(0,i=u.ratings)},[i,o,l,r,s,c,a,h]}class ua extends De{constructor(t){super(),ke(this,t,ca,la,$e,{ratings:0})}}function fa(e){let t,n,r,i,o,l,s,c,a,h,u,f,g,_;function m($){e[10]($)}let A={placeholder:"TV show name",getAutocompletions:e[5]};return e[1]!==void 0&&(A.inputEl=e[1]),i=new ra({props:A}),xe.push(()=>Sn(i,"inputEl",m)),i.$on("autocomplete-click",e[6]),{c(){t=b("div"),n=b("h1"),n.textContent="IMDb Table",r=S(),ot(i.$$.fragment),l=S(),s=b("div"),c=b("label"),a=b("input"),h=S(),u=b("p"),u.textContent="Colorblind mode",p(n,"class","text-5xl font-bold mb-4 text-center"),p(a,"type","checkbox"),p(a,"class","accent-yellow-400 border border-red-400"),p(u,"class","text-neutral-400"),p(c,"class","flex items-center space-x-1.5"),p(s,"class","flex items-center justify-center mt-4"),p(t,"class","m-auto")},m($,y){L($,t,y),d(t,n),d(t,r),Re(i,t,null),d(t,l),d(t,s),d(s,c),d(c,a),a.checked=e[0],d(c,h),d(c,u),f=!0,g||(_=[F(a,"change",e[11]),F(a,"change",e[7])],g=!0)},p($,y){const O={};!o&&y&2&&(o=!0,O.inputEl=$[1],Tn(()=>o=!1)),i.$set(O),y&1&&(a.checked=$[0])},i($){f||(oe(i.$$.fragment,$),f=!0)},o($){ge(i.$$.fragment,$),f=!1},d($){$&&j(t),Ne(i),g=!1,z(_)}}}function da(e){let t,n,r,i=e[3].name+"",o,l,s,c,a=e[3].year+"",h,u,f,g,_,m,A,$,y,O,P,E;return g=new ua({props:{ratings:e[3].ratings}}),{c(){t=b("div"),n=b("div"),r=b("h1"),o=k(i),l=S(),s=b("span"),c=k("("),h=k(a),u=k(")"),f=S(),ot(g.$$.fragment),_=S(),m=b("nav"),A=b("button"),A.textContent="\u{1F4CB} Copy link",$=S(),y=b("button"),y.textContent="\u2B05\uFE0F Go back",p(s,"class","text-neutral-400"),p(r,"class","text-3xl font-semibold"),p(n,"class","flex items-center justify-center mb-4"),p(A,"class","bg-transparent text-yellow-400"),p(y,"class","bg-transparent text-yellow-400"),p(m,"class","flex flex-col mt-4 space-y-3"),p(t,"class","text-center py-4 m-auto")},m(w,x){L(w,t,x),d(t,n),d(n,r),d(r,o),d(r,l),d(r,s),d(s,c),d(s,h),d(s,u),d(t,f),Re(g,t,null),d(t,_),d(t,m),d(m,A),d(m,$),d(m,y),O=!0,P||(E=[F(A,"click",e[9]),F(y,"click",e[8])],P=!0)},p(w,x){(!O||x&8)&&i!==(i=w[3].name+"")&&be(o,i),(!O||x&8)&&a!==(a=w[3].year+"")&&be(h,a);const D={};x&8&&(D.ratings=w[3].ratings),g.$set(D)},i(w){O||(oe(g.$$.fragment,w),O=!0)},o(w){ge(g.$$.fragment,w),O=!1},d(w){w&&j(t),Ne(g),P=!1,z(E)}}}function pa(e){let t;return{c(){t=b("p"),t.textContent="Loading...",p(t,"class","m-auto")},m(n,r){L(n,t,r)},p:I,i:I,o:I,d(n){n&&j(t)}}}function ha(e){let t,n,r,i,o,l,s,c;t=new ia({});const a=[pa,da,fa],h=[];function u(f,g){return f[2]?0:f[3]?1:2}return i=u(e),o=h[i]=a[i](e),{c(){ot(t.$$.fragment),n=S(),r=b("main"),o.c(),p(r,"class","min-h-[90vh] flex m-auto")},m(f,g){Re(t,f,g),L(f,n,g),L(f,r,g),h[i].m(r,null),l=!0,s||(c=F(window,"popstate",e[4]),s=!0)},p(f,[g]){let _=i;i=u(f),i===_?h[i].p(f,g):(On(),ge(h[_],1,1,()=>{h[_]=null}),Cn(),o=h[i],o?o.p(f,g):(o=h[i]=a[i](f),o.c()),oe(o,1),o.m(r,null))},i(f){l||(oe(t.$$.fragment,f),oe(o),l=!0)},o(f){ge(t.$$.fragment,f),ge(o),l=!1},d(f){Ne(t,f),f&&j(n),f&&j(r),h[i].d(),s=!1,c()}}}function ga(e,t,n){let r;Yt(e,ie,y=>n(12,r=y));let i=rt(r,Ye),o=null,l=!1,s=null;wn(async()=>{const O=new URLSearchParams(location.search).get("id");O?await _(O,!0):o==null||o.focus()});const c=y=>y.replace(/[\W]+/g,"-").toLowerCase(),a=()=>{if(location.search){const O=new URLSearchParams(location.search).get("id");O&&_(O,!0);return}n(3,s=null),dt().then(()=>o==null?void 0:o.focus())},h=async y=>(await Pn(y)).map(P=>{var E;return{id:P.id,label:P.title,secondaryLabel:(E=P.year)==null?void 0:E.toString()}}),u=async y=>await _(y.detail),f=({currentTarget:y})=>{y.checked?ut(ie,r=Ye,r):ut(ie,r=Le,r)},g=async()=>{n(3,s=null),history.pushState({},"","/imdb-table/"),await dt(),o==null||o.focus()},_=async(y,O=!1)=>{try{n(2,l=!0);const P=await xn(y);n(2,l=!1),n(3,s=P);const E=new URLSearchParams(location.search);E.set("id",y),history[O?"replaceState":"pushState"]({},"",`${location.href.split("?")[0]}?${E}#/${c(s.name)}`)}catch{n(2,l=!1)}},m=()=>{navigator.clipboard.writeText(location.href)};function A(y){o=y,n(1,o)}function $(){i=this.checked,n(0,i)}return[i,o,l,s,a,h,u,f,g,m,A,$]}class _a extends De{constructor(t){super(),ke(this,t,ga,ha,$e,{})}}new _a({target:document.getElementById("app")})});export default ba();