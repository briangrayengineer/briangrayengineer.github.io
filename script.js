/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/

$(document).ready(function () {
  /*//////////////////////////////////////////////////////
  PROJECTS
  *///////////////////////////////////////////////////////
  /*
  FEATURED
  */
  $("#main_page_element_Featured").click(function () {
    if ($("#main_page_element_car").height() == 0) {
      $("#main_page_element_car").css("height", "80px");
      $("#main_page_element_car").css("font-size", "16px");
      $("#main_page_element_elevator").css("height", "80px");
      $("#main_page_element_elevator").css("font-size", "16px");
      $("#main_page_element_website").css("height", "80px");
      $("#main_page_element_website").css("font-size", "16px");
      $("#main_page_element_352parts").css("height", "0px");
      $("#main_page_element_352parts").css("font-size", "0px");
      $("#main_page_element_352project").css("height", "0px");
      $("#main_page_element_352project").css("font-size", "0px");
      $("#main_page_element_personal").css("height", "0px");
      $("#main_page_element_personal").css("font-size", "0px");
      $("#main_page_element_engine").css("height", "0px");
      $("#main_page_element_engine").css("font-size", "0px");
      $("#main_page_element_chair").css("height", "0px");
      $("#main_page_element_chair").css("font-size", "0px");
      $("#main_page_element_Nameplate").css("height", "0px");
      $("#main_page_element_Nameplate").css("font-size", "0px");
      $("#main_page_element_3D").css("height", "0px");
      $("#main_page_element_3D").css("font-size", "0px");
      $("#main_page_element_C").css("height", "0px");
      $("#main_page_element_C").css("font-size", "0px");
      $("#main_page_element_html").css("height", "0px");
      $("#main_page_element_html").css("font-size", "0px");
      $("#main_page_element_css").css("height", "0px");
      $("#main_page_element_css").css("font-size", "0px");
      $("#main_page_element_javascript").css("height", "0px");
      $("#main_page_element_javascript").css("font-size", "0px");
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else {
      $("#main_page_element_car").css("height", "0px");
      $("#main_page_element_car").css("font-size", "0px");
      $("#main_page_element_elevator").css("height", "0px");
      $("#main_page_element_elevator").css("font-size", "0px");
      $("#main_page_element_website").css("height", "0px");
      $("#main_page_element_website").css("font-size", "0px");
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  CAD
  */
  $("#main_page_element_CAD").click(function () {
    if ($("#main_page_element_352parts").height() == 0) {
      $("#main_page_element_352parts").css("height", "80px");
      $("#main_page_element_352parts").css("font-size", "16px");
      $("#main_page_element_352project").css("height", "80px");
      $("#main_page_element_352project").css("font-size", "16px");
      $("#main_page_element_personal").css("height", "80px");
      $("#main_page_element_personal").css("font-size", "16px");
      $("#main_page_element_car").css("height", "0px");
      $("#main_page_element_car").css("font-size", "0px");
      $("#main_page_element_elevator").css("height", "0px");
      $("#main_page_element_elevator").css("font-size", "0px");
      $("#main_page_element_website").css("height", "0px");
      $("#main_page_element_website").css("font-size", "0px");
      $("#main_page_element_engine").css("height", "0px");
      $("#main_page_element_engine").css("font-size", "0px");
      $("#main_page_element_chair").css("height", "0px");
      $("#main_page_element_chair").css("font-size", "0px");
      $("#main_page_element_Nameplate").css("height", "0px");
      $("#main_page_element_Nameplate").css("font-size", "0px");
      $("#main_page_element_3D").css("height", "0px");
      $("#main_page_element_3D").css("font-size", "0px");
      $("#main_page_element_C").css("height", "0px");
      $("#main_page_element_C").css("font-size", "0px");
      $("#main_page_element_html").css("height", "0px");
      $("#main_page_element_html").css("font-size", "0px");
      $("#main_page_element_css").css("height", "0px");
      $("#main_page_element_css").css("font-size", "0px");
      $("#main_page_element_javascript").css("height", "0px");
      $("#main_page_element_javascript").css("font-size", "0px");
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else {
      $("#main_page_element_352parts").css("height", "0px");
      $("#main_page_element_352parts").css("font-size", "0px");
      $("#main_page_element_352project").css("height", "0px");
      $("#main_page_element_352project").css("font-size", "0px");
      $("#main_page_element_personal").css("height", "0px");
      $("#main_page_element_personal").css("font-size", "0px");
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  MANUFACTURING
  */
  $("#main_page_element_Manufacturing").click(function () {
    if ($("#main_page_element_engine").height() == 0) {
      $("#main_page_element_engine").css("height", "80px");
      $("#main_page_element_engine").css("font-size", "16px");
      $("#main_page_element_chair").css("height", "80px");
      $("#main_page_element_chair").css("font-size", "16px");
      $("#main_page_element_Nameplate").css("height", "80px");
      $("#main_page_element_Nameplate").css("font-size", "16px");
      $("#main_page_element_3D").css("height", "80px");
      $("#main_page_element_3D").css("font-size", "16px");
      $("#main_page_element_car").css("height", "0px");
      $("#main_page_element_car").css("font-size", "0px");
      $("#main_page_element_elevator").css("height", "0px");
      $("#main_page_element_elevator").css("font-size", "0px");
      $("#main_page_element_website").css("height", "0px");
      $("#main_page_element_website").css("font-size", "0px");
      $("#main_page_element_352parts").css("height", "0px");
      $("#main_page_element_352parts").css("font-size", "0px");
      $("#main_page_element_352project").css("height", "0px");
      $("#main_page_element_352project").css("font-size", "0px");
      $("#main_page_element_personal").css("height", "0px");
      $("#main_page_element_personal").css("font-size", "0px");
      $("#main_page_element_C").css("height", "0px");
      $("#main_page_element_C").css("font-size", "0px");
      $("#main_page_element_html").css("height", "0px");
      $("#main_page_element_html").css("font-size", "0px");
      $("#main_page_element_css").css("height", "0px");
      $("#main_page_element_css").css("font-size", "0px");
      $("#main_page_element_javascript").css("height", "0px");
      $("#main_page_element_javascript").css("font-size", "0px");
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else {
      $("#main_page_element_engine").css("height", "0px");
      $("#main_page_element_engine").css("font-size", "0px");
      $("#main_page_element_chair").css("height", "0px");
      $("#main_page_element_chair").css("font-size", "0px");
      $("#main_page_element_Nameplate").css("height", "0px");
      $("#main_page_element_Nameplate").css("font-size", "0px");
      $("#main_page_element_3D").css("height", "0px");
      $("#main_page_element_3D").css("font-size", "0px");
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  PROGRAMMING
  */
  $("#main_page_element_Programming").click(function () {
    if ($("#main_page_element_C").height() == 0) {
      $("#main_page_element_C").css("height", "80px");
      $("#main_page_element_C").css("font-size", "16px");
      $("#main_page_element_html").css("height", "80px");
      $("#main_page_element_html").css("font-size", "16px");
      $("#main_page_element_css").css("height", "80px");
      $("#main_page_element_css").css("font-size", "16px");
      $("#main_page_element_javascript").css("height", "80px");
      $("#main_page_element_javascript").css("font-size", "16px");
      $("#main_page_element_car").css("height", "0px");
      $("#main_page_element_car").css("font-size", "0px");
      $("#main_page_element_elevator").css("height", "0px");
      $("#main_page_element_elevator").css("font-size", "0px");
      $("#main_page_element_website").css("height", "0px");
      $("#main_page_element_website").css("font-size", "0px");
      $("#main_page_element_352parts").css("height", "0px");
      $("#main_page_element_352parts").css("font-size", "0px");
      $("#main_page_element_352project").css("height", "0px");
      $("#main_page_element_352project").css("font-size", "0px");
      $("#main_page_element_personal").css("height", "0px");
      $("#main_page_element_personal").css("font-size", "0px");
      $("#main_page_element_engine").css("height", "0px");
      $("#main_page_element_engine").css("font-size", "0px");
      $("#main_page_element_chair").css("height", "0px");
      $("#main_page_element_chair").css("font-size", "0px");
      $("#main_page_element_Nameplate").css("height", "0px");
      $("#main_page_element_Nameplate").css("font-size", "0px");
      $("#main_page_element_3D").css("height", "0px");
      $("#main_page_element_3D").css("font-size", "0px");
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else {
      $("#main_page_element_C").css("height", "0px");
      $("#main_page_element_C").css("font-size", "0px");
      $("#main_page_element_html").css("height", "0px");
      $("#main_page_element_html").css("font-size", "0px");
      $("#main_page_element_css").css("height", "0px");
      $("#main_page_element_css").css("font-size", "0px");
      $("#main_page_element_javascript").css("height", "0px");
      $("#main_page_element_javascript").css("font-size", "0px");
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  REMOTE CONTORL CAR CONTENT
  */
  $("#main_page_element_car").on("click", function (){
    if ($("#popup_window_car").height() == 5000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_car").height() == 0) {
      $("#popup_window_car").animate({height: "5000px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  MINIATURE ELEVATOR CONTENT
  */
  $("#main_page_element_elevator").on("click", function (){
    if ($("#popup_window_elevator").height() == 3000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_elevator").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "3000px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  WEBSITE CONTENT
  */
  $("#main_page_element_website").on("click", function (){
    if ($("#popup_window_website").height() == 3000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_website").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "3000px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  352 PARTS
  */
  $("#main_page_element_352parts").on("click", function (){
    if ($("#popup_window_352parts").height() == 3000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_352parts").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "3000px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  352 PROJECT
  */
  $("#main_page_element_352project").on("click", function (){
    if ($("#popup_window_352project").height() == 1500) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_352project").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "1500px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  PERSONAL
  */
  $("#main_page_element_personal").on("click", function (){
    if ($("#popup_window_personal").height() == 3000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_personal").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "3000px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  COMPRESSED AIR PISTON ENGINE
  */
  $("#main_page_element_engine").on("click", function (){
    if ($("#popup_window_engine").height() == 5000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_engine").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "5000px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  CHAIR CONTENT
  */
  $("#main_page_element_chair").on("click", function (){
    if ($("#popup_window_chair").height() == 5000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_chair").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "5000px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  USD NAMEPLATE CONTENT
  */
  $("#main_page_element_Nameplate").on("click", function (){
    if ($("#popup_window_Nameplate").height() == 5000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_Nameplate").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "5000px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  3D PRINTER CONTENT
  */
  $("#main_page_element_3D").on("click", function (){
    if ($("#popup_window_3D").height() == 5000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_3D").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "5000px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  C CONTENT
  */
  $("#main_page_element_C").on("click", function (){
    if ($("#popup_window_C").height() == 5000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_C").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "5000px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  HTML CONTENT
  */
  $("#main_page_element_html").on("click", function (){
    if ($("#popup_window_html").height() == 5000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_html").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "5000px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  CSS CONTENT
  */
  $("#main_page_element_css").on("click", function (){
    if ($("#popup_window_css").height() == 5000) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_css").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "5000px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
  });
  /*
  WEBSITE CONTENT
  */
  $("#main_page_element_javascript").on("click", function (){
    if ($("#popup_window_javascript").height() == 500) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "0px"},0);
    }
    else if ($("#popup_window_javascript").height() == 0) {
      $("#popup_window_car").animate({height: "0px"},0);
      $("#popup_window_elevator").animate({height: "0px"},0);
      $("#popup_window_website").animate({height: "0px"},0);
      $("#popup_window_352parts").animate({height: "0px"},0);
      $("#popup_window_352project").animate({height: "0px"},0);
      $("#popup_window_personal").animate({height: "0px"},0);
      $("#popup_window_engine").animate({height: "0px"},0);
      $("#popup_window_chair").animate({height: "0px"},0);
      $("#popup_window_Nameplate").animate({height: "0px"},0);
      $("#popup_window_3D").animate({height: "0px"},0);
      $("#popup_window_C").animate({height: "0px"},0);
      $("#popup_window_html").animate({height: "0px"},0);
      $("#popup_window_css").animate({height: "0px"},0);
      $("#popup_window_javascript").animate({height: "500px"},0);
    }
  });
  
  /*//////////////////////////////////////////////////////
  ACADEMICS
  *//////////////////////////////////////////////////////
  /*
  INTRODUCTION TO ROBOTS
  */
  $("#main_page_element_Robots").on("click", function (){
    if ($("#popup_window_Robots").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      ("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Robots").height() == 0) {
      $("#popup_window_Robots").animate({height: "150px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      ("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  MECHANICS OF MATERIALS
  */
  $("#main_page_element_MechMat").on("click", function (){
    if ($("#popup_window_MechMat").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_MechMat").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "150px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  FLUID MECHANICS
  */
  $("#main_page_element_Fluids").on("click", function (){
    if ($("#popup_window_Fluids").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Fluids").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "150px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  DYNAMICS
  */
  $("#main_page_element_Dynamics").on("click", function (){
    if ($("#popup_window_Dynamics").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      ("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Dynamics").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "150px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  CAD
  */
  $("#main_page_element_CAD").on("click", function (){
    if ($("#popup_window_CAD").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      ("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_CAD").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "150px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  MACHINE SHOP
  */
  $("#main_page_element_MachineShop").on("click", function (){
    if ($("#popup_window_MachineShop").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_MachineShop").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "150px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  APPLIED THERMODYNAMICS
  */
  $("#main_page_element_Thermo").on("click", function (){
    if ($("#popup_window_Thermo").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Thermo").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "150px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  STATICS
  */
  $("#main_page_element_Statics").on("click", function (){
    if ($("#popup_window_Statics").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Statics").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "150px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  INTRODUCTION TO THERMAL SCEINCE
  */
  $("#main_page_element_Thermal").on("click", function (){
    if ($("#popup_window_Thermal").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Thermal").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "150px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  MACHINE PROCESSES
  */
  $("#main_page_element_MachProc").on("click", function (){
    if ($("#popup_window_MachProc").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_MachProc").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "150px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  PROBABILITY AND STATISTICS
  */
  $("#main_page_element_Probability").on("click", function (){
    if ($("#popup_window_Probability").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Probability").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "150px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  MATERIAL SCIENCE
  */
  $("#main_page_element_Material").on("click", function (){
    if ($("#popup_window_Material").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Material").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "150px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  102
  */
  $("#main_page_element_102").on("click", function (){
    if ($("#popup_window_102").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_102").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "150px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  101
  */
  $("#main_page_element_101").on("click", function (){
    if ($("#popup_window_101").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_101").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "150px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  INTRODUCTION TO PROGRAMMING
  */
  $("#main_page_element_Programming").on("click", function (){
    if ($("#popup_window_Programming").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Programming").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "150px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  INTRODUCTION TO CIRCUITS
  */
  $("#main_page_element_Circuits").on("click", function (){
    if ($("#popup_window_Circuits").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_Circuits").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "150px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
  });
  /*
  PUBLIC SPEAKING
  */
  $("#main_page_element_PublicSpeach").on("click", function (){
    if ($("#popup_window_PublicSpeach").height() == 150) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "0px"});
    }
    else if ($("#popup_window_PublicSpeach").height() == 0) {
      $("#popup_window_Robots").animate({height: "0px"});
      $("#popup_window_MechMat").animate({height: "0px"});
      $("#popup_window_Fluids").animate({height: "0px"});
      $("#popup_window_Dynamics").animate({height: "0px"});
      $("#popup_window_CAD").animate({height: "0px"});
      $("#popup_window_MachineShop").animate({height: "0px"});
      $("#popup_window_Thermo").animate({height: "0px"});
      $("#popup_window_Statics").animate({height: "0px"});
      $("#popup_window_Thermal").animate({height: "0px"});
      $("#popup_window_MachProc").animate({height: "0px"});
      $("#popup_window_Probability").animate({height: "0px"});
      $("#popup_window_Material").animate({height: "0px"});
      $("#popup_window_102").animate({height: "0px"});
      $("#popup_window_101").animate({height: "0px"});
      $("#popup_window_Programming").animate({height: "0px"});
      $("#popup_window_Circuits").animate({height: "0px"});
      $("#popup_window_PublicSpeach").animate({height: "150px"});
    }
  });
  
  /*///////////////////////////////////////////////////////
  EXTRACURRICULARS
  *///////////////////////////////////////////////////////
  /*
  ASHRAE
  */
  $("#main_page_element_ASHRAE").on("click", function (){
    if ($("#popup_window_ASHRAE").height() == 1000) {
      $("#popup_window_ASHRAE").animate({height: "0px"},200);
      $("#popup_window_ASME").animate({height: "0px"});
      $("#popup_window_StudentGrader").animate({height: "0px"},200);
      $("#popup_window_Hobbyist").animate({height: "0px"},200);
      $("#popup_window_Volunteering").animate({height: "0px"},200);
    }
    else if ($("#popup_window_ASHRAE").height() == 0) {
      $("#popup_window_ASHRAE").animate({height: "1000px"},200);
      $("#popup_window_ASME").animate({height: "0px"},200);
      $("#popup_window_StudentGrader").animate({height: "0px"},200);
      $("#popup_window_Hobbyist").animate({height: "0px"},200);
      $("#popup_window_Volunteering").animate({height: "0px"},200);
    }
  });
  /*
  ASME
  */
  $("#main_page_element_ASME").on("click", function (){
    if ($("#popup_window_ASME").height() == 500) {
      $("#popup_window_ASHRAE").animate({height: "0px"},200);
      $("#popup_window_ASME").animate({height: "0px"},200);
      $("#popup_window_StudentGrader").animate({height: "0px"},200);
      $("#popup_window_Hobbyist").animate({height: "0px"},200);
      $("#popup_window_Volunteering").animate({height: "0px"},200);
    }
    else if ($("#popup_window_ASME").height() == 0) {
      $("#popup_window_ASHRAE").animate({height: "0px"},200);
      $("#popup_window_ASME").animate({height: "500px"},200);
      $("#popup_window_StudentGrader").animate({height: "0px"},200);
      $("#popup_window_Hobbyist").animate({height: "0px"},200);
      $("#popup_window_Volunteering").animate({height: "0px"},200);
    }
  });
  /*
  STUDENT GRADER
  */
  $("#main_page_element_StudentGrader").on("click", function (){
    if ($("#popup_window_StudentGrader").height() == 500) {
      $("#popup_window_ASHRAE").animate({height: "0px"},200);
      $("#popup_window_ASME").animate({height: "0px"},200);
      $("#popup_window_StudentGrader").animate({height: "0px"},200);
      $("#popup_window_Hobbyist").animate({height: "0px"},200);
      $("#popup_window_Volunteering").animate({height: "0px"},200);
    }
    else if ($("#popup_window_StudentGrader").height() == 0) {
      $("#popup_window_ASHRAE").animate({height: "0px"},200);
      $("#popup_window_ASME").animate({height: "0px"},200);
      $("#popup_window_StudentGrader").animate({height: "500px"},200);
      $("#popup_window_Hobbyist").animate({height: "0px"},200);
      $("#popup_window_Volunteering").animate({height: "0px"},200);
    }
  });
  /*
  HOBBYIST
  */
  $("#main_page_element_Hobbyist").on("click", function (){
    if ($("#popup_window_Hobbyist").height() == 500) {
      $("#popup_window_ASHRAE").animate({height: "0px"},200);
      $("#popup_window_ASME").animate({height: "0px"},200);
      $("#popup_window_StudentGrader").animate({height: "0px"},200);
      $("#popup_window_Hobbyist").animate({height: "0px"},200);
      $("#popup_window_Volunteering").animate({height: "0px"},200);
    }
    else if ($("#popup_window_Hobbyist").height() == 0) {
      $("#popup_window_ASHRAE").animate({height: "0px"},200);
      $("#popup_window_ASME").animate({height: "0px"},200);
      $("#popup_window_StudentGrader").animate({height: "0px"},200);
      $("#popup_window_Hobbyist").animate({height: "500px"},200);
      $("#popup_window_Volunteering").animate({height: "0px"},200);
    }
  });
  /*
  VOLUNTEERING
  */
  $("#main_page_element_Volunteering").on("click", function (){
    if ($("#popup_window_Volunteering").height() == 500) {
      $("#popup_window_ASHRAE").animate({height: "0px"},200);
      $("#popup_window_ASME").animate({height: "0px"},200);
      $("#popup_window_StudentGrader").animate({height: "0px"},200);
      $("#popup_window_Hobbyist").animate({height: "0px"},200);
      $("#popup_window_Volunteering").animate({height: "0px"},200);
    }
    else if ($("#popup_window_Volunteering").height() == 0) {
      $("#popup_window_ASHRAE").animate({height: "0px"},200);
      $("#popup_window_ASME").animate({height: "0px"},200);
      $("#popup_window_StudentGrader").animate({height: "0px"},200);
      $("#popup_window_Hobbyist").animate({height: "0px"},200);
      $("#popup_window_Volunteering").animate({height: "500px"},200);
    }
  });
});

/* THIS IS FOR HIGHTLIGHT CHANGE
$(document).ready(function(){

  $('div').hover(
    function(){
      $(this).addClass('active');
    },
    function(){
      $(this).removeClass('active');
    }
  );

});
*/