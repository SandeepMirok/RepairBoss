var $ = require("jquery");

$(document).ready(function() {
  $("#shop_name").hide();
  $("#mphone_number").hide();
  $("#shop_name_label").hide();
  $("#mphone_number_label").hide();

  $("#company_name").hide();
  $("#cphone_number").hide();
  $("#company_name_label").hide();
  $("#cphone_number_label").hide();

  $("input[type=radio][id=mechanic]").change(function() {
    if (this.value === "mechanic") {
      $("#shop_name").fadeIn("slow");
      $("#mphone_number").fadeIn("slow");
      $("#shop_name_label").fadeIn("slow");
      $("#mphone_number_label").fadeIn("slow");
    }

    $("#company_name").hide();
    $("#cphone_number").hide();
    $("#company_name_label").hide();
    $("#cphone_number_label").hide();
  });

  $("input[type=radio][id=user]").change(function() {
    $("#shop_name").hide();
    $("#mphone_number").hide();
    $("#shop_name_label").hide();
    $("#mphone_number_label").hide();

    $("#company_name").hide();
    $("#cphone_number").hide();
    $("#company_name_label").hide();
    $("#cphone_number_label").hide();
  });

  $("input[type=radio][id=insurance]").change(function() {
    $("#shop_name").hide();
    $("#mphone_number").hide();
    $("#shop_name_label").hide();
    $("#mphone_number_label").hide();

    $("#company_name").fadeIn();
    $("#cphone_number").fadeIn();
    $("#company_name_label").fadeIn();
    $("#cphone_number_label").fadeIn();
  });
});
