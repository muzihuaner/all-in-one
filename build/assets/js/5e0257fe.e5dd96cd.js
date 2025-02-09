"use strict";(self.webpackChunkall_in_one=self.webpackChunkall_in_one||[]).push([[2163],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9948:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const a={},i="WireGuard",l={unversionedId:"applications/wireguard",id:"applications/wireguard",title:"WireGuard",description:"WireGuard\u662f\u4e00\u6b3e\u6781\u5176\u7b80\u5355\u4f46\u5feb\u901f\u4e14\u73b0\u4ee3\u7684 VPN\uff0c\u5b83\u91c7\u7528\u4e86\u52a0\u5bc6\u6280\u672f\u3002\u5b83\u65e8\u5728\u6bd4IPsec\u66f4\u5feb\u3001\u66f4\u7b80\u5355\u3001\u66f4\u7cbe\u7b80\u3001\u66f4\u5b9e\u7528\uff0c\u540c\u65f6\u907f\u514d\u5927\u91cf\u9ebb\u70e6\u3002\u5b83\u65e8\u5728\u6bd4 OpenVPN \u6027\u80fd\u66f4\u9ad8\u3002WireGuard \u88ab\u8bbe\u8ba1\u4e3a\u901a\u7528 VPN\uff0c\u53ef\u5728\u5d4c\u5165\u5f0f\u63a5\u53e3\u548c\u8d85\u7ea7\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\uff0c\u9002\u7528\u4e8e\u8bb8\u591a\u4e0d\u540c\u60c5\u51b5\u3002\u5b83\u6700\u521d\u662f\u4e3a Linux \u5185\u6838\u53d1\u5e03\u7684\uff0c\u73b0\u5728\u5df2\u8de8\u5e73\u53f0\uff08Windows\u3001macOS\u3001BSD\u3001iOS\u3001Android\uff09\u5e76\u53ef\u5e7f\u6cdb\u90e8\u7f72\u3002\u5b83\u76ee\u524d\u6b63\u5728\u5927\u529b\u5f00\u53d1\u4e2d\uff0c\u4f46\u5b83\u53ef\u80fd\u5df2\u7ecf\u88ab\u89c6\u4e3a\u4e1a\u5185\u6700\u5b89\u5168\u3001\u6700\u6613\u4e8e\u4f7f\u7528\u548c\u6700\u7b80\u5355\u7684 VPN \u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/applications/wireguard.md",sourceDirName:"applications",slug:"/applications/wireguard",permalink:"/docs/applications/wireguard",draft:!1,editUrl:"https://github.com/muzihuaner/all-in-one/tree/main/packages/create-docusaurus/templates/shared/docs/applications/wireguard.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tailscale",permalink:"/docs/applications/tailscale"},next:{title:"\u641e\u673a-\u6280\u5de7&\u95ee\u9898",permalink:"/docs/category/\u641e\u673a-\u6280\u5de7\u95ee\u9898"}},c={},p=[{value:"docker-compose",id:"docker-compose",level:3},{value:"docker cli",id:"docker-cli",level:3}],u={toc:p},s="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(s,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wireguard"},"WireGuard"),(0,o.kt)("p",null,"WireGuard\u662f\u4e00\u6b3e\u6781\u5176\u7b80\u5355\u4f46\u5feb\u901f\u4e14\u73b0\u4ee3\u7684 VPN\uff0c\u5b83\u91c7\u7528\u4e86\u52a0\u5bc6\u6280\u672f\u3002\u5b83\u65e8\u5728\u6bd4IPsec\u66f4\u5feb\u3001\u66f4\u7b80\u5355\u3001\u66f4\u7cbe\u7b80\u3001\u66f4\u5b9e\u7528\uff0c\u540c\u65f6\u907f\u514d\u5927\u91cf\u9ebb\u70e6\u3002\u5b83\u65e8\u5728\u6bd4 OpenVPN \u6027\u80fd\u66f4\u9ad8\u3002WireGuard \u88ab\u8bbe\u8ba1\u4e3a\u901a\u7528 VPN\uff0c\u53ef\u5728\u5d4c\u5165\u5f0f\u63a5\u53e3\u548c\u8d85\u7ea7\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\uff0c\u9002\u7528\u4e8e\u8bb8\u591a\u4e0d\u540c\u60c5\u51b5\u3002\u5b83\u6700\u521d\u662f\u4e3a Linux \u5185\u6838\u53d1\u5e03\u7684\uff0c\u73b0\u5728\u5df2\u8de8\u5e73\u53f0\uff08Windows\u3001macOS\u3001BSD\u3001iOS\u3001Android\uff09\u5e76\u53ef\u5e7f\u6cdb\u90e8\u7f72\u3002\u5b83\u76ee\u524d\u6b63\u5728\u5927\u529b\u5f00\u53d1\u4e2d\uff0c\u4f46\u5b83\u53ef\u80fd\u5df2\u7ecf\u88ab\u89c6\u4e3a\u4e1a\u5185\u6700\u5b89\u5168\u3001\u6700\u6613\u4e8e\u4f7f\u7528\u548c\u6700\u7b80\u5355\u7684 VPN \u89e3\u51b3\u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u5b98\u65b9\u7f51\u7ad9\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},"https://www.wireguard.com/")),(0,o.kt)("h3",{id:"docker-compose"},"docker-compose"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---\nservices:\n  wireguard:\n    image: lscr.io/linuxserver/wireguard:latest\n    container_name: wireguard\n    cap_add:\n      - NET_ADMIN\n      - SYS_MODULE #optional\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Etc/UTC\n      - SERVERURL=wireguard.domain.com #optional\n      - SERVERPORT=51820 #optional\n      - PEERS=1 #optional\n      - PEERDNS=auto #optional\n      - INTERNAL_SUBNET=10.13.13.0 #optional\n      - ALLOWEDIPS=0.0.0.0/0 #optional\n      - PERSISTENTKEEPALIVE_PEERS= #optional\n      - LOG_CONFS=true #optional\n    volumes:\n      - /path/to/wireguard/config:/config\n      - /lib/modules:/lib/modules #optional\n    ports:\n      - 51820:51820/udp\n    sysctls:\n      - net.ipv4.conf.all.src_valid_mark=1\n    restart: unless-stopped\n")),(0,o.kt)("h3",{id:"docker-cli"},"docker cli"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -d \\\n  --name=wireguard \\\n  --cap-add=NET_ADMIN \\\n  --cap-add=SYS_MODULE `#optional` \\\n  -e PUID=1000 \\\n  -e PGID=1000 \\\n  -e TZ=Etc/UTC \\\n  -e SERVERURL=wireguard.domain.com `#optional` \\\n  -e SERVERPORT=51820 `#optional` \\\n  -e PEERS=1 `#optional` \\\n  -e PEERDNS=auto `#optional` \\\n  -e INTERNAL_SUBNET=10.13.13.0 `#optional` \\\n  -e ALLOWEDIPS=0.0.0.0/0 `#optional` \\\n  -e PERSISTENTKEEPALIVE_PEERS= `#optional` \\\n  -e LOG_CONFS=true `#optional` \\\n  -p 51820:51820/udp \\\n  -v /path/to/wireguard/config:/config \\\n  -v /lib/modules:/lib/modules `#optional` \\\n  --sysctl="net.ipv4.conf.all.src_valid_mark=1" \\\n  --restart unless-stopped \\\n  lscr.io/linuxserver/wireguard:latest\n')))}d.isMDXComponent=!0}}]);