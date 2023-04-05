function set_coo(city){alert(city);$("#city_cur").load('../aj.php',{city:city})};var jquery_blockui_params={"cart_url":"https:\/\/unilik.ua\/checkout\/","i18n_view_cart":"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"};/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(p){p.fn._fadeIn=p.fn.fadeIn;var b=p.noop||function(){},h=/MSIE/.test(navigator.userAgent),k=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),y=(document.documentMode,"function"==typeof document.createElement("div").style.setExpression&&document.createElement("div").style.setExpression);p.blockUI=function(e){o(window,e)},p.unblockUI=function(e){v(window,e)},p.growlUI=function(e,t,o,n){var i=p('<div class="growlUI"></div>');e&&i.append("<h1>"+e+"</h1>"),t&&i.append("<h2>"+t+"</h2>"),o===undefined&&(o=3e3);var s=function(e){e=e||{},p.blockUI({message:i,fadeIn:"undefined"!=typeof e.fadeIn?e.fadeIn:700,fadeOut:"undefined"!=typeof e.fadeOut?e.fadeOut:1e3,timeout:"undefined"!=typeof e.timeout?e.timeout:o,centerY:!1,showOverlay:!1,onUnblock:n,css:p.blockUI.defaults.growlCSS})};s();i.css("opacity");i.on("mouseover",function(){s({fadeIn:0,timeout:3e4});var e=p(".blockMsg");e.stop(),e.fadeTo(300,1)}).on("mouseout",function(){p(".blockMsg").fadeOut(1e3)})},p.fn.block=function(e){if(this[0]===window)return p.blockUI(e),this;var t=p.extend({},p.blockUI.defaults,e||{});return this.each(function(){var e=p(this);t.ignoreIfBlocked&&e.data("blockUI.isBlocked")||e.unblock({fadeOut:0})}),this.each(function(){"static"==p.css(this,"position")&&(this.style.position="relative",p(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,e)})},p.fn.unblock=function(e){return this[0]===window?(p.unblockUI(e),this):this.each(function(){v(this,e)})},p.blockUI.version=2.7,p.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var m=null,g=[];function o(e,o){var t,n,i,s,l,d,a,c,r,u=e==window,f=o&&o.message!==undefined?o.message:undefined;(o=p.extend({},p.blockUI.defaults,o||{})).ignoreIfBlocked&&p(e).data("blockUI.isBlocked")||(o.overlayCSS=p.extend({},p.blockUI.defaults.overlayCSS,o.overlayCSS||{}),i=p.extend({},p.blockUI.defaults.css,o.css||{}),o.onOverlayClick&&(o.overlayCSS.cursor="pointer"),s=p.extend({},p.blockUI.defaults.themedCSS,o.themedCSS||{}),f=f===undefined?o.message:f,u&&m&&v(window,{fadeOut:0}),f&&"string"!=typeof f&&(f.parentNode||f.jquery)&&(t=f.jquery?f[0]:f,a={},p(e).data("blockUI.history",a),a.el=t,a.parent=t.parentNode,a.display=t.style.display,a.position=t.style.position,a.parent&&a.parent.removeChild(t)),p(e).data("blockUI.onUnblock",o.onUnblock),r=o.baseZ,a=h||o.forceIframe?p('<iframe class="blockUI" style="z-index:'+r+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+o.iframeSrc+'"></iframe>'):p('<div class="blockUI" style="display:none"></div>'),t=o.theme?p('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+r+++';display:none"></div>'):p('<div class="blockUI blockOverlay" style="z-index:'+r+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),o.theme&&u?(c='<div class="blockUI '+o.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(r+10)+';display:none;position:fixed">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div>',c+="</div>"):o.theme?(c='<div class="blockUI '+o.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(r+10)+';display:none;position:absolute">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div>',c+="</div>"):c=u?'<div class="blockUI '+o.blockMsgClass+' blockPage" style="z-index:'+(r+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+o.blockMsgClass+' blockElement" style="z-index:'+(r+10)+';display:none;position:absolute"></div>',r=p(c),f&&(o.theme?(r.css(s),r.addClass("ui-widget-content")):r.css(i)),o.theme||t.css(o.overlayCSS),t.css("position",u?"fixed":"absolute"),(h||o.forceIframe)&&a.css("opacity",0),c=[a,t,r],n=p(u?"body":e),p.each(c,function(){this.appendTo(n)}),o.theme&&o.draggable&&p.fn.draggable&&r.draggable({handle:".ui-dialog-titlebar",cancel:"li"}),s=y&&(!p.support.boxModel||0<p("object,embed",u?null:e).length),(k||s)&&(u&&o.allowBodyStretch&&p.support.boxModel&&p("html,body").css("height","100%"),!k&&p.support.boxModel||u||(i=U(e,"borderTopWidth"),s=U(e,"borderLeftWidth"),l=i?"(0 - "+i+")":0,d=s?"(0 - "+s+")":0),p.each(c,function(e,t){t=t[0].style;t.position="absolute",e<2?(u?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+o.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),u?t.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),d&&t.setExpression("left",d),l&&t.setExpression("top",l)):o.centerY?(u&&t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),t.marginTop=0):!o.centerY&&u&&(e="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(o.css&&o.css.top?parseInt(o.css.top,10):0)+') + "px"',t.setExpression("top",e))})),f&&((o.theme?r.find(".ui-widget-content"):r).append(f),(f.jquery||f.nodeType)&&p(f).show()),(h||o.forceIframe)&&o.showOverlay&&a.show(),o.fadeIn?(c=o.onBlock?o.onBlock:b,a=o.showOverlay&&!f?c:b,c=f?c:b,o.showOverlay&&t._fadeIn(o.fadeIn,a),f&&r._fadeIn(o.fadeIn,c)):(o.showOverlay&&t.show(),f&&r.show(),o.onBlock&&o.onBlock.bind(r)()),I(1,e,o),u?(m=r[0],g=p(o.focusableElements,m),o.focusInput&&setTimeout(w,20)):function(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-U(n,"borderLeftWidth"),n=(n.offsetHeight-e.offsetHeight)/2-U(n,"borderTopWidth");t&&(i.left=0<s?s+"px":"0");o&&(i.top=0<n?n+"px":"0")}(r[0],o.centerX,o.centerY),o.timeout&&(r=setTimeout(function(){u?p.unblockUI(o):p(e).unblock(o)},o.timeout),p(e).data("blockUI.timeout",r)))}function v(e,t){var o,n,i=e==window,s=p(e),l=s.data("blockUI.history"),d=s.data("blockUI.timeout");d&&(clearTimeout(d),s.removeData("blockUI.timeout")),t=p.extend({},p.blockUI.defaults,t||{}),I(0,e,t),null===t.onUnblock&&(t.onUnblock=s.data("blockUI.onUnblock"),s.removeData("blockUI.onUnblock")),n=i?p(document.body).children().filter(".blockUI").add("body > .blockUI"):s.find(">.blockUI"),t.cursorReset&&(1<n.length&&(n[1].style.cursor=t.cursorReset),2<n.length&&(n[2].style.cursor=t.cursorReset)),i&&(m=g=null),t.fadeOut?(o=n.length,n.stop().fadeOut(t.fadeOut,function(){0==--o&&a(n,l,t,e)})):a(n,l,t,e)}function a(e,t,o,n){var i=p(n);i.data("blockUI.isBlocked")||(e.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.el.style.cursor="default",t.parent&&t.parent.appendChild(t.el),i.removeData("blockUI.history")),i.data("blockUI.static")&&i.css("position","static"),"function"==typeof o.onUnblock&&o.onUnblock(n,o),n=(i=p(document.body)).width(),o=i[0].style.width,i.width(n-1).width(n),i[0].style.width=o)}function I(e,t,o){var n=t==window,t=p(t);!e&&(n&&!m||!n&&!t.data("blockUI.isBlocked"))||(t.data("blockUI.isBlocked",e),n&&o.bindEvents&&(!e||o.showOverlay)&&(n="mousedown mouseup keydown keypress keyup touchstart touchend touchmove",e?p(document).on(n,o,i):p(document).off(n,i)))}function i(e){if("keydown"===e.type&&e.keyCode&&9==e.keyCode&&m&&e.data.constrainTabKey){var t=!e.shiftKey&&e.target===g[g.length-1],o=e.shiftKey&&e.target===g[0];if(t||o)return setTimeout(function(){w(o)},10),!1}var n=e.data,t=p(e.target);return t.hasClass("blockOverlay")&&n.onOverlayClick&&n.onOverlayClick(e),0<t.parents("div."+n.blockMsgClass).length||0===t.parents().children().filter("div.blockUI").length}function w(e){!g||(e=g[!0===e?g.length-1:0])&&e.trigger("focus")}function U(e,t){return parseInt(p.css(e,t),10)||0}}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();!function(y,c,i,n){var t=function(t){var a=this;a.$form=t,a.$attributeFields=t.find(".variations select"),a.$singleVariation=t.find(".single_variation"),a.$singleVariationWrap=t.find(".single_variation_wrap"),a.$resetVariations=t.find(".reset_variations"),a.$product=t.closest(".product"),a.variationData=t.data("product_variations"),a.useAjax=!1===a.variationData,a.xhr=!1,a.loading=!0,a.$singleVariationWrap.show(),a.$form.off(".wc-variation-form"),a.getChosenAttributes=a.getChosenAttributes.bind(a),a.findMatchingVariations=a.findMatchingVariations.bind(a),a.isMatch=a.isMatch.bind(a),a.toggleResetLink=a.toggleResetLink.bind(a),t.on("click.wc-variation-form",".reset_variations",{variationForm:a},a.onReset),t.on("reload_product_variations",{variationForm:a},a.onReload),t.on("hide_variation",{variationForm:a},a.onHide),t.on("show_variation",{variationForm:a},a.onShow),t.on("click",".single_add_to_cart_button",{variationForm:a},a.onAddToCart),t.on("reset_data",{variationForm:a},a.onResetDisplayedVariation),t.on("reset_image",{variationForm:a},a.onResetImage),t.on("change.wc-variation-form",".variations select",{variationForm:a},a.onChange),t.on("found_variation.wc-variation-form",{variationForm:a},a.onFoundVariation),t.on("check_variations.wc-variation-form",{variationForm:a},a.onFindVariation),t.on("update_variation_values.wc-variation-form",{variationForm:a},a.onUpdateAttributes),setTimeout(function(){t.trigger("check_variations"),t.trigger("wc_variation_form",a),a.loading=!1},100)};t.prototype.onReset=function(t){t.preventDefault(),t.data.variationForm.$attributeFields.val("").trigger("change"),t.data.variationForm.$form.trigger("reset_data")},t.prototype.onReload=function(t){t=t.data.variationForm;t.variationData=t.$form.data("product_variations"),t.useAjax=!1===t.variationData,t.$form.trigger("check_variations")},t.prototype.onHide=function(t){t.preventDefault(),t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-is-unavailable").addClass("disabled wc-variation-selection-needed"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")},t.prototype.onShow=function(t,a,i){t.preventDefault(),i?(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("disabled wc-variation-selection-needed wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-disabled").addClass("woocommerce-variation-add-to-cart-enabled")):(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-selection-needed").addClass("disabled wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")),wp.mediaelement&&t.data.variationForm.$form.find(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function(){return!y(this).parent().hasClass("mejs-mediaelement")}).mediaelementplayer(wp.mediaelement.settings)},t.prototype.onAddToCart=function(t){y(this).is(".disabled")&&(t.preventDefault(),y(this).is(".wc-variation-is-unavailable")?c.alert(wc_add_to_cart_variation_params.i18n_unavailable_text):y(this).is(".wc-variation-selection-needed")&&c.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))},t.prototype.onResetDisplayedVariation=function(t){t=t.data.variationForm;t.$product.find(".product_meta").find(".sku").wc_reset_content(),t.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value").wc_reset_content(),t.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value").wc_reset_content(),t.$form.trigger("reset_image"),t.$singleVariation.slideUp(200).trigger("hide_variation")},t.prototype.onResetImage=function(t){t.data.variationForm.$form.wc_variations_image_update(!1)},t.prototype.onFindVariation=function(t,a){var i=t.data.variationForm,e=void 0!==a?a:i.getChosenAttributes(),a=e.data;e.count&&e.count===e.chosenCount?i.useAjax?(i.xhr&&i.xhr.abort(),i.$form.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),a.product_id=parseInt(i.$form.data("product_id"),10),a.custom_data=i.$form.data("custom_data"),i.xhr=y.ajax({url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%","get_variation"),type:"POST",data:a,success:function(t){t?i.$form.trigger("found_variation",[t]):(i.$form.trigger("reset_data"),e.chosenCount=0,i.loading||(i.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),i.$form.find(".wc-no-matching-variations").slideDown(200)))},complete:function(){i.$form.unblock()}})):(i.$form.trigger("update_variation_values"),(a=i.findMatchingVariations(i.variationData,a).shift())?i.$form.trigger("found_variation",[a]):(i.$form.trigger("reset_data"),e.chosenCount=0,i.loading||(i.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),i.$form.find(".wc-no-matching-variations").slideDown(200)))):(i.$form.trigger("update_variation_values"),i.$form.trigger("reset_data")),i.toggleResetLink(0<e.chosenCount)},t.prototype.onFoundVariation=function(t,a){var i=t.data.variationForm,e=i.$product.find(".product_meta").find(".sku"),r=i.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value"),o=i.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value"),n=i.$singleVariationWrap.find(".quantity"),s=!0,c=!1,t="";a.sku?e.wc_set_content(a.sku):e.wc_reset_content(),a.weight?r.wc_set_content(a.weight_html):r.wc_reset_content(),a.dimensions?o.wc_set_content(y.parseHTML(a.dimensions_html)[0].data):o.wc_reset_content(),i.$form.wc_variations_image_update(a),a.variation_is_visible?(c=_("variation-template"),a.variation_id):c=_("unavailable-variation-template"),t=(t=(t=c({variation:a})).replace("/*<![CDATA[*/","")).replace("/*]]>*/",""),i.$singleVariation.html(t),i.$form.find('input[name="variation_id"], input.variation_id').val(a.variation_id).trigger("change"),"yes"===a.is_sold_individually?(n.find("input.qty").val("1").attr("min","1").attr("max","").trigger("change"),n.hide()):(c=n.find("input.qty"),t=parseFloat(c.val()),t=isNaN(t)||(t=t>parseFloat(a.max_qty)?a.max_qty:t)<parseFloat(a.min_qty)?a.min_qty:t,c.attr("min",a.min_qty).attr("max",a.max_qty).val(t).trigger("change"),n.show()),a.is_purchasable&&a.is_in_stock&&a.variation_is_visible||(s=!1),(i.$singleVariation.text().trim()?i.$singleVariation.slideDown(200):i.$singleVariation.show()).trigger("show_variation",[a,s])},t.prototype.onChange=function(t){t=t.data.variationForm;t.$form.find('input[name="variation_id"], input.variation_id').val("").trigger("change"),t.$form.find(".wc-no-matching-variations").remove(),t.useAjax||t.$form.trigger("woocommerce_variation_select_change"),t.$form.trigger("check_variations"),t.$form.trigger("woocommerce_variation_has_changed")},t.prototype.addSlashes=function(t){return t=(t=t.replace(/'/g,"\\'")).replace(/"/g,'\\"')},t.prototype.onUpdateAttributes=function(t){var b=t.data.variationForm,$=b.getChosenAttributes().data;b.useAjax||(b.$attributeFields.each(function(t,a){var i=y(a),e=i.data("attribute_name")||i.attr("name"),r=y(a).data("show_option_none"),o=":gt(0)",a=0,n=y("<select/>"),s=i.val()||"",c=!0;i.data("attribute_html")||((_=i.clone()).find("option").removeAttr("attached").prop("disabled",!1).prop("selected",!1),i.data("attribute_options",_.find("option"+o).get()),i.data("attribute_html",_.html())),n.html(i.data("attribute_html"));var _=y.extend(!0,{},$);_[e]="";var d,m=b.findMatchingVariations(b.variationData,_);for(d in m)if("undefined"!=typeof m[d]){var l,v=m[d].attributes;for(l in v)if(v.hasOwnProperty(l)){var g=v[l],u="";if(l===e)if(m[d].variation_is_active&&(u="enabled"),g){g=y("<div/>").html(g).text();var f=n.find("option");if(f.length)for(var h=0,p=f.length;h<p;h++){var w=y(f[h]);if(g===w.val()){w.addClass("attached "+u);break}}}else n.find("option:gt(0)").addClass("attached "+u)}}a=n.find("option.attached").length,s&&(c=!1,0!==a&&n.find("option.attached.enabled").each(function(){var t=y(this).val();if(s===t)return!(c=!0)})),0<a&&s&&c&&"no"===r&&(n.find("option:first").remove(),o=""),n.find("option"+o+":not(.attached)").remove(),i.html(n.html()),i.find("option"+o+":not(.enabled)").prop("disabled",!0),s?c?i.val(s):i.val("").trigger("change"):i.val("")}),b.$form.trigger("woocommerce_update_variation_values"))},t.prototype.getChosenAttributes=function(){var i={},e=0,r=0;return this.$attributeFields.each(function(){var t=y(this).data("attribute_name")||y(this).attr("name"),a=y(this).val()||"";0<a.length&&r++,e++,i[t]=a}),{count:e,chosenCount:r,data:i}},t.prototype.findMatchingVariations=function(t,a){for(var i=[],e=0;e<t.length;e++){var r=t[e];this.isMatch(r.attributes,a)&&i.push(r)}return i},t.prototype.isMatch=function(t,a){var i,e,r,o=!0;for(i in t){t.hasOwnProperty(i)&&(e=t[i],r=a[i],e!==n&&r!==n&&0!==e.length&&0!==r.length&&e!==r&&(o=!1))}return o},t.prototype.toggleResetLink=function(t){t?"hidden"===this.$resetVariations.css("visibility")&&this.$resetVariations.css("visibility","visible").hide().fadeIn():this.$resetVariations.css("visibility","hidden")},y.fn.wc_variation_form=function(){return new t(this),this},y.fn.wc_set_content=function(t){n===this.attr("data-o_content")&&this.attr("data-o_content",this.text()),this.text(t)},y.fn.wc_reset_content=function(){n!==this.attr("data-o_content")&&this.text(this.attr("data-o_content"))},y.fn.wc_set_variation_attr=function(t,a){n===this.attr("data-o_"+t)&&this.attr("data-o_"+t,this.attr(t)?this.attr(t):""),!1===a?this.removeAttr(t):this.attr(t,a)},y.fn.wc_reset_variation_attr=function(t){n!==this.attr("data-o_"+t)&&this.attr(t,this.attr("data-o_"+t))},y.fn.wc_maybe_trigger_slide_position_reset=function(t){var a=y(this),i=a.closest(".product").find(".images"),e=!1,t=t&&t.image_id?t.image_id:"";a.attr("current-image")!==t&&(e=!0),a.attr("current-image",t),e&&i.trigger("woocommerce_gallery_reset_slide_position")},y.fn.wc_variations_image_update=function(t){var a=this,i=a.closest(".product"),e=i.find(".images"),r=i.find(".flex-control-nav"),o=r.find("li:eq(0) img"),n=e.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),s=n.find(".wp-post-image"),i=n.find("a").eq(0);if(t&&t.image&&t.image.src&&1<t.image.src.length){0<r.find('li img[data-o_src="'+t.image.gallery_thumbnail_src+'"]').length&&a.wc_variations_image_reset();r=r.find('li img[src="'+t.image.gallery_thumbnail_src+'"]');if(0<r.length)return r.trigger("click"),a.attr("current-image",t.image_id),void c.setTimeout(function(){y(c).trigger("resize"),e.trigger("woocommerce_gallery_init_zoom")},20);s.wc_set_variation_attr("src",t.image.src),s.wc_set_variation_attr("height",t.image.src_h),s.wc_set_variation_attr("width",t.image.src_w),s.wc_set_variation_attr("srcset",t.image.srcset),s.wc_set_variation_attr("sizes",t.image.sizes),s.wc_set_variation_attr("title",t.image.title),s.wc_set_variation_attr("data-caption",t.image.caption),s.wc_set_variation_attr("alt",t.image.alt),s.wc_set_variation_attr("data-src",t.image.full_src),s.wc_set_variation_attr("data-large_image",t.image.full_src),s.wc_set_variation_attr("data-large_image_width",t.image.full_src_w),s.wc_set_variation_attr("data-large_image_height",t.image.full_src_h),n.wc_set_variation_attr("data-thumb",t.image.src),o.wc_set_variation_attr("src",t.image.gallery_thumbnail_src),i.wc_set_variation_attr("href",t.image.full_src)}else a.wc_variations_image_reset();c.setTimeout(function(){y(c).trigger("resize"),a.wc_maybe_trigger_slide_position_reset(t),e.trigger("woocommerce_gallery_init_zoom")},20)},y.fn.wc_variations_image_reset=function(){var t=this.closest(".product"),a=t.find(".images"),i=t.find(".flex-control-nav").find("li:eq(0) img"),e=a.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),t=e.find(".wp-post-image"),a=e.find("a").eq(0);t.wc_reset_variation_attr("src"),t.wc_reset_variation_attr("width"),t.wc_reset_variation_attr("height"),t.wc_reset_variation_attr("srcset"),t.wc_reset_variation_attr("sizes"),t.wc_reset_variation_attr("title"),t.wc_reset_variation_attr("data-caption"),t.wc_reset_variation_attr("alt"),t.wc_reset_variation_attr("data-src"),t.wc_reset_variation_attr("data-large_image"),t.wc_reset_variation_attr("data-large_image_width"),t.wc_reset_variation_attr("data-large_image_height"),e.wc_reset_variation_attr("data-thumb"),i.wc_reset_variation_attr("src"),a.wc_reset_variation_attr("href")},y(function(){"undefined"!=typeof wc_add_to_cart_variation_params&&y(".variations_form").each(function(){y(this).wc_variation_form()})});var _=function(t){var a=i.getElementById("tmpl-"+t).textContent;return/<#\s?data\./.test(a)||/{{{?\s?data\.(?!variation\.).+}}}?/.test(a)||/{{{?\s?data\.variation\.[\w-]*[^\s}]/.test(a)?wp.template(t):function(t){var r=t.variation||{};return a.replace(/({{{?)\s?data\.variation\.([\w-]*)\s?(}}}?)/g,function(t,a,i,e){if(a.length!==e.length)return"";i=r[i]||"";return 2===a.length?c.escape(i):i})}}}(jQuery,window,document);!function($){"use strict";var timeout,delay=1e3,is_blocked=function($node){return $node.is(".processing")||$node.parents(".processing").length},block=function($node){is_blocked($node)||$node.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},unblock=function($node){$node.removeClass("processing").unblock()};$(document).on("click",".qlwcdc_quick_view",(function(e){e.stopPropagation(),e.preventDefault();var product_id=$(this).data("product_id"),$modal=$("#qlwcdc_quick_view_modal");return product_id&&woocommerce_params.ajax_url&&$.ajax({type:"post",url:woocommerce_params.ajax_url,data:{action:"qlwcdc_quick_view_modal",nonce:qlwcdc.nonce,product_id:product_id},complete:function(response){$modal.addClass("opening"),setTimeout((function(){$modal.addClass("open"),$modal.removeClass("opening")}),50)},success:function(response){var $response=$(response);$response.find(".woocommerce-product-gallery").each((function(){$(this).wc_product_gallery()})),$response.on("click",".close",(function(e){$modal.addClass("closing"),setTimeout((function(){$modal.removeClass("open"),$modal.removeClass("closing")}),600)})),$modal.find(".modal-content").replaceWith($response),"undefined"!=typeof wc_add_to_cart_variation_params&&$modal.find(".variations_form").wc_variation_form()}}),!1})),$(document).on("click","#qlwcdc_quick_view_modal",(function(e){var $context=$(e.target),$modal=$(e.delegateTarget);$context.hasClass("modal-dialog")&&($modal.addClass("closing"),setTimeout((function(){$modal.removeClass("open"),$modal.removeClass("closing")}),600))})),$(document).on("added_to_cart_message",(function(e,product_id){$("body").hasClass("qlwcdc-product-ajax-alert")&&product_id&&$.ajax({type:"POST",url:woocommerce_params.ajax_url,data:$.param({action:"qlwcdc_add_product_cart_ajax_message","add-to-cart":product_id}),success:function(response){response.success&&$(".woocommerce-notices-wrapper:first").hide().append($(response.data).html()).fadeIn("fast")}})})),$(document).on("click",".single_add_to_cart_button:not(.qlwcdc_quick_purchase):not(.disabled)",(function(e){var $thisbutton=$(this),$form=$thisbutton.closest("form.cart"),product_id=$form.find("input[name=variation_id]").val()||$form.find("[name=add-to-cart]").val()||!1;if($("body").hasClass("qlwcdc-product-ajax")&&product_id)return e.preventDefault(),$.ajax({type:"POST",url:woocommerce_params.ajax_url,data:$form.serialize()+"&"+$.param({"add-to-cart":product_id,action:"qlwcdc_add_to_cart_action"}),beforeSend:function(response){$thisbutton.removeClass("added").addClass("loading")},complete:function(response){$thisbutton.addClass("added").removeClass("loading")},success:function(response){response.error&response.product_url?window.location=response.product_url:($(document.body).trigger("added_to_cart",[response.fragments,response.cart_hash]),$(document.body).trigger("added_to_cart_message",product_id))}}),!1})),$(document).on("click",".qlwcdc_quick_purchase",(function(e){e.preventDefault(),e.stopPropagation();var $button=$(this),$form=$button.closest("form.cart");if(!$button.is(".disabled")){var product_id=$form.find("[name=add-to-cart]").val()||0,variation_id=$form.find("input[name=variation_id]").val(),params=$form.serialize().replace(/\%5B%5D/g,"[]")||0;return $button.attr("data-href",(function(i,h){-1!=h.indexOf("?")?$button.attr("data-href",$button.attr("data-href")+"&add-to-cart="+product_id):$button.attr("data-href",$button.attr("data-href")+"?add-to-cart="+product_id)})),null!=variation_id&&0==variation_id?!1:(params&&$button.attr("data-href",$button.attr("data-href")+"&"+params),"undefined"!=$button.attr("data-href")&&(document.location.href=$button.attr("data-href")),!1)}})),$(document).on("keyup","#qlwcdc_order_coupon_code",(function(e){var $form=$(this),$coupon=$(this).find('input[name="coupon_code"]'),coupon_code=$coupon.val();timeout&&clearTimeout(timeout),coupon_code&&(timeout=setTimeout((function(){if($form.is(".processing"))return!1;$form.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}});var data={security:wc_checkout_params.apply_coupon_nonce,coupon_code:coupon_code};return $.ajax({type:"POST",url:wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%","apply_coupon"),data:data,success:function(code){$form.removeClass("processing").unblock(),code&&($coupon.before($(code).hide().fadeIn()),setTimeout((function(){$(document.body).trigger("update_checkout",{update_shipping_method:!1})}),2e3))},dataType:"html"}),!1}),1e3))})),$(document).on("change","#order_review input.qty",(function(e){e.preventDefault();var $qty=$(this);$(this).css({"pointer-events":"none",opacity:"0.5"}),setTimeout((function(){var hash=$qty.attr("name").replace(/cart\[([\w]+)\]\[qty\]/g,"$1"),qty=parseFloat($qty.val());$.ajax({type:"post",url:woocommerce_params.ajax_url,data:{action:"qlwcdc_update_cart",nonce:qlwcdc.nonce,hash:hash,quantity:qty},beforeSend:function(response){block($("#order_review"))},complete:function(response){unblock($("#order_review"))},success:function(response){response&&($("#order_review").html($(response).html()).trigger("updated_checkout"),$(document.body).trigger("added_to_cart"))}})}),400)})),$(document).on("click","#order_review a.remove",(function(e){e.preventDefault(),$(this).css({"pointer-events":"none",opacity:"0.5"});var hash=$(this).data("cart_item_key");$.ajax({type:"post",url:woocommerce_params.ajax_url,data:{action:"qlwcdc_update_cart",nonce:qlwcdc.nonce,quantity:0,hash:hash},beforeSend:function(response){block($("#order_review"))},complete:function(response){unblock($("#order_review"))},success:function(response){response&&($("#order_review").html($(response).html()).trigger("updated_checkout"),$(document.body).trigger("added_to_cart"))}})}))}(jQuery);jQuery(document).ready(function(){jQuery("div[class^='timed-content-client']").each(function(index,element){var clsname=jQuery(this).attr("class");var params=clsname.split("_");for(var i=1;i<params.length;i+=4){var action=params[i];var minutes=parseInt(params[i+1]);var seconds=parseInt(params[i+2]);var fade=parseInt(params[i+3]);var ms=((60*minutes)+seconds)*1000;if((action=='show')&&(ms>0)){jQuery(this).hide(0);var s=setTimeout(function(){jQuery("div[class='"+clsname+"']").show(fade)},ms)}
if((action=='hide')&&(ms>0)){var h=setTimeout(function(){jQuery("div[class='"+clsname+"']").hide(fade)},ms)}}});jQuery("span[class^='timed-content-client']").each(function(index,element){var clsname=jQuery(this).attr("class");var params=clsname.split("_");for(var i=1;i<params.length;i+=4){var action=params[i];var minutes=parseInt(params[i+1]);var seconds=parseInt(params[i+2]);var fade=parseInt(params[i+3]);var ms=((60*minutes)+seconds)*1000;if((action=='show')&&(ms>0)){jQuery(this).hide(0);var s=setTimeout(function(){jQuery("span[class='"+clsname+"']").show(fade)},ms)}
if((action=='hide')&&(ms>0)){var h=setTimeout(function(){jQuery("span[class='"+clsname+"']").hide(fade)},ms)}}})});var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";function t(t,e,n){var o=e._settings;!n&&i(t)||(C(o.callback_enter,t),R.indexOf(t.tagName)>-1&&(N(t,e),I(t,o.class_loading)),E(t,e),a(t),C(o.callback_set,t))}var e={elements_selector:"img",container:document,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,callback_load:null,callback_error:null,callback_set:null,callback_enter:null,callback_finish:null,to_webp:!1},n=function(t){return _extends({},e,t)},o=function(t,e){return t.getAttribute("data-"+e)},r=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},a=function(t){return r(t,"was-processed","true")},i=function(t){return"true"===o(t,"was-processed")},s=function(t,e){return r(t,"ll-timeout",e)},c=function(t){return o(t,"ll-timeout")},l=function(t){return t.filter(function(t){return!i(t)})},u=function(t,e){return t.filter(function(t){return t!==e})},d=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)},f=function(t,e){return e?t.replace(/\.(jpe?g|png)/gi,".webp"):t},_="undefined"!=typeof window,v=_&&!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),g=_&&"IntersectionObserver"in window,h=_&&"classList"in document.createElement("p"),b=_&&function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}(),m=function(t,e,n,r){for(var a,i=0;a=t.children[i];i+=1)if("SOURCE"===a.tagName){var s=o(a,n);p(a,e,s,r)}},p=function(t,e,n,o){n&&t.setAttribute(e,f(n,o))},y=function(t,e){var n=b&&e.to_webp,r=o(t,e.data_src),a=o(t,e.data_bg);if(r){var i=f(r,n);t.style.backgroundImage='url("'+i+'")'}if(a){var s=f(a,n);t.style.backgroundImage=s}},w={IMG:function(t,e){var n=b&&e.to_webp,r=e.data_srcset,a=t.parentNode;a&&"PICTURE"===a.tagName&&m(a,"srcset",r,n);var i=o(t,e.data_sizes);p(t,"sizes",i);var s=o(t,r);p(t,"srcset",s,n);var c=o(t,e.data_src);p(t,"src",c,n)},IFRAME:function(t,e){var n=o(t,e.data_src);p(t,"src",n)},VIDEO:function(t,e){var n=e.data_src,r=o(t,n);m(t,"src",n),p(t,"src",r),t.load()}},E=function(t,e){var n=e._settings,o=t.tagName,r=w[o];if(r)return r(t,n),e._updateLoadingCount(1),void(e._elements=u(e._elements,t));y(t,n)},I=function(t,e){h?t.classList.add(e):t.className+=(t.className?" ":"")+e},L=function(t,e){h?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},C=function(t,e){t&&t(e)},O=function(t,e,n){t.addEventListener(e,n)},k=function(t,e,n){t.removeEventListener(e,n)},x=function(t,e,n){O(t,"load",e),O(t,"loadeddata",e),O(t,"error",n)},A=function(t,e,n){k(t,"load",e),k(t,"loadeddata",e),k(t,"error",n)},z=function(t,e,n){var o=n._settings,r=e?o.class_loaded:o.class_error,a=e?o.callback_load:o.callback_error,i=t.target;L(i,o.class_loading),I(i,r),C(a,i),n._updateLoadingCount(-1)},N=function(t,e){var n=function n(r){z(r,!0,e),A(t,n,o)},o=function o(r){z(r,!1,e),A(t,n,o)};x(t,n,o)},R=["IMG","IFRAME","VIDEO"],S=function(e,n,o){t(e,o),n.unobserve(e)},M=function(t){var e=c(t);e&&(clearTimeout(e),s(t,null))},j=function(t,e,n){var o=n._settings.load_delay,r=c(t);r||(r=setTimeout(function(){S(t,e,n),M(t)},o),s(t,r))},D=function(t){return t.isIntersecting||t.intersectionRatio>0},T=function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}},U=function(t,e){this._settings=n(t),this._setObserver(),this._loadingCount=0,this.update(e)};return U.prototype={_manageIntersection:function(t){var e=this._observer,n=this._settings.load_delay,o=t.target;n?D(t)?j(o,e,this):M(o):D(t)&&S(o,e,this)},_onIntersection:function(t){t.forEach(this._manageIntersection.bind(this))},_setObserver:function(){g&&(this._observer=new IntersectionObserver(this._onIntersection.bind(this),T(this._settings)))},_updateLoadingCount:function(t){this._loadingCount+=t,0===this._elements.length&&0===this._loadingCount&&C(this._settings.callback_finish)},update:function(t){var e=this,n=this._settings,o=t||n.container.querySelectorAll(n.elements_selector);this._elements=l(Array.prototype.slice.call(o)),!v&&this._observer?this._elements.forEach(function(t){e._observer.observe(t)}):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(e,n){t(e,this,n)},loadAll:function(){var t=this;this._elements.forEach(function(e){t.load(e)})}},_&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)d(t,n);else d(t,e)}(U,window.lazyLoadOptions),U});var myLazyLoad=new LazyLoad({elements_selector:".lazy"});(function(){var c=document.body.className;c=c.replace(/woocommerce-no-js/,'woocommerce-js');document.body.className=c})();!function(){"use strict";var e=function(e){return Math.abs(parseInt(e,10))};const t=(e,t)=>{const n=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["payment_required","payment-required"]]);n.has(t)&&(t=n.get(t)),Array.from(n.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const r=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),r&&r!==t&&e.classList.remove(r),t};var n=function(e,t,n){var r=new CustomEvent("wpcf7".concat(t),{bubbles:!0,detail:n});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(r)};function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=function(e){var t=wpcf7.api,n=t.root,r=t.namespace,a=void 0===r?"contact-form-7/v1":r;return i.reduceRight((function(e,t){return function(n){return t(n,e)}}),(function(e){var t,r,o=e.url,i=e.path,s=e.endpoint,u=e.headers,l=e.body,f=e.data,p=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["url","path","endpoint","headers","body","data"]);"string"==typeof s&&(t=a.replace(/^\/|\/$/g,""),i=(r=s.replace(/^\//,""))?t+"/"+r:t),"string"==typeof i&&(-1!==n.indexOf("?")&&(i=i.replace("?","&")),i=i.replace(/^\//,""),o=n+i),delete(u=c({Accept:"application/json, */*;q=0.1"},u))["X-WP-Nonce"],f&&(l=JSON.stringify(f),u["Content-Type"]="application/json");var d={code:"fetch_error",message:"You are probably offline."},w={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(o||i||window.location.href,c(c({},p),{},{headers:u,body:l})).then((function(e){return Promise.resolve(e).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){if(204===e.status)return null;if(e&&e.json)return e.json().catch((function(){throw w}));throw w}))}),(function(){throw d}))}))(e)},i=[];function s(e,r={}){if(wpcf7.blocked)return u(e),void t(e,"submitting");const a=new FormData(e);r.submitter&&r.submitter.name&&a.append(r.submitter.name,r.submitter.value);const c={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(a,(e=>{const t=e[0],n=e[1];return!t.match(/^_/)&&{name:t,value:n}})).filter((e=>!1!==e)),formData:a},i=t=>{const n=document.createElement("li");n.setAttribute("id",t.error_id),t.idref?n.insertAdjacentHTML("beforeend",`<a href="#${t.idref}">${t.message}</a>`):n.insertAdjacentText("beforeend",t.message),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(n)},s=t=>{const n=e.querySelector(t.into),r=n.querySelector(".wpcf7-form-control");r.classList.add("wpcf7-not-valid"),r.setAttribute("aria-describedby",t.error_id);const a=document.createElement("span");a.setAttribute("class","wpcf7-not-valid-tip"),a.setAttribute("aria-hidden","true"),a.insertAdjacentText("beforeend",t.message),n.appendChild(a),n.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),r.closest(".use-floating-validation-tip")&&(r.addEventListener("focus",(e=>{a.setAttribute("style","display: none")})),a.addEventListener("mouseover",(e=>{a.setAttribute("style","display: none")})))};o({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:a,wpcf7:{endpoint:"feedback",form:e,detail:c}}).then((r=>{const a=t(e,r.status);return c.status=r.status,c.apiResponse=r,["invalid","unaccepted","spam","aborted"].includes(a)?n(e,a,c):["sent","failed"].includes(a)&&n(e,`mail${a}`,c),n(e,"submit",c),r})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&(t.invalid_fields.forEach(i),t.invalid_fields.forEach(s)),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}o.use=function(e){i.unshift(e)},o.use(((e,r)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:r,detail:a}=e.wpcf7;u(r),n(r,"beforesubmit",a),t(r,"submitting")}return r(e)}));const u=e=>{e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText="",e.querySelectorAll(".wpcf7-not-valid-tip").forEach((e=>{e.remove()})),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid")})),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function l(e){var r=new FormData(e),a={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(r,(function(e){var t=e[0],n=e[1];return!t.match(/^_/)&&{name:t,value:n}})).filter((function(e){return!1!==e})),formData:r};o({endpoint:"contact-forms/".concat(e.wpcf7.id,"/refill"),method:"GET",wpcf7:{endpoint:"refill",form:e,detail:a}}).then((function(r){e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,t(e,"mail_sent")):t(e,"init"),a.apiResponse=r,n(e,"reset",a)})).catch((function(e){return console.error(e)}))}o.use((function(e,n){if(e.wpcf7&&"refill"===e.wpcf7.endpoint){var r=e.wpcf7,a=r.form;r.detail,u(a),t(a,"resetting")}return n(e)}));var f=function(e,t){var n=function(n){var r=t[n];e.querySelectorAll('input[name="'.concat(n,'"]')).forEach((function(e){e.value=""})),e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach((function(e){e.setAttribute("src",r)}));var a=/([0-9]+)\.(png|gif|jpeg)$/.exec(r);a&&e.querySelectorAll('input[name="_wpcf7_captcha_challenge_'.concat(n,'"]')).forEach((function(e){e.value=a[1]}))};for(var r in t)n(r)},p=function(e,t){var n=function(n){var r=t[n][0],a=t[n][1];e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach((function(e){e.querySelector('input[name="'.concat(n,'"]')).value="",e.querySelector(".wpcf7-quiz-label").textContent=r,e.querySelector('input[name="_wpcf7_quiz_answer_'.concat(n,'"]')).value=a}))};for(var r in t)n(r)};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(t){const n=new FormData(t);t.wpcf7={id:e(n.get("_wpcf7")),status:t.getAttribute("data-status"),pluginVersion:n.get("_wpcf7_version"),locale:n.get("_wpcf7_locale"),unitTag:n.get("_wpcf7_unit_tag"),containerPost:e(n.get("_wpcf7_container_post")),parent:t.closest(".wpcf7")},t.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),function(e){e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((function(t){t.addEventListener("change",(function(t){var n=t.target.getAttribute("name");e.querySelectorAll('input[type="checkbox"][name="'.concat(n,'"]')).forEach((function(e){e!==t.target&&(e.checked=!1)}))}))}))}(t),function(e){e.querySelectorAll(".has-free-text").forEach((function(t){var n=t.querySelector("input.wpcf7-free-text"),r=t.querySelector('input[type="checkbox"], input[type="radio"]');n.disabled=!r.checked,e.addEventListener("change",(function(e){n.disabled=!r.checked,e.target===r&&r.checked&&n.focus()}))}))}(t),function(e){e.querySelectorAll(".wpcf7-validates-as-url").forEach((function(e){e.addEventListener("change",(function(t){var n=e.value.trim();n&&!n.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==n.indexOf(".")&&(n="http://"+(n=n.replace(/^\/+/,""))),e.value=n}))}))}(t),function(e){if(e.querySelector(".wpcf7-acceptance")&&!e.classList.contains("wpcf7-acceptance-as-validation")){var t=function(){var t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((function(e){if(t&&!e.classList.contains("optional")){var n=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&n.checked||!e.classList.contains("invert")&&!n.checked)&&(t=!1)}})),e.querySelectorAll(".wpcf7-submit").forEach((function(e){e.disabled=!t}))};t(),e.addEventListener("change",(function(e){t()})),e.addEventListener("wpcf7reset",(function(e){t()}))}}(t),function(t){var n=function(t,n){var r=e(t.getAttribute("data-starting-value")),a=e(t.getAttribute("data-maximum-value")),c=e(t.getAttribute("data-minimum-value")),o=t.classList.contains("down")?r-n.value.length:n.value.length;t.setAttribute("data-current-value",o),t.innerText=o,a&&a<n.value.length?t.classList.add("too-long"):t.classList.remove("too-long"),c&&n.value.length<c?t.classList.add("too-short"):t.classList.remove("too-short")},a=function(e){e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({init:!1},e),t.querySelectorAll(".wpcf7-character-count").forEach((function(r){var a=r.getAttribute("data-target-name"),c=t.querySelector('[name="'.concat(a,'"]'));c&&(c.value=c.defaultValue,n(r,c),e.init&&c.addEventListener("keyup",(function(e){n(r,c)})))}))};a({init:!0}),t.addEventListener("wpcf7reset",(function(e){a()}))}(t),window.addEventListener("load",(e=>{wpcf7.cached&&t.reset()})),t.addEventListener("reset",(e=>{wpcf7.reset(t)})),t.addEventListener("submit",(e=>{const n=e.submitter;wpcf7.submit(t,{submitter:n}),e.preventDefault()})),t.addEventListener("wpcf7submit",(e=>{e.detail.apiResponse.captcha&&f(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&p(t,e.detail.apiResponse.quiz)})),t.addEventListener("wpcf7reset",(e=>{e.detail.apiResponse.captcha&&f(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&p(t,e.detail.apiResponse.quiz)}))}document.addEventListener("DOMContentLoaded",(e=>{var t;if("undefined"==typeof wpcf7)return void console.error("wpcf7 is not defined.");if(void 0===wpcf7.api)return void console.error("wpcf7.api is not defined.");if("function"!=typeof window.fetch)return void console.error("Your browser doesn't support window.fetch().");if("function"!=typeof window.FormData)return void console.error("Your browser doesn't support window.FormData().");const n=document.querySelectorAll(".wpcf7 > form");"function"==typeof n.forEach?(wpcf7={init:w,submit:s,reset:l,...null!==(t=wpcf7)&&void 0!==t?t:{}},n.forEach((e=>wpcf7.init(e)))):console.error("Your browser doesn't support NodeList.forEach().")}))}();var js_cookie_params={"cart_url":"https:\/\/unilik.ua\/checkout\/","i18n_view_cart":"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"};/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n,o,t=!1;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),t||(n=window.Cookies,(o=window.Cookies=e()).noConflict=function(){return window.Cookies=n,o})}(function(){function m(){for(var e=0,n={};e<arguments.length;e++){var o,t=arguments[e];for(o in t)n[o]=t[o]}return n}return function e(C){function g(e,n,o){var t,r;if("undefined"!=typeof document){if(1<arguments.length){"number"==typeof(o=m({path:"/"},g.defaults,o)).expires&&((r=new Date).setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r),o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(l){}n=C.write?C.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i,c="";for(i in o)o[i]&&(c+="; "+i,!0!==o[i]&&(c+="="+o[i]));return document.cookie=e+"="+n+c}e||(t={});for(var s=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,p=0;p<s.length;p++){var a=s[p].split("=");'"'===(u=a.slice(1).join("=")).charAt(0)&&(u=u.slice(1,-1));try{var d=a[0].replace(f,decodeURIComponent),u=C.read?C.read(u,d):C(u,d)||u.replace(f,decodeURIComponent);if(this.json)try{u=JSON.parse(u)}catch(l){}if(e===d){t=u;break}e||(t[d]=u)}catch(l){}}return t}}return(g.set=g).get=function(e){return g.call(g,e)},g.getJSON=function(){return g.apply({json:!0},[].slice.call(arguments))},g.defaults={},g.remove=function(e,n){g(e,"",m(n,{expires:-1}))},g.withConverter=e,g}(function(){})});jQuery(function(s){s(".woocommerce-ordering").on("change","select.orderby",function(){s(this).closest("form").trigger("submit")}),s("input.qty:not(.product-quantity input.qty)").each(function(){var o=parseFloat(s(this).attr("min"));0<=o&&parseFloat(s(this).val())<o&&s(this).val(o)});var e="store_notice"+(s(".woocommerce-store-notice").data("noticeId")||"");"hidden"===Cookies.get(e)?s(".woocommerce-store-notice").hide():s(".woocommerce-store-notice").show(),s(".woocommerce-store-notice__dismiss-link").on("click",function(o){Cookies.set(e,"hidden",{path:"/"}),s(".woocommerce-store-notice").hide(),o.preventDefault()}),s(".woocommerce-input-wrapper span.description").length&&s(document.body).on("click",function(){s(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),s(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),s(".woocommerce-input-wrapper :input").on("keydown",function(o){var e=s(this).parent().find("span.description");if(27===o.which&&e.length&&e.is(":visible"))return e.prop("aria-hidden",!0).slideUp(250),o.preventDefault(),!1}).on("click focus",function(){var o=s(this).parent(),e=o.find("span.description");o.addClass("currentTarget"),s(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),e.length&&e.is(":hidden")&&e.prop("aria-hidden",!1).slideDown(250),o.removeClass("currentTarget")}),s.scroll_to_notices=function(o){o.length&&s("html, body").animate({scrollTop:o.offset().top-100},1e3)},s('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),s(".woocommerce form input").filter(":password").parent("span").addClass("password-input"),s(".password-input").append('<span class="show-password-input"></span>'),s(".show-password-input").on("click",function(){s(this).hasClass("display-password")?s(this).removeClass("display-password"):s(this).addClass("display-password"),s(this).hasClass("display-password")?s(this).siblings(['input[type="password"]']).prop("type","text"):s(this).siblings('input[type="text"]').prop("type","password")})});jQuery(function(r){if("undefined"==typeof wc_cart_fragments_params)return!1;var t=!0,o=wc_cart_fragments_params.cart_hash_key;try{t="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){t=!1}function a(){t&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function s(e){t&&(localStorage.setItem(o,e),sessionStorage.setItem(o,e))}var e={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",data:{time:(new Date).getTime()},timeout:wc_cart_fragments_params.request_timeout,success:function(e){e&&e.fragments&&(r.each(e.fragments,function(e,t){r(e).replaceWith(t)}),t&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(e.fragments)),s(e.cart_hash),e.cart_hash&&a()),r(document.body).trigger("wc_fragments_refreshed"))},error:function(){r(document.body).trigger("wc_fragments_ajax_error")}};function n(){r.ajax(e)}if(t){var i=null;r(document.body).on("wc_fragment_refresh updated_wc_div",function(){n()}),r(document.body).on("added_to_cart removed_from_cart",function(e,t,r){var n=sessionStorage.getItem(o);null!==n&&n!==undefined&&""!==n||a(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(t)),s(r)}),r(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(n,864e5)}),r(window).on("storage onstorage",function(e){o===e.originalEvent.key&&localStorage.getItem(o)!==sessionStorage.getItem(o)&&n()}),r(window).on("pageshow",function(e){e.originalEvent.persisted&&(r(".widget_shopping_cart_content").empty(),r(document.body).trigger("wc_fragment_refresh"))});try{var c=JSON.parse(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(o),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=+m+864e5,m=(new Date).getTime();if(d<m)throw"Fragment expired";i=setTimeout(n,d-m)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";r.each(c,function(e,t){r(e).replaceWith(t)}),r(document.body).trigger("wc_fragments_loaded")}catch(w){n()}}else n();0<Cookies.get("woocommerce_items_in_cart")?r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),r(document.body).on("adding_to_cart",function(){r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()}),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.widgetsPreview&&wp.customize.widgetsPreview.WidgetPartial&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){n()})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});/*! @license ScrollReveal v4.0.6

	Copyright 2020 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
var ScrollReveal=function(){"use strict";var r={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var n={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function o(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function u(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(o);if(o(e))return[e];if(n=e,i=Object.prototype.toString.call(n),"object"==typeof window.NodeList?n instanceof window.NodeList:null!==n&&"object"==typeof n&&"number"==typeof n.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===n.length||o(n[0])))return Array.prototype.slice.call(e);var n,i;if("string"==typeof e)try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch(e){return[]}return[]}function s(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function f(n,i){if(s(n))return Object.keys(n).forEach(function(e){return i(n[e],e,n)});if(n instanceof Array)return n.forEach(function(e,t){return i(e,t,n)});throw new TypeError("Expected either an array or object literal.")}function h(e){for(var t=[],n=arguments.length-1;0<n--;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(e){return i+="\n — "+e}),console.log(i,"color: #ea654b;")}}function t(){var n=this,i={active:[],stale:[]},t={active:[],stale:[]},r={active:[],stale:[]};try{f(u("[data-sr-id]"),function(e){var t=parseInt(e.getAttribute("data-sr-id"));i.active.push(t)})}catch(e){throw e}f(this.store.elements,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),f(i.stale,function(e){return delete n.store.elements[e]}),f(this.store.elements,function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===t.active.indexOf(e.sequence.id)&&t.active.push(e.sequence.id)}),f(this.store.containers,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),f(r.stale,function(e){var t=n.store.containers[e].node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate),delete n.store.containers[e]}),f(this.store.sequences,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),f(t.stale,function(e){return delete n.store.sequences[e]})}function p(e){var i,r=this;try{f(u(e),function(e){var t=e.getAttribute("data-sr-id");if(null!==t){i=!0;var n=r.store.elements[t];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),e.setAttribute("style",n.styles.inline.generated),e.removeAttribute("data-sr-id"),delete r.store.elements[t]}})}catch(e){return h.call(this,"Clean failed.",e.message)}if(i)try{t.call(this)}catch(e){return h.call(this,"Clean failed.",e.message)}}function N(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6!==e.length)throw new RangeError("Expected array with either 6 or 16 values.");var t=z();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}function z(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function F(e,t){for(var n=N(e),i=N(t),r=[],o=0;o<4;o++)for(var s=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var c=4*a,l=[i[c],i[c+1],i[c+2],i[c+3]],d=s[0]*l[0]+s[1]*l[1]+s[2]*l[2]+s[3]*l[3];r[o+c]=d}return r}function D(e,t){var n=z();return n[0]=e,n[5]="number"==typeof t?t:e,n}var S=function(){var n={},i=document.documentElement.style;function e(e,t){if(void 0===t&&(t=i),e&&"string"==typeof e){if(n[e])return n[e];if("string"==typeof t[e])return n[e]=e;if("string"==typeof t["-webkit-"+e])return n[e]="-webkit-"+e;throw new RangeError('Unable to find "'+e+'" style property.')}throw new TypeError("Expected a string.")}return e.clearCache=function(){return n={}},e}();function m(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(e){return e.trim()}).join("; ")+";":"",r.generated=o.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var s,a,c,l,d,u,f,h,p,m,y,v,g,b=parseFloat(t.opacity),w=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),E={computed:b!==w?"opacity: "+b+";":"",generated:b!==w?"opacity: "+w+";":""},j=[];if(parseFloat(i.distance)){var T="top"===i.origin||"bottom"===i.origin?"Y":"X",k=i.distance;"top"!==i.origin&&"left"!==i.origin||(k=/^-/.test(k)?k.substr(1):"-"+k);var O=k.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),x=O[0];switch(O[1]){case"em":k=parseInt(t.fontSize)*x;break;case"px":k=x;break;case"%":k="Y"===T?e.node.getBoundingClientRect().height*x/100:e.node.getBoundingClientRect().width*x/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===T?j.push((c=k,(l=z())[13]=c,l)):j.push((s=k,(a=z())[12]=s,a))}i.rotate.x&&j.push((d=i.rotate.x,u=Math.PI/180*d,(f=z())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),i.rotate.y&&j.push((h=i.rotate.y,p=Math.PI/180*h,(m=z())[0]=m[10]=Math.cos(p),m[2]=m[8]=Math.sin(p),m[2]*=-1,m)),i.rotate.z&&j.push((y=i.rotate.z,v=Math.PI/180*y,(g=z())[0]=g[5]=Math.cos(v),g[1]=g[4]=Math.sin(v),g[4]*=-1,g)),1!==i.scale&&(0===i.scale?j.push(D(2e-4)):j.push(D(i.scale)));var A={};if(j.length){A.property=S("transform"),A.computed={raw:t[A.property],matrix:function(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return N(t[2].split(", ").map(parseFloat))}return z()}(t[A.property])},j.unshift(A.computed.matrix);var R=j.reduce(F);A.generated={initial:A.property+": matrix3d("+R.join(", ")+");",final:A.property+": matrix3d("+A.computed.matrix.join(", ")+");"}}else A.generated={initial:"",final:""};var q={};if(E.generated||A.generated.initial){q.property=S("transition"),q.computed=t[q.property],q.fragments=[];var P=i.delay,L=i.duration,M=i.easing;E.generated&&q.fragments.push({delayed:"opacity "+L/1e3+"s "+M+" "+P/1e3+"s",instant:"opacity "+L/1e3+"s "+M+" 0s"}),A.generated.initial&&q.fragments.push({delayed:A.property+" "+L/1e3+"s "+M+" "+P/1e3+"s",instant:A.property+" "+L/1e3+"s "+M+" 0s"}),q.computed&&!q.computed.match(/all 0s|none 0s/)&&q.fragments.unshift({delayed:q.computed,instant:q.computed});var I=q.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});q.generated={delayed:q.property+": "+I.delayed+";",instant:q.property+": "+I.instant+";"}}else q.generated={delayed:"",instant:""};return{inline:r,opacity:E,position:n,transform:A,transition:q}}function c(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?function(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant);e.revealed=e.seen=!0,e.node.setAttribute("style",n.filter(function(e){return""!==e}).join(" ")),a.call(this,e,t)}.call(this,e,i):t.reset||o?function(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" ")),a.call(this,e)}.call(this,e):void 0}function a(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&p.call(n,e.node)},i-s)}}var e,y=(e=0,function(){return e++});function l(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return c.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new d(n,"visible",this.store),o=new d(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return g.call(this,n,r.body[0],-1,t),g.call(this,n,r.body[0],1,t),c.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return g.call(this,n,i,-1,t),c.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return g.call(this,n,i,1,t),c.call(this,e,{reveal:!0,pristine:t})}}function v(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=y(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function d(e,i,r){var o=this;this.head=[],this.body=[],this.foot=[],f(e.members,function(e,t){var n=r.elements[e];n&&n[i]&&o.body.push(t)}),this.body.length&&f(e.members,function(e,t){var n=r.elements[e];n&&!n[i]&&(t<o.body[0]?o.head.push(t):o.foot.push(t))})}function g(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&l.call(r,a,i)},e.interval)}function b(){var n=this;t.call(this),f(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" "))}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.addEventListener("scroll",n.delegate),t.addEventListener("resize",n.delegate)}),this.delegate(),this.initTimeout=null}function w(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}function E(n){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];if(s(n))return f(e,function(e){f(e,function(e,t){s(e)?(n[t]&&s(n[t])||(n[t]={}),E(n[t],e)):n[t]=e})}),n;throw new TypeError("Target must be an object literal.")}function i(e,a,t){var c=this;void 0===a&&(a={}),void 0===t&&(t=!1);var l,d=[],n=a.interval||r.interval;try{n&&(l=new v(n));var i=u(e);if(!i.length)throw new Error("Invalid reveal target.");f(i.reduce(function(e,t){var n={},i=t.getAttribute("data-sr-id");i?(E(n,c.store.elements[i]),n.node.setAttribute("style",n.styles.inline.computed)):(n.id=y(),n.node=t,n.seen=!1,n.revealed=!1,n.visible=!1);var r=E({},n.config||c.defaults,a);if(!r.mobile&&w()||!r.desktop&&!w())return i&&p.call(c,n),e;var o,s=u(r.container)[0];if(!s)throw new Error("Invalid container.");return s.contains(t)&&(null===(o=function(t){var e=[],n=arguments.length-1;for(;0<n--;)e[n]=arguments[n+1];var i=null;return f(e,function(e){f(e,function(e){null===i&&e.node===t&&(i=e.id)})}),i}(s,d,c.store.containers))&&(o=y(),d.push({id:o,node:s})),n.config=r,n.containerId=o,n.styles=m(n),l&&(n.sequence={id:l.id,index:l.members.length},l.members.push(n.id)),e.push(n)),e},[]),function(e){(c.store.elements[e.id]=e).node.setAttribute("data-sr-id",e.id)})}catch(e){return h.call(this,"Reveal failed.",e.message)}f(d,function(e){c.store.containers[e.id]={id:e.id,node:e.node}}),l&&(this.store.sequences[l.id]=l),!0!==t&&(this.store.history.push({target:e,options:a}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(b.bind(this),0))}var j,T=Math.sign||function(e){return(0<e)-(e<0)||+e},k=(j=Date.now(),function(e){var t=Date.now();16<t-j?e(j=t):setTimeout(function(){return k(e)},0)}),O=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||k;function x(e,t){for(var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function A(e,t){var i=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),O(function(){var n="init"===e.type||"resize"===e.type;f(i.store.containers,function(e){n&&(e.geometry=x.call(i,e,!0));var t=function(e){var t,n;return n=e.node===document.documentElement?(t=window.pageYOffset,window.pageXOffset):(t=e.node.scrollTop,e.node.scrollLeft),{top:t,left:n}}.call(i,e);e.scroll&&(e.direction={x:T(t.left-e.scroll.left),y:T(t.top-e.scroll.top)}),e.scroll=t}),f(t,function(e){n&&(e.geometry=x.call(i,e)),e.visible=function(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&u<o&&c<s&&a<l||"fixed"===e.styles.position}}.call(i,e)}),f(t,function(e){e.sequence?l.call(i,e):c.call(i,e)}),i.pristine=!1})}var R,q,P,L,M,I,C,W,Y="4.0.6";function $(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==$.prototype)return new $(e);if(!$.isSupported())return h.call(this,"Instantiation failed.","This browser is not supported."),n.failure();try{t=E({},I||r,e)}catch(e){return h.call(this,"Invalid configuration.",e.message),n.failure()}try{if(!u(t.container)[0])throw new Error("Invalid container.")}catch(e){return h.call(this,e.message),n.failure()}return!(I=t).mobile&&w()||!I.desktop&&!w()?(h.call(this,"This device is disabled.","desktop: "+I.desktop,"mobile: "+I.mobile),n.failure()):(n.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,R=R||A.bind(this),q=q||function(){var n=this;f(this.store.elements,function(e){e.node.setAttribute("style",e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}.bind(this),P=P||i.bind(this),L=L||p.bind(this),M=M||function(){var t=this;f(this.store.history,function(e){i.call(t,e.target,e.options,!0)}),b.call(this)}.bind(this),Object.defineProperty(this,"delegate",{get:function(){return R}}),Object.defineProperty(this,"destroy",{get:function(){return q}}),Object.defineProperty(this,"reveal",{get:function(){return P}}),Object.defineProperty(this,"clean",{get:function(){return L}}),Object.defineProperty(this,"sync",{get:function(){return M}}),Object.defineProperty(this,"defaults",{get:function(){return I}}),Object.defineProperty(this,"version",{get:function(){return Y}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),W||(W=this))}return $.isSupported=function(){return("transform"in(t=document.documentElement.style)||"WebkitTransform"in t)&&("transition"in(e=document.documentElement.style)||"WebkitTransition"in e);var e,t},Object.defineProperty($,"debug",{get:function(){return C||!1},set:function(e){return C="boolean"==typeof e?e:C}}),$(),$}();/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();(function($){"use strict";$.fn.counterUp=function(options){var settings=$.extend({time:400,delay:10,offset:100,beginAt:0,formatter:!1,context:"window",callback:function(){}},options),s;return this.each(function(){var $this=$(this),counter={time:$(this).data("counterup-time")||settings.time,delay:$(this).data("counterup-delay")||settings.delay,offset:$(this).data("counterup-offset")||settings.offset,beginAt:$(this).data("counterup-beginat")||settings.beginAt,context:$(this).data("counterup-context")||settings.context};var counterUpper=function(){var nums=[];var divisions=counter.time/counter.delay;var num=$(this).attr("data-num")?$(this).attr("data-num"):$this.text();var isComma=/[0-9]+,[0-9]+/.test(num);num=num.replace(/,/g,"");var decimalPlaces=(num.split(".")[1]||[]).length;if(counter.beginAt>num)counter.beginAt=num;var isTime=/[0-9]+:[0-9]+:[0-9]+/.test(num);if(isTime){var times=num.split(":"),m=1;s=0;while(times.length>0){s+=m*parseInt(times.pop(),10);m*=60}}for(var i=divisions;i>=counter.beginAt/num*divisions;i--){var newNum=parseFloat(num/divisions*i).toFixed(decimalPlaces);if(isTime){newNum=parseInt(s/divisions*i);var hours=parseInt(newNum/3600)%24;var minutes=parseInt(newNum/60)%60;var seconds=parseInt(newNum%60,10);newNum=(hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds)}if(isComma){while(/(\d+)(\d{3})/.test(newNum.toString())){newNum=newNum.toString().replace(/(\d+)(\d{3})/,"$1"+","+"$2")}}if(settings.formatter){newNum=settings.formatter.call(this,newNum)}nums.unshift(newNum)}$this.data("counterup-nums",nums);$this.text(counter.beginAt);var f=function(){if(!$this.data("counterup-nums")){settings.callback.call(this);return}$this.html($this.data("counterup-nums").shift());if($this.data("counterup-nums").length){setTimeout($this.data("counterup-func"),counter.delay)}else{$this.data("counterup-nums",null);$this.data("counterup-func",null);settings.callback.call(this)}};$this.data("counterup-func",f);setTimeout($this.data("counterup-func"),counter.delay)};$this.waypoint(function(direction){counterUpper();this.destroy()},{offset:counter.offset+"%",context:counter.context})})}})(jQuery);var unilik={init:function(){this.mt();this.mainNav();this.mainMenuStickyNav();this.sideMenuToggle();this.footerTitleToggle();this.phoneMask();this.mainSlider();this.starRating();this.accord();this.testimonialSlider();this.doctorsSlider();this.doctorsMainSlider();this.profSlider();this.countersSlider();this.revealProf();this.defaultFormMeta();this.popupOrder();this.counter();this.mapLoad()},vars:{scrollTop:$(window).scrollTop(),},mt:function(){$('.wrapper').css('margin-top',$('.site-header-top').height()+$('.site-header-bot').height())},mainNav:function(){var $menu=$('.site-menu');var $menuButton=$('.menu-toggle');$menuButton.on('click',function(){$menu.toggleClass('active').slideToggle();$(this).toggleClass('active');$('html, body').toggleClass('is-menu-open')});if(window.matchMedia("screen and (max-width: 992px)").matches){$('.main-menu').on('click','.sub-menu__toggle',function(event){var $this=$(this);subMenuToggle(event,$this)})}
function subMenuToggle(event,$this){event.preventDefault();event.stopPropagation();if($this.hasClass('is-open')){$this.removeClass('is-open');$this.next('.sub-menu').removeClass('is-open').slideUp()}else{$this.closest('.menu-item').parent().find('.sub-menu__toggle.is-open').removeClass('is-open');$this.closest('.menu-item').parent().find('.sub-menu.is-open').removeClass('is-open').slideUp();$this.addClass('is-open');$this.next('.sub-menu').addClass('is-open').slideDown()}}
$(document).on('click','.no-link>a',function(event){event.preventDefault()})},sideMenuToggle:function(){$(".side-menu-toggle").on("click",function(){$(this).toggleClass('is-show');$('.sidebar-menu-nav').toggleClass('is-open').slideToggle()})},footerTitleToggle:function(){if(window.matchMedia("screen and (max-width: 767.98px)").matches){$(".footer-title").on("click",function(){if(!$(this).hasClass('active')){console.log('no');$(".footer-col").slideUp('fast').removeClass('active');$(".footer-title").removeClass('active');$(this).addClass('active');$(this).next().slideDown('fast').addClass('active')}else{console.log('yes');$(".footer-col").slideUp('fast').removeClass('active');$(".footer-title").removeClass('active')}})}},mainMenuStickyNav:function(){var body=document.body,scrollUp="scroll-up",scrollDown="scroll-down",lastScroll=0;window.addEventListener("scroll",()=>{const currentScroll=window.pageYOffset;if(currentScroll==0){body.classList.remove(scrollUp);return}
if(currentScroll>lastScroll&&currentScroll>50&&!body.classList.contains(scrollDown)){body.classList.remove(scrollUp);body.classList.add(scrollDown)}else if(currentScroll<lastScroll&&body.classList.contains(scrollDown)){body.classList.remove(scrollDown);body.classList.add(scrollUp)}
lastScroll=currentScroll})},phoneMask:function(){$('input[type="tel"]').mask('+380 99 999-99-99')},mainSlider:function(){if($('.main-slider-items').length>0){$('.main-slider-items').slick({lazyLoad:'ondemand',autoplay:!0,autoplaySpeed:5000,infinite:!0,arrows:!1,dots:!0,slidesToScroll:1,adaptiveHeight:!0})}},starRating:function(){$(".cf7-star-rating a").hover(function(){var id=$(this).data("id");var icon=$(this).closest('.cf7-star-rating').data("hover");for(i=1;i<=id;i++){$(this).closest('.cf7-star-rating').find('.cf7-star-rating-'+i+' i').removeClass().addClass(icon)}},function(){var id_active=$(this).closest('.cf7-star-rating').data("active")+1;var id=$(this).data("id");var icon=$(this).closest('.cf7-star-rating').data("icon");$(this).closest('.cf7-star-rating').find('i').removeClass().addClass(icon)});$(".cf7-star-rating").hover(function(){},function(){var id_active=$(this).data("active");var icon_active=$(this).data("hover");for(i=1;i<=id_active;i++){$(this).find('.cf7-star-rating-'+i+' i').removeClass().addClass(icon_active)}});$(".cf7-star-rating a").click(function(event){event.preventDefault();var id=$(this).data("id");var name=$(this).closest('.cf7-star-rating').data("name");$(this).closest('.cf7-star-rating').data("active",id);$('input[name='+name+']').val(id);var icon=$(this).closest('.cf7-star-rating').data("hover");for(i=1;i<=id;i++){$(this).closest('.cf7-star-rating').find('.cf7-star-rating-'+i+' i').removeClass().addClass(icon)}})},backToTop:function(){$('body').append('<button class="back-top" type="button"><i class="far fa-long-arrow-up"></i><span class="visually-hidden">Вверх</span></button>');$('.back-top').click(function(){$('html, body').animate({scrollTop:0},700);return!1})},backToTopScroll:function(){if($(window).scrollTop()>500){$('.back-top').fadeIn(800)}else{$('.back-top').fadeOut(800)}},accord:function(){var $accordParent;$('.accord').addClass('open-first');if($('.accord').hasClass('open-first')){$('.accord.open-first>li:first-child>div').addClass('active');$('.accord.open-first>li:first-child>.accord-content').css('display','block')}
$('.accord-title').on('click',function(e){var $accordParent=$(this).closest('.accord');if(!$(this).hasClass('active')){$accordParent.find('.accord-content').slideUp('fast').removeClass('active');$accordParent.find('.accord-title').removeClass('active');$(this).addClass('active');$(this).next().slideDown('fast').addClass('active');$accordParent.removeClass('open-first')}else{$accordParent.find('.accord-content').slideUp('fast').removeClass('active');$(this).removeClass('active')}})},testimonialSlider:function(){if($('.testimonial-slider').length>0){var $prevArrow='<button class="slick-prev slick-arrow" aria-label="Prev" type="button"><i class="far fa-angle-left"></i><span class="visually-hidden">Previous</span> <span class="hexagon"></span></button>';var $nextArrow='<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="far fa-angle-right"></i><span class="hexagon"></span></button>';var testimonialSlider=$('.testimonial-slider');testimonialSlider.slick({autoplay:!1,autoplaySpeed:3000,infinite:!1,arrows:!0,dots:!1,fade:!1,prevArrow:$prevArrow,nextArrow:$nextArrow,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1})}},doctorsMainSlider:function(){$this=this;if($('.doctors-main-slider .card').length>3){var doctorsMainSlider=$('.doctors-main-slider');doctorsMainSlider.slick({autoplay:!1,autoplaySpeed:3000,infinite:!1,arrows:!1,dots:!0,fade:!1,adaptiveHeight:!1,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:478,settings:{slidesToShow:1,slidesToScroll:1,}}]}).on('setPosition',function(event,slick){var mh=0;$('.doctors-main-slider .card-body').each(function(i,el){if($(el).height()>mh){mh=$(el).innerHeight()}});$('.doctors-main-slider .card-body').height(mh)})}},doctorsSlider:function(){if($('.doctors-slider .card').length>3){var doctorsSlider=$('.doctors-slider');doctorsSlider.slick({autoplay:!1,autoplaySpeed:3000,infinite:!1,arrows:!1,dots:!0,fade:!1,adaptiveHeight:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:478,settings:{slidesToShow:1,slidesToScroll:1,}}]})}
if(window.matchMedia("screen and (max-width: 575.98px)").matches&&$('.doctors-slider .card').length==2){var doctorsSlider=$('.doctors-slider');doctorsSlider.slick({autoplay:!1,autoplaySpeed:3000,infinite:!1,arrows:!1,dots:!0,fade:!1,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1})}},profSlider:function(){if(window.matchMedia("screen and (max-width: 767.98px)").matches){if($('.home .prof').length>0){var profSlider=$('.prof');profSlider.slick({autoplay:!1,autoplaySpeed:3000,infinite:!1,arrows:!1,dots:!0,fade:!1,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1,})}}},countersSlider:function(){if(window.matchMedia("screen and (max-width: 575.98px)").matches){if($('.counter-items').length>0){var countersSlider=$('.counter-items');countersSlider.slick({autoplay:!1,autoplaySpeed:3000,infinite:!1,arrows:!1,dots:!0,fade:!1,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1,})}}else{if($('.counter-items').length>0){if($('.count-items').hasClass('slick-slider')){$('.counter-items').slick('unslick')}}}},revealProf:function(){if($('.profs').length>0){ScrollReveal().reveal('.profs>div',{delay:500})}},defaultFormMeta:function(){var fromDefaultCity='na',pageH1=$('h1').text();$('.wpcf7').each(function(){if($('body').hasClass('c-kyiv')){fromDefaultCity='kyiv'}
if($(this).find('[name="target-click"]').val()==''&&$(this).find('[name="city"]').val()==""){$(this).find('[name="target-click"]').val('Страница: '+pageH1);$(this).find('[name="city"]').val(fromDefaultCity);$(this).find('.popup-city-change[data-city="'+fromDefaultCity+'"]').show()}});if($('.article .wpcf7').length>0){$('.article .wpcf7').each(function(){var formCity=$(this).find('[name="city"]').val();$(this).find('.popup-city-change[data-city="'+$.trim(formCity)+'"]').show()})}},popupOrder:function(){$this=this;function orderInfo($obj,$class){var h1=$('h1').text();if($obj.data('order')){$($class+' [name="target-click"]').val($obj.data('order')+' | Страница: '+h1)}else{$($class+' [name="target-click"]').val('Данные в кнопке не заполнены'+' | Страница: '+h1)}
if($obj.data('title')){$($class+' .popup-title').text($obj.data('title'))}else{$($class+' .popup-title').text($($class+' .popup-title').data('title'))}
if($($class+' [name="city"]').length>0){if($obj.data('city')){$($class+' [name="city"]').val($obj.data('city'))}else{$($class+' [name="city"]').val('na')}
$($class).find('.popup-city-change').hide();$($class).find('[data-city='+$obj.data('city')+']').show()}}
$(document).on('click','.btn-order',function(event){event.preventDefault();orderInfo($(this),'.popup-order');$.fancybox.open({src:'.popup-order',type:'inline',toolbar:!1,smallBtn:!0,})})},counter:function(){$('.counter').counterUp()},mapLoad:function(){document.querySelector('.map-load').addEventListener('click',function(){var iframe=document.createElement('iframe'),city=$(this).attr('data-city'),iframeLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4352.364220086437!2d36.205374723597956!3d50.06449924842877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a43d35859d57%3A0x5109c36979dd8f3!2sKlynyka%20%22Unilik%22!5e0!3m2!1sen!2sua!4v1591094901892!5m2!1sen!2sua";if(city=='kiev'){iframeLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.6747175086857!2d30.513483315732028!3d50.46578167947744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6abdc8ee5d%3A0x1527cd852edf3bf6!2sSpaska%20St%2C%205%2C%20Kyiv%2C%2004071!5e0!3m2!1sen!2sua!4v1613997689958!5m2!1sen!2sua"}
iframe.frameBorder=0;iframe.width="500px";iframe.height="500px";iframe.allowfullscreen="true";iframe.setAttribute("src",iframeLink);document.getElementById("gmap").appendChild(iframe);var el=this;el.style.opacity='0';setTimeout(function(){el.parentNode.removeChild(el)},2000)})}};(function($){$(document).ready(function(){wpcf7.cached=0;unilik.init()});$(window).on('scroll',function(){unilik.backToTopScroll()});$(window).on('orientationchange',function(){unilik.countersSlider();unilik.doctorsSlider()})})(jQuery);jQuery(function($){if($('.post-type-archive-doctor').length>0){var canBeLoaded=!0,bottomOffset=2000;$(window).scroll(function(){var data={'action':'prof_loadmore','query':prof_loadmore_params.posts,'page':prof_loadmore_params.current_page};if($(document).scrollTop()>($(document).height()-bottomOffset)&&canBeLoaded==!0){$.ajax({url:wpajax.ajax_url,data:data,type:'POST',beforeSend:function(xhr){canBeLoaded=!1},success:function(data){if(data){$(data).appendTo($('.doctors'));myLazyLoad.update();canBeLoaded=!0;prof_loadmore_params.current_page++}}})}})}
if($('.doctors-filter-wrap').length>0){var doctorsWrap=$(".doctors"),doctorForm=$('.doctors-filter'),doctorLoadBtn=doctorForm.find('button');doctorForm.submit(function(e){e.preventDefault();var doctors_prof=$('#doctors_prof').val(),doctors_search=$('#doctors_search').val(),doctor_type=$('input[name="doctor_type"]:checked').val();$.ajax({url:wpajax.ajax_url,type:'POST',data:{action:'doctors_filter',doctors_type:doctor_type,doctors_prof:doctors_prof,doctors_search:doctors_search},beforeSend:function(xhr){doctorLoadBtn.addClass('loading')},success:function(response){$('.doctors-main-slider').slick('unslick');doctorsWrap.empty();doctorLoadBtn.removeClass('loading');doctorsWrap.append(response);myLazyLoad.update();unilik.doctorsMainSlider()}})})}});/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/scripts_es6.js":
/*!***************************!*\
  !*** ./js/scripts_es6.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var cf7signature_resized = 0; // for compatibility with contact-form-7-signature-addon

var wpcf7cf_timeout;
var wpcf7cf_change_time_ms = 100;

if (window.wpcf7 && !wpcf7.setStatus) {
  wpcf7.setStatus = function (form, status) {
    form = form.length ? form[0] : form; // if form is a jQuery object, only grab te html-element

    var defaultStatuses = new Map([// 0: Status in API response, 1: Status in HTML class
    ['init', 'init'], ['validation_failed', 'invalid'], ['acceptance_missing', 'unaccepted'], ['spam', 'spam'], ['aborted', 'aborted'], ['mail_sent', 'sent'], ['mail_failed', 'failed'], ['submitting', 'submitting'], ['resetting', 'resetting']]);

    if (defaultStatuses.has(status)) {
      status = defaultStatuses.get(status);
    }

    if (!Array.from(defaultStatuses.values()).includes(status)) {
      status = status.replace(/[^0-9a-z]+/i, ' ').trim();
      status = status.replace(/\s+/, '-');
      status = "custom-".concat(status);
    }

    var prevStatus = form.getAttribute('data-status');
    form.wpcf7.status = status;
    form.setAttribute('data-status', status);
    form.classList.add(status);

    if (prevStatus && prevStatus !== status) {
      form.classList.remove(prevStatus);
    }

    return status;
  };
}

if (window.wpcf7cf_running_tests) {
  jQuery('input[name="_wpcf7cf_options"]').each(function (e) {
    var $input = jQuery(this);
    var opt = JSON.parse($input.val());
    opt.settings.animation_intime = 0;
    opt.settings.animation_outtime = 0;
    $input.val(JSON.stringify(opt));
  });
  wpcf7cf_change_time_ms = 0;
}

var wpcf7cf_show_animation = {
  "height": "show",
  "marginTop": "show",
  "marginBottom": "show",
  "paddingTop": "show",
  "paddingBottom": "show"
};
var wpcf7cf_hide_animation = {
  "height": "hide",
  "marginTop": "hide",
  "marginBottom": "hide",
  "paddingTop": "hide",
  "paddingBottom": "hide"
};
var wpcf7cf_show_step_animation = {
  "opacity": "show"
};
var wpcf7cf_hide_step_animation = {
  "opacity": "hide"
};
var wpcf7cf_change_events = 'input.wpcf7cf paste.wpcf7cf change.wpcf7cf click.wpcf7cf propertychange.wpcf7cf';
var wpcf7cf_forms = [];
window.wpcf7cf_dom = {};

var wpcf7cf_reload_dom = function wpcf7cf_reload_dom($form) {
  wpcf7cf_dom = wpcf7cf.get_simplified_dom_model($form[0]);
};

var wpcf7cf_getFieldsByOriginalName = function wpcf7cf_getFieldsByOriginalName(originalName) {
  return Object.values(wpcf7cf_dom).filter(function (inputField) {
    return inputField.original_name === originalName || inputField.original_name === originalName + '[]';
  });
};

var wpcf7cf_getFieldByName = function wpcf7cf_getFieldByName(name) {
  return wpcf7cf_dom[name] || wpcf7cf_dom[name + '[]'];
}; // endsWith polyfill


if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }

    return this.substring(this_len - search.length, this_len) === search;
  };
} // Object.values polyfill


if (!Object.values) Object.values = function (o) {
  return Object.keys(o).map(function (k) {
    return o[k];
  });
}; // Array.from polyfill

if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
}

var Wpcf7cfForm = function Wpcf7cfForm($form) {
  var options_element = $form.find('input[name="_wpcf7cf_options"]').eq(0);

  if (!options_element.length || !options_element.val()) {
    // doesn't look like a CF7 form created with conditional fields plugin enabled.
    return false;
  }

  var form = this;
  var form_options = JSON.parse(options_element.val());
  form.$form = $form;
  form.$input_hidden_group_fields = $form.find('[name="_wpcf7cf_hidden_group_fields"]');
  form.$input_hidden_groups = $form.find('[name="_wpcf7cf_hidden_groups"]');
  form.$input_visible_groups = $form.find('[name="_wpcf7cf_visible_groups"]');
  form.$input_repeaters = $form.find('[name="_wpcf7cf_repeaters"]');
  form.$input_steps = $form.find('[name="_wpcf7cf_steps"]');
  form.unit_tag = $form.closest('.wpcf7').attr('id');
  form.conditions = form_options['conditions']; // Wrapper around jQuery(selector, form.$form)

  form.get = function (selector) {
    // TODO: implement some caching here.
    return jQuery(selector, form.$form);
  }; // compatibility with conditional forms created with older versions of the plugin ( < 1.4 )


  for (var i = 0; i < form.conditions.length; i++) {
    var condition = form.conditions[i];

    if (!('and_rules' in condition)) {
      condition.and_rules = [{
        'if_field': condition.if_field,
        'if_value': condition.if_value,
        'operator': condition.operator
      }];
    }
  }

  form.initial_conditions = form.conditions;
  form.settings = form_options['settings'];
  form.$groups = jQuery(); // empty jQuery set

  form.repeaters = [];
  form.multistep = null;
  form.fields = [];
  form.settings.animation_intime = parseInt(form.settings.animation_intime);
  form.settings.animation_outtime = parseInt(form.settings.animation_outtime);

  if (form.settings.animation === 'no') {
    form.settings.animation_intime = 0;
    form.settings.animation_outtime = 0;
  }

  form.updateGroups();
  form.updateEventListeners();
  form.displayFields(); // bring form in initial state if the reset event is fired on it.

  form.$form.on('reset.wpcf7cf', form, function (e) {
    var form = e.data;
    setTimeout(function () {
      form.displayFields();
      form.resetRepeaters();

      if (form.multistep != null) {
        form.multistep.moveToStep(1);
      }
    }, 200);
  }); // PRO ONLY

  form.get('.wpcf7cf_repeater:not(.wpcf7cf_repeater .wpcf7cf_repeater)').each(function () {
    form.repeaters.push(new Wpcf7cfRepeater(jQuery(this), form));
  });
  form.$input_repeaters.val(JSON.stringify(form.repeaters.map(function (item) {
    return item.params.$repeater.id;
  })));
  var $multistep = form.get('.wpcf7cf_multistep');

  if ($multistep.length) {
    form.multistep = new Wpcf7cfMultistep($multistep, form); // window.wpcf7cf.updateMultistepState(form.multistep);
  } // END PRO ONLY

};
/**
 * reset initial number of subs for each repeater.
 * (does not clear values)
 */


