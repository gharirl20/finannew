(function(){var e="_evidon-banner",m="_evidon-banner-content",t="_evidon-banner-l2",y="_evidon-barrier-closebutton",d="_evidon-background",F="_evidon-barrier-wrapper",M="_evidon-banner-title",G="_evidon-banner-logo",H="_evidon-banner-message",a="_evidon-banner-acceptbutton",b="_evidon-banner-accepttext",C="_evidon-barrier-declinebutton",D="_evidon-barrier-declinetext",c="_evidon-banner-acceptmessage",z="_evidon-banner-cookiebutton",A="_evidon-banner-cookiebuttontext",B="_evidon-banner-cookiemessage",E="_evidon-banner-footer",J="_ev_opt_out",I="_ev_opt_out_close",L="__ev_bc_iframe",K=420,N=2147483647;var r=5,l=9,h=12,w=14,q=30;var j="evidon-background",k="evidon-barrier",x="evidon-barrier-title",v="evidon-barrier-message",u="evidon-barrier-logo",s="evidon-barrier-icon",o="evidon-barrier-cookiemessage",n="evidon-barrier-cookiebutton",i="evidon-barrier-acceptmessage",g="evidon-barrier-acceptbutton",p="evidon-barrier-declinebutton";var f=function(){var ae=this,R=false,Q=false;function ad(ag){if(ag.id==NOTICE_ID){return true}else{if(ag.localName.toLowerCase()=="html"){return false}else{if(!ag.parentElement){return false}else{return ad(ag.parentElement)}}}}function U(ag){var ai=(ag!==undefined&&ag)?ag.target:window.event.srcElement;var ah=(ai.id==a||ai.id==b);if(!ah&&ad(ai)){return}window.evidon.notice.consentGiven(true,true,true)}function S(ag){window.evidon.notice.dropPixel(h);U(ag)}function Z(ag){window.evidon.notice.dropPixel(q);window.evidon.notice.declineGiven()}function T(ag){U(ag)}function V(ag){window.evidon.notice.dropPixel(l);window.evidon.notice.closeGiven()}function ab(){var ag=document.getElementById(y);if(ag){setTimeout(function(){ag.style.display=""},500)}var ah=document.getElementById(J);P(ah)}function af(at,au){var aq=window.evidon.notice;aq.dropPixel(w);var an=document.getElementById(L),ak=document.getElementById(J);var ap=aq.getL2Style();var al=ap?ap.enablePreferencesDialogV2:false;if(aq.L2Enabled&&!al){var aj=document.getElementById(y);if(aj){aj.style.display="none"}var ag=document.getElementById(e);var ah=document.getElementById(m);var ai=document.getElementById(t);if(!ai){ai=document.createElement("div");ai.id=t;ag.appendChild(ai)}while(ai.firstChild){ai.removeChild(ai.firstChild)}if(ah){P(ah,function(){aq.pushNavigationScreen(m);aq.showOptions(ai)})}}else{if(aq.L2Enabled&&al){var am=document.getElementById(F);if(am){P(am,function(){aq.showOptions(null,at,au)});window.evidon.events.subscribe("l2closed",function(){var av=aq._getSuppressionCookie();if(aq.consentRequired&&aq.consentIsGiven===false&&!av){O(am)}},1)}}else{if(!an){an=document.createElement("iframe");an.id=L;an.seamless="seamless";an.frameBorder="0";an.width="100%";an.style.cssText="display:block;position:absolute; left:0; top: 20px; height:100%;overflow:auto;";an.src=window.evidon.notice.getConsentUrl();ak.appendChild(an)}var ar=parseFloat(ak.style.opacity);if(ar<=0){ak.style.display="block";var ao=setInterval(function(){ar+=0.1;ak.style.opacity=ar;if(ar>=1){clearInterval(ao)}},50)}var aj=document.getElementById(y);if(aj){aj.style.display="none"}}}}function ac(ai){var ag=ai.allowBackgroundClose||false;if(ag){document.getElementById(d).onclick=U}document.getElementById(z).onclick=function(){af()};document.getElementById(a).onclick=S;var ah=document.getElementById(C);if(ah){ah.onclick=Z}}function aa(ah,ag){return window.evidon.notice._getStyleValue(ah,ag)}function W(ai){var ag=document.createElement("div");ag.id=d;ag.className=j;var aj=aa(ai.bannerStyle,"z-index");if(aj){aj=parseInt(aj,10);if(!isNaN(aj)){aj--}else{aj=N-1}}else{aj=N-1}var ah=ai.backgroundStyle;ah+="position:fixed;top:0;left:0;bottom:0;width:100%;z-index:"+aj+";";ag.style.cssText=ah;return ag}function Y(aS){var aF=window.evidon.notice.isMobile();var al=document.createElement("div");var am=(aF)?(aS.mobileBannerStyle||aS.bannerStyle):aS.bannerStyle;if(am.indexOf("z-index:")===-1){am+="z-index:"+N+";"}if(am.indexOf("position:")===-1){am+="position:relative;"}if(aF){am+="-webkit-overflow-scrolling:touch;"}al.style.cssText=am;al.id=e;al.className=k;al.tabIndex=0;var aq=document.createElement("div");aq.id=m;aq.style.cssText="opacity:1.1;";al.appendChild(aq);var aJ=(aF)?(aS.mobileLogoStyle||aS.logoStyle):aS.logoStyle;var aH=(aF)?aS.mobileLogo:aS.logo;if(aJ&&aH){var aI=document.createElement("img");aI.id=G;aI.src=aH;aI.alt="Company Logo";aI.style.cssText=aJ;aI.className=u;aq.appendChild(aI)}var aV=(aF)?(aS.mobileTitleStyle||aS.titleStyle):aS.titleStyle;if(aV){var aU=document.createElement("div");aU.id=M;aU.style.cssText=aV;aU.className=x;aq.appendChild(aU)}var aM=(aF)?(aS.mobileMessageStyle||aS.messageStyle):aS.messageStyle;if(aM){var aL=document.createElement("div");aL.id=H;aL.style.cssText=aM;aL.className=v;aq.appendChild(aL)}var aw=(aF)?(aS.mobileCookieMessageStyle||aS.cookieMessageStyle):aS.cookieMessageStyle;if(aw){var av=document.createElement("div");av.id=B;av.className=o;av.style.cssText=aw;aq.appendChild(av)}var aj=(aF)?(aS.mobileAcceptMessageStyle||aS.acceptMessageStyle):aS.acceptMessageStyle;if(aj){var ai=document.createElement("div");ai.id=c;ai.style.cssText=aj;ai.className=i;aq.appendChild(ai)}var aO=aa(am,"padding");var an=0;if(aO){var aP=aO.split(" ");if(aP.length>=3){an=parseInt(aP[2],10)}else{an=parseInt(aP[0],10)}}an=an*-1;var ao=document.createElement("div");ao.style.cssText="display:block; width:100%; margin-bottom:"+an+"px; position: relative; padding:4px; font-size:11px; border-top:1px solid #9B9B9B;color:"+aT+'; font-family:"open sans", sans-serif;';var ar=document.createElement("button");ar.id=z;ar.className=n;ar.tabIndex=0;var au=(aF)?(aS.mobileCookieButtonStyle||aS.cookieButtonStyle):aS.cookieButtonStyle;var aQ=(aF)?aS.mobileShowCookieButtonIcon:aS.showCookieButtonIcon;var at=(aF)?aS.mobileCookieButtonIcon:aS.cookieButtonIcon;if(aQ&&at){var az=aa(au,"font-size");var aB="",aK="";if(az){aB=parseFloat(az);var aW=az.replace(aB,"");aK=(Math.round((aB/3)*10)/10)+aW;aB=(Math.round((aB*1.2)*10)/10)+aW}var aC='<img src="'+at+'" style="height:'+aB+";margin-right: "+aK+';" />';aC+='<span id="'+A+'"></span>';ar.innerHTML=aC}else{ar.innerHTML='<span id="'+A+'"></span>'}if(au.indexOf("cursor:")===-1){au+="cursor:pointer;"}ar.style.cssText=au;ao.appendChild(ar);var aR=(window.evidon.notice.enableDeclineButton!==null)?window.evidon.notice.enableDeclineButton:(aF)?(aS.mobileShowDeclineButton||aS.showDeclineButton):aS.showDeclineButton;if(aR){var ax=document.createElement("button");ax.id=C;ax.tabIndex=0;var ay=(aF)?(aS.mobileDeclineButtonStyle||aS.declineButtonStyle):aS.declineButtonStyle;if(ay.indexOf("cursor:")===-1){ay+="cursor:pointer;"}ax.style.cssText=ay;ax.className=p;ao.appendChild(ax)}var ag=document.createElement("button");ag.id=a;ag.tabIndex=0;var ah=(aF)?(aS.mobileAcceptButtonStyle||aS.acceptButtonStyle):aS.acceptButtonStyle;if(ah.indexOf("cursor:")===-1){ah+="cursor:pointer;"}ag.style.cssText=ah;ag.className=g;ao.appendChild(ag);aq.appendChild(ao);var aT=aa(aS.titleStyle,"color");if(!aT){aT=aa(aS.messageStyle,"color")}if(!aT){aT="#9B9B9B"}var ak=aa(am,"background-color");if(!ak){ak=aa(am,"background")}var aA=document.createElement("div");aA.id=J;aA.style.cssText="background-color:"+ak+"; position:absolute; display:none; top:0;right:0;height:100%;width:100%;opacity:0;color:"+aT+";overflow:auto;";if(aF){aA.style.cssText+="-webkit-overflow-scrolling:touch;"}var ap=document.createElement("button");ap.id=I;ap.tabIndex=0;ap.style.cssText="position:absolute; top:0px;right:2px;color:"+aT+"; background:transparent;font-size:12px;border:0; psdding:4px;cursor:pointer;";ap.onclick=ab;aA.appendChild(ap);al.appendChild(aA);if(Q){if(aS.hasOwnProperty("mobileShowCloseIcon")&&aS.mobileShowCloseIcon){al.appendChild(X(aS))}}else{if(aS.hasOwnProperty("showCloseIcon")&&aS.showCloseIcon){al.appendChild(X(aS))}}var aN=window.evidon.notice;if(aN.iabEnabled&&aN.getPreferencesDialogV2Enabled()){al.style.paddingBottom="14px";al.style.paddingTop="14px";var aG=document.createElement("div");aG.style.cssText="position:absolute; bottom:0; left:0; width:100%; padding:2px; text-align:center;";al.appendChild(aG);var aD=document.createElement("button");aD.id="iabpurposebutton";aD.style.cssText="background-color:transparent; border:0; font-size: .9em; margin:2px 6px; cursor:pointer;";aD.onclick=function(){af(aN.PREFDIAG_TABS.IAB,aN.PREFDIAG_TABS.PURPOSES)};aG.appendChild(aD);var aE=document.createElement("button");aE.id="iabvendorbutton";aE.style.cssText="background-color:transparent; border:0; font-size: .9em; margin:2px 6px; cursor:pointer;";aE.onclick=function(){af(aN.PREFDIAG_TABS.IAB,aN.PREFDIAG_TABS.VENDORS)};aG.appendChild(aE)}return al}function X(ag){var ai=(Q)?ag.mobileCloseIconStyle:ag.closeIconStyle;var aj=(Q)?ag.mobileCloseIconStroke:ag.closeIconStroke;var ak=(Q)?ag.mobileCloseIconWidth:ag.closeIconWidth;var ah=window.evidon.notice._createCloseIcon(ai,y,s,aj,ak);ah.onclick=V;return ah}this.setTextValues=function(ao){if(!ao){return}if(!R){return}var ak=window.evidon.notice;ak.dropPixel(r);var aj=document,ai=aj.getElementById(C),al=aj.getElementById(I),ag=aj.getElementById(a);if(Q){aj.getElementById(M).innerHTML=ak.formatTranslation(ao.mobileBarrierTitle);if(ak.iabEnabled&&ak.iabVersion==2){aj.getElementById(H).innerHTML=ak.formatTranslation(ao.mobileIabBarrierMessage)}else{aj.getElementById(H).innerHTML=ak.formatTranslation(ao.mobileBarrierMessage)}aj.getElementById(B).innerHTML=ak.formatTranslation(ao.mobileBarrierCookieMessage);aj.getElementById(A).innerHTML=ak.formatTranslation(ao.mobileBarrierCookieButtonText);aj.getElementById(c).innerHTML=ak.formatTranslation(ao.mobileBarrierAccessMessage);ag.innerHTML=ao.mobileBarrierAcceptButtonText;ag.setAttribute("aria-label",ao.mobileBarrierAcceptButtonText);if(ai){ai.innerHTML=ao.mobileBarrierDeclineButtonText;ai.setAttribute("aria-label",ao.mobileBarrierDeclineButtonText)}}else{aj.getElementById(M).innerHTML=ak.formatTranslation(ao.barrierTitle);if(ak.iabEnabled&&ak.iabVersion==2){aj.getElementById(H).innerHTML=ak.formatTranslation(ao.iabBarrierMessage)}else{aj.getElementById(H).innerHTML=ak.formatTranslation(ao.barrierMessage)}aj.getElementById(B).innerHTML=ak.formatTranslation(ao.barrierCookieMessage);aj.getElementById(A).innerHTML=ak.formatTranslation(ao.barrierCookieButtonText);aj.getElementById(c).innerHTML=ak.formatTranslation(ao.barrierAccessMessage);ag.innerHTML=ao.barrierAcceptButtonText;ag.setAttribute("aria-label",ao.barrierAcceptButtonText);if(ai){ai.innerHTML=ao.barrierDeclineButtonText;ai.setAttribute("aria-label",ao.barrierDeclineButtonText)}}if(al){al.innerHTML=ao.gdprl2Close+"&nbsp; &#x2716;"}if(document.getElementById("iabpurposebutton")){var an=(Q)?"mobilesnL2L3ShowPurposes":"snL2L3ShowPurposes";var am=(ao.hasOwnProperty(an))?ao[an]:"Show Purposes";document.getElementById("iabpurposebutton").innerHTML=am}if(document.getElementById("iabvendorbutton")){var an=(Q)?"mobilesnL2L3ShowVendors":"snL2L3ShowVendors";var ap=(ao.hasOwnProperty(an))?ao[an]:"Show Vendors";document.getElementById("iabvendorbutton").innerHTML=ap}var ah=aj.getElementById(e);if(ah.scrollHeight>window.innerHeight){ah.style.cssText+="height:100%;overflow:auto;"}};this.createBarrierNotice=function(){if(R){return}var aj=window.evidon.notice.getBarrierStyle();if(!aj){return}Q=window.evidon.notice.isMobile();var ag=document.body;var ah=document.createElement("div");ah.id=F;ah.style.cssText="position:fixed; top: 0; left:0; width: 100%; height: 100%; z-index:"+(N-5)+";";ah.appendChild(W(aj));var ai=Y(aj);ah.appendChild(ai);ag.appendChild(ah);if(ai.scrollHeight>window.innerHeight){ai.style.cssText+="height:100%;overflow:auto;"}ac(aj);R=true;var ak=window.evidon.notice.getTranslations();if(null!=ak){this.setTextValues(ak)}};this.destroyNotice=function(){var ag=document.getElementById(e);if(!ag){return}ag.style.display="none";document.getElementById(d).style.display="none";var ai=document.getElementById(F);if(ai){ai.style.display="none";try{ai.parentElement.removeChild(ai)}catch(ah){}}R=false};function P(ah,ag){var aj=parseFloat(ah.style.opacity)||1;var ai=setInterval(function(){aj-=0.1;ah.style.opacity=aj;if(aj<=0){clearInterval(ai);ah.style.display="none";if(ag){ag()}}},50)}function O(ah,ag){var aj=parseFloat(ah.style.opacity)||0;ah.style.display="block";var ai=setInterval(function(){aj+=0.1;ah.style.opacity=aj;if(aj>=1){clearInterval(ai);if(ag){ag()}}},50)}this.onShow=function(){var ag=document.getElementById(y);if(ag){ag.style.display=""}}};window.evidon.barrier=new f();window.evidon.barrier.createBarrierNotice()})();