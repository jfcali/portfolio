(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(161),s=a(159),o=a(163),l=a.n(o),d=(a(150),a(151)),c=a.n(d),u=function(e){return r.a.createElement("div",{style:{display:e.visible?"flex":"none"},className:c.a.Detail,onClick:function(){return e.hide()}},e.image?r.a.createElement(l.a,{fluid:e.image,style:{minWidth:"1000px"}}):null)},f=function(e){var t=Object(i.useState)(!1),a=t[0],n=t[1],s=Object(i.useState)(),o=s[0],d=s[1],c=function(e,t){void 0===t&&(t=6);for(var a=[],i=0;i<e.length;i+=t)a.push(e.slice(i,i+t));return a}([].concat(e.images,e.images));return console.log(c),r.a.createElement("div",{style:{paddingBottom:"250px"}},c.map(function(e,t){return r.a.createElement("div",{className:"ImageLayout",style:{height:340*e.length+"px"},key:t},e.map(function(e,t){var a=["Thumbnail","Image-"+t%10];return r.a.createElement("div",{onClick:function(){n(!0),d(e.node.childImageSharp.fluid)}},r.a.createElement(l.a,{key:t,fluid:e.node.childImageSharp.fluid,className:a.join(" ")}))}))}),r.a.createElement(u,{visible:a,hide:function(){return n(!1)},image:o}))};a.d(t,"pageQuery",function(){return p});var p="2351020390";t.default=function(e){return r.a.createElement(n.a,{lightMode:!0},r.a.createElement(s.a,{title:"Portrait",keywords:["gatsby","application","react"]}),r.a.createElement(f,{images:e.data.portraits.edges}))}},155:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(156);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},156:function(e,t,a){var i;e.exports=(i=a(158))&&i.default||i},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},159:function(e,t,a){"use strict";var i=a(160),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(162),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=i.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},161:function(e,t,a){"use strict";var i=a(157),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(155),d=a(143),c=a.n(d),u=function(e){var t=e.title,a=e.address,i=e.position,r=void 0===i?1:i,s=e.lightMode,o=1===r?"TopLeft":2===r?"TopRight":3===r?"BottomRight":"BottomLeft";return n.a.createElement(l.a,{to:a,className:[c.a.Link,c.a[o]].join(" "),style:{color:s?"black":null}},t)},f=(a(144),function(e){return n.a.createElement(l.b,{query:"755544856",render:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,{title:"HOME",address:"/",position:1,lightMode:e.lightMode}),n.a.createElement(u,{title:"INFO",address:"/info",position:2,lightMode:e.lightMode}),n.a.createElement("main",null,e.children),n.a.createElement("footer",null,"© ",(new Date).getFullYear()," DIANA FERNANDA VÉLEZ"))},data:i})});f.propTypes={children:o.a.node.isRequired};t.a=f},163:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(74)),l=i(a(75)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,S=e.Tag,w=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,L=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:E?1:0,transition:L?"opacity "+v+"ms":"none"},o),I="boolean"==typeof b?"lightgray":b,O={transitionDelay:v+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&O,o,f),j={title:t,alt:this.state.isVisible?"":a,style:k,className:p};if(h){var N=h;return d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),I&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&O)}),N.base64&&d.default.createElement(y,(0,l.default)({src:N.base64},j)),N.tracedSVG&&d.default.createElement(y,(0,l.default)({src:N.tracedSVG},j)),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},N))}}))}if(g){var z=g,T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete T.display,d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},I&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:I,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},L&&O)}),z.base64&&d.default.createElement(y,(0,l.default)({src:z.base64},j)),z.tracedSVG&&d.default.createElement(y,(0,l.default)({src:z.tracedSVG},j)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(y,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},z))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-portrait-js-3404047a2e4fdf76dc77.js.map