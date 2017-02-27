$(document).ready(function(){
  $("button").click(function(){
    var col = $(this).css("background-color");
    $("body").animate({
      backgroundColor: col
    }, 1000);
  });
});
