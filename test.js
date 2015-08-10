
$(document).ready(function(){

	var $urlList  = $('#urllist'),
		$alert    = $('.alert'),
		$display  = $('#display'),
		$ajaxSpinner = $('.ajax-spinner');

	$ajaxSpinner.hide();

	$urlList.on('change', function(e){
		var url = $urlList.val();

		$alert.hide();
		$display.html('');

		ajaxWrapper('GET',null,url,function(resp){
			if(resp.code === 200)
			{
				$display.html(resp.data);
				//render the data here
				//resp.data
				//resp.msg
			} else {
				//show some error
				$alert.show();
				$alert.html(resp.msg);
			}
		});
	});
});

//typeof data != 'undefined' ? data : null


function ajaxWrapper(method,data,url, sc, ec) {
	$ajaxSpinner.show();
	$.ajax({
		method: method,
		url: url,
		data: data,
		dataType: 'jsonp',
		success: function(resp){
			$ajaxSpinner.hide();
			if(sc)
			{
				sc(resp);
			}
		},
		error: function(resp){
			ajaxSpinner.hide();
			if(ec)
			{
				ec(resp);
			}
		}
	});
}



/*
	first create click event for select element
	var 
	on click
		turn off alerts on every click
		collect current selected value
		make ajax request
			on success
				display data
			on error
				display error message, show something else

*/












