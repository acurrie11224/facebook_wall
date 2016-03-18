$(document).ready(function()
{
	$('#message').focus();
	$("#post-btn").click(function(){
		var button = $("#message").val();
	$('#wall').append("<img src='http://www.scass.ae/en/About1/PublishingImages/Pages/staff/nophoto.jpg'><div>"+button+"</div>");
	})
$('#wall').float("left");
});
