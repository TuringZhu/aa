function fusionCalcWoocommerceTabsLayout(e){jQuery(e).each(function(){var e=jQuery(this).parent().width(),o=jQuery(this).find("li").length,r=(e-e%o)/o,t=e-r*(o-1);jQuery(this).css("width",e+"px"),jQuery(this).find("li").css("width",r+"px"),jQuery(this).find("li:last").css("width",t+"px").addClass("no-border-right")})}jQuery(window).on("load",function(){jQuery(".woocommerce-store-notice__dismiss-link").on("click",function(){var e=fusion.getAdminbarHeight();jQuery("#wrapper").css("margin-top",""),jQuery(".fusion-header").css("top",e)}),jQuery(".variations_form").find(".variations .single_variation_wrap .woocommerce-variation-description").remove(),"function"==typeof jQuery.fn.equalHeights&&0<jQuery(".double-sidebars.woocommerce .social-share > li").length&&jQuery(".double-sidebars.woocommerce .social-share > li").equalHeights(),jQuery(".adsw-attribute-option").length&&jQuery("body").on("show_variation",".variations_form",function(){jQuery(".product-type-variable .variations_form > .single_variation_wrap .woocommerce-variation-price").css("display","inline-block"),jQuery(".product-type-variable .variations_form > .single_variation_wrap .woocommerce-variation-price .price").css("margin-top","0"),jQuery(".product-type-variable .variations_form > .single_variation_wrap .woocommerce-variation-availability").css("display","inline-block")})}),jQuery(document).ready(function(){var e;jQuery('.fusion-update-cart, a[href="#updateCart"]').on("click",function(e){return e.preventDefault(),jQuery(".cart .actions > .button").trigger("click"),!1}),jQuery(".fusion-apply-coupon").on("click",function(e){e.preventDefault(),jQuery(".cart .actions .coupon #coupon_code").val(jQuery("#avada_coupon_code").val()),jQuery(".cart .actions .coupon .button").trigger("click")}),jQuery(".woocommerce-store-notice").length&&jQuery(".woocommerce-store-notice").is(":visible")&&!jQuery(".fusion-top-frame").is(":visible")&&(jQuery("#wrapper").css("margin-top",jQuery(".woocommerce-store-notice").outerHeight()),0<jQuery("#slidingbar-area").outerHeight()&&jQuery(".header-wrapper").css("margin-top","0"),jQuery(".sticky-header").length&&jQuery(".sticky-header").css("margin-top",jQuery(".woocommerce-store-notice").outerHeight())),jQuery(".catalog-ordering .orderby .current-li a").html(jQuery(".catalog-ordering .orderby ul li.current a").html()),jQuery(".catalog-ordering .sort-count .current-li a").html(jQuery(".catalog-ordering .sort-count ul li.current a").html()),jQuery(".woocommerce .avada-myaccount-data th.woocommerce-orders-table__cell-order-actions").text(avadaWooCommerceVars.order_actions),jQuery("body.rtl .avada-myaccount-data .my_account_orders .woocommerce-orders-table__cell-order-status").each(function(){jQuery(this).css("text-align","right")}),jQuery(".woocommerce input").each(function(){jQuery(this).has("#coupon_code")||(e=jQuery(this).attr("id"),jQuery(this).attr("placeholder",jQuery(this).parent().find("label[for="+e+"]").text()))}),jQuery(".woocommerce #reviews #comments .comment_container .comment-text").length&&jQuery(".woocommerce #reviews #comments .comment_container").append('<div class="clear"></div>'),jQuery(".woocommerce-tabs #comments > h2").each(function(){jQuery(this).replaceWith(function(){return"<h3>"+jQuery(this).html()+"</h3>"})}),"block"===jQuery("body .sidebar").css("display")&&fusionCalcWoocommerceTabsLayout(".woocommerce-tabs .tabs-horizontal"),jQuery(".sidebar .products,.fusion-footer-widget-area .products,#slidingbar-area .products").each(function(){jQuery(this).removeClass("products-4"),jQuery(this).removeClass("products-3"),jQuery(this).removeClass("products-2"),jQuery(this).addClass("products-1")}),jQuery(".subcategory-products").each(function(){jQuery(this).addClass("products-"+avadaWooCommerceVars.woocommerce_shop_page_columns)}),jQuery(".woocommerce-tabs ul.tabs li a").off("click"),jQuery("body").on("click",".woocommerce-tabs > ul.tabs li a",function(){var e=jQuery(this),o=e.closest(".woocommerce-tabs");return jQuery("ul.tabs li",o).removeClass("active"),jQuery("> div.panel",o).hide(),jQuery("div"+e.attr("href"),o).show(),e.parent().addClass("active"),!1}),jQuery(".continue-checkout").length||jQuery(document).on("checkout_error",function(){var e=fusion.getAdminbarHeight(),o=jQuery(".fusion-header-wrapper").find("div"),r=0;jQuery("html, body").stop(),o.each(function(){"fixed"===jQuery(this).css("position")&&(r=jQuery(this).height())}),jQuery(".woocommerce-error").length&&jQuery("html, body").animate({scrollTop:jQuery(".woocommerce-error").offset().top-e-r},500)}),jQuery("body").on("click",".woocommerce-checkout-nav a,.continue-checkout",function(e){var o,r,t,i=fusion.getAdminbarHeight(),c=0;jQuery(".fusion-header-wrapper").find("div").each(function(){"fixed"===jQuery(this).css("position")&&(c=jQuery(this).height())}),e.preventDefault(),jQuery(".avada-checkout-error").parent().remove(),0<jQuery(".validate-required:visible").length&&jQuery.each(jQuery(".validate-required:visible"),function(e,o){var r=jQuery(o).find(":input");"hidden"===r.attr("type")||"radio"===r.attr("type")?jQuery(o).addClass("woocommerce-validated"):r.trigger("change")}),jQuery(".woocommerce").trigger("avada_checkout_continue_field_validation"),jQuery(".woocommerce .woocommerce-billing-fields, .woocommerce .woocommerce-shipping-fields, .woocommerce .woocommerce-account-fields").find(".input-text, select, input:checkbox").closest(".validate-required:not(.woocommerce-validated)").is(":visible")?(jQuery(".woocommerce .avada-checkout .woocommerce-checkout").prepend('<ul class="woocommerce-error"><li class="avada-checkout-error">'+avadaWooCommerceVars.woocommerce_checkout_error+"</li><ul>"),jQuery(document.body).trigger("avada_checkout_error",[avadaWooCommerceVars.woocommerce_checkout_error]),0<jQuery(".woocommerce-error").length&&jQuery("html, body").animate({scrollTop:jQuery(".woocommerce-error").offset().top-i-c},500)):(r=o=jQuery(this).attr("data-name"),r="order_review"===o?"#"+o:"."+o,jQuery("form.checkout .col-1, form.checkout .col-2, form.checkout #order_review_heading, form.checkout #order_review").hide(),jQuery("form.checkout").find(r).fadeIn(),"order_review"===r&&jQuery("form.checkout").find("#order_review_heading ").fadeIn(),jQuery(".woocommerce-checkout-nav li").removeClass("is-active"),jQuery(".woocommerce-checkout-nav").find("[data-name="+o+"]").parent().addClass("is-active"),jQuery(this).hasClass("continue-checkout")&&0<jQuery(window).scrollTop()&&(t=jQuery(".woo-tabs-horizontal").length?jQuery(".woocommerce-checkout-nav"):jQuery(".woocommerce-content-box.avada-checkout"),jQuery("html, body").animate({scrollTop:t.offset().top-i-c},500))),calcSelectArrowDimensions()}),jQuery("body").on("click","input[name=ship_to_different_address]",function(){jQuery(this).is(":checked")&&setTimeout(function(){calcSelectArrowDimensions()},1)}),Modernizr.mq("only screen and (max-width: 479px)")&&jQuery(".overlay-full.layout-text-left .slide-excerpt p").each(function(){var e,o=jQuery(this).html().split(/[\s\.\?]+/),r="";if(o.length>11){for(e=0;e<10;e++)r+=o[e]+" ";jQuery(this).html(r)}}),jQuery(".wc-tabs li").on("click",function(){var e=jQuery(this).attr("aria-controls");setTimeout(function(){jQuery("#"+e).find(".fusion-carousel").length&&"function"==typeof generateCarousel&&generateCarousel(),jQuery("#"+e).find(".fusion-gallery").each(function(){jQuery(this).isotope()}),jQuery("#"+e).find(".fusion-blog-shortcode").each(function(){jQuery(this).find(".fusion-blog-layout-grid").isotope()}),jQuery("#"+e).find(".crossfade-images").each(function(){fusionResizeCrossfadeImagesContainer(jQuery(this))}),"function"==typeof jQuery.fn.fusionCalcFlipBoxesHeight&&jQuery("#"+e).find(".flip-box-inner-wrapper").each(function(){jQuery(this).fusionCalcFlipBoxesHeight()}),jQuery("#"+e).find(".fusion-portfolio").each(function(){jQuery(this).find(".fusion-portfolio-wrapper").isotope()}),"function"==typeof jQuery.fn.reinitializeGoogleMap&&jQuery("#"+e).find(".shortcode-map").each(function(){jQuery(this).reinitializeGoogleMap()})},150)})}),jQuery(document).ready(function(){var e=jQuery("#calc_shipping_country").parents(".avada-shipping-calculator-form").find("#calc_shipping_state_field");e.length&&("hidden"===e.find("#calc_shipping_state").attr("type")?e.hide():e.show())}),jQuery(document).ajaxComplete(function(){jQuery('.fusion-update-cart, a[href="#updateCart"]').off("click"),jQuery('.fusion-update-cart, a[href="#updateCart"]').on("click",function(e){return e.preventDefault(),jQuery(".cart .actions > .button").trigger("click"),!1}),setTimeout(function(){jQuery(".crossfade-images").each(function(){fusionResizeCrossfadeImagesContainer(jQuery(this))})},1e3)}),jQuery(window).on("fusion-dynamic-content-render",function(e,o){var r=jQuery(o).find(".fusion-woo-slider");0<r.length&&r.parents(".fusion-tabs").css("height",""),0<(r=jQuery(o).find(".crossfade-images")).length&&r.each(function(){fusionResizeCrossfadeImagesContainer(jQuery(this))})}),jQuery(window).on("updated_wc_div",function(){jQuery(".cart_totals.fusion-animated").removeClass("fusion-animated")});