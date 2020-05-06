$(document).ready(function(){
	$('.services_statics__title').click(function(event){
		if($('.services_statics').hasClass('one')){
			$('.services_statics__title').not($(this)).removeClass('acnive');
			$('.services_statics__content').not($(this).next()).slideUp('300');
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	 $('.about_us__slider').slick({
                vertical: true,
                verticalSwiping: true,
                slidesToShow: 2,
                autoplay: true,
            });

});
