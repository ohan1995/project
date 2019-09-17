function validate(){
    let fname=document.myform.fname.value;
    let lname=document.myform.lname.value;
    let uname=document.myform.uname.value;
    let pass=document.myform.pwd.value;
    let cpass=document.myform.cpwd.value;
    let gender=document.getElementsByName("gender");
    let email=document.myform.email.value;
    let mob=document.myform.mob.value;

    if(fname=="" || lname=="" || uname=="" || pass=="" || cpass=="" || email=="" || mob==""){
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
    $(".in").css("background-color", "tan");
  });
  $(".in").mouseout(function(){
    $(".in").css("background-color", "white");
  });

   $(".in").focus(function(){
    $(".in").css("background-color", "tan");
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
  $(".required").css("user-select",function(){
      return "none";
  })
   $("#foot").css("user-select",function(){
      return "none";
  })

  });