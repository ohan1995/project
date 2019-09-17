function validate(){
    let bid=document.myform.bid.value;
    let bname=document.myform.bname.value;
    let bookp=document.myform.bp.value;

    if(bid=="" || bname=="" || bookp==""){
        alert(" * feilds cannot be empty")
        return false;
    }
        return true;
}
function onclick(){
    window.history.back();
}
$(document).ready(function(){
  $(".in").mouseover(function(){
    $(".in").css("background-color", "lightyellow");
  });
  $(".in").mouseout(function(){
    $(".in").css("background-color", "white");
  });

  $(".butt:first").mouseover(function(){
      $(".butt:first").css("background-color","lightyellow");
  });
  $(".butt:first").mouseout(function(){
      $(".butt:first").css("background-color","cyan");
  });

  $(".butt:last").mouseover(function(){
      $(".butt:last").css("background-color","lightyellow");
  });
  $(".butt:last").mouseout(function(){
      $(".butt:last").css("background-color","cyan");
  });

  $(".button").mouseover(function(){
      $(".button").css("background-color","lightyellow");
  });
  $(".button").mouseout(function(){
      $(".button").css("background-color","cyan");
  });

 $("h1").mouseover(function(){
      $("h1").css("background-color","lightyellow");
  });
  $("h1").mouseout(function(){
      $("h1").css("background-color","greenyellow");
  });

  $("h1").mouseover(function(){
    $("h1").fadeOut(2000);
  });

  $("h1").mouseout(function(){
    $("h1").fadeIn(2000);
  });

  $("form").hide();
  $("form").show(1000);

  $("h1").animate({
      "margin-left":"600px"
  })
  $("h1").animate({
      "margin-left":"300px"
  })

});