Wpcf7cfForm.prototype.resetRepeaters = function () {
  var form = this;
  form.repeaters.forEach(function (repeater) {
    repeater.updateSubs(repeater.params.$repeater.initial_subs);
  });
};

Wpcf7cfForm.prototype.displayFields = function () {
  var form = this;
  var wpcf7cf_conditions = this.conditions;
  var wpcf7cf_settings = this.settings; //for compatibility with contact-form-7-signature-addon

  if (cf7signature_resized === 0 && typeof signatures !== 'undefined' && signatures.constructor === Array && signatures.length > 0) {
    for (var i = 0; i < signatures.length; i++) {
      if (signatures[i].canvas.width === 0) {
        var $sig_canvas = jQuery(".wpcf7-form-control-signature-body>canvas");
        var $sig_wrap = jQuery(".wpcf7-form-control-signature-wrap");
        $sig_canvas.eq(i).attr('width', $sig_wrap.width());
        $sig_canvas.eq(i).attr('height', $sig_wrap.height());
        cf7signature_resized = 1;
      }
    }
  }

  form.$groups.addClass('wpcf7cf-hidden');
  wpcf7cf_reload_dom(form.$form);

  for (var i = 0; i < wpcf7cf_conditions.length; i++) {
    var condition = wpcf7cf_conditions[i];
    var show_group = window.wpcf7cf.should_group_be_shown(condition, form);

    if (show_group) {
      form.get('[data-id="' + condition.then_field + '"]').removeClass('wpcf7cf-hidden');
    }
  }

  var animation_intime = wpcf7cf_settings.animation_intime;
  var animation_outtime = wpcf7cf_settings.animation_outtime;
  form.$groups.each(function (index) {
    var $group = jQuery(this);

    if ($group.is(':animated')) {
      $group.finish(); // stop any current animations on the group
    }

    if ($group.css('display') === 'none' && !$group.hasClass('wpcf7cf-hidden')) {
      if ($group.prop('tagName') === 'SPAN') {
        $group.show().trigger('wpcf7cf_show_group'); // show instantly
      } else {
        $group.animate(wpcf7cf_show_animation, animation_intime).trigger('wpcf7cf_show_group'); // show with animation
      }

      if ($group.attr('data-disable_on_hide') !== undefined) {
        $group.find(':input').prop('disabled', false);
      }
    } else if ($group.css('display') !== 'none' && $group.hasClass('wpcf7cf-hidden')) {
      if ($group.attr('data-clear_on_hide') !== undefined) {
        var $inputs = jQuery(':input', $group).not(':button, :submit, :reset, :hidden');
        $inputs.each(function () {
          var $this = jQuery(this);
          $this.val(this.defaultValue);
          $this.prop('checked', this.defaultChecked);
        });
        jQuery('option', $group).each(function () {
          this.selected = this.defaultSelected;
        });
        jQuery('select', $group).each(function () {
          var $select = jQuery(this);

          if ($select.val() === null) {
            $select.val(jQuery("option:first", $select).val());
          }
        });
        $inputs.trigger('change');
      }

      if ($group.prop('tagName') === 'SPAN') {
        $group.hide().trigger('wpcf7cf_hide_group');
      } else {
        $group.animate(wpcf7cf_hide_animation, animation_outtime).trigger('wpcf7cf_hide_group'); // hide
      }
    }
  });
  form.updateHiddenFields();
  form.updateSummaryFields();
};

