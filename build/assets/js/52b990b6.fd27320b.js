"use strict";(self.webpackChunkall_in_one=self.webpackChunkall_in_one||[]).push([[1415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=c(a),s=n,d=m["".concat(l,".").concat(s)]||m[s]||u[s]||o;return a?r.createElement(d,p(p({ref:t},k),{},{components:a})):r.createElement(d,p({ref:t},k))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},p="Aira2",i={unversionedId:"applications/docker-applications/aria2",id:"applications/docker-applications/aria2",title:"Aira2",description:"Aria2\u662f\u4e00\u6b3e\u81ea\u7531\u3001\u8de8\u5e73\u53f0\u547d\u4ee4\u884c\u754c\u9762\u7684\u4e0b\u8f7d\u7ba1\u7406\u5668\uff0c\u8be5\u8f6f\u4ef6\u6839\u636eGPLv2\u8bb8\u53ef\u8bc1\u8fdb\u884c\u5206\u53d1\u3002\u652f\u6301\u7684\u4e0b\u8f7d\u534f\u8bae\u6709\uff1aHTTP\u3001HTTPS\u3001FTP\u3001Bittorrent\u548cMetalink\u3002\u6211\u4eec\u7ecf\u5e38\u7528Aria2\u66ff\u4ee3\u8fc5\u96f7\u7b49\u4e0b\u8f7d\u5de5\u5177\uff0cAria2\u591a\u7ebf\u7a0b\u4e0b\u8f7d\uff0c\u5b8c\u5168\u53ef\u4ee5\u8dd1\u6ee1\u5e26\u5bbd\u3002",source:"@site/docs/applications/docker-applications/aria2.md",sourceDirName:"applications/docker-applications",slug:"/applications/docker-applications/aria2",permalink:"/docs/applications/docker-applications/aria2",draft:!1,editUrl:"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/docker-applications/aria2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Portainer",permalink:"/docs/applications/docker-applications/Portainer"},next:{title:"Filebrowser",permalink:"/docs/applications/docker-applications/filebrowser"}},l={},c=[{value:"\u4e00\u3001Aria2 Pro Docker\u4ecb\u7ecd",id:"\u4e00aria2-pro-docker\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001Aria2 Pro Docker\u5b89\u88c5",id:"\u4e8caria2-pro-docker\u5b89\u88c5",level:2},{value:"2.4 \u5b89\u88c5AriaNg",id:"24-\u5b89\u88c5ariang",level:3},{value:"\u4e09\u3001Aria2 Pro Docker\u4f7f\u7528",id:"\u4e09aria2-pro-docker\u4f7f\u7528",level:2},{value:"3.1 AriaNg\u914d\u7f6e",id:"31-ariang\u914d\u7f6e",level:3},{value:"3.2 Aria2\u79bb\u7ebf\u4e0b\u8f7d",id:"32-aria2\u79bb\u7ebf\u4e0b\u8f7d",level:3},{value:"3.3 \u4fee\u6539\u4e0b\u8f7d\u8def\u5f84",id:"33-\u4fee\u6539\u4e0b\u8f7d\u8def\u5f84",level:3},{value:"3.5 BT\u4e0ePT\u8bbe\u7f6e",id:"35-bt\u4e0ept\u8bbe\u7f6e",level:3}],k={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aira2"},"Aira2"),(0,n.kt)("p",null,"Aria2\u662f\u4e00\u6b3e\u81ea\u7531\u3001\u8de8\u5e73\u53f0\u547d\u4ee4\u884c\u754c\u9762\u7684\u4e0b\u8f7d\u7ba1\u7406\u5668\uff0c\u8be5\u8f6f\u4ef6\u6839\u636eGPLv2\u8bb8\u53ef\u8bc1\u8fdb\u884c\u5206\u53d1\u3002\u652f\u6301\u7684\u4e0b\u8f7d\u534f\u8bae\u6709\uff1aHTTP\u3001HTTPS\u3001FTP\u3001Bittorrent\u548cMetalink\u3002\u6211\u4eec\u7ecf\u5e38\u7528Aria2\u66ff\u4ee3\u8fc5\u96f7\u7b49\u4e0b\u8f7d\u5de5\u5177\uff0cAria2\u591a\u7ebf\u7a0b\u4e0b\u8f7d\uff0c\u5b8c\u5168\u53ef\u4ee5\u8dd1\u6ee1\u5e26\u5bbd\u3002"),(0,n.kt)("p",null,"\u8fd9\u91cc\u63a8\u8350",(0,n.kt)("a",{parentName:"p",href:"https://p3terx.com/archives/docker-aria2-pro.html"},"P3TERX"),"\u7684Aria2 Pro"),(0,n.kt)("p",null,"Aria2 Pro\u662f\u4f5c\u8005",(0,n.kt)("a",{parentName:"p",href:"https://p3terx.com/archives/docker-aria2-pro.html"},"P3TERX"),"\u7ecf\u8fc7\u957f\u65f6\u95f4\u4f7f\u7528\u548c\u7814\u7a76\u5b98\u65b9\u6587\u6863\u540e\u603b\u7ed3\u51fa\u6765\u7684Aria2\u4f18\u5316\u7248\uff0c\u7279\u70b9\u662fBT \u4e0b\u8f7d\u7387\u9ad8\u3001\u901f\u5ea6\u5feb\uff0c\u91cd\u542f\u540e\u4e0d\u4e22\u5931\u4efb\u52a1\u8fdb\u5ea6\u3001\u4e0d\u91cd\u590d\u4e0b\u8f7d\uff0cBT \u4e0b\u8f7d\u5b8c\u6210\u81ea\u52a8\u6e05\u9664\u5783\u573e\u6587\u4ef6\u3001\u81ea\u52a8\u6e05\u9664\u5c0f\u6587\u4ef6(\u6587\u4ef6\u5927\u5c0f\u8fc7\u6ee4\u529f\u80fd)\uff0c\u652f\u6301\u4e0e RCLONE \u8054\u52a8\uff0c\u81ea\u52a8\u4e0a\u4f20 OneDrive \u3001Google Drive \u7b49\u7f51\u76d8 \uff0c\u767e\u5ea6\u7f51\u76d8\u8f6c\u5b58\u5230\u5176\u5b83\u7f51\u76d8 \uff0c\u591a\u7f51\u76d8\u81ea\u7531\u9009\u62e9\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_00.png"},(0,n.kt)("img",{parentName:"a",src:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_00-680x366.png",alt:"Aria2 Pro-\u529f\u80fd\u5f3a\u5927Aria2 Docker \u5bb9\u5668\u955c\u50cf\uff1a\u5728\u7ebfWeb\u7ba1\u7406,\u4e0b\u8f7d\u901f\u5ea6\u5feb,\u529f\u80fd\u5f3a"}))),(0,n.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u5c31\u6765\u5206\u4eab\u4e00\u4e0b",(0,n.kt)("a",{parentName:"p",href:"https://wzfou.com/tag/aria2-pro-docker/"},"Aria2 Pro Docker"),"\u7684\u5b89\u88c5\u4e0e\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("h2",{id:"\u4e00aria2-pro-docker\u4ecb\u7ecd"},"\u4e00\u3001Aria2 Pro Docker\u4ecb\u7ecd"),(0,n.kt)("p",null,"\u7f51\u7ad9\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4f5c\u8005\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://p3terx.com/archives/docker-aria2-pro.html"},"https://p3terx.com/archives/docker-aria2-pro.html")),(0,n.kt)("li",{parentName:"ol"},"GitHub: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/P3TERX/docker-aria2-pro"},"https://github.com/P3TERX/docker-aria2-pro")),(0,n.kt)("li",{parentName:"ol"},"Docker Hub: ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/p3terx/aria2-pro"},"https://hub.docker.com/r/p3terx/aria2-pro"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u955c\u50cf\u7279\u70b9\uff1a")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Aria2 \u5b8c\u7f8e\u914d\u7f6e\u65b9\u6848")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"BT \u4e0b\u8f7d\u7387\u9ad8\u3001\u901f\u5ea6\u5feb"),(0,n.kt)("p",{parentName:"blockquote"},"\u91cd\u542f\u540e\u4e0d\u4e22\u5931\u4efb\u52a1\u8fdb\u5ea6\u3001\u4e0d\u91cd\u590d\u4e0b\u8f7d"),(0,n.kt)("p",{parentName:"blockquote"},"\u5220\u9664\u6b63\u5728\u4e0b\u8f7d\u7684\u4efb\u52a1\u81ea\u52a8\u5220\u9664\u672a\u5b8c\u6210\u7684\u6587\u4ef6"),(0,n.kt)("p",{parentName:"blockquote"},"\u4e0b\u8f7d\u9519\u8bef\u81ea\u52a8\u5220\u9664\u672a\u5b8c\u6210\u7684\u6587\u4ef6"),(0,n.kt)("p",{parentName:"blockquote"},"\u4e0b\u8f7d\u5b8c\u6210\u81ea\u52a8\u5220\u9664\u63a7\u5236\u6587\u4ef6(",(0,n.kt)("inlineCode",{parentName:"p"},".aria2"),"\u540e\u7f00\u540d\u6587\u4ef6)"),(0,n.kt)("p",{parentName:"blockquote"},"\u4e0b\u8f7d\u5b8c\u6210\u81ea\u52a8\u5220\u9664\u79cd\u5b50\u6587\u4ef6(",(0,n.kt)("inlineCode",{parentName:"p"},".torrent"),"\u540e\u7f00\u540d\u6587\u4ef6)"),(0,n.kt)("p",{parentName:"blockquote"},"\u4e0b\u8f7d\u5b8c\u6210\u81ea\u52a8\u5220\u9664\u7a7a\u76ee\u5f55"),(0,n.kt)("p",{parentName:"blockquote"},"BT \u4e0b\u8f7d\u5b8c\u6210\u81ea\u52a8\u6e05\u9664\u5783\u573e\u6587\u4ef6(\u6587\u4ef6\u7c7b\u578b\u8fc7\u6ee4\u529f\u80fd)"),(0,n.kt)("p",{parentName:"blockquote"},"BT \u4e0b\u8f7d\u5b8c\u6210\u81ea\u52a8\u6e05\u9664\u5c0f\u6587\u4ef6(\u6587\u4ef6\u5927\u5c0f\u8fc7\u6ee4\u529f\u80fd)"),(0,n.kt)("p",{parentName:"blockquote"},"\u6709\u4e00\u5b9a\u7684\u9632\u7248\u6743\u6295\u8bc9\u3001\u9632\u8fc5\u96f7\u5438\u8840\u6548\u679c"),(0,n.kt)("p",{parentName:"blockquote"},"\u66f4\u597d\u7684 PT \u4e0b\u8f7d\u652f\u6301")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Aria2 Pro Core \u9879\u76ee\u6700\u65b0\u9759\u6001\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u591a\u5e73\u53f0\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"amd64"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"i386"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"arm64"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"armhf"),"\uff08VPS\u3001\u7fa4\u8f89\u3001\u6811\u8393\u6d3e\u7b49\u5e38\u89c1\u5e73\u53f0\u5b8c\u7f8e\u652f\u6301\uff09"),(0,n.kt)("p",{parentName:"blockquote"},"\u5168\u529f\u80fd\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"Async DNS"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BitTorrent"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Firefox3 Cookie"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"GZip"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"HTTPS"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Message Digest"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Metalink"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"XML-RPC"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"SFTP")),(0,n.kt)("p",{parentName:"blockquote"},"\u5355\u670d\u52a1\u5668\u7ebf\u7a0b\u6570\u6700\u5927\u503c\u65e0\u4e0a\u9650\uff08\u5df2\u7834##\u89e3\u7ebf\u7a0b\u6570\u9650\u5236\uff09"),(0,n.kt)("p",{parentName:"blockquote"},"\u9632\u6389\u7ebf\u7a0b\u4f18\u5316"),(0,n.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017\u4f18\u5316"),(0,n.kt)("p",{parentName:"blockquote"},"\u8bfb\u5199\u6027\u80fd\u4f18\u5316"),(0,n.kt)("p",{parentName:"blockquote"},"\u6700\u65b0\u4f9d\u8d56\u5e93\uff0c\u4e0b\u8f7d\u66f4\u5b89\u5168\u3001\u7a33\u5b9a\u3001\u5feb\u901f"),(0,n.kt)("p",{parentName:"blockquote"},"\u6301\u7eed\u66f4\u65b0\u6700\u65b0\u7248\u672c"),(0,n.kt)("p",{parentName:"blockquote"},"\u652f\u6301\u4e0e RCLONE \u8054\u52a8"),(0,n.kt)("p",{parentName:"blockquote"},"\u81ea\u52a8\u4e0a\u4f20 OneDrive \u3001Google Drive \u7b49\u7f51\u76d8"),(0,n.kt)("p",{parentName:"blockquote"},"\u767e\u5ea6\u7f51\u76d8\u8f6c\u5b58\u5230\u5176\u5b83\u7f51\u76d8"),(0,n.kt)("p",{parentName:"blockquote"},"\u591a\u7f51\u76d8\u81ea\u7531\u9009\u62e9"),(0,n.kt)("p",{parentName:"blockquote"},"\u652f\u6301\u65b0\u4e00\u4ee3\u4e92\u8054\u7f51\u534f\u8bae IPv6"),(0,n.kt)("p",{parentName:"blockquote"},"\u4e0b\u8f7d\u5b8c\u6210\u81ea\u52a8\u79fb\u52a8\u6587\u4ef6\u5230\u6307\u5b9a\u76ee\u5f55\uff08\u6587\u4ef6\u81ea\u52a8\u5f52\u6863/\u5206\u7c7b\uff09"),(0,n.kt)("p",{parentName:"blockquote"},"\u5b9a\u65f6\u81ea\u52a8\u66f4\u65b0 BT tracker \u5217\u8868\uff08\u65e0\u611f\u77e5\u3001\u65e0\u91cd\u542f\uff09\uff0c\u4fdd\u6301 BT \u4e0b\u8f7d\u9ad8\u901f\u7387"),(0,n.kt)("p",{parentName:"blockquote"},"\u7528\u6237\u6587\u4ef6\u6743\u9650\u81ea\u52a8\u914d\u7f6e\u529f\u80fd"),(0,n.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u6587\u4ef6\u6301\u4e45\u5316\uff0c\u652f\u6301\u4f7f\u7528 watchtower \u66f4\u65b0\u5bb9\u5668\u3002"),(0,n.kt)("p",{parentName:"blockquote"},"\u6781\u7b80\u8bbe\u8ba1\uff0c\u4e13\u6ce8\u4e0b\u8f7d\uff0c\u7b80\u5355\u6613\u7528\uff0c\u5c11\u5373\u662f\u591a\u3002")),(0,n.kt)("h2",{id:"\u4e8caria2-pro-docker\u5b89\u88c5"},"\u4e8c\u3001Aria2 Pro Docker\u5b89\u88c5"),(0,n.kt)("p",null,"2.1 Docker\u73af\u5883"),(0,n.kt)("p",null,"\u53c2\u8003 ",(0,n.kt)("strong",{parentName:"p"},"Docker\u5b89\u88c5\u4e0e\u90e8\u7f72")),(0,n.kt)("p",null,"2.3 Aria2 Pro\u5b89\u88c5"),(0,n.kt)("p",null,"\u6700\u57fa\u672c\u7684\u542f\u52a8\u547d\u4ee4\u5982\u4e0b\uff0c\u4f60\u53ea\u9700\u8981\u5b8c\u6574\u66ff\u6362 ",(0,n.kt)("inlineCode",{parentName:"p"},"<TOKEN>"),"\u5b57\u6bb5(RPC\u5bc6\u94a5)\u5373\u53ef\u542f\u52a8\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d \\\n    --name aria2-pro \\\n    --restart unless-stopped \\\n    --log-opt max-size=1m \\\n    --network host \\\n    -e PUID=$UID \\\n    -e PGID=$GID \\\n    -e RPC_SECRET=<TOKEN> \\\n    -e RPC_PORT=6800 \\\n    -e LISTEN_PORT=6888 \\\n    -v $PWD/aria2-config:/config \\\n    -v $PWD/aria2-downloads:/downloads \\\n    p3terx/aria2-pro\n")),(0,n.kt)("p",null,"\u914d\u7f6e\u672c\u673a\u9632\u706b\u5899\u5f00\u653e\u5fc5\u8981\u7684\u5165\u7ad9\u7aef\u53e3\uff0c\u5185\u7f51\u673a\u5668\u5728\u8def\u7531\u5668\u8bbe\u7f6e\u7aef\u53e3\u8f6c\u53d1\u5230\u76f8\u540c\u7aef\u53e3\u3002"),(0,n.kt)("h3",{id:"24-\u5b89\u88c5ariang"},"2.4 \u5b89\u88c5AriaNg"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"docker\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/p3terx/ariang"},"https://hub.docker.com/r/p3terx/ariang"))),(0,n.kt)("p",null,"\u4f7f\u7528\u4f60\u559c\u6b22\u7684 WebUI \u6216 App \u8fdb\u884c\u8fde\u63a5\uff0c\u5f3a\u70c8\u63a8\u8350 AriaNg\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff1a",(0,n.kt)("a",{parentName:"p",href:"http://ariang.mayswind.net/latest%EF%BC%8C%E6%88%96%E8%80%85%E7%9B%B4%E6%8E%A5%E7%94%A8Docker%E5%9C%A8VPS%E4%B8%8A%E5%AE%89%E8%A3%85AriaNg%EF%BC%9A"},"http://ariang.mayswind.net/latest\uff0c\u6216\u8005\u76f4\u63a5\u7528Docker\u5728VPS\u4e0a\u5b89\u88c5AriaNg\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d \\\n    --name ariang \\\n    --log-opt max-size=1m \\\n    --restart unless-stopped \\\n    -p 6880:6880 \\\n    p3terx/ariang\n")),(0,n.kt)("h2",{id:"\u4e09aria2-pro-docker\u4f7f\u7528"},"\u4e09\u3001Aria2 Pro Docker\u4f7f\u7528"),(0,n.kt)("h3",{id:"31-ariang\u914d\u7f6e"},"3.1 AriaNg\u914d\u7f6e"),(0,n.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u73b0\u5728\u6253\u5f00http://ip:6880\u8bbf\u95eeAriaNg\u7684web\u7ba1\u7406\u754c\u9762\uff0c\u5728AriaNg\u8bbe\u7f6e\u4e2dRPC\u586b\u5165\u4f60\u7684\u5bc6\u94a5\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_04.png"},(0,n.kt)("img",{parentName:"a",src:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_04-680x366.png",alt:"Aria2 Pro Docker\u8bbe\u7f6e\u5bc6\u94a5"}))),(0,n.kt)("p",null,"\u786e\u4fdd\u4f60\u7684Aria2\u7684\u8fde\u63a5\u72b6\u6001\u4e3a\u6b63\u5e38\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_05.png"},(0,n.kt)("img",{parentName:"a",src:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_05-680x366.png",alt:"Aria2 Pro Docker\u8fde\u63a5\u72b6\u6001"}))),(0,n.kt)("h3",{id:"32-aria2\u79bb\u7ebf\u4e0b\u8f7d"},"3.2 Aria2\u79bb\u7ebf\u4e0b\u8f7d"),(0,n.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5728AriaNg\u65b0\u5efa\u79bb\u7ebf\u4e0b\u8f7d\u4e86\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_06.png"},(0,n.kt)("img",{parentName:"a",src:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_06-680x366.png",alt:"Aria2 Pro Docker\u6253\u5f00\u4e0b\u8f7d"}))),(0,n.kt)("p",null,"\u53d7\u76ca\u4e8e\u4e3b\u673a\u7684\u5e26\u5bbd\u7684\u4f18\u52bf\uff0cAria2\u79bb\u7ebf\u4e0b\u8f7d\u901f\u5ea6\u8fd8\u662f\u975e\u5e38\u5feb\u7684\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_07.png"},(0,n.kt)("img",{parentName:"a",src:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_07.png",alt:"Aria2 Pro Docker\u4e0b\u8f7d\u901f\u5ea6"}))),(0,n.kt)("h3",{id:"33-\u4fee\u6539\u4e0b\u8f7d\u8def\u5f84"},"3.3 \u4fee\u6539\u4e0b\u8f7d\u8def\u5f84"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u7684Aria2 Pro Docker\u4e0b\u8f7d\u8def\u5f84\u662f\u5728\u4ee5\u4e0b\u8def\u5f84\uff1a"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_08.png"},(0,n.kt)("img",{parentName:"a",src:"https://wzfou.cdn.bcebos.com/wp-content/uploads/2022/07/Aria2-Pro-Docker_08-680x366.png",alt:"Aria2 Pro Docker\u4e0b\u8f7d\u8def\u5f84"}))),(0,n.kt)("p",null,"\u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u81ea\u5df1\u4fee\u6539\u53c2\u6570\u5982\u4e0b\uff1a"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"-v $PWD/aria2-config:/config")," \u2013 \u914d\u7f6e\u76ee\u5f55\u6620\u5c04\uff0c\u914d\u7f6e\u6587\u4ef6\u6301\u4e45\u5316\u3002\u5de6\u8fb9\u4e3a\u5bbf\u4e3b\u673a\u8def\u5f84\u4f9b\u81ea\u5b9a\u4e49\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u6709\u4e2d\u6587\u3001\u4e0d\u8981\u6df7\u7528\u914d\u7f6e\u6587\u4ef6\uff0c\u9996\u6b21\u4f7f\u7528\u8bf7\u786e\u4fdd\u76ee\u5f55\u4e3a\u7a7a\u3002")),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"-v $PWD/aria2-downloads:/downloads")," \u2013 \u4e0b\u8f7d\u76ee\u5f55\u6620\u5c04\u3002\u5de6\u8fb9\u4e3a\u5bbf\u4e3b\u673a\u8def\u5f84\u4f9b\u81ea\u5b9a\u4e49\uff0c ",(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u6709\u4e2d\u6587")," \u3002"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"-e SPECIAL_MODE=move")," \u2013 \u5f00\u542f",(0,n.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u81ea\u52a8\u5f52\u6863/\u5206\u7c7b"),"\u529f\u80fd\uff0c\u5373\u5728\u6587\u4ef6\u4e0b\u8f7d\u5b8c\u6210\u540e\u628a\u6587\u4ef6\u79fb\u52a8\u5230\u6307\u5b9a\u76ee\u5f55\u3002\u9ed8\u8ba4\u79fb\u52a8\u5230\u4e0b\u8f7d\u76ee\u5f55\u4e0b\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"completed"),"\u5b50\u76ee\u5f55\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"TIPS:")," \u6ce8\u610f\u786e\u8ba4\u76ee\u5f55\u662f\u5426\u5b58\u5728\u3001\u6743\u9650\u662f\u5426\u6b63\u786e\u3002")),(0,n.kt)("h3",{id:"35-bt\u4e0ept\u8bbe\u7f6e"},"3.5 BT\u4e0ePT\u8bbe\u7f6e"),(0,n.kt)("p",null,"BT\u548cPT\u4e0b\u8f7d\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\u5982\u4e0b\uff1a"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"-e UPDATE_TRACKERS=false")," \u2013 \u7981\u7528\u81ea\u52a8\u66f4\u65b0 BT tracker \u3002 ",(0,n.kt)("strong",{parentName:"p"},"PT \u4e0b\u8f7d\u548c\u60f3\u624b\u52a8\u586b\u5199\u8bbe\u7f6e BT tracker \u9700\u6c42\u5fc5\u987b\u7981\u7528")," \u3002"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"-e CUSTOM_TRACKER_URL=<URL>"),"\uff1a\u81ea\u5b9a\u4e49 BT tracker \u5217\u8868\u83b7\u53d6\u94fe\u63a5\uff0c\u591a\u4e2a\u94fe\u63a5\u53ef\u4ee5\u7528\u534a\u89d2\u9017\u53f7(",(0,n.kt)("inlineCode",{parentName:"p"},","),")\u8fdb\u884c\u5206\u9694\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5219\u9ed8\u8ba4\u4ece ",(0,n.kt)("inlineCode",{parentName:"p"},"https://trackerslist.com/all_aria2.txt"),"\u8fdb\u884c\u83b7\u53d6\u3002"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"-e UMASK_SET=022")," \u2013 umask \u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u503c ",(0,n.kt)("inlineCode",{parentName:"p"},"022"),"\u3002\u51b3\u5b9a\u4f60\u4e0b\u8f7d\u4e0b\u6765\u7684\u6587\u4ef6\u7684\u6743\u9650\uff0c\u5bf9\u6743\u9650\u4e0d\u654f\u611f\u6216\u4e0d\u7406\u89e3\u76f4\u63a5\u586b\u5199 ",(0,n.kt)("inlineCode",{parentName:"p"},"000"),"\u3002"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"-e TZ=<TIME_ZONE>")," \u2013 \u65f6\u533a\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u65f6\u533a\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"Asia/Shanghai"),"\uff0c\u82e5\u65e0\u7279\u6b8a\u9700\u6c42\u65e0\u9700\u81ea\u5b9a\u4e49\u3002")),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u540c\u65f6\u4f7f\u7528 BT \u4e0e PT\u3002")," \u4f7f\u7528 Aria2 Pro \u955c\u50cf\u521b\u5efa\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"aria2-bt"),"\u7684\u5bb9\u5668 RPC \u7aef\u53e3\u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"6801"),"\uff0cBT \u7aef\u53e3\u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"6999"),"\uff0c\u914d\u7f6e\u76ee\u5f55\u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"~/aria2-bt-config"),"\uff0c\u4e0b\u8f7d\u76ee\u5f55\u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"~/bt-downloads"),"\u3002\u542f\u52a8\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -d \\\n    --name aria2-bt \\\n    --restart unless-stopped \\\n    --log-opt max-size=1m \\\n    --network host \\\n    -e PUID=$UID \\\n    -e PGID=$GID \\\n    -e RPC_SECRET=P3TERX \\\n    -e RPC_PORT=6801 \\\n    -e LISTEN_PORT=6999 \\\n    -v ~/aria2-bt-config:/config \\\n    -v ~/bt-downloads:/downloads \\\n    p3terx/aria2-pro\n")),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u7684Aria2 \u65e0\u6cd5\u4e0b\u8f7d\u78c1\u529b\u94fe\u63a5\u3001BT\u79cd\u5b50\u548c\u901f\u5ea6\u6162\uff0c\u5efa\u8bae\u6253\u5f00",(0,n.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u66f4\u65b0 BT-Tracker")," \u529f\u80fd\u5373\u53ef\uff0cAria2 Pro \u5219\u662f\u9ed8\u8ba4\u5f00\u542f\u7684\u3002\u7136\u540e\u518d\u770b\u4e00\u4e0b\u7aef\u53e3\u6709\u6ca1\u6709\u5f00\u653e\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"# BT\u76d1\u542c\u7aef\u53e3(TCP)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# BT\u76d1\u542c\u7aef\u53e3(TCP)\nlisten-port=51413\n# DHT\u7f51\u7edc\u76d1\u542c\u7aef\u53e3(UDP)\ndht-listen-port=51413\n")))}u.isMDXComponent=!0}}]);