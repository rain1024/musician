"use strict";(self.webpackChunkmusician=self.webpackChunkmusician||[]).push([["8514"],{89337:function(e,t,n){n.r(t),n.d(t,{default:()=>p});var a=n("85893");n("67294");var r=n("67026"),l=n("2933"),i=n("82743"),s=n("84681"),o=n("15571"),c=n("61722"),d=n("84315"),u=n("23725"),g=n("94819"),m=n("41835");function h(e){let t=(0,m.CS)(e);return(0,a.jsx)(g.Z,{children:(0,a.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){let{metadata:t}=e,{siteConfig:{title:n}}=(0,l.Z)(),{blogDescription:r,blogTitle:s,permalink:o}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.d,{title:"/"===o?n:s,description:r}),(0,a.jsx)(d.Z,{tag:"blog_posts_list"})]})}function j(e){let{metadata:t,items:n,sidebar:r}=e;return(0,a.jsxs)(o.Z,{sidebar:r,children:[(0,a.jsx)(u.Z,{items:n}),(0,a.jsx)(c.Z,{metadata:t})]})}function p(e){return(0,a.jsxs)(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage),children:[(0,a.jsx)(x,{...e}),(0,a.jsx)(h,{...e}),(0,a.jsx)(j,{...e})]})}},61722:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(85893);n(67294);var r=n(96025),l=n(50790);function i(e){let{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(l.Z,{permalink:n,title:(0,a.jsx)(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,a.jsx)(l.Z,{permalink:i,title:(0,a.jsx)(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},1080:function(e,t,n){n.d(t,{Z:()=>A});var a=n("85893");n("67294");var r=n("67026"),l=n("41835");function i(e){let{children:t,className:n}=e;return(0,a.jsx)("article",{className:n,children:t})}var s=n("83012");let o="title_f1Hy";function c(e){let{className:t}=e,{metadata:n,isBlogPostPage:i}=(0,l.nO)(),{permalink:c,title:d}=n;return(0,a.jsx)(i?"h1":"h2",{className:(0,r.Z)(o,t),children:i?d:(0,a.jsx)(s.Z,{to:c,children:d})})}var d=n("96025"),u=n("43115"),g=n("11437");let m="container_mt6G";function h(e){let{readingTime:t}=e,n=function(){let{selectMessage:e}=(0,u.c)();return t=>{let n=Math.ceil(t);return e(n,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,a.jsx)(a.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,a.jsx)("time",{dateTime:t,children:n})}function j(){return(0,a.jsx)(a.Fragment,{children:" \xb7 "})}function p(e){let t,{className:n}=e,{metadata:i}=(0,l.nO)(),{date:s,readingTime:o}=i,c=(0,g.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,a.jsxs)("div",{className:(0,r.Z)(m,"margin-vert--md",n),children:[(0,a.jsx)(x,{date:s,formattedDate:(t=s,c.format(new Date(t)))}),void 0!==o&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{}),(0,a.jsx)(h,{readingTime:o})]})]})}var f=n("21389");let v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e,{metadata:{authors:n},assets:i}=(0,l.nO)();if(0===n.length)return null;let s=n.every(e=>{let{name:t}=e;return!t}),o=1===n.length;return(0,a.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",s?v.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,a.jsx)("div",{className:(0,r.Z)(!s&&(o?"col col--12":"col col--6"),s?v.imageOnlyAuthorCol:v.authorCol),children:(0,a.jsx)(f.Z,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t))})}function Z(){return(0,a.jsxs)("header",{children:[(0,a.jsx)(c,{}),(0,a.jsx)(p,{}),(0,a.jsx)(b,{})]})}var N=n("8365"),_=n("50779");function k(e){let{children:t,className:n}=e,{isBlogPostPage:i}=(0,l.nO)();return(0,a.jsx)("div",{id:i?N.blogPostContainerID:void 0,className:(0,r.Z)("markdown",n),children:(0,a.jsx)(_.Z,{children:t})})}var w=n("84681"),O=n("49230"),y=n("72501");function C(){return(0,a.jsx)("b",{children:(0,a.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){let{blogPostTitle:t,...n}=e;return(0,a.jsx)(s.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,a.jsx)(C,{})})}function T(){let{metadata:e,isBlogPostPage:t}=(0,l.nO)(),{tags:n,title:i,editUrl:s,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,g=n.length>0;if(!(g||u||s))return null;if(!t)return(0,a.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,a.jsx)("div",{className:(0,r.Z)("col",{"col--9":u}),children:(0,a.jsx)(y.Z,{tags:n})}),u&&(0,a.jsx)("div",{className:(0,r.Z)("col text--right",{"col--3":g}),children:(0,a.jsx)(R,{blogPostTitle:i,to:e.permalink})})]});{let e=!!(s||d||c);return(0,a.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,a.jsx)("div",{className:(0,r.Z)("row","margin-top--sm",w.k.blog.blogFooterEditMetaRow),children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(y.Z,{tags:n})})}),e&&(0,a.jsx)(O.Z,{className:(0,r.Z)("margin-top--sm",w.k.blog.blogFooterEditMetaRow),editUrl:s,lastUpdatedAt:d,lastUpdatedBy:c})]})}}function A(e){let{children:t,className:n}=e,s=function(){let{isBlogPostPage:e}=(0,l.nO)();return e?void 0:"margin-bottom--xl"}();return(0,a.jsxs)(i,{className:(0,r.Z)(s,n),children:[(0,a.jsx)(Z,{}),(0,a.jsx)(k,{children:t}),(0,a.jsx)(T,{})]})}},23725:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(85893);n(67294);var r=n(41835),l=n(1080);function i(e){let{items:t,component:n=l.Z}=e;return(0,a.jsx)(a.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,a.jsx)(r.n4,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)})})}},50790:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(85893);n(67294);var r=n(67026),l=n(83012);function i(e){let{permalink:t,title:n,subLabel:i,isNext:s}=e;return(0,a.jsxs)(l.Z,{className:(0,r.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},48627:function(e,t,n){n.d(t,{Z:()=>s});var a=n("85893");n("67294");var r=n("67026"),l=n("83012");let i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:n,count:s,description:o}=e;return(0,a.jsxs)(l.Z,{href:t,title:o,className:(0,r.Z)(i.tag,s?i.tagWithCount:i.tagRegular),children:[n,s&&(0,a.jsx)("span",{children:s})]})}},72501:function(e,t,n){n.d(t,{Z:()=>c});var a=n("85893");n("67294");var r=n("67026"),l=n("96025"),i=n("48627");let s="tags_jXut",o="tag_QGVx";function c(e){let{tags:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("b",{children:(0,a.jsx)(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,a.jsx)("ul",{className:(0,r.Z)(s,"padding--none","margin-left--sm"),children:t.map(e=>(0,a.jsx)("li",{className:o,children:(0,a.jsx)(i.Z,{...e})},e.permalink))})]})}}}]);