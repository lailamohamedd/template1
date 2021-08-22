// global

$(function (){
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
     //Smooth Scroll To Div
   
     $('.topnav a').click(function(){
      $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
        
         }, 1000);
     });
