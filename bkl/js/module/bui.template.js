var onloadSet = {
		language: document.getElementsByTagName('html')[0].getAttribute('lang'),
		siteName: $('head title'),
		serviceName: $('#serviceName'),
		contentName: $('#contentName'),
		
		setTitle: function() {
			if (onloadSet.contentName.length > 0) {
				$('head title').text(onloadSet.contentName.text().toUpperCase() + ' - ' + onloadSet.siteName.text().toUpperCase());
			} else {
				$('head title').text(onloadSet.siteName.text().toUpperCase());
			};
		},
		
		setFavicon: function() {
			if(Detectizr.os.name === 'ios') {
				$('head').append('<link rel="apple-touch-icon-precomposed" sizes="180x180" href="./../../img/global/favicon_180x180.png" />');
			} else if(Detectizr.os.name === 'android') {
				$('head').append('<link rel="apple-touch-icon-precomposed" href="./../../img/global/favicon_152x152.png" />');
				$('head').append('<link rel="icon" sizes="196x196" href="./../../img/global/favicon_196x196.png" />');
			} else {
				$('head').append('<link rel="shortcut icon" href="./../../img/global/favicon.png" />');
			};
		},
		
		setScroll: function() {
			$(window).scroll(function() {
				var temp = parseFloat(getComputedStyle(document.querySelector('body'))['font-size']) * 4;
				$(window).scrollTop() > 0 ? $('body').addClass('scroll-start') : $('body').removeClass('scroll-start');
				$(window).scrollTop() > temp ? $('body').addClass('active-scroll-top') : $('body').removeClass('active-scroll-top');
			});
		},
		
		init: function() {
			onloadSet.setTitle();
			onloadSet.setFavicon();
			onloadSet.setScroll();
			
			setTimeout(function() {
				$('body').addClass('onload');
			}, 100);

		}
};
onloadSet.init();

/**
 * @requires bui.js
 * @module buiToggle
 * @contents layout
 */
$('.page-control .item.menu').buiToggle({
	close: true,
	closeButtonClass: 'btn close',
	closeButtonText: function() {
		if (onloadSet.language == 'ko') {
			return '<span class="text">닫기</span>';
		} else {
			return '<span class="text">close</span>';
		};
	},
	reactTarget: $('body'),
	reactTargetActiveClass: 'active-aside'
});

/**
 * @requires bui.js
 * @module buiToggle
 * @contents layout
 */
$('.post-search .form').buiForm();

/**
 * @requires bui.js
 * @module buiToggle
 * @contents select language
 */
$('.page-control .item.language').buiToggle({
	clickout: true
});

/**
 * @requires bui.js
 * @module buiToggle
 * @contents Posts Search
 */
$('.page-control .item.search').buiToggle({
	close: true,
	closeButtonClass: 'btn close',
	closeButtonText: function() {
		if (onloadSet.language == 'ko') {
			return '<span class="text">닫기</span>';
		} else {
			return '<span class="text">close</span>';
		};
	},
	activeCallBack: function() {
		$('#searchTag').focus();
	}
});

/**
 * @requires bui.js
 * @module buiToggle
 * @contents go to top scrolling
 */
$('#scrollTop').bind('click', function(e) {
	e.preventDefault();
	$(window).scrollTop(0);
});

/**
 * @requires bui.js
 * @module buiForm
 * @contents global
 */
$('.form.theme-a').buiForm();

/**
 * @requires bui.js
 * @module buiTree
 * @contents global
 */
$('.bui-tree').buiTree({
	fullClose: true,
	buttonTextInactive: function() {
		if (onloadSet.language == 'en') {
			return 'unfold';
		};
	},
	buttonTextActive: function() {
		if (onloadSet.language == 'en') {
			return 'fold';
		};
	}
});

/**
 * @requires bui.js
 * @module buiFold
 * @contents global
 */
$('.fold-list').buiFold({
	item: '.info-item',
	name: '.info-item-name',
	buttonTextInactive: function() {
		if (onloadSet.language == 'en') {
			return 'unfold';
		};
	},
	buttonTextActive: function() {
		if (onloadSet.language == 'en') {
			return 'fold';
		};
	}
});

/**
 * @requires bui.js
 * @module buiToggle
 * @contents COMM.01.00.00.00.html
 */
$('.open-popup-a').buiToggle({
	reactTarget: $('body'),
	reactTargetActiveClass: 'active-popup',
	close: true,
	closeButtonClass: 'btn close',
	closeButtonText: function() {
		if (onloadSet.language == 'ko') {
			return '<span class="text">닫기</span>';
		} else {
			return '<span class="text">close</span>';
		};
	}
});

/**
 * @requires bui.js
 * @module buiToggle
 * @contents COMM.01.00.00.00
 */
$('.btn.share.url').buiToggle();


/**
 * @requires bui.js
 * @module limitedLine
 * @contents global
 */
$('.related-info .character-limit').limitedLine({
	limit: 3,
	foldTextActive: function() {
		if (onloadSet.language == 'ko') {
			return '<span class="text">더보기</span>';
		} else {
			return '<span class="text">View more</span>';
		};
	},
	foldTextInactive: function() {
		if (onloadSet.language == 'ko') {
			return '<span class="text">접기</span>';
		} else {
			return '<span class="text">View less</span>';
		};
	}
});


/**
 * @requires bui.js
 * @module limitedLine
 * @contents PROF.01.01.01.00
 */
$('.member-profile .post-read .character-limit').limitedLine({
	limit: 3,
	foldTextActive: function() {
		if (onloadSet.language == 'ko') {
			return '<span class="text">더보기</span>';
		} else {
			return '<span class="text">View more</span>';
		};
	},
	foldTextInactive: function() {
		if (onloadSet.language == 'ko') {
			return '<span class="text">접기</span>';
		} else {
			return '<span class="text">View less</span>';
		};
	},
});

/**
 * @requires bui.js
 * @module limitedLine
 * @contents AREA.01.01.00.00
 */
$('.department-detail .post-read .character-limit').limitedLine({
	limit: 10,
	foldTextActive: function() {
		if (onloadSet.language == 'ko') {
			return '<span class="text">더보기</span>';
		} else {
			return '<span class="text">View more</span>';
		};
		
	},
	foldTextInactive: function() {
		if (onloadSet.language == 'ko') {
			return '<span class="text">접기</span>';
		} else {
			return '<span class="text">View less</span>';
		};
	}
});

/**
 * @contents LEGA.01.00.00.00
 */
$('.privacy-policy>ul>li>a').each(function() {
	$(this).bind('click', function(e) {
		var crrentScroll;
		var fontSize = parseInt($('html').css('font-size')) * 5.5;
		
		setTimeout(function() {
			crrentScroll = $(window).scrollTop() - fontSize;
			$(window).scrollTop(crrentScroll);
		}, 1);
	});
});


