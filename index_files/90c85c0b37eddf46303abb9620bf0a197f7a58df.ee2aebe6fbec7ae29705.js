(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"0nYr":function(e,t,a){"use strict";var i=a("Fcif"),n=a("aNYv"),c=a("mXGw"),r=a.n(c),s=a("edSL"),o=a.n(s),l=a("Ya7B"),d=a("JdYZ"),u=a.n(d),m=a("MxvR"),p=a("LVxs"),f=a("f0JM"),_=r.a.createElement;t.a=function e(t){var a=t.articleText,r=t.path,s=void 0===r?"":r,d=t.ad,h=t.parent,y=void 0===h?"":h,v=t.classPrefix,b=Object(c.useContext)(l.a),k=Object(n.a)(b,1)[0].query.isAmp;return Array.isArray(a)?a.map((function(t,a){return t&&function(t,a){var n=t.type,c=t.name,r=void 0===c?"":c,s=t.data,l=t.children,h=t.attribs,b=void 0===h?{}:h,x=r,g=u()(b);switch(n){case"tag":switch(r){case"a":return _(p.a,{key:a,href:b.href,attributes:g},e({articleText:l,key:a,ad:d,classPrefix:v}));case"p":var w=null;return v&&(w="".concat(v,"-text"),"blockquote"!==y&&"cite"!==y||(w=null),"cite"===o()(l,"0.name")&&(w="".concat(v,"-cite")),"initial"===o()(l,"0.attribs.data-caps")&&(w+=" ".concat(v,"-text--dropcap"))),_("p",Object(i.a)({key:a},g,{className:w}),e({articleText:l,key:a,isAmp:k,ad:d,classPrefix:v}));case"img":return b.src?_(m.a,Object(i.a)({key:a,height:parseInt(b.height,10),width:parseInt(b.width,10),imgUrl:b.src,isAmp:k,slim:b["data-slim"],sizes:b["data-slim"]&&"0"!==b["data-slim"]?"300px":"(min-width: 720px) 640px, 95vw"},g)):null;case"video":return"";case"area":case"base":case"br":case"embed":case"hr":case"input":case"link":case"meta":case"param":case"source":case"track":case"col":case"wbr":return _(r,Object(i.a)({key:a},g));case"blockquote":return _("blockquote",Object(i.a)({key:a},g),e({articleText:l,key:a,isAmp:k,ad:d,parent:"blockquote",classPrefix:v}));case"cite":return _("cite",Object(i.a)({key:a},g),e({articleText:l,key:a,isAmp:k,ad:d,parent:"cite",classPrefix:v}));case"q":return _("q",Object(i.a)({key:a},g),e({articleText:l,key:a,isAmp:k,ad:d,classPrefix:v}));case"iframe":var N=b.id?"eid-".concat(b.id):null;return _("iframe",Object(i.a)({key:a,height:String(parseInt(b.height,10)),src:b.src,id:N},g));case"figure":switch(!0){case k&&"https://schema.org/WPAdBlock"===b.itemtype:return _(f.a,{ad:d,key:a,className:"advert advert--inline"});case!k&&"https://schema.org/WPAdBlock"===b.itemtype:return null;default:return _(x,Object(i.a)({key:a},g),e({articleText:l,key:a,isAmp:k,ad:d,classPrefix:v}))}case"aside":return _("aside",Object(i.a)({key:a},g,{className:v?"".concat(v,"-aside"):""}),e({articleText:l,key:a,isAmp:k,ad:d,classPrefix:v}));case"div":return b.container?_("div",Object(i.a)({key:a},g,{className:v?"".concat(v,"-container"):""}),e({articleText:l,key:a,isAmp:k,ad:d,classPrefix:v})):e({articleText:l,key:a,isAmp:k,ad:d,classPrefix:v});default:return _(x,Object(i.a)({key:a},g),e({articleText:l,key:a,isAmp:k,ad:d,classPrefix:v}))}case"text":return s.replace(/&amp;|&gt;|&lt;|&quot;/g,(function(e){switch(e){case"&amp;":return"&";case"&lt;":return"<";case"&gt;":return">";case"&quot;":return'"'}}));default:return""}}(t,"".concat(s,"-").concat(a))})):null}},JdYZ:function(e,t){e.exports=function(e){var t={};return Object.keys(e).forEach((function(a){a.startsWith("data-")&&(t[a]=e[a])})),t}},NylR:function(e,t,a){e.exports={"collection-item__image":"collection-item__image","collection-item":"collection-item","collection-item__title":"collection-item__title","collection-item__headline":"collection-item__headline","collection-item__subheadline":"collection-item__subheadline","collection-item__description":"collection-item__description"}},PGJm:function(e,t,a){e.exports={"headline-link":"headline-link","collection-item__headline":"collection-item__headline","edition-teaser__headline":"edition-teaser__headline","related-article__headline":"related-article__headline",teaser__headline:"teaser__headline"}},TFQB:function(e,t,a){"use strict";var i=a("edSL"),n=a.n(i),c=a("mXGw"),r=(a("dfnE"),function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.querySelector(".tp-modal"),a=document.querySelector(".tp-backdrop");e&&window.tp.offer.close(),t&&t.classList.add("closed"),a&&a.classList.add("closed")}),s=function(e){"Escape"!==e.key&&"Esc"!==e.key&&27!==e.key||r()},o=function(e){if((null===e||void 0===e?void 0:e.origin).includes("tinypass")){var t=JSON.parse(null===e||void 0===e?void 0:e.data);"close"===n()(t,"queryParams.event_group_id")&&r(!1)}},l=function(e){e.forEach((function(e){var t=Array.from(e.addedNodes);t.length>0&&t.forEach((function(e){e.className&&e.className.includes("tp-modal")&&(e.querySelector("button.tp-close").style.display="none",document.addEventListener("keyup",s),window.addEventListener("message",o,!1));e.className&&e.className.includes("tp-backdrop")&&e.addEventListener("click",r)}))}))};t.a=function(){Object(c.useEffect)((function(){var e=new MutationObserver(l);return e.observe(document.body,{childList:!0}),function(){var t=document.querySelector(".tp-backdrop");e.disconnect(),window.removeEventListener("message",o),document.removeEventListener("keyup",r),t.removeEventListener("click",r)}}),[])}},UJEe:function(e,t,a){"use strict";var i=a("mK0O"),n=a("mXGw"),c=a.n(n),r=a("8Jek"),s=a.n(r),o=a("Wq9A"),l=a.n(o),d=a("NylR"),u=a.n(d),m=a("vt2P"),p=a.n(m),f=c.a.createElement,_=function(e){var t,a=e.description,n=e.className,c=e.article,r=e.teaser,o=e.collection,d=s()((t={},Object(i.a)(t,p.a.article__description,c),Object(i.a)(t,l.a.teaser__description,r),Object(i.a)(t,u.a["collection-item__description"],o),t),n);return f("p",{"data-test-id":"Description",itemProp:"description",className:d},a)};_.defaultProps={description:null,className:null,article:!1,teaser:!1,collection:!1},t.a=_},W5Ya:function(e,t,a){e.exports={"section-fly":"section-fly"}},Wq9A:function(e,t,a){e.exports={teaser__image:"teaser__image",teaser__text:"teaser__text",teaser:"teaser","ds-layout-grid":"ds-layout-grid",teaser__headline:"teaser__headline","teaser--in-depth-lead":"teaser--in-depth-lead","teaser--in-depth":"teaser--in-depth",teaser__subheadline:"teaser__subheadline","teaser__headline--sc1":"teaser__headline--sc1","teaser__headline--sc2":"teaser__headline--sc2","teaser__headline--sc3":"teaser__headline--sc3","teaser__headline--sc4":"teaser__headline--sc4",teaser__description:"teaser__description","teaser__description--sc1":"teaser__description--sc1","teaser__description--sc2":"teaser__description--sc2","teaser--section-collection":"teaser--section-collection","teaser--graphic-detail":"teaser--graphic-detail","layout-highlights":"layout-highlights","layout-news-analysis":"layout-news-analysis","teaser--in-context-lead":"teaser--in-context-lead","teaser--in-context":"teaser--in-context","layout-columnists":"layout-columnists","layout-daily-chart":"layout-daily-chart","layout-moreover":"layout-moreover","teaser--readers-favourites":"teaser--readers-favourites","teaser--in-context-lead-minor":"teaser--in-context-lead-minor"}},dfnE:function(e,t,a){e.exports={"tp-backdrop":"tp-backdrop",closed:"closed","tp-modal":"tp-modal","tp-iframe-wrapper":"tp-iframe-wrapper"}},f0JM:function(e,t,a){"use strict";var i=a("mXGw"),n=a.n(i),c=a("obyI"),r=(a("mY7L"),n.a.createElement),s=c.envConfig.getConfigOption("adsDisabled"),o=c.envConfig.getConfigOption("adsConfig"),l=function(e){return e&&e.channels&&e.channels.map((function(e){return e.name}))},d=function(e,t,a){return"/5605/".concat(a,".").concat(e,"/").concat(t)},u=function(e){var t=e.ad,a=e.className,i=e.dataSize,n=e.disableAds,c=e.envName;if(!t)return null;var s=t.siteCode,o=t.zoneCode,u=t.grapeshot,m=n?null:r("amp-ad",{type:"doubleclick",width:"300",height:"250","data-slot":d(s,o,c),json:JSON.stringify({targeting:{amp:["y"],gs_cat:l(u)}})});return r("div",{"data-test-id":"AMP Inline Ad",className:[a,"advert--amp"].join(" "),"data-size":i},m)};u.defaultProps={className:"",dataSize:"",ad:null,disableAds:s,envName:o},t.a=u},pKUv:function(e,t,a){"use strict";var i=a("mXGw"),n=a.n(i),c=a("LVxs"),r=n.a.createElement,s=function(e){var t=e.sectionHeadline,a=e.sectionUrl,i=e.noPrintSection,n=e.className;return i?t:r(c.a,{href:a,className:n},t)};s.defaultProps={sectionHeadline:"",sectionUrl:"",className:null,noPrintSection:!1},t.a=s},uWhb:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("mXGw");function n(e,t,a){var n="undefined"!==typeof window.matchMedia?Object(i.useMemo)((function(){return e.map((function(e){return window.matchMedia(e)}))}),[e]):[],c=Object(i.useState)(a),r=c[0],s=c[1];return Object(i.useEffect)((function(){var e=function(){var e=function(){var e=n.findIndex((function(e){return e.matches}));return t[e]||a}();r!==e&&s(e)};return setTimeout(e,100),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[r]),r}},vt2P:function(e,t,a){e.exports={description:"description"}}}]);
//# sourceMappingURL=90c85c0b37eddf46303abb9620bf0a197f7a58df.ee2aebe6fbec7ae29705.js.map