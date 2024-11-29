"use strict";(self.webpackChunkmusician=self.webpackChunkmusician||[]).push([["4412"],{55038:function(e,a,t){t.r(a),t.d(a,{default:()=>u});var i=t("85893"),s=t("67294"),l=t("5836");let r=[{id:2,title:"Fur Elise",artist:"Ludwig van Beethoven",genre:"Classical",cover:"fur-elise.jpg",audio:"fur-elise.mp3"},{id:3,title:"Nocturne Op. 9 No. 2",artist:"Fr\xe9d\xe9ric Chopin",genre:"Classical",cover:"nocturne-op-9-no-2.jpg",audio:"nocturne-op-9-no-2.mp3"},{id:4,title:"Canon in D",artist:"Johann Pachelbel",genre:"Classical",cover:"canon-in-d.jpg",audio:"canon-in-d.mp3"},{id:5,title:"The Four Seasons - Spring",artist:"Antonio Vivaldi",genre:"Classical",cover:"four-seasons-spring.jpg",audio:"four-seasons-spring.mp3"},{id:53,title:"Clair de Lune",artist:"Claude Debussy",genre:"Classical",cover:"clair-de-lune.jpg",audio:"clair-de-lune.mp3"},{id:724,title:"Moonlight Sonata",artist:"Ludwig van Beethoven",genre:"Classical",cover:"moonlight-sonata.jpg",audio:"moonlight-sonata.mp3"},{id:12,title:"Turkish March",artist:"Wolfgang Amadeus Mozart",genre:"Classical",cover:"turkish-march.jpg",audio:"turkish-march.mp3"},{id:13,title:"Pirates of the Caribbean",artist:"Klaus Badelt",genre:"Soundtrack",cover:"pirates-of-the-caribbean.jpg",audio:"pirates-of-the-caribbean.mp3"},{id:14,title:"Symphony No. 9",artist:"Ludwig van Beethoven",genre:"Classical",cover:"song.jpg",audio:"symphony-no-9.mp3"},{id:15,title:"Eine Kleine Nachtmusik",artist:"Wolfgang Amadeus Mozart",genre:"Classical",cover:"song.jpg",audio:"eine-kleine-nachtmusik.mp3"},{id:16,title:"Symphony No. 40",artist:"Wolfgang Amadeus Mozart",genre:"Classical",cover:"song.jpg",audio:"symphony-no-40.mp3"},{id:17,title:"Minuet in G Major",artist:"Johann Sebastian Bach",genre:"Classical",cover:"song.jpg",audio:"minuet-in-g-major.mp3"},{id:18,title:"River Flows in You",artist:"Yiruma",genre:"New Age",cover:"river-flows-in-you.jpg",audio:"river-flows-in-you.mp3"},{id:19,title:"Kiss the Rain",artist:"Yiruma",genre:"New Age",cover:"kiss-the-rain.jpg",audio:"kiss-the-rain.mp3"},{id:20,title:"Spring Time",artist:"Yiruma",genre:"New Age",cover:"spring-time.jpg",audio:"spring-time.mp3"},{id:21,title:"Maybe",artist:"Yiruma",genre:"New Age",cover:"maybe.jpg",audio:"maybe.mp3"}],n=s.forwardRef(function({title:e,titleId:a,...t},i){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":a},t),e?s.createElement("title",{id:a},e):null,s.createElement("path",{fillRule:"evenodd",d:"M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z",clipRule:"evenodd"}))}),o=s.forwardRef(function({title:e,titleId:a,...t},i){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":a},t),e?s.createElement("title",{id:a},e):null,s.createElement("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",clipRule:"evenodd"}))}),c=s.forwardRef(function({title:e,titleId:a,...t},i){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":a},t),e?s.createElement("title",{id:a},e):null,s.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))});function d(e){let{song:a,onPlay:t,onPause:s,nowPlaying:l}=e,r=l?.id===a.id&&l.isPlaying;return(0,i.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("img",{src:`../images/${a.cover}`,alt:a.title,className:"w-full h-60 object-cover"}),(0,i.jsx)("button",{onClick:()=>{r?s():t(a.audio,a)},className:`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold ${r?"opacity-100":"opacity-0"} hover:opacity-100 transition-opacity duration-300`,children:r?(0,i.jsx)(n,{className:"h-8 w-8"}):(0,i.jsx)(o,{className:"h-8 w-8"})})]}),(0,i.jsxs)("div",{className:"p-4",children:[(0,i.jsx)("h2",{className:"text-lg font-bold text-gray-800",children:a.title}),(0,i.jsxs)("p",{className:"text-gray-600",children:["by ",a.artist]}),a.composer&&(0,i.jsxs)("p",{className:"text-gray-500",children:["Composer: ",a.composer]}),(0,i.jsx)("span",{className:"inline-block text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1",children:a.genre})]})]},a.id)}function u(){let[e,a]=(0,s.useState)(""),[t,u]=(0,s.useState)(""),[g,m]=(0,s.useState)(null),[h,p]=(0,s.useState)(null),[x,f]=(0,s.useState)(!1),v=r.filter(a=>{let i=e.toLowerCase(),s=a.title.toLowerCase().includes(i),l=a.artist?.toLowerCase().includes(i),r=!t||a.genre===t;return(s||l)&&r}),w=(e,a)=>{g&&g.pause();let t=new Audio(`../audios/${e}`);m(t),p({...a,isPlaying:!0}),f(!0),t.play()},b=()=>{g&&g.pause(),p(e=>({...e,isPlaying:!1}))};return(0,s.useEffect)(()=>{if(g){let e=()=>{p(null),f(!1)};return g.addEventListener("ended",e),()=>{g.removeEventListener("ended",e)}}},[g]),(0,i.jsx)(l.Z,{title:"Music List",description:"Search and filter through a list of songs",children:(0,i.jsxs)("main",{className:"min-h-screen bg-gray-50 py-8 px-4",children:[x&&h&&(0,i.jsxs)("div",{className:"fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg p-4 flex items-center justify-between",style:{zIndex:9999},children:[(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)("img",{src:`../images/${h.cover}`,alt:"Cover",className:"h-16 w-16 rounded-lg shadow-md"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{className:"font-bold text-lg",children:h.title}),(0,i.jsx)("p",{className:"text-sm text-gray-200",children:h.artist})]})]}),(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)("button",{onClick:()=>{g&&(g.paused?(g.play(),p(e=>({...e,isPlaying:!0}))):b())},className:"w-12 h-12 bg-white text-blue-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform focus:ring-2 focus:ring-blue-400",children:h?.isPlaying?(0,i.jsx)(n,{className:"h-6 w-6"}):(0,i.jsx)(o,{className:"h-6 w-6"})}),(0,i.jsx)("button",{onClick:()=>{g&&g.pause(),p(null),f(!1)},className:"w-9 h-9 bg-white text-gray-400 rounded-full shadow-md flex items-center justify-center hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-300",children:(0,i.jsx)(c,{className:"h-5 w-5"})})]})]}),(0,i.jsx)("h1",{className:"text-4xl font-bold text-center mb-8 text-gray-800 mt-16",children:"Music Showcase"}),(0,i.jsxs)("div",{className:"max-w-4xl mx-auto mb-6 flex flex-wrap gap-4",children:[(0,i.jsx)("input",{type:"text",placeholder:"Search songs...",value:e,onChange:e=>a(e.target.value),className:"flex-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"}),(0,i.jsxs)("select",{value:t,onChange:e=>u(e.target.value),className:"border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400",children:[(0,i.jsx)("option",{value:"",children:"All Genres"}),(0,i.jsx)("option",{value:"Classical",children:"Classical"}),(0,i.jsx)("option",{value:"New Age",children:"New Age"}),(0,i.jsx)("option",{value:"Soundtrack",children:"Soundtrack"})]}),(0,i.jsx)("button",{onClick:()=>{let e=Math.floor(Math.random()*r.length),a=r[e];w(a.audio,a)},className:"px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-400",children:"Surprise Me"})]}),(0,i.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto",children:v.map(e=>(0,i.jsx)(d,{song:e,onPlay:w,onPause:b,nowPlaying:h},e.id))})]})})}}}]);