var HMOKABUI = {
	buiCategory: function (){
		var snippetList = ["markup", "typography", "form", "button", "tabs", "interaction"];
//		var snippetList = ["markup", "typography", "form", "button", "table", "tabs", "controller", "post"];
		
		// library list
		var snippetListItems = $("<ul></ul>");
		$(snippetList).each(function(i){
			var items = $("<li><a href='" + snippetList[i] + ".html'>" + snippetList[i] +"</a></li>");
			snippetListItems.append(items);
		});
		$("#gnb li:nth-child(1)").append(snippetListItems);
		
		// index page item shortcut
		var snippetListItems = $("<ul></ul>");
		$(snippetList).each(function(i){
			var items = $("<li><a href='" + snippetList[i] + ".html'>" + snippetList[i] +"</a></li>");
			snippetListItems.append(items);
		});
		$("#uiLibrary").append(snippetListItems).find("ul").addClass("nav theme-bui");
		
		
		// current page
		var currentPageName = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.lastIndexOf("/") + 20);
		$('#gnb li a').each(function(){
			var thisPage = $(this).attr('href');
			if(thisPage == currentPageName){
				$(this).parents('li').addClass("active").siblings('li').removeClass("active");
			};
		});
	},
	
	markupItem: "#markupList tbody tr",
	markupList: function() {
		$(HMOKABUI.markupItem).each(function(i) {
			
			var markupDirectory = $(this).find("td").eq(-3).text();
			var markupScreenID = $(this).find("td").eq(-2).text();
			var markupState = $(this).find("td").eq(-1).attr("title");
			
			if($(this).find("td").eq(-1).children().size() < 1) {
				if(markupState == "진행") {
					var snippet = document.createElement('a');
					var snippetInner = document.createElement('span');
					var snippetText = document.createTextNode('진행');
					
					snippetInner.appendChild(snippetText);
					snippet.appendChild(snippetInner);
					
					snippet.setAttribute('href', '../../../html/mobilehome/' + markupDirectory + '/' + markupScreenID + '.html');
					snippet.setAttribute('target', '_blank');
					snippet.className = 'btn theme-a state-b x-small';
					
					$(this).find("td").eq(-1).append(snippet);
					
//					$(this).find("td").eq(-1).wrapInner('<a target="_blank" href="http://validator.w3.org/check?uri=http://175.125.20.78:8702/personal/html/' + directory + '/' + screenID + '.html"></a>');
				}
				
				if(markupState == "완료") {
					var snippet = document.createElement('a');
					var snippetInner = document.createElement('span');
					var snippetText = document.createTextNode('완료');
					
					snippetInner.appendChild(snippetText);
					snippet.appendChild(snippetInner);
					
					snippet.setAttribute('href', '../../../html/mobilehome/' + markupDirectory + '/' + markupScreenID + '.html');
					snippet.setAttribute('target', '_blank');
					snippet.className = 'btn theme-a state-c x-small';
					
					$(this).find("td").eq(-1).append(snippet);
				}
				
				if(markupState == "변경") {
					var snippet = document.createElement('a');
					var snippetInner = document.createElement('span');
					var snippetText = document.createTextNode('변경');
					
					snippetInner.appendChild(snippetText);
					snippet.appendChild(snippetInner);
					
					snippet.setAttribute('href', '../../../html/mobilehome/' + markupDirectory + '/' + markupScreenID + '.html');
					snippet.setAttribute('target', '_blank');
					snippet.className = 'btn theme-a state-c x-small';
					
					$(this).find("td").eq(-1).append(snippet);
				}
			}
		});
	},
	
	/**
	 * markup progress
	 */
	markupProgressCheck: function() {
		
		var dataPanel = $("<div class='data-panel theme-bui'></div>");
		
		var pageCount = $("<span class='page-count'></span>");
		var countTotal = $("<span class='count-total'>전체 " + $('#markupList tbody tr').size() + "</span>");
		var countUndefined = $("<span class='count-inprogress'>미정 " + $("td[title=미정").size() + "</span>");
		var countInprogress = $("<span class='count-inprogress'>진행 " + $("td[title=진행").size() + "</span>");
		var countDone = $("<span class='count-done'>완료 " + ($("td[title=완료").size() + $("td[title=변경").size()) + "</span>");
		
		pageCount.append(countTotal);
		pageCount.append(countUndefined);
		pageCount.append(countInprogress);
		pageCount.append(countDone);
		
		
		var dataController = $("<span class='data-controller'></span>");
		var btnOpenAll = $("<button type='button' class='btn theme-a small state-a'><span>전체 페이지 열기</span></button>");
		dataController.append(btnOpenAll);
		
		
		dataPanel.append(pageCount);
		dataPanel.append(dataController);
		$('#markupList').before(dataPanel);
		
		btnOpenAll.click(function() {
			oepnLink('markupList');
		});
		
		
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
HMOKABUI.buiCategory();
HMOKABUI.markupList();
HMOKABUI.markupProgressCheck();

// SyntaxHighlighter
SyntaxHighlighter.config.bloggerMode = true;
SyntaxHighlighter.defaults['toolbar'] = false;
SyntaxHighlighter.all();