(function($) {
    "use strict";

    $(document).ready(function() {

        $(window).trigger("resize");

        init_nbc_menu();

    });

    var nbc_menu_button = $(".nbc-menu-button");
    var nbc_menu_wrap = $(".nbc-menu-wrap");

    function init_nbc_menu() {

        nbc_menu_button.click(function() {

            if ($(this).hasClass("js-active")) {

                $(this).removeClass("js-active");
                $(".nav-bar-compact").removeClass("js-opened");

                setTimeout(function() {
                    nbc_menu_wrap.hide();
                }, 200);

            } else {

                $(this).addClass("js-active");
                nbc_menu_wrap.show();

                setTimeout(function() {
                    $(".nav-bar-compact").addClass("js-opened");
                }, 50);

            }

        });

        nbc_menu_wrap.find("a:not(.nbc-has-sub)").click(function() {

            if (nbc_menu_button.hasClass("js-active")) {

                nbc_menu_button.removeClass("js-active");
                $(".nav-bar-compact").removeClass("js-opened");

            }
        });

        // sub menu
        var nbcHasSub = $(".nbc-has-sub");
        var nbcThisLi;

        nbcHasSub.click(function() {

            nbcThisLi = $(this).parent("li:first");
            if (nbcThisLi.hasClass("js-opened")) {
                nbcThisLi.find(".nbc-sub:first").slideUp(function() {
                    nbcThisLi.removeClass("js-opened");
                    nbcThisLi.find(".nbc-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
                });
            } else {
                $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
                nbcThisLi.addClass("js-opened");
                nbcThisLi.find(".nbc-sub:first").slideDown();
            }

            return false;

        });

        $(window).scroll(function() {

            if ($(window).scrollTop() >= 100) {
                $(".nav-bar-compact").addClass("js-nbc-bg");
            } else {
                $(".nav-bar-compact").removeClass("js-nbc-bg");
            }

        });

    }
})(jQuery);