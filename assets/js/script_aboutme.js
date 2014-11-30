$(document).ready(function(){

	$('#dance').click(function(){
		 
		 $('#box-1').fadeIn(500);
	});

	$('#prof').click(function(){
		 
		 $('#box-2').fadeIn(500);
	});
	
	$('#llama').click(function(){
			 
		$('#box-3').fadeIn(500);
	});

	$('#america').click(function(){
			 
		$('#box-4').fadeIn(500);
	});

	$('#dance').hover(function(){

		 $('#dance').height(300).width(300);
		},function(){
			$('#dance').height(250).width(250);

	});


	$('#background-img').click(function(){
		 
		 $('#box-1').fadeOut(500);
		 $('#box-2').fadeOut(500);
		 $('#box-3').fadeOut(500);
		 $('#box-4').fadeOut(500);

	});


		
	$('#circle-1').hover(function(){

		 $('#circle-1').height(300).width(300);
		},function(){
			$('#circle-1').height(250).width(250);
		

	});

$('#prof').hover(function(){

		 $('#prof').height(300).width(300);
		},function(){
			$('#prof').height(250).width(250);

	});
		
	$('#circle-2').hover(function(){

		 $('#circle-2').height(300).width(300);
		},function(){
			$('#circle-2').height(250).width(250);
		

	});

$('#llama').hover(function(){

		 $('#llama').height(300).width(300);
		},function(){
			$('#llama').height(250).width(250);

	});
		
	$('#circle-3').hover(function(){

		 $('#circle-3').height(300).width(300);
		},function(){
			$('#circle-3').height(250).width(250);
		

	});

$('#america').hover(function(){

		 $('#america').height(300).width(300);
		},function(){
			$('#america').height(250).width(250);

	});
		
	$('#circle-4').hover(function(){

		 $('#circle-4').height(300).width(300);
		},function(){
			$('#circle-4').height(250).width(250);
		

	});
$('#prof').click(function(){
	$('#two').text('');

});

$('#llama').click(function(){
	$('#three').text('');

});

$('#dance').click(function(){
	$('#one').text('');

});

$('#america').click(function(){
	$('#four').text('');

});


});
	





















