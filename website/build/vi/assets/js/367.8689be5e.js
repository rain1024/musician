"use strict";(self.webpackChunkmusician=self.webpackChunkmusician||[]).push([["367"],{34709:function(e,t,n){n.d(t,{diagram:function(){return p}});var a=n(92453),r=n(94159),i=n(5995),s=n(3194),c={parse:(0,i.eW)(async e=>{let t=await (0,s.Qc)("info",e);i.cM.debug(t)},"parse")},d={version:a.i},u=(0,i.eW)(()=>d.version,"getVersion"),o=(0,i.eW)((e,t,n)=>{i.cM.debug("rendering info diagram\n"+e);let a=(0,r.P)(t);(0,i.v2)(a,100,400,!0),a.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${n}`)},"draw"),p={parser:c,db:{getVersion:u},renderer:{draw:o}}}}]);