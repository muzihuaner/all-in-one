"use strict";(self.webpackChunkall_in_one=self.webpackChunkall_in_one||[]).push([[6696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},o="TrueNAS",i={unversionedId:"install/TrueNAS",id:"install/TrueNAS",title:"TrueNAS",description:"TrueNAS\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f51\u7edc\u5b58\u50a8\u548c\u6570\u636e\u7ba1\u7406\u5e73\u53f0\uff0c\u7531iXsystems\u5f00\u53d1\u548c\u7ef4\u62a4\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u9760\u3001\u9ad8\u6027\u80fd\u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u9002\u7528\u4e8e\u4e2a\u4eba\u7528\u6237\u3001\u4e2d\u5c0f\u578b\u4f01\u4e1a\u548c\u5927\u578b\u4f01\u4e1a\u3002",source:"@site/docs/install/TrueNAS.md",sourceDirName:"install",slug:"/install/TrueNAS",permalink:"/docs/install/TrueNAS",draft:!1,editUrl:"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/install/TrueNAS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Openwrt",permalink:"/docs/install/Openwrt"},next:{title:"Unraid\u5b89\u88c5\u6559\u7a0b",permalink:"/docs/install/Unraid-install"}},c={},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"truenas"},"TrueNAS"),(0,a.kt)("p",null,"TrueNAS\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f51\u7edc\u5b58\u50a8\u548c\u6570\u636e\u7ba1\u7406\u5e73\u53f0\uff0c\u7531iXsystems\u5f00\u53d1\u548c\u7ef4\u62a4\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u9760\u3001\u9ad8\u6027\u80fd\u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u9002\u7528\u4e8e\u4e2a\u4eba\u7528\u6237\u3001\u4e2d\u5c0f\u578b\u4f01\u4e1a\u548c\u5927\u578b\u4f01\u4e1a\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.truenas.com/"},"https://www.truenas.com/")),(0,a.kt)("p",null,"TrueNAS SCALE\u6559\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://space.bilibili.com/28457/channel/collectiondetail?sid=1061554"},"https://space.bilibili.com/28457/channel/collectiondetail?sid=1061554")))}f.isMDXComponent=!0}}]);