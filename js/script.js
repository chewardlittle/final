



$(function() {

	$(".intro").css({opacity:'0.80'});
	$(".header").css({opacity:'0.90'});
	$(".conversation").css({opacity:'0.80'});
	$(".title").css({opacity:'0.80'});
	$(".definition").css({opacity:'0.80'});
	$(".caring").css({opacity:'0.80'});
	$(".postulations").css({opacity:'0.80'});
	$(".take").css({opacity:'0.80'});
	$(".where").css({opacity:'0.80'});
	$(".come").css({opacity:'0.80'});
	$("#first").hide();
	$("#second").hide();
	$("#third").hide();
	$("#fourth").hide();
	$("#fifthbutton").hide();
	$("#sixthbutton").hide();
	$("#fifth").hide();
	$("#button").on("click", function() {
		$("#first").slideToggle(300);

		$('html, body').animate({
		          scrollTop: $("#second").offset().top+600
		        }, 1000);
		// $(this).scrollTop(300);

	});
	$("#secondbutton").on("click", function() {
		$("#second").slideToggle(300);

		$('html, body').animate({
		          scrollTop: $("#third").offset().top+600
		        }, 1000);

	});

	$("#thirdbutton").on("click", function() {
		$("#third").slideToggle(300);

		$('html, body').animate({
		          scrollTop: $("#fourth").offset().top+600
		        }, 1000);
	});

	$(".trust button").click(function() {
		$("#fifthbutton").show()
	});

	$(".knowledge button").click(function() {
		$("#sixthbutton").show()
	});

	$(".understanding button").click(function() {
		$("#fourth").slideToggle(300)
		$('html, body').animate({
		          scrollTop: $("#fourth").offset().top+600
		        }, 1000);
	});

	$(".come").click(function() {
		$(".come").text("Why Do We Trust the Internet?");
		$(".come").addClass("cat");
		$(".come").removeClass("come");
		$("#fifth").slideToggle(300);
		$('html, body').animate({
		          scrollTop: $("#fifth").offset().top+1400
		        }, 1000);

	});

	$(".resources button").click(function() {
		$(this).text("That All Roads Lead to the Same Place");
		$(this).css({margin:'0 0 0 300px'});
	});

		

});