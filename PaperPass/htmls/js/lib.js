if(!GRN_P){var GRN_P="Report"}(function(t,e,n,a){"use strict";t[e]=n(t,e)})(typeof window!=="undefined"?window:this,GRN_P,function(t,e,n){"use strict";return{}});(function(t,i){var n=null;function e(t){return typeof t!=="undefined"&&t!==null}var o=[],a="cache",r=null;function f(){if(typeof r!=="undefined"){return true}else{return false}}function u(t,e){t=t||o;e=e||a;if(f()){c();r.setItem(e,JSON.stringify(t))}}function c(t){t=t||a;if(f()){r.removeItem(t)}}function l(){if(f()){r.clear()}else{o=[]}}function P(t){t=t||a;if(f()){return JSON.parse(r.getItem(t))||o}else{return o}}function v(t,e){n=this;this.caches=[];a=t||"cache";this.cache_name=a;this.myStorage=e||localStorage}v.prototype={constructor:v,_className:"Cache",init:function(){r=this.myStorage;a=this.cache_name;o=P()},cache:function(t,e,n){this.init();o=P();var a=this.exist(t,e);if(i.isFunction(n)){n.call(this,a)}return a},set:function(t,e,n){this.init();t[e]=n;o.push(t);u()},update:function(t,e){this.init();o[t]=e;u()},get:function(t){this.init();return e(t)?o[t]:o},exist:function(t,e){this.init();for(var n=0,a=o.length;n<a;n++){if(t in o[n]&&e==o[n][t]){return n}}return-1},clear:function(){this.init();this.remove();l()},remove:function(t){this.init();if(t){if(t>-1&&t<o.length-1){o.splice(t,1)}}else{o=[]}u()}};t.Cache=v})(Report,jQuery);(function(t,e){"use strict";var n=window.localStorage;function a(t){t=t+"_s";var e=JSON.parse(n.getItem(t));return e}function i(t,e){t=t+"_s";n.setItem(t,JSON.stringify(e))}function o(){}o.saveId=function(t){var e={red:"",LineState:"",HeaderState:"",aLink:"htmls/detail_report.html",tabName:"",DetailNum:"",Detailoffset:"",DetailSize:"",DetailTopNum:"",DetailPercent:"",ZoomBtnState:"",FoldState:"",InitPage:"",PlainTextLineState:"",PlainTextDetailNum:"",PlainTextDetailoffset:"",PlainTextDetailSize:"",PlainTextDetailPercent:"",PlainTextDetailTopNum:"",PlainTextZoomBtnState:"",PageNavState:"",PTPageNavState:"",ProofNum:"",ProofOffset:"",ProofSize:"",ProofTopNum:"",ProofPercent:"",ProZoomBtnState:"",ProofNavState:"",ProofInitPage:"",FoldState2:"",PlainTextProofNum:"",PlainTextProofOffset:"",PlainTextProofSize:"",PlainTextProofTopNum:"",PlainTextProofPercent:"",PlainTextProZoomBtnState:"",ProofPtNavState:"",Suggestions:[],ProofTab:""};t=t+"_s";if(n.getItem(t)===null){n.setItem(t,JSON.stringify(e))}else{return}};o.saveHeaderState=function(t,e){var n=a(t);n.HeaderState=e;i(t,n)};o.getHeaderState=function(t){var e=a(t);return e.HeaderState};o.saveALink=function(t,e){var n=a(t);n.aLink=e;i(t,n)};o.getALink=function(t){var e=a(t);return e.aLink};o.saveTabName=function(t,e){var n=a(t);n.tabName=e;i(t,n)};o.getTabName=function(t){var e=a(t);return e.tabName};o.saveLineState=function(t,e){var n=a(t);n.LineState=e;i(t,n)};o.getLineState=function(t){var e=a(t);return e.LineState};o.saveDetailNum=function(t,e){var n=a(t);n.DetailNum=e;i(t,n)};o.getDetailNum=function(t){var e=a(t);return e.DetailNum};o.saveDetailTopNum=function(t,e){var n=a(t);n.DetailTopNum=e;i(t,n)};o.getDetailTopNum=function(t){var e=a(t);return e.DetailTopNum};o.saveDetailoffset=function(t,e){var n=a(t);n.Detailoffset=e;i(t,n)};o.getDetailoffset=function(t){var e=a(t);return e.Detailoffset};o.saveDetailSize=function(t,e){var n=a(t);n.DetailSize=e;i(t,n)};o.getDetailSize=function(t){var e=a(t);return e.DetailSize};o.saveDetailPercent=function(t,e){var n=a(t);n.DetailPercent=e;i(t,n)};o.getDetailPercent=function(t){var e=a(t);return e.DetailPercent};o.saveZoomBtnState=function(t,e){var n=a(t);n.ZoomBtnState=e;i(t,n)};o.getZoomBtnState=function(t){var e=a(t);return e.ZoomBtnState};o.saveFoldState=function(t,e){var n=a(t);n.FoldState=e;i(t,n)};o.getFoldState=function(t){var e=a(t);return e.FoldState};o.saveInitPage=function(t,e){var n=a(t);n.InitPage=e;i(t,n)};o.getInitPage=function(t){var e=a(t);return e.InitPage};o.savePlainTextLineState=function(t,e){var n=a(t);n.PlainTextLineState=e;i(t,n)};o.getPlainTextLineState=function(t){var e=a(t);return e.PlainTextLineState};o.savePlainTextDetailNum=function(t,e){var n=a(t);n.PlainTextDetailNum=e;i(t,n)};o.getPlainTextDetailNum=function(t){var e=a(t);return e.PlainTextDetailNum};o.savePlainTextDetailoffset=function(t,e){var n=a(t);n.PlainTextDetailoffset=e;i(t,n)};o.getPlainTextDetailoffset=function(t){var e=a(t);return e.PlainTextDetailoffset};o.savePlainTextDetailSize=function(t,e){var n=a(t);n.PlainTextDetailSize=e;i(t,n)};o.getPlainTextDetailSize=function(t){var e=a(t);return e.PlainTextDetailSize};o.savePlainTextDetailPercent=function(t,e){var n=a(t);n.PlainTextDetailPercent=e;i(t,n)};o.getPlainTextDetailPercent=function(t){var e=a(t);return e.PlainTextDetailPercent};o.savePlainTextDetailTopNum=function(t,e){var n=a(t);n.PlainTextDetailTopNum=e;i(t,n)};o.getPlainTextDetailTopNum=function(t){var e=a(t);return e.PlainTextDetailTopNum};o.savePlainTextZoomBtnState=function(t,e){var n=a(t);n.PlainTextZoomBtnState=e;i(t,n)};o.getPlainTextZoomBtnState=function(t){var e=a(t);return e.PlainTextZoomBtnState};o.savePageNavState=function(t,e){var n=a(t);n.PageNavState=e;i(t,n)};o.getPageNavState=function(t){var e=a(t);return e.PageNavState};o.savePTPageNavState=function(t,e){var n=a(t);n.PTPageNavState=e;i(t,n)};o.getPTPageNavState=function(t){var e=a(t);return e.PTPageNavState};o.saveProofNum=function(t,e){var n=a(t);n.ProofNum=e;i(t,n)};o.getProofNum=function(t){var e=a(t);return e.ProofNum};o.saveProofTopNum=function(t,e){var n=a(t);n.ProofTopNum=e;i(t,n)};o.getProofTopNum=function(t){var e=a(t);return e.ProofTopNum};o.saveProofOffset=function(t,e){var n=a(t);n.ProofOffset=e;i(t,n)};o.getProofOffset=function(t){var e=a(t);return e.ProofOffset};o.saveProofSize=function(t,e){var n=a(t);n.ProofSize=e;i(t,n)};o.getProofSize=function(t){var e=a(t);return e.ProofSize};o.saveProofPercent=function(t,e){var n=a(t);n.ProofPercent=e;i(t,n)};o.getProofPercent=function(t){var e=a(t);return e.ProofPercent};o.saveProZoomBtnState=function(t,e){var n=a(t);n.ProZoomBtnState=e;i(t,n)};o.getProZoomBtnState=function(t){var e=a(t);return e.ProZoomBtnState};o.savePlainTextProofNum=function(t,e){var n=a(t);n.PlainTextProofNum=e;i(t,n)};o.getPlainTextProofNum=function(t){var e=a(t);return e.PlainTextProofNum};o.savePlainTextProofTopNum=function(t,e){var n=a(t);n.PlainTextProofTopNum=e;i(t,n)};o.getPlainTextProofTopNum=function(t){var e=a(t);return e.PlainTextProofTopNum};o.savePlainTextProofOffset=function(t,e){var n=a(t);n.PlainTextProofOffset=e;i(t,n)};o.getPlainTextProofOffset=function(t){var e=a(t);return e.PlainTextProofOffset};o.savePlainTextProofSize=function(t,e){var n=a(t);n.PlainTextProofSize=e;i(t,n)};o.getPlainTextProofSize=function(t){var e=a(t);return e.PlainTextProofSize};o.savePlainTextProofPercent=function(t,e){var n=a(t);n.PlainTextProofPercent=e;i(t,n)};o.getPlainTextProofPercent=function(t){var e=a(t);return e.PlainTextProofPercent};o.savePlainTextProZoomBtnState=function(t,e){var n=a(t);n.PlainTextProZoomBtnState=e;i(t,n)};o.getPlainTextProZoomBtnState=function(t){var e=a(t);return e.PlainTextProZoomBtnState};o.saveProofNavState=function(t,e){var n=a(t);n.ProofNavState=e;i(t,n)};o.getProofNavState=function(t){var e=a(t);return e.ProofNavState};o.saveProofPtNavState=function(t,e){var n=a(t);n.ProofPtNavState=e;i(t,n)};o.getProofPtNavState=function(t){var e=a(t);return e.ProofPtNavState};o.saveProofInitPage=function(t,e){var n=a(t);n.ProofInitPage=e;i(t,n)};o.getProofInitPage=function(t){var e=a(t);return e.ProofInitPage};o.saveSuggestions=function(t,e){var n=a(t);n.Suggestions=e;i(t,n)};o.getSuggestions=function(t){var e=a(t);return e.Suggestions};o.saveProofTab=function(t,e){var n=a(t);n.ProofTab=e;i(t,n)};o.getProofTab=function(t){var e=a(t);return e.ProofTab};o.saveFoldState2=function(t,e){var n=a(t);n.FoldState2=e;i(t,n)};o.getFoldState2=function(t){var e=a(t);return e.FoldState2};t.operateState=o})(Report,jQuery);(function(t,c){"use strict";var e,n="600";var l=null;function i(){if(!l){l=new t.Cache(t.report_id,localStorage)}}function a(){}a.sectionEdit=function(f){i();var t={textWarp:"[tpl-section=warp]",text:"[tpl-section=text]",badge:"[tpl-section=badge]",box:"[tpl-section=box]",textarea:"[tpl-section=textarea]",template:'script[type="text/html"][template="section"]'};f=c.isPlainObject(f)?c.extend(t,f):t;var u=null;return function(){u=this;var n="";var t=c(this);var e=t.closest(f.textWarp);var a=e.find(f.badge).data("id");var i=e.find(f.text);var o=e.find(f.box);o.html(c(f.template).html());var r=e.find(f.textarea);l.cache("id",a,function(t){if(-1===t){n=i.text()}else{var e=l.get(t);n=e.text}r.val(c.trim(n));r.text(r.val()).focus()})}};a.sectionSave=function(a){i();var t={warp:'[tpl-section="warp"]',box:'[tpl-section="box"]',badge:'[tpl-section="badge"]',textarea:'[tpl-section="textarea"]'};a=c.isPlainObject(a)?c.extend(t,a):t;var e=null;return function(){var t=c(this).closest(a.warp);var e=t.find(a.textarea).val();e=c.trim(e);var n=t.find(a.badge).data("id");l.cache("id",n,function(t){if(-1===t){l.set({text:e},"id",n)}else{l.update(t,{id:n,text:e})}});t.find(a.box).html("")}};a.textSectionEdit=function(){i();return function(){var a="";var t=c(".section-id").text();var n=c(".section-txt.section-txt-next");n.text("");var e=JSON.parse(section_edit_json);c.each(e[t],function(t,e){var n=e.content.replace(/[<>\&]/g,function(t){return"&#"+t.charCodeAt(0)+";"});a+=n});l.cache("id",t,function(t){if(-1===t){a=a}else{var e=l.get(t);a=e.text}n.val(c.trim(a));n.html(n.val())})}};a.textSectionSave=function(){i();return function(){var t=c(this);var e=t.parents("#layui-layer-section").find(".section-id").text();var n=c(".section-txt.section-txt-next").val();n=c.trim(n);l.cache("id",e,function(t){if(-1===t){l.set({text:n},"id",e)}else{l.update(t,{id:e,text:n})}})}};a.tab=function(){var r=null;return function(n){if(r===this){return}var t={li:"li",section:'[tab="section"]',active:"active",callback:function(){}};n=c.isPlainObject(n)?c.extend(t,n):t;r=this;var e=c(this);e.parent().find(n.li).removeClass(n.active);e.addClass(n.active);var a=e.data("id");if(!a){return}var i=a.toString().split(",");var o=c(n.section);o.hide();o.each(function(){var t=c(this);var e=t.data("id");if(c.inArray(e.toString(),i)!==-1){n.callback.call(this);t.show()}})}};a.toggle=function(t,e){var n=c(this).closest("[eve-toggle=warp]").find("[eve-toggle=section]");if(n.css("display")==="none"){if(c.isFunction(t)){t()}n.show()}else{if(c.isFunction(e)){e()}n.hide()}};t.Paper=a})(Report,jQuery);