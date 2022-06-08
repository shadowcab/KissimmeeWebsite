//   Submitted by: James Lee
//        College: Seminole State College of Florida 
//         Course: COP 2831 Advanced JavaScript - Final Project (Kissimmee)
//     Instructor: Professor Rosario
//           Date: December 3, 2021 

$(document).ready(function () {
  "use strict";
  $("#image_rollovers img").each(function () {
    var oldURL = $(this).attr("src"); // gets the src attribute
    var newURL = $(this).attr("id"); // gets the id attribute

    // preload rollover image
    var rolloverImage = new Image();
    rolloverImage.src = newURL;

    // set up event handlers
    /*          $(this).hover(
                    function () {
                        $(this).attr("src", newURL); // sets the src attribute
                    },
                    function () {
                        $(this).attr("src", oldURL); // sets the src attribute
                    }
                ); // end hover
        */
    $(this).mouseover(function () {
      $(this).attr("src", newURL); // sets the src attribute on mouseover
    });
    $(this).mouseout(function () {
      $(this).attr("src", oldURL); // sets the src attribute on mouseout
    });
  }); // end each
}); // end ready