Wpcf7cfForm.prototype.updateSummaryFields = function () {
  var form = this;
  var $summary = form.get('.wpcf7cf-summary');
  if ($summary.length == 0 || !$summary.is(':visible')) return;
  var fd = new FormData();
  var formdata = form.$form.serializeArray();
  jQuery.each(formdata, function (key, input) {
    fd.append(input.name, input.value);
  }); // Make sure to add file fields to FormData

  jQuery.each(form.$form.find('input[type="file"]'), function (index, el) {
    if (!el.files.length) return true; // continue

    var fieldName = el.name;
    fd.append(fieldName, new Blob(), Array.from(el.files).map(function (file) {
      return file.name;
    }).join(', '));
  }); // add file fields to form-data

  jQuery.ajax({
    url: wpcf7cf_global_settings.ajaxurl + '?action=wpcf7cf_get_summary',
    type: 'POST',
    data: fd,
    processData: false,
    contentType: false,
    dataType: 'json',
    success: function success(json) {
      $summary.html(json.summaryHtml);
    }
  });
};

Wpcf7cfForm.prototype.updateHiddenFields = function () {
  var form = this;
  var hidden_fields = [];
  var hidden_groups = [];
  var visible_groups = [];
  var disabled_fields = [];
  form.$groups.each(function () {
    var $group = jQuery(this);

    if ($group.hasClass('wpcf7cf-hidden')) {
      hidden_groups.push($group.attr('data-id'));
      $group.find('input,select,textarea').each(function () {
        hidden_fields.push(jQuery(this).attr('name'));
      });

      if ($group.attr('data-disable_on_hide') !== undefined) {
        console.log('disabling');
        $group.find(':input').prop('disabled', true);
      }
    } else {
      visible_groups.push($group.attr('data-id'));
    }
  });
  form.hidden_fields = hidden_fields;
  form.hidden_groups = hidden_groups;
  form.visible_groups = visible_groups;
  form.$input_hidden_group_fields.val(JSON.stringify(hidden_fields));
  form.$input_hidden_groups.val(JSON.stringify(hidden_groups));
  form.$input_visible_groups.val(JSON.stringify(visible_groups));
  return true;
};

