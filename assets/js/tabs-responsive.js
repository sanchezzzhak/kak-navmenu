(function ($) {
  "use strict";
  
  function show(el) {
	el.stop().fadeIn(150).delay(1).show();
  }
  
  function hide(el) {
	el.stop().fadeOut(150).delay(1).hide();
  }
  
  var kakResponsiveTabs = function (element, options) {
	this.element = $(element);
	this.container = $(element).parent();
	this.options = options;
	this.init();
  }
  
  kakResponsiveTabs.prototype = {
	constructor: kakResponsiveTabs,
	__down: true,
	__startX: 0,
	__scrollLeft: 0,
	init: function () {
	  this.element.addClass('responsive-tabs');
	  this.createMiniMenu();
	  this.createScrollArrows();
	  this.bindEvents();
	  this.updateArrows();
	},
	
	getTabsWidth: function () {
	  var itemsWidth = 0;
	  this.element.find('li').each(function () {
		itemsWidth += $(this).outerWidth();
	  });
	  return itemsWidth;
	},
	
	bindEvents: function () {
	  // bind mini menu show-hide
	  this.element
	  .on('click', 'li.active > a, span.glyphicon', this.onShowMiniMenu.bind(this))
	  .on('click', 'li:not(.active) > a', this.onHideMiniMenu.bind(this))
	  .on('mousedown', this.onScrollDown.bind(this))
	  .on('mouseup mouseleave', this.onScrollLeave.bind(this))
	  .on('mousemove', this.onScrollMove.bind(this));
	  
	  this.container
	  .on('click', '.scroller-left', this.onMoveScrollToLeft.bind(this))
	  .on('click', '.scroller-right', this.onMoveScrollToRight.bind(this));
	  
	  $(window).on('resize', this.updateArrows.bind(this));
	},
	
	createMiniMenu() {
	  this.element.append($('<span class="glyphicon glyphicon-triangle-bottom"></span>'));
	  this.element.append($('<span class="glyphicon glyphicon-triangle-top"></span>'));
	},
	
	createScrollArrows() {
	  this.container.append($('<div class="scroller-left"><i class="glyphicon glyphicon-chevron-left"></i></div>'));
	  this.container.append($('<div class="scroller-right"><i class="glyphicon glyphicon-chevron-right"></i></div>'));
	},
	
	onShowMiniMenu: function () {
	  this.element.toggleClass('open');
	},
	
	onHideMiniMenu: function () {
	  this.element.removeClass('open');
	},
	
	onMoveScrollToLeft() {
	  this.element.stop().animate({
		scrollLeft: (this.element.scrollLeft() - this.element.outerWidth() - 10)
	  }, {
		complete: function () {
		  this.updateArrows();
		}.bind(this)
	  });
	},
	
	onMoveScrollToRight: function () {
	  this.element.stop().animate({
		scrollLeft: (this.element.scrollLeft() + this.element.outerWidth() + 10)
	  }, {
		complete: function () {
		  this.updateArrows();
		}.bind(this)
	  });
	},
	
	/**
	 * todo ref
	 */
	updateArrows: function () {
	  var scrollWidth = this.element.get(0).scrollWidth;
	  var $scrollLeftArrow = this.container.find('.scroller-left');
	  var $scrollRightArrow = this.container.find('.scroller-right');
	  var left = this.element.scrollLeft();
	  var total = this.getTabsWidth();
	  var width = this.element.outerWidth();
	  
	  if (width > total || scrollWidth - width === left) {
		hide($scrollRightArrow);
	  } else {
		show($scrollRightArrow);
	  }
	  if (left > 0) {
		show($scrollLeftArrow);
	  } else {
		hide($scrollLeftArrow);
	  }
	},
	
	onScrollDown: function (e) {
	  this.__down = true;
	  this.__startX = e.pageX - this.element.offset().left;
	  this.__scrollLeft = this.element.scrollLeft()
	  clearTimeout(this.__time);
	  this.__time = setTimeout(function () {
		this.element.addClass('scroll-active');
	  }.bind(this), 150)
	},
	
	onScrollLeave: function () {
	  this.__down = false;
	  clearTimeout(this.__time);
	  this.element.removeClass('scroll-active')
	},
	onScrollMove: function (e) {
	  if (!this.__down) return;
	  e.preventDefault();
	  var x = e.pageX - this.element.offset().left;
	  var walk = (x - this.__startX) * 3;
	  this.element.scrollLeft(this.__scrollLeft - walk);
	  this.updateArrows();
	}
  };
  
  $.fn.kakResponsiveTabs = function (option) {
	var options = typeof option == 'object' && option;
	new kakResponsiveTabs(this, options);
	return this;
  };
  $.fn.kakResponsiveTabs.Constructor = kakResponsiveTabs;
  
})(jQuery)



