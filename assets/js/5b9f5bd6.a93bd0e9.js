"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3129],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),m=o,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},9370:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},p="Execution Error Codes",s={unversionedId:"dapp-dev-guide/execution-error-codes",id:"dapp-dev-guide/execution-error-codes",title:"Execution Error Codes",description:"This section covers smart contract execution error codes.",source:"@site/source/docs/casper/dapp-dev-guide/execution-error-codes.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/execution-error-codes",permalink:"/docs/dapp-dev-guide/execution-error-codes",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/dapp-dev-guide/execution-error-codes.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Calling Contracts",permalink:"/docs/dapp-dev-guide/calling-contracts"},next:{title:"Accounts and Cryptographic Keys",permalink:"/docs/dapp-dev-guide/keys"}},u=[],d={toc:u};function l(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"execution-error-codes"},"Execution Error Codes"),(0,a.kt)("p",null,"This section covers smart contract execution error codes."),(0,a.kt)("p",null,"As mentioned in ",(0,a.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/writing-contracts/rust#using-error-codes"},"Writing Rust Contracts"),", smart contracts can exit with an error code defined by an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html"},"ApiError"),". Descriptions of each variant are found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variants"},"here")," and include the following sub-types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variant.HandlePayment"},"payment errors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variant.Mint"},"mint errors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variant.User"},"custom user errors"))),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiError")," of one of these sub-types maps to an exit code with an offset defined by the sub-type. For example, an ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiError::User(2)")," maps to an exit code of ",(0,a.kt)("inlineCode",{parentName:"p"},"65538")," (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"65536 + 2"),"). You can find a mapping from contract exit codes to ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiError")," variants ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/enum.ApiError.html#variants"},"here"),"."))}l.isMDXComponent=!0}}]);