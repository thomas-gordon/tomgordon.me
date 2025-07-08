import { jsx, jsxs } from 'react/jsx-runtime';
import { createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, RouterProvider, createRouter as createRouter$1 } from '@tanstack/react-router';
import * as react from 'react';
import { useEffect } from 'react';
import * as tslib from 'tslib';
import * as shallowequal from 'shallowequal';
import * as stylis from 'stylis';
import * as stream from 'stream';
import FontFaceObserver from 'fontfaceobserver';
import { createMemoryHistory } from '@tanstack/history';
import { json, tsrSerializer, mergeHeaders } from '@tanstack/router-core/ssr/client';
import { joinPaths, trimPath, processRouteTree, isRedirect, isResolvedRedirect, isNotFound, rootRouteId, getMatchedRoutes } from '@tanstack/router-core';
import { attachRouterServerSsrUtils, dehydrateRouter } from '@tanstack/router-core/ssr/server';
import { AsyncLocalStorage } from 'node:async_hooks';
import invariant from 'tiny-invariant';
import { defineHandlerCallback, renderRouterToStream } from '@tanstack/react-router/ssr/server';

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var styledComponents_cjs = {};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(tslib);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(react);

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(shallowequal);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(stylis);

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(stream);

var styled;
var css;
var createGlobalStyle;
Object.defineProperty(styledComponents_cjs,"__esModule",{value:true});var e=require$$0,n=require$$2,r=require$$3,o=require$$4,s=unitlessKeys;function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:true,get:function(){return e[n]}});}}),t.default=e,Object.freeze(t)}var u=/*#__PURE__*/i(n),l=/*#__PURE__*/i(r),p=/*#__PURE__*/a(o),d=/*#__PURE__*/i(s),h="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",f="active",m="data-styled-version",y="6.1.19",v="/*!sc*/\n",g="undefined"!="undefined",S=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="production"),w={},N=Object.freeze([]),P=Object.freeze({});function C(e,t,n){return void 0===n&&(n=P),e.theme!==n.theme&&e.theme||t||n.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),I=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O=/(^-|-$)/g;function x(e){return e.replace(I,"-").replace(O,"")}var T=/(a)(d)/gi,D=52,R=function(e){return String.fromCharCode(e+(e>25?39:97))};function j(e){var t,n="";for(t=Math.abs(e);t>D;t=t/D|0)n=R(t%D)+n;return (R(t%D)+n).replace(T,"$1-$2")}var k,V=5381,M=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},z=function(e){return M(V,e)};function F(e){return j(z(e)>>>0)}function $(e){return e.displayName||e.name||"Component"}function B(e){return "string"==typeof e&&("production"==="production")}var q="function"==typeof Symbol&&Symbol.for,G=q?Symbol.for("react.memo"):60115,L=q?Symbol.for("react.forward_ref"):60112,Y={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true},W={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true},H={$$typeof:true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true},U=((k={})[L]={$$typeof:true,render:true,defaultProps:true,displayName:true,propTypes:true},k[G]=H,k);function J(e){return ("type"in(t=e)&&t.type.$$typeof)===G?H:"$$typeof"in e?U[e.$$typeof]:Y;var t;}var X=Object.defineProperty,Z=Object.getOwnPropertyNames,K=Object.getOwnPropertySymbols,Q=Object.getOwnPropertyDescriptor,ee=Object.getPrototypeOf,te=Object.prototype;function ne(e,t,n){if("string"!=typeof t){if(te){var r=ee(t);r&&r!==te&&ne(e,r,n);}var o=Z(t);K&&(o=o.concat(K(t)));for(var s=J(e),i=J(t),a=0;a<o.length;++a){var c=o[a];if(!(c in W||n&&n[c]||i&&c in i||s&&c in s)){var u=Q(t,c);try{X(e,c,u);}catch(e){}}}}return e}function re(e){return "function"==typeof e}function oe(e){return "object"==typeof e&&"styledComponentId"in e}function se(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ie(e,t){if(0===e.length)return "";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ae(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ce(e,t,n){if(void 0===n&&(n=false),!n&&!ae(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ce(e[r],t[r]);else if(ae(t))for(var r in t)e[r]=ce(e[r],t[r]);return e}function ue(e,t){Object.defineProperty(e,"toString",{value:t});}function de(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var he=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw de(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++);},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(v);return t},e}(),me=new Map,ye=new Map,ve=1,ge=function(e){if(me.has(e))return me.get(e);for(;ye.has(ve);)ve++;var t=ve++;return me.set(e,t),ye.set(t,e),t};function Pe(){return "undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var Ce=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(h,"]")));return t[t.length-1]}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(h,f),r.setAttribute(m,y);var i=Pe();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},Ae=function(){function e(e){this.element=Ce(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw de(17)}(this.element),this.length=0;}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return  false}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ie=function(){function e(e){this.element=Ce(e),this.nodes=this.element.childNodes,this.length=0;}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,true}return  false},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Oe=function(){function e(e){this.rules=[],this.length=0;}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,true)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Te={isServer:!g,useCSSOMInjection:!S},De=function(){function t(t,n,r){ void 0===t&&(t=P),void 0===n&&(n={});var o=this;this.options=e.__assign(e.__assign({},Te),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&g,ue(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return ye.get(e)}(n);if(void 0===o)return "continue";var s=e.names.get(o),i=t.getGroup(n);if(void 0===s||!s.size||0===i.length)return "continue";var a="".concat(h,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","));}),r+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(v);},s=0;s<n;s++)o(s);return r}(o)});}return t.registerId=function(e){return ge(e)},t.prototype.rehydrate=function(){!this.server&&g;},t.prototype.reconstructWithOptions=function(n,r){return void 0===r&&(r=true),new t(e.__assign(e.__assign({},this.options),n),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Oe(n):t?new Ae(n):new Ie(n)}(this.options),new he(e)));var e;},t.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.prototype.registerName=function(e,t){if(ge(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ge(e),n);},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.prototype.clearRules=function(e){this.getTag().clearGroup(ge(e)),this.clearNames(e);},t.prototype.clearTag=function(){this.tag=void 0;},t}(),Re=/&/g,je=/^\s*\/\/.*$/gm;function ke(e,t){return e.map(function(e){return "rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return "".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=ke(e.children,t)),e})}function Ve(e){var t,n,r,o=void 0===e?P:e,s=o.options,i=void 0===s?P:s,a=o.plugins,c=void 0===a?N:a,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},l=c.slice();l.push(function(e){e.type===p.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Re,n).replace(r,u));}),i.prefix&&l.push(p.prefixer),l.push(p.stringify);var d=function(e,o,s,a){ void 0===o&&(o=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(je,""),u=p.compile(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);i.namespace&&(u=ke(u,i.namespace));var d=[];return p.serialize(u,p.middleware(l.concat(p.rulesheet(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||de(15),M(e,t.name)},V).toString():"",d}var Me=new De,ze=Ve(),Fe=u.default.createContext({shouldForwardProp:void 0,styleSheet:Me,stylis:ze}),$e=Fe.Consumer,Be=u.default.createContext(void 0);function qe(){return n.useContext(Fe)}function Ge(e){var t=n.useState(e.stylisPlugins),r=t[0],o=t[1],s=qe().styleSheet,i=n.useMemo(function(){var t=s;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},false)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:false})),t},[e.disableCSSOMInjection,e.sheet,e.target,s]),a=n.useMemo(function(){return Ve({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);n.useEffect(function(){l.default(r,e.stylisPlugins)||o(e.stylisPlugins);},[e.stylisPlugins]);var c=n.useMemo(function(){return {shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:a}},[e.shouldForwardProp,i,a]);return u.default.createElement(Fe.Provider,{value:c},u.default.createElement(Be.Provider,{value:a},e.children))}var Le=function(){function e(e,t){var n=this;this.inject=function(e,t){ void 0===t&&(t=ze);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ue(this,function(){throw de(12,String(n.name))});}return e.prototype.getName=function(e){return void 0===e&&(e=ze),this.name+e.hash},e}(),Ye=function(e){return e>="A"&&e<="Z"};function We(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ye(r)?t+="-"+r.toLowerCase():t+=r;}return t.startsWith("ms-")?"-"+t:t}var He=function(e){return null==e||false===e||""===e},Ue=function(t){var n,r,o=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!He(i)&&(Array.isArray(i)&&i.isCss||re(i)?o.push("".concat(We(s),":"),i,";"):ae(i)?o.push.apply(o,e.__spreadArray(e.__spreadArray(["".concat(s," {")],Ue(i),false),["}"],false)):o.push("".concat(We(s),": ").concat((n=s,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in d.default||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")));}return o};function Je(e,t,n,r){if(He(e))return [];if(oe(e))return [".".concat(e.styledComponentId)];if(re(e)){if(!re(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return [e];var o=e(t);return Je(o,t,n,r)}var s;return e instanceof Le?n?(e.inject(n,r),[e.getName(r)]):[e]:ae(e)?Ue(e):Array.isArray(e)?Array.prototype.concat.apply(N,e.map(function(e){return Je(e,t,n,r)})):[e.toString()]}function Xe(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!oe(n))return  false}return  true}var Ze=z(y),Ke=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Xe(e),this.componentId=t,this.baseHash=M(Ze,t),this.baseStyle=n,De.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=se(r,this.staticRulesId);else {var o=ie(Je(this.rules,e,t,n)),s=j(M(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i);}r=se(r,s),this.staticRulesId=s;}else {for(var a=M(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var p=ie(Je(l,e,t,n));a=M(a,p+u),c+=p;}}if(c){var d=j(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),r=se(r,d);}}return r},e}(),Qe=u.default.createContext(void 0),et=Qe.Consumer,tt={};function rt(t,r,o){var s=oe(t),i=t,a=!B(t),l=r.attrs,p=void 0===l?N:l,d=r.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":x(e);tt[n]=(tt[n]||0)+1;var r="".concat(n,"-").concat(F(y+n+tt[n]));return t?"".concat(t,"-").concat(r):r}(r.displayName,r.parentComponentId):d,f=r.displayName,m=void 0===f?function(e){return B(e)?"styled.".concat(e):"Styled(".concat($(e),")")}(t):f,v=r.displayName&&r.componentId?"".concat(x(r.displayName),"-").concat(r.componentId):r.componentId||h,g=s&&i.attrs?i.attrs.concat(p).filter(Boolean):p,S=r.shouldForwardProp;if(s&&i.shouldForwardProp){var w=i.shouldForwardProp;if(r.shouldForwardProp){var _=r.shouldForwardProp;S=function(e,t){return w(e,t)&&_(e,t)};}else S=w;}var b=new Ke(o,v,s?i.componentStyle:void 0);function I(t,r){return function(t,r,o){var s=t.attrs,i=t.componentStyle,a=t.defaultProps,l=t.foldedComponentIds,p=t.styledComponentId,d=t.target,h=u.default.useContext(Qe),f=qe(),m=t.shouldForwardProp||f.shouldForwardProp;var y=C(r,h,a)||P,v=function(t,n,r){for(var o,s=e.__assign(e.__assign({},n),{className:void 0,theme:r}),i=0;i<t.length;i+=1){var a=re(o=t[i])?o(s):o;for(var c in a)s[c]="className"===c?se(s[c],a[c]):"style"===c?e.__assign(e.__assign({},s[c]),a[c]):a[c];}return n.className&&(s.className=se(s.className,n.className)),s}(s,r,y),g=v.as||d,S={};for(var w in v) void 0===v[w]||"$"===w[0]||"as"===w||"theme"===w&&v.theme===y||("forwardedAs"===w?S.as=v.forwardedAs:m&&!m(w,g)||(S[w]=v[w],m||"development"!=="production"));var _=function(e,t){var r=qe(),o=e.generateAndInjectStyles(t,r.styleSheet,r.stylis);return o}(i,v);var b=se(l,p);return _&&(b+=" "+_),v.className&&(b+=" "+v.className),S[B(g)&&!A.has(g)?"class":"className"]=b,o&&(S.ref=o),n.createElement(g,S)}(O,t,r)}I.displayName=m;var O=u.default.forwardRef(I);return O.attrs=g,O.componentStyle=b,O.displayName=m,O.shouldForwardProp=S,O.foldedComponentIds=s?se(i.foldedComponentIds,i.styledComponentId):"",O.styledComponentId=v,O.target=s?i.target:t,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=s?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)ce(e,o[r],true);return e}({},i.defaultProps,e):e;}}),ue(O,function(){return ".".concat(O.styledComponentId)}),a&&ne(O,t,{attrs:true,componentStyle:true,displayName:true,foldedComponentIds:true,shouldForwardProp:true,styledComponentId:true,target:true}),O}function ot(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var st=function(e){return Object.assign(e,{isCss:true})};function it(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(re(t)||ae(t))return st(Je(ot(N,e.__spreadArray([t],n,true))));var o=t;return 0===n.length&&1===o.length&&"string"==typeof o[0]?Je(o):st(Je(ot(o,n)))}function at(t,n,r){if(void 0===r&&(r=P),!n)throw de(1,n);var o=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return t(n,r,it.apply(void 0,e.__spreadArray([o],s,false)))};return o.attrs=function(o){return at(t,n,e.__assign(e.__assign({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return at(t,n,e.__assign(e.__assign({},r),o))},o}var ct=function(e){return at(rt,e)},ut=ct;A.forEach(function(e){ut[e]=ct(e);});var lt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Xe(e),De.registerId(this.componentId+1);}return e.prototype.createStyles=function(e,t,n,r){var o=r(ie(Je(this.rules,t,n,r)),""),s=this.componentId+e;n.insertRules(s,s,o);},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e);},e.prototype.renderStyles=function(e,t,n,r){e>2&&De.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r);},e}(),pt=/^\s*<\/[a-z]/i,dt=function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return "";var n=Pe(),r=ie([n&&'nonce="'.concat(n,'"'),"".concat(h,'="true"'),"".concat(m,'="').concat(y,'"')].filter(Boolean)," ");return "<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw de(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw de(2);var r=t.instance.toString();if(!r)return [];var o=((n={})[h]="",n[m]=y,n.dangerouslySetInnerHTML={__html:r},n),s=Pe();return s&&(o.nonce=s),[u.default.createElement("style",e.__assign({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=true;},this.instance=new De({isServer:true}),this.sealed=false;}return t.prototype.collectStyles=function(e){if(this.sealed)throw de(2);return u.default.createElement(Ge,{sheet:this.instance},e)},t.prototype.interleaveWithNodeStream=function(e){if(this.sealed)throw de(2);this.seal();var t=require$$6.Transform,n=e,r=this.instance,o=this._emitSheetCSS,s=new t({transform:function(e,t,n){var s=e.toString(),i=o();if(r.clearTag(),pt.test(s)){var a=s.indexOf(">")+1,c=s.slice(0,a),u=s.slice(a);this.push(c+i+u);}else this.push(i+s);n();}});return n.on("error",function(e){s.emit("error",e);}),n.pipe(s)},t}(),ht={StyleSheet:De,mainSheet:Me};styledComponents_cjs.ServerStyleSheet=dt,styledComponents_cjs.StyleSheetConsumer=$e,styledComponents_cjs.StyleSheetContext=Fe,styledComponents_cjs.StyleSheetManager=Ge,styledComponents_cjs.ThemeConsumer=et,styledComponents_cjs.ThemeContext=Qe,styledComponents_cjs.ThemeProvider=function(t){var r=u.default.useContext(Qe),o=n.useMemo(function(){return function(t,n){if(!t)throw de(14);if(re(t)){var r=t(n);return r}if(Array.isArray(t)||"object"!=typeof t)throw de(8);return n?e.__assign(e.__assign({},n),t):t}(t.theme,r)},[t.theme,r]);return t.children?u.default.createElement(Qe.Provider,{value:o},t.children):null},styledComponents_cjs.__PRIVATE__=ht,createGlobalStyle = styledComponents_cjs.createGlobalStyle=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=it.apply(void 0,e.__spreadArray([t],n,false)),s="sc-global-".concat(F(JSON.stringify(o))),i=new lt(o,s);var a=function(t){var n=qe(),r=u.default.useContext(Qe),c=u.default.useRef(n.styleSheet.allocateGSInstance(s)).current;return n.styleSheet.server&&function(t,n,r,o,s){if(i.isStatic)i.renderStyles(t,w,r,s);else {var c=e.__assign(e.__assign({},n),{theme:C(n,o,a.defaultProps)});i.renderStyles(t,c,r,s);}}(c,t,n.styleSheet,r,n.stylis),null};return u.default.memo(a)},css = styledComponents_cjs.css=it,styledComponents_cjs.default=ut,styledComponents_cjs.isStyledComponent=oe,styledComponents_cjs.keyframes=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=ie(it.apply(void 0,e.__spreadArray([t],n,false))),s=F(o);return new Le(s,o)},styled = styledComponents_cjs.styled=ut,styledComponents_cjs.useTheme=function(){var e=n.useContext(Qe);if(!e)throw de(18);return e},styledComponents_cjs.version=y,styledComponents_cjs.withTheme=function(t){var n=u.default.forwardRef(function(n,r){var o=C(n,u.default.useContext(Qe),t.defaultProps);return u.default.createElement(t,e.__assign({},n,{theme:o,ref:r}))});return n.displayName="WithTheme(".concat($(t),")"),ne(n,t)};

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function toWebRequest(event) {
  return event.web?.request || new Request(getRequestURL(event), {
    // @ts-ignore Undici option
    duplex: "half",
    method: event.method,
    headers: event.headers,
    body: getRequestWebStream(event)
  });
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function getResponseStatus$1(event) {
  return event.node.res.statusCode;
}
function getResponseHeaders$1(event) {
  return event.node.res.getHeaders();
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    // Hooks
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler$1(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}

function StartServer(props) {
  return /* @__PURE__ */ jsx(RouterProvider, { router: props.router });
}
const defaultStreamHandler = defineHandlerCallback(
  ({ request, router, responseHeaders }) => renderRouterToStream({
    request,
    router,
    responseHeaders,
    children: /* @__PURE__ */ jsx(StartServer, { router })
  })
);
function flattenMiddlewares(middlewares) {
  const seen = /* @__PURE__ */ new Set();
  const flattened = [];
  const recurse = (middleware) => {
    middleware.forEach((m) => {
      if (m.options.middleware) {
        recurse(m.options.middleware);
      }
      if (!seen.has(m)) {
        seen.add(m);
        flattened.push(m);
      }
    });
  };
  recurse(middlewares);
  return flattened;
}
const eventStorage = new AsyncLocalStorage();
function defineEventHandler(handler) {
  return defineEventHandler$1((event) => {
    return runWithEvent(event, () => handler(event));
  });
}
async function runWithEvent(event, fn) {
  return eventStorage.run(event, fn);
}
function getEvent() {
  const event = eventStorage.getStore();
  if (!event) {
    throw new Error(
      `No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`
    );
  }
  return event;
}
const HTTPEventSymbol = Symbol("$HTTPEvent");
function isEvent(obj) {
  return typeof obj === "object" && (obj instanceof H3Event || (obj == null ? void 0 : obj[HTTPEventSymbol]) instanceof H3Event || (obj == null ? void 0 : obj.__is_event__) === true);
}
function createWrapperFunction(h3Function) {
  return function(...args) {
    const event = args[0];
    if (!isEvent(event)) {
      args.unshift(getEvent());
    } else {
      args[0] = event instanceof H3Event || event.__is_event__ ? event : event[HTTPEventSymbol];
    }
    return h3Function(...args);
  };
}
const getResponseStatus = createWrapperFunction(getResponseStatus$1);
const getResponseHeaders = createWrapperFunction(getResponseHeaders$1);
function requestHandler(handler) {
  return handler;
}
const VIRTUAL_MODULES = {
  routeTree: "tanstack-start-route-tree:v",
  startManifest: "tanstack-start-manifest:v",
  serverFnManifest: "tanstack-start-server-fn-manifest:v"
};
async function loadVirtualModule(id) {
  switch (id) {
    case VIRTUAL_MODULES.routeTree:
      return await Promise.resolve().then(() => routeTree_gen);
    case VIRTUAL_MODULES.startManifest:
      return await import('./_tanstack-start-manifest_v-BVFFbvdb.mjs');
    case VIRTUAL_MODULES.serverFnManifest:
      return await import('./_tanstack-start-server-fn-manifest_v-DtgTK7xl.mjs');
    default:
      throw new Error(`Unknown virtual module: ${id}`);
  }
}
async function getStartManifest(opts) {
  const { tsrStartManifest } = await loadVirtualModule(
    VIRTUAL_MODULES.startManifest
  );
  const startManifest = tsrStartManifest();
  const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes[rootRouteId] || {};
  rootRoute.assets = rootRoute.assets || [];
  let script = `import('${startManifest.clientEntry}')`;
  rootRoute.assets.push({
    tag: "script",
    attrs: {
      type: "module",
      suppressHydrationWarning: true,
      async: true
    },
    children: script
  });
  const manifest = {
    ...startManifest,
    routes: Object.fromEntries(
      Object.entries(startManifest.routes).map(([k, v]) => {
        const { preloads, assets } = v;
        return [
          k,
          {
            preloads,
            assets
          }
        ];
      })
    )
  };
  return manifest;
}
function sanitizeBase(base) {
  return base.replace(/^\/|\/$/g, "");
}
const handleServerAction = async ({
  request
}) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const abort = () => controller.abort();
  request.signal.addEventListener("abort", abort);
  const method = request.method;
  const url = new URL(request.url, "http://localhost:3000");
  const regex = new RegExp(`${sanitizeBase("/_serverFn")}/([^/?#]+)`);
  const match = url.pathname.match(regex);
  const serverFnId = match ? match[1] : null;
  const search = Object.fromEntries(url.searchParams.entries());
  const isCreateServerFn = "createServerFn" in search;
  const isRaw = "raw" in search;
  if (typeof serverFnId !== "string") {
    throw new Error("Invalid server action param for serverFnId: " + serverFnId);
  }
  const {
    default: serverFnManifest
  } = await loadVirtualModule(VIRTUAL_MODULES.serverFnManifest);
  const serverFnInfo = serverFnManifest[serverFnId];
  if (!serverFnInfo) {
    console.info("serverFnManifest", serverFnManifest);
    throw new Error("Server function info not found for " + serverFnId);
  }
  const fnModule = await serverFnInfo.importer();
  if (!fnModule) {
    console.info("serverFnInfo", serverFnInfo);
    throw new Error("Server function module not resolved for " + serverFnId);
  }
  const action = fnModule[serverFnInfo.functionName];
  if (!action) {
    console.info("serverFnInfo", serverFnInfo);
    console.info("fnModule", fnModule);
    throw new Error(`Server function module export not resolved for serverFn ID: ${serverFnId}`);
  }
  const formDataContentTypes = ["multipart/form-data", "application/x-www-form-urlencoded"];
  const response = await (async () => {
    try {
      let result = await (async () => {
        if (request.headers.get("Content-Type") && formDataContentTypes.some((type) => {
          var _a;
          return (_a = request.headers.get("Content-Type")) == null ? void 0 : _a.includes(type);
        })) {
          invariant(method.toLowerCase() !== "get", "GET requests with FormData payloads are not supported");
          return await action(await request.formData(), signal);
        }
        if (method.toLowerCase() === "get") {
          let payload2 = search;
          if (isCreateServerFn) {
            payload2 = search.payload;
          }
          payload2 = payload2 ? tsrSerializer.parse(payload2) : payload2;
          return await action(payload2, signal);
        }
        const jsonPayloadAsString = await request.text();
        const payload = tsrSerializer.parse(jsonPayloadAsString);
        if (isCreateServerFn) {
          return await action(payload, signal);
        }
        return await action(...payload, signal);
      })();
      if (result.result instanceof Response) {
        return result.result;
      }
      if (!isCreateServerFn) {
        result = result.result;
        if (result instanceof Response) {
          return result;
        }
      }
      if (isNotFound(result)) {
        return isNotFoundResponse(result);
      }
      return new Response(result !== void 0 ? tsrSerializer.stringify(result) : void 0, {
        status: getResponseStatus(getEvent()),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      if (error instanceof Response) {
        return error;
      }
      if (isNotFound(error)) {
        return isNotFoundResponse(error);
      }
      console.info();
      console.info("Server Fn Error!");
      console.info();
      console.error(error);
      console.info();
      return new Response(tsrSerializer.stringify(error), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  })();
  request.signal.removeEventListener("abort", abort);
  if (isRaw) {
    return response;
  }
  return response;
};
function isNotFoundResponse(error) {
  const {
    headers,
    ...rest
  } = error;
  return new Response(JSON.stringify(rest), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...headers || {}
    }
  });
}
function getStartResponseHeaders(opts) {
  const headers = mergeHeaders(
    getResponseHeaders(),
    {
      "Content-Type": "text/html; charset=UTF-8"
    },
    ...opts.router.state.matches.map((match) => {
      return match.headers;
    })
  );
  return headers;
}
function createStartHandler({
  createRouter: createRouter2
}) {
  let routeTreeModule = null;
  let startRoutesManifest = null;
  let processedServerRouteTree = void 0;
  return (cb) => {
    const originalFetch = globalThis.fetch;
    const startRequestResolver = async ({ request }) => {
      globalThis.fetch = async function(input, init) {
        function resolve(url2, requestOptions) {
          const fetchRequest = new Request(url2, requestOptions);
          return startRequestResolver({ request: fetchRequest });
        }
        function getOrigin() {
          return request.headers.get("Origin") || request.headers.get("Referer") || "http://localhost";
        }
        if (typeof input === "string" && input.startsWith("/")) {
          const url2 = new URL(input, getOrigin());
          return resolve(url2, init);
        } else if (typeof input === "object" && "url" in input && typeof input.url === "string" && input.url.startsWith("/")) {
          const url2 = new URL(input.url, getOrigin());
          return resolve(url2, init);
        }
        return originalFetch(input, init);
      };
      const url = new URL(request.url);
      const href = url.href.replace(url.origin, "");
      const APP_BASE = "/";
      const router = createRouter2();
      const history = createMemoryHistory({
        initialEntries: [href]
      });
      router.update({
        history
      });
      const response = await (async () => {
        try {
          if (false) ;
          const serverFnBase = joinPaths([
            APP_BASE,
            trimPath("/_serverFn"),
            "/"
          ]);
          if (href.startsWith(serverFnBase)) {
            return await handleServerAction({ request });
          }
          if (routeTreeModule === null) {
            try {
              routeTreeModule = await loadVirtualModule(
                VIRTUAL_MODULES.routeTree
              );
              if (routeTreeModule.serverRouteTree) {
                processedServerRouteTree = processRouteTree({
                  routeTree: routeTreeModule.serverRouteTree,
                  initRoute: (route, i) => {
                    route.init({
                      originalIndex: i
                    });
                  }
                });
              }
            } catch (e) {
              console.log(e);
            }
          }
          async function executeRouter() {
            const requestAcceptHeader = request.headers.get("Accept") || "*/*";
            const splitRequestAcceptHeader = requestAcceptHeader.split(",");
            const supportedMimeTypes = ["*/*", "text/html"];
            const isRouterAcceptSupported = supportedMimeTypes.some(
              (mimeType) => splitRequestAcceptHeader.some(
                (acceptedMimeType) => acceptedMimeType.trim().startsWith(mimeType)
              )
            );
            if (!isRouterAcceptSupported) {
              return json(
                {
                  error: "Only HTML requests are supported here"
                },
                {
                  status: 500
                }
              );
            }
            if (startRoutesManifest === null) {
              startRoutesManifest = await getStartManifest({
                basePath: APP_BASE
              });
            }
            attachRouterServerSsrUtils(router, startRoutesManifest);
            await router.load();
            if (router.state.redirect) {
              return router.state.redirect;
            }
            dehydrateRouter(router);
            const responseHeaders = getStartResponseHeaders({ router });
            const response2 = await cb({
              request,
              router,
              responseHeaders
            });
            return response2;
          }
          if (processedServerRouteTree) {
            const [_matchedRoutes, response2] = await handleServerRoutes({
              processedServerRouteTree,
              router,
              request,
              basePath: APP_BASE,
              executeRouter
            });
            if (response2) return response2;
          }
          const routerResponse = await executeRouter();
          return routerResponse;
        } catch (err) {
          if (err instanceof Response) {
            return err;
          }
          throw err;
        }
      })();
      if (isRedirect(response)) {
        if (isResolvedRedirect(response)) {
          if (request.headers.get("x-tsr-redirect") === "manual") {
            return json(
              {
                ...response.options,
                isSerializedRedirect: true
              },
              {
                headers: response.headers
              }
            );
          }
          return response;
        }
        if (response.options.to && typeof response.options.to === "string" && !response.options.to.startsWith("/")) {
          throw new Error(
            `Server side redirects must use absolute paths via the 'href' or 'to' options. Received: ${JSON.stringify(response.options)}`
          );
        }
        if (["params", "search", "hash"].some(
          (d) => typeof response.options[d] === "function"
        )) {
          throw new Error(
            `Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(
              response.options
            ).filter((d) => typeof response.options[d] === "function").map((d) => `"${d}"`).join(", ")}`
          );
        }
        const redirect = router.resolveRedirect(response);
        if (request.headers.get("x-tsr-redirect") === "manual") {
          return json(
            {
              ...response.options,
              isSerializedRedirect: true
            },
            {
              headers: response.headers
            }
          );
        }
        return redirect;
      }
      return response;
    };
    return requestHandler(startRequestResolver);
  };
}
async function handleServerRoutes(opts) {
  var _a, _b;
  const url = new URL(opts.request.url);
  const pathname = url.pathname;
  const serverTreeResult = getMatchedRoutes({
    pathname,
    basepath: opts.basePath,
    caseSensitive: true,
    routesByPath: opts.processedServerRouteTree.routesByPath,
    routesById: opts.processedServerRouteTree.routesById,
    flatRoutes: opts.processedServerRouteTree.flatRoutes
  });
  const routeTreeResult = opts.router.getMatchedRoutes(pathname, void 0);
  let response;
  let matchedRoutes = [];
  matchedRoutes = serverTreeResult.matchedRoutes;
  if (routeTreeResult.foundRoute) {
    if (serverTreeResult.matchedRoutes.length < routeTreeResult.matchedRoutes.length) {
      const closestCommon = [...routeTreeResult.matchedRoutes].reverse().find((r) => {
        return opts.processedServerRouteTree.routesById[r.id] !== void 0;
      });
      if (closestCommon) {
        let routeId = closestCommon.id;
        matchedRoutes = [];
        do {
          const route = opts.processedServerRouteTree.routesById[routeId];
          if (!route) {
            break;
          }
          matchedRoutes.push(route);
          routeId = (_a = route.parentRoute) == null ? void 0 : _a.id;
        } while (routeId);
        matchedRoutes.reverse();
      }
    }
  }
  if (matchedRoutes.length) {
    const middlewares = flattenMiddlewares(
      matchedRoutes.flatMap((r) => r.options.middleware).filter(Boolean)
    ).map((d) => d.options.server);
    if ((_b = serverTreeResult.foundRoute) == null ? void 0 : _b.options.methods) {
      const method = Object.keys(
        serverTreeResult.foundRoute.options.methods
      ).find(
        (method2) => method2.toLowerCase() === opts.request.method.toLowerCase()
      );
      if (method) {
        const handler = serverTreeResult.foundRoute.options.methods[method];
        if (handler) {
          if (typeof handler === "function") {
            middlewares.push(handlerToMiddleware(handler));
          } else {
            if (handler._options.middlewares && handler._options.middlewares.length) {
              middlewares.push(
                ...flattenMiddlewares(handler._options.middlewares).map(
                  (d) => d.options.server
                )
              );
            }
            if (handler._options.handler) {
              middlewares.push(handlerToMiddleware(handler._options.handler));
            }
          }
        }
      }
    }
    middlewares.push(handlerToMiddleware(opts.executeRouter));
    const ctx = await executeMiddleware(middlewares, {
      request: opts.request,
      context: {},
      params: serverTreeResult.routeParams,
      pathname
    });
    response = ctx.response;
  }
  return [matchedRoutes, response];
}
function handlerToMiddleware(handler) {
  return async ({ next: _next, ...rest }) => {
    const response = await handler(rest);
    if (response) {
      return { response };
    }
    return _next(rest);
  };
}
function executeMiddleware(middlewares, ctx) {
  let index = -1;
  const next = async (ctx2) => {
    index++;
    const middleware = middlewares[index];
    if (!middleware) return ctx2;
    const result = await middleware({
      ...ctx2,
      // Allow the middleware to call the next middleware in the chain
      next: async (nextCtx) => {
        const nextResult = await next({ ...ctx2, ...nextCtx });
        return Object.assign(ctx2, handleCtxResult(nextResult));
      }
      // Allow the middleware result to extend the return context
    }).catch((err) => {
      if (isSpecialResponse(err)) {
        return {
          response: err
        };
      }
      throw err;
    });
    return Object.assign(ctx2, handleCtxResult(result));
  };
  return handleCtxResult(next(ctx));
}
function handleCtxResult(result) {
  if (isSpecialResponse(result)) {
    return {
      response: result
    };
  }
  return result;
}
function isSpecialResponse(err) {
  return isResponse(err) || isRedirect(err);
}
function isResponse(response) {
  return response instanceof Response;
}
const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font: 18px/150% 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font: 18px/150% 'Crimson Text', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
const Route$1 = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      title: "Tom Gordon - Frontend Developer based in Melbourne, Australia"
    }],
    links: [{
      href: "https://fonts.googleapis.com/css?family=Crimson+Text",
      rel: "stylesheet"
    }, {
      rel: "icon",
      href: "/favicon.ico"
    }]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const RootDocument = ({
  children
}) => {
  useEffect(() => {
    const robotoObserver = new FontFaceObserver("Crimson Text", {});
    robotoObserver.load().then(() => {
      document.body.classList.add("fontLoaded");
    }, () => {
      document.body.classList.remove("fontLoaded");
    });
  }, []);
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(GlobalStyles, {}),
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
};
const $$splitComponentImporter = () => import('./index-DVHbmHG0.mjs');
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const routeTree_gen = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  routeTree
}, Symbol.toStringTag, { value: "Module" }));
function createRouter() {
  const router = createRouter$1({
    routeTree,
    scrollRestoration: true,
    // Disable SSR by default
    //defaultSsr: false,
    defaultNotFoundComponent: () => {
      return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Nope, go away! Please! hehehe" }) });
    }
  });
  return router;
}
const serverEntry$1 = createStartHandler({
  createRouter
})(defaultStreamHandler);
const serverEntry = defineEventHandler(function(event) {
  const request = toWebRequest(event);
  return serverEntry$1({ request });
});

const ssr = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: serverEntry
});

export { ssr as a, css as c, styled as s };
//# sourceMappingURL=ssr.mjs.map
