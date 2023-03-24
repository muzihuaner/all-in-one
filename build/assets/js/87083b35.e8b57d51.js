"use strict";(self.webpackChunkall_in_one=self.webpackChunkall_in_one||[]).push([[2039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(k,p(p({ref:t},c),{},{components:n})):a.createElement(k,p({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={},p="code-server",i={unversionedId:"applications/docker-applications/code-server",id:"applications/docker-applications/code-server",title:"code-server",description:"Code-Server\u662f\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u7684 Vscode\uff0c\u53ef\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u3002",source:"@site/docs/applications/docker-applications/code-server.md",sourceDirName:"applications/docker-applications",slug:"/applications/docker-applications/code-server",permalink:"/docs/applications/docker-applications/code-server",draft:!1,editUrl:"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/docker-applications/code-server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aira2",permalink:"/docs/applications/docker-applications/aria2"},next:{title:"Filebrowser",permalink:"/docs/applications/docker-applications/filebrowser"}},o={},d=[{value:"\u652f\u6301\u7684\u67b6\u6784",id:"\u652f\u6301\u7684\u67b6\u6784",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u7aef\u53e3\uff08-p\uff09",id:"\u7aef\u53e3-p",level:3},{value:"\u73af\u5883\u53d8\u91cf\uff08-e\uff09",id:"\u73af\u5883\u53d8\u91cf-e",level:3},{value:"\u5377\u6620\u5c04\uff08-v\uff09",id:"\u5377\u6620\u5c04-v",level:3},{value:"\u4ece\u6587\u4ef6\u52a0\u8f7d\u73af\u5883\u53d8\u91cf",id:"\u4ece\u6587\u4ef6\u52a0\u8f7d\u73af\u5883\u53d8\u91cf",level:2},{value:"UID\u548cGID",id:"uid\u548cgid",level:2},{value:"\u5b89\u88c5\u8bf4\u660e",id:"\u5b89\u88c5\u8bf4\u660e",level:2}],c={toc:d},m="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code-server"},"code-server"),(0,r.kt)("p",null,"Code-Server\u662f\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u7684 Vscode\uff0c\u53ef\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u3002\n\u4f7f\u7528\u4e00\u81f4\u7684\u5f00\u53d1\u73af\u5883\u5728 Chromebook\u3001\u5e73\u677f\u7535\u8111\u548c\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\u7f16\u5199\u4ee3\u7801\u3002\n\u5982\u679c\u60a8\u6709 Windows \u6216 Mac \u5de5\u4f5c\u7ad9\uff0c\u5219\u66f4\u5bb9\u6613\u4e3a Linux \u5f00\u53d1\u3002\n\u5229\u7528\u5927\u578b\u4e91\u670d\u52a1\u5668\u6765\u52a0\u901f\u6d4b\u8bd5\u3001\u7f16\u8bd1\u3001\u4e0b\u8f7d\u7b49\u3002\n\u5728\u65c5\u9014\u4e2d\u5ef6\u957f\u7535\u6c60\u5bff\u547d\u3002\n\u6240\u6709\u5bc6\u96c6\u8ba1\u7b97\u90fd\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u3002\n\u60a8\u4e0d\u518d\u8fd0\u884c\u8fc7\u591a\u7684 Chrome \u5b9e\u4f8b\u3002(\u8c37\u6b4c\u7ffb\u8bd1)"),(0,r.kt)("p",null,"\u5b98\u65b9\u7f51\u7ad9\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://coder.com/"},"https://coder.com/")),(0,r.kt)("h3",{id:"\u652f\u6301\u7684\u67b6\u6784"},"\u652f\u6301\u7684\u67b6\u6784"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u67b6\u6784"),(0,r.kt)("th",{parentName:"tr",align:null},"\u517c\u5bb9\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"Tag"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x86-64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"amd64-",(0,r.kt)("inlineCode",{parentName:"td"},"<version tag>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arm64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"arm64v8-",(0,r.kt)("inlineCode",{parentName:"td"},"<version tag>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"armhf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"arm32v7-",(0,r.kt)("inlineCode",{parentName:"td"},"<version tag>"))))),(0,r.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,r.kt)("p",null,"docker-compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\nversion: "2.1"\nservices:\n  code-server:\n    image: dockerproxy.com/linuxserver/code-server:latest\n    container_name: code-server\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Asia/Shanghai\n      - PASSWORD=password #\u6309\u9700\u4fee\u6539\n      - HASHED_PASSWORD= #\u6309\u9700\u4fee\u6539\n      - SUDO_PASSWORD=password #\u6309\u9700\u4fee\u6539\n      - SUDO_PASSWORD_HASH= #\u6309\u9700\u4fee\u6539\n      - PROXY_DOMAIN=code-server.my.domain #\u6309\u9700\u4fee\u6539\n      - DEFAULT_WORKSPACE=/config/workspace #\u6309\u9700\u4fee\u6539\n    volumes:\n      - /path/to/appdata/config:/config\n    ports:\n      - 8443:8443\n    restart: unless-stopped\n')),(0,r.kt)("p",null,"docker cli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d \\\n  --name=code-server \\\n  -e PUID=1000 \\\n  -e PGID=1000 \\\n  -e TZ=Etc/UTC \\\n  -e PASSWORD=password `#\u6309\u9700\u4fee\u6539` \\\n  -e HASHED_PASSWORD= `#\u6309\u9700\u4fee\u6539` \\\n  -e SUDO_PASSWORD=password `#\u6309\u9700\u4fee\u6539` \\\n  -e SUDO_PASSWORD_HASH= `#\u6309\u9700\u4fee\u6539` \\\n  -e PROXY_DOMAIN=code-server.my.domain `#\u6309\u9700\u4fee\u6539` \\\n  -e DEFAULT_WORKSPACE=/config/workspace `#\u6309\u9700\u4fee\u6539` \\\n  -p 8443:8443 \\\n  -v /path/to/appdata/config:/config \\\n  --restart unless-stopped \\\n  dockerproxy.com/linuxserver/code-server:latest\n\n")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,"Docker\u955c\u50cf\u5728\u4f7f\u7528\u7684\u65f6\u5019\u9700\u8981\u914d\u7f6e\u4e00\u4e9b\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},":")," \u5206\u9694\uff0c\u5206\u522b\u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5bbf\u4e3b\u673a:\u5bb9\u5668\u5185"),"\u3002\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"-p 8080:80")," \u6307\u7684\u662f\u5c06\u5bb9\u5668\u5185\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),"\u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3\uff0c\u5373\u901a\u8fc7\u5bbf\u4e3b\u673a\u7f51\u7edc\u8bbf\u95ee\u7684\u8bdd\uff0c\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3\u5373\u662f\u8bbf\u95ee\u5bb9\u5668\u5185\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),"\u7aef\u53e3\u3002"),(0,r.kt)("h3",{id:"\u7aef\u53e3-p"},"\u7aef\u53e3\uff08-p\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"port"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8443")),(0,r.kt)("td",{parentName:"tr",align:null},"WEB\u754c\u9762")))),(0,r.kt)("h3",{id:"\u73af\u5883\u53d8\u91cf-e"},"\u73af\u5883\u53d8\u91cf\uff08-e\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"env"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PUID=1000")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684 UID\uff0c\u8be6\u89c1\u4e0b\u9762\u7684\u8bf4\u660e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PGID=1000")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684 GID\uff0c\u8be6\u89c1\u4e0b\u9762\u7684\u8bf4\u660e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TZ=Europe/London")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u65f6\u533a\uff0c\u5728\u56fd\u5185\u7684\u8bdd\u53ef\u4ee5\u4f7f\u7528 Asia/Shanghai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PASSWORD=password")),(0,r.kt)("td",{parentName:"tr",align:null},"Web\u754c\u9762\u7684\u5bc6\u7801\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u5219\u4e0d\u4f1a\u542f\u7528\u8ba4\u8bc1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SUDO_PASSWORD=password")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8bbe\u7f6e\u4e86\u8be5\u9879\uff0c\u5219\u5728\u670d\u52a1\u5668\u7684\u7ec8\u7aef\u4e0a\u7528\u8be5\u5bc6\u7801\u4f7f\u7528sudo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PROXY_DOMAIN=code-server.my.domain")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53cd\u5411\u4ee3\u7406\u76f8\u5173\u7684\u8bbe\u7f6e\uff0c",(0,r.kt)("a",{parentName:"td",href:"https://github.com/cdr/code-server/blob/master/doc/FAQ.md#sub-domains"},"\u5177\u4f53\u53c2\u9605\u8fd9\u91cc"))))),(0,r.kt)("h3",{id:"\u5377\u6620\u5c04-v"},"\u5377\u6620\u5c04\uff08-v\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"volume"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/config")),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u6587\u4ef6\u6240\u5728\u8def\u5f84")))),(0,r.kt)("h2",{id:"\u4ece\u6587\u4ef6\u52a0\u8f7d\u73af\u5883\u53d8\u91cf"},"\u4ece\u6587\u4ef6\u52a0\u8f7d\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u524d\u7f00\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE__")," \u7684\u6587\u4ef6\u6765\u52a0\u8f7d\u73af\u5883\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-e FILE__PASSWORD=/run/secrets/mysecretpassword\n")),(0,r.kt)("p",null,"\u5c06\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"/run/secrets/mysecretpassword")," \u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD")," \u53d8\u91cf\u7684\u503c\u3002"),(0,r.kt)("h2",{id:"uid\u548cgid"},"UID\u548cGID"),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," \u6620\u5c04\u5377\u7684\u65f6\u5019\uff0c\u5bbf\u4e3b\u673a\u548c\u5bb9\u5668\u5185\u4f1a\u51fa\u73b0\u5173\u4e8e\u6743\u9650\u7684\u95ee\u9898\uff0c\u6211\u4eec\u7684\u955c\u50cf\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUID")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"GUID")," \u6765\u907f\u514d\u6b64\u7c7b\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4f60\u76ee\u524d\u6b63\u5728\u4f7f\u7528\u7684\u7528\u6237\u7684UID\u548cGID\u8fdb\u884c\u8bbe\u7f6e\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u5b58\u5728\u6743\u9650\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7684\u65b9\u5f0f\u67e5\u770b\u5f53\u524d\u7528\u6237\u7684UID\u548cGID\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SHELL"},"$ id $user\n  uid=1000(dockeruser) gid=1000(dockergroup) groups=1000(dockergroup)\n\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5\u8bf4\u660e"},"\u5b89\u88c5\u8bf4\u660e"),(0,r.kt)("p",null,"\u8bbf\u95eeWEB\u754c\u9762\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"http://ip:8443")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210605150345.png",title:"image-20210605150345025"},(0,r.kt)("img",{parentName:"a",src:"https://gcore.jsdelivr.net/gh/muzihuaner/huancdn/img/20210605150345.png",alt:"image-20210605150345025"}))),(0,r.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528GitHub\uff0c\u628assh\u5bc6\u94a5\u653e\u5728 /config/.ssh \u6587\u4ef6\u5939"),(0,r.kt)("p",null,"\u7136\u540e\u5728\u83dc\u5355\u4e2d\u6253\u5f00\u7ec8\u7aef\uff0c\u8bbe\u7f6egithub\u7684\u7528\u6237\u540d\u548c\u90ae\u7bb1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'git config --global user.name "username"\ngit config --global user.email "email address"\n')),(0,r.kt)("p",null,"\u60f3\u6362\u6210\u4e2d\u6587\uff0c\u5728\u62d3\u5c55\u90a3\u91cc\u641c\u7d22\u201cChinese\u201d,\u627e\u5230\u201c\u7b80\u4f53\u4e2d\u6587\u201d\u5b89\u88c5\uff0c\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u5373\u53ef\u3002"))}s.isMDXComponent=!0}}]);