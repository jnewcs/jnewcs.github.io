var active_section = "#project-container";
var active_btn = "#project-btn";
var active_arrow = "#project-arrow";

// Project click handler
$( "#project-btn" ).click(function() {
	if($(".navbar-toggle").hasClass("collapsed") == false) {
		$(".navbar-toggle").click()
	}

	if(active_section != "#project-container") {
		// Hide the currently active section &  arrow
		$(active_section).css("display", "none");
		$(active_arrow).css("display", "none");
		// Show the project section & arrow
		$("#project-container").css("display", "inherit");
		$("#project-arrow").css("display", "inherit");
		$("#waypoint-trigger").get(0).scrollIntoView();

		// Highlight btn
		$(this).toggleClass("nav-tab-active", true);
		$(active_btn).toggleClass("nav-tab-active", false);

		// Reset variables
		active_section = "#project-container";
		active_btn = "#project-btn";
		active_arrow = "#project-arrow";

		console.log("Switched section to Projects");
	}
});

// Volunteer click handler
$( "#volunteer-btn" ).click(function() {
	if($(".navbar-toggle").hasClass("collapsed") == false) {
		$(".navbar-toggle").click()
	}

  if(active_section != "#volunteer-container") {
		// Hide the currently active section & arrow
		$(active_section).css("display", "none");
		$(active_arrow).css("display", "none");
		// Show the volunteer section & arrow
		$("#volunteer-container").css("display", "inherit");
		$("#volunteer-arrow").css("display", "inherit");

		// Highlight btn
		$(this).toggleClass("nav-tab-active", true);
		$(active_btn).toggleClass("nav-tab-active", false);
		$("#waypoint-trigger").get(0).scrollIntoView();

		// Reset variables
		active_section = "#volunteer-container";
		active_btn = "#volunteer-btn";
		active_arrow = "#volunteer-arrow";

		console.log("Switched section to Volunteer");
	}
});

// Coursework click handler
$( "#coursework-btn" ).click(function() {
	if($(".navbar-toggle").hasClass("collapsed") == false) {
		$(".navbar-toggle").click()
	}

  if(active_section != "#coursework-container") {
		// Hide the currently active section & arrow
		$(active_section).css("display", "none");
		$(active_arrow).css("display", "none");
		// Show the coursework section & arrow
		$("#coursework-container").css("display", "inherit");
		$("#coursework-arrow").css("display", "inherit");

		// Highlight btn
		$(this).toggleClass("nav-tab-active", true);
		$(active_btn).toggleClass("nav-tab-active", false);
		$("#waypoint-trigger").get(0).scrollIntoView();

		// Reset variables
		active_section = "#coursework-container";
		active_btn = "#coursework-btn";
		active_arrow = "#coursework-arrow";

		console.log("Switched section to Coursework");
	}
});

// Waypoint to help stick the navbar to the top of the window
var sticky = new Waypoint.Sticky({
  element: $(".navbar-default")[0]
})

// JBox setup for images
new jBox('Image');

