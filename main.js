
var hInterval = 0;

$(document).ready(function()
{
	$('li[data-content]').bind('click', function(event) {
		var url = $(this).attr('data-content');
		clearInterval(hInterval);
		$.ajax( {
			url: url,
			dataType: "html",
			success: function(data) {
				$("#example1").smartupdaterStop();
				$('#content').empty().html(data);
			}
		});	
		
	});
	
	$('#content').empty().load("content/overview.html");

});

function updateStatus(mode)
{
	var statusSU = document.getElementById("statusSU");
	if(statusSU) {
			$("#statusSU").html($("#example1")[0].smartupdaterStatus.state);
	} else {
		clearInterval(hInterval);
	}
}

function updateTimeoutStatus(mode)
{
	var statusSU = document.getElementById("statusSU");
	if(statusSU) {
			$("#statusSU").html($("#example1")[0].smartupdaterStatus.timeout);
	} else {
		clearInterval(hInterval);
	}
}
