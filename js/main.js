$(document).ready(function(){
	smoothScrolling();
	// portfolio();
});

function smoothScrolling(){
	$('a').click(function(){
	   var headerHeight = $("#header").height(); // account for fix header height
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - headerHeight
	    }, 1000);
	    return false;
	});

}

function portfolio(){
	$("#portfolioList li a").live('click', (function(){
		// If the title hasn't been selected yet
		if (!$(this).hasClass('current')){
			var companyIdentifier = $(this).attr('href');
			var contents = $(companyIdentifier).contents().clone();
			var description = $("#companyDesc");

			// $(this).parent().find("li.current").removeClass('current');
			$(this).addClass("current");

			description.hide().html(contents).fadeIn(500);
		}
	}));
}