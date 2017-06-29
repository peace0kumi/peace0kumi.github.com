var LAYOUT = {
		navigations: function() {
			var navCategory = {
				information:	['intro', 'guide'],
				convention:		['html', 'css'],
				snippet:		['typography', 'form', 'button', 'list', 'table', 'tabs', 'fieldset','display', 'controller', 'post', 'navigation', 'content'],
//				snippet:		['font', 'form', 'button', 'list', 'table', 'tabs', 'options', 'fieldset', 'display', 'controller', 'posts', 'toggle'],
				composition:	['front']
			};
			
			var oneDepth = $('<ul class="lnb-list"></ul>');
			
			for (var key in navCategory) {
				var oneDepthItem = $('<li class="lnb-item"><a class="lnb-name" href="./../' + key + '/' + navCategory[key][0] + '.html">' + key +'</a></li>');
				oneDepth.append(oneDepthItem);
				
				var twoDepthContainer = $('<div class="snb"></div>');
				var twoDepth = $('<ul class="snb-list"></ul>');
				
				for (var i = 0; i < navCategory[key].length; i++) {
					var twoDepthItem = $('<li class="snb-item"><a class="snb-name" href="./../' + key + '/' + navCategory[key][i] + '.html">' + navCategory[key][i] + '</a></li>');
					twoDepth.append(twoDepthItem);
				}
				
				twoDepthContainer.append(twoDepth);
				oneDepthItem.append(twoDepthContainer);
			}
			$('#lnb').append(oneDepth);
		},
		
		currentActive: function() {
			var currentPageName = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.lastIndexOf('/') + 20);
			$('#lnb a').each(function(){
				var thisPage = $(this).attr('href');
				
				if(thisPage.substring(thisPage.lastIndexOf('/') + 1) == currentPageName){
					$(this).parents('li').addClass('current').siblings('li').removeClass('current');
				};
			});
		}
};
LAYOUT.navigations();
LAYOUT.currentActive();

;(function($){
	$.fn.createCategory = function(options){
		var defaults = {
				category: {
					information:	['intro', 'guide'],
					convention:		['html', 'css'],
					snippet:		['typography', 'form', 'button', 'list', 'table', 'tabs', 'fieldset','display', 'controller', 'post', 'navigation', 'conent'],
					composition:	['template', 'front']
				}
		};
		
		//inside the plugin
		return this.each(function() {
			if (this.length === 0) {
				return this;
			};
			
			var settings = $.extend({}, defaults, options);
			var $this = $(this);
			var $current = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.lastIndexOf('/') + 20);
			var oneDepthList = $('<ul class="lnb-list"></ul>');
			
			for (var key in settings.category) {
				
				var oneDepthItem = $('<li class="lnb-item"><a class="lnb-name" href="./../' + key + '/' + settings.category[key][0] + '.html">' + key +'</a></li>');
				oneDepthList.append(oneDepthItem);
				
				var twoDepthContainer = $('<div class="snb"></div>');
				var twoDepthList = $('<ul class="snb-list"></ul>');
				for (var i = 0; i < settings.category[key].length; i++) {
					var twoDepthItem = $('<li class="snb-item"><a class="snb-name" href="./../' + key + '/' + settings.category[key][i] + '.html">' + settings.category[key][i] + '</a></li>');
					twoDepthList.append(twoDepthItem);
				};
				
				twoDepthContainer.append(twoDepthList);
				oneDepthItem.append(twoDepthContainer);
			};
			$this.append(oneDepthList);
			
			
			$this.find('a').each(function(){
				var thisPage = $(this).attr('href');
				if(thisPage.substring(thisPage.lastIndexOf('/') + 1) == $current){
					$(this).parents('li').addClass('current').siblings('li').removeClass('current');
				};
			});
			
		});
		return this;
	};
})(jQuery);

