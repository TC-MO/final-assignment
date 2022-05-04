"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[313],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"docs",title:"Documentation",sidebar_label:"Documentation purposes",sidebar_position:4,pagination_next:"images",pagination_prev:"html"},c=void 0,l={unversionedId:"docs",id:"docs",title:"Documentation",description:"Documentation: MD v HTML",source:"@site/docs/docs.md",sourceDirName:".",slug:"/docs",permalink:"/final-assignment/docs",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"docs",title:"Documentation",sidebar_label:"Documentation purposes",sidebar_position:4,pagination_next:"images",pagination_prev:"html"},sidebar:"tutorialSidebar",previous:{title:"HyperText Markup Language",permalink:"/final-assignment/html"},next:{title:"Images",permalink:"/final-assignment/images"}},u={},d=[{value:"Documentation: MD v HTML",id:"documentation-md-v-html",level:2},{value:"Markdown",id:"markdown",level:3},{value:"Docs-as-code",id:"docs-as-code",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"documentation-md-v-html"},"Documentation: MD v HTML"),(0,a.kt)("p",null,"The word documentation can be interpreted differently by many different people. For some documentation will be API references or developer docs allowing for use of some complicated framework for their purposes, for others it will be knowledge bases or simple user manuals."),(0,a.kt)("h3",{id:"markdown"},"Markdown"),(0,a.kt)("p",null,"Markdown is one of the most versatile markup languages allowing for it to be used in variety of different documentation projects. It became the go-to language of documentation for open-source projects. With the help of static site generators you can easily create a website that will showcase your documentation in easily digestible way for users."),(0,a.kt)("h3",{id:"docs-as-code"},"Docs-as-code"),(0,a.kt)("p",null,'Markdown became lately also the basis of "docs-as-code" philosophy in documentation. It focuses on creation of docs in such way to create as little friction between docs team and developers. This is done by utilizing MD which simple and lightweight syntax makes sure that anyone, even someone outside of docs team can contribute (of course under supervision), git for version control, and static site generator that creates website out of MD files. All of this creates an approach that makes sure that devs and docs team are working in unison.'))}f.isMDXComponent=!0}}]);