//   Submitted by: James Lee
//        College: Seminole State College of Florida
//         Course: COP 2831 Advanced JavaScript - Final Project (Kissimmee)
//     Instructor: Professor Rosario
//           Date: December 3, 2021

$(document).ready(function () {
  "use strict";

  var slider = $("#image_list"); // slider = ul element
  var leftProperty, newleftProperty;

  // the click event handler for the right button
  $("#right_button").click(function () {
    // get value of current left property
    leftProperty = parseInt(slider.css("left"));
    // determine new value of left property
    if (leftProperty - 320 <= -900) {
      newLeftProperty = 0;
    } else {
      newLeftProperty = leftProperty - 320;
    }
    // use the animate function to change the left property
    slider.animate(
      {
        left: newLeftProperty,
      },
      1000
    );
  }); // end click

  // the click event handler for the left button
  $("#left_button").click(function () {
    // get value of current right property
    leftProperty = parseInt(slider.css("left"));

    // determine new value of left property
    if (leftProperty < 0) {
      newLeftProperty = leftProperty + 320;
    } else {
      newLeftProperty = 0;
    }

    // use the animate function to change the left property
    slider.animate(
      {
        left: newLeftProperty,
      },
      1000
    );
  }); // end click

  // the click event handler for the thumbnail image
  $("#image_list a").click(function (evt) {
    // get URL of the clicked thumbnail image
    var imageURL = $(this).attr("href");

    // Main image slides left and fades out, then clicked thumbnail
    // image becomes the new main image and slides in from the right as it fades in.
    $("#image").animate({ opacity: 0, marginLeft: "-=205" }, 1000, function () {
      $("#image").attr("src", imageURL);
      $("#image").animate({ opacity: 1, marginLeft: "+=205" }, 1000);
    });

    // cancel the default action of the link
    evt.preventDefault();
  }); // end click
}); // end ready
