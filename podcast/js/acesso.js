$(document).ready(function(){
	
	var projeto = $('body').attr("projeto");
	var versao = $('body').attr("versao");
	var src = $('body').attr("src");
	var tipo = $('body').attr("tipo");

	$.ajax({
		type   : 'get',
		data   : { projeto:projeto, versao:versao, src:src, tipo:tipo},
		url    : 'https://www.mairovergara.com/ebook/gravaAcesso.php'
	});
	
	$('a[href=#fazercadastro],.fecharJanela').click(function(e){
		e.preventDefault();
		$('.boxJanela').toggleClass("aberta");
    });
	 
});


$(window).load(function() {
   

   $('#ck_subscribe_button').click(function(e){
		var projeto = $('body').attr("projeto");
		var versao = $('body').attr("versao");
		var src = $('body').attr("src");

		var sEmail = $('.ck_email_address').val();		
		var emailFilter=/^.+@.+\..{2,}$/;
		var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
		// condição
		if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
			console.log("erro");//erro
		}else{
			console.log("correto");//correto

			$('#ck_subscribe_button').hide().next().css('display','block');

			var versao = $('body').attr("versao");
			var src = $('body').attr("src");

			var largura = $(window).width();
			var altura = $(window).height();
			var resolucao = largura+' x '+ altura+ ' px'; 
				$.ajax({
				type   : 'get',
				data   : { projeto:projeto, email:sEmail, versao:versao, src:src, tipo:2},
				url    : 'https://www.mairovergara.com/ebook/gravaAcesso.php',
				success: function(data) {
					$("#ck_subscribe_form").submit(); 
				}
			})
		}
   }); //click

});	