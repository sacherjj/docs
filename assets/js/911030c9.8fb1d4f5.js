"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7427],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7625:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},d="Delegating with the Command-line",s={unversionedId:"workflow/delegate",id:"workflow/delegate",title:"Delegating with the Command-line",description:"This document details a workflow where an account holder on the Casper Network can delegate their tokens to a validator on a Casper Network.",source:"@site/source/docs/casper/workflow/delegate.md",sourceDirName:"workflow",slug:"/workflow/delegate",permalink:"/docs/workflow/delegate",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/workflow/delegate.md",tags:[],version:"current",frontMatter:{},sidebar:"staking",previous:{title:"How to Stake your CSPR",permalink:"/docs/workflow/staking"}},p=[{value:"Building The Delegation WASM",id:"building-the-delegation-wasm",children:[],level:2},{value:"Acquiring a Validator&#39;s Public Key",id:"acquiring-a-validators-public-key",children:[],level:2},{value:"Executing the Delegation Request",id:"executing-the-delegation-request",children:[{value:"Sending the Delegation Deploy",id:"sending-the-delegation-deploy",children:[],level:3},{value:"Confirming the Delegation",id:"confirming-the-delegation",children:[],level:3},{value:"Checking Validator Status",id:"checking-validator-status",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delegating-with-the-command-line"},"Delegating with the Command-line"),(0,o.kt)("p",null,"This document details a workflow where an account holder on the Casper Network can delegate their tokens to a validator on a Casper Network."),(0,o.kt)("p",null,"This workflow assumes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You meet the ",(0,o.kt)("a",{parentName:"li",href:"/docs/workflow/setup"},"prerequisites")),(0,o.kt)("li",{parentName:"ol"},"You are using the Casper command-line client"),(0,o.kt)("li",{parentName:"ol"},"You have the public key of a validator on a Casper Network"),(0,o.kt)("li",{parentName:"ol"},"You have the delegation contract or WASM to execute on the network"),(0,o.kt)("li",{parentName:"ol"},"You have a valid ",(0,o.kt)("inlineCode",{parentName:"li"},"node-address")),(0,o.kt)("li",{parentName:"ol"},"You have previously ",(0,o.kt)("a",{parentName:"li",href:"/docs/dapp-dev-guide/deploying-contracts"},"deployed a smart contract")," to a Casper Network")),(0,o.kt)("h2",{id:"building-the-delegation-wasm"},"Building The Delegation WASM"),(0,o.kt)("p",null,"Obtain the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," by cloning the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"casper-node")," repository and building the contracts."),(0,o.kt)("p",null,"To build contracts, set up Rust, and install all dependencies. Visit ",(0,o.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/getting-started"},"Setting up Rust")," in the Developer Guide for step-by-step instructions."),(0,o.kt)("p",null,"Once you build the contracts, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," to create a deploy that will initiate the delegation process. The WASM can be found in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"target/wasm32-unknown-unknown/release\n")),(0,o.kt)("h2",{id:"acquiring-a-validators-public-key"},"Acquiring a Validator's Public Key"),(0,o.kt)("p",null,"The official Testnet and Mainnet provide a browser-based block explorer to look up the list of validators within their respective networks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/validators"},"Validators on Mainnet")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/validators"},"Validators on Testnet"))),(0,o.kt)("p",null,"You will see a list of validators present on the network and their total stake (including tokens from other delegators)."),(0,o.kt)("p",null,"You can click on any validator listed to see more information about the validator, including the validator's personal stake."),(0,o.kt)("p",null,"Each validator will show the delegation rate (commission); this represents the percentage of ",(0,o.kt)("strong",{parentName:"p"},"your")," reward share that the validator will retain. Thus, a 10% rate implies that the validator will retain 10% of your reward share. As a prospective delegator, selecting a validating node that you can trust and offers a favorable delegation rate is essential. Please do your due diligence before you stake your tokens with a validator."),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey")," of the validator you have selected to delegate your tokens."),(0,o.kt)("p",null,"If you observe your delegation request in the bid structure but do not see the associated validator key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"era_validators")," structure, the validator you selected is not part of the current validator set. In this event, your tokens will not be earning rewards unless you un-delegate, wait through the unbonding period, and re-delegate to another validator."),(0,o.kt)("p",null,"Additionally, any rewards earned are re-delegated by default to the validator from the initial delegation request. Therefore at the time of un-delegation, you may want to un-delegate the initial amount plus any additional rewards earned through the delegation process."),(0,o.kt)("p",null,"The active validator set is constantly rotating; therefore, when delegating to a validator, remember that the validator you selected may have been rotated out of the set."),(0,o.kt)("h2",{id:"executing-the-delegation-request"},"Executing the Delegation Request"),(0,o.kt)("p",null,"We recommend first testing the following steps on our official Testnet before performing these steps in a live environment like the Casper Mainnet."),(0,o.kt)("h3",{id:"sending-the-delegation-deploy"},"Sending the Delegation Deploy"),(0,o.kt)("p",null,"Send a deploy containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," to the network to initiate the delegation process. Here is an example deployment of the delegation request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://<peer-ip-address>:7777/rpc \\\n--chain-name casper \\\n--session-path <path-to-wasm>/delegate.wasm \\\n--payment-amount 5000000000 \\\n--session-arg \"validator:public_key='<hex-encoded-validator-public-key>'\" \\\n--session-arg \"amount:u512='<amount-to-delegate>'\" \\\n--session-arg \"delegator:public_key='<hex-encoded-public-key>'\" \\\n--secret-key <delegator-secret-key>.pem\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," The delegator's public key and the secret key that signs the deploy must be part of the same key pair."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"node-address")," - <HOST:PORT> Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"p",href:"http://localhost:7777"},"http://localhost:7777"),"]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"secret-key")," - Path to secret key file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"chain-name")," - Name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"chain-name")," for testnet is ",(0,o.kt)("strong",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"chain-name")," for mainnet is ",(0,o.kt)("strong",{parentName:"li"},"casper")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"session-path")," - The path to where the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," is located")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"session-arg")," - The arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate")," execution"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"validator")," is the public key of the validator to whom the tokens will be delegated"),(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," is the number of tokens to be delegated"),(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"delegator")," is the public key of the account delegating tokens to a validator")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important response fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"result"."deploy_hash"')," - the address of the executed delegation request.")),(0,o.kt)("p",null,"Save the returned ",(0,o.kt)("em",{parentName:"p"},"deploy_hash")," from the output to query information about the delegation deploy later."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/querying#deploy-status"},"Deploy Status")," section to learn how to confirm that your deploy was executed successfully."),(0,o.kt)("h3",{id:"confirming-the-delegation"},"Confirming the Delegation"),(0,o.kt)("p",null,"A Casper Network maintains an ",(0,o.kt)("em",{parentName:"p"},"auction")," where validators ",(0,o.kt)("em",{parentName:"p"},"bid")," on slots to become part of the active validator set. Delegation rewards are only earned for a validator who has won the auction and is part of the active set. Thus to ensure the delegated tokens can earn rewards, we must first check that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Our delegation is part of the ",(0,o.kt)("em",{parentName:"li"},"bid")," to the ",(0,o.kt)("em",{parentName:"li"},"auction")),(0,o.kt)("li",{parentName:"ol"},"The validator is part of the ",(0,o.kt)("em",{parentName:"li"},"active")," validator set")),(0,o.kt)("p",null,"Once the deploy has been executed, we can query the auction for information to confirm our delegation. We can use the Casper command-line client to create an RPC request with the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777/rpc\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - <HOST:PORT> Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"li",href:"http://localhost:7777"},"http://localhost:7777"),"]")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get-auction-info")," call will return all the bids currently in the auction contract and the list of active validators for ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," future eras from the present era."),(0,o.kt)("p",null,"Below is a sample output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"bids": [\n{\n  "bid": {\n    "bonding_purse": "uref-a5ce7dbc5f7e02ef52048e64b2ff4693a472a1a56fe71e83b180cd33271b2ed9-007",\n    "delegation_rate": 1,\n    "delegators": [\n      {\n        "bonding_purse": "uref-ca9247ad56a4d5be70484303133e2d6db97f7d7385772155763749af98ace0b0-007",\n        "delegatee": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n        "public_key": "010c7fef89bf1fc38363bd2ec20bbfb5e1152d6a9579c8847615c59c7e461ece89",\n        "staked_amount": "1"\n      },\n      {\n        "bonding_purse": "uref-38a2e9cad51b380e478c9a325578f4bbdaa0337b99b9ab9bf1dc2a114eb948b9-007",\n        "delegatee": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n        "public_key": "016ebb38d613f2550e7c21ff9d99f6249b4ae5fb9e30938f6ece2d84a22a36b035",\n        "staked_amount": "478473232415318176495746923"\n      }\n    ],\n    "inactive": false,\n    "staked_amount": "493754513995516852173468935"\n  },\n  "public_key": "0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd"\n},\n')),(0,o.kt)("p",null,"If your public key and associated amount appear in the ",(0,o.kt)("inlineCode",{parentName:"p"},"bid")," data structure, this means that the delegation request has been processed successfully. However, this does not mean the associated validator is part of the validator set, so you need to check the validator status."),(0,o.kt)("h3",{id:"checking-validator-status"},"Checking Validator Status"),(0,o.kt)("p",null,"The auction maintains a field called ",(0,o.kt)("inlineCode",{parentName:"p"},"era_validators"),", which contains the validator information for 4 future eras from the current era. An entry for a specific era lists the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKeys")," of the active validators for that era along with their stake in the network."),(0,o.kt)("p",null,"If a validator is part of the set, its public key will be present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"era_validators")," field as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auction")," data structure. We can use the Casper command-line client to create an RPC request to obtain auction information and assert that the selected validator is part of the active validator set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777/rpc\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - <HOST:PORT> Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"li",href:"http://localhost:7777"},"http://localhost:7777"),"]")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important Response fields"),":"),(0,o.kt)("p",null,"In the response, check the ",(0,o.kt)("inlineCode",{parentName:"p"},'"auction_state"."era_validators"')," structure, which should contain the public key of the selected validator for the era in which the validator will be active."),(0,o.kt)("p",null,"Below is an example of the ",(0,o.kt)("inlineCode",{parentName:"p"},"era_validators")," structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"block_height":105,\n     "era_validators":[\n        {\n           "era_id":9,\n           "validator_weights":[\n              {\n                 "public_key":"0102db4e11bccb3f9d823c82b9389625d383867d00d09b343043cdbe5ca56dd1fd",\n                 "weight":"648151805935226166098427654"\n              },\n              {\n                 "public_key":"01aa67009b37a23c7ad0ca632da5da239d5db46067d4b34125f61b04611f610baf",\n                 "weight":"648151805938466925128109996"\n              },\n              {\n                 "public_key":"01b7afa2beeddffd13458b763d7a00259f7dc0fa45498dfed05b4d7df4b7d65e2c",\n                 "weight":"648151805935226166098427656"\n              },\n              {\n                 "public_key":"01ca5463dac047cbd750d97ee42dd810cf1e081ece7d83ae4fc03b25a9ecad3b6a",\n                 "weight":"648151805938466925128109998"\n              },\n              {\n                 "public_key":"01f4a7644695aa129eba09fb3f11d0277b2bea1a3d5bc1933bcda93fdb4ad17e55",\n                 "weight":"648151805938466925128110000"\n              }\n           ]\n        },\n')),(0,o.kt)("p",null,"In the above example, we see the public keys of the active validators in Era ",(0,o.kt)("inlineCode",{parentName:"p"},"9"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Validators earn delegation rewards only when they are part of the active set. This information is time-sensitive; therefore, a validator selected today may not be part of the set tomorrow. Keep this in mind when creating a delegation request."))}u.isMDXComponent=!0}}]);