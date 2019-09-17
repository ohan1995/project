$(document).ready(function(){

  $(".butt:first").mouseover(function(){
    $(".butt:first").css("background-color", "lightyellow");
  });
  $(".butt:first").mouseout(function(){
    $(".butt:first").css("background-color","cyan");
  });

    $(".butt:last").mouseover(function(){
    $(".butt:last").css("background-color", "lightyellow");
  });
  $(".butt:last").mouseout(function(){
    $(".butt:last").css("background-color","cyan");
  });

  $("h1").mouseover(function(){
    $("h1").css("background-color", "lightyellow");
  });
  $("h1").mouseout(function(){
    $("h1").css("background-color","greenyellow");
  });

  
  $(".badd").mouseover(function(){
    var div = $(".badd");  
    div.animate({left: '100px'});
    div.animate({fontSize: '3em'} );
  });

$(".badd").mouseout(function(){
    var div = $(".badd");  
    div.animate({right: '100px'} );
    div.animate({fontSize: '1em'} );
  });

  $(".bedit").mouseover(function(){
    var div = $(".bedit");  
    div.animate({left: '100px'});
    div.animate({fontSize: '3em'} );
  });

$(".bedit").mouseout(function(){
    var div = $(".bedit");  
    div.animate({right: '100px'} );
    div.animate({fontSize: '1em'} );
  });

   $(".bdel").mouseover(function(){
    var div = $(".bdel");  
    div.animate({left: '50px'});
    div.animate({fontSize: '3em'} );
  });

$(".bdel").mouseout(function(){
    var div = $(".bdel");  
    div.animate({right: '50px'} );
    div.animate({fontSize: '1em'} );
  });

 $(".sadd").mouseover(function(){
    var div = $(".sadd");  
    div.animate({left: '50px'});
    div.animate({fontSize: '3em'} );
  });

$(".sadd").mouseout(function(){
    var div = $(".sadd");  
    div.animate({right: '50px'} );
    div.animate({fontSize: '1em'} );
  });

   $(".sedit").mouseover(function(){
    var div = $(".sedit");  
    div.animate({left: '50px'});
    div.animate({fontSize: '3em'} );
  });

$(".sedit").mouseout(function(){
    var div = $(".sedit");  
    div.animate({right: '50px'} );
    div.animate({fontSize: '1em'} );
  });
  
   $(".sdel").mouseover(function(){
    var div = $(".sdel");  
    div.animate({left: '50px'});
    div.animate({fontSize: '3em'} );
  });

$(".sdel").mouseout(function(){
    var div = $(".sdel");  
    div.animate({right: '50px'} );
    div.animate({fontSize: '1em'} );
  });

 $(".links").mouseover(function(){
    $(".links").css("background-color", "lightyellow");
  });
  $(".links").mouseout(function(){
    $(".links").css("background-color","lightslategray");
  });

  $("form").hide();
  $("form").fadeIn(500);

  $("h1").animate({
    "margin-left":"600px"
  })
  $("h1").animate({
    "margin-left":"300px"
  })

});