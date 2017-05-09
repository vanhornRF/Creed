$( document ).ready(function() {
	$('.nav-main .nav-item').click(function(event) {
		$(this).toggleClass("active");
	});
});