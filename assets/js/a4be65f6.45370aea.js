"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5378],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7137:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(4996),s=["components"],i={},p="Transferring Tokens using a Multi-sig Deploy",d={unversionedId:"workflow/deploy-transfer",id:"workflow/deploy-transfer",title:"Transferring Tokens using a Multi-sig Deploy",description:"This topic explores the use of a deploy file to transfer Casper tokens (CSPR) between accounts on the Casper Network. This method of transferring tokens is useful when you want to implement multi-signature deploys. To understand more about multi-signature deploys, see Two-Party Multi-Signature Deploys. The make-transfer command allows you to create a transfer deploy and save the output to a file. You can then have the deploy signed by other parties using the sign-deploy command and send it to the network for execution using the send-deploy command.",source:"@site/source/docs/casper/workflow/deploy-transfer.md",sourceDirName:"workflow",slug:"/workflow/deploy-transfer",permalink:"/docs/workflow/deploy-transfer",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/workflow/deploy-transfer.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Direct Token Transfer",permalink:"/docs/workflow/transfer-workflow"},next:{title:"Verifying a Transfer",permalink:"/docs/workflow/verify-transfer"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Token Transfer Workflow",id:"token-transfer-workflow",children:[{value:"Preparing the Transfer",id:"preparing-the-transfer",children:[],level:3},{value:"Saving the Output",id:"saving-the-output",children:[],level:3},{value:"Signing the Deploy",id:"signing-the-deploy",children:[],level:3},{value:"Sending the Deploy",id:"sending-the-deploy",children:[],level:3}],level:2},{value:"Verifying the Transfer",id:"verifying-the-transfer",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transferring-tokens-using-a-multi-sig-deploy"},"Transferring Tokens using a Multi-sig Deploy"),(0,o.kt)("p",null,"This topic explores the use of a deploy file to transfer Casper tokens (CSPR) between accounts on the Casper Network. This method of transferring tokens is useful when you want to implement multi-signature deploys. To understand more about multi-signature deploys, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/two-party-multi-sig"},"Two-Party Multi-Signature Deploys"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"make-transfer")," command allows you to create a transfer deploy and save the output to a file. You can then have the deploy signed by other parties using the ",(0,o.kt)("inlineCode",{parentName:"p"},"sign-deploy")," command and send it to the network for execution using the ",(0,o.kt)("inlineCode",{parentName:"p"},"send-deploy")," command."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You must ensure the following prerequisites are met, before you start using the deploy commands:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up your machine as per the ",(0,o.kt)("a",{parentName:"li",href:"/docs/workflow/setup"},"prerequisites")),(0,o.kt)("li",{parentName:"ol"},"Set up accounts on the ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/"},"Testnet")," or ",(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/"},"Mainnet")),(0,o.kt)("li",{parentName:"ol"},"Fund the source account"),(0,o.kt)("li",{parentName:"ol"},"Get the source ",(0,o.kt)("em",{parentName:"li"},"secret key")," file path and the target ",(0,o.kt)("em",{parentName:"li"},"public key")," hex"),(0,o.kt)("li",{parentName:"ol"},"Get a valid ",(0,o.kt)("em",{parentName:"li"},"node address")," from the ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/tools/peers"},"Testnet peers")," or ",(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/tools/peers"},"Mainnet peers")),(0,o.kt)("li",{parentName:"ol"},"Use the Casper ",(0,o.kt)("a",{parentName:"li",href:"/workflow/setup#the-casper-command-line-client"},"command-line client"))),(0,o.kt)("h2",{id:"token-transfer-workflow"},"Token Transfer Workflow"),(0,o.kt)("p",null,"The high-level flow to transfer tokens using a deploy file is described in the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"make-deploy")," command to prepare a transfer"),(0,o.kt)("li",{parentName:"ol"},"Save the output of the ",(0,o.kt)("inlineCode",{parentName:"li"},"make-deploy")," command in a deploy file"),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"send-deploy")," command to send the deploy to the network through a valid node")),(0,o.kt)("img",{src:(0,l.Z)("/image/workflow/deploy-flow.png"),width:"600"}),(0,o.kt)("h3",{id:"preparing-the-transfer"},"Preparing the Transfer"),(0,o.kt)("p",null,"This section explains the ",(0,o.kt)("inlineCode",{parentName:"p"},"make-transfer")," command using an example you can try on the Testnet. For this example, we are transferring 2500000000 motes from the source account with the secret_key.pem stored in keys1 folder to a target account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client make-transfer --amount 2500000000 \\\n--secret-key keys1/secret_key.pem \\\n--chain-name casper-test \\\n--target-account [PRIMARY KEY HEX] \\\n--transfer-id 3 \\\n--payment-amount 10000\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To use this example on the Mainnet, replace ",(0,o.kt)("em",{parentName:"p"},"chain-name")," as casper instead of casper-test."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of motes you wish to transfer (1 CSPR = 1,000,000,000 motes)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"secret-key"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the secret key file for the source account")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chain-name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain ",(0,o.kt)("ul",null,(0,o.kt)("li",null,"For Testnet it's ",(0,o.kt)("strong",{parentName:"td"},"casper-test")),(0,o.kt)("li",null,"For Mainnet it's ",(0,o.kt)("strong",{parentName:"td"},"casper"))))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"target-account"),(0,o.kt)("td",{parentName:"tr",align:null},"Hex-encoded public key of the account from which the main purse will be used as the target")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"transfer-id"),(0,o.kt)("td",{parentName:"tr",align:null},"A user-defined identifier, permanently associated with the transfer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"payment-amount"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount used to pay for executing the code on the network")))),(0,o.kt)("h3",{id:"saving-the-output"},"Saving the Output"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample output of the make-transfer command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hash": "2bf18a14c652b2c12668df3c58d4cbb54930b372f25119f620694fa319b7db3e",\n    "header": {\n        "account": "013ad94f8932e3d14a715225a4088971c9d551a3d1281cdd5f726063762d932b0e",\n        "timestamp": "2021-11-25T14:30:00.210Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "77a86730a7defd16d30361ef67204dbb302dfd905a98fc094425ac97645978fd",\n        "dependencies": [],\n        "chain_name": "casper-test"\n    },\n    "payment": {\n        "ModuleBytes": {\n            "module_bytes": "",\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "021027",\n                        "parsed": "10000"\n                    }\n                ]\n            ]\n        }\n    },\n    "session": {\n        "Transfer": {\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "0400f90295",\n                        "parsed": "2500000000"\n                    }\n                ],\n                [\n                    "target",\n                    {\n                        "cl_type": {\n                            "ByteArray": 32\n                        },\n                        "bytes": "3039c4b9b7379cedbd666f3a6e08012da0608707cc33c380119485c22e8280f1",\n                        "parsed": "3039c4b9b7379cedbd666f3a6e08012da0608707cc33c380119485c22e8280f1"\n                    }\n                ],\n                [\n                    "id",\n                    {\n                        "cl_type": {\n                            "Option": "U64"\n                        },\n                        "bytes": "010100000000000000",\n                        "parsed": 1\n                    }\n                ]\n            ]\n        }\n    },\n    "approvals": [\n        {\n            "signer": "013ad94f8932e3d14a715225a4088971c9d551a3d1281cdd5f726063762d932b0e",\n            "signature": "016b185d5b424f36c0a0d995067a25fb50a7efef73a23ba070c55a66911ddc9b1e1b2c8964b5253368ca4992b8d856c84844036bc74de344ba23834043714a110a"\n        }\n    ]\n}\n'))),(0,o.kt)("p",null,"In the above example, you can view a section named ",(0,o.kt)("strong",{parentName:"p"},"approvals"),". This is where a signature of the source account is added to the deploy."),(0,o.kt)("p",null,"Save this output in a ",(0,o.kt)("em",{parentName:"p"},"transfer.deploy")," file as shown in the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client make-transfer --amount 2500000000 \\\n--secret-key keys1/secret_key.pem \\\n--chain-name casper-test \\\n--target-account [PRIMARY KEY HEX] \\\n--transfer-id 3 \\\n--payment-amount 10000 > transfer.deploy\n")),(0,o.kt)("h3",{id:"signing-the-deploy"},"Signing the Deploy"),(0,o.kt)("p",null,"Once the deploy file is created, you can sign the deploy using the other designated accounts. For this example, we are signing the deploy with the secret_key.pem stored in keys2 folder and saving the output in a transfer2.deploy file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client sign-deploy \\\n--input transfer.deploy \\\n--secret-key keys2/secret_key.pem \\\n--output transfer2.deploy\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"input"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the deploy file, which needs to be signed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"secret-key"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the secret key file used to sign the deploy")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"output"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the output file used to the save the deploy with multiple signatures")))),(0,o.kt)("p",null,"You can observe towards the end of the following output there is an ",(0,o.kt)("strong",{parentName:"p"},"approvals")," section, which has two signatures, one from the account initiating the transfer and second from the account used to sign the deploy."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample output saved in the transfer2.deploy file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "hash": "6c584812f844e56b6a133e205a03e1eef039e78f93b9dca1f429301f3e17806b",\n    "header": {\n        "account": "013ad94f8732e3d14a715225a4088971c9d551a3d1281cdd5f726063762d932b0e",\n        "timestamp": "2021-11-25T14:30:26.592Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "77a86730a7defd16d30361ef67204dbb302dfd905a98fc094425ac97645978fd",\n        "dependencies": [],\n        "chain_name": "casper-test"\n    },\n    "payment": {\n        "ModuleBytes": {\n            "module_bytes": "",\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "021027",\n                        "parsed": "10000"\n                    }\n                ]\n            ]\n        }\n    },\n    "session": {\n        "Transfer": {\n            "args": [\n                [\n                    "amount",\n                    {\n                        "cl_type": "U512",\n                        "bytes": "0400f90295",\n                        "parsed": "2500000000"\n                    }\n                ],\n                [\n                    "target",\n                    {\n                        "cl_type": {\n                            "ByteArray": 32\n                        },\n                        "bytes": "3039c4b9b7379cedbd666f3a6e08012da0608707cc33c380119485c22e8280f1",\n                        "parsed": "3039c4b9b7379cedbd666f3a6e08012da0608707cc33c380119485c22e8280f1"\n                    }\n                ],\n                [\n                    "id",\n                    {\n                        "cl_type": {\n                            "Option": "U64"\n                        },\n                        "bytes": "010100000000000000",\n                        "parsed": 1\n                    }\n                ]\n            ]\n        }\n    },\n    "approvals": [\n        {\n            "signer": "013ad94f8732e3d14a715225a4088971c9d551a3d1281cdd5f726063762d932b0e",\n            "signature": "0102680af44588d79d30c3403edd22a715fd988fea00fd1bafbb1e67cc48c07752645861df440d74f7a6a19949019b63f776d7d00b2867db3f1b4a6ffb5551870d"\n        },\n        {\n            "signer": "019a33f123ae936ccd29d8fa5438f03a86b6e34fe4346219e571d5ac42cbff5be6",\n            "signature": "01553d9c8ffb1b499b6ca7c79a9c1a0f8044030aadec4228c4f18a971c57632e001b3c94051af9667c99bc369f71afde4042ff5857cb965048c40230d53571ad0a"\n        }\n    ]\n}\n'))),(0,o.kt)("h3",{id:"sending-the-deploy"},"Sending the Deploy"),(0,o.kt)("p",null,"The next step is to send the deploy for execution on the network. As described in the ",(0,o.kt)("a",{parentName:"p",href:"deploy-transfer#prerequisites"},"Prerequisites")," section, you need to get an active node address from the corresponding network to complete this task. The following example uses the node ",(0,o.kt)("a",{parentName:"p",href:"http://80.92.204.108"},"http://80.92.204.108")," from the Testnet, replace this with an active node before using the command. Port ",(0,o.kt)("inlineCode",{parentName:"p"},"7777")," is the RPC endpoint for interacting with the Casper client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client send-deploy --input transfer2.deploy --node-address http://80.92.204.108:7777\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"input"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the deploy file, which is used as the input")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"node-address"),(0,o.kt)("td",{parentName:"tr",align:null},"The Hostname or IP and port of node on which HTTP service is running")))),(0,o.kt)("p",null,"Make a note of the ",(0,o.kt)("em",{parentName:"p"},"deploy_hash")," from the send-deploy command output. This will be required to verify the status of the deploy."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample output of the send-deploy command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 261147078494867680,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.3.4",\n        "deploy_hash": "87912f9ea859159dcf2f0554751ba0bce8b1df41f4b4339bc6de370d7734bdae"\n    }\n}\n'))),(0,o.kt)("h2",{id:"verifying-the-transfer"},"Verifying the Transfer"),(0,o.kt)("p",null,"To verify the status of your transfer, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/verify-transfer"},"Verifying a Transfer"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also verify if the transfer was successful by checking your account balance using a ",(0,o.kt)("a",{parentName:"p",href:"/docs/workflow/block-explorer"},"block explorer"),"."))))}m.isMDXComponent=!0}}]);