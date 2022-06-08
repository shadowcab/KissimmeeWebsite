//   Submitted by: James Lee
//        College: Seminole State College of Florida
//         Course: COP 2831 Advanced JavaScript - Final Project (Kissimmee)
//     Instructor: Professor Rosario
//           Date: December 3, 2021

"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  var banner = $("folkmusic");
  var audio = $("mp3_music");
  audio.volume = 0.4;

  // attach mouseover and mouseout events to the Pioneer Village banner
  banner.onmouseover = function () {
    audio.play();
  };
  banner.onmouseout = function () {
    audio.pause();
  };
};
