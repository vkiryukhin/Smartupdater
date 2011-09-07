
var hInterval = 0;

$(document).ready(function()
{
	$('li[data-content]').bind('click', function(event) {
		var url = $(this).attr('data-content');
		clearInterval(hInterval);
		$('#content').empty();
		
		$.ajax( {
			url: url,
			dataType: "html",
			cache	: false, 
			success: function(data) {
				$('#content').html(data);
			}
		});	
		
		//$('li[data-content]').removeClass("menu_selected");
		//$(this).addClass("menu_selected"); 
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

function toggleApiDetails(obj) {
	var re = /closed/;
	var state = $(obj).css("background-image");
	if (state.search(re) != -1) {
		$(obj).css("background-image",'url("img/demo-spindown-open.gif")');
		$(obj).children(".apiDetails").css("display","block");
	} else {
		$(obj).css("background-image",'url("img/demo-spindown-closed.gif")');
		$(obj).children(".apiDetails").css("display","none");
	}
}