;(function($){
	$.fn.buiMarkup = function(options){
		var defaults = {
				server: "http://211.36.21.97:8082",
				stateClass: 'state-a',
				progress: false
				
		};
		
		//inside the plugin
		return this.each(function() {
			if (this.length === 0) {
				return this;
			};
			
			var settings = $.extend({}, defaults, options);
			var $this = $(this);
			var $item = $(this).find('tbody tr');
			
			$item.each(function(i) {
				markupServer = settings.server;
				markupDirectory = $(this).find('td').eq(-3).text();
				markupScreenID = $(this).find('td').eq(-2).text();
				markupState = $(this).find('td').eq(-1).attr('title');
				
				if($item.find('td').eq(-1).children().length < 1) {
					(markupState == '미정') ? markupStateClass = 'fall-02' : null;
					(markupState == '진행') ? markupStateClass = 'fall-01' : null;
					(markupState == '완료') ? markupStateClass = 'rise-01' : null;
					(markupState == '삭제') ? markupStateClass = 'rise-02' : null;
						
					var snippet = $('<a href="' + '../../../../html/' + markupDirectory + '/' + markupScreenID + '.html' + '" target="_blank" class="btn theme-bui type-a x-small ' + markupStateClass + '"><span class="text">' + markupState + '</span></a>');
//					var validation = $('<a href="http://validator.w3.org/check?uri=' + markupServer + '/html/' + markupDirectory + '/' + markupScreenID + '.html" target="_blank" class="bui-btn theme-a x-small ' + markupStateClass + '"><span class="text">' + markupState + '</span></a>');
					
					$(this).find('td').eq(-1).append(snippet);
				}
			});
			
			if(settings.progress == true) {
				var dataPanel = $('<div class="bui-data-panel theme-a"></div>');
				var pageCount = $('<span class="data-count"></span>');
				var countTotal = $('<span class="count-total">전체 ' + $item.length + '</span>');
				var countUndefined = $('<span class="count-undefined">미정 ' + $this.find('td[title="미정"]').length + '</span>');
				var countInprogress = $('<span class="count-inprogress">진행 ' + $this.find('td[title="진행"]').length + '</span>');
				var countDone = $('<span class="count-complete">완료 ' + ($this.find('td[title="완료"]').length + $this.find('td[title="변경"]').length) + '</span>');
				
				pageCount.append(countTotal);
				pageCount.append(countUndefined);
				pageCount.append(countInprogress);
				pageCount.append(countDone);
				dataPanel.append(pageCount);
				$this.before(dataPanel);
			};
				
				
				
//				var dataController = $("<span class='data-controller'></span>");
//				var btnOpenAll = $("<button type='button' class='btn theme-bui type-a small rise-01'><span class='text'>전체 페이지 열기</span></button>");
//				
//				dataController.append(btnOpenAll);
//				dataPanel.append(dataController);
//				btnOpenAll.click(function() {
//					oepnLink('markupList');
//				});
//				
//				function oepnLink(elem) {
//					var n_to_open, dl, dll, i;
//					function linkIsSafe(u) {
//						if (u.substr(0, 7) == 'mailto:') {
//							return false;
//						}
//						if (u.substr(0, 11) == 'javascript:') {
//							return false;
//						}
//						return true;
//					}
//					n_to_open = 0;
//					
//					dl = document.getElementById(elem).getElementsByTagName("a");
//					dll = dl.length;
//					for (i = 0; i < dll; ++i) {
//						if (linkIsSafe(dl[i].href)) {
//							++n_to_open;
//						}
//					}
//					if (!n_to_open) {
//						alert('no links');
//					}
//					else {
//						if (confirm('Open ' + n_to_open + ' links in new windows?')) {
//							for (i = 0; i < dll; ++i) {
//								if (linkIsSafe(dl[i].href)) {
//									window.open(dl[i].href);
//								}
//							}
//						}
//					}
//				}
		});
		return this;
	};
})(jQuery);


/* SyntaxHighlighter */
SyntaxHighlighter.config.bloggerMode = true;
SyntaxHighlighter.defaults['toolbar'] = false;
SyntaxHighlighter.all();

var windowWidth = 0;
/* LocalNavigationsBar */
if($(window).width() > 960) {
	$('#frame').addClass('desktop');

} else {
	$('#frame').removeClass('desktop');
}
$(window).resize(function() {
	windowWidth = $(window).width();
	
	/* LocalNavigationsBar */
	if(windowWidth > 960) {
		$('#frame').addClass('desktop');
	} else {
		$('#frame').removeClass('desktop');
	}
});

$('#frame.desktop .lnb').buiNavigations({activeItem: '.lnb-item'});
$('#frame.desktop .snb').buiNavigations({activeItem: '.snb-item'});

/* LocalNavigationsBar */
$('.pnb-item.menu').buiToggle({
	reactTarget: $('body'),
	reactTargetActiveClass: 'page-navigations-active'
});

$(window).scroll(function() {
	$(window).scrollTop() > 0 ? $('body').addClass('scroll-start') : $('body').removeClass('scroll-start');
	$(window).scrollTop() > 48 ? $('body').addClass('content-head-hidden') : $('body').removeClass('content-head-hidden');
});

/* LocalNavigationsBar */
$('.tab.theme-bui').buiTab({
	initial: 0
});









