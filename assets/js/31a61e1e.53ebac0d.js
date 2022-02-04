"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6481],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4947:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(4996),s=["components"],i={},u="FAQ - Developers",c={unversionedId:"faq/faq-developer",id:"faq/faq-developer",title:"FAQ - Developers",description:"This section covers frequently asked questions and our recommendations from the developer's perspective.",source:"@site/source/docs/casper/faq/faq-developer.md",sourceDirName:"faq",slug:"/faq/faq-developer",permalink:"/docs/faq/faq-developer",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/faq/faq-developer.md",tags:[],version:"current",frontMatter:{},sidebar:"faq",previous:{title:"FAQ - Enterprise",permalink:"/docs/faq/faq-enterpise"},next:{title:"FAQ - Validators",permalink:"/docs/faq/faq-validator"}},p=[{value:"Getting Started",id:"getting-started",children:[],level:3},{value:"Deploys/Transactions",id:"deploys-transactions",children:[],level:3},{value:"Operating with Keys",id:"operating-with-keys",children:[],level:3},{value:"Information on nctl",id:"information-on-nctl",children:[],level:3},{value:"Errors",id:"errors",children:[],level:3},{value:"Other Topics",id:"other-topics",children:[],level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq---developers"},"FAQ - Developers"),(0,o.kt)("p",null,"This section covers frequently asked questions and our recommendations from the developer's perspective."),(0,o.kt)("h3",{id:"getting-started"},"Getting Started"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How do I fix a linking error with 'cargo build' on Windows?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question")," : How can I fix this linking error while running ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo build")," on Windows?"),(0,o.kt)("img",{src:(0,l.Z)("/image/faq/q-cargo-build.png"),alt:"cargo-build",width:"800"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer")," : You have to install the VC+ build tools so that ",(0,o.kt)("inlineCode",{parentName:"p"},"rustc")," can auto-detect the helper files that are part of the building process. Or you can build using Visual Studio 2013 or 2015. There are two existing Rust toolchain families provided for Windows: ",(0,o.kt)("inlineCode",{parentName:"p"},"msvc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gnu"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"msvc"))," is the default, and as you realized, it depends on a recent Visual C++ installation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"gnu")),", on the other hand, depends on GNU/MinGW-w64. It can be installed and made the default toolchain using this command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ rustup default stable-x86_64-pc-windows-gnu\n"))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Why do I get an invalid toolchain name?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question")," : How can I fix an error caused by an invalid toolchain name, such as: ",(0,o.kt)("inlineCode",{parentName:"p"},"error: caused by: invalid toolchain name:..."),"?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer")," : First, check your ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup")," version using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup show\n")),(0,o.kt)("p",null,"Then, find the appropriate remedy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the minimal rustup profile:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup set profile minimal\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the nightly Rust toolchain separately with these two commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --default-toolchain none -y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain install nightly --allow-downgrade --profile minimal --component clippy\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update rustup with one of these commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustup self update\n")),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://reposhub.com/rust/development-tools/rust-lang-rustup.html"},"Rust toolchain installer")," for more details.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What should I do if I am encountering errors installing cargo-casper?")),(0,o.kt)("p",null,"Ensure that you have installed both Rust and CMake before attempting to install cargo-casper.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What are missing generic arguments in 'cargo build'?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question")," : The ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo build --release")," command fails due to missing generic arguments. How can I fix this?"),(0,o.kt)("img",{src:(0,l.Z)("/image/faq/q-cmake-version.png"),alt:"cmake-version",width:"800"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer")," : This is a library compatibility issue that occurs with CMake version 18.04. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"cmake --version")," to check your current version of CMake. If you are on this version, perform an upgrade:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo snap install cmake\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Can blockchain smart contracts interact with the outside world?")),(0,o.kt)("p",null,"No, smart contracts cannot interact with the world outside of the blockchain on which they live. For example, a smart contract cannot act as a REST endpoint or data source. Smart contracts can interact with other contracts in the same environment, or with compatible external libraries. When creating an external library to interact with a Casper smart contract, consider the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WASM is expressed as ",(0,o.kt)("inlineCode",{parentName:"li"},"little-endian")," by default. Check for endianness compatibility."),(0,o.kt)("li",{parentName:"ul"},"As ",(0,o.kt)("inlineCode",{parentName:"li"},"wasm32-unknown-unknown")," is a 32-bit platform, it cannot support 64-bit external code. Your library needs to be compatible with 32-bit code."),(0,o.kt)("li",{parentName:"ul"},"Consider a library that supports ",(0,o.kt)("inlineCode",{parentName:"li"},"no_std"),"."),(0,o.kt)("li",{parentName:"ul"},"Try to avoid native operating system calls. If the library uses the filesystem, sockets, or other native OS functionality, then it may not work with a Casper smart contract."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Why do I receive a 'casper-client: command not found' error?")),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://casper.network/docs/workflow/setup#the-casper-command-line-client"},"Casper Command-line Client")," document for instructions on interacting with the Casper Network.")),(0,o.kt)("h3",{id:"deploys-transactions"},"Deploys/Transactions"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What determines the cost of a deploy?")),(0,o.kt)("p",null,"Native system transfers have a fixed gas cost. Calling system contracts by their hashes also has a fixed cost."),(0,o.kt)("p",null,"If two calls with different arguments but for the same hash show different gas costs, it is a result of executed WASM code. Different arguments may lead to different code paths and executed opcodes. You cannot predict the number of executed opcodes or host functions."),(0,o.kt)("p",null,"If the calls use the same arguments, yet the cost is increasing, you might consider reviewing your global state usage. There is a chance that you are reading a collection from the global state, updating it and writing back with a larger size.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Why does my deploy get an 'Out of Gas' error?")),(0,o.kt)("p",null,"If you receive this error, try specifying a higher amount of CSPR for the deployment.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How do I know that a deploy was finalized?")),"If a deploy was executed, then it has been finalized. If the deploy status comes back as null, that means the deploy has not been executed yet. Once the deploy executes, it is finalized, and no other confirmation is needed. Exchanges that are not running a read-only node must also keep track of ",(0,o.kt)("a",{href:"./faq-developer#finality-signatures"},"finality signatures")," to prevent any attacks from high-risk nodes."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Is there an API available to query network transactions?")),(0,o.kt)("p",null,"The client API of Casper Node is available at ",(0,o.kt)("a",{parentName:"p",href:"http://casper-rpc-docs.s3-website-us-east-1.amazonaws.com/"},"Casper RPC API"),". You can find specific node-addresses at cspr.live for the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/peers"},"testnet")," or ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"mainnet"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How can I query a transaction for an account?")),(0,o.kt)("p",null,"On-chain accounts are associated with an account address. Transaction data includes account address as a sub-field.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"When are finality signatures needed?")),"Finality signatures are confirmations from validators that they have executed the transaction. Exchanges should be asserting finality by collecting the weight of two-thirds of transaction signatures. If an exchange runs a read-only node, it can collect these finality signatures from its node. Otherwise, the exchange must assert finality by collecting finality signatures and have proper monitoring infrastructure to prevent a Byzantine attack.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Suppose an exchange connects to someone else's node RPC to send transactions to the network. In this case, the node is considered high risk, and the exchange must assert finality by checking to see how many validators have run the transactions in the network."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How is a deploy_hash different than a transfer_hash?")),"Essentially, there is no difference between a  ",(0,o.kt)("i",null,"deploy_hash")," and a ",(0,o.kt)("i",null,"transfer_hash")," since they are both deploy transactions. However, the platform is labeling the subset of deploys which are transfers, to filter transfers from other types of deploys. In other words, a ",(0,o.kt)("i",null,"transfer_hash")," is a native transfer, while a ",(0,o.kt)("i",null,"deploy_hash")," is another kind of deploy."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Can you provide an example of a deploy?")),"You can find a deploy reference in ",(0,o.kt)("a",{href:"https://github.com/casper-ecosystem/casper-js-sdk/blob/next/test/lib/DeployUtil.test.ts#L5"},"GitHub"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Does the node API have a 'getTransactions' function?")),(0,o.kt)("p",null,"The node API JSON-RPC is found ",(0,o.kt)("a",{href:"http://casper-rpc-docs.s3-website-us-east-1.amazonaws.com/ "},"here"),". Also, the node emits the following events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BlockAdded"),(0,o.kt)("li",{parentName:"ul"},"DeployProcessed"),(0,o.kt)("li",{parentName:"ul"},"ConsensusFinalitySignature")),(0,o.kt)("p",null,"With these APIs, you can pull information from the node, such as transaction sets.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null," When is the balance updated after a transaction?")),(0,o.kt)("p",null,"Execution occurs after consensus. As outlined ",(0,o.kt)("a",{parentName:"p",href:"https://casper.network/docs/dapp-dev-guide/deploying-contracts#check-deploy-status"},"here in the dApp Development Guide"),", deployments are queued in the system before being listed in a block for execution."),(0,o.kt)("p",null,"Balance updates should occur after contract execution and block finalization.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How do I handle a transaction composed of multiple transfers?")),(0,o.kt)("p",null,"Applying a unique ID to each transfer can mitigate issues with multiple transfers. Once deployed to a block, the network finalizes the transaction composed of multiple transfers.")),(0,o.kt)("h3",{id:"operating-with-keys"},"Operating with Keys"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How should we work with the PEM keys?")),"The ",(0,o.kt)("a",{href:"https://casper-ecosystem.github.io/casper-js-sdk/next/modules/_lib_keys_.html"},"Keys API")," provides methods for ",(0,o.kt)("i",null,"Ed25519")," and ",(0,o.kt)("i",null,"Secp256K1")," keys. Also, review the tests in ",(0,o.kt)("a",{href:"../dapp-dev-guide/keys"},"GitHub")," and the documentation. For more information on creating and working with keys, see ",(0,o.kt)("a",{href:"../dapp-dev-guide/keys"},"Accounts and Cryptographic Keys"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What is the difference between key management and deployment?")),(0,o.kt)("p",null,"There are two types of action that an account can perform: deployment and key management. Deployment is simply executing some code on the blockchain, while key management involves changing the associated keys. Key management cannot occur independently, but must come via a deploy. Therefore, a key management action implies that a deployment action also occurs."),(0,o.kt)("p",null,"You may also reference the following two documents for additional information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://casper.network/docs/design/accounts"},"Accounts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://casper.network/docs/multi-sig"},"Multi-Signature Tutorial")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How is 'Keys-manager.js' used in the Multi-Signature Tutorial?")),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://casper.network/docs/multi-sig"},"Multi-Signature Tutorial"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"scenario-*.js")," accesses functions from ",(0,o.kt)("inlineCode",{parentName:"p"},"key-manager.js")," through ",(0,o.kt)("inlineCode",{parentName:"p"},"const keyManager = require('./key-manager');"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Is there a way to query all the '(key, value)' pairs in a 'casper dictionary'?")),(0,o.kt)("p",null,"No, you need to know the keys beforehand. If you want to iterate over the dictionary list, you can list keys numerically and keep the length in another value.")),(0,o.kt)("h3",{id:"information-on-nctl"},"Information on nctl"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Some nctl commands are working correctly, while others are causing errors.")),(0,o.kt)("p",null,"This issue may be caused by an incomplete or unsuccessful install of nctl. Once it is installed, use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"nctl-status")," to see if it is running normally. It should show five running noes and five stopped."),(0,o.kt)("p",null,"If it does not, the nctl install did not install correctly. Usually, the failure reasons are OS and hardware specifications. If you are running Linus on Windows, we suggest switching to VirtualBox.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How do I fix an openssl error when compiling nctl?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question")," : When I attempted to run 'nctl-compile' on MacOS, I received the following error: 'error: failed to run custom build command for openssl-sys v0.9.67'. How can I fix this?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer")," : If you issue the command ",(0,o.kt)("inlineCode",{parentName:"p"},"brew info openssl")," it will return info that appears similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'...\nFor pkg-config to find openssl@3 you may need to set:\n    export PKG_CONFIG_PATH="usr/local/opt/openssl@3/lib/pkgconfig"\n...\n')),(0,o.kt)("p",null,"The next step is to issue the above command. In this example, you would use ",(0,o.kt)("inlineCode",{parentName:"p"},'PKG_CONFIG_PATH="/usr/local/opt/openssl@3/lib/pkgconfig"'),"."),(0,o.kt)("p",null,"After this, ",(0,o.kt)("inlineCode",{parentName:"p"},"nctl-compile")," should work correctly.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How do I fix connection errors with nctl?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question")," : When running nctl, how do I resolve a ",(0,o.kt)("inlineCode",{parentName:"p"},"Failed to get RPC response: error sending request for url (http://127.0.0.1:22102/rpc): connection error: Connection reset by peer (os error 54)")," error?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer")," : You should specify RPC ports as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n[rpc_server]\naddress = "0.0.0.0:11102"\n\n')),(0,o.kt)("p",null,"You can find more command info ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/master/utils/nctl/docs/commands-view-node.md#nctl-viewing-node-information"},"here"),".")),(0,o.kt)("h3",{id:"errors"},"Errors"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What factors cause the 'APIError::InvalidPurse' error?")),(0,o.kt)("p",null,"The three main factors that cause an InvalidPurse error are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The purse in question does not exist."),(0,o.kt)("li",{parentName:"ol"},"The purse is not of type U512."),(0,o.kt)("li",{parentName:"ol"},"The sending and receiving purses are identical."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What causes an 'ApiError::MissingArgument [2]' error?")),(0,o.kt)("p",null,"This error occurs when there is an incorrect session argument. The session argument must be U512.")),(0,o.kt)("h3",{id:"other-topics"},"Other Topics"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Why do I get an 'Encountered operation forbidden by gas rules' error?")),(0,o.kt)("p",null,"Casper node does not natively allow floating point opcodes.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How do I add ZK proofs within Casper?")),(0,o.kt)("p",null,"ZK proof inclusion would require building the proof verification inside the smart contract. You would need to add either of the following to your contract:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/bn"},"GitHub - paritytech/bn: Pairing cryptography library in Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zkcrypto/pairing"},"GitHub - zkcrypto/pairing: Pairing-friendly elliptic curve library."))),(0,o.kt)("p",null,"Verifications would then need to use the associated library.")))}m.isMDXComponent=!0}}]);