import{S as Z,i as x,s as ee,a as R,k as b,q as k,H as Te,h as m,c as M,l as I,m as A,r as j,n as g,b as w,F as h,u as ue,A as q,e as Ee,I as fe,J as _e,v as re,w as ae,x as le,f as ie,t as se,y as oe,K as Ae,L as De,M as Ne}from"../../chunks/index-e12470f9.js";function Be(f){let t,s,r,o,a=f[0].name+"",l;return document.title=t=f[0].name,{c(){s=R(),r=b("div"),o=b("h1"),l=k(a),this.h()},l(c){Te('[data-svelte="svelte-1ixqati"]',document.head).forEach(m),s=M(c),r=I(c,"DIV",{class:!0});var d=A(r);o=I(d,"H1",{class:!0});var u=A(o);l=j(u,a),u.forEach(m),d.forEach(m),this.h()},h(){g(o,"class","name"),g(r,"class","header svelte-nsas8o")},m(c,e){w(c,s,e),w(c,r,e),h(r,o),h(o,l)},p(c,[e]){e&1&&t!==(t=c[0].name)&&(document.title=t),e&1&&a!==(a=c[0].name+"")&&ue(l,a)},i:q,o:q,d(c){c&&m(s),c&&m(r)}}}function ye(f,t,s){let{author:r}=t;return f.$$set=o=>{"author"in o&&s(0,r=o.author)},[r]}class Ce extends Z{constructor(t){super(),x(this,t,ye,Be,ee,{author:0})}}function Ke(f){let t,s,r,o;return{c(){t=b("div"),s=b("div"),r=b("a"),o=k("munsonjed[at]gmail.com"),this.h()},l(a){t=I(a,"DIV",{class:!0});var l=A(t);s=I(l,"DIV",{class:!0});var c=A(s);r=I(c,"A",{href:!0,class:!0});var e=A(r);o=j(e,"munsonjed[at]gmail.com"),e.forEach(m),c.forEach(m),l.forEach(m),this.h()},h(){g(r,"href","mailto:munsonjed@gmail.com"),g(r,"class","svelte-1b0djy3"),g(s,"class","contact svelte-1b0djy3"),g(t,"class","footer svelte-1b0djy3")},m(a,l){w(a,t,l),h(t,s),h(s,r),h(r,o)},p:q,i:q,o:q,d(a){a&&m(t)}}}class He extends Z{constructor(t){super(),x(this,t,null,Ke,ee,{})}}function he(f,t,s){const r=f.slice();return r[3]=t[s],r}function ve(f,t,s){const r=f.slice();return r[6]=t[s],r}function Le(f,t,s){const r=f.slice();return r[9]=t[s],r}function pe(f){let t,s,r=f[9].published?`${f[9].publisherName}]`:`${f[9].publisherName}, forthcoming]`,o;return{c(){t=b("span"),s=k("["),o=k(r)},l(a){t=I(a,"SPAN",{});var l=A(t);s=j(l,"["),o=j(l,r),l.forEach(m)},m(a,l){w(a,t,l),h(t,s),h(t,o)},p(a,l){l&1&&r!==(r=a[9].published?`${a[9].publisherName}]`:`${a[9].publisherName}, forthcoming]`)&&ue(o,r)},d(a){a&&m(t)}}}function ge(f){let t,s,r,o=f[9].title+"",a,l,c,e=f[9].publisherName&&pe(f);return{c(){t=b("li"),s=b("a"),r=b("span"),a=k(o),l=R(),e&&e.c(),this.h()},l(d){t=I(d,"LI",{});var u=A(t);s=I(u,"A",{href:!0,target:!0});var E=A(s);r=I(E,"SPAN",{});var L=A(r);a=j(L,o),L.forEach(m),l=M(E),e&&e.l(E),E.forEach(m),u.forEach(m),this.h()},h(){g(s,"href",c=f[9].url),g(s,"target","_blank")},m(d,u){w(d,t,u),h(t,s),h(s,r),h(r,a),h(s,l),e&&e.m(s,null)},p(d,u){u&1&&o!==(o=d[9].title+"")&&ue(a,o),d[9].publisherName?e?e.p(d,u):(e=pe(d),e.c(),e.m(s,null)):e&&(e.d(1),e=null),u&1&&c!==(c=d[9].url)&&g(s,"href",c)},d(d){d&&m(t),e&&e.d()}}}function me(f){let t,s=f[6]+"",r,o,a,l=f[3].years[f[6]],c=[];for(let e=0;e<l.length;e+=1)c[e]=ge(Le(f,l,e));return{c(){t=b("h4"),r=k(s),o=R(),a=b("ul");for(let e=0;e<c.length;e+=1)c[e].c()},l(e){t=I(e,"H4",{});var d=A(t);r=j(d,s),d.forEach(m),o=M(e),a=I(e,"UL",{});var u=A(a);for(let E=0;E<c.length;E+=1)c[E].l(u);u.forEach(m)},m(e,d){w(e,t,d),h(t,r),w(e,o,d),w(e,a,d);for(let u=0;u<c.length;u+=1)c[u].m(a,null)},p(e,d){if(d&1&&s!==(s=e[6]+"")&&ue(r,s),d&1){l=e[3].years[e[6]];let u;for(u=0;u<l.length;u+=1){const E=Le(e,l,u);c[u]?c[u].p(E,d):(c[u]=ge(E),c[u].c(),c[u].m(a,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=l.length}},d(e){e&&m(t),e&&m(o),e&&m(a),fe(c,e)}}}function Se(f){var d;let t,s,r=f[3].title+"",o,a,l,c=(d=Object.keys(f[3].years))==null?void 0:d.sort(f[2]),e=[];for(let u=0;u<c.length;u+=1)e[u]=me(ve(f,c,u));return{c(){t=b("section"),s=b("h3"),o=k(r),a=R();for(let u=0;u<e.length;u+=1)e[u].c();l=R(),this.h()},l(u){t=I(u,"SECTION",{class:!0});var E=A(t);s=I(E,"H3",{class:!0});var L=A(s);o=j(L,r),L.forEach(m),a=M(E);for(let v=0;v<e.length;v+=1)e[v].l(E);l=M(E),E.forEach(m),this.h()},h(){g(s,"class","section-title"),g(t,"class","svelte-cthkyg")},m(u,E){w(u,t,E),h(t,s),h(s,o),h(t,a);for(let L=0;L<e.length;L+=1)e[L].m(t,null);h(t,l)},p(u,E){var L;if(E&1&&r!==(r=u[3].title+"")&&ue(o,r),E&1){c=(L=Object.keys(u[3].years))==null?void 0:L.sort(u[2]);let v;for(v=0;v<c.length;v+=1){const P=ve(u,c,v);e[v]?e[v].p(P,E):(e[v]=me(P),e[v].c(),e[v].m(t,l))}for(;v<e.length;v+=1)e[v].d(1);e.length=c.length}},d(u){u&&m(t),fe(e,u)}}}function Re(f){let t,s=f[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=Se(he(f,s,o));return{c(){for(let o=0;o<r.length;o+=1)r[o].c();t=Ee()},l(o){for(let a=0;a<r.length;a+=1)r[a].l(o);t=Ee()},m(o,a){for(let l=0;l<r.length;l+=1)r[l].m(o,a);w(o,t,a)},p(o,[a]){if(a&1){s=o[0];let l;for(l=0;l<s.length;l+=1){const c=he(o,s,l);r[l]?r[l].p(c,a):(r[l]=Se(c),r[l].c(),r[l].m(t.parentNode,t))}for(;l<r.length;l+=1)r[l].d(1);r.length=s.length}},i:q,o:q,d(o){fe(r,o),o&&m(t)}}}function Me(f,t,s){let{publications:r}=t,o=[{title:"Collection",type:"collection",publications:[]},{title:"Chapbooks",type:"chapbook",publications:[]},{title:"Poems",type:"poem",publications:[]},{title:"Essays",type:"essay",publications:[]},{title:"Reviews",type:"review",publications:[]},{title:"Interviews",type:"interview",publications:[]}];r==null||r.forEach(l=>{const{title:c,publicationType:e,publishDate:d,publisherName:u,published:E}=l;let L=o.find(v=>v.type===e);L&&L.publications.push(l)}),o=o.map(l=>{var e,d;const c=(d=(e=l==null?void 0:l.publications)==null?void 0:e.reduce)==null?void 0:d.call(e,(u,E)=>{const L=(E==null?void 0:E.publishDate)&&new Date(E==null?void 0:E.publishDate),v=(L==null?void 0:L.getFullYear())||new Date(Date.now()).getFullYear();return u[v]||(u[v]=[]),u[v].push(E),u},{});return{...l,years:c}});const a=(l,c)=>Number(c)-Number(l);return f.$$set=l=>{"publications"in l&&s(1,r=l.publications)},[o,r,a]}class Pe extends Z{constructor(t){super(),x(this,t,Me,Re,ee,{publications:1})}}var Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},be={};(function(f){Object.defineProperty(f,"__esModule",{value:!0});/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */var t=function(){return t=Object.assign||function(n){for(var _,p=1,S=arguments.length;p<S;p++){_=arguments[p];for(var T in _)Object.prototype.hasOwnProperty.call(_,T)&&(n[T]=_[T])}return n},t.apply(this,arguments)};/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var s=/["'&<>]/,r=o;function o(i){var n=""+i,_=s.exec(n);if(!_)return n;var p,S="",T=0,N=0;for(T=_.index;T<n.length;T++){switch(n.charCodeAt(T)){case 34:p="&quot;";break;case 38:p="&amp;";break;case 39:p="&#39;";break;case 60:p="&lt;";break;case 62:p="&gt;";break;default:continue}N!==T&&(S+=n.substring(N,T)),N=T+1,S+=p}return N!==T?S+n.substring(N,T):S}var a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Oe<"u"?Oe:typeof self<"u"?self:{};function l(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function c(i,n){return n={exports:{}},i(n,n.exports),n.exports}var e=c(function(i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.BLOCKS=void 0,function(_){_.DOCUMENT="document",_.PARAGRAPH="paragraph",_.HEADING_1="heading-1",_.HEADING_2="heading-2",_.HEADING_3="heading-3",_.HEADING_4="heading-4",_.HEADING_5="heading-5",_.HEADING_6="heading-6",_.OL_LIST="ordered-list",_.UL_LIST="unordered-list",_.LIST_ITEM="list-item",_.HR="hr",_.QUOTE="blockquote",_.EMBEDDED_ENTRY="embedded-entry-block",_.EMBEDDED_ASSET="embedded-asset-block",_.TABLE="table",_.TABLE_ROW="table-row",_.TABLE_CELL="table-cell",_.TABLE_HEADER_CELL="table-header-cell"}(n.BLOCKS||(n.BLOCKS={}))});l(e),e.BLOCKS;var d=c(function(i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.INLINES=void 0,function(_){_.HYPERLINK="hyperlink",_.ENTRY_HYPERLINK="entry-hyperlink",_.ASSET_HYPERLINK="asset-hyperlink",_.EMBEDDED_ENTRY="embedded-entry-inline"}(n.INLINES||(n.INLINES={}))});l(d),d.INLINES;var u=c(function(i,n){Object.defineProperty(n,"__esModule",{value:!0});var _;(function(p){p.BOLD="bold",p.ITALIC="italic",p.UNDERLINE="underline",p.CODE="code"})(_||(_={})),n.default=_});l(u);var E=c(function(i,n){var _=a&&a.__spreadArray||function(S,T,N){if(N||arguments.length===2)for(var H=0,O=T.length,B;H<O;H++)(B||!(H in T))&&(B||(B=Array.prototype.slice.call(T,0,H)),B[H]=T[H]);return S.concat(B||Array.prototype.slice.call(T))},p;Object.defineProperty(n,"__esModule",{value:!0}),n.V1_NODE_TYPES=n.TEXT_CONTAINERS=n.HEADINGS=n.CONTAINERS=n.VOID_BLOCKS=n.TABLE_BLOCKS=n.LIST_ITEM_BLOCKS=n.TOP_LEVEL_BLOCKS=void 0,n.TOP_LEVEL_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.TABLE],n.LIST_ITEM_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET],n.TABLE_BLOCKS=[e.BLOCKS.TABLE,e.BLOCKS.TABLE_ROW,e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],n.VOID_BLOCKS=[e.BLOCKS.HR,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET],n.CONTAINERS=(p={},p[e.BLOCKS.OL_LIST]=[e.BLOCKS.LIST_ITEM],p[e.BLOCKS.UL_LIST]=[e.BLOCKS.LIST_ITEM],p[e.BLOCKS.LIST_ITEM]=n.LIST_ITEM_BLOCKS,p[e.BLOCKS.QUOTE]=[e.BLOCKS.PARAGRAPH],p[e.BLOCKS.TABLE]=[e.BLOCKS.TABLE_ROW],p[e.BLOCKS.TABLE_ROW]=[e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],p[e.BLOCKS.TABLE_CELL]=[e.BLOCKS.PARAGRAPH],p[e.BLOCKS.TABLE_HEADER_CELL]=[e.BLOCKS.PARAGRAPH],p),n.HEADINGS=[e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6],n.TEXT_CONTAINERS=_([e.BLOCKS.PARAGRAPH],n.HEADINGS,!0),n.V1_NODE_TYPES=[e.BLOCKS.DOCUMENT,e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.LIST_ITEM,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,d.INLINES.HYPERLINK,d.INLINES.ENTRY_HYPERLINK,d.INLINES.ASSET_HYPERLINK,d.INLINES.EMBEDDED_ENTRY,"text"]});l(E),E.V1_NODE_TYPES,E.TEXT_CONTAINERS,E.HEADINGS,E.CONTAINERS,E.VOID_BLOCKS,E.TABLE_BLOCKS,E.LIST_ITEM_BLOCKS,E.TOP_LEVEL_BLOCKS;var L=c(function(i,n){Object.defineProperty(n,"__esModule",{value:!0})});l(L);var v=c(function(i,n){Object.defineProperty(n,"__esModule",{value:!0})});l(v);var P=c(function(i,n){Object.defineProperty(n,"__esModule",{value:!0});var _={nodeType:e.BLOCKS.DOCUMENT,data:{},content:[{nodeType:e.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};n.default=_});l(P);var $=c(function(i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.isText=n.isBlock=n.isInline=void 0;function _(N,H){for(var O=0,B=Object.keys(N);O<B.length;O++){var C=B[O];if(H===N[C])return!0}return!1}function p(N){return _(d.INLINES,N.nodeType)}n.isInline=p;function S(N){return _(e.BLOCKS,N.nodeType)}n.isBlock=S;function T(N){return N.nodeType==="text"}n.isText=T});l($),$.isText,$.isBlock,$.isInline;var K=c(function(i,n){var _=a&&a.__createBinding||(Object.create?function(O,B,C,U){U===void 0&&(U=C),Object.defineProperty(O,U,{enumerable:!0,get:function(){return B[C]}})}:function(O,B,C,U){U===void 0&&(U=C),O[U]=B[C]}),p=a&&a.__setModuleDefault||(Object.create?function(O,B){Object.defineProperty(O,"default",{enumerable:!0,value:B})}:function(O,B){O.default=B}),S=a&&a.__exportStar||function(O,B){for(var C in O)C!=="default"&&!Object.prototype.hasOwnProperty.call(B,C)&&_(B,O,C)},T=a&&a.__importStar||function(O){if(O&&O.__esModule)return O;var B={};if(O!=null)for(var C in O)C!=="default"&&Object.prototype.hasOwnProperty.call(O,C)&&_(B,O,C);return p(B,O),B},N=a&&a.__importDefault||function(O){return O&&O.__esModule?O:{default:O}};Object.defineProperty(n,"__esModule",{value:!0}),n.helpers=n.EMPTY_DOCUMENT=n.MARKS=n.INLINES=n.BLOCKS=void 0,Object.defineProperty(n,"BLOCKS",{enumerable:!0,get:function(){return e.BLOCKS}}),Object.defineProperty(n,"INLINES",{enumerable:!0,get:function(){return d.INLINES}}),Object.defineProperty(n,"MARKS",{enumerable:!0,get:function(){return N(u).default}}),S(E,n),S(L,n),S(v,n),Object.defineProperty(n,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return N(P).default}});var H=T($);n.helpers=H});l(K);var V=K.helpers;K.EMPTY_DOCUMENT;var F=K.MARKS,Y=K.INLINES,y=K.BLOCKS,D,G,te=function(i){return'"'+i.replace(/"/g,"&quot;")+'"'},ne=(D={},D[y.PARAGRAPH]=function(i,n){return"<p>"+n(i.content)+"</p>"},D[y.HEADING_1]=function(i,n){return"<h1>"+n(i.content)+"</h1>"},D[y.HEADING_2]=function(i,n){return"<h2>"+n(i.content)+"</h2>"},D[y.HEADING_3]=function(i,n){return"<h3>"+n(i.content)+"</h3>"},D[y.HEADING_4]=function(i,n){return"<h4>"+n(i.content)+"</h4>"},D[y.HEADING_5]=function(i,n){return"<h5>"+n(i.content)+"</h5>"},D[y.HEADING_6]=function(i,n){return"<h6>"+n(i.content)+"</h6>"},D[y.EMBEDDED_ENTRY]=function(i,n){return"<div>"+n(i.content)+"</div>"},D[y.UL_LIST]=function(i,n){return"<ul>"+n(i.content)+"</ul>"},D[y.OL_LIST]=function(i,n){return"<ol>"+n(i.content)+"</ol>"},D[y.LIST_ITEM]=function(i,n){return"<li>"+n(i.content)+"</li>"},D[y.QUOTE]=function(i,n){return"<blockquote>"+n(i.content)+"</blockquote>"},D[y.HR]=function(){return"<hr/>"},D[y.TABLE]=function(i,n){return"<table>"+n(i.content)+"</table>"},D[y.TABLE_ROW]=function(i,n){return"<tr>"+n(i.content)+"</tr>"},D[y.TABLE_HEADER_CELL]=function(i,n){return"<th>"+n(i.content)+"</th>"},D[y.TABLE_CELL]=function(i,n){return"<td>"+n(i.content)+"</td>"},D[Y.ASSET_HYPERLINK]=function(i){return W(Y.ASSET_HYPERLINK,i)},D[Y.ENTRY_HYPERLINK]=function(i){return W(Y.ENTRY_HYPERLINK,i)},D[Y.EMBEDDED_ENTRY]=function(i){return W(Y.EMBEDDED_ENTRY,i)},D[Y.HYPERLINK]=function(i,n){var _=typeof i.data.uri=="string"?i.data.uri:"";return"<a href="+te(_)+">"+n(i.content)+"</a>"},D),Q=(G={},G[F.BOLD]=function(i){return"<b>"+i+"</b>"},G[F.ITALIC]=function(i){return"<i>"+i+"</i>"},G[F.UNDERLINE]=function(i){return"<u>"+i+"</u>"},G[F.CODE]=function(i){return"<code>"+i+"</code>"},G),W=function(i,n){return"<span>type: "+r(i)+" id: "+r(n.data.target.sys.id)+"</span>"};function z(i,n){return n===void 0&&(n={}),!i||!i.content?"":X(i.content,{renderNode:t(t({},ne),n.renderNode),renderMark:t(t({},Q),n.renderMark)})}function X(i,n){var _=n.renderNode,p=n.renderMark;return i.map(function(S){return J(S,{renderNode:_,renderMark:p})}).join("")}function J(i,n){var _=n.renderNode,p=n.renderMark;if(V.isText(i)){var S=r(i.value);return i.marks.length>0?i.marks.reduce(function(N,H){return p[H.type]?p[H.type](N):N},S):S}else{var T=function(N){return X(N,{renderMark:p,renderNode:_})};return!i.nodeType||!_[i.nodeType]?"":_[i.nodeType](i,T)}}f.documentToHtmlString=z})(be);function $e(f){let t,s,r,o,a,l,c,e,d,u,E,L,v,P,$,K,V,F,Y,y,D,G,te,ne,Q,W,z,X,J,i,n,_;return{c(){t=b("div"),s=b("a"),r=b("img"),a=R(),l=b("div"),c=k("Design by Ander Monson"),e=R(),d=b("a"),u=b("img"),L=R(),v=b("div"),P=k("Design by Kyuwon Kim"),$=R(),K=b("a"),V=b("img"),Y=R(),y=b("div"),D=k(`Design by
		`),G=b("a"),te=k("Ainee Jeong"),ne=R(),Q=b("div"),W=R(),z=b("div"),X=k(`Photo by
		`),J=b("a"),i=k("Keumji Son"),n=R(),_=b("div"),this.h()},l(p){t=I(p,"DIV",{class:!0});var S=A(t);s=I(S,"A",{href:!0});var T=A(s);r=I(T,"IMG",{target:!0,class:!0,src:!0,alt:!0}),T.forEach(m),a=M(S),l=I(S,"DIV",{class:!0});var N=A(l);c=j(N,"Design by Ander Monson"),N.forEach(m),e=M(S),d=I(S,"A",{href:!0,target:!0});var H=A(d);u=I(H,"IMG",{target:!0,class:!0,src:!0,alt:!0}),H.forEach(m),L=M(S),v=I(S,"DIV",{class:!0});var O=A(v);P=j(O,"Design by Kyuwon Kim"),O.forEach(m),$=M(S),K=I(S,"A",{href:!0,target:!0});var B=A(K);V=I(B,"IMG",{target:!0,class:!0,src:!0,alt:!0}),B.forEach(m),Y=M(S),y=I(S,"DIV",{class:!0});var C=A(y);D=j(C,`Design by
		`),G=I(C,"A",{href:!0,target:!0});var U=A(G);te=j(U,"Ainee Jeong"),U.forEach(m),C.forEach(m),ne=M(S),Q=I(S,"DIV",{class:!0,alt:!0}),A(Q).forEach(m),W=M(S),z=I(S,"DIV",{class:!0});var ce=A(z);X=j(ce,`Photo by
		`),J=I(ce,"A",{});var de=A(J);i=j(de,"Keumji Son"),de.forEach(m),ce.forEach(m),n=M(S),_=I(S,"DIV",{class:!0});var Ie=A(_);Ie.forEach(m),S.forEach(m),this.h()},h(){g(r,"target","_blank"),g(r,"class","featured-image minesweeper-cover svelte-eidhzy"),_e(r.src,o="src/img/minesweeper-cover.jpg")||g(r,"src",o),g(r,"alt","minesweeper cover"),g(s,"href","https://newmichiganpress.com/books.html"),g(l,"class","caption svelte-eidhzy"),g(u,"target","_blank"),g(u,"class","featured-image silts-cover svelte-eidhzy"),_e(u.src,E="src/img/silts.png")||g(u,"src",E),g(u,"alt","silts cover"),g(d,"href","https://abovegroundpress.blogspot.com/2022/06/new-from-aboveground-press-silts-by-jed.html"),g(d,"target","_blank"),g(v,"class","caption svelte-eidhzy"),g(V,"target","_blank"),g(V,"class","featured-image silts-cover svelte-eidhzy"),_e(V.src,F="src/img/newsflash-cover.jpg")||g(V,"src",F),g(V,"alt","silts cover"),g(K,"href","https://uglyducklingpresse.org/publications/newsflash-under-fire-over-the-shoulder/"),g(K,"target","_blank"),g(G,"href","https://aineejeong.com/"),g(G,"target","_blank"),g(y,"class","caption svelte-eidhzy"),g(Q,"class","bio-image svelte-eidhzy"),g(Q,"alt","Jed Munson Profile"),g(z,"class","caption svelte-eidhzy"),g(_,"class","bio-text svelte-eidhzy"),g(t,"class","bio svelte-eidhzy")},m(p,S){w(p,t,S),h(t,s),h(s,r),h(t,a),h(t,l),h(l,c),h(t,e),h(t,d),h(d,u),h(t,L),h(t,v),h(v,P),h(t,$),h(t,K),h(K,V),h(t,Y),h(t,y),h(y,D),h(y,G),h(G,te),h(t,ne),h(t,Q),h(t,W),h(t,z),h(z,X),h(z,J),h(J,i),h(t,n),h(t,_),_.innerHTML=f[0]},p:q,i:q,o:q,d(p){p&&m(t)}}}function Ge(f,t,s){let{author:r}=t;const o=be.documentToHtmlString(r.biography.json);return f.$$set=a=>{"author"in a&&s(1,r=a.author)},[o,r]}class ke extends Z{constructor(t){super(),x(this,t,Ge,$e,ee,{author:1})}}function je(f){let t,s,r,o,a,l,c,e,d,u,E;return s=new Ce({props:{author:f[1]}}),a=new Pe({props:{publications:f[0]}}),e=new ke({props:{author:f[1]}}),u=new He({}),{c(){t=b("div"),re(s.$$.fragment),r=R(),o=b("div"),re(a.$$.fragment),l=R(),c=b("div"),re(e.$$.fragment),d=R(),re(u.$$.fragment),this.h()},l(L){t=I(L,"DIV",{class:!0});var v=A(t);ae(s.$$.fragment,v),r=M(v),o=I(v,"DIV",{class:!0});var P=A(o);ae(a.$$.fragment,P),P.forEach(m),l=M(v),c=I(v,"DIV",{class:!0});var $=A(c);ae(e.$$.fragment,$),$.forEach(m),d=M(v),ae(u.$$.fragment,v),v.forEach(m),this.h()},h(){g(o,"class","primary"),g(c,"class","secondary"),g(t,"class","app")},m(L,v){w(L,t,v),le(s,t,null),h(t,r),h(t,o),le(a,o,null),h(t,l),h(t,c),le(e,c,null),h(t,d),le(u,t,null),E=!0},p(L,[v]){const P={};v&2&&(P.author=L[1]),s.$set(P);const $={};v&1&&($.publications=L[0]),a.$set($);const K={};v&2&&(K.author=L[1]),e.$set(K)},i(L){E||(ie(s.$$.fragment,L),ie(a.$$.fragment,L),ie(e.$$.fragment,L),ie(u.$$.fragment,L),E=!0)},o(L){se(s.$$.fragment,L),se(a.$$.fragment,L),se(e.$$.fragment,L),se(u.$$.fragment,L),E=!1},d(L){L&&m(t),oe(s),oe(a),oe(e),oe(u)}}}function we(f,t,s){let{publications:r}=t,{author:o}=t;const a=!0;return f.$$set=l=>{"publications"in l&&s(0,r=l.publications),"author"in l&&s(1,o=l.author)},[r,o,a]}class Ye extends Z{constructor(t){super(),x(this,t,we,je,ee,{publications:0,author:1,prerender:2})}get prerender(){return this.$$.ctx[2]}}function Ve(f){let t,s;const r=[f[0]];let o={};for(let a=0;a<r.length;a+=1)o=Ae(o,r[a]);return t=new Ye({props:o}),{c(){re(t.$$.fragment)},l(a){ae(t.$$.fragment,a)},m(a,l){le(t,a,l),s=!0},p(a,[l]){const c=l&1?De(r,[Ne(a[0])]):{};t.$set(c)},i(a){s||(ie(t.$$.fragment,a),s=!0)},o(a){se(t.$$.fragment,a),s=!1},d(a){oe(t,a)}}}function Ue(f,t,s){let{data:r}=t;const o=!0;return f.$$set=a=>{"data"in a&&s(0,r=a.data)},[r,o]}class ze extends Z{constructor(t){super(),x(this,t,Ue,Ve,ee,{data:0,prerender:1})}get prerender(){return this.$$.ctx[1]}}export{ze as default};
