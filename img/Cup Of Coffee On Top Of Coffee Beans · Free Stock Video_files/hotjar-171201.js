window.hjSiteSettings = window.hjSiteSettings || {"site_id":171201,"r":0.06794955425092411,"rec_value":1.0,"state_change_listen_mode":"manual","record":false,"continuous_capture_enabled":false,"recording_capture_keystrokes":true,"anonymize_digits":false,"anonymize_emails":false,"suppress_all":false,"suppress_text":null,"suppress_location":false,"user_attributes_enabled":false,"legal_name":null,"privacy_policy_url":null,"deferred_page_contents":[],"record_targeting_rules":[{"component":"url","match_operation":"contains","pattern":"/join-consumer/","negate":false},{"component":"url","match_operation":"contains","pattern":"/join-contributor/","negate":false},{"component":"url","match_operation":"contains","pattern":"/onboarding/","negate":false}],"feedback_widgets":[],"forms":[],"heatmaps":[],"polls":[{"id":493896,"created_epoch_time":1585926682,"skin":"dark","background":"#333333","effective_show_branding":true,"position":"right","content":{"version":2,"questions":[{"uuid":"d925b328-97d0-4a5d-b804-2e2e0a141c11","type":"rating-scale-5","text":"What's your first impression of the search results for \"technology\"?","required":true,"scaleCount":5,"labels":[{"text":"Very bad"},{"text":"Very good"}],"next":"byOrder"}],"thankyou":"Thank you for answering this Poll. Your feedback will help us making the search experience better!"},"ask_for_consent":false,"language":"en","display_condition":"delay","display_delay":2,"persist_condition":"response","targeting_percentage":100,"targeting":[{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"desktop","rule_type":null},{"component":"url","match_operation":"simple","name":null,"negate":false,"pattern":"https://www.pexels.com/search/technology/","rule_type":null}],"show_legal":false,"uuid":"5f79ab86-ff30-490c-91ca-90219a1a5267","enabled_offsite":false,"logo_url":null,"invite":{"title":"Your feedback is important to us!","description":"Tell us what you think about this page by taking our quick Survey.","button":"Yes, I will give feedback","close":"No thanks"},"invite_enabled":false,"button_color":null},{"id":35471,"created_epoch_time":1459890066,"skin":"dark","background":"#333333","effective_show_branding":true,"position":"right","content":{"version":2,"questions":[{"uuid":"d7915586-76f8-4e83-b69a-88ac14b0c793","type":"net-promoter-score","text":"How likely is it that you would recommend Pexels to a friend or colleague?","required":true,"labels":[{"text":"Not likely at all"},{"text":"Extremely likely"}],"next":"byOrder"},{"uuid":"980bf8be-a94e-4854-97ff-b1e770f7a88c","type":"single-open-ended-multiple-line","text":"Why did you select this rating?","required":true,"next":"byOrder"}],"thankyou":"Thank you so much for answering this Poll. Your feedback is highly appreciated!"},"ask_for_consent":false,"language":"en","display_condition":"delay","display_delay":3,"persist_condition":"once","targeting_percentage":1,"targeting":[{"component":"url","match_operation":"starts_with","name":null,"negate":false,"pattern":"https://www.pexels.com/search/","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"phone","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"tablet","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"desktop","rule_type":null}],"show_legal":null,"uuid":"20a617aa-c520-41a1-8854-3c9c4a54a1d2","enabled_offsite":false,"logo_url":null,"invite":{"title":"Your feedback is important to us!","description":"Tell us what you think about this page by taking our quick Survey.","button":"Yes, I will give feedback","close":"No thanks"},"invite_enabled":false,"button_color":null}],"integrations":{"optimizely":{"tag_recordings":false}},"features":["feedback.lazy_load","recordings.page_content_ws"]};

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=264)}({264:function(e,t){window.hjBootstrap=window.hjBootstrap||function(e,t,n){var o=["bot","headless","google","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),r=new RegExp(o,"i"),a=window.navigator||{userAgent:"unknown"},i=a.userAgent?a.userAgent:"unknown";if(r.test(i))console.warn("Hotjar not launching due to suspicious userAgent:",i);else{var s=function(e,t,n){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(n),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};s(0,0,n);var d,u,l,c,p=window.document,f=p.head||p.getElementsByTagName("head")[0];p.addEventListener&&(hj.scriptDomain=e,(d=p.createElement("script")).async=1,d.src=hj.scriptDomain+t,d.charset="utf-8",f.appendChild(d),c=["iframe#_hjRemoteVarsFrame {","display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;","}"],(u=p.createElement("style")).type="text/css",u.styleSheet?u.styleSheet.cssText=c.join(""):u.appendChild(p.createTextNode(c.join(""))),f.appendChild(u),(l=p.createElement("iframe")).style.cssText=c[1],l.name="_hjRemoteVarsFrame",l.title="_hjRemoteVarsFrame",l.id="_hjRemoteVarsFrame",l.src="https://"+(window._hjSettings.varsHost||"vars.hotjar.com")+"/box-469cf41adb11dc78be68c1ae7f9457a4.html",l.onload=function(){s.varsLoaded=!0,"undefined"!=typeof hj&&hj.event&&hj.event.signal("varsLoaded")},s.varsJar=l,"interactive"===p.readyState||"complete"===p.readyState||"loaded"===p.readyState?h():p.addEventListener("DOMContentLoaded",h),s.revision="06268240448f",window.hjBootstrap=s)}function h(){setTimeout((function(){p.body.appendChild(l)}),50)}},window.hjBootstrap("https://script.hotjar.com/","modules.8d61e969c7deff2570c5.js","171201")}});
//# sourceMappingURL=hotjar.js.map