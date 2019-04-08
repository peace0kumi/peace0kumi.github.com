/**
 * bui.toggle v1.0
 * 
 * @ProjectDescription 
 * @author codenamic codenamic@gmail.com
 * @version 1.1
 * 
 * Copyright (c) 2016, 
 *
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 * 
 */
if(Detectizr.os.name === 'android' && Detectizr.os.major === '4' && Detectizr.os.minor === '0') {
	$('body').append('<script type="text/javascript" src="./../../../../js/library/jquery-ui.js" /></script>');
}

;(function($){
	
	/**
	 * buiToggle
	 */
	$.fn.buiToggle = function(options){
		var defaults = {
				/* general */
				mode: 'normal',								/* normal, tooltip, switch, tab */
				event: 'click',								/* click, hover */
				activeClass: 'active',						/* string */
				focusin: false,
				focusout: false,
				clickout: false,
				
				/* target */
				target: null,								/* href, next, prev, parent, jQuery Selector */
				targetClass: 'bui-toggle-target',			/* string */
				targetActiveClass: 'active',				/* string */
				
				targetFixed: false,
				targetMargin: -8,							/* integer */
				targetPositionY: 'top',						/* top, bottom */
				targetPositionX: 'right',					/* right, left */
				
				/* react target */
				reactTarget: null,
				reactTargetClass: null,
				reactTargetActiveClass: 'active',
				
				/* close */
				close: false,								/* boolean (true, false) */
				closeOutline: null,
				closeButton: null,
				closeButtonClass: 'close',					/* strong */
				closeButtonText: 'close',					/* string */
				
				/* dimmed */
				dimmed: false,								/* boolean (true, fasle) */
				dimmedContainer: 'body',					/* selector */
				dimmedContainerClass: 'bui-dimmed',			/* string */
				dimmedActiveClass: 'bui-dimmed-active',
				
				/* callback */
				onloadCallBack: function() { return true; },
				eventCallBack: function() { return true; },
				activeCallBack: function() { return true; },
				inactiveCallBack: function() { return true; }
		};
		
		/**
		 * inside the plugin
		 */
		return this.each(function() {
			if (this.length === 0) {
				return this;
			};
			
			var settings = $.extend({}, defaults, options);
			var $this = this;
			settings.onloadCallBack.call($this);
			
			/**
			 * set button and target
			 */
			var buiToggleButton = $(this);
//			var buiToggleTarget = settings.target != null ? settings.target.call(this) : $(buiToggleButton.attr('href'));
			var buiToggleTarget = settings.target != null ? settings.target : $(buiToggleButton.attr('href'));
			
			/**
			 * check activation
			 */
			var buiToggleActive = buiToggleButton.hasClass(settings.activeClass) ? true : false;
			var buiToggleActivation = function() {
				buiToggleActive = !buiToggleActive;
				return buiToggleActive;
			};
			
			/**
			 * event
			 */
			buiToggleButton.bind(settings.event, function(e) {
				this.nodeName == 'A' ? e.preventDefault() : null;
				buiToggleActive == true ? buiToggleGeneralInactivated() : buiToggleGeneralActivated();
				settings.eventCallBack.call($this, buiToggleActive);
			});
			
			/**
			 * general
			 */
			var buiToggleGeneralActivated = function() {
				buiToggleActivation();
				buiToggleButton.addClass(settings.activeClass);
				buiToggleTarget.addClass(settings.activeClass);
				
				settings.focusin == true ? buiToggleFocusinActivated() : null;
				settings.close == true ? buiToggleCloseActivated() : null;
				settings.dimmed == true ? buiToggleDimmedActivated() : null;
				settings.reactTarget != null ? buiToggleReactTargetActivated() : null;
				settings.activeCallBack.call($this);
				
				settings.focusout == true ? buiToggleFocusout() : null;
			};
			
			/**
			 * clickout
			 */
			if(settings.clickout == true) {
				// comboBox targetout
				$(document).mouseup(function(event) {
					if(buiToggleActive == true) {
						if($(event.target).closest(buiToggleTarget).length === 0) {
							buiToggleGeneralInactivated();
						};
					};
				});
			};
			
			var buiToggleGeneralInactivated = function() {
				buiToggleActivation();
				buiToggleButton.removeClass(settings.activeClass);
				buiToggleTarget.removeClass(settings.activeClass);
				
				settings.focusin == true ? buiToggleFocusinInactivated() : null;
				settings.close == true ? buiToggleCloseInactivated() : null;
				settings.dimmed == true ? buiToggleDimmedInactivated() : null;
				settings.reactTarget != null ? buiToggleReactTargetInactivated() : null;
				settings.inactiveCallBack.call($this);
			};
			
			/**
			 * close
			 */
			if(settings.close == true) {
				var buiToggleClose = $('<button type="button" class="' + settings.closeButtonClass + '"></button>');
				var buiToggleCloseText = settings.closeButtonText;
				buiToggleClose.append(buiToggleCloseText);
				
				
				buiToggleTarget.append(buiToggleClose);
				buiToggleClose.bind(settings.event, function(e) {
					buiToggleGeneralInactivated();
					settings.eventCallBack.call($this);
				});
			};
			
			var buiToggleReactTargetActivated = function() {
				settings.reactTarget.addClass(settings.reactTargetActiveClass);
			};
			
			var buiToggleReactTargetInactivated = function() {
				settings.reactTarget.removeClass(settings.reactTargetActiveClass);
			};
			
			/**
			 * focusin
			 */
			var buiToggleFocusinActivated = function() {
				buiToggleButton.removeAttr('tabindex');
				buiToggleTarget.attr('tabindex', '0').focus();
			};
			
			var buiToggleFocusinInactivated = function() {
				buiToggleButton.attr('tabindex', '0').focus();
				buiToggleTarget.removeAttr('tabindex');
			};
			
			/**
			 * focusout
			 */
			var buiToggleFocusout = function() {
				// focusout
				buiToggleTarget.children().bind('focusout', function() {
					setTimeout(function(){
						console.log('focus out');
						if(buiToggleTarget.find(':focus').length == 0) {
							buiToggleGeneralInactivated();
						}
					}, 1);
				});
			};
			
			var buiToggleCloseActivated = function() {
				
			};
			var buiToggleCloseInactivated = function() {
				
			};
			
			/**
			 * dimmed
			 */
			var buiToggleDimmedActivated = function() {
			};
			var buiToggleDimmedInactivated = function() {
			};
		});
		return this;
	};
	
	
	/**
	 * buiNavigations
	 */
	$.fn.buiNavigations = function(options){
		var defaults  = {
				/* general */
				mode: 'navigation',
				activeItem: '.lnb-item',
				currentClass: 'current',
				activeClass: 'active',
		};
		
		return this.each(function() {
			var settings = $.extend({}, defaults, options);
			var $nav = $(this);
			var $item = $(this).find('a');
			var $itemTemp = $(this).find(settings.activeItem);
			var $current = $(this).find(settings.activeItem + '.' + settings.currentClass);
			
			
			$item.bind('focusin', function() {
				$(this).parents(settings.activeItem).addClass(settings.activeClass).siblings(settings.activeItem).removeClass(settings.activeClass);
				$current.removeClass(settings.currentClass);
			});
			
			$item.bind('focusout', function() {
				setTimeout(function(){
					if($nav.find('a:focus').length == 0) {
						$item.parents(settings.activeItem).removeClass(settings.activeClass);
						$current.addClass(settings.currentClass);
					}
				}, 1);
			});
			
			$itemTemp.bind('mouseover', function() {
				$current.removeClass(settings.currentClass);
				$(this).addClass(settings.activeClass).siblings(settings.activeItem).removeClass(settings.activeClass);
			});
			
			$nav.bind('mouseleave', function() {
				$itemTemp.removeClass(settings.activeClass);
				$current.addClass(settings.currentClass);
			});
		});
	};
	
	/**
	 * buiTree
	 */
	$.fn.buiTree = function(options){
		var defaults  = {
				/* general */
				mode: 'navigation',
				item: 'li',
				name: 'a',
				list: 'ul',
				currentClass: 'current',
				activeClass: 'active',
				fullClose: false,
				accordion: false,
				button: true,
				buttonElement: '<button class="btn fold"><span class="text">열기</span></button>',
				buttonTextInactive: '열기',
				buttonTextActive: '닫기'
		};
		
		return this.each(function() {
			var settings = $.extend({}, defaults, options);
			var $tree = $(this);
			
			$tree.find(settings.item).each(function(i) {
				var $item = $(this);
				var $head = $(this).children(settings.name);
				var $list = $(this).find(settings.list);
				var $fold = $(settings.buttonElement);
				
				if($list.length > 0) {
					$item.prepend($fold);
					
					if ($item.hasClass(settings.activeClass)) {
						$item.parents(settings.item).addClass(settings.activeClass).children($fold.prop('tagName')).contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextActive);
						$fold.contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextActive);
					} else {
						$fold.contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextInactive);
					};
					
					$fold.bind('click', function() {
						$item.hasClass(settings.activeClass) ? buiTreeInactivated() : buiTreeActivated();
					});
				};
				
				var buiTreeActivated = function() {
					$item.addClass(settings.activeClass);
					$fold.contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextActive);
					
					if(settings.accordion === true) {
						$item.siblings(settings.item).removeClass(settings.activeClass).find(settings.item).removeClass(settings.activeClass);
					};
				};
				
				var buiTreeInactivated = function() {
					if(settings.fullClose === true) {
						$item.removeClass(settings.activeClass).children($fold.prop('tagName')).contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextInactive);
						$item.find(settings.item).removeClass(settings.activeClass).children($fold.prop('tagName')).contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextInactive);
					} else {
						$item.removeClass(settings.activeClass);
						$fold.contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextInactive);
					};
				};
			});
		});
	};
	
	/**
	 * buiFold
	 */
	$.fn.buiFold = function(options){
		var defaults  = {
				/* general */
				mode: 'navigation',
				item: '.fold-item',
				name: '.fold-head',
				initial: null,
				currentClass: 'current',
				activeClass: 'active',
				fullClose: false,
				accordion: false,
				button: true,
				buttonElement: '<button class="btn fold"><span class="text">열기</span></button>',
				buttonTextInactive: '열기',
				buttonTextActive: '닫기'
		};
		
		return this.each(function() {
			
			var settings = $.extend({}, defaults, options);
			var $elem = $(this);
			
			$elem.find(settings.item).each(function(i) {
				var $item = $(this);
				var $head = $(this).children(settings.name);
				var $fold = $(settings.buttonElement);
				
				$head.after($fold);
				
				if ($item.hasClass(settings.activeClass)) {
					$item.parents(settings.item).addClass(settings.activeClass).children($fold.prop('tagName')).contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextActive);
					$fold.contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextActive);
				} else {
					$fold.contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextInactive);
				};
				
				$fold.bind('click', function() {
					$item.hasClass(settings.activeClass) ? buiTreeInactivated() : buiTreeActivated();
				});
				
				var buiTreeActivated = function() {
					$item.addClass(settings.activeClass);
					$fold.contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextActive);
					
					if(settings.accordion === true) {
						$item.siblings(settings.item).removeClass(settings.activeClass).find(settings.item).removeClass(settings.activeClass);
					};
				};
				
				var buiTreeInactivated = function() {
					if (settings.fullClose === true) {
						$item.removeClass(settings.activeClass).children($fold.prop('tagName')).contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextInactive);
						$item.find(settings.item).removeClass(settings.activeClass).children($fold.prop('tagName')).contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextInactive);
					} else {
						$item.removeClass(settings.activeClass);
						$fold.contents().filter(function() {return this.noteType != 1;}).text(settings.buttonTextInactive);
					};
				};
			});
		});
		return this;
	};
	
	/**
	 * buiTab
	 */
	$.fn.buiTab = function(options){
		var defaults = {
				/* general */
				mode: 'normal',								/* 'none', 'horizontal', 'vertical', 'fade' */
				event: 'click',								/* click, hover */
				currentClass: 'current',
				activeClass: 'active',
				
				item: '.tab-item',
				name: '.tab-name',
				data: '.tab-data',
				
				initial: null,
				
				/* target */
				target: null,								/* href, next, prev, parent, jQuery Selector */
				targetClass: 'bui-tab-target',				/* string */
				targetActiveClass: 'active',				/* string */
				
				/* callback */
				onloadCallBack: function() { return true; },
				eventCallBack: function() { return true; },
				activeCallBack: function() { return true; },
				inactiveCallBack: function() { return true; }
		};
		
		/* inside the plugin */
		return this.each(function() {
			if (this.length === 0) {
				return this;
			};
			
			var settings = $.extend({}, defaults, options);
			var $item = $(this).find(settings.item);
			var $name = $(this).find(settings.name);
			
			$name.each(function(i) {
				var $target = $(this.getAttribute('href'));
				$target.addClass(settings.targetClass);
				if(settings.initial != null) {
					var $current = settings.initial;
					$item.removeClass(settings.currentClass).eq($current).addClass(settings.currentClass);
					$($name.eq($current).attr('href')).addClass(settings.activeClass);
				};
				
				$(this).bind('click', function(e) {
					this.nodeName == 'A' ? e.preventDefault() : null;
					$item.removeClass(settings.currentClass).eq(i).addClass(settings.currentClass);
					$target.addClass(settings.activeClass).siblings($target).removeClass(settings.activeClass);
				});
			});
		});
		return this;
	};
	
	$.fn.buiTabs2 = function(options){
		var defaults = {
				/* general */
				mode: 'normal',								/* 'none', 'horizontal', 'vertical', 'fade' */
				event: 'click',								/* click, hover */
				activeClass: 'active',						/* string */
				currentClass: 'current',
				
				initial: 0,
				
				item: '.tab-item',
				name: '.tab-name',
				
				
				data: '.slide-item',
				slideItem: '.slide-item',
				
				/* target */
				target: null,								/* href, next, prev, parent, jQuery Selector */
				targetClass: 'bui-toggle-target',			/* string */
				targetActiveClass: 'active',				/* string */
				
				/* pager */
				pager: true,
				pagerItem: 'pager-item',
				pagerName: 'pager-name',
				
				/* callback */
				onloadCallBack: function() { return true; },
				eventCallBack: function() { return true; },
				activeCallBack: function() { return true; },
				inactiveCallBack: function() { return true; }
		};
		
		/* inside the plugin */
		return this.each(function() {
			if (this.length === 0) {
				return this;
			};
			
			var settings = $.extend({}, defaults, options);
			var $this = this;
			var $elem = $(this);
			var $item = $(this).find(settings.item);
			var $name = $(this).find(settings.name);
			var $data = $(this).find(settings.data);
			
			
			var $current = settings.initial;
			
			
			var $pagerItem = $(this).find(settings.pagerItem);
			var pagination = $('<div class="pagination"></div>');
			
			
			$item.eq($current).addClass(settings.currentClass);
			$data.eq($current).addClass(settings.currentClass);
			

			
			var tabPagination = function(index) {
				var temp2 = $('<button type="button" class="' + settings.pagerItem +'">' + (index + 1) + '</button>');
				$elem.append(temp2);
			};
			
			$name.each(function(i) {
				tabPagination(i);
				$name.eq(i).bind('click', function() {
					
					$current = i;
					
					tabActivated($item, i);
					tabActivated($elem.find(settings.slideItem), i);
					tabActivated($pagerItem, i);
					
					alert(i + 1);
				});
			});
			
			var tabActivated = function(elem, index) {
				elem.removeClass(settings.currentClass).eq(index).addClass(settings.currentClass);
			};
		});
		return this;
	};
	
	
	/**
	 * buiForm
	 */
	$.fn.buiForm = function(options){
		var defaults = {
				/* general */
				form: '.elem',
				type: null
		};
		
		/* inside the plugin */
		return this.each(function() {
			if (this.length === 0) {
				return this;
			};
			
			var settings = $.extend({}, defaults, options);
			var $this = $(this);
			var $form = $(this).find(settings.form);
			
			if($form.prop('tagName') === 'INPUT') {
				if ($form.attr('type') === 'text' || $form.attr('type') === 'password' || $form.attr('type') === 'url') {
					settings.type = 'textfield';
				} else {
					settings.type = $form.attr('type');
				};
			} else {
				settings.type = $form.prop('tagName').toLowerCase();
			};
			
			$this.addClass(settings.type);
			
			/**
			 * form attribute
			 */
			$form.prop('disabled') ? $this.addClass('disabled') : null;
			$form.prop('readonly') ? $this.addClass('readonly') : null;
			
			/**
			 * form event
			 */
			$form.on('mouseover', function() {$this.addClass('mouseover');});
			$form.on('mouseout', function() {$this.removeClass('mouseover');});
			$form.on('focus', function() {$this.addClass('focus');});
			$form.on('focusout', function() {$this.removeClass('focus');});
			$form.on('mousedown', function() {$this.addClass('mousedown');});
			$form.on('mouseup', function() {$this.removeClass('mousedown');});
			
			/**
			 * form text field
			 */
			if(settings.type == 'textfield') {
				$form.val().length > 0 ? $this.addClass('typed') : $this.removeClass('typed');
				$form.on('input',function() {
					$form.val().length > 0 ? $this.addClass('typed') : $this.removeClass('typed');
				});
				
				
				if($this.hasClass('reset')) {
					
					var setButton = $('<button type="button" class="btn reset" style="visibility: hidden;"><span class="text">reset</span></button>');
					$form.after(setButton);
					setButton.on('click', function() {
						$form.val("").focus();
					});
					
					$form.on('focus input',function() {
						$form.val().length > 0 ? setButton.css('visibility', 'visible') : setButton.css('visibility', 'hidden');
					});
					
					$form.on('focusout', function() {
						setTimeout(function() {
							setButton.css('visibility', 'hidden');
						}, 200);
					});
				};
			};
			
			/**
			 * form radio
			 */
			if(settings.type == 'radio') {
				$form.filter(':checked').parent().addClass('checked');
				$form.filter(':not(:checked)').parent().removeClass('checked');
				$form.on('change', function() {
					$(".form input.elem:radio").filter(':checked').parent().addClass('checked');
					$(".form input.elem:radio").filter(':not(:checked)').parent().removeClass('checked');
				});
			};
			
			/**
			 * form checkbox
			 */
			if(settings.type == 'checkbox') {
				$form.is(':checked') ? $this.addClass('checked') : $this.removeClass('checked');
				$form.on('change', function() {
					$form.is(':checked') ? $this.addClass('checked') : $this.removeClass('checked');
				});
			};
			
			/**
			 * form select
			 */
			if(settings.type == 'select') {
			};
			
			/**
			 * form date
			 */
			if(settings.type == 'date') {
				
				if(Detectizr.os.name === 'android' && Detectizr.os.major === '4' && Detectizr.os.minor === '0') {
					$form.prop({
						type: 'text',
						readonly: true
					});
					
					$($form).datepicker({
						dateFormat: 'yy-mm-dd',
						changeMonth: true,
						changeYear: true,
						showMonthAfterYear: true,
						showButtonPanel: true,
						yearRange: "-100:+2",
						currentText: '오늘',
						prevText: '이전',
						nextText: '다음',
						showAnim: null,
						closeText: '닫기',
						dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
						dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
						monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
						monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
						beforeShow: function(input, inst) {
							$('body').addClass('datepicker-active');
						},
						onClose: function () {
							$('body').removeClass('datepicker-active');
						}
//						onSelect: function(dateText, inst) {}
					});
					$('#ui-datepicker-div').wrap('<div class="ui-datepicker-container"></div>');
					
				};
			};
		});
		return this;
	};

	/**
	 * limitedLine
	 */
	$.fn.limitedLine = function(options){
		var defaults = {
				/* general */
				limit: null,
				limitClass: 'limit',
				activeClass: 'active',
				fold: '<button type="button" class="btn spread"></button>',
				
				foldTextInactive: '펼치기',
				foldTextActive: '접기',
				
				/* callback */
				onloadCallBack: function() { return true; },
				eventCallBack: function() { return true; },
				activeCallBack: function() { return true; },
				inactiveCallBack: function() { return true; }
		};
		
		/**
		 * inside the plugin
		 */
		return this.each(function() {
			if (this.length === 0) {
				return this;
			};
			
			var settings = $.extend({}, defaults, options);
			var $this = $(this);
			var $lineHeight = $this.css('line-height').replace('px', '');
			var $limit = settings.limit;
			
			var $button = $(settings.fold);
			
			
			$button.html(settings.foldTextActive);
			
			var toggleActive = false;
			var toggleActivation = function() {
				toggleActive = !toggleActive;
				return toggleActive;
			};
			
			if (Math.floor($this.outerHeight()) > ($limit * $lineHeight)) {
				
				$this.after($button);
				
				var activated = function() {
					$button.removeClass(settings.activeClass).html(settings.foldTextInactive);
					$this.addClass(settings.limitClass).removeAttr('style');
					toggleActivation();
				};
				
				var inactivated = function() {
					$button.addClass(settings.activeClass).html(settings.foldTextActive);
					$this.addClass(settings.limitClass).attr('style', 'height: ' + ($limit * $lineHeight) + 'px; overflow: hidden; text-overflow: ellipsis; word-wrap: break-word; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ' + settings.limit);
					toggleActivation();
				};
				
				toggleActive == true ? activated() : inactivated();
				
				$button.bind('click', function(e) {
					toggleActive == true ? activated() : inactivated();
				});
			};
		});
		return this;
	};
})(jQuery);
