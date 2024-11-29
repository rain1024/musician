"use strict";(self.webpackChunkmusician=self.webpackChunkmusician||[]).push([["9854"],{51430:function(e,t,s){s.r(t),s.d(t,{default:()=>es});var a=s("85893"),r=s("67294"),l=s("67026"),i=s("82743"),n=s("84681"),o=s("96025");let c=()=>(0,o.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});var h=s("5836"),m=s("54704");s("78312"),s("4757"),s("2933");var u=s("16550"),d=s("83012"),x=s("38341"),j=s("79246");function g(e){let{pathname:t}=(0,u.TH)();return(0,r.useMemo)(()=>e.filter(e=>{var s,a;return s=e,a=t,(!s.unlisted||!!(0,j.Mg)(s.permalink,a))&&!0}),[e,t])}function v(e){let{items:t,ulClassName:s,liClassName:r,linkClassName:l,linkActiveClassName:i}=e;return(0,a.jsx)("ul",{className:s,children:t.map(e=>(0,a.jsx)("li",{className:r,children:(0,a.jsx)(d.Z,{isNavLink:!0,to:e.permalink,className:l,activeClassName:i,children:e.title})},e.permalink))})}var p=s("30140"),f=s("34403");function N(e){let{year:t,yearGroupHeadingClassName:s,children:r}=e;return(0,a.jsxs)("div",{role:"group",children:[(0,a.jsx)(f.Z,{as:"h3",className:s,children:t}),r]})}let w=(0,r.memo)(function(e){let{items:t,yearGroupHeadingClassName:s,ListComponent:r}=e;if(!(0,p.L)().blog.sidebar.groupByYear)return(0,a.jsx)(r,{items:t});{let e=function(e){let t=Object.entries((0,x.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}(t);return(0,a.jsx)(a.Fragment,{children:e.map(e=>{let[t,l]=e;return(0,a.jsx)(N,{year:t,yearGroupHeadingClassName:s,children:(0,a.jsx)(r,{items:l})},t)})})}}),b="sidebar_re4s",_="sidebarItemTitle_pO2u",Z="sidebarItemList_Yudw",k="sidebarItem__DBe",M="sidebarItemLink_mo7H",C="sidebarItemLinkActive_I1ZP",I="yearGroupHeading_rMGB",L=e=>{let{items:t}=e;return(0,a.jsx)(v,{items:t,ulClassName:(0,l.Z)(Z,"clean-list"),liClassName:k,linkClassName:M,linkActiveClassName:C})},H=(0,r.memo)(function(e){let{sidebar:t}=e,s=g(t.items);return(0,a.jsx)("aside",{className:"col col--3",children:(0,a.jsxs)("nav",{className:(0,l.Z)(b,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,a.jsx)("div",{className:(0,l.Z)(_,"margin-bottom--md"),children:t.title}),(0,a.jsx)(w,{items:s,ListComponent:L,yearGroupHeadingClassName:I})]})})});var A=s("11179");let y="yearGroupHeading_QT03",B=e=>{let{items:t}=e;return(0,a.jsx)(v,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function T(e){let{sidebar:t}=e,s=g(t.items);return(0,a.jsx)(w,{items:s,ListComponent:B,yearGroupHeadingClassName:y})}let G=(0,r.memo)(function(e){return(0,a.jsx)(A.Zo,{component:T,props:e})});function P(e){let{sidebar:t}=e,s=(0,m.i)();return t?.items.length?"mobile"===s?(0,a.jsx)(G,{sidebar:t}):(0,a.jsx)(H,{sidebar:t}):null}function z(e){let{sidebar:t,toc:s,children:r,...i}=e,n=t&&t.items.length>0;return(0,a.jsx)(h.Z,{...i,children:(0,a.jsx)("div",{className:"container margin-vert--lg",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)(P,{sidebar:t}),(0,a.jsx)("main",{className:(0,l.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:r}),s&&(0,a.jsx)("div",{className:"col col--2",children:s})]})})})}var D=s("84315");let S="githubSvg_Uu4N",Y="xSvg_y3PF",F=function(e){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,a.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,a.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,a.jsx)("path",{d:"M3.6 9h16.8"}),(0,a.jsx)("path",{d:"M3.6 15h16.8"}),(0,a.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,a.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]})},V="authorSocials_rSDt",O="authorSocialLink_owbf",R={twitter:{Icon:function(e){return(0,a.jsx)("svg",{viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",...e,children:(0,a.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})})},label:"Twitter"},github:{Icon:function(e){return(0,a.jsx)("svg",{viewBox:"0 0 256 250",width:"1em",height:"1em",...e,className:(0,l.Z)(e.className,S),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,a.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})})},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em",...e,children:[(0,a.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,a.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]})},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,a.jsx)("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",...e,children:(0,a.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})})},label:"LinkedIn"},x:{Icon:function(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",...e,className:(0,l.Z)(e.className,Y),style:{"--dark":"#000","--light":"#fff"},children:(0,a.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})})},label:"X"}};function X(e){var t;let{platform:s,link:r}=e;let{Icon:i,label:n}=R[t=s]??{Icon:F,label:t};return(0,a.jsx)(d.Z,{className:O,href:r,title:n,children:(0,a.jsx)(i,{className:(0,l.Z)(O)})})}function $(e){let{author:t}=e,s=Object.entries(t.socials??{});return(0,a.jsx)("div",{className:V,children:s.map(e=>{let[t,s]=e;return(0,a.jsx)(X,{platform:t,link:s},t)})})}let J={authorImage:"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM",authorDetails:"authorDetails_lV9A",authorName:"authorName_yefp",authorTitle:"authorTitle_nd0D",authorBlogPostCount:"authorBlogPostCount_iiJ5"};function q(e){return e.href?(0,a.jsx)(d.Z,{...e}):(0,a.jsx)(a.Fragment,{children:e.children})}function Q(e){let{title:t}=e;return(0,a.jsx)("small",{className:J.authorTitle,title:t,children:t})}function U(e){let{name:t,as:s}=e;return s?(0,a.jsx)(f.Z,{as:s,className:J.authorName,children:t}):(0,a.jsx)("span",{className:J.authorName,children:t})}function W(e){let{count:t}=e;return(0,a.jsx)("span",{className:(0,l.Z)(J.authorBlogPostCount),children:t})}function E(e){let{as:t,author:s,className:r,count:i}=e,{name:n,title:o,url:c,imageURL:h,email:m,page:u}=s,d=u?.permalink||c||m&&`mailto:${m}`||void 0;return(0,a.jsxs)("div",{className:(0,l.Z)("avatar margin-bottom--sm",r,J[`author-as-${t}`]),children:[h&&(0,a.jsx)(q,{href:d,className:"avatar__photo-link",children:(0,a.jsx)("img",{className:(0,l.Z)("avatar__photo",J.authorImage),src:h,alt:n})}),(n||o)&&(0,a.jsxs)("div",{className:(0,l.Z)("avatar__intro",J.authorDetails),children:[(0,a.jsxs)("div",{className:"avatar__name",children:[n&&(0,a.jsx)(q,{href:d,children:(0,a.jsx)(U,{name:n,as:t})}),void 0!==i&&(0,a.jsx)(W,{count:i})]}),!!o&&(0,a.jsx)(Q,{title:o}),(0,a.jsx)($,{author:s})]})]})}let K={authorListItem:"authorListItem_n3yI"};function ee(e){let{author:t}=e;return(0,a.jsx)("li",{className:K.authorListItem,children:(0,a.jsx)(E,{as:"h2",author:t,count:t.count})})}function et(e){let{authors:t}=e;return(0,a.jsx)("section",{className:(0,l.Z)("margin-vert--lg",K.authorsListSection),children:(0,a.jsx)("ul",{children:t.map(e=>(0,a.jsx)(ee,{author:e},e.key))})})}function es(e){let{authors:t,sidebar:s}=e,r=c();return(0,a.jsxs)(i.FG,{className:(0,l.Z)(n.k.wrapper.blogPages,n.k.page.blogAuthorsListPage),children:[(0,a.jsx)(i.d,{title:r}),(0,a.jsx)(D.Z,{tag:"blog_authors_list"}),(0,a.jsxs)(z,{sidebar:s,children:[(0,a.jsx)(f.Z,{as:"h1",children:r}),(0,a.jsx)(et,{authors:t})]})]})}}}]);