$("button").click(function(){
    
    $("button").css("background-color","#FF5869");
    $("button").css("border-color","#FF5869");
    let value = $("input").val();
    if(value==""){
        if($("input").css("background-color")=="rgb(255, 232, 230)"){
            buttonAnimation();
            shake();
        }
        else{
            buttonAnimation();
            error();
        }
        
    }
    else if(value.includes("@")==false){
        if($("input").css("background-color")=="rgb(255, 232, 230)"){
            buttonAnimation();
            shake();
        }
        else{
            buttonAnimation();
            error();
        }
    }
    else if(value.includes(".")==false){
        if($("input").css("background-color")=="rgb(255, 232, 230)"){
            buttonAnimation();
            shake();
        }
        else{
            buttonAnimation();
            error();
        }
    }
    else  window.location.href="desktop-success.html";

   
    
})
$("button").mouseover(function(){
    $("button").addClass("hover")
})
$("button").mouseout(function(){
    $("button").removeClass("hover")
 })

function error(){
    $("input").css("background-color","#FFE8E6");
    $("input").attr("placeholder","ash#loremcompany.com");
    $("input").css("border-color","#D49D97");
    $("input::-webkit-input-placeholder").css("color","#D49D97");
    $("input").addClass("color-changer");
    $("input").before("<p style='color:#FF5869;padding-left:140px;' class='email'><strong>Valid email required</strong></p>");;
    $(".email").css("display","inline");
    $("input").css("margin-top","15px");
}
function buttonAnimation(){
    $("button").addClass("pressed")
    setTimeout(function(){
      $("button").removeClass("pressed")
    },100)
}
function shake(){
    $("input").addClass("shake")
    setTimeout(function(){
      $("input").removeClass("shake")
    },300)
}
