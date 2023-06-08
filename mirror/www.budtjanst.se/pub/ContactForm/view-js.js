function Validate(){
	var bolValid = true;
	var val1 = $('#HiddenCheckInput1').val();
	var val2 = $('#HiddenCheckInput2').val();
	$('#HiddenCheckInput1').val(val2);
	$('#HiddenCheckInput2').val(val1);
	$('#mContactForm').find('input, textarea').each(function(){
		var strId = $(this).attr('id');
		var strVal = $(this).val();
		if(strId == 'ContactFormChecker' || strId == 'HiddenCheckInput1' || strId == 'HiddenCheckInput2' || strId == 'HiddenCheckInput3' || strId == 'HiddenCheckInput4'){
			if(strId == 'ContactFormChecker' && strVal != '1'){
				bolValid = false;
			}
			if(strId == 'HiddenCheckInput1' && strVal != ''){
				bolValid = false;
			}
			if(strId == 'HiddenCheckInput2' && strVal != 'AutoFill'){
				bolValid = false;
			}
		}
		else{
			if(($(this).attr('type') == 'text' && strVal == '') || ($(this).is('textarea') && strVal == '')){
				bolValid = false;
			}
		}
	});
	if(bolValid){
		return true;
	}
	else{
		$('#contactFormErrorSpan').html($("#contactFormErrorNotCompleteMessage").val());
		return false;
	}
}

function BindSubmitCheck(){
	$('#mContactForm').bind('submit', function(e){
		if(!Validate()){
			return false;
		}
		else{
			return true;
		}
	});
}

$(document).ready(function(){
	BindSubmitCheck();
});