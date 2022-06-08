//   Submitted by: James Lee
//        College: Seminole State College of Florida
//         Course: COP 2831 Advanced JavaScript - Final Project (Kissimmee)
//     Instructor: Professor Rosario
//           Date: December 3, 2021

var sptoggle = true;

$(function () {
  ("use strict");

  $("#spbtn").click(function () {
    sptoggle = !sptoggle;
    if (sptoggle) {
      $(".showBXslider").show();
      $(".showC2slider").hide();
      $("#spbtn").html("Cycle 2");
    } else {
      $(".showBXslider").hide();
      $(".showC2slider").show();
      $("#spbtn").html("bxSlider");
    }
  });
});
