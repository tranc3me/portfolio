$(document).ready(function() {

$("li").slideUp(1);

$(".logo , fa-caret-down").click(function(){
	$("li").slideToggle();
});	

$("li").mouseover(function(){
	$(this).parent().css({"visibility":"visible", "transition": "border-width 0.5s linear"});

		$(this).mouseleave(function(){
		$(this).parent().css("visibility", "hidden");
		});
});	

$(".case1 , .case4").click(function(){
	$(this).fadeOut(2000, function(){
		alert ("There is nothing there,...yet");
	});
	
});	


});

