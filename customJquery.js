function tableNiceScroll(){try{$("#content table").each(function(){if(!$(this).parent().is("div.rd-mob-tablewrap")){var s=$(this).is(":visible"),i=$(this).closest("#content table table").length
if(s&&0==i){var e=$("#content").width()
if($(this).width()>e){$(this).wrapAll('<div class="rd-mob-tablewrap" />')
$(this).parent().niceScroll({touchbehavior:!0,cursorcolor:"#23dedc",cursoropacitymax:.6,cursorwidth:8,autohidemode:!1})}}}}),$("#content-taxbytes table").each(function(){if(!$(this).parent().is("div.rd-mob-tablewrap")){var s=$(this).is(":visible"),i=$(this).closest("#content-taxbytes table table").length
if(s&&0==i){var e=$("#content-taxbytes").width()
if($(this).width()>e){$(this).wrapAll('<div class="rd-mob-tablewrap" />')
$(this).parent().niceScroll({touchbehavior:!0,cursorcolor:"#23dedc",cursoropacitymax:.6,cursorwidth:8,autohidemode:!1})}}}})}catch(s){}}function ektronWorkArd(){$(".datatable td").each(function(){$(this).attr("rowspan")&&$(this).closest("table").addClass("spTbl")}),$(".spTbl td").each(function(){(""==$(this).html()||"&nbsp;"==$(this).html())&&$(this).addClass("notVisible")}),$(".spTbl").removeClass("spTbl")}function MainTabs(){var s=$(".tab-nav a, .add-navigation a, .add-tab-nav a")
s.click(function(){var s=$(this).attr("href")
return $(this).parent().hasClass("active")||($(this).parent().siblings().removeClass("active"),$(this).parent().addClass("active"),$(s).siblings().hide().removeClass("active"),$(s).addClass("active").hide().fadeIn(350)),!1})}function DropShow(){$(".login-box .link").click(function(){return($(window).width()>iWidthBreakpt||!rd_mob_flag)&&($(this).closest(".login-box").hasClass("active")?($(this).closest(".login-box").removeClass("active"),$(this).closest(".h-row").find(".drop-box").hide()):($(this).closest(".login-box").addClass("active"),$(this).closest(".h-row").find(".drop-box").show())),!1}),$(".h-row .drop-box").hover(function(){},function(){($(window).width()>iWidthBreakpt||!rd_mob_flag)&&($(".login-box").removeClass("active"),$(this).hide())}),$(".link-holder .link").click(function(){return $(this).closest("li").hasClass("active")?$(this).closest("li").removeClass("active"):$(this).closest("li").addClass("active"),!1}),$(".link-holder > ul > li").hover(function(){$(this).closest("li").removeClass("active")})}function MoreSlide(){$(".q-links .more").click(function(){return $(this).closest("li").hide(),$(this).closest(".q-links-holder").find("ul.hidden").slideDown(350),$(".q-links .less").closest("li").slideDown(350),!1}),$(".q-links .less").click(function(){return $(this).closest("li").hide(),$(this).closest("ul").slideUp(350,function(){$(".q-links .more").closest("li").slideDown(300)}),!1})}function MoreSlideDown(){$(".faqs-section .txt-box div").each(function(){$(this).height()>78&&$(this).height("77px").addClass("expandable").after('<a class="link-expand" href="#">Expand</a>')}),$(".faqs-section .link-expand").click(function(){return $(this).closest(".faqs-section li").find(".txt-box div").hasClass("expandable")?($(this).closest(".faqs-section li").find(".txt-box div").removeClass("expandable").addClass("collapsible").animate({height:$(this).closest(".faqs-section li").find(".txt-box div").get(0).scrollHeight},350),$(this).addClass("hide").html("Collapse")):$(this).closest(".faqs-section li").find(".txt-box div").hasClass("collapsible")&&($(this).closest(".faqs-section li").find(".txt-box div").removeClass("collapsible").addClass("expandable").animate({height:"77px"},350),$(this).removeClass("hide").html("Expand")),!1}),$(".add-lst-btn a.expand").click(function(){return $(".faqs-section .txt-box div.expandable").each(function(){$(this).removeClass("expandable").addClass("collapsible").animate({height:$(this).get(0).scrollHeight},350),$(this).next(".link-expand").addClass("hide").html("Collapse")}),!1}),$(".add-lst-btn a.collapse").click(function(){return $(".faqs-section .txt-box div.collapsible").each(function(){$(this).removeClass("collapsible").addClass("expandable").animate({height:"77px"},350),$(this).next(".link-expand").removeClass("hide").html("Expand")}),!1}),$(".faq-lst .link").click(function(){return $(this).hasClass("hide")?($(this).removeClass("hide"),$(this).closest("li").find(".hidden-block").stop(!0,!0).slideUp(350)):($(this).addClass("hide"),$(this).closest("li").find(".hidden-block").stop(!0,!0).slideDown(350)),!1}),$(".faqs-section .btn-more").click(function(){$(this).closest(".faqs-section").find("li.hidden").first().stop(!0,!0).slideDown(350).removeClass("hidden")
try{$(this).closest(".faqs-section").find("li.hidden").length<=0&&$(this).hide()}catch(s){}return!1})
try{$(".add-row-info .btn-example").click(function(){if($(this).hasClass("hide")){$(this).removeClass("hide"),$(this).closest(".add-row-info").find(".example-box").stop(!0,!0).slideUp(350)
try{$(this).closest(".add-row-info").find(".example-box div.rd-mob-tablewrap table").unwrap()}catch(s){}}else{$(this).addClass("hide"),$(this).closest(".add-row-info").find(".example-box").stop(!0,!0).slideDown(350)
try{$(this).closest(".add-row-info").find(".example-box table").each(function(){if(!$(this).parent().is("div.rd-mob-tablewrap")){var s=$(this).closest(".example-box table table").length
if(0==s){var i=$("#content").width()
if($(this).width()>i){$(this).wrapAll('<div class="rd-mob-tablewrap" />')
$(this).parent().niceScroll({touchbehavior:!0,cursorcolor:"#23dedc",cursoropacitymax:.6,cursorwidth:8,autohidemode:!1})}}}})}catch(s){}}return!1})}catch(s){}$(".showHideLink").click(function(){return $(this).hasClass("hide")?($(this).removeClass("hide"),$(this).closest(".show-hide-info").find(".showHideContent").stop(!0,!0).slideUp(350)):($(this).addClass("hide"),$(this).closest(".show-hide-info").find(".showHideContent").stop(!0,!0).slideDown(350)),!1}),$(".side-link-box .more-btn").click(function(){return $(this).hasClass("hide")||($(this).addClass("hide"),$(this).closest(".side-link-box").find("li.hidden").stop(!0,!0).slideDown(350)),!1}),$(".side-link-box .btn-more").click(function(){return $(this).hasClass("hide")||($(this).addClass("hide"),$(this).closest(".side-link-box").find("li.hidden").stop(!0,!0).slideDown(350)),!1}),$(".q-area .ttl-side h2").slideBlock({closestBlock:"div.q-area",findBlock:"div.q-links-holder"}),$(".links-lst .txt-box h2").slideBlock({closestBlock:"li",findBlock:"div.side-link-box"}),$(".tools-area .ttl-side h2").slideBlock({closestBlock:"div.tools-area",findBlock:"div.side-frame"}),$(".scroll-side-box .ttl-side h2").slideBlock({closestBlock:"div.scroll-side-box",findBlock:"div.side-frame"}),$(".tab-area h3.ttl-mobile").slideBlock({closestBlock:"div.tab",findBlock:"div.lst-holder"})}function ScrollBox(){if($(".scroll-side-box").length){var s=$(".scroll-side-box").offset().top
$(window).scroll(function(){var i=$("#content").height(),e=$(".scroll-side-box").height()
if(i>e){var t=Math.round($(".add-content-area").offset().top)-e,l=$(this).scrollTop()
l>s&&($(window).width()>iWidthBreakpt||!rd_mob_flag)&&t>l?($(".scroll-side-box").addClass("fixed"),$(".scroll-side-box").removeClass("bottom")):l>=t?($(".scroll-side-box").removeClass("fixed"),$(".scroll-side-box").addClass("bottom"),$(".scroll-side-box").css("top",t-200)):($(".scroll-side-box").removeClass("fixed"),$(".scroll-side-box").removeClass("bottom"))}})}}function QLinksClone(){var s=$(".q-links:eq(0) li.hidden").clone()
$(".q-links.hidden").prepend(s)}var iWidthBreakpt
iWidthBreakpt=752,jQuery(document).ready(function(){jQuery.fn.slideBlock=function(s){var s=jQuery.extend({changeSpeed:350,closestBlock:"div.closest-block",findBlock:"div.find-block",classActive:"active"},s)
return this.each(function(){var i=jQuery(this),e=s.closestBlock,t=s.findBlock,l=s.changeSpeed,o=s.classActive
i.click(function(){return!($(window).width()<iWidthBreakpt)&&rd_mob_flag||i.closest(e).hasClass("no-slide")||(i.hasClass(o)?($(this).removeClass(o),$(this).closest(e).find(t).stop(!0,!0).slideUp(l)):(i.addClass(o),i.closest(e).find(t).stop(!0,!0).slideDown(l))),!1})})},MainTabs(),DropShow(),MoreSlide(),MoreSlideDown(),ScrollBox(),QLinksClone(),ektronWorkArd(),$(".gallery-area").length&&$(".gallery-area").flexslider({animation:"fade",slideshow:!0,directionNav:!1,controlNav:!0,slideshowSpeed:5e3}),$(".datatable tr:even").addClass("alt")
try{tableNiceScroll()}catch(s){}$("#gsc-input").keyup(function(){$("#gsc-input").val($(this).val()),0==/^[a-zA-Z0-9-\-,. ]*$/.test($(this).val())&&(alert("Special Characters are not allowed."),$("#gsc-input").val("Search"))})})