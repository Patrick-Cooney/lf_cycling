$(document).ready(function(){
	width = window.innerWidth;
	height = window.innerHeight;
	$("#mainContent").css("top", height);
	$(".videoOverlay").css("height", height);

	$( window ).resize(function() {
	  	width = window.innerWidth;
		height = window.innerHeight;
		$("#mainContent").css("top", height);
		$(".videoOverlay").css("height", height);
	});

	$('#faq h2').click(function() {

        $(this).next('.answer').slideToggle(400);
        $(this).toggleClass('close');

    });
});