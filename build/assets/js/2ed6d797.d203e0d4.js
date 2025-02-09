"use strict";(self.webpackChunkall_in_one=self.webpackChunkall_in_one||[]).push([[1469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"applications/tailscale",id:"applications/tailscale",title:"tailscale",description:"Tailscale \u662f\u4e00\u6b3e\u57fa\u4e8e WireGuard \u534f\u8bae\u6784\u5efa\u7684\u73b0\u4ee3 VPN \u670d\u52a1\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u8f7b\u677e\u521b\u5efa\u5b89\u5168\u7684\u865a\u62df\u4e13\u7528\u7f51\u7edc\uff08VPN\uff09\u3002Tailscale \u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u3001\u6613\u7528\u4e14\u5b89\u5168\u7684\u65b9\u5f0f\uff0c\u8ba9\u4e0d\u540c\u8bbe\u5907\uff08\u5982\u8ba1\u7b97\u673a\u3001\u670d\u52a1\u5668\u3001\u79fb\u52a8\u8bbe\u5907\u7b49\uff09\u4e4b\u95f4\u80fd\u591f\u5b89\u5168\u5730\u901a\u4fe1\uff0c\u5373\u4f7f\u8fd9\u4e9b\u8bbe\u5907\u5904\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u73af\u5883\u4e2d\u3002",source:"@site/docs/applications/tailscale.md",sourceDirName:"applications",slug:"/applications/tailscale",permalink:"/docs/applications/tailscale",draft:!1,editUrl:"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/tailscale.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rclone",permalink:"/docs/applications/rclone"},next:{title:"WireGuard",permalink:"/docs/applications/wireguard"}},c={},p=[{value:"\u5728 Linux \u4e0a\u5b89\u88c5 Tailscale",id:"\u5728-linux-\u4e0a\u5b89\u88c5-tailscale",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Tailscale \u662f\u4e00\u6b3e\u57fa\u4e8e WireGuard \u534f\u8bae\u6784\u5efa\u7684\u73b0\u4ee3 VPN \u670d\u52a1\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u8f7b\u677e\u521b\u5efa\u5b89\u5168\u7684\u865a\u62df\u4e13\u7528\u7f51\u7edc\uff08VPN\uff09\u3002Tailscale \u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u3001\u6613\u7528\u4e14\u5b89\u5168\u7684\u65b9\u5f0f\uff0c\u8ba9\u4e0d\u540c\u8bbe\u5907\uff08\u5982\u8ba1\u7b97\u673a\u3001\u670d\u52a1\u5668\u3001\u79fb\u52a8\u8bbe\u5907\u7b49\uff09\u4e4b\u95f4\u80fd\u591f\u5b89\u5168\u5730\u901a\u4fe1\uff0c\u5373\u4f7f\u8fd9\u4e9b\u8bbe\u5907\u5904\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u73af\u5883\u4e2d\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tailscale.com/download/"},"https://tailscale.com/download/")),(0,n.kt)("p",null,"Tailscale \u7684\u4e3b\u8981\u7279\u70b9\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6613\u4e8e\u4f7f\u7528"),"\uff1a\u65e0\u9700\u590d\u6742\u7684\u914d\u7f6e\uff0c\u901a\u8fc7\u7b80\u5355\u7684\u6b65\u9aa4\u5373\u53ef\u5b8c\u6210\u8bbe\u5907\u7684\u6dfb\u52a0\u548c\u7f51\u7edc\u7684\u642d\u5efa\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5b89\u5168\u53ef\u9760"),"\uff1a\u91c7\u7528 WireGuard \u52a0\u5bc6\u534f\u8bae\uff0c\u786e\u4fdd\u6570\u636e\u4f20\u8f93\u7684\u5b89\u5168\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u8de8\u5e73\u53f0\u652f\u6301"),"\uff1a\u652f\u6301\u591a\u79cd\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5305\u62ec Windows\u3001macOS\u3001Linux\u3001iOS \u548c Android \u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u81ea\u52a8\u7ec4\u7f51"),"\uff1a\u80fd\u591f\u81ea\u52a8\u53d1\u73b0\u548c\u8fde\u63a5\u8bbe\u5907\uff0c\u5f62\u6210\u4e00\u4e2a\u865a\u62df\u7684\u79c1\u6709\u7f51\u7edc\u3002")),(0,n.kt)("h3",{id:"\u5728-linux-\u4e0a\u5b89\u88c5-tailscale"},"\u5728 Linux \u4e0a\u5b89\u88c5 Tailscale"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728 Linux \u53d1\u884c\u7248\u4e0a\u5b89\u88c5 Tailscale \u7684\u6b65\u9aa4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6dfb\u52a0 Tailscale \u7684\u8f6f\u4ef6\u5305\u6e90"),"\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://tailscale.com/install.sh | sh\n")),(0,n.kt)("p",{parentName:"li"},"\u8be5\u811a\u672c\u4f1a\u81ea\u52a8\u68c0\u6d4b\u4f60\u7684\u7cfb\u7edf\uff0c\u5e76\u6dfb\u52a0 Tailscale \u7684\u8f6f\u4ef6\u5305\u6e90\uff0c\u7136\u540e\u5b89\u88c5 Tailscale\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u542f\u52a8 Tailscale \u670d\u52a1"),"\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tailscale up\n")),(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u6b64\u547d\u4ee4\u540e\uff0c\u4f1a\u6253\u5f00\u4e00\u4e2a\u6d4f\u89c8\u5668\u7a97\u53e3\uff0c\u8981\u6c42\u4f60\u767b\u5f55 Tailscale \u8d26\u6237\u8fdb\u884c\u6388\u6743\u3002\u767b\u5f55\u5e76\u6388\u6743\u540e\uff0c\u8be5\u8bbe\u5907\u5c31\u4f1a\u52a0\u5165\u5230\u4f60\u7684 Tailscale \u7f51\u7edc\u4e2d\u3002"))))}m.isMDXComponent=!0}}]);