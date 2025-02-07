"use strict";(self.webpackChunkall_in_one=self.webpackChunkall_in_one||[]).push([[4768],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var l=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),c=function(e){var a=l.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=c(e.components);return l.createElement(p.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=r,k=s["".concat(p,".").concat(d)]||s[d]||u[d]||n;return t?l.createElement(k,o(o({ref:a},m),{},{components:t})):l.createElement(k,o({ref:a},m))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,o=new Array(n);o[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<n;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7828:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var l=t(7462),r=(t(7294),t(3905));const n={},o="ollama",i={unversionedId:"applications/docker-applications/ollama",id:"applications/docker-applications/ollama",title:"ollama",description:"Ollama \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5927\u578b\u8bed\u8a00\u6a21\u578b\u670d\u52a1\uff0c\u63d0\u4f9b\u4e86\u7c7b\u4f3c OpenAI \u7684 API \u63a5\u53e3\u548c\u804a\u5929\u754c\u9762\uff0c\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u90e8\u7f72\u6700\u65b0\u7248\u672c\u7684 GPT \u6a21\u578b\u5e76\u901a\u8fc7\u63a5\u53e3\u4f7f\u7528\u3002\u652f\u6301\u70ed\u52a0\u8f7d\u6a21\u578b\u6587\u4ef6\uff0c\u65e0\u9700\u91cd\u65b0\u542f\u52a8\u5373\u53ef\u5207\u6362\u4e0d\u540c\u7684\u6a21\u578b\u3002",source:"@site/docs/applications/docker-applications/ollama.md",sourceDirName:"applications/docker-applications",slug:"/applications/docker-applications/ollama",permalink:"/docs/applications/docker-applications/ollama",draft:!1,editUrl:"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/docker-applications/ollama.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Heimdall",permalink:"/docs/applications/docker-applications/heimdall"},next:{title:"qbittorrent",permalink:"/docs/applications/docker-applications/qbittorrent"}},p={},c=[{value:"CPU \u8fd0\u884c",id:"cpu-\u8fd0\u884c",level:4},{value:"Nvidia GPU \u8fd0\u884c",id:"nvidia-gpu-\u8fd0\u884c",level:4},{value:"\u62c9\u53d6\u6a21\u578b",id:"\u62c9\u53d6\u6a21\u578b",level:3}],m={toc:c},s="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(s,(0,l.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ollama"},"ollama"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ollama")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5927\u578b\u8bed\u8a00\u6a21\u578b\u670d\u52a1\uff0c\u63d0\u4f9b\u4e86\u7c7b\u4f3c OpenAI \u7684 API \u63a5\u53e3\u548c\u804a\u5929\u754c\u9762\uff0c\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u90e8\u7f72\u6700\u65b0\u7248\u672c\u7684 GPT \u6a21\u578b\u5e76\u901a\u8fc7\u63a5\u53e3\u4f7f\u7528\u3002\u652f\u6301\u70ed\u52a0\u8f7d\u6a21\u578b\u6587\u4ef6\uff0c\u65e0\u9700\u91cd\u65b0\u542f\u52a8\u5373\u53ef\u5207\u6362\u4e0d\u540c\u7684\u6a21\u578b\u3002"),(0,r.kt)("p",null,"Ollama \u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://ollama.com/download"},"https://ollama.com/download")),(0,r.kt)("p",null,"Ollama \u5b98\u65b9\u4e3b\u9875\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://ollama.com/"},"https://ollama.com")),(0,r.kt)("p",null,"Ollama \u5b98\u65b9 GitHub \u6e90\u4ee3\u7801\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ollama/ollama"},"https://github.com/ollama/ollama/")),(0,r.kt)("p",null,"docker\u5b89\u88c5\u5b98\u65b9\u6559\u7a0b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/ollama/ollama"},"https://hub.docker.com/r/ollama/ollama")),(0,r.kt)("h4",{id:"cpu-\u8fd0\u884c"},"CPU \u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama\n")),(0,r.kt)("h4",{id:"nvidia-gpu-\u8fd0\u884c"},"Nvidia GPU \u8fd0\u884c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation"},"Nvidia container toolkit"),"."),(0,r.kt)("li",{parentName:"ol"},"Run Ollama inside a Docker container")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama\n")),(0,r.kt)("h3",{id:"\u62c9\u53d6\u6a21\u578b"},"\u62c9\u53d6\u6a21\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it ollama ollama run deepseek-r1:1.5b\n")),(0,r.kt)("p",null,"\u6a21\u578b\u5e93\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ollama.com/library"},"https://ollama.com/library")))}u.isMDXComponent=!0}}]);