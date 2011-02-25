
hInterval = null; //timeInterval handler

$(document).ready(function()
{
	$('li[data-content]').bind('click', function(event) {
		window.clearInterval(hInterval);
		hInterval=null;
		$("#example1").smartupdaterStop();
		var url = $(this).attr('data-content');
		
		$.ajax( {
			url: url,
			dataType: "html",
			success: function(data) {
				window.clearInterval(hInterval);
				$('#content').empty().html(data);
			}
		});	
		
	});
	
	$('#content').empty().load("content/overview.html");
	

});

