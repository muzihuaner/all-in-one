"use strict";(self.webpackChunkall_in_one=self.webpackChunkall_in_one||[]).push([[5746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),k=a,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||p;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<p;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const p={},l="Uptime Kuma",i={unversionedId:"applications/docker-applications/UptimeKuma",id:"applications/docker-applications/UptimeKuma",title:"Uptime Kuma",description:"Uptime Kuma \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u670d\u52a1\u5668\u76d1\u63a7\u548c\u72b6\u6001\u68c0\u6d4b\u5de5\u5177\uff0c\u5b83\u5e2e\u52a9\u60a8\u8ddf\u8e2a\u670d\u52a1\u5668\u7684\u53ef\u7528\u6027\u3001\u6027\u80fd\u548c\u5065\u5eb7\u72b6\u6001\u3002",source:"@site/docs/applications/docker-applications/UptimeKuma.md",sourceDirName:"applications/docker-applications",slug:"/applications/docker-applications/UptimeKuma",permalink:"/docs/applications/docker-applications/UptimeKuma",draft:!1,editUrl:"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/docker-applications/UptimeKuma.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transmission",permalink:"/docs/applications/docker-applications/Transmission"},next:{title:"Watchtower",permalink:"/docs/applications/docker-applications/Watchtower"}},o={},u=[{value:"Docker\u547d\u4ee4\u5b89\u88c5",id:"docker\u547d\u4ee4\u5b89\u88c5",level:3}],c={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uptime-kuma"},"Uptime Kuma"),(0,a.kt)("p",null,"Uptime Kuma \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u670d\u52a1\u5668\u76d1\u63a7\u548c\u72b6\u6001\u68c0\u6d4b\u5de5\u5177\uff0c\u5b83\u5e2e\u52a9\u60a8\u8ddf\u8e2a\u670d\u52a1\u5668\u7684\u53ef\u7528\u6027\u3001\u6027\u80fd\u548c\u5065\u5eb7\u72b6\u6001\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u529f\u80fd\uff1a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u76d1\u63a7")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uptime Kuma \u53ef\u4ee5\u76d1\u63a7\u591a\u4e2a\u670d\u52a1\u5668\uff0c\u5305\u62ec Web \u670d\u52a1\u5668\u3001\u6570\u636e\u5e93\u670d\u52a1\u5668\u3001\u5e94\u7528\u7a0b\u5e8f\u670d\u52a1\u5668\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u4f1a\u5b9a\u671f\u53d1\u9001\u8bf7\u6c42\u6765\u68c0\u67e5\u670d\u52a1\u5668\u7684\u53ef\u7528\u6027\uff0c\u5e76\u8bb0\u5f55\u54cd\u5e94\u65f6\u95f4\u548c\u72b6\u6001\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u68c0\u6d4b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u914d\u7f6e\u81ea\u5b9a\u4e49\u68c0\u6d4b\u89c4\u5219\uff0c\u4ee5\u6ee1\u8db3\u7279\u5b9a\u9700\u6c42\u3002\u4f8b\u5982\uff0c\u68c0\u6d4b\u7279\u5b9a\u7aef\u53e3\u7684\u5f00\u653e\u72b6\u6001\u6216\u7279\u5b9a\u5185\u5bb9\u7684\u5b58\u5728\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u534f\u8bae\uff08\u5982HTTP\u3001TCP\u3001ICMP\uff09\u8fdb\u884c\u68c0\u6d4b\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u901a\u77e5\u548c\u8b66\u62a5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uptime Kuma \u53ef\u4ee5\u914d\u7f6e\u901a\u77e5\u548c\u8b66\u62a5\uff0c\u4ee5\u4fbf\u5728\u670d\u52a1\u5668\u72b6\u6001\u5f02\u5e38\u65f6\u53ca\u65f6\u901a\u77e5\u60a8\u3002\u652f\u6301\u901a\u77e5\u65b9\u5f0f\u5305\u62ec\u7535\u5b50\u90ae\u4ef6\u3001Slack\u3001Webhook\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u9608\u503c\uff0c\u5f53\u670d\u52a1\u5668\u54cd\u5e94\u65f6\u95f4\u8d85\u8fc7\u6216\u670d\u52a1\u5668\u4e0d\u53ef\u7528\u65f6\uff0c\u4f1a\u89e6\u53d1\u8b66\u62a5\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5386\u53f2\u8bb0\u5f55\u548c\u62a5\u544a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5de5\u5177\u4f1a\u4fdd\u5b58\u670d\u52a1\u5668\u7684\u76d1\u63a7\u5386\u53f2\u8bb0\u5f55\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u67e5\u770b\u8fc7\u53bb\u7684\u6027\u80fd\u548c\u53ef\u7528\u6027\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u751f\u6210\u5b9a\u671f\u62a5\u544a\uff0c\u5e2e\u52a9\u60a8\u5206\u6790\u670d\u52a1\u5668\u72b6\u6001\u7684\u8d8b\u52bf\u548c\u6a21\u5f0f\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7528\u6237\u53cb\u597d\u7684\u754c\u9762")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uptime Kuma \u63d0\u4f9b\u76f4\u89c2\u7684\u7528\u6237\u754c\u9762\uff0c\u4f7f\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u914d\u7f6e\u76d1\u63a7\u548c\u67e5\u770b\u76d1\u63a7\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u8bed\u8a00\u548c\u4e3b\u9898\uff0c\u4ee5\u6ee1\u8db3\u7528\u6237\u7684\u4e2a\u6027\u5316\u9700\u6c42\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f00\u6e90\u548c\u6269\u5c55\u6027")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uptime Kuma \u662f\u5f00\u6e90\u7684\uff0c\u53ef\u81ea\u7531\u5b9a\u5236\u548c\u6269\u5c55\u3002\u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6dfb\u52a0\u65b0\u7684\u63d2\u4ef6\u548c\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u793e\u533a\u652f\u6301\u548c\u6d3b\u8dc3\u7684\u5f00\u53d1\u8005\u793e\u533a\uff0c\u786e\u4fdd\u5de5\u5177\u7684\u6301\u7eed\u6539\u8fdb\u548c\u66f4\u65b0\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/louislam/uptime-kuma"},"https://github.com/louislam/uptime-kuma")),(0,a.kt)("h3",{id:"docker\u547d\u4ee4\u5b89\u88c5"},"Docker\u547d\u4ee4\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1\n")))}s.isMDXComponent=!0}}]);