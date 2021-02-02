// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs").start()
// require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')

// import $ from 'jquery'


//= require popper
//= require_tree .
// = require jquery.jscroll.min.js

// import Rails from "@rails/ujs"
// import * as ActiveStorage from "@rails/activestorage"
// import "channels"

var $jq = jQuery.noConflict();
window.addEventListener('DOMContentLoaded', function(){

    $jq('.slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
    });

  $jq('.slick-dots li').on('mouseover', function() {
    $jq('.a').slick('goTo', $(this).index());
  });
});