Wpcf7cfForm.prototype.updateGroups = function () {
  var form = this;
  form.$groups = form.$form.find('[data-class="wpcf7cf_group"]');
  form.$groups.height('auto');
  form.conditions = window.wpcf7cf.get_nested_conditions(form.initial_conditions, form.$form);
};

Wpcf7cfForm.prototype.updateEventListeners = function () {
  var form = this; // monitor input changes, and call displayFields() if something has changed

  form.get('input, select, textarea, button').not('.wpcf7cf_add, .wpcf7cf_remove').off(wpcf7cf_change_events).on(wpcf7cf_change_events, form, function (e) {
    var form = e.data;
    clearTimeout(wpcf7cf_timeout);
    wpcf7cf_timeout = setTimeout(function () {
      form.displayFields();
    }, wpcf7cf_change_time_ms);
  }); // PRO ONLY

  form.get('.wpcf7cf-togglebutton').off('click.toggle_wpcf7cf').on('click.toggle_wpcf7cf', function () {
    var $this = jQuery(this);

    if ($this.text() === $this.attr('data-val-1')) {
      $this.text($this.attr('data-val-2'));
      $this.val($this.attr('data-val-2'));
    } else {
      $this.text($this.attr('data-val-1'));
      $this.val($this.attr('data-val-1'));
    }
  }); // END PRO ONLY
}; // PRO ONLY


