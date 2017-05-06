/*var que = $(".question");
var i;

for (i = 0; i < que.length; i++) {
    que[i].onclick = function(){

        this.classList.toggle("active");

        var ans = this.nextElementSibling;
        if (ans.style.display === "block") {
            ans.style.display = "none";
        } else {
            ans.style.display = "block";
        }
    }
}*/

$(document).ready(function(){
  $(".question").on({
    click: function(){
      $(this).toggleClass("active");
      $(this).next().slideToggle();
    }
  });
})
