$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	$(".logo").css({
		'transform' : 'translate(0px, '+ wScroll / 2 +'%)'
	});

	$(".back-bird").css({
		'transform' : 'translate(0px, '+ wScroll / 4 +'%)'
	}); 

	$(".fore-bird").css({
		'transform' : 'translate(0px, -'+ wScroll / 40 +'%)'
	});

	if(wScroll > $('.clothes-pics').offset().top - $(window).height() / 1.2) {

		$('.clothes-pics .figure').each(function(i){
			
		setTimeout(function() {
			$('.clothes-pics .figure').eq(i).addClass('is-showing');
			
			}, 120 * (i + 1));

		});

	}

	if (wScroll > $("#window").offset().top - $(window).height()){
		
		$("#window").css({"background-position" : "center "+ (wScroll - $("#window").offset().top) +"px"});

		var opacity = (wScroll - $("#window").offset().top + 400) / (wScroll / 5)

		$("#tint").css({"opacity" : opacity})
	} 
 
});

