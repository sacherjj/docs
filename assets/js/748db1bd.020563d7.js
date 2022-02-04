"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4156],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8689:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={},s="Basic Node Setup",p={unversionedId:"operators/setup",id:"operators/setup",title:"Basic Node Setup",description:"A node is normally run by executing the casper-node-launcher. This app executes the casper-node as a child process and handles upgrades of it.",source:"@site/source/docs/casper/operators/setup.md",sourceDirName:"operators",slug:"/operators/setup",permalink:"/docs/operators/setup",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/operators/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"operators",previous:{title:"Recommended Hardware Specifications",permalink:"/docs/operators/hardware"},next:{title:"Setting up a Network",permalink:"/docs/operators/create"}},d=[{value:"Casper Node Launcher",id:"casper-node-launcher",children:[],level:2},{value:"File Locations",id:"file-locations",children:[{value:"<code>/usr/bin/</code>",id:"usrbin",children:[],level:3},{value:"<code>/etc/casper/</code>",id:"etccasper",children:[],level:3},{value:"<code>/var/lib/casper/</code>",id:"varlibcasper",children:[],level:3}],level:2},{value:"Node Version Installation",id:"node-version-installation",children:[],level:2},{value:"Client Installation",id:"client-installation",children:[],level:2},{value:"Create and Fund Keys",id:"create-fund-keys",children:[],level:2},{value:"Config File",id:"config-file",children:[{value:"Trusted Hash for Synchronizing",id:"trusted-hash-for-synchronizing",children:[],level:3},{value:"Secret Keys",id:"secret-keys",children:[],level:3},{value:"Networking and Gossiping",id:"networking--gossiping",children:[],level:3}],level:2}],c={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-node-setup"},"Basic Node Setup"),(0,r.kt)("p",null,"A node is normally run by executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node-launcher"),". This app executes the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," as a child process and handles upgrades of it."),(0,r.kt)("h2",{id:"casper-node-launcher"},"Casper Node Launcher"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," can be installed via a Debian package, which also creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper")," user, creates directory structures, and sets up a ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," unit and logging."),(0,r.kt)("p",null,"The casper-node-launcher Debian package can be obtained from ",(0,r.kt)("a",{parentName:"p",href:"https://repo.casperlabs.io"},"https://repo.casperlabs.io"),". You only need to run the steps detailed there once."),(0,r.kt)("p",null,"Then, proceed to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," by running these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install casper-node-launcher\n")),(0,r.kt)("p",null,"You can also build ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node-launcher"},"from source"),". However, all the setup and pull of casper-node releases will be manual."),(0,r.kt)("h2",{id:"file-locations"},"File Locations"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," Debian install creates the directories and files needed for running ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," versions and performing upgrades. A ",(0,r.kt)("inlineCode",{parentName:"p"},"casper")," user and ",(0,r.kt)("inlineCode",{parentName:"p"},"casper")," group is created during install and used to run the software. Two main folders are relevant for our software: ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/casper")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/casper"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The casper-node install version")),(0,r.kt)("p",null,"Each version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," install is located based on the semantic version with underscores. For example, version 1.0.3 is represented by a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"1_0_3"),". This convention applies to both binary and configuration file locations. Versioning with ",(0,r.kt)("inlineCode",{parentName:"p"},"[m_n_p]")," represents the major, minor, and patch of a semantic version."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Multiple versioned folders will exist on a system when upgrades are set up."))),(0,r.kt)("p",null,"The following is the state of the filesystem after installing the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," Debian packages, and also after running the script ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/casper/pull_casper_node_version.sh"),":"),(0,r.kt)("h3",{id:"usrbin"},(0,r.kt)("inlineCode",{parentName:"h3"},"/usr/bin/")),(0,r.kt)("p",null,"The default location for executables from the Debian package install is ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"casper-client")," - A client for interacting with the Casper network"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"casper-node-launcher")," - The launcher application which starts the ",(0,r.kt)("inlineCode",{parentName:"li"},"casper-node")," as a child process")),(0,r.kt)("h3",{id:"etccasper"},(0,r.kt)("inlineCode",{parentName:"h3"},"/etc/casper/")),(0,r.kt)("p",null,"This is the default location for configuration files. It can be overwritten with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CASPER_CONFIG_DIR")," environment variable. The paths in this document assume the default configuration file location of ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/casper"),". The data is organized as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delete_local_db.sh")," - Removes ",(0,r.kt)("inlineCode",{parentName:"li"},"*.lmdb*")," files from ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/casper-node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pull_casper_node_version.sh")," - Pulls ",(0,r.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," from ",(0,r.kt)("a",{parentName:"li",href:"http://genesis.casperlabs.io/"},"genesis.casperlabs.io")," for a specified protocol version and extracts them into ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/bin/<protocol_version>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/casper/<protocol_version>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config_from_example.sh")," - Gets external IP to replace and create the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.toml")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"config-example.toml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_util.py")," - A script that will be replacing other scripts and is the preferred method of performing the actions of ",(0,r.kt)("inlineCode",{parentName:"li"},"pull_casper_node_version.sh"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"config_from_example.sh"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"delete_local_db.sh"),". Other scripts will be deprecated in future releases of ",(0,r.kt)("inlineCode",{parentName:"li"},"casper-node-launcher"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"casper-node-launcher-state.toml")," - The local state for the ",(0,r.kt)("inlineCode",{parentName:"li"},"casper-node-launcher")," which is created during the first run"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validator_keys/")," - The default folder for node keys, containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"README.md")," - Instructions on how to create validator keys using the ",(0,r.kt)("inlineCode",{parentName:"li"},"casper-client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret_key.pem")," - Secret key used by the validator node to sign blocks and peer-to-peer messages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public_key.pem")," - Public key associated with the secret key above, stored in PEM format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public_key_hex")," - Public key associated with the secret key above, stored in hex format"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1_0_0/")," - Folder for genesis configuration files, containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accounts.toml")," - Contains the genesis validators and delegators"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainspec.toml")," - Contains invariant network settings, with the ",(0,r.kt)("inlineCode",{parentName:"li"},"activation_point")," (network start time) as a timestamp"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config-example.toml")," - Example for creating a ",(0,r.kt)("inlineCode",{parentName:"li"},"config.toml")," file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config.toml")," - Contains variable node configuration settings, created by a node operator manually or by running ",(0,r.kt)("inlineCode",{parentName:"li"},"config_from_example.sh 1_0_0")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m_n_p/")," - Folder for each installed upgrade package's configuration files, containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainspec.toml")," - Contains invariant network settings, with the ",(0,r.kt)("inlineCode",{parentName:"li"},"activation_point")," as an era ID (the era at which this protocol version of the node became or will become active)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config-example.toml")," - As per ",(0,r.kt)("inlineCode",{parentName:"li"},"1_0_0/config-example.toml"),", but compatible with the ",(0,r.kt)("inlineCode",{parentName:"li"},"m.n.p")," version of the node"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config.toml")," - As per ",(0,r.kt)("inlineCode",{parentName:"li"},"1_0_0/config.toml"),", but compatible with the ",(0,r.kt)("inlineCode",{parentName:"li"},"m.n.p")," version of the node")))),(0,r.kt)("h3",{id:"varlibcasper"},(0,r.kt)("inlineCode",{parentName:"h3"},"/var/lib/casper/")),(0,r.kt)("p",null,"This is the location for larger and variable data for the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node"),", organized in the following folders and files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bin/")," - The parent folder for storing the versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," executables. This location can be overwritten with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CASPER_BIN_DIR")," environment variable. The paths in this document assume the default of ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/casper/bin/"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1_0_0/")," - Folder for genesis binary files, containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"casper-node")," - The node executable - defaults to the Ubuntu 18.04 compatible binary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"README.md")," - Information about the repository location and the Git hash used for compilation to allow a rebuild on other platforms"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m_n_p/")," - Folder for each installed upgrade package, containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"casper-node")," - As per ",(0,r.kt)("inlineCode",{parentName:"li"},"1_0_0/casper-node"),", but the ",(0,r.kt)("inlineCode",{parentName:"li"},"m.n.p")," version of the node"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"README.md")," - As per ",(0,r.kt)("inlineCode",{parentName:"li"},"1_0_0/README.md"),", but compatible with the ",(0,r.kt)("inlineCode",{parentName:"li"},"m.n.p")," version of the node"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"casper-node/<NETWORK NAME>")," - Folder containing databases and related files produced by the node binary. For MainNet, the network name is ",(0,r.kt)("inlineCode",{parentName:"p"},"casper")," and for TestNet it is ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-test"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.lmdb")," - Persistent global state store of the network"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data.lmbd-lock")," - Lockfile for the ",(0,r.kt)("inlineCode",{parentName:"li"},"data.lmdb")," database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storage.lmdb")," - Persistent store of all other network data, primarily Blocks and Deploys"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storage.lmdb-lock")," - Lockfile for the ",(0,r.kt)("inlineCode",{parentName:"li"},"storage.lmdb")," database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unit_files/")," - Folder containing transient caches of consensus information")))),(0,r.kt)("h2",{id:"node-version-installation"},"Node Version Installation"),(0,r.kt)("p",null,"Included with ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"node_util.py")," for installing ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," versions. To stage all current ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," versions we would run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols <NETWORK_CONFIG>\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"<NETWORK_CONFIG>"),", We use ",(0,r.kt)("inlineCode",{parentName:"p"},"casper.conf")," for MainNet and ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-test.conf")," for TestNet. This will install all currently released protocols in one step."),(0,r.kt)("p",null,"This is invoked with the release version in underscore format such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/pull_casper_node_version.sh 1_0_2\n")),(0,r.kt)("p",null,"This command will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/bin/1_0_2/")," and expand the ",(0,r.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," containing at a minimum ",(0,r.kt)("inlineCode",{parentName:"li"},"casper-node")),(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/casper/1_0_2/")," and expand the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," containing ",(0,r.kt)("inlineCode",{parentName:"li"},"chainspec.toml"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"config-example.toml"),", and possibly ",(0,r.kt)("inlineCode",{parentName:"li"},"accounts.csv")," and other files"),(0,r.kt)("li",{parentName:"ul"},"Remove the archive files and run ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/casper/config_from_example.sh 1_0_2")," to create a ",(0,r.kt)("inlineCode",{parentName:"li"},"config.toml")," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"config-example.toml"))),(0,r.kt)("h2",{id:"client-installation"},"Client Installation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," can be installed from ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-client"},"https://crates.io/crates/casper-client"),"."),(0,r.kt)("p",null,"Run the commands below to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," on most flavors of Linux and macOS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install casper-client\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client")," can print out help information, which provides an up-to-date list of supported commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --help\n")),(0,r.kt)("p",null,"For each command, you can use help to get the up-to-date arguments and descriptions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client <command> --help\n")),(0,r.kt)("h2",{id:"create-fund-keys"},"Create and Fund Keys"),(0,r.kt)("p",null,"The Rust client generates keys via the ",(0,r.kt)("inlineCode",{parentName:"p"},"keygen")," command. The process generates 2 ",(0,r.kt)("em",{parentName:"p"},"pem")," files and 1 ",(0,r.kt)("em",{parentName:"p"},"text")," file. To learn about options for generating keys, include ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," when running the ",(0,r.kt)("inlineCode",{parentName:"p"},"keygen")," command. The following command will create the keys in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/casper/validator_keys")," folder. For details on funding your accounts, see ",(0,r.kt)("a",{parentName:"p",href:"../workflow/setup#fund-your-account"},"Prerequisites"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client keygen /etc/casper/validator_keys\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is recommended to save your keys in a secure location, preferably offline."))),(0,r.kt)("p",null,"More about keys and key generation can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/casper/validator_keys/README.md")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," was installed from the Debian package. You can also find for more information on keys, in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/keys"},"Accounts and Cryptographic Keys")," section."),(0,r.kt)("h2",{id:"config-file"},"Config File"),(0,r.kt)("p",null,"One ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file exists for each ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-node")," version installed. It is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/casper/[m_n_p]/")," directory, where ",(0,r.kt)("inlineCode",{parentName:"p"},"m_n_p")," is the current semantic version. This can be created from ",(0,r.kt)("inlineCode",{parentName:"p"},"config-example.toml")," by using ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/casper/config_from_example.sh [m_n_p]")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"[m_n_p]")," is replaced current version with underscores."),(0,r.kt)("p",null,"Below are some fields in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," that you may need to adjust."),(0,r.kt)("h3",{id:"trusted-hash-for-synchronizing"},"Trusted Hash for Synchronizing"),(0,r.kt)("p",null,"The Casper network is a permissionless, proof of stake network - which implies that validators can come and go from the network. The implication is that, after a point in time, historical data could have less security if it is retrieved from 'any node' on the network. Therefore, joining the network has to be from a trusted source, a bonded validator. The system will start from the hash from a recent block and then work backward from that block to obtain the deploys and finalized blocks from the linear block store. Here is the process to get the trusted hash:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find a list of trusted validators"),(0,r.kt)("li",{parentName:"ul"},"Query the status endpoint of a trusted validator (",(0,r.kt)("inlineCode",{parentName:"li"},"http://<NODE_IP_ADDRESS>:8888/status"),")"),(0,r.kt)("li",{parentName:"ul"},"Obtain the hash of a block from the status endpoint"),(0,r.kt)("li",{parentName:"ul"},"Update the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.toml")," for the node to include the trusted hash. There is a field dedicated to this near the top of the file")),(0,r.kt)("h3",{id:"secret-keys"},"Secret Keys"),(0,r.kt)("p",null,"Provide the path to the secret keys for the node. This is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"etc/casper/validator_keys/")," by default."),(0,r.kt)("h3",{id:"networking--gossiping"},"Networking and Gossiping"),(0,r.kt)("p",null,"The node requires a publicly accessible IP address. The ",(0,r.kt)("inlineCode",{parentName:"p"},"config_from_example.sh")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"node_util.py")," both allow IP for network address translation (NAT) setup. Specify the public IP address of the node. If you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"config_from_example.sh")," external services are called to find your IP and this is inserted into the created ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml"),"."),(0,r.kt)("p",null,"Default values are specified in the file if you want to change them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specify the port that will be used for status and deploys"),(0,r.kt)("li",{parentName:"ul"},"Specify the port used for networking"),(0,r.kt)("li",{parentName:"ul"},"Known_addresses - these are the bootstrap nodes (no need to change these)")))}m.isMDXComponent=!0}}]);