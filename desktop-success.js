$("button").click(function(){
    $("button").css("background-color","#FF5869");
    $("button").css("border-color","#FF5869");
    buttonAnimation();
})
function buttonAnimation(){
    $("button").addClass("pressed")
    setTimeout(function(){
      $("button").removeClass("pressed")
    },100)
}








