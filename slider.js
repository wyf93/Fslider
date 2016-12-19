(function ($) {
	var index = 0;
	var n;
	var setWidth = function () {
		$('.slide-wrapper li').css('height','0')
		$('.slide-wrapper').css({
			'width': $('.banner').width()*(n+1) + 'px'
		});
		console.log("$('.slide-wrapper').css('width'): "+$('.slide-wrapper').css('width'))
		console.log("$('.banner').width()*6 + 'px': "+$('.banner').width()*(n+1) + 'px')
		console.log($('.slide-wrapper').css('width'))
		$('.slide-wrapper li').css({
			'width': $('.banner').width() + 'px'
		});	
		console.log("$('.banner').width() + 'px': "+$('.banner').width() + 'px')
		console.log("$('.slide-wrapper li').width(): "+$('.slide-wrapper li').width())
		console.log('------------------------')
		$('.slide-wrapper li').css('height','auto')
		
	}
	var goPrev = function () {
		if(index == 0) {
			index = n;
			$('.slide-wrapper').css({
				'margin-left': -$('.banner').width()*index + 'px'
			})
			
		}
		index--;
		$('.slide-wrapper').animate({
			'margin-left': -$('.banner').width()*index + 'px'
		},1000);
		
		
	}
	var goNext = function () {
		if(index == n) {
			index = 0;
			$('.slide-wrapper').css({
				'margin-left': '0'
			})
		}
		index++;
		$('.slide-wrapper').animate({
			'margin-left':  -$('.banner').width()*index + 'px'
		}, 1000);	
	}
	$.fn.extend({
		slider: function (opts) {
			var self =$(this);
			n = $('.slide-wrapper .slide').length;
			$('.slide-wrapper').html($('.slide-wrapper').html() + $('.slide-wrapper .slide').first().prop('outerHTML'));
			setWidth();
			$(window).resize(function () {
				setWidth();
			});

			setInterval(function () {
				goPrev();
			},3000);
		}
	});
})(jQuery);