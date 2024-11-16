import{r as h,a as M,m as p,A as _,R as P}from"./vendor-11abf4c3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}})();var B={exports:{}},w={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=h,G=Symbol.for("react.element"),T=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,V=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function L(t,s,i){var r,a={},c=null,o=null;i!==void 0&&(c=""+i),s.key!==void 0&&(c=""+s.key),s.ref!==void 0&&(o=s.ref);for(r in s)z.call(s,r)&&!q.hasOwnProperty(r)&&(a[r]=s[r]);if(t&&t.defaultProps)for(r in s=t.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:G,type:t,key:c,ref:o,props:a,_owner:V.current}}w.Fragment=T;w.jsx=L;w.jsxs=L;B.exports=w;var e=B.exports,k={},F=M;k.createRoot=F.createRoot,k.hydrateRoot=F.hydrateRoot;const D=()=>{const[t,s]=h.useState({currentRating:"",currentReviews:"",desiredRating:""}),[i,r]=h.useState(null),[a,c]=h.useState({currentRating:!1,currentReviews:!1,desiredRating:!1}),o=()=>{const n=parseFloat(t.currentRating||"3.9"),l=parseInt(t.currentReviews||"10"),d=parseFloat(t.desiredRating||"4.5");if(isNaN(n)||isNaN(l)||isNaN(d))return;const g=n*l;if(d*(l+1)-g>5){const b=Math.ceil((d*(l+1)-n*l)/(5-d));r(b)}else r(1)},x=()=>{s({currentRating:"",currentReviews:"",desiredRating:""}),r(null),c({currentRating:!1,currentReviews:!1,desiredRating:!1})},m=(n,l)=>{const d=n.target.value;l==="currentRating"||l==="desiredRating"?(d===""||parseFloat(d)>=0&&parseFloat(d)<=5)&&s(g=>({...g,[l]:d})):(d===""||parseInt(d)>=0)&&s(g=>({...g,[l]:d}))},f=n=>{c(l=>({...l,[n]:!0}))},u=n=>{if(c(l=>({...l,[n]:!1})),t[n]===""){const l={currentRating:"3.9",currentReviews:"10",desiredRating:"4.5"};s(d=>({...d,[n]:l[n]}))}};return e.jsx(p.div,{id:"calculator",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"mt-12 border border-charcoal border-opacity-20 rounded-lg overflow-hidden",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 p-6 md:p-8",children:[e.jsxs("div",{className:"space-y-6 text-left self-start",children:[e.jsx("p",{className:"text-lg text-charcoal leading-relaxed font-semibold",children:"Use the Star Calculator to figure out how many reviews your brand needs to increase your average rating, overall search rank, and acquire more customers."}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-semibold text-charcoal",children:"Did you know?"}),e.jsxs("ul",{className:"space-y-4",children:[e.jsxs("li",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-coral",children:"•"}),e.jsx("span",{className:"text-charcoal opacity-80",children:"63.6% of consumers check reviews on Google before visiting a business"})]}),e.jsxs("li",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-coral",children:"•"}),e.jsx("span",{className:"text-charcoal opacity-80",children:"A positive online reputation is of the strongest marketing assets a business can have"})]}),e.jsxs("li",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-coral",children:"•"}),e.jsx("span",{className:"text-charcoal opacity-80",children:"94% of consumers will avoid a business due to its negative online reviews"})]})]})]})]}),e.jsxs("div",{className:"bg-cream rounded-lg p-6",children:[e.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[e.jsx("div",{className:"bg-coral rounded-full p-3",children:e.jsx("svg",{className:"w-6 h-6 text-cream",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-charcoal text-left",children:"Star Rating Calculator"}),e.jsx("p",{className:"text-charcoal opacity-60 text-left mt-1",children:"Calculate how many 5-star Google reviews your business needs to improve star rating/rank."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"currentRating",className:"block text-sm font-medium text-charcoal mb-1 text-left",children:"Current Google rating"}),e.jsx("input",{type:"number",id:"currentRating",min:"0",max:"5",step:"0.1",value:a.currentRating?t.currentRating:t.currentRating||"",onChange:n=>m(n,"currentRating"),onFocus:()=>f("currentRating"),onBlur:()=>u("currentRating"),placeholder:"3.9",className:"w-full px-3 py-2 border border-charcoal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-coral text-charcoal placeholder-gray-400"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"currentReviews",className:"block text-sm font-medium text-charcoal mb-1 text-left",children:"Current number of Google reviews"}),e.jsx("input",{type:"number",id:"currentReviews",min:"0",value:a.currentReviews?t.currentReviews:t.currentReviews||"",onChange:n=>m(n,"currentReviews"),onFocus:()=>f("currentReviews"),onBlur:()=>u("currentReviews"),placeholder:"10",className:"w-full px-3 py-2 border border-charcoal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-coral text-charcoal placeholder-gray-400"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"desiredRating",className:"block text-sm font-medium text-charcoal mb-1 text-left",children:"Desired Google rating"}),e.jsx("input",{type:"number",id:"desiredRating",min:"0",max:"5",step:"0.1",value:a.desiredRating?t.desiredRating:t.desiredRating||"",onChange:n=>m(n,"desiredRating"),onFocus:()=>f("desiredRating"),onBlur:()=>u("desiredRating"),placeholder:"4.5",className:"w-full px-3 py-2 border border-charcoal border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-coral text-charcoal placeholder-gray-400"})]}),e.jsx("button",{onClick:i===null?o:x,className:"w-full bg-coral text-cream py-3 rounded-md hover:bg-charcoal transition-colors font-medium",children:i===null?"Calculate my rating":"Reset calculator"}),e.jsx(_,{children:i!==null&&e.jsxs(p.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-charcoal bg-opacity-5 rounded-md",children:e.jsxs("p",{className:"text-charcoal font-medium",children:["You need approximately ",e.jsx("span",{className:"text-coral font-bold",children:i})," new 5-star reviews to reach your desired rating."]})}),e.jsxs(p.a,{href:"#contact",initial:{scale:1},animate:{scale:[1,1.05,1]},transition:{duration:2,repeat:1/0,repeatType:"reverse"},className:"block w-full bg-charcoal text-cream py-3 px-6 rounded-md text-center font-medium hover:bg-coral transition-colors",style:{animation:"pulse 2s infinite"},children:["Help Me Get ",i," 5-Star Reviews"]})]})})]})]})]})})},U=()=>e.jsxs("div",{className:"relative bg-cream overflow-hidden",children:[e.jsx("div",{className:"floating-star hero-star-1"}),e.jsx("div",{className:"floating-star hero-star-2"}),e.jsx("div",{className:"floating-star hero-star-3"}),e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"relative z-10 pb-8 bg-cream sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32",children:e.jsx("main",{className:"mt-36 mx-auto max-w-7xl px-4 sm:mt-36 sm:px-6 md:mt-36 lg:mt-36 lg:px-8 xl:mt-36",children:e.jsxs(p.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center",children:[e.jsxs("h1",{className:"text-4xl tracking-tight font-extrabold text-charcoal sm:text-5xl md:text-6xl",children:[e.jsx("span",{className:"block",children:"Boost Your Business with"}),e.jsx("span",{className:"block text-coral",children:"Better Reviews"})]}),e.jsx("p",{className:"mt-3 text-base text-charcoal opacity-80 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl",children:"Transform your Google Business Profile into a powerful marketing tool. We help businesses improve their online reputation and star ratings to attract more customers."}),e.jsx("div",{className:"mt-5 mb-[70px] sm:mt-8 flex justify-center",children:e.jsx("div",{className:"rounded-md shadow",children:e.jsx("a",{href:"#contact",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cream bg-charcoal hover:bg-coral transition-colors md:py-4 md:text-lg md:px-10",children:"Get Started"})})}),e.jsxs("div",{className:"max-w-7xl mx-auto relative",children:[e.jsx("div",{className:"floating-star calc-star-1"}),e.jsx("div",{className:"floating-star calc-star-2"}),e.jsx(D,{})]})]})})})})]});var C=new Map,N=new WeakMap,I=0,$=void 0;function W(t){return t?(N.has(t)||(I+=1,N.set(t,I.toString())),N.get(t)):"0"}function Y(t){return Object.keys(t).sort().filter(s=>t[s]!==void 0).map(s=>`${s}_${s==="root"?W(t.root):t[s]}`).toString()}function H(t){const s=Y(t);let i=C.get(s);if(!i){const r=new Map;let a;const c=new IntersectionObserver(o=>{o.forEach(x=>{var m;const f=x.isIntersecting&&a.some(u=>x.intersectionRatio>=u);t.trackVisibility&&typeof x.isVisible>"u"&&(x.isVisible=f),(m=r.get(x.target))==null||m.forEach(u=>{u(f,x)})})},t);a=c.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:s,observer:c,elements:r},C.set(s,i)}return i}function J(t,s,i={},r=$){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const m=t.getBoundingClientRect();return s(r,{isIntersecting:r,target:t,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:m,intersectionRect:m,rootBounds:m}),()=>{}}const{id:a,observer:c,elements:o}=H(i),x=o.get(t)||[];return o.has(t)||o.set(t,x),x.push(s),c.observe(t),function(){x.splice(x.indexOf(s),1),x.length===0&&(o.delete(t),c.unobserve(t)),o.size===0&&(c.disconnect(),C.delete(a))}}function O({threshold:t,delay:s,trackVisibility:i,rootMargin:r,root:a,triggerOnce:c,skip:o,initialInView:x,fallbackInView:m,onChange:f}={}){var u;const[n,l]=h.useState(null),d=h.useRef(),[g,R]=h.useState({inView:!!x,entry:void 0});d.current=f,h.useEffect(()=>{if(o||!n)return;let y;return y=J(n,(E,S)=>{R({inView:E,entry:S}),d.current&&d.current(E,S),S.isIntersecting&&c&&y&&(y(),y=void 0)},{root:a,rootMargin:r,threshold:t,trackVisibility:i,delay:s},m),()=>{y&&y()}},[Array.isArray(t)?t.toString():t,n,a,r,c,o,i,m,s]);const j=(u=g.entry)==null?void 0:u.target,b=h.useRef();!n&&j&&!c&&!o&&b.current!==j&&(b.current=j,R({inView:!!x,entry:void 0}));const v=[l,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const K=()=>{const[t,s]=O({triggerOnce:!0,threshold:.1}),i=[{title:"Review Management Strategy",description:"Proactively manage and respond to customer reviews across platforms.",icon:"⭐"},{title:"Rating Optimization",description:"Strategic approaches to improve your overall star rating.",icon:"📈"},{title:"Profile Enhancement",description:"Optimize your Google Business Profile for maximum visibility.",icon:"🎯"}];return e.jsx("div",{id:"features",className:"py-12 bg-cream",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs(p.div,{ref:t,initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.8},className:"lg:text-center",children:[e.jsx("h2",{className:"text-base text-coral font-semibold tracking-wide uppercase",children:"Features"}),e.jsx("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-charcoal sm:text-4xl",children:"Better Reviews, Better Business"})]}),e.jsx("div",{className:"mt-10",children:e.jsx("div",{className:"grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3",children:i.map((r,a)=>e.jsx(p.div,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.8,delay:a*.2},className:"relative",children:e.jsxs("div",{className:"bg-off-white p-6 rounded-lg shadow-sm",children:[e.jsx("div",{className:"text-4xl mb-4",children:r.icon}),e.jsx("h3",{className:"text-lg font-medium text-charcoal",children:r.title}),e.jsx("p",{className:"mt-2 text-base text-charcoal opacity-80",children:r.description})]})},a))})})]})})},Q=()=>{const[t,s]=O({triggerOnce:!0,threshold:.1}),i=[{title:"Review Generation",description:"Implement strategies to encourage satisfied customers to leave positive reviews."},{title:"Profile Optimization",description:"Optimize your Google Business Profile with compelling content and images."},{title:"Review Response Strategy",description:"Professional response handling strategies for both positive and negative reviews."},{title:"Rating Analysis",description:"In-depth analysis of your current ratings and strategic improvement plans."}];return e.jsx("div",{id:"services",className:"py-12 bg-off-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs(p.div,{ref:t,initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.8},className:"lg:text-center mb-12",children:[e.jsx("h2",{className:"text-base text-coral font-semibold tracking-wide uppercase",children:"Services"}),e.jsx("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-charcoal sm:text-4xl",children:"Comprehensive Review Strategies"})]}),e.jsx("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2",children:i.map((r,a)=>e.jsxs(p.div,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.8,delay:a*.2},className:"bg-cream p-6 rounded-lg",children:[e.jsx("h3",{className:"text-xl font-bold text-charcoal mb-2",children:r.title}),e.jsx("p",{className:"text-charcoal opacity-80",children:r.description})]},a))})]})})},X=()=>{const[t,s]=O({triggerOnce:!0,threshold:.1});return e.jsx("div",{id:"contact",className:"bg-charcoal",children:e.jsxs(p.div,{ref:t,initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.8},className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between",children:[e.jsxs("h2",{className:"text-3xl font-extrabold tracking-tight text-cream sm:text-4xl",children:[e.jsx("span",{className:"block",children:"Ready to improve your Google Business Profile rating?"}),e.jsx("span",{className:"block text-coral",children:"Get started today."})]}),e.jsx("div",{className:"mt-8 flex lg:mt-0 lg:flex-shrink-0",children:e.jsx("div",{className:"inline-flex rounded-md shadow",children:e.jsx("a",{href:"mailto:contact@5stars.agency",className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-charcoal bg-cream hover:bg-coral hover:text-cream transition-colors",children:"Contact Us"})})})]})})},Z=()=>e.jsx("footer",{className:"bg-cream border-t border-charcoal border-opacity-10",children:e.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-2xl font-bold text-charcoal",children:"5Stars.agency"}),e.jsx("p",{className:"mt-2 text-charcoal opacity-80",children:"Helping businesses improve their online presence through better reviews and ratings."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-charcoal font-semibold mb-4",children:"Quick Links"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:e.jsx("a",{href:"#features",className:"text-charcoal opacity-80 hover:text-coral transition-colors",children:"Features"})}),e.jsx("li",{children:e.jsx("a",{href:"#services",className:"text-charcoal opacity-80 hover:text-coral transition-colors",children:"Services"})}),e.jsx("li",{children:e.jsx("a",{href:"#contact",className:"text-charcoal opacity-80 hover:text-coral transition-colors",children:"Contact"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-charcoal font-semibold mb-4",children:"Contact"}),e.jsx("p",{className:"text-charcoal opacity-80",children:"Email: contact@5stars.agency"})]})]}),e.jsx("div",{className:"mt-8 border-t border-charcoal border-opacity-10 pt-8",children:e.jsxs("p",{className:"text-center text-charcoal opacity-80",children:["© ",new Date().getFullYear()," 5Stars.agency. All rights reserved."]})})]})}),ee=()=>{const[t,s]=h.useState(!1),[i,r]=h.useState(!1);return h.useEffect(()=>{const a=()=>{s(window.scrollY>10)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),e.jsxs("nav",{className:`fixed w-full z-50 transition-all duration-300 ${t?"bg-cream shadow-sm":"bg-transparent"}`,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("a",{href:"#",className:"text-2xl font-bold text-charcoal hover:text-coral transition-colors",children:"5Stars.agency"})}),e.jsx("div",{className:"hidden md:block",children:e.jsxs("div",{className:"ml-10 flex items-baseline space-x-4",children:[e.jsx("a",{href:"#calculator",className:"text-charcoal hover:text-coral px-3 py-2 transition-colors",children:"5 Star Calculator"}),e.jsx("a",{href:"#features",className:"text-charcoal hover:text-coral px-3 py-2 transition-colors",children:"Features"}),e.jsx("a",{href:"#services",className:"text-charcoal hover:text-coral px-3 py-2 transition-colors",children:"Services"}),e.jsx("a",{href:"#contact",className:"bg-charcoal text-cream px-4 py-2 rounded-md hover:bg-coral transition-colors",children:"Contact Us"})]})}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:()=>r(!i),className:"text-charcoal p-2","aria-label":"Toggle menu",children:e.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:i?e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),e.jsx(_,{children:i&&e.jsx(p.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-cream",children:e.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[e.jsx("a",{href:"#calculator",className:"block text-charcoal hover:text-coral px-3 py-2 rounded-md transition-colors",onClick:()=>r(!1),children:"5 Star Calculator"}),e.jsx("a",{href:"#features",className:"block text-charcoal hover:text-coral px-3 py-2 rounded-md transition-colors",onClick:()=>r(!1),children:"Features"}),e.jsx("a",{href:"#services",className:"block text-charcoal hover:text-coral px-3 py-2 rounded-md transition-colors",onClick:()=>r(!1),children:"Services"}),e.jsx("a",{href:"#contact",className:"block bg-charcoal text-cream px-3 py-2 rounded-md hover:bg-coral transition-colors",onClick:()=>r(!1),children:"Contact Us"})]})})})]})};function te(){return h.useEffect(()=>{const t=document.querySelectorAll(".star"),s=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&r.target.classList.add("visible")})},{threshold:.1});return t.forEach(i=>s.observe(i)),()=>s.disconnect()},[]),e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsx("div",{className:"star star-1"}),e.jsx("div",{className:"star star-2"}),e.jsx("div",{className:"star star-3"}),e.jsx(ee,{}),e.jsxs("main",{children:[e.jsx(U,{}),e.jsx(K,{}),e.jsx(Q,{}),e.jsx(X,{})]}),e.jsx(Z,{})]})}k.createRoot(document.getElementById("root")).render(e.jsx(P.StrictMode,{children:e.jsx(te,{})}));
//# sourceMappingURL=index-ec3e738d.js.map