function Wpcf7cfRepeater($repeater, form) {
  var $ = jQuery;
  var repeater = this;
  var wpcf7cf_settings = form.settings;
  repeater.form = form;
  $repeater.parentRepeaters = Array.from($repeater.parents('.wpcf7cf_repeater').map(function () {
    return this.getAttribute('data-id');
  })).reverse();
  $repeater.num_subs = 0;
  $repeater.id = $repeater.attr('data-id');
  $repeater.orig_id = $repeater.attr('data-orig_data_id');
  $repeater.min = typeof $repeater.attr('data-min') !== 'undefined' ? parseInt($repeater.attr('data-min')) : 1;
  $repeater.max = typeof $repeater.attr('data-max') !== 'undefined' ? parseInt($repeater.attr('data-max')) : 200;
  $repeater.initial_subs = typeof $repeater.attr('data-initial') !== 'undefined' ? parseInt($repeater.attr('data-initial')) : $repeater.min;
  if ($repeater.initial_subs > $repeater.max) $repeater.initial_subs = $repeater.max;
  var $repeater_sub = $repeater.children('.wpcf7cf_repeater_sub').eq(0);
  var $repeater_controls = $repeater.children('.wpcf7cf_repeater_controls').eq(0);
  var $repeater_sub_clone = $repeater_sub.clone();
  $repeater_sub_clone.find('.wpcf7cf_repeater_sub').addBack('.wpcf7cf_repeater_sub').each(function () {
    var $this = jQuery(this);
    var prev_suffix = $this.attr('data-repeater_sub_suffix');
    var new_suffix = prev_suffix + '__{{repeater_sub_suffix}}';
    $this.attr('data-repeater_sub_suffix', new_suffix);
  });
  $repeater_sub_clone.find('[name]').each(function () {
    var $this = jQuery(this);
    var prev_name = $this.attr('name');
    var new_name = repeater.getNewName(prev_name);
    var orig_name = $this.attr('data-orig_name') != null ? $this.attr('data-orig_name') : prev_name;
    $this.attr('name', new_name);
    $this.attr('data-orig_name', orig_name);
    $this.closest('.wpcf7-form-control-wrap').addClass(new_name.replace('[]', ''));
  });
  $repeater_sub_clone.find('.wpcf7cf_repeater,[data-class="wpcf7cf_group"]').each(function () {
    var $this = jQuery(this);
    var prev_data_id = $this.attr('data-id');
    var orig_data_id = $this.attr('data-orig_data_id') != null ? $this.attr('data-orig_data_id') : prev_data_id;
    var new_data_id = repeater.getNewName(prev_data_id);

    if (prev_data_id.endsWith('_count')) {
      new_data_id = prev_data_id.replace('_count', '__{{repeater_sub_suffix}}_count');
    }

    $this.attr('data-id', new_data_id);
    $this.attr('data-orig_data_id', orig_data_id);
  });
  $repeater_sub_clone.find('[id]').each(function () {
    var $this = jQuery(this);
    var prev_id = $this.attr('id');
    var orig_id = $this.attr('data-orig_id') != null ? $this.attr('data-orig_id') : prev_id;
    var new_id = repeater.getNewName(prev_id);
    $this.attr('id', new_id);
    $this.attr('data-orig_id', orig_id);
  });
  $repeater_sub_clone.find('[for]').each(function () {
    var $this = jQuery(this);
    var prev_for = $this.attr('for');
    var orig_for = $this.attr('data-orig_for') != null ? $this.attr('data-orig_for') : prev_for;
    var new_for = repeater.getNewName(prev_for);
    $this.attr('for', new_for);
    $this.attr('data-orig_for', orig_for);
  });
  var repeater_sub_html = $repeater_sub_clone[0].outerHTML;
  var $repeater_count_field = $repeater.find('[name=' + $repeater.id + '_count]').eq(0);
  var $button_add = $repeater_controls.find('.wpcf7cf_add').eq(0);
  var $button_remove = $repeater_controls.find('.wpcf7cf_remove').eq(0);
  var params = {
    $repeater: $repeater,
    $repeater_count_field: $repeater_count_field,
    repeater_sub_html: repeater_sub_html,
    $repeater_controls: $repeater_controls,
    $button_add: $button_add,
    $button_remove: $button_remove,
    wpcf7cf_settings: wpcf7cf_settings
  };
  this.params = params;
  $button_add.on('click', null, repeater, function (e) {
    var repeater = e.data;
    repeater.updateSubs(params.$repeater.num_subs + 1);
  });
  $button_remove.on('click', null, repeater, function (e) {
    var repeater = e.data;
    repeater.updateSubs(params.$repeater.num_subs - 1);
  });
  jQuery('> .wpcf7cf_repeater_sub', params.$repeater).eq(0).remove(); // remove the first sub, it's just a template.

  repeater.updateSubs($repeater.initial_subs);
  repeater.updateButtons();
}

