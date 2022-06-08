//   Submitted by: James Lee
//        College: Seminole State College of Florida
//         Course: COP 2831 Advanced JavaScript - Final Project (Kissimmee)
//     Instructor: Professor Rosario
//           Date: December 3, 2021

$(function () {
  ("use strict");
  var audio = $("#mp3_music")[0];
  audio.volume = 0.6;
  var minutes = 5;
  var seconds = 0;
  var timeout = false;
  var rightcnt = 0;
  var firstScore = true;
  var x;

  $("#myName").focus({ preventScroll: true });
  document.getElementById("quiz_form").reset();

  // initialize jQuery datepicker widget
  $("#visit_date").datepicker({
    minDate: new Date(),
    showButtonPanel: true,
  });

  $("#atooltip").tooltip({
    content: "<strong>Hi!</strong>",
    track: true,
  });

  var availableTags = [
    "Abbott",
    "Albany",
    "Alafaya",
    "Allen",
    "Allendale",
    "Allentown",
    "Annandale",
    "Annapolis",
    "Arlington",
    "Atascocita",
    "Avondale",
    "Cacema",
    "Jamestown",
    "Kissimmee",
    "Orlando",
  ];
  $("#allendale").autocomplete({
    source: availableTags,
  });

  $("#play_clip").mouseenter(function () {
    audio.play();
  });

  $("#play_clip").mouseout(function () {
    audio.pause();
  });

  var padSingleDigit = function (num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  $("#btn1").click(function () {
    $(".showform").show();
    $("#btn1").hide();

    x = setInterval(function () {
      $("#quiz_timer").text(minutes + ":" + padSingleDigit(seconds));
      if (minutes == 0 && seconds == 0) {
        $("#quiz_timer").text("Times Up!");
        timeout = true;
        clearTimeout(x);
        $("#grade_quiz").click();
      } else if (seconds == 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
    }, 1000);
  });

  /* Validate User Input */

  $("#grade_quiz").click(function (evt) {
    //var alphaPattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var alphaPattern = /^[A-Za-z -]+$/;
    var isValid = true;
    //    document.getElementById("span").style.color = "green";

    var delmultispaces = function (text) {
      var end = text.length - 1;
      var space = -1;
      for (var i = 0; i < end; i++) {
        space = text.indexOf("  ");
        if (space != -1) {
          text = text.substring(0, space) + text.slice(space + 1);
        }
      }
      return text;
    };

    var initialcap = function (text) {
      var text = text.charAt(0).toUpperCase() + text.slice(1);
      var newText = "";
      var end = text.length - 1;
      var firstLastSpace = -1;
      for (var i = 0; i < end; i++) {
        firstLastSpace = text.indexOf(" ");
        if (firstLastSpace != -1) {
          newText =
            newText +
            text.substring(0, firstLastSpace + 1) +
            text.charAt(firstLastSpace + 1).toUpperCase();

          text = text.slice(firstLastSpace + 2);
        }
      }
      return newText + text;
    };

    // Validate name input
    var name = $("#userName").val().trim();
    name = delmultispaces(name);
    name = initialcap(name);

    if (name == "") {
      $("#userName").next().text("This field is required.");
      isValid = false;
    } else if (!alphaPattern.test(name)) {
      $("#userName").next().text("Must be a valid name.");
      isValid = false;
    } else {
      $("#userName").next().text("");
    }
    $("#userName").val(name);

    // Validate visit date and calculate "days until"
    var dt = $("#visit_date").val();
    var date = new Date(dt);

    if (dt.length == 0) {
      $("#visit_date").next().text("This field is required.");
      isValid = false;
    } else if (date == "Invalid Date") {
      $("#visit_date").next().text("Please enter in MM/DD/YYYY format.");
      isValid = false;
    } else {
      // Check if visit date is today or in the future
      var today = new Date();
      var oneDay = 24 * 60 * 60 * 1000; //hrs*mins*secs*millisec
      var days = (date.getTime() - today.getTime()) / oneDay;
      days = Math.ceil(days);

      if (days < 0) {
        $("#visit_date").next().text("Please enter a future date.");
        isValid = false;
      } else if (days == 0) {
        $("#visit_date").next().text("We'll see you later today!");
      } else if (days == 1) {
        $("#visit_date").next().text("We'll see you tomorrow!");
      } else if (days >= 2) {
        $("#visit_date")
          .next()
          .text("We'll see you in " + days + " days!");
      }
    }

    if (isValid) {
      // Grade Question 1
      var correct = false;
      if ($("#car").is(":checked")) {
        $("#question1-1").text("Incorrect");
      } else $("#question1-1").text("");

      if ($("#antenna").is(":checked")) {
        $("#question1-2").text("Incorrect");
      } else $("#question1-2").text("");

      if ($("#ac").is(":checked")) {
        $("#question1-3").text("Yes, well done!");
        rightcnt += 1;
        correct = true;
      } else $("#question1-3").text("");

      if ($("#drone").is(":checked")) {
        $("#question1-4").text("Incorrect");
      } else $("#question1-4").text("");

      if (!correct) {
        $("#ac")
          .next()
          .next()
          .text("There are two air-conditioners in the mural.");
      }

      // Grade Question 2
      correct = false;
      if ($("#trouble").is(":checked")) {
        $("#question2-1").text("Incorrect");
      } else $("#question2-1").text("");

      if ($("#long").is(":checked")) {
        $("#question2-2").text("Yes, well done!");
        rightcnt += 1;
        correct = true;
      } else $("#question2-2").text("");

      if ($("#sweet").is(":checked")) {
        $("#question2-3").text("Incorrect");
      } else $("#question2-3").text("");

      if ($("#unknown").is(":checked")) {
        $("#question2-4").text("Incorrect");
      } else $("#question2-4").text("");

      if (!correct) {
        $("#long").next().next().text("This is the correct answer.");
      }

      // Grade Question 3
      correct = false;
      if ($("#cattle").is(":checked")) {
        $("#question3a").text("Correct!");
        rightcnt = rightcnt + 0.2;
      } else $("#question3a").text("You missed this one.");

      if ($("#boats").is(":checked")) {
        $("#question3b").text("Correct!");
        rightcnt = rightcnt + 0.2;
      } else $("#question3b").text("You missed this one.");

      if ($("#citrus").is(":checked")) {
        $("#question3c").text("Correct!");
        rightcnt = rightcnt + 0.2;
      } else $("#question3c").text("You missed this one.");

      if ($("#sugar").is(":checked")) {
        $("#question3d").text("Correct!");
        rightcnt = rightcnt + 0.2;
      } else $("#question3d").text("You missed this one.");

      if ($("#tourism").is(":checked")) {
        $("#question3e").text("Correct!");
        rightcnt = rightcnt + 0.2;
      } else $("#question3e").text("You missed this one.");

      // Grade Question 4
      correct = false;
      var oldname = $("#allendale").val();
      oldname = oldname.toUpperCase();
      if (oldname == "ALLENDALE") {
        correct = true;
        rightcnt += 1;
        $("#allendale").next().text("Correct!");
      } else {
        $("#allendale").next().text("The correct answer is Allendale.");
      }

      // Grade Question 5
      correct = false;
      if ($("#truefact").is(":checked")) {
        $("#question5-1").text("Yes, well done!");
        rightcnt += 1;
        correct = true;
      } else $("#question5-1").text("");

      if ($("#falsefact").is(":checked")) {
        $("#question5-2").text("Incorrect");
      } else $("#question5-2").text("");

      if (!correct) {
        $("#truefact").next().next().text("This is true!");
      }
    }
    if (!isValid && !timeout) {
      evt.preventDefault();
    } else {
      if (firstScore) {
        firstScore = false;
        $("#final_grade").text(
          "Your score is " +
            parseFloat(rightcnt).toFixed(1) +
            " out of 5 (" +
            parseFloat((rightcnt / 5) * 100).toFixed(0) +
            "%)"
        );
      }
      clearTimeout(x);
    }
  }); // end anonamous function
}); // end submit
