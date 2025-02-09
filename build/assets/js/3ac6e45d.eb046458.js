"use strict";(self.webpackChunkallinone=self.webpackChunkallinone||[]).push([[576],{6928:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"applications/docker-applications/Emby","title":"Emby","description":"Emby\uff08\u539f\u540dMedia Browser\uff09\u662f\u4e00\u4e2a\u4e3b\u4ece\u5f0f\u67b6\u6784\u7684\u5a92\u4f53\u670d\u52a1\u5668\u8f6f\u4ef6\uff0c\u53ef\u4ee5\u7528\u6765\u6574\u7406\u670d\u52a1\u5668\u4e0a\u7684\u89c6\u9891\u548c\u97f3\u9891\uff0c\u5e76\u5c06\u97f3\u9891\u548c\u89c6\u9891\u6d41\u5f0f\u4f20\u8f93\u5230\u5ba2\u6237\u7aef\u8bbe\u5907\u3002Emby\u670d\u52a1\u5668\u7aef\u652f\u6301Microsoft Windows\u3001Linux\u3001MacOS\u3001FreeBSD\uff0c\u5ba2\u6237\u7aef\u652f\u6301HTML5\u7f51\u9875\uff0cAndroid\u548cIOS\u7b49\u79fb\u52a8\u64cd\u4f5c\u7cfb\u7edf\u3002","source":"@site/docs/applications/docker-applications/Emby.md","sourceDirName":"applications/docker-applications","slug":"/applications/docker-applications/Emby","permalink":"/docs/applications/docker-applications/Emby","draft":false,"unlisted":false,"editUrl":"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/docker-applications/Emby.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"AdGuardHome","permalink":"/docs/applications/docker-applications/AdGuard"},"next":{"title":"freshrss","permalink":"/docs/applications/docker-applications/FreshRSS"}}');var s=n(4848),i=n(8453);const o={},c="Emby",a={},p=[];function d(e){const r={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"emby",children:"Emby"})}),"\n",(0,s.jsx)(r.p,{children:"Emby\uff08\u539f\u540dMedia Browser\uff09\u662f\u4e00\u4e2a\u4e3b\u4ece\u5f0f\u67b6\u6784\u7684\u5a92\u4f53\u670d\u52a1\u5668\u8f6f\u4ef6\uff0c\u53ef\u4ee5\u7528\u6765\u6574\u7406\u670d\u52a1\u5668\u4e0a\u7684\u89c6\u9891\u548c\u97f3\u9891\uff0c\u5e76\u5c06\u97f3\u9891\u548c\u89c6\u9891\u6d41\u5f0f\u4f20\u8f93\u5230\u5ba2\u6237\u7aef\u8bbe\u5907\u3002Emby\u670d\u52a1\u5668\u7aef\u652f\u6301Microsoft Windows\u3001Linux\u3001MacOS\u3001FreeBSD\uff0c\u5ba2\u6237\u7aef\u652f\u6301HTML5\u7f51\u9875\uff0cAndroid\u548cIOS\u7b49\u79fb\u52a8\u64cd\u4f5c\u7cfb\u7edf\u3002"}),"\n",(0,s.jsx)(r.p,{children:"Emby\u540c\u6837\u652f\u6301Roku\u3001Amazon Fire TV\u3001Chromecast\u548cApple TV\u7b49\u6d41\u5a92\u4f53\u8bbe\u5907\uff0cLG\u667a\u80fd\u7535\u89c6\u548c\u4e09\u661f\u667a\u80fd\u7535\u89c6\u7b49\u667a\u80fd\u7535\u89c6\uff0c\u4ee5\u53caXbox 360\u548cXbox One\u7b49\u6e38\u620f\u673a\u3002Emby\u81ea\u5e26\u4e86\u975e\u5e38\u591a\u7684\u63d2\u4ef6\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u642d\u5efa\u4e00\u4e2a\u81ea\u5df1\u7684\u5f71\u89c6\u5a92\u4f53\u5e93\uff0c\u5b9e\u73b0\u5728\u7ebf\u64ad\u653e\u4e0e\u89c2\u770b\u89c6\u9891\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u5b98\u65b9\u7f51\u7ad9\uff1a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://emby.media/",children:"https://emby.media/"})}),"\n",(0,s.jsx)(r.p,{children:"\u5b98\u65b9\u7248\uff1a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://hub.docker.com/r/emby/embyserver/",children:"https://hub.docker.com/r/emby/embyserver/"})}),"\n",(0,s.jsx)(r.p,{children:"\u5b89\u88c5\u6559\u7a0b\uff1a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://post.smzdm.com/p/ax0r7pe9/",children:"https://post.smzdm.com/p/ax0r7pe9/"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://mrchou.com/internet/how-to-set-emby-by-docker.html",children:"https://mrchou.com/internet/how-to-set-emby-by-docker.html"})}),"\n",(0,s.jsx)(r.p,{children:"\u5f00\u5fc3\u7248\uff1a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://hub.docker.com/r/amilys/embyserver",children:"https://hub.docker.com/r/amilys/embyserver"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"docker run -d --privileged \\\r\n    --name=embyserver \\ #\u540d\u79f0\r\n    --network host \\ #\u7f51\u7edc\u6a21\u5f0f\r\n    -v /docker/emby_happy_amilys:/config \\ #\u914d\u7f6e\u6587\u4ef6\r\n    -v /data:/data \\ #\u5a92\u4f53\u6570\u636e\u76ee\u5f55, \u7535\u5f71, \u7535\u89c6\u5267\u7b49\r\n    --device=/dev/dri/ \\ #\u6838\u663e\r\n    --gpus=all \\ #\u7ed9\u5bb9\u5668\u65b0\u589egpu \u4f7f\u5bb9\u5668\u53ef\u4ee5\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684gpu \r\n    -e NVIDIA_VISIBLE_DEVICES=all \\ # nvidia\u663e\u5361ID\r\n    -e NVIDIA_DRIVER_CAPABILITIES=all \\ #\u663e\u5361\u9a71\u52a8\u7a0b\u5e8f\u529f\u80fd utility, compute, all\r\n    -p 8096:8096 \\ #\u7aef\u53e3\r\n    -p 8920:8920 \\ #\u7aef\u53e3\r\n    -e UID=0 \\ #\u7528\u6237ID \u901a\u8fc7id user\u67e5\u770b\u5bf9\u5e94\u7684\u6570\u5b57\r\n    -e GID=0 \\ #\u7ec4ID  \r\n    -e TZ=Asia/Shanghai \\ #\u65f6\u533a\r\n    --restart unless-stopped \\ #\u81ea\u52a8\u91cd\u542f, \u5931\u8d25\u91cd\u542f\u7b49\r\n    amilys/embyserver:latest \n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5176\u4ed6\uff1a"}),"\n",(0,s.jsx)(r.p,{children:"Xml TV\u7535\u89c6\u6307\u5357\u6570\u636e"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"http://epg.51zmt.top:8000/e.xml",children:"http://epg.51zmt.top:8000/e.xml"})})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(6540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);