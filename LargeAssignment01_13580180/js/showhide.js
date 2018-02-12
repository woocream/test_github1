$(document).ready(function(){
	$('.showbox').click(function(){
		$('.box').show(200);
		$('.hidebox').show(200);
		$('.showbox').hide(200);

	});
	$('.hidebox').click(function(){
		$('.box').hide(200);
		$('.showbox').show(200);
		$('.hidebox').hide(200);
	});
});