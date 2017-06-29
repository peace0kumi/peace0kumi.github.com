var LAYOUT = {
		navigations: function() {
			var navCategory = {
				information:	['intro', 'guide'],
				convention:		['html', 'css'],
				snippet:		['font', 'form', 'button', 'list', 'table', 'tabs', 'options', 'fieldset', 'display', 'controller', 'posts', 'toggle'],
				progress:		['front']
			};
			
			var oneDepth = $('<ul class="lnb" id="lnb"></ul>');
			
			for (var key in navCategory) {
				var oneDepthItem = $('<li class="lnb-item"><a class="lnb-item-name" href="./../' + key + '/' + navCategory[key][0] + '.html">' + key +'</a></li>');
				oneDepth.append(oneDepthItem);
				
				var twoDepth = $('<ul class="snb"></ul>');
				var twoDepthContainer = $('<div class="sub-navigations"></div>');
				
				for (var i = 0; i < navCategory[key].length; i++) {
					var twoDepthItem = $('<li class="snb-item"><a class="snb-item-name" href="./../' + key + '/' + navCategory[key][i] + '.html">' + navCategory[key][i] + '</a></li>');
					twoDepth.append(twoDepthItem);
				}
				
				twoDepthContainer.append(twoDepth);
				oneDepthItem.append(twoDepthContainer);
			}
			$('#lcoalNavigations').append(oneDepth);
		},
		
		currentActive: function() {
			var currentPageName = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.lastIndexOf('/') + 20);
			$('#lcoalNavigations a').each(function(){
				var thisPage = $(this).attr('href');
				
				if(thisPage.substring(thisPage.lastIndexOf('/') + 1) == currentPageName){
					$(this).parents('li').addClass('current').siblings('li').removeClass('current');
				};
			});
		}
};

LAYOUT.navigations();
LAYOUT.currentActive();

var FRONTUI = {
	markupList: function() {
		
		/**
		 * markup List
		 */
		$('#markupList tbody tr').each(function(i) {
			var markupServer = "http://211.36.21.97:8082";
			var markupDirectory = $(this).find('td').eq(-3).text();
			var markupScreenID = $(this).find('td').eq(-2).text();
			var markupState = $(this).find('td').eq(-1).attr('title');
			var markupStateClass = 'state-a';
			
			if($(this).find('td').eq(-1).children().size() < 1) {
				(markupState == '미정') ? markupStateClass = 'state-a' : null;
				(markupState == '진행') ? markupStateClass = 'state-b' : null;
				(markupState == '완료') ? markupStateClass = 'state-c' : null;
				(markupState == '삭제') ? markupStateClass = 'state-d' : null;
					
				var snippet = $('<a href="' + '../../../pages/html/' + markupDirectory + '/' + markupScreenID + '.html' + '" target="_blank" class="bui-btn theme-a x-small ' + markupStateClass + '"><span class="text">' + markupState + '</span></a>');
//				var validation = $('<a href="http://validator.w3.org/check?uri=' + markupServer + '/html/' + markupDirectory + '/' + markupScreenID + '.html" target="_blank" class="bui-btn theme-a x-small ' + markupStateClass + '"><span class="text">' + markupState + '</span></a>');
				
				$(this).find('td').eq(-1).append(snippet);
			}
		});
	},
	
	/**
	 * markup progress
	 */
	markupProgressCheck: function() {
		
		var dataPanel = $('<div class="bui-data-panel theme-a"></div>');
		var pageCount = $('<span class="data-count"></span>');
		var countTotal = $('<span class="count-total">전체 ' + $('#markupList tbody tr').size() + '</span>');
		var countUndefined = $('<span class="count-undefined">미정 ' + $('td[title="미정"]').size() + '</span>');
		var countInprogress = $('<span class="count-inprogress">진행 ' + $('td[title="진행"]').size() + '</span>');
		var countDone = $('<span class="count-complete">완료 ' + ($('td[title="완료"]').size() + $('td[title="변경"]').size()) + '</span>');
		
		pageCount.append(countTotal);
		pageCount.append(countUndefined);
		pageCount.append(countInprogress);
		pageCount.append(countDone);
		dataPanel.append(pageCount);
		
		var dataController = $("<span class='data-controller'></span>");
		var btnOpenAll = $("<button type='button' class='bui-btn theme-a x-small state-d'><span class='text'>전체 페이지 열기</span></button>");
		
		dataController.append(btnOpenAll);
		dataPanel.append(dataController);
		
		
		$('#markupList').before(dataPanel);

		
		btnOpenAll.click(function() {
			oepnLink('markupList');
		});
		
		// openLink
		function oepnLink(elem) {
			var n_to_open, dl, dll, i;
			function linkIsSafe(u) {
				if (u.substr(0, 7) == 'mailto:') {
					return false;
				}
				if (u.substr(0, 11) == 'javascript:') {
					return false;
				}
				return true;
			}
			n_to_open = 0;
			
			dl = document.getElementById(elem).getElementsByTagName("a");
			dll = dl.length;
			for (i = 0; i < dll; ++i) {
				if (linkIsSafe(dl[i].href)) {
					++n_to_open;
				}
			}
			if (!n_to_open) {
				alert('no links');
			}
			else {
				if (confirm('Open ' + n_to_open + ' links in new windows?')) {
					for (i = 0; i < dll; ++i) {
						if (linkIsSafe(dl[i].href)) {
							window.open(dl[i].href);
						}
					}
				}
			}
		}
	}
};
//FRONTUI.markupList();
//FRONTUI.markupProgressCheck();

/* SyntaxHighlighter */
SyntaxHighlighter.config.bloggerMode = true;
SyntaxHighlighter.defaults['toolbar'] = false;
SyntaxHighlighter.all();


$('#lnb').buiNavigations({
	activeItem: '.lnb-item'
});
$('.snb').buiNavigations({
	activeItem: '.snb-item'
});


















