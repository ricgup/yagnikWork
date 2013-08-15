/*mobile nav*/

function mobileNav() {
	$(".mobileMenu").on("click", function(){
		console.log("u clicked me");
		var state = $(this).parents().find(".mainNav").css("display");
		if(state === "block") {
			$(".mainNav").slideUp("slow");
		} else {
			$(".mainNav").slideDown("slow");
		}
		event.preventDefault();
	})
}

$(document).ready(function() {
	mobileNav();
})