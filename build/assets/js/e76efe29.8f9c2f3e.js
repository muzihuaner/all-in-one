"use strict";(self.webpackChunkallinone=self.webpackChunkallinone||[]).push([[7320],{5866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"applications/docker-applications/Watchtower","title":"Watchtower","description":"Watchtower \u662f\u4e00\u4e2a\u7528\u4e8e\u81ea\u52a8\u66f4\u65b0 Docker \u5bb9\u5668\u7684\u5f00\u6e90\u5de5\u5177\u3002\u5b83\u80fd\u591f\u68c0\u6d4b\u60a8\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u662f\u5426\u6709\u65b0\u7248\u672c\u53ef\u7528\uff0c\u5e76\u81ea\u52a8\u66f4\u65b0\u8fd9\u4e9b\u5bb9\u5668\uff0c\u4ece\u800c\u5e2e\u52a9\u60a8\u4fdd\u6301\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f\u7684\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027\u3002","source":"@site/docs/applications/docker-applications/Watchtower.md","sourceDirName":"applications/docker-applications","slug":"/applications/docker-applications/Watchtower","permalink":"/docs/applications/docker-applications/Watchtower","draft":false,"unlisted":false,"editUrl":"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/docker-applications/Watchtower.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Uptime Kuma","permalink":"/docs/applications/docker-applications/UptimeKuma"},"next":{"title":"Alist","permalink":"/docs/applications/docker-applications/alist"}}');var c=r(4848),o=r(8453);const s={},i="Watchtower",a={},l=[{value:"Docker\u90e8\u7f72\u547d\u4ee4",id:"docker\u90e8\u7f72\u547d\u4ee4",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"watchtower",children:"Watchtower"})}),"\n",(0,c.jsx)(t.p,{children:"Watchtower \u662f\u4e00\u4e2a\u7528\u4e8e\u81ea\u52a8\u66f4\u65b0 Docker \u5bb9\u5668\u7684\u5f00\u6e90\u5de5\u5177\u3002\u5b83\u80fd\u591f\u68c0\u6d4b\u60a8\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u662f\u5426\u6709\u65b0\u7248\u672c\u53ef\u7528\uff0c\u5e76\u81ea\u52a8\u66f4\u65b0\u8fd9\u4e9b\u5bb9\u5668\uff0c\u4ece\u800c\u5e2e\u52a9\u60a8\u4fdd\u6301\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f\u7684\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027\u3002"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"\u4e3b\u8981\u529f\u80fd\uff1a"})}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:"\u81ea\u52a8\u5bb9\u5668\u66f4\u65b0"}),"\uff1aWatchtower \u53ef\u4ee5\u5b9a\u671f\u68c0\u67e5 Docker Hub \u6216\u8005\u5176\u4ed6\u5bb9\u5668\u4ed3\u5e93\u4e2d\u7684\u955c\u50cf\uff0c\u5982\u679c\u53d1\u73b0\u65b0\u7248\u672c\uff0c\u5b83\u5c06\u81ea\u52a8\u4e0b\u8f7d\u65b0\u7684\u955c\u50cf\u5e76\u66f4\u65b0\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u3002"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:"\u5b9a\u671f\u68c0\u67e5"}),"\uff1a\u60a8\u53ef\u4ee5\u914d\u7f6e Watchtower \u4ee5\u5b9a\u671f\u68c0\u67e5\u5bb9\u5668\uff0c\u4ee5\u786e\u4fdd\u5bb9\u5668\u59cb\u7ec8\u5904\u4e8e\u6700\u65b0\u72b6\u6001\u3002\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u68c0\u67e5\u7684\u65f6\u95f4\u95f4\u9694\u3002"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:"\u90ae\u4ef6\u901a\u77e5"}),"\uff1aWatchtower \u53ef\u4ee5\u914d\u7f6e\u4e3a\u5728\u66f4\u65b0\u5bb9\u5668\u65f6\u53d1\u9001\u90ae\u4ef6\u901a\u77e5\uff0c\u4ee5\u4fbf\u60a8\u53ca\u65f6\u4e86\u89e3\u5bb9\u5668\u7684\u53d8\u5316\u60c5\u51b5\u3002"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:"\u7075\u6d3b\u6027"}),"\uff1a\u60a8\u53ef\u4ee5\u9009\u62e9\u6027\u5730\u6392\u9664\u67d0\u4e9b\u5bb9\u5668\u4e0d\u53d7\u81ea\u52a8\u66f4\u65b0\u7684\u5f71\u54cd\uff0c\u4ee5\u6ee1\u8db3\u7279\u5b9a\u9700\u6c42\u3002"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:"\u65e5\u5fd7\u8bb0\u5f55"}),"\uff1aWatchtower \u4f1a\u8bb0\u5f55\u5bb9\u5668\u66f4\u65b0\u7684\u65e5\u5fd7\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u968f\u65f6\u67e5\u770b\u66f4\u65b0\u5386\u53f2\u3002"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:"\u652f\u6301\u591a\u79cd\u5bb9\u5668\u4ed3\u5e93"}),"\uff1a\u9664\u4e86 Docker Hub\uff0cWatchtower \u8fd8\u652f\u6301\u5176\u4ed6\u5bb9\u5668\u4ed3\u5e93\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u559c\u6b22\u7684\u5bb9\u5668\u955c\u50cf\u3002"]}),"\n"]}),"\n",(0,c.jsx)(t.h3,{id:"docker\u90e8\u7f72\u547d\u4ee4",children:"Docker\u90e8\u7f72\u547d\u4ee4"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:"docker run -d \\\r\n    --name watchtower \\\r\n    -v /var/run/docker.sock:/var/run/docker.sock \\\r\n    containrrr/watchtower\n"})}),"\n",(0,c.jsxs)(t.p,{children:["\u5b98\u65b9\u6587\u6863\uff1a",(0,c.jsx)(t.a,{href:"https://containrrr.dev/watchtower/",children:"https://containrrr.dev/watchtower/"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const c={},o=n.createContext(c);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);