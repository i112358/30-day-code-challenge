
$(document).ready(function(){
  $(".question").on({
    click: function(){
      $(this).toggleClass("active");
      $(this).next().slideToggle();
    }
  });
})
