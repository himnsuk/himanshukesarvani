$(document).ready(function() {
  "use strict"
  $(".cd-bouncy-nav-trigger").on('click', function(){
    $(".cd-bouncy-nav-modal").toggleClass("fade-in");
  });
  $(".cd-close").on('click', function(){
    $(".cd-bouncy-nav-modal").toggleClass("fade-out").toggleClass("fade-in");
  })
});
