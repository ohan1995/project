function validate(){
    let sid=document.myform.sid.value;
    let name=document.myform.sname.value;
    let gender=document.getElementsByName("gender");
    let email=document.myform.email.value;
    let add=document.myform.add.value;
    let mob=document.myform.mob.value;

    if(sid=="" || name=="" || email=="" || add=="" || mob==""){
        alert(" * feild cannot be empty!");
        return false;
    }
    else if(gender[0].checked!=true && gender[1].checked!=true){
        alert("Gender cannot be empty");
        return false;
    }
    else if(mob.length<10){
        alert("Please Enter 10 digit Mobile Number")
        return false;
    }
    else if(isNaN(mob)){
        alert("Please Enter Proper Mobile Number");
        return false;
    }
    else{
        
    return true;
    }
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

   $("form").hide();
  $("form").show(500);

  $("h1").animate({
      "margin-left":"600px"
  })
  $("h1").animate({
      "margin-left":"300px"
  })

  });