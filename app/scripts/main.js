$( document ).ready(function() {
	$('.nav-main .nav-item').click(function(event) {
		$(this).toggleClass("active");
		$('.dropdown-menu').toggleClass("show");
	});
	$('.sub-menu .dropdown-item').click(function(event){
		$(this).toggleClass("active");
		$('.sub-sub-menu').toggleClass("show");
	});
	$('.sub-sub-menu .dropdown-item').click(function(event){
		$(this).toggleClass("active");
		$(".call-to-action").toggleClass("show");
	});
	$(document).on('click', '.navbar .dropdown-menu', function (e) {
	  e.stopPropagation();
	});
});