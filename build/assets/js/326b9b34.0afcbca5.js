"use strict";(self.webpackChunkallinone=self.webpackChunkallinone||[]).push([[6348],{1954:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"applications/Cockpit","title":"Cockpit","description":"Cockpit \u662f RedHat \u7ef4\u62a4\u7684 Linux \u670d\u52a1\u5668\u9762\u677f\u5de5\u5177\u3002\u5b83\u5177\u5907\u5f88\u5f3a\u7684\u5f00\u653e\u80fd\u529b\uff0c\u53ef\u4ee5\u96c6\u6210\u5404\u79cd\u5e94\u7528\u5230\u9762\u677f\u7684\u83dc\u5355\u4e0a\uff0c\u5982\u679c\u5584\u4e8e\u4f7f\u7528\u5b83\uff0c\u4f60\u4f1a\u53d1\u73b0\u5b83\u5c31\u662f\u5bb9\u5668\u65f6\u4ee3\u6700\u597d\u7684\u9762\u677f\u4e4b\u4e00\u3002","source":"@site/docs/applications/Cockpit.md","sourceDirName":"applications","slug":"/applications/Cockpit","permalink":"/docs/applications/Cockpit","draft":false,"unlisted":false,"editUrl":"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/Cockpit.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Cloudflared","permalink":"/docs/applications/Cloudflared"},"next":{"title":"Frp","permalink":"/docs/applications/Frp"}}');var i=c(4848),s=c(8453);const r={},o="Cockpit",l={},d=[{value:"CentOS",id:"centos",level:3},{value:"Debian",id:"debian",level:3},{value:"Ubuntu",id:"ubuntu",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cockpit",children:"Cockpit"})}),"\n",(0,i.jsx)(n.p,{children:"Cockpit \u662f RedHat \u7ef4\u62a4\u7684 Linux \u670d\u52a1\u5668\u9762\u677f\u5de5\u5177\u3002\u5b83\u5177\u5907\u5f88\u5f3a\u7684\u5f00\u653e\u80fd\u529b\uff0c\u53ef\u4ee5\u96c6\u6210\u5404\u79cd\u5e94\u7528\u5230\u9762\u677f\u7684\u83dc\u5355\u4e0a\uff0c\u5982\u679c\u5584\u4e8e\u4f7f\u7528\u5b83\uff0c\u4f60\u4f1a\u53d1\u73b0\u5b83\u5c31\u662f\u5bb9\u5668\u65f6\u4ee3\u6700\u597d\u7684\u9762\u677f\u4e4b\u4e00\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5b98\u65b9\u7f51\u7ad9\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://cockpit-project.org/",children:"http://cockpit-project.org/"})}),"\n",(0,i.jsx)(n.h3,{id:"centos",children:"CentOS"}),"\n",(0,i.jsx)(n.p,{children:"Cockpit \u652f\u6301 CentOS 7\u4ee5\u53ca\u4e4b\u540e\u7684\u7248\u672c:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5b89\u88c5cockpit:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo yum install cockpit\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u542f\u52a8 cockpit:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo systemctl enable --now cockpit.socket\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6253\u5f00\u9632\u706b\u5899\uff08\u975e\u5fc5\u987b\uff09:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo firewall-cmd --permanent --zone=public --add-service=cockpit\r\nsudo firewall-cmd --reload\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"debian",children:"Debian"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e9b\u547d\u4ee4\u9700\u8981\u50cf ",(0,i.jsx)(n.code,{children:"bash"})," \u8fd9\u6837\u7684 POSIX \u517c\u5bb9 shell\u3002\u5bf9\u4e8e ",(0,i.jsx)(n.code,{children:"fish"})," \u7b49\u5176\u4ed6 shell\uff0c\u6682\u65f6\u8fd0\u884c ",(0,i.jsx)(n.code,{children:"bash -i"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ece\u7248\u672c 10 (Buster) \u5f00\u59cb\uff0cCockpit \u5728 Debian \u4e2d\u53ef\u7528\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8981\u83b7\u53d6\u6700\u65b0\u7248\u672c\uff0c\u6211\u4eec\u5efa\u8bae\u542f\u7528 ",(0,i.jsx)(n.a,{href:"https://backports.debian.org/",children:"backports \u5b58\u50a8\u5e93"}),"\uff08\u4ee5 root \u8eab\u4efd\uff09\uff1a","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'. /etc/os-release\r\necho "deb http://deb.debian.org/debian ${VERSION_CODENAME}-backports main" > \\\r\n    /etc/apt/sources.list.d/backports.list\r\napt update\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b89\u88c5\u6216\u8005\u66f4\u65b0\u5b89\u88c5\u5305:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt install -t ${VERSION_CODENAME}-backports cockpit\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u66f4\u65b0\u4e0e Cockpit \u76f8\u5173\u7684\u5305\u548c\u4efb\u4f55\u4f9d\u8d56\u9879\u65f6\uff0c\u8bf7\u786e\u4fdd\u4f7f\u7528\u4e0a\u9762\u7684\u201c-t ...-backports\u201d\uff0c\u4ee5\u4fbf\u5305\u542b\u53cd\u5411\u7aef\u53e3\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"ubuntu",children:"Ubuntu"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e9b\u547d\u4ee4\u9700\u8981\u50cf ",(0,i.jsx)(n.code,{children:"bash"})," \u8fd9\u6837\u7684 POSIX \u517c\u5bb9 shell\u3002\u5bf9\u4e8e ",(0,i.jsx)(n.code,{children:"fish"})," \u7b49\u5176\u4ed6 shell\uff0c\u6682\u65f6\u8fd0\u884c ",(0,i.jsx)(n.code,{children:"bash -i"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Cockpit \u5728 Ubuntu 17.04 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\u53ef\u7528\uff0c",(0,i.jsx)(n.a,{href:"https://help.ubuntu.com/community/UbuntuBackports",children:"\u4f5c\u4e3a\u5b98\u65b9 backport"})," \u9002\u7528\u4e8e 16.04 LTS \u53ca\u66f4\u9ad8\u7248\u672c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u5efa\u8bae\u4ece backports \u5b89\u88c5\u6216\u66f4\u65b0\u6700\u65b0\u7248\u672c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u542f\u7528\u6b64\u5b58\u50a8\u5e93\uff0c\u4f46\u5982\u679c\u60a8\u81ea\u5b9a\u4e49\u4e86 apt \u6e90\uff0c\u5219\u53ef\u80fd\u9700\u8981",(0,i.jsx)(n.a,{href:"https://help.ubuntu.com/community/UbuntuBackports#Enabling_Backports",children:"\u624b\u52a8\u542f\u7528\u5b83\u4eec"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:". /etc/os-release\r\nsudo apt install -t ${VERSION_CODENAME}-backports cockpit\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Linux Mint \u4e0a\uff0c\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"UBUNTU_CODENAME"})," \u800c\u4e0d\u662f ",(0,i.jsx)(n.code,{children:"VERSION_CODENAME"})," \uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt install -t ${UBUNTU_CODENAME}-backports cockpit\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u66f4\u65b0\u4e0e Cockpit \u76f8\u5173\u7684\u5305\u548c\u4efb\u4f55\u4f9d\u8d56\u9879\u65f6\uff0c\u8bf7\u786e\u4fdd\u4f7f\u7528\u4e0a\u9762\u7684\u201c-t ...-backports\u201d\uff0c\u4ee5\u4fbf\u5305\u542b\u53cd\u5411\u7aef\u53e3\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>o});var t=c(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);