(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[817],{99017:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(19692),l=n(13465),o=n(67294),a=n(55714),i=(n(25444),n(7431));var u=function(e){var t,n,r,u=e.location,c=e.sidebarItems,s=(t="sidebar",n=o.useRef(),r=o.useCallback((function(e){return window.sessionStorage.setItem(t,e.target.scrollTop)}),[t]),o.useEffect((function(){var e=window.sessionStorage.getItem(t);e&&n.current&&(n.current.scrollTop=e)}),[t]),{ref:n,onScroll:r});return Array.isArray(c)&&c.length>0?o.createElement(l.Z,{display:["none",null,null,"block"],position:"sticky",top:a.M,height:"calc(100vh - "+a.M+"px)",minWidth:260,maxWidth:360,color:"auto.gray.8",bg:"auto.gray.0"},o.createElement(l.Z,Object.assign({borderStyle:"solid",borderColor:"border.primary"},s,{borderWidth:0,borderRightWidth:1,borderRadius:0,height:"100%",style:{overflow:"auto"}}),o.createElement(l.Z,{display:"flex",flexDirection:"column"},o.createElement(i.Z,{location:u,items:c})))):null},c=n(13081);var s=function(e){var t=e.children,n=e.location,r=e.pageContext,i=r.sidebarItems,s=r.tagsGroups,f=r.slug,p=(0,c.u)(i,s);return o.createElement(l.Z,{display:"flex",flexDirection:"column",minHeight:"100vh",bg:"bg.primary",color:"text.primary"},o.createElement(a.Z,{currentSlug:f,location:n,sidebarItems:p,tagsGroups:s}),o.createElement(d,{display:"flex",flex:"1 1 auto",flexDirection:"row"},o.createElement(u,{location:n,sidebarItems:p}),o.createElement(l.Z,{as:"main",flex:"1"},t)))},d=(0,r.ZP)(l.Z).withConfig({displayName:"layout___StyledBox",componentId:"sc-7a5ttt-0"})({zIndex:0})},28565:function(e,t,n){"use strict";var r=n(67294),l=n(81969),o=n(13465),a=n(65754),i=n(2393);t.Z=function(e){var t=e.tag,n=e.nodes,u=e.shouldShowInstantView,c=void 0!==u&&u,s=e.forceMobile,d=void 0!==s&&s,f=(0,i.Z)(),p=n.sort((function(e,t){var n=new Date(e.fields.lastUpdatedAt||0).getTime();return new Date(t.fields.lastUpdatedAt||0).getTime()-n})),m=function(e){return r.createElement(l.Z.a,Object.assign({},e,{references:c?p:[]}))};return r.createElement(o.Z,null,r.createElement(l.Z.h2,null,"# ",t),r.createElement(o.Z,null,r.createElement(l.Z.ul,null,p&&p.map((function(e){return r.createElement("li",{key:e.fields.slug},r.createElement(m,{href:e.fields.slug},e.fields.title),f.shouldShowLastUpdated&&e.fields.lastUpdated&&!d&&r.createElement(a.Z,{display:["none",null,null,"inline-block"],color:"text.placeholder",fontSize:1},"  - ",f.lastUpdatedText," ",e.fields.lastUpdated),f.shouldShowLastUpdated&&e.fields.lastUpdated&&r.createElement(o.Z,{display:d?"block":["block",null,null,"none"],color:"text.placeholder",fontSize:1,mb:2,mt:1},f.lastUpdatedText," ",e.fields.lastUpdated))})))))}},69107:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(19692),l=n(67294),o=n(46725),a=n(99017),i=n(13465),u=n(11624),c=n(83935),s=n(19446),d=n(81969),f=n(96125),p=r.ZP.li.withConfig({displayName:"reference-li__ReferenceLi",componentId:"sc-1rtyfvw-0"})(['margin-bottom:10px;&:before{content:"\\2022";color:',";display:inline-block;width:",";margin-left:-",";}"],(0,f.U2)("colors.text.placeholder"),(0,f.U2)("space.3"),(0,f.U2)("space.3")),m=function(e){var t=e.references;return t.length?l.createElement(i.Z,{bg:"auto.gray.1",borderRadius:"2",px:"3",py:"4",mt:"4"},l.createElement(u.Z,{as:"h4",fontSize:"2",mb:"3",color:"text.placeholder"},l.createElement(c.Z,{mr:2,size:16,sx:{top:"-3px",position:"relative"},icon:s.xPt,color:"text.placeholder"}),"LINKS TO THIS PAGE"),l.createElement(d.Z.ul,{style:{paddingLeft:"16px",listStyle:"none"}},t.map((function(e){return l.createElement(p,{key:e.fields.slug},l.createElement(d.Z.a,{href:e.fields.slug,references:[e]},e.fields.title||e.fields.slug))})))):null},g=n(64983),x=n(81705),b=n(65754),h=n(55714),y=n(61427),E=n(2393);var v=function(e){var t=e.lastUpdated,n=(0,E.Z)(),r=n.lastUpdatedText;return n.shouldShowLastUpdated?l.createElement("div",null,t?l.createElement(b.Z,{fontSize:1,color:"auto.gray.7",mt:1},r," ",l.createElement("b",null,t)):null):null};function Z(e){var t=e.editUrl,n=e.lastUpdated,r=(0,E.Z)();return t||n?l.createElement(i.Z,{borderStyle:"solid",borderColor:"border.primary",borderWidth:0,borderTopWidth:1,borderRadius:0,mt:8,py:5},l.createElement(i.Z,{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},t?l.createElement(y.Z,{mb:"1",href:t},l.createElement(c.Z,{icon:s.vdY,mr:2}),r.editUrlText):null,n&&l.createElement(v,{lastUpdated:n}))):null}Z.defaultProps={contributors:[]};var w=Z;function S(e){var t=e.items,n=e.depth,r=function(e,t){var n=l.useState(),r=n[0],o=n[1],a=l.useRef();return l.useEffect((function(){var n=e.filter((function(e){return document.querySelector(e)})).map((function(e){return document.querySelector(e)}));return a.current&&a.current.disconnect(),a.current=new IntersectionObserver((function(e){e.forEach((function(e){null!=e&&e.isIntersecting&&o(e.target.getAttribute("id"))}))}),t),n.forEach((function(e){return a.current.observe(e)})),function(){return a.current.disconnect()}}),[e,t]),r}(t.map((function(e){return'[id="'+e.url.slice(1)+'"]'})),{rootMargin:"0% 0% -24% 0%"});return l.createElement(A,{as:"ul",m:0,p:0},t.map((function(e){return l.createElement(i.Z,{as:"li",key:e.url,pl:n>0?3:0},e.title?l.createElement(y.Z,{display:"inline-block",py:1,href:e.url,fontSize:[2,null,1],color:"auto.gray.6",sx:{fontWeight:e.url==="#"+r?"bold":"medium"},"aria-current":e.url==="#"+r?"location":void 0},e.title):null,e.items?l.createElement(S,{items:e.items,depth:n+1}):null)})))}S.defaultProps={depth:0};var U=S,A=(0,r.ZP)(i.Z).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-1jtv948-0"})({listStyle:"none"}),I=n(21804),O=n.n(I),j=n(28565),k=function(e){var t=e.tags,n=e.nodes;return t.length?l.createElement(i.Z,{bg:"auto.gray.1",borderRadius:"2",px:"3",py:"4",mt:"4"},l.createElement(u.Z,{as:"h4",fontSize:"2",mb:"3",color:"text.placeholder"},l.createElement(c.Z,{mr:1,size:16,sx:{top:"-3px",position:"relative"},icon:s.aqf,color:"text.placeholder"}),"Tags"),l.createElement(d.Z.ul,{style:{paddingLeft:"16px",listStyle:"none"}},t.map((function(e){var t=[{fields:{slug:"/tags/"+O()(e)+"/"},component:l.createElement(j.Z,{forceMobile:!0,nodes:n.filter((function(t){return t.frontmatter.tags.includes(e)})),tag:e})}];return l.createElement(p,{key:e},l.createElement(d.Z.a,{href:"/tags/"+O()(e)+"/",references:t,mr:3},"#",e))}))),l.createElement(i.Z,null)):null},T=n(13081);function C(e){var t=e.type,n=void 0===t?"normal":t,r=e.title,o=e.url,a=e.items,i=e.depth,u=void 0===i?0:i;return a=a||[],l.createElement("li",null,l.createElement(d.Z.a,{href:o},"tag"===n?"#"+r:r),Array.isArray(a)&&a.length>0?l.createElement(d.Z.ul,null,a.map((function(e,t){return l.createElement(C,Object.assign({key:e.title,depth:u+1},e))}))):null)}var R=function(e){var t=e.data,n=e.pageContext,r=e.location,c=t.mdx,s=t.tagsOutbound||{nodes:[]},f=(0,E.Z)(),p=(0,T.u)(n.sidebarItems,n.tagsGroups),y=c.tableOfContents,v=c.frontmatter,Z=c.fields,S=c.rawBody,A=c.body,I=c.inboundReferences,O=c.outboundReferences,j=c.excerpt,R=Z.title,D=Z.lastUpdatedAt,L=Z.lastUpdated,W=Z.gitCreatedAt,_=Z.slug,M=Z.url,N=Z.editUrl,P=Z.shouldShowTitle,G=v.date,H=v.description,B=v.imageAlt,Y=v.dateModified,q=v.tags,J=v.language,K=v.seoTitle,V=q&&q[0],X=G?new Date(G):W?new Date(W):null,$={title:R,shouldShowTitle:P,description:H,rawBody:S,excerpt:j,datePublished:X,seoTitle:K,dateModified:Y?new Date(Y):D?new Date(D):X,category:V,imageUrl:v.image?v.image.publicURL:null,imageAlt:B,url:M,slug:_,tags:q||[],language:J};return l.createElement(a.Z,{pageContext:n,location:r},l.createElement(x.Z,{post:$}),l.createElement(i.Z,{id:"skip-nav",display:"flex",width:"100%",p:[4,5,6,7],sx:{justifyContent:"center",flexDirection:"row-reverse"}},y.items?l.createElement(z,{sx:{width:220,flex:"0 0 auto",marginLeft:6},display:["none",null,"block"],position:"sticky",top:h.M+24,maxHeight:"calc(100vh - "+h.M+"px - 24px)"},l.createElement(b.Z,{display:"inline-block",fontWeight:"bold",mb:1},"On this page"),l.createElement(U,{items:y.items})):null,l.createElement(i.Z,{width:"100%",maxWidth:"960px"},P&&l.createElement(i.Z,{mb:4},l.createElement(i.Z,{display:"flex",sx:{alignItems:"center"}},l.createElement(u.Z,{as:"h1",mr:2},R))),y.items?l.createElement(i.Z,{borderWidth:"1px",borderStyle:"solid",borderColor:"border.primary",borderRadius:2,display:["block",null,"none"],mb:5,bg:"auto.gray.1"},l.createElement(i.Z,{p:3},l.createElement(i.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},l.createElement(b.Z,{fontWeight:"bold"},"On this page"))),l.createElement(i.Z,{p:3,sx:{borderTop:"1px solid",borderColor:"border.gray"}},l.createElement(U,{items:y.items}))):null,l.createElement(g.MDXProvider,{components:{a:function(e){return l.createElement(d.Z.a,Object.assign({},e,{references:O}))}}},l.createElement(o.MDXRenderer,null,A)),"/"===_&&f.shouldShowSidebarListOnIndex&&p.length>0&&p.map((function(e){return l.createElement(i.Z,{key:e.title},l.createElement(d.Z.h2,null,e.title),e.items.map((function(e){return l.createElement(d.Z.ul,{key:e.title},l.createElement(C,{title:e.title,url:e.url,type:e.type,items:e.items}))})))})),l.createElement(m,{references:I}),f.shouldSupportTags&&l.createElement(k,{tags:q,nodes:s.nodes}),l.createElement(w,{editUrl:N,lastUpdated:L}))))},z=(0,r.ZP)(i.Z).withConfig({displayName:"post-page___StyledBox",componentId:"sc-17hbw1s-0"})({gridArea:"table-of-contents",overflow:"auto"}),D=R},13081:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var r=function(e,t){return e.length>0?e:t.length>0?[{title:"Tags",items:t}]:[]}},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},29932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,l=Array(r);++n<r;)l[n]=t(e[n],n,e);return l}},62663:function(e){e.exports=function(e,t,n,r){var l=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++l]);++l<o;)n=t(n,e[l],l,e);return n}},49029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},44239:function(e,t,n){var r=n(62705),l=n(89607),o=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?l(e):o(e)}},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},80531:function(e,t,n){var r=n(62705),l=n(29932),o=n(1469),a=n(33448),i=r?r.prototype:void 0,u=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return l(t,e)+"";if(a(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},35393:function(e,t,n){var r=n(62663),l=n(53816),o=n(58748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(l(t).replace(a,"")),e,"")}}},69389:function(e,t,n){var r=n(18674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),l=Object.prototype,o=l.hasOwnProperty,a=l.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(u){}var l=a.call(e);return r&&(t?e[i]=n:delete e[i]),l}},93157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),l="object"==typeof self&&self&&self.Object===Object&&self,o=r||l||Function("return this")();e.exports=o},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",l="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+l+"]",a="\\d+",i="[\\u2700-\\u27bf]",u="["+n+"]",c="[^\\ud800-\\udfff"+l+a+t+n+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+r+"]",p="(?:"+u+"|"+c+")",m="(?:"+f+"|"+c+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",x="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?",y=h+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,d].join("|")+")"+h+b+")*"),E="(?:"+[i,s,d].join("|")+")"+y,v=RegExp([f+"?"+u+"+"+g+"(?="+[o,f,"$"].join("|")+")",m+"+"+x+"(?="+[o,f+p,"$"].join("|")+")",f+"?"+p+"+"+g,f+"+"+x,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,E].join("|"),"g");e.exports=function(e){return e.match(v)||[]}},53816:function(e,t,n){var r=n(69389),l=n(79833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=l(e))&&e.replace(o,r).replace(a,"")}},1469:function(e){var t=Array.isArray;e.exports=t},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),l=n(37005);e.exports=function(e){return"symbol"==typeof e||l(e)&&"[object Symbol]"==r(e)}},21804:function(e,t,n){var r=n(35393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},79833:function(e,t,n){var r=n(80531);e.exports=function(e){return null==e?"":r(e)}},58748:function(e,t,n){var r=n(49029),l=n(93157),o=n(79833),a=n(2757);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?l(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-primer-wiki-src-templates-post-query-js-1b76b0a2b653394bc675.js.map