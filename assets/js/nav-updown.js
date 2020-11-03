(function ($) {
  "use strict";
  
  var kakUpDown = function (element, options) {
	this.element = $(element);
	this.init(options);
  }
  kakUpDown.prototype = {
    constructor: kakUpDown,
	init: function(options){
	  var scrollDir = !1;
	  var scrollPos = 0;
	  var lastScrollPosition = 0;
	  var scrollPosCheck = options.scrollPos !== undefined ? options.scrollPos : 50;
	  var delay = ptions.delay !== undefined ? options.delay : 700;
      var $scroll = $(this.element);
      var labelDown = ptions.labelDown !== undefined ? options.labelDown : 'Down';
      var labelUp = ptions.labelUp !== undefined ? options.labelUp : 'Up';
      
	  $scroll.on('click', function (e) {
		e.preventDefault();
		$scroll.hasClass("back-down") ? ($scroll.attr("title", labelDown).removeClass("back-down"),
		  $('html, body').animate({
			scrollTop: lastScrollPosition
		  }, delay),
		  lastScrollPosition = 0) : (lastScrollPosition = window.pageYOffset,
		  $scroll.attr("title", labelUp).addClass("back-down"),
		  $('html, body').animate({
			scrollTop: scrollPosCheck + 1
		  }, delay))
	  });
	  $(window).on("scroll", function () {
		window.pageYOffset > scrollPosCheck
		  ? scrollDir || ($scroll.removeClass("hidden"), scrollDir = !0)
		  : scrollDir && ($scroll.addClass("hidden"), scrollDir = !1),
		
		scrollPos < window.pageYOffset && $scroll.hasClass("back-down")
		&& $scroll.removeClass("back-down"), scrollPos = window.pageYOffset
	  });
	}
  };
  
  $.fn.kakUpDown = function(option) {
	var options = typeof option == 'object' && option;
	new kakUpDown(this, options);
	return this;
  };
  $.fn.kakUpDown.Constructor = kakUpDown;
  
})(window.jQuery);
