(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(161),o=a(159);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},155:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(e,"a",function(){return c.a});a(156);var l=r.a.createContext({}),u=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(t,e,a){var n;t.exports=(n=a(158))&&n.default||n},157:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},158:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},159:function(t,e,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(162),l=a.n(c);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title,c=n.data.site,u=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=u},160:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},161:function(t,e,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(155),l=a(143),u=a.n(l),d=function(t){var e=t.title,a=t.address,n=t.position,r=void 0===n?1:n,o=t.lightMode,s=1===r?"TopLeft":2===r?"TopRight":3===r?"BottomRight":"BottomLeft";return i.a.createElement(c.a,{to:a,className:[u.a.Link,u.a[s]].join(" "),style:{color:o?"black":null}},e)},p=(a(144),function(t){return i.a.createElement(c.b,{query:"755544856",render:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{title:"HOME",address:"/",position:1,lightMode:t.lightMode}),i.a.createElement(d,{title:"INFO",address:"/info",position:2,lightMode:t.lightMode}),i.a.createElement("main",null,t.children),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," DIANA FERNANDA VÉLEZ"))},data:n})});p.propTypes={children:s.a.node.isRequired};e.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-5155dce8f3eb857a7cac.js.map