$("button").click(function(){
    $("button").css("background-color","#FF5869");
    $("button").css("border-color","#FF5869");
    buttonAnimation();
})

$("button").mouseover(function(){
  $("button").addClass("hover")
})
$("button").mouseout(function(){
  $("button").removeClass("hover")
})

function buttonAnimation(){
    $("button").addClass("pressed")
    setTimeout(function(){
      $("button").removeClass("pressed")
    },100)
}








