// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')



//= require popper
//= require_tree .


var $jq = jQuery.noConflict();
window.addEventListener('DOMContentLoaded', function(){

    $jq('.slider').not('.slick-initialized').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 9000,
      swipe: true,
    });

    $jq('.slick-dots li').on('mouseover', function() {
      $jq('.a').slick('goTo', $(this).index());
    });
});

$(window).on('scroll', function() {

    $jq('.slider').not('.slick-initialized').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 9000,
      swipe: true,
    });

    $jq('.slick-dots li').on('mouseover', function() {
      $jq('.a').slick('goTo', $(this).index());
    });

});
