$(window).on("load",(function(){"use strict";$("#preloader").delay(350).fadeOut("slow"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)||(document.getElementsByClassName("infinityChrome")[0].style.display="none",document.getElementsByClassName("infinity")[0].style.display="block"),setTimeout((function(){(new WOW).init()}),0);var e=[200,400,600,800,1e3,1200,1400,1600,1800,2e3];$(".blog-item.wow").each((function(o){$(this).attr("data-wow-delay",void 0===e[o]?"200ms":e[o]+"ms")})),$(".portfolio-filter").on("click","li",(function(){var e=$(this).attr("data-filter");o.isotope({filter:e})})),$(".portfolio-filter").each((function(e,o){var t=$(o);t.on("click","li",(function(){t.find(".current").removeClass("current"),$(this).addClass("current")}))}));var o=$(".portfolio-wrapper");o.imagesLoaded((function(){$(".portfolio-wrapper").isotope({itemSelector:'[class*="col-"]',percentPosition:!0,masonry:{columnWidth:'[class*="col-"]'}})}));var t=function(){$(".work-image").magnificPopup({type:"image",closeBtnInside:!1,mainClass:"my-mfp-zoom-in"}),$(".work-content").magnificPopup({type:"inline",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!1,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"}),$(".work-video").magnificPopup({type:"iframe",closeBtnInside:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"}}),$(".gallery-link").on("click",(function(){$(this).next().magnificPopup("open")})),$(".gallery").each((function(){$(this).magnificPopup({delegate:"a",type:"image",closeBtnInside:!1,gallery:{enabled:!0,navigateByImgClick:!0},fixedContentPos:!1,mainClass:"my-mfp-zoom-in"})}))};t();var i=1,a=$(".portfolio-pagination").find("li a:last").text();o.infinitescroll({itemSelector:".grid-item",nextSelector:".portfolio-pagination li a",navSelector:".portfolio-pagination",extraScrollPx:0,bufferPx:0,maxPage:6,loading:{finishedMsg:"No more works",msgText:"",speed:"slow",selector:".load-more"}},(function(e){var r=$(e);r.imagesLoaded((function(){r.animate({opacity:1}),o.isotope("appended",r)})),t(),++i==a&&$(".load-more").remove()})),o.infinitescroll("unbind"),$(".load-more .btn").on("click",(function(){return o.infinitescroll("retrieve"),$(".load-more .btn i").css("display","inline-block"),$(".load-more .btn i").addClass("fa-spin"),$(document).ajaxStop((function(){setTimeout((function(){$(".load-more .btn i").hide()}),1e3)})),!1})),$(".portfolio-filter-mobile").on("change",(function(){var e=this.value;e=r[e]||e,o.isotope({filter:e})}));var r={numberGreaterThan50:function(){var e=$(this).find(".number").text();return parseInt(e,10)>50},ium:function(){return $(this).find(".name").text().match(/ium$/)}}})),$(document).on("ready",(function(){"use strict";$(".testimonials-wrapper").slick({dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:3e3})})),$((function(){"use strict";if($(".menu-icon button").on("click",(function(){$("header.desktop-header-1, main.content, header.mobile-header-1").toggleClass("open")})),$("main.content").on("click",(function(){$("header.desktop-header-1, main.content, header.mobile-header-1").removeClass("open")})),$(".vertical-menu li a").on("click",(function(){$("header.desktop-header-1, main.content, header.mobile-header-1").removeClass("open")})),$(".menu-icon button").on("click",(function(){$("header.desktop-header-2, main.content-2, header.mobile-header-2").toggleClass("open")})),$("main.content-2").on("click",(function(){$("header.desktop-header-2, main.content-2, header.mobile-header-2").removeClass("open")})),$(".vertical-menu li a").on("click",(function(){$("header.desktop-header-2, main.content-2, header.mobile-header-2").removeClass("open")})),$('a[href^="#"]:not([href="#"]').on("click",(function(e){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},800,"easeInOutQuad"),e.preventDefault()})),$(".parallax").length>0){var e=$(".parallax").get(0);new Parallax(e,{relativeInput:!0})}if($(".text-rotating").Morphext({animation:"bounceIn",separator:",",speed:4e3,complete:function(){}}),$(".vertical-menu li a").addClass("nav-link"),$(".count").counterUp({delay:10,time:2e3}),$(".skill-item").length>0)new Waypoint({element:document.getElementsByClassName("skill-item"),handler:function(e){$(".progress-bar").each((function(){var e=$(this).attr("aria-valuenow")+"%";$(this).animate({width:e},{easing:"linear"})})),this.destroy()},offset:"50%"});for(var o=document.getElementsByClassName("spacer"),t=0;t<o.length;t++){var i=o[t].getAttribute("data-height");o[t].style.height=i+"px"}for(o=document.getElementsByClassName("data-background"),t=0;t<o.length;t++){var a=o[t].getAttribute("data-color");o[t].style.backgroundColor=""+a}$(".submenu").before('<i class="ion-md-add switch"></i>'),$(".vertical-menu li i.switch").on("click",(function(){var e=$(this).next(".submenu");e.slideToggle(300),e.parent().toggleClass("openmenu")})),$(window).scroll((function(){$(this).scrollTop()>=350?$("#return-to-top").fadeIn(200):$("#return-to-top").fadeOut(200)})),$("#return-to-top").on("click",(function(e){e.preventDefault(),$("body,html").animate({scrollTop:0},400)}))}));var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map((function(e){return new bootstrap.Tooltip(e)}));function changeColor(e){e.is(":checked")?(localStorage.setItem("color","dark"),$("body").addClass("dark"),$("i#colorChangerSun").hide(),$("i#colorChangerMoon").show(),$("div#preloader").removeClass("light"),$("div.scroll-down").removeClass("light"),$("header.mobile-header-1").removeClass("light"),$("header.desktop-header-1").removeClass("light"),$("header.desktop-header-3").removeClass("light"),$("img#logoLight").show(),$("img#logoDark").hide(),$("img#horizontalLogoLight").show(),$("img#horizontalLogoDark").hide(),$("img#logoLightDesktop").show(),$("img#logoDarkDesktop").hide(),$("section#home").removeClass("light"),$(".desktop-header-1 .form-check.form-switch.colorChanger").prop("title","Want it brighter? Click here!"),$(".desktop-header-3 .form-check.form-switch.colorChanger").prop("title","Want it brighter? Click here!"),$("i#changeLayoutIcon").css("color","#FFD15C")):(localStorage.setItem("color","light"),$("body").removeClass("dark"),$("i#colorChangerSun").show(),$("i#colorChangerMoon").hide(),$("div#preloader").addClass("light"),$("div.scroll-down").addClass("light"),$("header.mobile-header-1").addClass("light"),$("header.desktop-header-1").addClass("light"),$("header.desktop-header-3").addClass("light"),$("img#logoLight").hide(),$("img#logoDark").show(),$("img#horizontalLogoLight").hide(),$("img#horizontalLogoDark").show(),$("img#logoLightDesktop").hide(),$("img#logoDarkDesktop").show(),$("section#home").addClass("light"),$(".desktop-header-1 .form-check.form-switch.colorChanger").prop("title","Dazzled? Smash here!"),$(".desktop-header-3 .form-check.form-switch.colorChanger").prop("title","Dazzled? Smash here!"),$("i#changeLayoutIcon").css("color","#FF4C60"))}function changeLayout(e){window.location.href="/changelayout/"+e}$(document).ready((function(){var e=localStorage.getItem("color");e?"dark"==e?($("body").addClass(e),$("input#colorChanger").prop("checked",!0),$("i#colorChangerMoon").show(),$("img#horizontalLogoLight").show(),$("img#logoLightDesktop").show(),$("img#logoLight").show(),$("div#preloader").removeClass("light"),$("div.scroll-down").removeClass("light"),$("section#home").removeClass("light"),$("header.mobile-header-1").removeClass("light"),$("header.desktop-header-1").removeClass("light"),$("header.desktop-header-3").removeClass("light"),$(".desktop-header-1 .form-check.form-switch.colorChanger").prop("title","Want it brighter? Click here!"),$(".desktop-header-3 .form-check.form-switch.colorChanger").prop("title","Want it brighter? Click here!"),$("i#changeLayoutIcon").css("color","#FFD15C")):($("i#colorChangerSun").show(),$("img#horizontalLogoDark").show(),$("img#logoDarkDesktop").show(),$("img#logoDark").show(),$(".desktop-header-1 .form-check.form-switch.colorChanger").prop("title","Dazzled? Smash here!"),$(".desktop-header-3 .form-check.form-switch.colorChanger").prop("title","Dazzled? Smash here!"),$("i#changeLayoutIcon").css("color","#FF4C60")):(localStorage.setItem("color","light"),$("img#horizontalLogoDark").show(),$("i#colorChangerSun").show(),$("i#changeLayoutIcon").css("color","#FF4C60"))}));
