$(document).ready(function(){
	resolucao();

	$('.formkit-submit.btn').click(function(e){
		if (validaEmail($('.formkit-input').val() )) {
			$('.form .enviando').show();
		}else{
			$('.form .enviando').hide();
		}
	});

});

$(window).resize(function(){
	resolucao();
});

function validaEmail(email) {
  var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return regex.test(email);
}


function resolucao(){
	if($(this).width() <= 980){ $('html').addClass('_320'); }else{ $('html').removeClass('_320'); }
	if($(this).width() > 980){    $('html').addClass('_1000');  }else{ $('html').removeClass('_1000'); }	
}