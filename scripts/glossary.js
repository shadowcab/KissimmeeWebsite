//   Submitted by: James Lee
//        College: Seminole State College of Florida
//         Course: COP 2831 Advanced JavaScript - Final Project (Kissimmee)
//     Instructor: Professor Rosario
//           Date: December 3, 2021

$(document).ready(function () {
  "use strict";

  // runs when an h2 heading is clicked
  $("#faqs h2").click(function (e) {
    e.preventDefault();
    $("#faqs h1").finish();
    $(this).toggleClass("minus");
    if ($(this).attr("class") != "minus") {
      //		   	$(this).next().hide();
      //			$(this).next().fadeOut(1000);
      //			$(this).next().slideUp(500);
      //	        $(this).next().slideUp(1000, "easeInBounce");
      $(this).next().slideUp(250, "easeInSine");
    } else {
      //	        $(this).next().show();
      //			$(this).next().fadeIn(2000);
      //			$(this).next().slideDown(1000);
      //		    $(this).next().slideDown(1000, "easeOutBounce");
      $(this).next().slideDown(750, "easeOutBounce");
    }
  }); // end click

  $("#faqs h1")
    .fadeTo(4000, 1, "easeInBack")
    .animate({ fontSize: "175%" }, 2000, "easeInExpo")
    .animate({ letterSpacing: "+=16px" })
    .delay(2500)
    .animate({ opacity: "0" })
    .animate({ left: "+=400" })
    .animate({ opacity: "1" }, 3000, "easeInExpo")
    .animate({ letterSpacing: "-=16px" }, 3000, "easeInExpo")
    .animate({ fontSize: "2000%" })
    .animate(
      { fontSize: "toggle" },
      {
        duration: 4000,
        specialEasing: {
          fontSize: "easeOutBounce",
        },
      }
    )
    .delay(2000)
    .animate({ fontSize: "175% " })
    .animate({ fontSize: "toggle" }, 2000)
    .animate({ left: "-=400" }, 3000)
    .delay(2000)
    .animate({ fontSize: "175%" }, 5000);

  // runs when the top-level heading is clicked
  $("#faqs h1").click(function () {
    $("#faqs h1").finish();
    $(this).animate({ letterSpacing: "+=16px" }, 2000, "easeOutExpo");
    $(this).animate({ letterSpacing: "-=16px" }, 4000, "easeOutBack");
  }); // end click
}); // end ready
