$(document).ready(function() {
 

	$(".card_image").click(function () {
		$(this).fadeTo("slow", 0.33);
	});
	$(".bottom_button").mouseenter(function () {
		$("p").toggle("slow");
	});
	$("#image").click(function () {
		$(this).slideUp("slow", function () {
			// Animation complete.
		});
	});
}); 