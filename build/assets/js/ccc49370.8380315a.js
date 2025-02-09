"use strict";(self.webpackChunkallinone=self.webpackChunkallinone||[]).push([[3249],{7191:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});t(6540);var i=t(4164),a=t(1082),s=t(204),r=t(3750),l=t(569),o=t(2384),c=t(539),d=t(1865),u=t(4848);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,r.e7)(),{title:t,description:i,date:s,tags:l,authors:o,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.be,{title:c.title_meta??t,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),o.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var f=t(7143);function g(){const e=(0,r.J_)();return(0,u.jsx)(f.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=t(7959),v=t(2075);function x(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:a}=(0,r.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=i,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:g}=d;return(0,u.jsxs)(l.A,{sidebar:n,toc:!h&&a.length>0?(0,u.jsx)(p.A,{toc:a,minHeadingLevel:f,maxHeadingLevel:g}):void 0,children:[(0,u.jsx)(v.A,{metadata:i}),(0,u.jsx)(o.A,{children:t}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function b(e){const n=e.content;return(0,u.jsx)(r.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(g,{}),(0,u.jsx)(x,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},665:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var i=t(4164),a=t(7289),s=t(204),r=t(2362),l=t(4848);function o(e){let{className:n}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(a.Rc,{}),className:(0,i.A)(n,s.G.common.unlistedBanner),children:(0,l.jsx)(a.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.AE,{}),(0,l.jsx)(o,{...e})]})}},2075:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var i=t(4164),a=t(7289),s=t(204),r=t(2362),l=t(4848);function o(e){let{className:n}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(a.Yh,{}),className:(0,i.A)(n,s.G.common.draftBanner),children:(0,l.jsx)(a.TT,{})})}var c=t(665);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||i.unlisted)&&(0,l.jsx)(c.A,{}),i.draft&&(0,l.jsx)(o,{})]})}},1021:(e,n,t)=>{t.d(n,{A:()=>g});var i=t(6540),a=t(3115);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>l(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=o(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(6289),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const g=(0,a.p)(),p=c??g.tableOfContents.minHeadingLevel,v=u??g.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:p,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:v}}),[l,o,p,v])),(0,m.jsx)(f,{toc:x,className:t,linkClassName:l,...h})}},7959:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var i=t(4164),a=t(1021);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=t(4848);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(a.A,{...t,linkClassName:l,linkActiveClassName:o})})}},7289:(e,n,t)=>{t.d(n,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});t(6540);var i=t(539),a=t(7143),s=t(4848);function r(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(a.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);