Wpcf7cfRepeater.prototype.getNewName = function (previousName) {
  var prev_parts = previousName.split('[');
  previousName = prev_parts[0];
  var prev_suff = prev_parts.length > 1 ? '[' + prev_parts.splice(1).join('[') : '';
  var newName = previousName + '__{{repeater_sub_suffix}}' + prev_suff;

  if (previousName.endsWith('_count')) {
    newName = previousName.replace('_count', '__{{repeater_sub_suffix}}_count');
  }

  return newName;
};

Wpcf7cfRepeater.prototype.updateButtons = function () {
  var repeater = this;
  var params = repeater.params;
  var num_subs = params.$repeater.num_subs;
  var showButtonRemove = false;
  var showButtonAdd = false;

  if (params.$repeater.num_subs < params.$repeater.max) {
    showButtonAdd = true;
  }

  if (params.$repeater.num_subs > params.$repeater.min) {
    showButtonRemove = true;
  }

  if (showButtonAdd) {
    params.$button_add.show();
  } else {
    params.$button_add.hide();
  }

  if (showButtonRemove) {
    params.$button_remove.show();
  } else {
    params.$button_remove.hide();
  }

  params.$repeater_count_field.val(num_subs);
};

Wpcf7cfRepeater.prototype.updateSubs = function (subs_to_show) {
  var repeater = this;
  var params = repeater.params; // make sure subs_to_show is a valid number

  subs_to_show = subs_to_show < params.$repeater.min ? params.$repeater.min : subs_to_show;
  subs_to_show = subs_to_show > params.$repeater.max ? params.$repeater.max : subs_to_show;
  var subs_to_add = subs_to_show - params.$repeater.num_subs;

  if (subs_to_add < 0) {
    repeater.removeSubs(-subs_to_add);
  } else if (subs_to_add > 0) {
    repeater.addSubs(subs_to_add);
  }
};
/**
 * add Subs to repeater
 * @param {Number} subs_to_add 
 * @param {Number} index - zero-based. leave blank (or null) to append at the end
 */


Wpcf7cfRepeater.prototype.addSubs = function (subs_to_add) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var $ = jQuery;
  var params = this.params;
  var repeater = this;
  var form = repeater.form;
  var $repeater = params.$repeater;
  var $repeater_controls = params.$repeater_controls;

  if (subs_to_add + $repeater.num_subs > $repeater.max) {
    subs_to_add = $repeater.max - $repeater.num_subs;
  }

  var html_str = '';

  for (var i = 1; i <= subs_to_add; i++) {
    var sub_suffix = $repeater.num_subs + i;
    html_str += params.repeater_sub_html.replace(/\{\{repeater_sub_suffix\}\}/g, sub_suffix).replace(new RegExp('\{\{' + $repeater.orig_id + '_index\}\}', 'g'), '<span class="wpcf7cf-index wpcf7cf__' + $repeater.orig_id + '">' + sub_suffix + '</span>');
  }

  var $html = jQuery(html_str);
  jQuery('> .wpcf7cf_repeater_sub', $repeater).finish(); // finish any currently running animations immediately.
  // Add the newly created fields to the form

  if (index === null) {
    $html.hide().insertBefore($repeater_controls).animate(wpcf7cf_show_animation, params.wpcf7cf_settings.animation_intime).trigger('wpcf7cf_repeater_added');
  } else {
    $html.hide().insertBefore(jQuery('> .wpcf7cf_repeater_sub', $repeater).eq(index)).animate(wpcf7cf_show_animation, params.wpcf7cf_settings.animation_intime).trigger('wpcf7cf_repeater_added');
  }

  jQuery('.wpcf7cf_repeater', $html).each(function () {
    form.repeaters.push(new Wpcf7cfRepeater(jQuery(this), form));
  });
  form.$input_repeaters.val(JSON.stringify(form.repeaters.map(function (item) {
    return item.params.$repeater.id;
  })));
  $repeater.num_subs += subs_to_add;

  if (index !== null) {
    repeater.updateSuffixes();
  }

  window.wpcf7cf.updateMultistepState(form.multistep);
  form.updateGroups();
  form.updateEventListeners();
  form.displayFields();
  repeater.updateButtons(); // Exclusive Checkbox

  $html.on('click', '.wpcf7-exclusive-checkbox input:checkbox', function () {
    var name = $(this).attr('name');
    $html.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
  }); //basic compatibility with material-design-for-contact-form-7

  if (typeof window.cf7mdInit === "function") {
    window.cf7mdInit();
  }

  return false;
};
/** TODO: implement this */


Wpcf7cfRepeater.prototype.updateSuffixes = function () {
  // Loop trough all subs
  //  -- 1. update all fields, groups and repeaters names, id's, for's, ...
  //  -- 2. loop trough all repeaters
  //        -- update sub_html template for nested repeater
  //        -- call updateSuffixes() for nested repeater
  var $repeater = this.params.$repeater;
  var num_subs = this.params.$repeater.num_subs;
  var form = this.form;
  var orig_id = $repeater.attr('data-orig_data_id');
  var repeater_id = $repeater.attr('data-id');
  var repeater_suffix = repeater_id.replace(orig_id, '');
  var simplifiedDomArray = Object.values(wpcf7cf.get_simplified_dom_model(form.$form[0]));

  var _loop = function _loop(i) {
    var $sub = jQuery('> .wpcf7cf_repeater_sub', $repeater).eq(i);
    var newIndex = i + 1;
    var currentSuffix = $sub.attr('data-repeater_sub_suffix');
    var newSuffix = repeater_suffix + '__' + newIndex;
    $sub.attr('data-repeater_sub_suffix', newSuffix); // update sub attr

    $sub.find('.wpcf7cf__' + orig_id).html(newIndex); // update {{r_index}} parts

    simplifiedDomArray.forEach(function (el) {
      if (el.suffix !== currentSuffix) return; // TODO: may need an extra check to verify that the element is inside the current repeater
      // (orig_id) . Otherwise problems may occur if there are repeaters on the same level.

      var newName = el.name.replace(currentSuffix, newSuffix);
      var pureElName = el.name.replace('[]', '');
      var pureNewName = newName.replace('[]', '');
      jQuery('[name="' + el.name + '"]', $sub).attr('name', newName);
      jQuery('[id="' + el.name + '"]', $sub).attr('id', newName);
      jQuery('label[for="' + el.name + '"]', $sub).attr('for', newName);
      var $nested_repeater = jQuery('[data-id="' + el.name + '"]', $sub);
      $nested_repeater.attr('data-id', newName);
      jQuery('.wpcf7-form-control-wrap.' + pureElName, $sub).removeClass(pureElName).addClass(pureNewName);

      if (el.type === 'repeater') {
        var nested_repeater = form.repeaters.find(function (repeater) {
          return repeater.params.$repeater.get(0) === $nested_repeater.get(0);
        });
        if (!nested_repeater) return;
        nested_repeater.params.repeater_sub_html = wpcf7cf.updateRepeaterSubHTML(nested_repeater.params.repeater_sub_html, currentSuffix, newSuffix, nested_repeater.params.$repeater.parentRepeaters);
        nested_repeater.updateSuffixes();
      }
    });
  };

  for (var i = 0; i < num_subs; i++) {
    _loop(i);
  }
};
/**
 * Return the parent repeaters, order is not guaranteed.
 */


Wpcf7cfRepeater.prototype.getParentRepeaters = function () {
  var simplifiedDomArray = Object.values(wpcf7cf.get_simplified_dom_model(form.$form[0]));
  form.repeaters.map(function (repeater) {});
};

Wpcf7cfRepeater.prototype.removeSubs = function (subs_to_remove) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var $ = jQuery;
  var repeater = this;
  var params = repeater.params;
  var form = repeater.form;
  var $repeater = params.$repeater;

  if ($repeater.num_subs - subs_to_remove < $repeater.min) {
    subs_to_remove = $repeater.num_subs - $repeater.min;
  }

  if (index === null) {
    index = $repeater.num_subs - subs_to_remove;
  }

  $repeater.num_subs -= subs_to_remove;
  jQuery('> .wpcf7cf_repeater_sub', $repeater).finish(); // finish any currently running animations immediately.

  jQuery('> .wpcf7cf_repeater_sub', $repeater).slice(index, index + subs_to_remove).animate(wpcf7cf_hide_animation, {
    duration: params.wpcf7cf_settings.animation_intime,
    done: function done() {
      var $this = jQuery(this); //remove the actual fields from the form

      $this.remove();
      params.$repeater.trigger('wpcf7cf_repeater_removed');
      window.wpcf7cf.updateMultistepState(form.multistep);
      form.updateGroups();
      form.updateEventListeners();
      form.displayFields();
      repeater.updateButtons();

      if (index !== null) {
        repeater.updateSuffixes();
      }
    }
  });
  return false;
};

function Wpcf7cfMultistep($multistep, form) {
  var multistep = this;
  multistep.$multistep = $multistep;
  multistep.form = form;
  multistep.$steps = $multistep.find('.wpcf7cf_step');
  multistep.$btn_next = $multistep.find('.wpcf7cf_next');
  multistep.$btn_prev = $multistep.find('.wpcf7cf_prev');
  multistep.$dots = $multistep.find('.wpcf7cf_steps-dots');
  multistep.currentStep = 0;
  multistep.numSteps = multistep.$steps.length;
  multistep.$dots.html('');

  for (var i = 1; i <= multistep.numSteps; i++) {
    multistep.$dots.append("\n            <div class=\"dot\" data-step=\"".concat(i, "\">\n                <div class=\"step-index\">").concat(i, "</div>\n                <div class=\"step-title\">").concat(multistep.$steps.eq(i - 1).attr('data-title'), "</div>\n            </div>\n        "));
  }

  multistep.$btn_next.on('click.wpcf7cf_step', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            multistep.$btn_next.addClass('disabled').attr('disabled', true);
            _context.next = 3;
            return multistep.validateStep(multistep.currentStep);

          case 3:
            result = _context.sent;

            if (result === 'success') {
              multistep.moveToStep(multistep.currentStep + 1);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))); // If form is submitted (by pressing Enter for example), and if we are not on the last step,
  // then trigger click event on the $btn_next button instead.

  multistep.form.$form.on('submit.wpcf7cf_step', function (e) {
    if (multistep.currentStep !== multistep.numSteps) {
      multistep.$btn_next.trigger('click.wpcf7cf_step');
      e.stopImmediatePropagation();
      return false;
    }
  });
  multistep.$btn_prev.on('click', function () {
    multistep.moveToStep(multistep.currentStep - 1);
  });
  multistep.moveToStep(1);
}

jQuery(document).ajaxComplete(function (e, xhr, settings) {
  if (xhr.hasOwnProperty('responseJSON') && xhr.responseJSON != null && xhr.responseJSON.hasOwnProperty('status') && xhr.responseJSON.hasOwnProperty('into') && xhr.responseJSON.status === "mail_success") {
    jQuery(xhr.responseJSON.into).trigger('reset.wpcf7cf');
  }
});

Wpcf7cfMultistep.prototype.validateStep = function (step_index) {
  var multistep = this;
  var $multistep = multistep.$multistep;
  var $form = multistep.form.$form;
  var form = multistep.form;
  $form.find('.wpcf7-response-output').addClass('wpcf7-display-none');
  return new Promise(function (resolve) {
    var fd = new FormData(); // Make sure to add file fields to FormData

    jQuery.each($form.find('[data-id="step-' + step_index + '"] input[type="file"]'), function (index, el) {
      if (!el.files.length) return true; // = continue

      var file = el.files[0];
      var fieldName = el.name;
      fd.append(fieldName, file);
    });
    var formdata = $form.serializeArray();
    jQuery.each(formdata, function (key, input) {
      fd.append(input.name, input.value);
    });
    jQuery.ajax({
      url: wpcf7cf_global_settings.ajaxurl + '?action=wpcf7cf_validate_step',
      type: 'POST',
      data: fd,
      processData: false,
      contentType: false,
      dataType: 'json'
    }).done(function (json) {
      $multistep.find('.wpcf7-form-control-wrap .wpcf7-not-valid-tip').remove();
      $multistep.find('.wpcf7-not-valid').removeClass('wpcf7-not-valid');
      $multistep.find('.wpcf7-response-output').remove();
      $multistep.find('.wpcf7-response-output.wpcf7-validation-errors').removeClass('wpcf7-validation-errors');
      multistep.$btn_next.removeClass('disabled').attr('disabled', false);

      if (!json.success) {
        var checkError = 0;
        jQuery.each(json.invalid_fields, function (index, el) {
          if ($multistep.find('input[name="' + index + '"]').length || $multistep.find('input[name="' + index + '[]"]').length || $multistep.find('select[name="' + index + '"]').length || $multistep.find('select[name="' + index + '[]"]').length || $multistep.find('textarea[name="' + index + '"]').length || $multistep.find('textarea[name="' + index + '[]"]').length) {
            checkError = checkError + 1;
            var controlWrap = form.get('.wpcf7-form-control-wrap.' + index);
            controlWrap.find('.wpcf7-form-control').addClass('wpcf7-not-valid');
            controlWrap.find('span.wpcf7-not-valid-tip').remove();
            controlWrap.append('<span role="alert" class="wpcf7-not-valid-tip">' + el.reason + '</span>');
          }
        });
        resolve('failed');
        $multistep.parent().find('.wpcf7-response-output').removeClass('wpcf7-display-none').html(json.message);
        wpcf7.setStatus($form, 'invalid');
        multistep.$steps.trigger('wpcf7cf_step_invalid'); // wpcf7.triggerEvent( data.into, 'invalid', detail );
      } else if (json.success) {
        wpcf7.setStatus($form, 'init');
        resolve('success');
        return false;
      }
    }).fail(function () {
      resolve('error');
    }).always(function () {// do nothing
    });
  });
};

Wpcf7cfMultistep.prototype.moveToStep = function (step_index) {
  var multistep = this;
  var previousStep = multistep.currentStep;
  multistep.currentStep = step_index > multistep.numSteps ? multistep.numSteps : step_index < 1 ? 1 : step_index; // ANIMATION DISABLED FOR NOW cause it's ugly
  // multistep.$steps.animate(wpcf7cf_hide_step_animation, multistep.form.settings.animation_outtime);
  // multistep.$steps.eq(multistep.currentStep-1).animate(wpcf7cf_show_step_animation, multistep.form.settings.animation_intime);

  multistep.$multistep.attr('data-current_step', multistep.currentStep);
  multistep.$steps.hide();
  multistep.$steps.eq(multistep.currentStep - 1).show().trigger('wpcf7cf_change_step', [previousStep, multistep.currentStep]);
  var formEl = multistep.form.$form[0];
  var topOffset = formEl.getBoundingClientRect().top;

  if (topOffset < 0 && previousStep > 0) {
    formEl.scrollIntoView({
      behavior: "smooth"
    });
  }

  multistep.form.updateSummaryFields();
  window.wpcf7cf.updateMultistepState(multistep);
};

