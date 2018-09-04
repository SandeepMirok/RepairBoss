var $ = require("jquery");

$(document).ready(function() {

  $("#loginButton").click(function() {
    $("#newModalForm")[0].reset();
  });

  $("#inputUserName").on("input", function(e) {
    $("#inputUserName").css("border-color", "#ced4da");
    $(".requiredUser").css("visibility", "hidden");
  });


  $("#inputPassword").on("input", function(e) {
    $("#inputPassword").css("border-color", "#ced4da");
    $(".requiredPassword").css("visibility", "hidden");
  });


  $(".close").click(function() {
    $("#newModalForm")[0].reset();
    $("#inputUserName").css("border-color", "#ced4da");
    $(".requiredUser").css("visibility", "hidden");
    $("#inputPassword").css("border-color", "#ced4da");
    $(".requiredPassword").css("visibility", "hidden");
  });

  $("#modalSubmit").click(function() {
    if ($("#inputUserName").val() == "") {
      $("#inputUserName").css("border-color", "red");
      $(".requiredUser").css({
        visibility: "visible",
        color: "red",
        "font-family": "Trebuchet MS",
        "font-weight": "bold"
      });
      return false;
    }


    else if ($("#inputPassword").val() == "") {
      $("#inputPassword").css("border-color", "red");
      $(".requiredPassword").css({
        visibility: "visible",
        color: "red",
        "font-family": "Trebuchet MS",
        "font-weight": "bold"
      });
      return false;

    }
    else
    {
      // submit the form here
      $("#modalSubmit").submit();
      return true;


    }
  });
});
