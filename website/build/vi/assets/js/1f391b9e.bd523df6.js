"use strict";(self.webpackChunkmusician=self.webpackChunkmusician||[]).push([["2493"],{15133:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(85893);t(67294);var i=t(67026),l=t(30202),a=t(84681),s=t(75094);function c(e){let{className:n}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.cI,{}),className:(0,i.Z)(n,a.k.common.unlistedBanner),children:(0,r.jsx)(l.eU,{})})}function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.T$,{}),(0,r.jsx)(c,{...e})]})}},38813:function(e,n,t){t.d(n,{Z:()=>d});var r=t("85893");t("67294");var i=t("67026"),l=t("30202"),a=t("84681"),s=t("75094");function c(e){let{className:n}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.ht,{}),className:(0,i.Z)(n,a.k.common.draftBanner),children:(0,r.jsx)(l.xo,{})})}var o=t("15133");function d(e){let{metadata:n}=e,{unlisted:t,frontMatter:i}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||i.unlisted)&&(0,r.jsx)(o.Z,{}),i.draft&&(0,r.jsx)(c,{})]})}},8402:function(e,n,t){t.r(n),t.d(n,{default:()=>m});var r=t("85893");t("67294");var i=t("67026"),l=t("82743"),a=t("84681"),s=t("5836"),c=t("50779"),o=t("1397"),d=t("38813"),u=t("49230");let f="mdxPageWrapper_j9I6";function m(e){let{content:n}=e,{metadata:t,assets:m}=n,{title:h,editUrl:x,description:v,frontMatter:g,lastUpdatedBy:j,lastUpdatedAt:p}=t,{keywords:b,wrapperClassName:Z,hide_table_of_contents:_}=g,N=m.image??g.image,k=!!(x||p||j);return(0,r.jsx)(l.FG,{className:(0,i.Z)(Z??a.k.wrapper.mdxPages,a.k.page.mdxPage),children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.d,{title:h,description:v,keywords:b,image:N}),(0,r.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,r.jsxs)("div",{className:(0,i.Z)("row",f),children:[(0,r.jsxs)("div",{className:(0,i.Z)("col",!_&&"col--8"),children:[(0,r.jsx)(d.Z,{metadata:t}),(0,r.jsx)("article",{children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(n,{})})}),k&&(0,r.jsx)(u.Z,{className:(0,i.Z)("margin-top--sm",a.k.pages.pageFooterEditMetaRow),editUrl:x,lastUpdatedAt:p,lastUpdatedBy:j})]}),!_&&n.toc.length>0&&(0,r.jsx)("div",{className:"col col--2",children:(0,r.jsx)(o.Z,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},1397:function(e,n,t){t.d(n,{Z:()=>s});var r=t("85893");t("67294");var i=t("67026"),l=t("76365");let a="tableOfContents_bqdL";function s(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,i.Z)(a,"thin-scrollbar",n),children:(0,r.jsx)(l.Z,{...t,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},76365:function(e,n,t){t.d(n,{Z:()=>o});var r=t("85893"),i=t("67294"),l=t("30140");function a(e){let n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}var s=t("83012");let c=i.memo(function e(n){let{toc:t,className:i,linkClassName:l,isChild:a}=n;return t.length?(0,r.jsx)("ul",{className:a?void 0:i,children:t.map(n=>(0,r.jsxs)("li",{children:[(0,r.jsx)(s.Z,{to:`#${n.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,r.jsx)(e,{isChild:!0,toc:n.children,className:i,linkClassName:l})]},n.id))}):null});function o(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u,...f}=e,m=(0,l.L)(),h=d??m.tableOfContents.minHeadingLevel,x=u??m.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(n){let{toc:t,minHeadingLevel:r,maxHeadingLevel:i}=n;return t.flatMap(n=>{var t;let l=e({toc:n.children,minHeadingLevel:r,maxHeadingLevel:i});return(t=n).level>=r&&t.level<=i?[{...n,children:l}]:l})})({toc:function(e){let n=e.map(e=>({...e,parentIndex:-1,children:[]})),t=Array(7).fill(-1);n.forEach((e,n)=>{let r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n});let r=[];return n.forEach(e=>{let{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):r.push(i)}),r}(n),minHeadingLevel:t,maxHeadingLevel:r}),[n,t,r])}({toc:n,minHeadingLevel:h,maxHeadingLevel:x});return!function(e){let n=(0,i.useRef)(void 0),t=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,i.useEffect)(()=>{e.current=n?0:document.querySelector(".navbar").clientHeight},[n]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:s}=e;function c(){var e;let c=(e=r,Array.from(document.getElementsByClassName(e))),o=function(e,n){let{anchorTopOffset:t}=n,r=e.find(e=>a(e).top>=t);if(r){var i;return(i=a(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e,r=[];for(let e=n;e<=t;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),{anchorTopOffset:t.current}),d=c.find(e=>{var n;return o&&o.id===decodeURIComponent((n=e).href.substring(n.href.indexOf("#")+1))});c.forEach(e=>{var t;t=e,e===d?(n.current&&n.current!==t&&n.current.classList.remove(i),t.classList.add(i),n.current=t):t.classList.remove(i)})}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}},[e,t])}((0,i.useMemo)(()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:x}},[s,o,h,x])),(0,r.jsx)(c,{toc:v,className:t,linkClassName:s,...f})}},30202:function(e,n,t){t.d(n,{T$:function(){return c},cI:function(){return a},eU:function(){return s},ht:function(){return o},xo:function(){return d}});var r=t(85893);t(67294);var i=t(96025),l=t(94819);function a(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(l.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);