Wpcf7cfMultistep.prototype.getFieldsInStep = function (step_index) {
  wpcf7cf_reload_dom(this.form.$form);
  var inStep = false;
  return Object.values(wpcf7cf_dom).filter(function (item, i) {
    if (item.type == 'step') {
      inStep = item.val == step_index + '';
    }

    return inStep && item.type == 'input';
  }).map(function (item) {
    return item.name;
  });
}; // END PRO ONLY

/**
 * @global
 * @namespace wpcf7cf
 */


window.wpcf7cf = {
  hideGroup: function hideGroup($group, animate) {},
  showGroup: function showGroup($group, animate) {},
  updateRepeaterSubHTML: function updateRepeaterSubHTML(html, oldSuffix, newSuffix, parentRepeaters) {
    var oldIndexes = oldSuffix.split('__');
    oldIndexes.shift(); // remove first empty element

    var newIndexes = newSuffix.split('__');
    newIndexes.shift(); // remove first empty element

    var returnHtml = html;

    if (oldIndexes && newIndexes && oldIndexes.length === parentRepeaters.length && newIndexes.length === parentRepeaters.length) {
      var parentRepeatersInfo = parentRepeaters.map(function (repeaterId, i) {
        return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, repeaterId.split('__')[0], [oldIndexes[i], newIndexes[i]]);
      });
      var length = parentRepeatersInfo.length;
      var replacements = oldIndexes.map(function (oldIndex, i) {
        return ['__' + oldIndexes.slice(0, length - i).join('__'), '__' + newIndexes.slice(0, length - i).join('__')];
      });

      for (var i = 0; i < length; i++) {
        var id = Object.keys(parentRepeatersInfo[i])[0];
        var find = parentRepeatersInfo[i][id][0];
        var repl = parentRepeatersInfo[i][id][1];
        replacements.push(["<span class=\"wpcf7cf-index wpcf7cf__".concat(id, "\">").concat(find, "<\\/span>"), "<span class=\"wpcf7cf-index wpcf7cf__".concat(id, "\">").concat(repl, "</span>")]);
      }

      replacements.forEach(function (_ref3) {
        var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
            oldSuffix = _ref4[0],
            newSuffix = _ref4[1];

        returnHtml = returnHtml.replace(new RegExp(oldSuffix, 'g'), newSuffix);
      });
    }

    return returnHtml;
  },
  // keep this for backwards compatibility
  initForm: function initForm($forms) {
    $forms.each(function () {
      var $form = jQuery(this); // only add form is its class is "wpcf7-form" and if the form was not previously added

      if ($form.hasClass('wpcf7-form') && !wpcf7cf_forms.some(function (form) {
        return form.$form.get(0) === $form.get(0);
      })) {
        wpcf7cf_forms.push(new Wpcf7cfForm($form));
      }
    });
  },
  getWpcf7cfForm: function getWpcf7cfForm($form) {
    var matched_forms = wpcf7cf_forms.filter(function (form) {
      var f1 = form.$form.get(0);
      var f2 = $form.get(0);
      return form.$form.get(0) === $form.get(0);
    });

    if (matched_forms.length) {
      return matched_forms[0];
    }

    return false;
  },
  get_nested_conditions: function get_nested_conditions(conditions, $current_form) {
    //loop trough conditions. Then loop trough the dom, and each repeater we pass we should update all sub_values we encounter with __index
    wpcf7cf_reload_dom($current_form);
    var groups = Object.values(wpcf7cf_dom).filter(function (item, i) {
      return item.type === 'group';
    });
    var sub_conditions = [];

    for (var i = 0; i < groups.length; i++) {
      var g = groups[i];
      var relevant_conditions = conditions.filter(function (condition, i) {
        return condition.then_field === g.original_name;
      });
      var relevant_conditions = relevant_conditions.map(function (item, i) {
        return {
          then_field: g.name,
          and_rules: item.and_rules.map(function (and_rule, i) {
            return {
              if_field: and_rule.if_field + g.suffix,
              if_value: and_rule.if_value,
              operator: and_rule.operator
            };
          })
        };
      });
      sub_conditions = sub_conditions.concat(relevant_conditions);
    }

    return sub_conditions;
  },
  get_simplified_dom_model: function get_simplified_dom_model(currentNode) {
    var simplified_dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var parentGroups = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var parentRepeaters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var type = currentNode.classList && currentNode.classList.contains('wpcf7cf_repeater') ? 'repeater' : currentNode.dataset["class"] == 'wpcf7cf_group' ? 'group' : currentNode.className == 'wpcf7cf_step' ? 'step' : currentNode.hasAttribute('name') && !currentNode.disabled ? 'input' : false;

    var newParentRepeaters = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(parentRepeaters);

    var newParentGroups = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(parentGroups);

    if (type) {
      var name = type === 'input' ? currentNode.getAttribute('name') : currentNode.dataset.id;

      if (type === 'repeater') {
        newParentRepeaters.push(name);
      }

      if (type === 'group') {
        newParentGroups.push(name);
      } // skip _wpcf7 hidden fields


      if (name.substring(0, 6) === '_wpcf7') return {};
      var original_name = type === 'repeater' || type === 'group' ? currentNode.dataset.orig_data_id : type === 'input' ? currentNode.getAttribute('data-orig_name') || name : name;
      var nameWithoutBrackets = name.replace('[]', '');
      var originalNameWithoutBrackets = original_name.replace('[]', '');
      var val = type === 'step' ? [currentNode.dataset.id.substring(5)] : [];
      var parentGroup = 'parent-group';
      var suffix = nameWithoutBrackets.replace(originalNameWithoutBrackets, '');

      if (!simplified_dom[name]) {
        // init entry
        simplified_dom[name] = {
          name: name,
          type: type,
          original_name: original_name,
          suffix: suffix,
          val: val,
          parentGroups: parentGroups,
          parentRepeaters: parentRepeaters
        };
      }

      if (type === 'input') {
        // skip unchecked checkboxes and radiobuttons
        if ((currentNode.type === 'checkbox' || currentNode.type === 'radio') && !currentNode.checked) return {}; // if multiselect, make sure to add all the values

        if (currentNode.multiple && currentNode.options) {
          simplified_dom[name].val = Object.values(currentNode.options).filter(function (o) {
            return o.selected;
          }).map(function (o) {
            return o.value;
          });
        } else {
          simplified_dom[name].val.push(currentNode.value);
        }
      }
    }

    Array.from(currentNode.children).forEach(function (childNode) {
      var dom = wpcf7cf.get_simplified_dom_model(childNode, simplified_dom, newParentGroups, newParentRepeaters);
      simplified_dom = _objectSpread(_objectSpread({}, dom), simplified_dom);
    });
    return simplified_dom;
  },
  updateMultistepState: function updateMultistepState(multistep) {
    if (multistep == null) return; // update hidden input field

    var stepsData = {
      currentStep: multistep.currentStep,
      numSteps: multistep.numSteps,
      fieldsInCurrentStep: multistep.getFieldsInStep(multistep.currentStep)
    };
    multistep.form.$input_steps.val(JSON.stringify(stepsData)); // update Buttons

    multistep.$btn_prev.removeClass('disabled').attr('disabled', false);
    multistep.$btn_next.removeClass('disabled').attr('disabled', false);

    if (multistep.currentStep == multistep.numSteps) {
      multistep.$btn_next.addClass('disabled').attr('disabled', true);
    }

    if (multistep.currentStep == 1) {
      multistep.$btn_prev.addClass('disabled').attr('disabled', true);
    } // replace next button with submit button on last step.
    // TODO: make this depend on a setting


    var $submit_button = multistep.form.$form.find('input[type="submit"]').eq(0);
    var $ajax_loader = multistep.form.$form.find('.ajax-loader').eq(0);

    if (multistep.currentStep == multistep.numSteps) {
      multistep.$btn_next.hide();
      $ajax_loader.detach().appendTo(multistep.$btn_next.parent());
      $submit_button.detach().appendTo(multistep.$btn_next.parent());
      $submit_button.show();
    } else {
      $submit_button.hide();
      multistep.$btn_next.show();
    } // update dots


    var $dots = multistep.$dots.find('.dot');
    $dots.removeClass('active').removeClass('completed');

    for (var step = 1; step <= multistep.numSteps; step++) {
      if (step < multistep.currentStep) {
        $dots.eq(step - 1).addClass('completed');
      } else if (step == multistep.currentStep) {
        $dots.eq(step - 1).addClass('active');
      }
    }
  },
  should_group_be_shown: function should_group_be_shown(condition) {
    var show_group = true;

    for (var and_rule_i = 0; and_rule_i < condition.and_rules.length; and_rule_i++) {
      var condition_ok = false;
      var condition_and_rule = condition.and_rules[and_rule_i];
      var inputField = wpcf7cf_getFieldByName(condition_and_rule.if_field);
      if (!inputField) continue; // field not found

      var if_val = condition_and_rule.if_value;
      var operator = condition_and_rule.operator; //backwards compat

      operator = operator === '≤' ? 'less than or equals' : operator;
      operator = operator === '≥' ? 'greater than or equals' : operator;
      operator = operator === '>' ? 'greater than' : operator;
      operator = operator === '<' ? 'less than' : operator;
      var $field = operator === 'function' && jQuery("[name=\"".concat(inputField.name, "\"]")).eq(0);
      condition_ok = this.isConditionTrue(inputField.val, operator, if_val, $field);
      show_group = show_group && condition_ok;
    }

    return show_group;
  },
  isConditionTrue: function isConditionTrue(values, operator) {
    var testValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var $field = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : jQuery();

    if (!Array.isArray(values)) {
      values = [values];
    }

    var condition_ok = false; // start by assuming that the condition is not met
    // Considered EMPTY:       []     ['']          [null]        ['',null]    [,,'']
    // Considered NOT EMPTY:   [0]    ['ab','c']    ['',0,null]

    var valuesAreEmpty = values.length === 0 || values.every(function (v) {
      return !v && v !== 0;
    }); // 0 is not considered empty
    // special cases: [] equals '' => TRUE; [] not equals '' => FALSE

    if (operator === 'equals' && testValue === '' && valuesAreEmpty) {
      return true;
    }

    if (operator === 'not equals' && testValue === '' && valuesAreEmpty) {
      return false;
    }

    if (valuesAreEmpty) {
      if (operator === 'is empty') {
        condition_ok = true;
      }
    } else {
      if (operator === 'not empty') {
        condition_ok = true;
      }
    }

    var testValueNumber = isFinite(parseFloat(testValue)) ? parseFloat(testValue) : NaN;

    if (operator === 'not equals' || operator === 'not equals (regex)') {
      // start by assuming that the condition is met
      condition_ok = true;
    }

    if (operator === 'function' && typeof window[testValue] == 'function' && window[testValue]($field) // here we call the actual user defined function
    ) {
        condition_ok = true;
      }

    var regex_patt = /.*/i; // fallback regex pattern

    var isValidRegex = true;

    if (operator === 'equals (regex)' || operator === 'not equals (regex)') {
      try {
        regex_patt = new RegExp(testValue, 'i');
      } catch (e) {
        isValidRegex = false;
      }
    }

    for (var i = 0; i < values.length; i++) {
      var value = values[i];
      var valueNumber = isFinite(parseFloat(value)) ? parseFloat(value) : NaN;
      var valsAreNumbers = !isNaN(valueNumber) && !isNaN(testValueNumber);

      if (operator === 'equals' && value === testValue || operator === 'equals (regex)' && regex_patt.test(value) || operator === 'greater than' && valsAreNumbers && valueNumber > testValueNumber || operator === 'less than' && valsAreNumbers && valueNumber < testValueNumber || operator === 'greater than or equals' && valsAreNumbers && valueNumber >= testValueNumber || operator === 'less than or equals' && valsAreNumbers && valueNumber <= testValueNumber) {
        condition_ok = true;
        break;
      } else if (operator === 'not equals' && value === testValue || operator === 'not equals (regex)' && regex_patt.test(value)) {
        condition_ok = false;
        break;
      }
    }

    return condition_ok;
  },
  getFormObj: function getFormObj($form) {
    if (typeof $form === 'string') {
      $form = jQuery($form).eq(0);
    }

    return wpcf7cf.getWpcf7cfForm($form);
  },
  getRepeaterObj: function getRepeaterObj($form, repeaterDataId) {
    var form = wpcf7cf.getFormObj($form);
    var repeater = form.repeaters.find(function (repeater) {
      return repeater.params.$repeater.attr('data-id') === repeaterDataId;
    });
    return repeater;
  },
  getMultiStepObj: function getMultiStepObj($form) {
    var form = wpcf7cf.getFormObj($form);
    return form.multistep;
  },

  /**
   * Append a new sub-entry to the repeater with the name `repeaterDataId` inside the form `$form`
   * @memberof wpcf7cf
   * @function wpcf7cf.repeaterAddSub
   * @link
   * @param {String|JQuery} $form - JQuery object or css-selector representing the form
   * @param {String} repeaterDataId - *data-id* attribute of the repeater. Normally this is simply the name of the repeater. However, in case of a nested repeater you need to append the name with the correct suffix. For example `my-nested-repeater__1__3`. Hint (check the `data-id` attribute in the HTML code to find the correct suffix)
   */
  repeaterAddSub: function repeaterAddSub($form, repeaterDataId) {
    var repeater = wpcf7cf.getRepeaterObj($form, repeaterDataId);
    repeater.updateSubs(repeater.params.$repeater.num_subs + 1);
  },

  /**
   * Insert a new sub-entry at the given `index` of the repeater with the name `repeaterDataId` inside the form `$form`
   * @memberof wpcf7cf
   * @param {String|JQuery} $form - JQuery object or css-selector representing the form
   * @param {String} repeaterDataId - *data-id* attribute of the repeater.
   * @param {Number} index - position where to insert the new sub-entry within the repeater
   */
  repeaterAddSubAtIndex: function repeaterAddSubAtIndex($form, repeaterDataId, index) {
    var repeater = wpcf7cf.getRepeaterObj($form, repeaterDataId);
    repeater.addSubs(1, index);
  },

  /**
   * Remove the sub-entry at the given `index` of the repeater with the *data-id* attribute of `repeaterDataId` inside the form `$form`
   * @memberof wpcf7cf
   * @param {String|JQuery} $form - JQuery object or css-selector representing the form
   * @param {String} repeaterDataId - *data-id* attribute of the repeater.
   * @param {Number} index - position where to insert the new sub-entry within the repeater
   */
  repeaterRemoveSubAtIndex: function repeaterRemoveSubAtIndex($form, repeaterDataId, index) {
    var repeater = wpcf7cf.getRepeaterObj($form, repeaterDataId);
    repeater.removeSubs(1, index);
  },

  /**
   * Remove the last sub-entry from the repeater with the *data-id* attribute of `repeaterDataId` inside the form `$form`
   * @memberof wpcf7cf
   * @param {String|JQuery} $form - JQuery object or css-selector representing the form
   * @param {String} repeaterDataId - *data-id* attribute of the repeater.
   * @param {Number} index - position where to insert the new sub-entry within the repeater
   */
  repeaterRemoveSub: function repeaterRemoveSub($form, repeaterDataId) {
    var repeater = wpcf7cf.getRepeaterObj($form, repeaterDataId);
    repeater.updateSubs(repeater.params.$repeater.num_subs - 1);
  },

  /**
   * Set the number of subs for the repeater with the *data-id* attribute of `repeaterDataId` inside the form `$form`.
   * Subs are either appended to or removed from the end of the repeater.
   * @memberof wpcf7cf
   * @param {String|JQuery} $form - JQuery object or css-selector representing the form
   * @param {String} repeaterDataId - *data-id* attribute of the repeater.
   * @param {Number} numberOfSubs - position where to insert the new sub-entry within the repeater
   */
  repeaterSetNumberOfSubs: function repeaterSetNumberOfSubs($form, repeaterDataId, numberOfSubs) {
    var repeater = wpcf7cf.getRepeaterObj($form, repeaterDataId);
    repeater.updateSubs(numberOfSubs);
  },

  /**
   * Move to step number `step`, ignoring any validation.
   * @memberof wpcf7cf
   * @param {String|JQuery} $form - JQuery object or css-selector representing the form
   * @param {*} step 
   */
  multistepMoveToStep: function multistepMoveToStep($form, step) {
    var multistep = wpcf7cf.getMultiStepObj($form);
    multistep.moveToStep(step);
  },

  /**
   * Validate the current step, and move to step number `step` if validation passes.
   * @memberof wpcf7cf
   * @param {String|JQuery} $form - JQuery object or css-selector representing the form
   * @param {Number} step 
   */
  multistepMoveToStepWithValidation: function multistepMoveToStepWithValidation($form, step) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var multistep, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              multistep = wpcf7cf.getMultiStepObj($form);
              _context2.next = 3;
              return multistep.validateStep(multistep.currentStep);

            case 3:
              result = _context2.sent;

              if (result === 'success') {
                multistep.moveToStep(step);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
jQuery('.wpcf7-form').each(function () {
  wpcf7cf_forms.push(new Wpcf7cfForm(jQuery(this)));
}); // Call displayFields again on all forms
// Necessary in case some theme or plugin changed a form value by the time the entire page is fully loaded.

jQuery('document').on('ready', function () {
  wpcf7cf_forms.forEach(function (f) {
    f.displayFields();
  });
}); // fix for exclusive checkboxes in IE (this will call the change-event again after all other checkboxes are unchecked, triggering the display_fields() function)

var old_wpcf7ExclusiveCheckbox = jQuery.fn.wpcf7ExclusiveCheckbox;

jQuery.fn.wpcf7ExclusiveCheckbox = function () {
  return this.find('input:checkbox').on('click', function () {
    var name = jQuery(this).attr('name');
    jQuery(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false).eq(0).change();
  });
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/es6-promise-promise/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-promise-promise/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").Promise;

/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */
(function(global,factory){(!1?undefined:_typeof(exports))==='object'&&typeof module!=='undefined'?module.exports=factory():!0?!(__WEBPACK_AMD_DEFINE_FACTORY__=(factory),__WEBPACK_AMD_DEFINE_RESULT__=(typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module)):__WEBPACK_AMD_DEFINE_FACTORY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)):undefined})(this,function(){'use strict';function objectOrFunction(x){return typeof x==='function'||_typeof(x)==='object'&&x!==null}
function isFunction(x){return typeof x==='function'}
var _isArray=undefined;if(!Array.isArray){_isArray=function _isArray(x){return Object.prototype.toString.call(x)==='[object Array]'}}else{_isArray=Array.isArray}
var isArray=_isArray;var len=0;var vertxNext=undefined;var customSchedulerFn=undefined;var asap=function asap(callback,arg){queue[len]=callback;queue[len+1]=arg;len+=2;if(len===2){if(customSchedulerFn){customSchedulerFn(flush)}else{scheduleFlush()}}};function setScheduler(scheduleFn){customSchedulerFn=scheduleFn}
function setAsap(asapFn){asap=asapFn}
var browserWindow=typeof window!=='undefined'?window:undefined;var browserGlobal=browserWindow||{};var BrowserMutationObserver=browserGlobal.MutationObserver||browserGlobal.WebKitMutationObserver;var isNode=typeof self==='undefined'&&typeof process!=='undefined'&&{}.toString.call(process)==='[object process]';var isWorker=typeof Uint8ClampedArray!=='undefined'&&typeof importScripts!=='undefined'&&typeof MessageChannel!=='undefined';function useNextTick(){return function(){return process.nextTick(flush)}}
function useVertxTimer(){return function(){vertxNext(flush)}}
function useMutationObserver(){var iterations=0;var observer=new BrowserMutationObserver(flush);var node=document.createTextNode('');observer.observe(node,{characterData:!0});return function(){node.data=iterations=++iterations%2}}
function useMessageChannel(){var channel=new MessageChannel();channel.port1.onmessage=flush;return function(){return channel.port2.postMessage(0)}}
function useSetTimeout(){var globalSetTimeout=setTimeout;return function(){return globalSetTimeout(flush,1)}}
var queue=new Array(1000);function flush(){for(var i=0;i<len;i+=2){var callback=queue[i];var arg=queue[i+1];callback(arg);queue[i]=undefined;queue[i+1]=undefined}
len=0}
function attemptVertx(){try{var r=require;var vertx=__webpack_require__(/*! vertx */1);vertxNext=vertx.runOnLoop||vertx.runOnContext;return useVertxTimer()}catch(e){return useSetTimeout()}}
var scheduleFlush=undefined;if(isNode){scheduleFlush=useNextTick()}else if(BrowserMutationObserver){scheduleFlush=useMutationObserver()}else if(isWorker){scheduleFlush=useMessageChannel()}else if(browserWindow===undefined&&"function"==='function'){scheduleFlush=attemptVertx()}else{scheduleFlush=useSetTimeout()}
function then(onFulfillment,onRejection){var _arguments=arguments;var parent=this;var child=new this.constructor(noop);if(child[PROMISE_ID]===undefined){makePromise(child)}
var _state=parent._state;if(_state){(function(){var callback=_arguments[_state-1];asap(function(){return invokeCallback(_state,child,callback,parent._result)})})()}else{subscribe(parent,child,onFulfillment,onRejection)}
return child}
function resolve(object){var Constructor=this;if(object&&_typeof(object)==='object'&&object.constructor===Constructor){return object}
var promise=new Constructor(noop);_resolve(promise,object);return promise}
var PROMISE_ID=Math.random().toString(36).substring(16);function noop(){}
var PENDING=void 0;var FULFILLED=1;var REJECTED=2;var GET_THEN_ERROR=new ErrorObject();function selfFulfillment(){return new TypeError("You cannot resolve a promise with itself")}
function cannotReturnOwn(){return new TypeError('A promises callback cannot return that same promise.')}
function getThen(promise){try{return promise.then}catch(error){GET_THEN_ERROR.error=error;return GET_THEN_ERROR}}
function tryThen(then,value,fulfillmentHandler,rejectionHandler){try{then.call(value,fulfillmentHandler,rejectionHandler)}catch(e){return e}}
function handleForeignThenable(promise,thenable,then){asap(function(promise){var sealed=!1;var error=tryThen(then,thenable,function(value){if(sealed){return}
sealed=!0;if(thenable!==value){_resolve(promise,value)}else{fulfill(promise,value)}},function(reason){if(sealed){return}
sealed=!0;_reject(promise,reason)},'Settle: '+(promise._label||' unknown promise'));if(!sealed&&error){sealed=!0;_reject(promise,error)}},promise)}
function handleOwnThenable(promise,thenable){if(thenable._state===FULFILLED){fulfill(promise,thenable._result)}else if(thenable._state===REJECTED){_reject(promise,thenable._result)}else{subscribe(thenable,undefined,function(value){return _resolve(promise,value)},function(reason){return _reject(promise,reason)})}}
function handleMaybeThenable(promise,maybeThenable,then$$){if(maybeThenable.constructor===promise.constructor&&then$$===then&&maybeThenable.constructor.resolve===resolve){handleOwnThenable(promise,maybeThenable)}else{if(then$$===GET_THEN_ERROR){_reject(promise,GET_THEN_ERROR.error)}else if(then$$===undefined){fulfill(promise,maybeThenable)}else if(isFunction(then$$)){handleForeignThenable(promise,maybeThenable,then$$)}else{fulfill(promise,maybeThenable)}}}
function _resolve(promise,value){if(promise===value){_reject(promise,selfFulfillment())}else if(objectOrFunction(value)){handleMaybeThenable(promise,value,getThen(value))}else{fulfill(promise,value)}}
function publishRejection(promise){if(promise._onerror){promise._onerror(promise._result)}
publish(promise)}
function fulfill(promise,value){if(promise._state!==PENDING){return}
promise._result=value;promise._state=FULFILLED;if(promise._subscribers.length!==0){asap(publish,promise)}}
function _reject(promise,reason){if(promise._state!==PENDING){return}
promise._state=REJECTED;promise._result=reason;asap(publishRejection,promise)}
function subscribe(parent,child,onFulfillment,onRejection){var _subscribers=parent._subscribers;var length=_subscribers.length;parent._onerror=null;_subscribers[length]=child;_subscribers[length+FULFILLED]=onFulfillment;_subscribers[length+REJECTED]=onRejection;if(length===0&&parent._state){asap(publish,parent)}}
function publish(promise){var subscribers=promise._subscribers;var settled=promise._state;if(subscribers.length===0){return}
var child=undefined,callback=undefined,detail=promise._result;for(var i=0;i<subscribers.length;i+=3){child=subscribers[i];callback=subscribers[i+settled];if(child){invokeCallback(settled,child,callback,detail)}else{callback(detail)}}
promise._subscribers.length=0}
function ErrorObject(){this.error=null}
var TRY_CATCH_ERROR=new ErrorObject();function tryCatch(callback,detail){try{return callback(detail)}catch(e){TRY_CATCH_ERROR.error=e;return TRY_CATCH_ERROR}}
function invokeCallback(settled,promise,callback,detail){var hasCallback=isFunction(callback),value=undefined,error=undefined,succeeded=undefined,failed=undefined;if(hasCallback){value=tryCatch(callback,detail);if(value===TRY_CATCH_ERROR){failed=!0;error=value.error;value=null}else{succeeded=!0}
if(promise===value){_reject(promise,cannotReturnOwn());return}}else{value=detail;succeeded=!0}
if(promise._state!==PENDING){}else if(hasCallback&&succeeded){_resolve(promise,value)}else if(failed){_reject(promise,error)}else if(settled===FULFILLED){fulfill(promise,value)}else if(settled===REJECTED){_reject(promise,value)}}
function initializePromise(promise,resolver){try{resolver(function resolvePromise(value){_resolve(promise,value)},function rejectPromise(reason){_reject(promise,reason)})}catch(e){_reject(promise,e)}}
var id=0;function nextId(){return id++}
function makePromise(promise){promise[PROMISE_ID]=id++;promise._state=undefined;promise._result=undefined;promise._subscribers=[]}
function Enumerator(Constructor,input){this._instanceConstructor=Constructor;this.promise=new Constructor(noop);if(!this.promise[PROMISE_ID]){makePromise(this.promise)}
if(isArray(input)){this._input=input;this.length=input.length;this._remaining=input.length;this._result=new Array(this.length);if(this.length===0){fulfill(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){fulfill(this.promise,this._result)}}}else{_reject(this.promise,validationError())}}
function validationError(){return new Error('Array Methods must be provided an Array')};Enumerator.prototype._enumerate=function(){var length=this.length;var _input=this._input;for(var i=0;this._state===PENDING&&i<length;i++){this._eachEntry(_input[i],i)}};Enumerator.prototype._eachEntry=function(entry,i){var c=this._instanceConstructor;var resolve$$=c.resolve;if(resolve$$===resolve){var _then=getThen(entry);if(_then===then&&entry._state!==PENDING){this._settledAt(entry._state,i,entry._result)}else if(typeof _then!=='function'){this._remaining--;this._result[i]=entry}else if(c===Promise){var promise=new c(noop);handleMaybeThenable(promise,entry,_then);this._willSettleAt(promise,i)}else{this._willSettleAt(new c(function(resolve$$){return resolve$$(entry)}),i)}}else{this._willSettleAt(resolve$$(entry),i)}};Enumerator.prototype._settledAt=function(state,i,value){var promise=this.promise;if(promise._state===PENDING){this._remaining--;if(state===REJECTED){_reject(promise,value)}else{this._result[i]=value}}
if(this._remaining===0){fulfill(promise,this._result)}};Enumerator.prototype._willSettleAt=function(promise,i){var enumerator=this;subscribe(promise,undefined,function(value){return enumerator._settledAt(FULFILLED,i,value)},function(reason){return enumerator._settledAt(REJECTED,i,reason)})};function all(entries){return new Enumerator(this,entries).promise}
function race(entries){var Constructor=this;if(!isArray(entries)){return new Constructor(function(_,reject){return reject(new TypeError('You must pass an array to race.'))})}else{return new Constructor(function(resolve,reject){var length=entries.length;for(var i=0;i<length;i++){Constructor.resolve(entries[i]).then(resolve,reject)}})}}
function reject(reason){var Constructor=this;var promise=new Constructor(noop);_reject(promise,reason);return promise}
function needsResolver(){throw new TypeError('You must pass a resolver function as the first argument to the promise constructor')}
function needsNew(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}
function Promise(resolver){this[PROMISE_ID]=nextId();this._result=this._state=undefined;this._subscribers=[];if(noop!==resolver){typeof resolver!=='function'&&needsResolver();this instanceof Promise?initializePromise(this,resolver):needsNew()}}
Promise.all=all;Promise.race=race;Promise.resolve=resolve;Promise.reject=reject;Promise._setScheduler=setScheduler;Promise._setAsap=setAsap;Promise._asap=asap;Promise.prototype={constructor:Promise,then:then,'catch':function _catch(onRejection){return this.then(null,onRejection)}};function polyfill(){var local=undefined;if(typeof global!=='undefined'){local=global}else if(typeof self!=='undefined'){local=self}else{try{local=Function('return this')()}catch(e){throw new Error('polyfill failed because global object is unavailable in this environment')}}
var P=local.Promise;if(P){var promiseToString=null;try{promiseToString=Object.prototype.toString.call(P.resolve())}catch(e){}
if(promiseToString==='[object Promise]'&&!P.cast){return}}
local.Promise=Promise}
polyfill();Promise.polyfill=polyfill;Promise.Promise=Promise;return Promise})}.call(this,__webpack_require__(/*! ./../../process/browser.js */"./node_modules/process/browser.js"),__webpack_require__(/*! ./../../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js")))}),"./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
(function(module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined')}
function defaultClearTimeout(){throw new Error('clearTimeout has not been defined')}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout}else{cachedSetTimeout=defaultSetTimout}}catch(e){cachedSetTimeout=defaultSetTimout}
try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout}else{cachedClearTimeout=defaultClearTimeout}}catch(e){cachedClearTimeout=defaultClearTimeout}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}
try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}
function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}
try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}
var queue=[];var draining=!1;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}
draining=!1;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}
if(queue.length){drainQueue()}}
function drainQueue(){if(draining){return}
var timeout=runTimeout(cleanUpNextTick);draining=!0;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}
queueIndex=-1;len=queue.length}
currentQueue=null;draining=!1;runClearTimeout(timeout)}
process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}
queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue)}};function Item(fun,array){this.fun=fun;this.array=array}
Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title='browser';process.browser=!0;process.env={};process.argv=[];process.version='';process.versions={};function noop(){}
process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]};process.binding=function(name){throw new Error('process.binding is not supported')};process.cwd=function(){return'/'};process.chdir=function(dir){throw new Error('process.chdir is not supported')};process.umask=function(){return 0}}),"./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
(function(module,exports,__webpack_require__){(function(module){function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}
var runtime=function(exports){"use strict";var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);generator._invoke=makeInvokeMethod(innerFn,self,context);return generator}
exports.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}
var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function Generator(){}
function GeneratorFunction(){}
function GeneratorFunctionPrototype(){}
var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this};var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){IteratorPrototype=NativeIteratorPrototype}
var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction";function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg)}})}
exports.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":!1};exports.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype)}else{genFun.__proto__=GeneratorFunctionPrototype;if(!(toStringTagSymbol in genFun)){genFun[toStringTagSymbol]="GeneratorFunction"}}
genFun.prototype=Object.create(Gp);return genFun};exports.awrap=function(arg){return{__await:arg}};function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg)}else{var result=record.arg;var value=result.value;if(value&&_typeof(value)==="object"&&hasOwn.call(value,"__await")){return PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject)},function(err){invoke("throw",err,resolve,reject)})}
return PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped;resolve(result)},function(error){return invoke("throw",error,resolve,reject)})}}
var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject)})}
return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}
this._invoke=enqueue}
defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this};exports.AsyncIterator=AsyncIterator;exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){if(PromiseImpl===void 0)PromiseImpl=Promise;var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next()})};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running")}
if(state===GenStateCompleted){if(method==="throw"){throw arg}
return doneResult()}
context.method=method;context.arg=arg;while(!0){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}
if(context.method==="next"){context.sent=context._sent=context.arg}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg}
context.dispatchException(context.arg)}else if(context.method==="return"){context.abrupt("return",context.arg)}
state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue}
return{value:record.arg,done:context.done}}else if(record.type==="throw"){state=GenStateCompleted;context.method="throw";context.arg=record.arg}}}}
function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){context.delegate=null;if(context.method==="throw"){if(delegate.iterator["return"]){context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){return ContinueSentinel}}
context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method")}
return ContinueSentinel}
var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel}
var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel}
if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc;if(context.method!=="return"){context.method="next";context.arg=undefined}}else{return info}
context.delegate=null;return ContinueSentinel}
defineIteratorMethods(Gp);Gp[toStringTagSymbol]="Generator";Gp[iteratorSymbol]=function(){return this};Gp.toString=function(){return"[object Generator]"};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1]}
if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3]}
this.tryEntries.push(entry)}
function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record}
function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(!0)}
exports.keys=function(object){var keys=[];for(var key in object){keys.push(key)}
keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=!1;return next}}
next.done=!0;return next}};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable)}
if(typeof iterable.next==="function"){return iterable}
if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=!1;return next}}
next.value=undefined;next.done=!0;return next};return next.next=next}}
return{next:doneResult}}
exports.values=values;function doneResult(){return{value:undefined,done:!0}}
Context.prototype={constructor:Context,reset:function reset(skipTempReset){this.prev=0;this.next=0;this.sent=this._sent=undefined;this.done=!1;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined}}}},stop:function stop(){this.done=!0;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg}
return this.rval},dispatchException:function dispatchException(exception){if(this.done){throw exception}
var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){context.method="next";context.arg=undefined}
return!!caught}
for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end")}
if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,!0)}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,!0)}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}
if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){finallyEntry=null}
var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel}
return this.complete(record)},complete:function complete(record,afterLoc){if(record.type==="throw"){throw record.arg}
if(record.type==="break"||record.type==="continue"){this.next=record.arg}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end"}else if(record.type==="normal"&&afterLoc){this.next=afterLoc}
return ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel}}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry)}
return thrown}}
throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){this.arg=undefined}
return ContinueSentinel}};return exports}((!1?undefined:_typeof(module))==="object"?module.exports:{});try{regeneratorRuntime=runtime}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(runtime)}}.call(this,__webpack_require__(/*! ./../webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(module)))}),"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
(function(module,exports){function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}
var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){if((typeof window==="undefined"?"undefined":_typeof(window))==="object")g=window}
module.exports=g}),"./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
(function(module,exports){module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];if(!module.children)module.children=[];Object.defineProperty(module,"loaded",{enumerable:!0,get:function get(){return module.l}});Object.defineProperty(module,"id",{enumerable:!0,get:function get(){return module.i}});module.webpackPolyfill=1}
return module}}),0:
/*!*****************************************************!*\
  !*** multi es6-promise-promise ./js/scripts_es6.js ***!
  \*****************************************************/
/*! no static exports found */
(function(module,exports,__webpack_require__){__webpack_require__(/*! es6-promise-promise */"./node_modules/es6-promise-promise/index.js");module.exports=__webpack_require__(/*! ./js/scripts_es6.js */"./js/scripts_es6.js")}),1:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
(function(module,exports){})});(function(){var expirationDate=new Date();expirationDate.setTime(expirationDate.getTime()+31536000*1000);document.cookie="pll_language=ru; expires="+expirationDate.toUTCString()+"; path=/; secure; SameSite=Lax"}());function lazyLoadThumb(e){var t='<img loading="lazy" data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"></noscript>',a='<div class="play"></div>';return t.replace("ID",e)+a}function lazyLoadYoutubeIframe(){var e=document.createElement("iframe"),t="ID?autoplay=1";t+=0===this.dataset.query.length?'':'&'+this.dataset.query;e.setAttribute("src",t.replace("ID",this.dataset.src)),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),e.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),this.parentNode.replaceChild(e,this)}document.addEventListener("DOMContentLoaded",function(){var e,t,a=document.getElementsByClassName("rll-youtube-player");for(t=0;t<a.length;t++)e=document.createElement("div"),e.setAttribute("data-id",a[t].dataset.id),e.setAttribute("data-query",a[t].dataset.query),e.setAttribute("data-src",a[t].dataset.src),e.innerHTML=lazyLoadThumb(a[t].dataset.id),e.onclick=lazyLoadYoutubeIframe,a[t].appendChild(e)});;function initJivosite(){var script=document.createElement('script');script.src="//code.jivosite.com/widget/isQOOTEH8c";script.async=!0;document.getElementsByTagName('head')[0].appendChild(script)}
setTimeout(initJivosite,5000)