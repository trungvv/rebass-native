(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{377:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=f(n(1)),u=n(17),r=n(12),a=n(63),o=f(n(384)),d=f(n(423));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return l.default.createElement(r.Box,{px:2,mb:4},l.default.createElement(d.default,{code:e.code,style:{height:192,overflow:"hidden"}}),l.default.createElement(r.Divider,{my:1}),l.default.createElement(r.Pre,{fontSize:0},e.name))};t.default=function(e){return l.default.createElement("div",null,l.default.createElement(o.default,null,a.components.length," Components"),l.default.createElement(r.Flex,{flexWrap:"wrap",my:4},a.components.map(function(e){return l.default.createElement(r.BlockLink,{is:u.Link,to:"/components/"+e,key:e,width:[.5,.5,1/3,.25]},l.default.createElement(c,{name:e,code:a.examples[e]}))})))}},384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(n(8)),u=a(n(1)),r=n(12);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return u.default.createElement(r.Heading,(0,l.default)({},e,{is:"h1",fontSize:[5,6,7,8],my:4}))}},423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(8)),u=i(n(9)),r=i(n(1)),a=i(n(7)),o=n(109),d=n(12),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d),c=n(108);function i(e){return e&&e.__esModule?e:{default:e}}var s=(0,u.default)({},f,{checked:!0,update:function(){},toggle:function(){},styled:a.default,photo:c.photo});t.default=function(e){return r.default.createElement(o.LiveProvider,(0,l.default)({},e,{scope:s,mountStylesheet:!1}),r.default.createElement(d.Flex,{style:{height:192},alignItems:"center",justifyContent:"center"},r.default.createElement(o.LivePreview,null)))}}}]);