"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7902],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return b}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=i(n),b=r,d=f["".concat(l,".").concat(b)]||f[b]||u[b]||c;return n?t.createElement(d,s(s({ref:a},p),{},{components:n})):t.createElement(d,s({ref:a},p))}));function b(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=f;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<c;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9103:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return b}});var t=n(7462),r=n(3366),c=(n(7294),n(3905)),s=n(4996),o=["components"],l={},i="Checking Final Balances",p={unversionedId:"workflow/erc-20-sample-guide/final-balance",id:"workflow/erc-20-sample-guide/final-balance",title:"Checking Final Balances",description:"In this section, we check the final balance for all users.",source:"@site/source/docs/casper/workflow/erc-20-sample-guide/final-balance.md",sourceDirName:"workflow/erc-20-sample-guide",slug:"/workflow/erc-20-sample-guide/final-balance",permalink:"/docs/workflow/erc-20-sample-guide/final-balance",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/workflow/erc-20-sample-guide/final-balance.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Approvals",permalink:"/docs/workflow/erc-20-sample-guide/approvals"}},u=[],f={toc:u};function b(e){var a=e.components,n=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"checking-final-balances"},"Checking Final Balances"),(0,c.kt)("p",null,"In this section, we check the final balance for all users."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Final check for user A's balance")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash c1fb674c4b912a4562b146c8993576c773204dd5b1c731faf62b26386e34a373\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/finalBalanceCheckAllUsers.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Final check for user B's balance")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash 14f20fb57b7a600aed100a51a34deb6bfca3df1a03b31986a55d9f704ec48701\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/finalBalanceCheckuserB.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Final check for user C's balance")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-89422a0f291a83496e644cf02d2e3f9d6cbc5f7c877b6ba9f4ddfab8a84c2670\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash 72e523529f31ff13ea3a9463821b6981cbaf27c11d4a0f70e9b81127bb12e0c7\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/finalBalanceCheckuserC.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Final check of user D's balance")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-f32a2abc55316dc85a446a1c548674e03757974aaaf86e8b7d29947ae148eeca\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash 40c87ca9a4a78a37503ec87b5bfd9946267960135b1df0bb114403c18da4057d\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/finalBalanceCheckuserD.png"),width:"800"}))}b.isMDXComponent=!0}}]);