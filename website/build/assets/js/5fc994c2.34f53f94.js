"use strict";(self.webpackChunkmusician=self.webpackChunkmusician||[]).push([["4412"],{84921:function(e,a,i){i.r(a),i.d(a,{default:function(){return n}});var t=i(85893),s=i(67294),l=i(5836);let r=[{id:2,title:"Fur Elise",artist:"Ludwig van Beethoven",genre:"Classical",cover:"fur-elise.jpg",audio:"fur-elise.mp3"},{id:3,title:"Nocturne Op. 9 No. 2",artist:"Fr\xe9d\xe9ric Chopin",genre:"Classical",cover:"nocturne-op-9-no-2.jpg",audio:"nocturne-op-9-no-2.mp3"},{id:4,title:"Canon in D",artist:"Johann Pachelbel",genre:"Classical",cover:"canon-in-d.jpg",audio:"canon-in-d.mp3"},{id:5,title:"The Four Seasons - Spring",artist:"Antonio Vivaldi",genre:"Classical",cover:"four-seasons-spring.jpg",audio:"four-seasons-spring.mp3"},{id:53,title:"Clair de Lune",artist:"Claude Debussy",genre:"Classical",cover:"clair-de-lune.jpg",audio:"clair-de-lune.mp3"},{id:724,title:"Moonlight Sonata",artist:"Ludwig van Beethoven",genre:"Classical",cover:"moonlight-sonata.jpg",audio:"moonlight-sonata.mp3"},{id:12,title:"Turkish March",artist:"Wolfgang Amadeus Mozart",genre:"Classical",cover:"turkish-march.jpg",audio:"turkish-march.mp3"},{id:13,title:"Pirates of the Caribbean",artist:"Klaus Badelt",genre:"Soundtrack",cover:"pirates-of-the-caribbean.jpg",audio:"pirates-of-the-caribbean.mp3"}];function n(){let[e,a]=(0,s.useState)(""),[i,n]=(0,s.useState)(""),[o,c]=(0,s.useState)(null),u=r.filter(a=>{let t=a.title.toLowerCase().includes(e.toLowerCase()),s=!i||a.genre===i;return t&&s}),d=e=>{o&&o.pause();let a=new Audio(`./audios/${e}`);c(a),a.play()};return(0,t.jsx)(l.Z,{title:"Music List",description:"Search and filter through a list of songs",children:(0,t.jsxs)("main",{className:"min-h-screen bg-gray-50 py-8 px-4",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold text-center mb-8 text-gray-800",children:"Music Showcase"}),(0,t.jsxs)("div",{className:"max-w-4xl mx-auto mb-6 flex flex-wrap gap-4",children:[(0,t.jsx)("input",{type:"text",placeholder:"Search by song title",value:e,onChange:e=>a(e.target.value),className:"flex-1 border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"}),(0,t.jsxs)("select",{value:i,onChange:e=>n(e.target.value),className:"border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400",children:[(0,t.jsx)("option",{value:"",children:"All Genres"}),(0,t.jsx)("option",{value:"Pop",children:"Pop"}),(0,t.jsx)("option",{value:"Rock",children:"Rock"}),(0,t.jsx)("option",{value:"Jazz",children:"Jazz"}),(0,t.jsx)("option",{value:"Classical",children:"Classical"})]})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto",children:u.map(e=>(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden relative",children:[(0,t.jsx)("img",{src:`./images/${e.cover}`,alt:e.title,className:"w-full h-60 object-cover"}),(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h2",{className:"text-lg font-bold text-gray-800",children:e.title}),(0,t.jsxs)("p",{className:"text-gray-600",children:["by ",e.artist]}),(0,t.jsx)("span",{className:"inline-block text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1",children:e.genre})]}),(0,t.jsx)("button",{onClick:()=>d(e.audio),className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300",children:"\u25B6 Play"})]},e.id))})]})})}}}]);