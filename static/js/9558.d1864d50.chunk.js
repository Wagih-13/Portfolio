"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9558],{9558:(e,t,a)=>{a.d(t,{ParallaxMover:()=>i});var n=a(4409);class i{init(){}isEnabled(e){return!(0,n.B9)()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){const t=e.container,a=t.actualOptions.interactivity.events.onHover.parallax;if((0,n.B9)()||!a.enable)return;const i=a.force,s=t.interactivity.mouse.position;if(!s)return;const o=t.canvas.size,r=.5*o.width,c=.5*o.height,l=a.smooth,p=e.getRadius()/i,u=(s.x-r)*p,v=(s.y-c)*p,{offset:y}=e;y.x+=(u-y.x)/l,y.y+=(v-y.y)/l}}}}]);
//# sourceMappingURL=9558.d1864d50.chunk.js.map