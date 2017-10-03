(function ($) {
    "use strict";

    var selectors =  {
        linkSubMenu: '.nav > .has-sub > a',
        subMenu: '.sub-menu',
        expandItems: '.nav > li.has-sub > .sub-menu',
        stageSideBarMinified: '.page-sidebar-minified',
        btnMinify :'[data-click="sidebar-minify"]'
    }

    var kakSidebar = function (element, options) {
        this.element = $(element);
        $(this.element).on('click', selectors.linkSubMenu, $.proxy(function(e){
            this.onHandleExpandItem(e);
        }, this));
        $(this.element).on('click', selectors.btnMinify, this.onHandleSidebarMinify);
    }

    kakSidebar.prototype = {
        constructor: kakSidebar,
        onHandleExpandItem: function(e) {
            var e = $(e.currentTarget).next(selectors.subMenu);
            if(0 === $(selectors.stageSideBarMinified).length){
                $(this.element).find(selectors.expandItems).not(e).slideUp(250, function () {
                    $(this).closest("li").removeClass("expand")
                });
                $(e).slideToggle(250, function () {
                    var e = $(this).closest("li");
                    $(e).hasClass("expand") ? $(e).removeClass("expand") : $(e).addClass("expand")
                });
            }
        },
        onHandleSidebarMinify: function (e) {
            e.preventDefault();
            // var a = "page-sidebar-minified",
            //     t = "#wrap";
            //
            // $(t).hasClass(a)
            //     ? ($(t).removeClass(a), $(t).hasClass("page-sidebar-fixed") && generateSlimScroll($('#sidebar [data-scrollbar="true"]')))
            //     : ($(t).addClass(a), $(t).hasClass("page-sidebar-fixed") && ($('#sidebar [data-scrollbar="true"]').slimScroll({
            //     destroy : !0}), $('#sidebar [data-scrollbar="true"]').removeAttr("style")), $("#sidebar [data-scrollbar=true]").trigger("mouseover"));
            //
            //     $(window).trigger("resize");
        }
    };

    $.fn.kakSidebar = function(option) {
        var options = typeof option == 'object' && option;
        new kakSidebar(this, options);
        return this;
    };
    $.fn.kakSidebar.Constructor = kakSidebar;

    // auto init
    $('.sidebar').each(function(k,i){
        $(i).kakSidebar();
    });

})(window.jQuery);