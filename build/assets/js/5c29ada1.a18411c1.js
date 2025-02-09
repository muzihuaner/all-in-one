"use strict";(self.webpackChunkall_in_one=self.webpackChunkall_in_one||[]).push([[6330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:l,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={},o="Portainer",p={unversionedId:"applications/docker-applications/Portainer",id:"applications/docker-applications/Portainer",title:"Portainer",description:"Portainer\u662fDocker\u7684\u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177\uff0c\u63d0\u4f9b\u72b6\u6001\u663e\u793a\u9762\u677f\u3001\u5e94\u7528\u6a21\u677f\u5feb\u901f\u90e8\u7f72\u3001\u5bb9\u5668\u955c\u50cf\u7f51\u7edc\u6570\u636e\u5377\u7684\u57fa\u672c\u64cd\u4f5c(\u5305\u62ec\u4e0a\u4f20\u4e0b\u8f7d\u955c\u50cf\uff0c\u521b\u5efa\u5bb9\u5668\u7b49\u64cd\u4f5c)\u3001\u4e8b\u4ef6\u65e5\u5fd7\u663e\u793a\u3001\u5bb9\u5668\u63a7\u5236\u53f0\u64cd\u4f5c\u3001Swarm\u96c6\u7fa4\u548c\u670d\u52a1\u7b49\u96c6\u4e2d\u7ba1\u7406\u548c\u64cd\u4f5c\u3001\u767b\u5f55\u7528\u6237\u7ba1\u7406\u548c\u63a7\u5236\u7b49\u529f\u80fd\u3002\u529f\u80fd\u5341\u5206\u5168\u9762\u3002",source:"@site/docs/applications/docker-applications/Portainer.md",sourceDirName:"applications/docker-applications",slug:"/applications/docker-applications/Portainer",permalink:"/docs/applications/docker-applications/Portainer",draft:!1,editUrl:"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/docker-applications/Portainer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"openspeedtest",permalink:"/docs/applications/docker-applications/OpenSpeedTest"},next:{title:"Syncthing",permalink:"/docs/applications/docker-applications/Syncthing"}},i={},c=[{value:"2.1 \u4e0b\u8f7d\u4e0e\u5b89\u88c5",id:"21-\u4e0b\u8f7d\u4e0e\u5b89\u88c5",level:3},{value:"2.2 \u542f\u52a8\u8fd0\u884c",id:"22-\u542f\u52a8\u8fd0\u884c",level:3},{value:"2.3 \u6253\u5f00\u7ba1\u7406\u5de5\u5177",id:"23-\u6253\u5f00\u7ba1\u7406\u5de5\u5177",level:3},{value:"2.4 \u9996\u6b21\u767b\u9646\u9700\u8981\u6ce8\u518c\u7528\u6237\uff0c\u7ed9admin\u7528\u6237\u8bbe\u7f6e\u5bc6\u7801",id:"24-\u9996\u6b21\u767b\u9646\u9700\u8981\u6ce8\u518c\u7528\u6237\u7ed9admin\u7528\u6237\u8bbe\u7f6e\u5bc6\u7801",level:3},{value:"2.5 \u8fde\u63a5\u5230\u672c\u5730",id:"25-\u8fde\u63a5\u5230\u672c\u5730",level:3},{value:"2.6 \u5bf9\u955c\u50cf\u7684\u7ba1\u7406",id:"26-\u5bf9\u955c\u50cf\u7684\u7ba1\u7406",level:3},{value:"2.7 \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7ba1\u7406",id:"27-\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7ba1\u7406",level:3},{value:"2.8 \u5bf9\u5bb9\u5668\u7684\u7ba1\u7406",id:"28-\u5bf9\u5bb9\u5668\u7684\u7ba1\u7406",level:3},{value:"2.8.1 \u521b\u5efa\u5bb9\u5668",id:"281-\u521b\u5efa\u5bb9\u5668",level:4},{value:"2.8.2 \u5bb9\u5668\u7ba1\u7406",id:"282-\u5bb9\u5668\u7ba1\u7406",level:4},{value:"2.8.3 \u5bf9\u67d0\u5bb9\u5668\u8fdb\u884c\u4e1a\u52a1\u64cd\u4f5c",id:"283-\u5bf9\u67d0\u5bb9\u5668\u8fdb\u884c\u4e1a\u52a1\u64cd\u4f5c",level:4},{value:"2.8.3.1 \u65e5\u5fd7\u67e5\u770b",id:"2831-\u65e5\u5fd7\u67e5\u770b",level:5},{value:"2.8.3.2 \u5bf9\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528\u7edf\u8ba1",id:"2832-\u5bf9\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528\u7edf\u8ba1",level:5},{value:"2.8.3.3 \u547d\u4ee4\u7a97\u53e3\u4f7f\u7528",id:"2833-\u547d\u4ee4\u7a97\u53e3\u4f7f\u7528",level:5}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"portainer"},"Portainer"),(0,l.kt)("p",null,"Portainer\u662fDocker\u7684\u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177\uff0c\u63d0\u4f9b\u72b6\u6001\u663e\u793a\u9762\u677f\u3001\u5e94\u7528\u6a21\u677f\u5feb\u901f\u90e8\u7f72\u3001\u5bb9\u5668\u955c\u50cf\u7f51\u7edc\u6570\u636e\u5377\u7684\u57fa\u672c\u64cd\u4f5c(\u5305\u62ec\u4e0a\u4f20\u4e0b\u8f7d\u955c\u50cf\uff0c\u521b\u5efa\u5bb9\u5668\u7b49\u64cd\u4f5c)\u3001\u4e8b\u4ef6\u65e5\u5fd7\u663e\u793a\u3001\u5bb9\u5668\u63a7\u5236\u53f0\u64cd\u4f5c\u3001Swarm\u96c6\u7fa4\u548c\u670d\u52a1\u7b49\u96c6\u4e2d\u7ba1\u7406\u548c\u64cd\u4f5c\u3001\u767b\u5f55\u7528\u6237\u7ba1\u7406\u548c\u63a7\u5236\u7b49\u529f\u80fd\u3002\u529f\u80fd\u5341\u5206\u5168\u9762\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9879\u76ee\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/portainer/portainer"},"https://github.com/portainer/portainer"))),(0,l.kt)("h3",{id:"21-\u4e0b\u8f7d\u4e0e\u5b89\u88c5"},"2.1 \u4e0b\u8f7d\u4e0e\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n//docker\u62c9\u53d6\u955c\u50cf\ndocker pull portainer/portainer-ce:latest\n")),(0,l.kt)("h3",{id:"22-\u542f\u52a8\u8fd0\u884c"},"2.2 \u542f\u52a8\u8fd0\u884c"),(0,l.kt)("p",null,"\u5355\u673a\u8fd0\u884c\u6a21\u5f0f\uff0c\u76f4\u63a5\u8fd0\u884c\u5728\u5f53\u524d\u5bbf\u4e3b\u673a\u3002\u5e76\u5206\u914d9000\u7aef\u53e3."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker volume create portainer_data\n\ndocker run -d --name portainer -p 9000:9000 --restart=always \\\n     -v /var/run/docker.sock:/var/run/docker.sock \\\n     -v portainer_data:/data  portainer/portainer-ce\n")),(0,l.kt)("h3",{id:"23-\u6253\u5f00\u7ba1\u7406\u5de5\u5177"},"2.3 \u6253\u5f00\u7ba1\u7406\u5de5\u5177"),(0,l.kt)("p",null,"\u5bbf\u4e3b\u4e3b\u673aIP+9000\u7aef\u53e3\u5f00\u542f"),(0,l.kt)("h3",{id:"24-\u9996\u6b21\u767b\u9646\u9700\u8981\u6ce8\u518c\u7528\u6237\u7ed9admin\u7528\u6237\u8bbe\u7f6e\u5bc6\u7801"},"2.4 \u9996\u6b21\u767b\u9646\u9700\u8981\u6ce8\u518c\u7528\u6237\uff0c\u7ed9admin\u7528\u6237\u8bbe\u7f6e\u5bc6\u7801"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131025204-536015520.jpg",alt:null})),(0,l.kt)("h3",{id:"25-\u8fde\u63a5\u5230\u672c\u5730"},"2.5 \u8fde\u63a5\u5230\u672c\u5730"),(0,l.kt)("p",null,"\u5355\u673a\u7248\u8fd9\u91cc\u9009\u62e9local\u5373\u53ef\uff0c\u9009\u62e9\u5b8c\u6bd5\uff0c\u70b9\u51fbConnect\u5373\u53ef\u8fde\u63a5\u5230\u672c\u5730docker\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131032366-823671350.png",alt:null})),(0,l.kt)("h3",{id:"26-\u5bf9\u955c\u50cf\u7684\u7ba1\u7406"},"2.6 \u5bf9\u955c\u50cf\u7684\u7ba1\u7406"),(0,l.kt)("p",null,"\u53ef\u5bf9\u672c\u5730\u7684\u955c\u50cf\u5217\u8868\u505a\u65b9\u4fbf\u7684\u589e\u5220\u6539\u67e5\u3002\u5728\u955c\u50cf\u5217\u8868\u53ef\u4ee5\u76f4\u63a5\u4eceDockerHub, pull\u4e00\u4e2a\u955c\u50cf\uff0c\u53ef\u4ee5\u4ece\u8fdc\u7a0bpull\uff0c\u4e5f\u53ef\u4ee5\u4ece\u79c1\u6709\u5e93\u4e2dpull\u3002\u4ece\u79c1\u6709\u5e93\u4e2dpull\uff0c\u9700\u8981\u5c06\u79c1\u6709\u5e93\u7684\u5730\u5740\u63d0\u524d\u8fdb\u884c\u914d\u7f6e(Registries)\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131038504-75142072.jpg",alt:null})),(0,l.kt)("h3",{id:"27-\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7ba1\u7406"},"2.7 \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7ba1\u7406"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u5bf9gitlab\u6216\u8005\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u94fe\u63a5\u8bbe\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131046854-270447165.jpg",alt:null})),(0,l.kt)("h3",{id:"28-\u5bf9\u5bb9\u5668\u7684\u7ba1\u7406"},"2.8 \u5bf9\u5bb9\u5668\u7684\u7ba1\u7406"),(0,l.kt)("h4",{id:"281-\u521b\u5efa\u5bb9\u5668"},"2.8.1 \u521b\u5efa\u5bb9\u5668"),(0,l.kt)("p",null,"\u5355\u51fb\u5de6\u4fa7\u7684\u201cApp Templates\u201d\u6309\u94ae\u3002\u8fd9\u5c06\u663e\u793a\u4e00\u4e9b\u73b0\u6210\u7684\u53ef\u7528\u6a21\u677f\uff0c\u4f8b\u5982Nginx\uff0cHttpd\uff0cMySQl\uff0cWordPress\u7b49\u3002\u9009\u62e9\u8981\u90e8\u7f72\u7684\u5bb9\u5668\uff0c\u53ea\u9700\u5355\u51fb\u76f8\u5e94\u7684\u6a21\u677f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131053258-38547017.jpg",alt:null})),(0,l.kt)("h4",{id:"282-\u5bb9\u5668\u7ba1\u7406"},"2.8.2 \u5bb9\u5668\u7ba1\u7406"),(0,l.kt)("p",null,"\u5728\u6b64\u754c\u9762\u53ef\u4ee5\u5bf9\u6240\u6709\u5bb9\u5668\u8fdb\u884c\u589e\u5220\u6539\u67e5\u64cd\u4f5c\uff0c\u5e76\u4e14\u53ef\u4ee5\u5bf9\u5355\u4e2a\u5bb9\u5668\u6216\u8005\u6279\u91cf\u5bb9\u5668\u8fdb\u884c\u91cd\u542f\uff0c\u5f00\u59cb\uff0c\u505c\u6b62\uff0c\u5173\u95ed\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131101976-721867479.jpg",alt:null})),(0,l.kt)("h4",{id:"283-\u5bf9\u67d0\u5bb9\u5668\u8fdb\u884c\u4e1a\u52a1\u64cd\u4f5c"},"2.8.3 \u5bf9\u67d0\u5bb9\u5668\u8fdb\u884c\u4e1a\u52a1\u64cd\u4f5c"),(0,l.kt)("p",null,"\u5bf9\u67d0\u5bb9\u5668\u65e5\u5fd7\u67e5\u770b\uff0c\u547d\u4ee4\u884c\u8f93\u5165\uff0c\u72b6\u6001\u67e5\u770b\u7b49"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131108520-1561694222.jpg",alt:null})),(0,l.kt)("h5",{id:"2831-\u65e5\u5fd7\u67e5\u770b"},"2.8.3.1 \u65e5\u5fd7\u67e5\u770b"),(0,l.kt)("p",null,"portainer\u4f1a\u81ea\u52a8\u63d0\u53d6\u65e5\u5fd7\u6587\u4ef6\uff0c\u53ef\u5bf9\u67d0\u65e5\u5fd7\u622a\u53d6\u6700\u540e\u884c\u6570\uff0c\u5e76\u4e14\u5b9e\u65f6\u6253\u5370\u65e5\u5fd7"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131118444-601649670.jpg",alt:null})),(0,l.kt)("p",null,"\u5f88\u4eba\u6027\u5316\u7684\u4e00\u4e2a\u529f\u80fd\u662f\u80fd\u5bf9\u65e5\u5fd7\u8fdb\u884c\u641c\u7d22"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131124054-910277949.jpg",alt:null})),(0,l.kt)("h5",{id:"2832-\u5bf9\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528\u7edf\u8ba1"},"2.8.3.2 \u5bf9\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528\u7edf\u8ba1"),(0,l.kt)("p",null,"\u5bf9\u5bb9\u5668\u5e94\u7528\u7684CPU\u4f7f\u7528\uff0c\u5185\u5b58\u4f7f\u7528\u4ee5\u53ca\u7f51\u7edc\u4f7f\u7528\u60c5\u51b5\u8fdb\u884c\u7edf\u8ba1"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131131116-1142586838.jpg",alt:null})),(0,l.kt)("h5",{id:"2833-\u547d\u4ee4\u7a97\u53e3\u4f7f\u7528"},"2.8.3.3 \u547d\u4ee4\u7a97\u53e3\u4f7f\u7528"),(0,l.kt)("p",null,"\u6700\u65b9\u4fbf\u7684\u5c31\u662f\u4e0d\u7528\u518d\u767b\u5f55linux\uff0c\u76f4\u63a5\u57fa\u4e8e\u6d4f\u89c8\u5668\u5c31\u80fd\u767b\u5f55\u4efb\u4e00\u5bb9\u5668\u5185\u90e8\u7684\u547d\u4ee4\u884c\u505a\u914d\u7f6e\u7b49\u5176\u4ed6\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img2020.cnblogs.com/blog/1606616/202111/1606616-20211118131137604-377887786.jpg",alt:null})))}m.isMDXComponent=!0}}]);