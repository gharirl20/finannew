_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"1yLg":function(e,a,t){"use strict";var n=t("mXGw"),i=t.n(n),r=t("edSL"),s=t.n(r),c=t("8Jek"),l=t.n(c),o=(t("mY7L"),t("UJEe")),d=t("pKUv"),u=t("MxvR"),p=t("LVxs"),m=t("PGJm"),g=t.n(m),h=t("W5Ya"),f=t.n(h),b=t("mZOe"),y=t("Wq9A"),_=t.n(y),w=i.a.createElement,v=function(e){var a,t=e.className,n=e.story,r=e.showDescription,c=e.showSectionLink,m=e.showImage,h=e.requiresGrid,y=e.descriptionScale,v=e.headlineScale,N=e.headerHierarchy,T=e.addFlyToHeaderLink,S=e.imageSizes;if(c){var O=s()(n,"articleSection.internal[0].headline"),P=s()(n,"articleSection.internal[0].url.canonical");O||(O=s()(n,"publication[0].headline"),P=s()(n,"publication[0].url.canonical")),a=w(d.a,{sectionHeadline:O,sectionUrl:P,className:f.a["section-fly"]})}var A=s()(n,"subheadline"),E=T&&A?w(i.a.Fragment,null,w("span",{className:"".concat(_.a.teaser__subheadline)},A),w("br",null)):w(i.a.Fragment,null),x=s()(n,"_metadata.description"),k=r&&x?w(o.a,{description:x,className:_.a["teaser__description--".concat(y)],teaser:!0}):w(i.a.Fragment,null),R=l()({"ds-layout-grid":h},_.a.teaser,t),I=[s()(n,"isPartOf[0].context.image.main"),s()(n,"image.promo"),s()(n,"image.main")].find((function(e){return s()(e,"url.canonical")})),U=s()(I,"url.canonical",Object(b.resolveAsset)("engassets/image-placeholder.svg")),C=N;return w("div",{"data-test-id":"Article Teaser",key:s()(n,"url.canonical"),className:R},w("div",{className:_.a.teaser__text},a,w(C,null,w(p.a,{className:g.a["headline-link"],href:s()(n,"url.canonical")},E,w("span",{className:"".concat(_.a.teaser__headline," ").concat(_.a["teaser__headline--".concat(v)])},s()(n,"_metadata.headline")))),k),m&&w(u.a,{imgUrl:U,width:s()(I,"width",640),height:s()(I,"height",360),className:_.a.teaser__image,sizes:S}))};v.defaultProps={className:"",showDescription:!0,showSectionLink:!0,showImage:!0,requiresGrid:!1,headerHierarchy:"h3",descriptionScale:"sc1",headlineScale:"sc1",addFlyToHeaderLink:!1,imageSizes:""},a.a=v},"ha+U":function(e,a,t){var n=t("bBV7").default,i=t("UKnr"),r=t("xPX6"),s=r.HTTP_STATUS_PERMANENT_REDIRECT,c=r.HTTP_STATUS_TEMPORARY_REDIRECT;e.exports=function(e){var a,t=e.url,r=e.res,l=e.permanent,o=void 0!==l&&l,d=e.querystring,u=void 0===d?{}:d;if(r){a=o?s:c;var p=Object.keys(u).length>0?"".concat(t.split("?")[0],"?").concat(i.stringify(u)):t;r.writeHead(a,{Location:p}),r.end()}else a=c,n.push(new URL(t).pathname);return{statusCode:a}}},u6UW:function(e,a,t){var n=t("O76R")((function(e,a,t){return e+(t?"-":"")+a.toLowerCase()}));e.exports=n},znlY:function(e,a,t){"use strict";t.r(a);var n=t("NthX"),i=t.n(n),r=t("eijD"),s=t("mK0O"),c=t("aNYv"),l=t("mXGw"),o=t.n(l),d=t("9fEB"),u=t.n(d),p=t("edSL"),m=t.n(p),g=t("OR6y"),h=t("obyI"),f=t("uZVl"),b=t("xPX6"),y=t("Ya7B"),_=t("zfIU"),w=t("ha+U"),v=t.n(w),N=t("i03E"),T=t("R9qi"),S=t("DN0B"),O=t("kUkN"),P=t("dg5f"),A=function(e){return e.data.map((function(e){var a=e.section;return{headline:e.title,articleSection:{internal:[{headline:a,url:{canonical:"/".concat(a.toLowerCase(),"/")}}]},url:{canonical:e.url},image:{main:{url:{canonical:e.image_url}}},_metadata:{headline:e.title}}}))},E=function(){var e=Object(r.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return A(e)})).catch((function(e){return f.logger.warn({level:"warn",time:Date.now(),message:e.message||"Error fetching content from Parsely",function:"useParselyRecommended",raw:e}),[]}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),x=function(){return window.PARSELY&&window.PARSELY.config&&window.PARSELY.config.apikey?window.PARSELY.config.apikey:"economist.com"},k=function(){var e=Object(l.useState)([]),a=e[0],t=e[1];return Object(l.useEffect)((function(){function e(){return(e=Object(r.a)(i.a.mark((function e(){var a,n,r,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Date).setMonth(a.getMonth()-3),n=window.location.href,r=x(),s="https://api.parsely.com/v2/related?apikey=".concat(r,"&url=").concat(n,'&boost=social_interactions&exclude=section:"Uncategorized"&limit=3&pub_date_start=').concat(a.toISOString()),e.next=7,E(s);case 7:c=e.sent,t(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a},R=t("cbCg"),I=t("4GH1"),U=t("mZOe"),C=o.a.createElement,L=function(){return C(o.a.Fragment,null,C("amp-geo",{layout:"nodisplay"},C(I.a,{type:"application/json"},JSON.stringify({ISOCountryGroups:{consentCountries:["al","ad","am","at","by","be","ba","bg","ch","cy","cz","de","dk","ee","es","fo","fi","fr","gb","ge","gi","gr","hu","hr","ie","is","it","lt","lu","lv","mc","mk","mt","no","nl","po","pt","ro","ru","se","si","sk","sm","tr","ua","uk","va"]}}))),C("amp-consent",{id:"evidon-amp-consent",layout:"nodisplay"},C(I.a,{type:"application/json"},JSON.stringify({consents:{gdpr:{promptIfUnknownForGeoGroup:"consentCountries",promptUI:"evidonConsent"}},postPromptUI:"post-consent-ui"})),C("div",{id:"evidonConsent",className:"popupOverlay"},C("div",{className:"consentPopup"},C("amp-iframe",{src:"https://amp.evidon.com/frame/2254",sandbox:"allow-scripts allow-same-origin",frameborder:"0",layout:"responsive",height:"900",width:"400",id:"cookie-notice-iframe"},C("amp-img",{placeholder:!0,src:Object(U.resolveAsset)("engassets/image-placeholder.svg"),layout:"fill"}))))))},j=t("CafY"),F=t("8Jek"),H=t.n(F),D=t("u6UW"),B=t.n(D),q=t("uWhb"),G=t("mY7L"),M=t("f0JM"),Y=t("3jRt"),z=t.n(Y),W=t("LVxs"),K=t("2EFN"),J=t.n(K),V=o.a.createElement,X=function(e){var a=e.sectionProps;return V(o.a.Fragment,null,V("div",{"data-test-id":"Blog Identity",className:"article__section"},V("strong",null,V("span",{"data-test-id":"Blog Section Subheadline",className:J.a["article__section-subheadline"]},a.sectionSubheadline),V("br",null),V("span",{id:"blogsiteheadline",className:J.a["article__section-headline"]},V(W.a,{href:a.sectionUrl,testId:"Blog Section Headline"},a.sectionHeadline)))))};X.defaultProps={sectionProps:{headline:"",subheadline:""}};var Q=X,Z=t("pKUv"),$=t("anmx"),ee=t.n($),ae=o.a.createElement,te=function(e){var a=e.publicationUrl,t=e.datePublishedString,n=ae(W.a,{href:a,testId:"Article Datetime",className:ee.a["article__section-edition"]},ae("span",null,t,"\xa0edition"));return a?n:null};te.defaultProps={sectionHeadline:"",sectionUrl:"",className:""};var ne=te,ie=o.a.createElement,re=function(e){var a=e.sectionProps,t=e.datePublishedString,n=e.noPrintSection;return ie(o.a.Fragment,null,ie("div",{className:J.a.article__section},ie("strong",{itemProp:"articleSection"},ie("span",{className:J.a["article__section-headline"]},ie(Z.a,{sectionHeadline:a.sectionHeadline,sectionUrl:a.sectionUrl,noPrintSection:n}))),ie(ne,{publicationUrl:a.publicationUrl,datePublishedString:t})))};re.defaultProps={sectionProps:"",datePublishedString:"",noPrintSection:!1};var se=re,ce=o.a.createElement,le=function(e){return"Technology Quarterly"===e._section.sectionHeadline||"Special report"===e._section.sectionHeadline},oe=function(e){var a=e.article;return"blog"===a._section.articleType?ce(Q,{sectionProps:a._section}):ce(se,{noPrintSection:le(a),sectionProps:a._section,datePublishedString:a.datePublishedString})},de=t("nv4L"),ue=t("zjFI"),pe=t("MxvR"),me=t("PGJm"),ge=t.n(me),he=t("svU5"),fe=t.n(he),be=o.a.createElement,ye=function(e){var a=e.articleUrl,t=e.headline,n=e.subheadline,i=e.image,r=e.firstRelatedArticle,s=r?"related-article__headline--lead":"",c=r?"(min-width: 1440px) 700px, (min-width: 800px) 45vw, 90vw":"(min-width: 1440px) 335px, (min-width: 800px) 25vw, (min-width: 360px) 45vw, 90vw";return be("div",{"data-test-id":"Related Article",className:fe.a["related-article"]},be("h3",{className:fe.a["related-article__header"]},be(W.a,{className:ge.a["headline-link"],href:a},be(o.a.Fragment,null,be("span",{className:fe.a["related-article__subheadline"]},n),be("br",null),be("span",{className:"".concat(fe.a["related-article__headline"]," ").concat(s)},t)))),i&&be(pe.a,{imgUrl:i,className:fe.a["related-article__image"],sizes:c}))};ye.defaultProps={articleUrl:"",headline:"",subheadline:"",image:"",firstRelatedArticle:!1};var _e=ye,we=t("QBKQ"),ve=t.n(we),Ne=t("ggLY"),Te=t.n(Ne),Se=o.a.createElement,Oe=function(e){var a,t=m()(e,"_section.articleType");return"print"===t||"online"===t||"1843"===t?a=function(e){return m()(e,"articleSection.internal[0].hasPart.parts",null)}(e):"blog"===t&&(a=m()(e,"publication[0].hasPart.parts",null)),a},Pe=function(e){return m()(e,"image.promo.url.canonical",m()(e,"image.main.url.canonical",null))},Ae=function(e){var a=e.article,t=e.noPrintSection,n=function(e){var a=Oe(e);return a?a.filter((function(a){return!a.headline.includes(e.headline)})).slice(0,3):null}(a),i=m()(a,"_section.sectionUrl"),r=m()(a,"_section.sectionHeadline");return n?Se("div",{className:Te.a["related-articles"]},Se(ue.a,{collections:n}),Se("div",{className:"ds-layout-grid ds-layout-grid--edged ".concat(ve.a["layout-related-articles"])},Se(de.r,{headline:"More from ".concat(r),rule:"accent",type:"h2"}),Se(o.a.Fragment,null,n.map((function(e,a){return Se(_e,{key:e.id,image:Pe(e),subheadline:e.subheadline,headline:e.headline,section:r,articleUrl:e.url.canonical,sectionUrl:i,firstRelatedArticle:0===a,noPrintSection:t})}))))):null};Ae.defaultProps={article:{},noPrintSection:!1};var Ee=Ae,xe=o.a.createElement,ke=function(){return xe("div",{itemScope:!0,itemProp:"publisher",itemType:"https://schema.org/NewsMediaOrganization"},xe("meta",{itemProp:"name",content:"The Economist"}),xe("div",{itemScope:!0,itemProp:"logo",itemType:"https://schema.org/ImageObject"},xe("meta",{itemProp:"url",content:Object(U.resolveAsset)("engassets/google-search-logo.png")})))},Re=function(e){var a=e.url,t=e.dateModified,n=e.datePublished;return xe(o.a.Fragment,null,xe(ke,null),xe("link",{href:a,itemProp:"mainEntityOfPage"}),xe("meta",{itemProp:"dateModified",content:t}),xe("meta",{itemProp:"datePublished",content:n}))};Re.defaultProps={url:"",dateModified:"",datePublished:""};var Ie=Re,Ue=t("IIDs"),Ce=t("f4t7"),Le=t.n(Ce),je=o.a.createElement,Fe=function(e){var a=e.article;return je("div",{"data-test-id":"Lead Image",className:Le.a["article__lead-image"]},je(pe.a,{imgUrl:a.image.main.url.canonical,width:a.image.main.width,height:a.image.main.height,sizes:"(min-width: 1440px) 940px, (min-width: 1080px) 75vw, (min-width: 960px) 90vw, (min-width: 800px) 720px, 95vw"}))};Fe.defaultProps={article:{}};var He=Fe,De=t("vh0J"),Be=t.n(De),qe=o.a.createElement,Ge=function(e){var a=e.description;return qe("p",{"data-test-id":"Article Description",itemProp:"description",className:Be.a.article__description},a)},Me=t("D+ci"),Ye=t.n(Me),ze=o.a.createElement,We=function(e){var a,t=e.headline,n=e.subheadline;return a=n?ze(o.a.Fragment,null,ze("span",{"data-test-id":"Article Subheadline",className:Ye.a.article__subheadline},n),ze("br",null)):null,ze("h1",null,a,ze("span",{"data-test-id":"Article Headline",itemProp:"headline",className:Ye.a.article__headline},t))};We.defaultProps={subheadline:""};var Ke=We,Je=o.a.createElement,Ve=["article__body-text","article__body-text-image","article__body-cite","article__body-aside"],Xe=["figure","blockquote","iframe","h2","h3","q","iframe","cite","table","ol","ul","img"],Qe=function(e,a,t){return Je(o.a.Fragment,{key:t},e,Je(Ue.InContentAd,{targetingArgs:{pos:t.toString()},className:"advert--inline"}))},Ze=function(e,a,t){return!a&&!(Object(N.e)(e)||t||b.SECTIONS_WITHOUT_RIGHT_RAIL.includes(m()(e,"articleSection.internal[0].id")))},$e=function(e){var a=m()(e,"props.children[0].props.src");return!(!a||!a.includes("infographics.economist.com"))},ea=function(e){return Boolean(m()(e,"props['data-infographic-class']")||m()(e,"props['data-infographic-js']")||m()(e,"props['data-infographic-css']")||m()(e,"props['data-interactive-class']"))},aa=t("LRqA"),ta=t.n(aa),na=o.a.createElement,ia=function(){var e=Object(l.useContext)(y.a)[0].query.isAmp;return na("div",{className:ta.a.article__wordmark},na("a",{href:"/1843"},e?na("amp-img",{alt:"1843 Magazine \u2014 Long reads and life",src:"https://cdn.design-system.economist.com/assets/latest/1843/static/images/wordmark/wordmark-magazine.svg",width:"352",height:"94",layout:"intrinsic"}):na("img",{src:"https://cdn.design-system.economist.com/assets/latest/1843/static/images/wordmark/wordmark-magazine.svg",alt:"1843 Magazine \u2014 Long reads and life"})))},ra=o.a.createElement,sa="ds-rule ".concat(ve.a["layout-article-header__rule"]),ca="ds-layout-grid ds-layout-grid--edged ".concat(ve.a["layout-article-header"]),la=function(e){var a=e.article,t=e.accessType,n=Object(l.useContext)(y.a)[0].query.isAmp,i=m()(a,"image.main.url.canonical",null),r="1843"===Object(N.c)(a);return ra("div",{className:ca},r&&ra(ia,null),i&&ra(He,{article:a}),ra("header",{className:Le.a.article__header},ra(Ke,{headline:a.headline,subheadline:a.subheadline}),ra(Ge,{description:a.description,article:!0})),ra(oe,{article:a}),ra("hr",{className:sa}),Ze(a,n,"paywall"===t)&&ra(Ue.RightHandRailAd,{targetingArgs:{pos:"r0"},className:"advert--right-rail"}))};la.defaultProps={article:{},accessType:void 0};var oa=la,da=t("W0B4"),ua=t.n(da),pa=t("+2gB"),ma=t("0nYr"),ga=t("Fcif"),ha=t("6CzD"),fa=t("JdYZ"),ba=t.n(fa),ya=o.a.createElement,_a={numberOfTagsToGroupWith:4,allowedGroupSelectors:["p","ul",".article__body-text"],disallowedGroupSelectors:["p.article__body-cite"],soloGroupSelectors:["ul"]},wa=function(e){if(!Array.isArray(e))return e;var a=[];function t(e){var t=ya("div",{className:"article__body-text-image",key:e},a);return a=[],t}function n(e,a){var t=a.split("."),n=Object(c.a)(t,2),i=n[0],r=n[1];return i&&r?e.type===i&&r===e.class:e.type===i||r&&r===e.class}return e.reduce((function(i,r,s){var c,l=e.length===s+1,o=(c=r,"1"===m()(c,"props.children[0].props.slim")||function(e){return m()(e,"props.children[0].type")===W.a&&"1"===m()(e,"props.children[0].props.children.props.children[0].props.slim")}(r)),d={type:m()(r,"type"),class:m()(r,"props.className")};if(a.length>_a.numberOfTagsToGroupWith&&i.push(t(s)),l&&a.length)return a.push(r),[].concat(Object(ha.a)(i),[t(s)]);if(a.length){if(function(e){var t=_a.allowedGroupSelectors,i=_a.disallowedGroupSelectors,r=_a.soloGroupSelectors,s=t.some((function(a){return n(e,a)}))&&!i.some((function(a){return n(e,a)})),c=!a.some((function(e){return r.includes(e.type)}));return s&&c}(d))return a.push(r),i;i.push(t(s))}return _a.numberOfTagsToGroupWith&&o?(a.push(r),i):[].concat(Object(ha.a)(i),[r])}),[])},va=function(e){return Array.isArray(e)?e.map((function(e,a){return m()(e,"props.data-infographic-class")?ya("figure",Object(ga.a)({className:e.props["data-infographic-class"]},ba()(e.props),{key:a})):e})):e},Na=function(e){var a,t=e.text,n=e.ad,i=(e.articleId,Object(l.useContext)(y.a)),r=Object(c.a)(i,1)[0].query.isAmp,s=Object(ma.a)({articleText:t,ad:n,classPrefix:"article__body"});return s=va(s),s=wa(s),a=s,s=Array.isArray(a)?a.map((function(e){if("p"!==m()(e,"type"))return e;var a=e;return a.props.children.forEach((function(e,t){"figure"===e.type&&(a.props.children.push(e.props.children),delete a.props.children[t])})),a})):a,r||(s=function(e,a){if(!Array.isArray(e))return e;var t=!1,n=!1,i=!1,r=!1,s=0,c=0,l=0;return e.filter((function(e){return($e(e)||ea(e))&&(l+=1),e})).map((function(a,o){var d=$e(a)||ea(a);if(e.length-(2+l)<=o||c>=15||d)return a;var u=(m()(a,"props.className")||"").split(" "),p=m()(a,"type");return(u.find((function(e){return Ve.includes(e)}))||Xe.includes(p))&&(s+=1),t||2!==s?t&&!n&&4===s?(n=!0,s=0,Qe(a,0,c+=1)):n&&!i&&12===s?(i=!0,s=0,Qe(a,0,c+=1)):i&&!r&&8===s?(r=!0,s=0,Qe(a,0,c+=1)):i&&8===s?(s=0,Qe(a,0,c+=1)):a:(t=!0,s=0,Qe(a,0,c+=1))}))}(s,0)),s};Na.defaultProps={text:[],ad:{},articleId:null},Na.propTypes={text:ua.a.instanceOf(Array),ad:ua.a.shape({}),articleId:ua.a.string};var Ta=Na,Sa=function(e){var a=e.text;return a?va(Object(ma.a)({articleText:a.slice(0,2),classPrefix:"article__body"})):null};Sa.defaultProps={text:[]},Sa.propTypes={text:ua.a.instanceOf(Array)};var Oa=Sa,Pa=o.a.createElement,Aa=function(){return Pa("div",{className:ve.a["layout-article-shade"]})},Ea=t("JWL8"),xa=t.n(Ea),ka=o.a.createElement,Ra=function(e){var a=e.printSection,t=e.headline,n=e.articleType;return a&&"1843"!==n?ka("p",{"data-test-id":"Footnote",className:xa.a.article__footnote},"This article appeared in the ".concat(a,' section of the print edition under the headline "').concat(t,'"')):null};Ra.defaultProps={printSection:"",headline:"",articleType:""};var Ia=Ra,Ua=t("uBUR"),Ca=t.n(Ua),La=o.a.createElement,ja=function(e){var a=e.byline,t=a?"by ".concat(a):null,n=La("meta",{itemProp:"author",content:"The Economist"});return t?La("p",{"data-test-id":"Article Byline",className:Ca.a.article__byline,itemProp:"byline"},t):n},Fa=t("80Fm"),Ha=t.n(Fa),Da=o.a.createElement,Ba=function(e){var a=e.datePublished,t=e.datePublishedString;return Da("time",{itemScope:!0,itemType:"http://schema.org/DateTime",dateTime:a,className:Ha.a["article__dateline-datetime"]},t)},qa=o.a.createElement,Ga=function(e){var a=e.dateline;return a?qa("p",{"data-test-id":"Dateline",itemType:"http://schema.org/dateline",className:Ha.a["article__dateline-location"]},a):null};Ga.defaultProps={dateline:""};var Ma=Ga,Ya=o.a.createElement,za=function(e){var a=e.isAmp,t=e.article;return Ya("aside",{className:Le.a.article__aside},Ya("div",{className:Le.a["layout-article-meta"]},Ya(Ba,{datePublished:t.datePublished,datePublishedString:t.datePublishedString}),Ya(ja,{byline:t.byline}),Ya(Ma,{dateline:t.dateline})),!a&&Ya(de.s,{url:t.url.canonical,platforms:["Facebook","Twitter","LinkedIn","WhatsApp"],text:m()(t,"_metadata.shareSnippet","")}))};za.defaultProps={isAmp:!1,article:{}};var Wa=za,Ka=t("XI9S"),Ja=o.a.createElement,Va=function(e){return(m()(e,"publication")||[]).find((function(e){return(m()(e,"type")||[]).includes("Report")}))},Xa=function(e){var a,t=e.article,n=Va(t);if(!n)return null;var i=m()(n,"hasPart.parts",[]).map((function(e,n){var i={href:m()(e,"url.canonical",""),text:e.headline,id:e.id};return e.id===t.id&&(a=n),i}));return Ja(Ka.e,{sectionHeadline:n.headline,sectionSubheadline:n.subheadline,chapterList:i,selected:a})};Xa.defaultProps={article:{}};var Qa=Xa,Za=t("1yLg"),$a=t("Yv9E"),et=t.n($a),at=o.a.createElement,tt=function(e){var a=e.stories,t=e.aside;return at("div",{className:t?et.a["article-recirculation-aside"]:et.a["article-recirculation"]},at("div",{className:t?"":"ds-layout-grid ds-layout-grid--edged"},at(de.r,{headline:"Recommended",rule:"accent",type:"h2"}),a.map((function(e){return at(Za.a,{story:e,className:et.a["teaser--article-recirculation"],showDescription:!1,key:e.headline,headlineScale:t?"sc1":"sc2",imageSizes:"(min-width: 1440px) 335px, (min-width: 960px) 25vw, (min-width: 360px) 45vw, 80vw"})}))))};tt.defaultProps={aside:!1,stories:[]};var nt=tt,it=o.a.createElement,rt="ds-layout-grid ds-layout-grid--edged ".concat(ve.a["layout-article-body"]),st=function e(a){var t=a.article,n=a.recommended,i=a.accessType;return it("div",{className:rt,itemProp:"text"},Ze(t,!1,"paywall"===i)&&it("div",{className:"layout-sticky-rail"},it("div",{className:"layout-sticky-rail-advert-wrapper"},it(Ue.RightHandRailAd,{targetingArgs:{pos:"r1"},className:"advert--right-rail advert--sticky-rail"}))),it(Wa,{article:t,isAmp:!1}),it(e.Content,{type:i,article:t,recommended:n}))};st.Content=function(e){var a=e.type,t=e.article,n=e.recommended,i=m()(t,"tegID","");if("paywall"===a)return it(o.a.Fragment,null,it(Oa,{text:t.text}),it(Aa,null),it("div",{className:"paywall"},it("div",{id:"tp-paywall","data-test-id":"Paywall"})));if("regwall"===a)return it(o.a.Fragment,null,it(Oa,{text:t.text}),it("div",{className:"layout-article-regwall",id:"tp-regwall","data-test-id":"Regwall"}),it(Ue.InContentAd,{targetingArgs:{pos:"1"},className:"advert--regwall"}));var r=m()(t,"print.section",null),s=m()(t,"print.headline",t.headline),c=m()(r,"headline",null),l=m()(t,"_section.articleType");return it(o.a.Fragment,null,it(Ta,{ad:t.ad,text:t.text,articleId:i,className:"".concat(z.a.advert," ").concat(z.a["advert--inline"])}),n.length>0&&it(nt,{stories:n,aside:!0}),it(Qa,{article:t}),it(Ia,{printSection:c,headline:s,articleType:l}),it("div",{className:"".concat(ve.a["layout-article-links"])},it(de.a,{target:"_blank",href:Object(N.d)(t),text:"Reuse this content",icon:"reuse-this-content"}),it(de.a,{href:"https://www.economist.com/about-the-economist",text:"The Trust Project",icon:"the-trust-project"})))};var ct={article:ua.a.shape({_section:ua.a.shape({sectionHeadline:ua.a.string,sectionUrl:ua.a.string,articleType:ua.a.string}),id:ua.a.string,headline:ua.a.string,text:ua.a.arrayOf(ua.a.object),datePublished:ua.a.string,dateModified:ua.a.string,ad:pa.a}),recommended:ua.a.arrayOf(ua.a.shape({headline:ua.a.string.isRequired,articleSection:G.a.isRequired,image:G.b.isRequired})),type:ua.a.oneOf(["regwall","paywall","unwalled","unknown"])};st.Content.defaultProps={type:void 0,recommended:[]},st.Content.propTypes={type:ct.type,article:ct.article.isRequired,recommended:ct.recommended},st.Content.displayName="ArticleBody.Content",st.defaultProps={article:{},accessType:void 0,recommended:[]};var lt=st,ot=t("ANzm"),dt=t.n(ot),ut=o.a.createElement,pt=function(){var e=Object(l.useContext)(y.a),a=Object(c.a)(e,1)[0].query.isAmp;return ut(o.a.Fragment,null,ut("div",{className:dt.a["layout-newsguard"]},ut("span",{className:dt.a["newsguard-logo"]},function(e){return e?ut("amp-img",{width:"7rem",height:"1.1875rem",src:Object(U.resolveAsset)("engassets/newsguard-logo.png"),alt:"Newsguard logo"}):ut("img",{src:Object(U.resolveAsset)("engassets/newsguard-logo.png"),alt:"Newsguard logo"})}(a)),ut("div",{className:dt.a["newsguard-description"]},ut("span",{className:dt.a["newsguard-description__check"]},function(e){return e?ut("amp-img",{width:"1rem",height:"1.3125rem",src:Object(U.resolveAsset)("engassets/newsguard-check.svg"),alt:"Newsguard check"}):ut("img",{src:Object(U.resolveAsset)("engassets/newsguard-check.svg"),alt:"Newsguard check"})}(a)),ut("p",{className:dt.a["newsguard-description__text"]},"This website adheres to all nine of NewsGuard\u2018s standards of credibility and transparency."))))},mt=t("rLTk"),gt=t.n(mt),ht=t("itIP"),ft=t.n(ht),bt=t("OLWA"),yt=t.n(bt),_t=o.a.createElement,wt=function(e,a){return a?_t(o.a.Fragment,null,_t("span",{"amp-access":"c.region = 'UK'","amp-access-hide":""},"50% off your first 12 weeks"),_t("span",{"amp-access":"c.region = 'Europe'","amp-access-hide":""},"50% off your first 12 weeks"),_t("span",{"amp-access":"c.region = 'North America'","amp-access-hide":""},"50% off your first 12 weeks"),_t("span",{"amp-access":"c.region = 'Other'","amp-access-hide":""},"Save on annual and multi-year packages")):function(e){var a="";switch(e){case"North America":case"Europe":case"UK":a="50% off your first 12 weeks";break;case"Other":default:a="Save on annual and multi-year packages"}return a}(e.region)},vt=function(e,a){return a?_t(o.a.Fragment,null,_t("span",{"amp-access":"c.region = 'UK'","amp-access-hide":""},"Navigate an uncertain world with ",_t("i",null,"The Economist")),_t("span",{"amp-access":"c.region = 'Europe'","amp-access-hide":""},"Navigate an uncertain world with ",_t("i",null,"The Economist")),_t("span",{"amp-access":"c.region = 'North America'","amp-access-hide":""},"Navigate an uncertain world with ",_t("i",null,"The Economist")),_t("span",{"amp-access":"c.region = 'Other'","amp-access-hide":""},"Navigate an uncertain world with ",_t("i",null,"The Economist"))):function(e){var a;switch(e){case"North America":case"Europe":case"UK":a=_t(o.a.Fragment,null,"Navigate an uncertain world with ",_t("i",null,"The Economist"));break;case"Other":default:a=_t(o.a.Fragment,null,"Subscribe to ",_t("i",null,"The Economist"))}return a}(e.region)},Nt=function(e,a){return a?_t(o.a.Fragment,null,_t("span",{"amp-access":"c.region = 'UK'","amp-access-hide":""},"Cancel at any time"),_t("span",{"amp-access":"c.region = 'Europe'","amp-access-hide":""},"Cancel at any time"),_t("span",{"amp-access":"c.region = 'North America'","amp-access-hide":""},"Cancel at any time"),_t("span",{"amp-access":"c.region = 'Other'","amp-access-hide":""},"Cancel at any time")):"Cancel at any time"},Tt=function(e){var a=e.loginLink,t=e.signupLink,n=Object(l.useContext)(y.a),i=Object(c.a)(n,1)[0],r=i.query.isAmp,s=i.auth;return _t(o.a.Fragment,null,_t("div",{"data-test-id":"Regwall",id:"amp-regwall",className:gt.a.regwall},_t("div",{className:ft.a["layout-regwall-login"]},_t("span",{className:gt.a["regwall__login-text"]},"Already signed up?"),_t("a",{on:"tap:amp-access.login-sign-in",href:a,"data-test-id":"Regwall Log in",id:"regwall-login-link",tabIndex:"0",className:"".concat(gt.a["regwall__text-link"])},_t("em",null,"Log in"))),_t("div",{"data-test-id":"Regwall Subscription Area",className:ft.a["layout-regwall-subscribe"]},_t("h2",{"data-test-id":"Regwall Headline",className:gt.a.regwall__headline},"What happens next?"),_t("p",{className:gt.a.regwall__subheadline},vt(s,r)),_t("div",{className:ft.a["layout-regwall-offer"]},_t("p",{className:gt.a.regwall__offer},wt(s,r)),_t(Ka.d,{"data-test-id":"Regwall Subscribe Button",tabIndex:"0",on:"tap:amp-access.login-subscribe-regwall",href:h.envConfig.getSubscribeLink(b.SUBSCRIBE_LINK_REGWALL),text:"View subscription options"}),_t("p",{className:gt.a["regwall__small-print"]},Nt(0,r))),_t("ul",{className:yt.a["subscriber__benefits-list"]},_t("li",{className:yt.a["subscriber__benefits-list__item"]},"We ",_t("strong",null,"filter out the noise")," of the daily news cycle and analyse the trends that matter"),_t("li",{className:yt.a["subscriber__benefits-list__item"]},"We give you rigorous, deeply researched and fact-checked journalism. That\u2019s why Americans named us their"," ",_t("strong",null,"most trusted news source")," in 2017"),_t("li",{className:yt.a["subscriber__benefits-list__item"]},_t("strong",null,"Available wherever you are"),"\u2014in digital, print and, uniquely, in audio, fully narrated by professional broadcasters")),_t(pt,null)),_t("div",{className:ft.a["layout-regwall-divider"]},_t("hr",{className:"ds-rule"}),_t("span",null,"OR"),_t("hr",{className:"ds-rule"})),_t("h2",{className:"".concat(gt.a.regwall__headline," ").concat(gt.a["regwall__headline--secondary"])},"Continue reading this article"),_t("a",{className:gt.a["regwall__text-link"],on:"tap:amp-access.login-sign-up",tabIndex:"0",href:t,id:"regwall-signup-link","data-test-id":"Regwall Join Button"},"Register with an email address")))};Tt.defaultProps={loginLink:"",signupLink:""};var St=Tt,Ot=t("t2n2"),Pt=t.n(Ot),At=t("1Ada"),Et=t.n(At),xt=o.a.createElement,kt=function(e){var a=e.testId;return xt(Ka.d,{"data-test-id":a,tabIndex:"0",on:"tap:amp-access.login-subscribe-paywall",href:h.envConfig.getSubscribeLink(b.SUBSCRIBE_LINK_PAYWALL),text:"View subscription options"})};kt.defaultProps={testId:"Subscribe CTA"};var Rt=function(e){return xt("h2",{"data-test-id":"Paywall Offer",className:Pt.a.paywall__offer},"Other"===e?xt(o.a.Fragment,null,"Offer: Save on yearly subscriptions"):function(e){return xt("strong",null,"UK"===e||"Europe"===e||"North America"===e?"50% off your first 12 weeks":"You\u2019ve reached your article limit")}(e))},It=function(e,a){return a?xt("h2",{"data-test-id":"Paywall Offer",className:Pt.a.paywall__offer},xt("span",{"amp-access":"c.region = 'UK'","amp-access-hide":""},xt("strong",null,"50% off your first 12 weeks")),xt("span",{"amp-access":"c.region = 'Europe'","amp-access-hide":""},xt("strong",null,"50% off your first 12 weeks")),xt("span",{"amp-access":"c.region = 'North America'","amp-access-hide":""},xt("strong",null,"50% off your first 12 weeks")),xt("span",{"amp-access":"c.region = 'Other'","amp-access-hide":""},"Offer: Save on yearly subscriptions")):Rt(e.region)},Ut=function(){var e=Object(l.useContext)(y.a),a=Object(c.a)(e,1)[0],t=a.query.isAmp,n=a.auth;return xt(o.a.Fragment,null,xt("div",{"data-test-id":"Paywall",className:Pt.a.paywall},function(e,a){return(a||!a&&e.region)&&xt("div",{"data-test-id":"Paywall Counter",className:Et.a["layout-paywall-counter"]},xt("span",{className:Pt.a.paywall__countdown},"No free articles remaining"))}(n,t),xt("div",{className:"".concat(Et.a["layout-paywall-content"]," ds-layout-grid")},xt("div",{className:Et.a["layout-paywall-offer"]},It(n,t)),xt("h3",{"data-test-id":"Paywall Headline One",className:Pt.a.paywall__headline},"The world at your fingertips"),xt("p",{"data-test-id":"Paywall Summary",className:Pt.a.paywall__summary},"Join our community of readers. Subscribe now to the most trusted voice* in global affairs."),xt("span",{"data-test-id":"Paywall Footnote",className:Pt.a.paywall__footnote},"*Trusting News Project Report 2017"),xt("div",{className:Et.a["layout-paywall-cta"]},xt(kt,{testId:"Paywall Subscribe Upper"})),xt("h3",{"data-test-id":"Paywall Headline Two",className:Pt.a.paywall__headline},"Subscriber-only benefits"),xt("ul",{"data-test-id":"Subscriber Benefits List",className:"".concat(yt.a["subscriber__benefits-list"]," ").concat(Et.a["layout-benefits-list"])},xt("li",{className:yt.a["subscriber__benefits-list__item"]},"Full access to all Economist digital products"),xt("li",{className:yt.a["subscriber__benefits-list__item"]},"Read and listen offline with ",xt("i",null,"The Economist app")),xt("li",{className:yt.a["subscriber__benefits-list__item"]},"Subscribers-only daily briefing newsletter & app"),xt("li",{className:yt.a["subscriber__benefits-list__item"]},"The full weekly edition, in digital, print and audio")),xt("div",{className:Et.a["layout-paywall-cta-lower"]},xt(kt,{testId:"Paywall Subscribe Lower"})),xt(pt,null))))},Ct="NOT ".concat("(NOT cm AND NOT c)"," AND NOT loggedIn"),Lt="NOT ".concat("(NOT cm AND NOT c)",' AND (loggedIn AND cm.viewsLeft <= 0 AND s.isSubscriber = "false")'),jt="".concat("(NOT cm AND NOT c)",' OR (s.isSubscriber = "true" OR (cm.viewsLeft > 0 AND s.isSubscriber = "false"))'),Ft=o.a.createElement,Ht="ds-layout-grid ds-layout-grid--edged ".concat(ve.a["layout-article-body"]),Dt={className:Ht,"amp-access-hide":"",itemProp:"text"},Bt=function(e){var a=e.article,t=m()(a,"print.section",null),n=m()(t,"headline",null),i=m()(a,"print.headline",a.headline),r=m()(a,"_section.articleType"),s=Ft(o.a.Fragment,null,Ft(Wa,{article:a,isAmp:!0}),Ft(Oa,{text:a.text}));return Ft(o.a.Fragment,null,Ft("div",{"amp-access":jt},Ft("div",Dt,Ft(Wa,{article:a,isAmp:!0}),Ft(Ta,{ad:a.ad,text:a.text}),Ft(Ia,{printSection:n,headline:i,articleType:r}),Ft("div",{className:"".concat(ve.a["layout-article-links"])},Ft(de.a,{target:"_blank",href:Object(N.d)(a),text:"Reuse this content",icon:"reuse-this-content"}),Ft(de.a,{href:"https://www.economist.com/about-the-economist",text:"The Trust Project",icon:"the-trust-project"})))),Ft("div",Object(ga.a)({"amp-access":Ct,id:"regwall__wrapper"},Dt),s,Ft("div",{className:"layout-article-regwall","amp-access-hide":""},Ft(St,null))),Ft("div",Object(ga.a)({"amp-access":Lt},Dt),s,Ft(Ut,null),Ft(Aa,null)))};Bt.defaultProps={article:{}};var qt=Bt,Gt=t("xNPW"),Mt=t.n(Gt),Yt=o.a.createElement,zt=function(){return Yt("div",{className:"ds-layout-grid ds-layout-grid--edged ".concat(Mt.a["newsletter-signup"])},Yt("div",{className:Mt.a["newsletter-signup__text"]},Yt("h2",{className:Mt.a["newsletter-signup__header"]},"The best of our journalism, hand-picked each day"),Yt("p",{className:Mt.a["newsletter-signup__description"]},"Sign up to our free daily newsletter, The Economist today"),Yt(de.j,{href:"https://my.economist.com/user#newsletter",text:"Sign up now",minor:!0})),Yt(pe.a,{className:Mt.a["newsletter-signup__image"],imgUrl:Object(U.resolveAsset)("engassets/illustration/newsletter-signup.svg"),layout:"intrinsic",height:162,width:252,useStructuredData:!1,alt:"A hand holding a newspaper"}))},Wt=(t("dVeh"),t("AxAz"),o.a.createElement),Kt=["hub","graphic-detail","special-report","technology-quarterly","the-world-this-week"],Jt=function(e){var a=e.article,t=e.recommended,n=e.accessType,i=Object(l.useContext)(y.a)[0],r=i.query.isAmp,c=i.auth.loggedIn,o=void 0!==c&&c,d=Object(q.a)(["(max-width: 959px)"],[!0],!1),u=m()(a,"_section.sectionHeadline"),p=Object(N.e)(a)?"interactive":null,g=m()(a,"_section.articleType"),h=B()(u),f=H()([Le.a.article,"article--".concat(g),Object(s.a)({"article--hub":b.HUB_ARTICLE_TYPE_TEG_IDS.includes(a.tegID)},"article--".concat(h),u)]),_=function(e,a,t){return a.length>0&&!Va(e)&&!Kt.includes(t)&&!b.HUB_ARTICLE_TYPE_TEG_IDS.includes(e.tegID)}(a,t,h),w=o&&"regwall"!==n&&"paywall"!==n&&_;return Wt("article",{"data-article-type":p,"data-test-id":"Article",itemScope:!0,itemType:"http://schema.org/Article",className:f},Wt(oa,{article:a,accessType:n}),r?Wt(qt,{article:a}):Wt(lt,{article:a,recommended:!d&&w?t:[],accessType:n}),Wt(Ie,{url:a.url.canonical,dateModified:a.dateModified,datePublished:a.datePublished}),function(e,a){return a&&e.text.length>=b.SHORT_ARTICLE_THRESHOLD}(a,r)&&Wt(M.a,{ad:a.ad,className:"".concat(z.a.advert," ").concat(z.a["advert--aside"])}),!r&&d&&w&&Wt(nt,{stories:t}),r&&_&&Wt("div",{"amp-access":jt},Wt("div",{"amp-access-hide":!0},Wt(nt,{stories:t}))),function(e,a){return!b.SECTIONS_WOUT_RELATED_ARTICLES.includes(e._section.sectionHeadline)||"1843"===a}(a,g)&&Wt(Ee,{article:a,noPrintSection:le(a)}),Wt(zt,null))};Jt.defaultProps={article:{},accessType:void 0,recommended:[]};var Vt=Jt,Xt=t("i2en"),Qt=t("Y0NT"),Zt=t("TFQB"),$t=o.a.createElement;function en(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function an(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?en(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):en(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var tn=h.envConfig.getConfigOption("cpRefUrl");var nn=function(e){var a=e.content,t=e.favourites,n=e.metadata,i=e.readerId,r=e.localUrl,s=e.host,o=e.statusCode;if(o!==b.HTTP_STATUS_OKAY)return o===b.HTTP_STATUS_TEMPORARY_REDIRECT||o===b.HTTP_STATUS_PERMANENT_REDIRECT?null:$t(Qt.default,{statusCode:o});Object(Zt.a)();var d=Object(R.a)({platform:{id:"economist_article_site",purpose:"article"},screen:{hierarchy:m()(a,"_section.sectionHeadline"),type:"article"},content:a}).pageType,p=k(),g=Object(l.useContext)(y.a);f.logger.debug("content",{content:a});var _=Object(c.a)(g,1)[0],w=_.accessType,v=_.query.isAmp,T=_.featureFlags,S=void 0===T?[]:T,O=function(e){var a=b.SUBSCRIBE_LINK_MASTHEAD_WEB,t=b.SUBSCRIBE_LINK_FOOTER_WEB;return"1843"===e&&(a=b.SUBSCRIBE_LINK_MASTHEAD_1843_PAGE,t=b.SUBSCRIBE_LINK_FOOTER_1843_PAGE),{mastheadSubscribeLink:a,footerSubscribeLink:t}}(m()(a,"_section.articleType")),A=O.mastheadSubscribeLink,E=O.footerSubscribeLink;if(v)return $t(j.a,{title:n.title,metadata:n,subscribeLinkMasthead:h.envConfig.getSubscribeLink(b.SUBSCRIBE_LINK_MASTHEAD_AMP),subscribeLinkFooter:h.envConfig.getSubscribeLink(b.SUBSCRIBE_LINK_FOOTER_AMP),ad:a.ad},$t("main",{role:"main"},$t(Vt,{article:a,recommended:p}),$t(L,{host:s})));var x,I=function(e,a){var t=new URL("".concat(h.envConfig.getConfigOption("wwwhost")).concat(e));a&&t.searchParams.set("redirect",encodeURIComponent(new URL(a).pathname));var n=S.includes("SF_AUTH_PAGES"),i=S.includes("INTERSTITIAL_PAGE");return n&&t.searchParams.set("FEATURE_SF_AUTH_PAGES","1"),i&&t.searchParams.set("FEATURE_INTERSTITIAL_PAGE","1"),t.toString()};return $t(j.a,{ad:a.ad,adTargeting:an(an({},(x=a.url.canonical,Object.entries({specialreport:/\/special-report\/(\d{4})\/(\d{2})\/(\d{2})\//,technologyquarterly:/\/technology-quarterly\/(\d{4})\/(\d{2})\/(\d{2})\//}).reduce((function(e,a){var t=Object(c.a)(a,2),n=t[0],i=t[1],r=x.match(i)||[],s=Object(c.a)(r,4),l=s[1],o=s[2],d=s[3];return l&&o&&d&&(e[n]="".concat(l).concat(o).concat(d)),e}),{}))),{},{page_type:d}),showAd:"paywall"!==w,title:n.title,metadata:n,localUrl:r,readerId:i,subscribeLinkMasthead:h.envConfig.getSubscribeLink(A),subscribeLinkFooter:h.envConfig.getSubscribeLink(E),usePianoOptions:{customVars:an({loginLink:I(b.PATHS.LOGIN,n.url),signupLink:I(b.PATHS.REGISTER,n.url),articleType:m()(a,"_section.articleType"),publicationUrl:m()(a,"_section.publicationUrl")},Object(P.b)(t)),tags:["econ-article-page"],publishedDate:m()(a,"datePublished"),contentSection:m()(a,"_section.sectionHeadline")}},$t(u.a,null,Object(N.b)(a),Object(N.a)(a)),$t("main",{role:"main",id:"content"},$t(Vt,{article:a,recommended:p,accessType:w})))};nn.getInitialProps=function(){var e=Object(r.a)(i.a.mark((function e(a){var t,n,r,s,c,l,o,d,u,p,y,w,N,P,A,E,x,k,R,I,U;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.req,n=a.res,r=a.appProps,s=r.isAmp,c=r.host,l=r.requestId,o=Object(S.getContentUrlFromContext)(tn,a),d={},e.next=6,Object(g.a)({requestId:l,query:{query:T.articleQuery,variables:{ref:o}},apolloClient:Object(O.createApolloClient)()});case 6:return p=e.sent,e.prev=7,e.next=10,Object(g.a)({requestId:l,query:{query:T.articleRecirculationQuery,variables:{ref:b.READERS_FAVOURITES_STORY_COLLECTION_ID}},apolloClient:Object(O.createApolloClient)()});case 10:u=e.sent,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(7),f.logger.warn("Failed to load readers favourites");case 16:if(y=m()(p,"url.canonical",null),!s||!Object(_.isOnAmpBlacklist)(y)){e.next=25;break}return w=new URL(y),N=h.envConfig.getConfigOption("wwwhost"),P="".concat(N).concat(w.pathname),f.logger.info("canonical amp url has been blacklisted",{canonicalUrl:y,host:c,redirectedTo:P,requestId:l}),n.writeHead(b.HTTP_STATUS_TEMPORARY_REDIRECT,{Location:P}),n.end(),e.abrupt("return",d);case 25:if(!(p&&p.type&&p.type.includes("Article"))){e.next=40;break}if(y===o){e.next=32;break}return A=m()(t,"url","").startsWith("/node/"),E=new URL(y),f.logger.info("article is being redirected",{returnedCanonicalUrl:y,expectedCanonicalUrl:o,redirectedTo:E.pathname,requestId:l}),v()({url:E.pathname,res:n,permanent:A}),e.abrupt("return",d);case 32:d.host=c,d.content=p,d.favourites=m()(u,"hasPart.parts",[]),d.metadata=p._metadata,d.localUrl="".concat(h.envConfig.getConfigOption("protocol"),"://").concat(c),d.pageUrl="".concat(d.localUrl).concat(t.url),e.next=41;break;case 40:s?(x=h.envConfig.getConfigOption("wwwhost"),k=new URL(m()(p,"url.canonical",o)),R="".concat(x).concat(k.pathname),f.logger.info("amp non article is being redirect to www",{wwwhost:x,returnedCanonicalUrl:k,redirectedTo:R,requestId:l}),I=v()({url:R,res:n}),U=I.statusCode,d.statusCode=U):(n.statusCode=b.HTTP_STATUS_NOT_FOUND,d.statusCode=b.HTTP_STATUS_NOT_FOUND);case 41:return e.abrupt("return",d);case 42:case"end":return e.stop()}}),e,null,[[7,13]])})));return function(a){return e.apply(this,arguments)}}(),nn.defaultProps={host:"",content:null,favourites:[],metadata:{},localUrl:"",readerId:"",statusCode:b.HTTP_STATUS_OKAY};a.default=Object(Xt.a)(nn)},zz7s:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content",function(){return t("znlY")}])}},[["zz7s",1,2,0,4,5,6,7,8,9,3]]]);
//# sourceMappingURL=content-65434fa3710c008b27e8.js.map