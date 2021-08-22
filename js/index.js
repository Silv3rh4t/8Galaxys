$(function () {
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

$(document).ready(function () {
  //hiding asset cotent to reveal on click
  $("#valorant").hide();
  $("#cc").hide();
  $("#bgmi").hide();
  $("#back-wrapper").hide();

  //fading animations
  $(window).scroll(function () {
    $('.fadein').each(function (i) {

      var center_of_element = ($(this).offset().top + $(this).outerHeight());
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > center_of_element) {
        if ($(this).hasClass("slideRight")) {
          $(this).animate({
            left: "-=30px",
            opacity: 1
          }, 1500, function () {
          });
          $(this).removeClass("slideRight");
        } else if ($(this).hasClass("slideLeft")) {
          $(this).animate({
            left: "+=30px",
            opacity: 1
          }, 1500, function () {
          });
          $(this).removeClass("slideLeft");
        } else {
          $(this).animate({ 'opacity': '1' }, 800);
        }

      }

    });
  });
});

$(".asset-link-container").click(function () {
  $("#assets-content").hide();
  $("#assets").css("height", "150vh");
  $("#" + $(this).attr("data-link")).show();
  $("#back-wrapper").show();
});

$("#back-wrapper").click(function(){
  $(".asset-group").hide();
  $("#assets").css("height", "100vh");
  $("#assets-content").show();
  $("#back-wrapper").hide();
});