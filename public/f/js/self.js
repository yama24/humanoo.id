var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(document).ready(function () {
    var color = localStorage.getItem("color");
    if (color) {
        if (color == "dark") {
            $("body").addClass(color);
            $("input#colorChanger").prop("checked", true);
            $("i#colorChangerMoon").show();
            $("img#horizontalLogoLight").show();
            $("img#logoLightDesktop").show();
            $("img#logoLight").show();
            $("div#preloader").removeClass("light");
            $("div.scroll-down").removeClass("light");
            $("section#home").removeClass("light");
            $("header.mobile-header-1").removeClass("light");
            $("header.desktop-header-1").removeClass("light");
            $("header.desktop-header-3").removeClass("light");
            $(".desktop-header-1 .form-check.form-switch.colorChanger").prop(
                "title",
                "Want it brighter? Click here!"
            );
            $(".desktop-header-3 .form-check.form-switch.colorChanger").prop(
                "title",
                "Want it brighter? Click here!"
            );
            $("i#changeLayoutIcon").css("color", "#FFD15C");
            $("link#scrollbar").attr("href", "/f/css/scrollbarDark.css");
        } else {
            $("i#colorChangerSun").show();
            $("img#horizontalLogoDark").show();
            $("img#logoDarkDesktop").show();
            $("img#logoDark").show();
            $(".desktop-header-1 .form-check.form-switch.colorChanger").prop(
                "title",
                "Dazzled? Smash here!"
            );
            $(".desktop-header-3 .form-check.form-switch.colorChanger").prop(
                "title",
                "Dazzled? Smash here!"
            );
            $("i#changeLayoutIcon").css("color", "#FF4C60");
            $("link#scrollbar").attr("href", "/f/css/scrollbarLight.css");
        }
    } else {
        localStorage.setItem("color", "light");
        $("img#horizontalLogoDark").show();
        $("i#colorChangerSun").show();
        $("i#changeLayoutIcon").css("color", "#FF4C60");
        $("link#scrollbar").attr("href", "/f/css/scrollbarLight.css");
    }
});
function changeColor(el) {
    if (el.is(":checked")) {
        localStorage.setItem("color", "dark");
        $("body").addClass("dark");
        $("i#colorChangerSun").hide();
        $("i#colorChangerMoon").show();
        $("div#preloader").removeClass("light");
        $("div.scroll-down").removeClass("light");
        $("header.mobile-header-1").removeClass("light");
        $("header.desktop-header-1").removeClass("light");
        $("header.desktop-header-3").removeClass("light");
        $("img#logoLight").show();
        $("img#logoDark").hide();
        $("img#horizontalLogoLight").show();
        $("img#horizontalLogoDark").hide();
        $("img#logoLightDesktop").show();
        $("img#logoDarkDesktop").hide();
        $("section#home").removeClass("light");
        $(".desktop-header-1 .form-check.form-switch.colorChanger").prop(
            "title",
            "Want it brighter? Click here!"
        );
        $(".desktop-header-3 .form-check.form-switch.colorChanger").prop(
            "title",
            "Want it brighter? Click here!"
        );
        $("i#changeLayoutIcon").css("color", "#FFD15C");
        $("link#scrollbar").attr("href", "/f/css/scrollbarDark.css");
    } else {
        localStorage.setItem("color", "light");
        $("body").removeClass("dark");
        $("i#colorChangerSun").show();
        $("i#colorChangerMoon").hide();
        $("div#preloader").addClass("light");
        $("div.scroll-down").addClass("light");
        $("header.mobile-header-1").addClass("light");
        $("header.desktop-header-1").addClass("light");
        $("header.desktop-header-3").addClass("light");
        $("img#logoLight").hide();
        $("img#logoDark").show();
        $("img#horizontalLogoLight").hide();
        $("img#horizontalLogoDark").show();
        $("img#logoLightDesktop").hide();
        $("img#logoDarkDesktop").show();
        $("section#home").addClass("light");
        $(".desktop-header-1 .form-check.form-switch.colorChanger").prop(
            "title",
            "Dazzled? Smash here!"
        );
        $(".desktop-header-3 .form-check.form-switch.colorChanger").prop(
            "title",
            "Dazzled? Smash here!"
        );
        $("i#changeLayoutIcon").css("color", "#FF4C60");
        $("link#scrollbar").attr("href", "/f/css/scrollbarLight.css");
    }
}

function changeLayout(mode) {
    window.location.href = "/changelayout/" + mode;
}
