function valid(){
let nm=document.myform.name.value;
let pass=document.myform.password.value;

if(nm==null || nm==""){
window.alert("Username should not be empty");
nm.focus();
return false;
}
else if(pass.length<6){
alert("password should not be empty or less than 6 characters")
return false;
}
    var e = document.getElementById("optio");
    var option = e.options[e.selectedIndex].value
    
    if(option==0)
     {
           window.open("admin_home.html");
         }
         else if(option==1){
             window.open("https://www.google.com");
         }
         else{
             alert("Please Select anything");
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

  $(".button:first").mouseover(function(){
      $(".button:first").css("background-color","lightyellow");
  });
  $(".button:first").mouseout(function(){
      $(".button:first").css("background-color","cyan");
  });

  $(".button:last").mouseover(function(){
      $(".button:last").css("background-color","lightyellow");
  });
  $(".button:last").mouseout(function(){
      $(".button:last").css("background-color","cyan");
  });

  $(".butt").mouseover(function(){
      $(".butt").css("background-color","lightyellow");
  });
  $(".butt").mouseout(function(){
      $(".butt").css("background-color","cyan");
  });

  $("h1").mouseover(function(){
      $("h1").css("background-color","lightyellow");
  });
  $("h1").mouseout(function(){
      $("h1").css("background-color","greenyellow");
  });

  $("#optio").mouseover(function(){
      $("#optio").css("background-color","lightyellow");
  });
  $("#optio").mouseout(function(){
      $("#optio").css("background-color","cyan");
  });

   $("h1").mouseover(function(){
    $("h1").fadeTo(500,0.2);
  });
   $("h1").mouseout(function(){
    $("h1").fadeOut(500);
   })
  $("h1").mouseout(function(){
    $("h1").fadeIn(500);
  })

  $("body").fadeOut(300);
  $("body").fadeIn(300);

  $("h1").animate(
      {
          "margin-left":"600px",
      } 
  )

  $("h1").animate(
      {
          "margin-left":"300px",
      }
  )
  $("form").hide();
  $('.login').click(function(){
            $('form').slideToggle('slow');
        });

        $("p").css("user-select",function(){
            return "none";
        })
        $("#foot").css("user-select",function(){
            return "none";
        })
});