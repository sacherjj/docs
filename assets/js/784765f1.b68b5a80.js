"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8802],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4628:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},s="The Casper DSL",l={unversionedId:"dapp-dev-guide/contract-dsl/archived/index",id:"dapp-dev-guide/contract-dsl/archived/index",title:"The Casper DSL",description:"The Casper Domain-Specific Language (DSL) for writing smart contracts is a tool to help developers more easily and quickly write human-readable code. It is a series of macros designed around object-oriented programming (OOP) principles. The macros conceal much of the repetitive boilerplate code necessary for proper contract compilation, operating much like templates seen in other object-oriented languages.",source:"@site/source/docs/casper/dapp-dev-guide/contract-dsl/archived/index.md",sourceDirName:"dapp-dev-guide/contract-dsl/archived",slug:"/dapp-dev-guide/contract-dsl/archived/",permalink:"/docs/dapp-dev-guide/contract-dsl/archived/",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/dapp-dev-guide/contract-dsl/archived/index.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Table of Contents",id:"table-of-contents",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-casper-dsl"},"The Casper DSL"),(0,a.kt)("p",null,"The Casper Domain-Specific Language (DSL) for writing smart contracts is a tool to help developers more easily and quickly write human-readable code. It is a series of macros designed around object-oriented programming (OOP) principles. The macros conceal much of the repetitive boilerplate code necessary for proper contract compilation, operating much like templates seen in other object-oriented languages."),(0,a.kt)("p",null,"However, if you are an experienced Rust developer, you may find that you want to forgo using the DSL as you start getting familiar with Casper development. For advanced use cases, the boilerplate code could very well become sub-optimal. Regardless, though, we recommend that you start with the DSL to see the typical workflow while you are getting familiar with the ecosystem."),(0,a.kt)("p",null,"The macros work with ",(0,a.kt)("em",{parentName:"p"},"contract headers")," released as part of version 0.20. Contracts created before release 0.20 will need to be upgraded to use macros."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"))}d.isMDXComponent=!0}}]);