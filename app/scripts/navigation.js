$(document).ready(function(){

	$('#navigationMenu li a').each(function(){

		$(this).before($(this).clone().removeClass().addClass('hoverMenu'));

	});
	
	$('#navigationMenu li').hover(function(){
		if($(this).find('a.normalMenu').length != 0)
			$(this).find('.hoverMenu').stop().animate({marginTop:'0px'},200);
	},
	
	function(){
	
		$(this).find('.hoverMenu').stop().animate({marginTop:'-40px'},200);

	});
});
