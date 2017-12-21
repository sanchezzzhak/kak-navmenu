(function ($) {
    "use strict";

    var selectors =  {
        linkSubMenu: '.nav > .has-sub > a',
        subMenu: '.sub-menu',
        expandItems: '.nav > li.has-sub > .sub-menu',
        stageSideBarMinified: '.page-sidebar-minified',
        btnMinify :'[data-click="sidebar-minify"]',
        sidebarSlimScroll :'[data-scrollbar="true"]'
    }
    var stageSidebarKey = 'kak-sidebar-stage';

    var kakSidebar = function (element, options) {
        this.element = $(element);
        this.init();
    }
    var store = window.store;

    kakSidebar.prototype = {
        constructor: kakSidebar,
        init: function(){
            $(this.element).on('click', selectors.linkSubMenu, $.proxy(function(e){
                this.onHandleExpandItem(e);
            }, this));

            $(this.element).on('click', selectors.btnMinify, $.proxy(function(e){
                this.onHandleSidebarMinify(e);
            }, this));

            var stage = store.get(stageSidebarKey),
                a = "page-sidebar-minified",
                t = 'body';

            stage === 'hide' ? ($(t).addClass(a)) :($(t).removeClass(a));

            if(0 !== $(selectors.stageSideBarMinified).length){
                this.initSlimScroll();
            }
        },
        isSlimScrollSupport: function(){
            return  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        initSlimScroll: function(){
            var e = $(this.element).find(selectors.sidebarSlimScroll),
                a = $(e).attr("data-height");
                a = a ? a : $(e).height();
            var t = {
                height : a,
                alwaysVisible : !0
            };
            this.isSlimScrollSupport()
                ? ($(e).css("height", a), $(e).css("overflow-x", "scroll"))
                : $(e).slimScroll(t)

        },
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
            var a = "page-sidebar-minified",
                t = 'body';

            if($(t).hasClass(a)){
                $(t).removeClass(a);
                store.set(stageSidebarKey,'show')
                this.initSlimScroll();
            }else{
                $(t).addClass(a)
                $(this.element).find(selectors.sidebarSlimScroll).slimScroll({destroy : !0});
                $(this.element).find(selectors.sidebarSlimScroll).trigger("mouseover").removeAttr("style")
                store.set(stageSidebarKey,'hide');
                $(window).trigger("resize");
            }
        }
    };

    $.fn.kakSidebar = function(option) {
        var options = typeof option == 'object' && option;
        new kakSidebar(this, options);
        return this;
    };
    $.fn.kakSidebar.Constructor = kakSidebar;

    $('.kak-nav-sidebar').each(function(k,i){
        $(i).kakSidebar();
    });

})(window.jQuery);
