$(document).ready(function(){
  //when click on x close modal
  $(".close").click(function(){
    $(".modal").css("display","none");
  });
  //close modal when click on anywhere else
  var modal = document.getElementsByClassName("modal")[0];
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }};
})
