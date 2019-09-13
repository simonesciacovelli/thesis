
$(document).ready(function(){

	$(".frame").hover(function(){
		$(".container2").css('background','black');
		// $(".container2").css('width','90%');
		// $(".mejs__container").css('background','black');
		// $(".mejs__container").css('opacity','10');
  	},


  function(){
    $(".container2").css('background',' #3c4044');
    $(".container2").css('width','60%');
    // $(".mejs__container").css('opacity','0');
  });
});




$(document).ready(function(){
  $("h1").click(function() {
    // $("h3").css('display','block');
    // $("h3").toggle()
    // $( "h3" ).fadeToggle( "slow", "linear" );

    $("h3").toggleClass("author")

  });
});


/*---size---*/

  $(".a1").hover(function() {
    $(this).attr('class', 'c_large');
  });


  $(".a3b").hover(function() {
    $(this).attr('class', 'c_large2');
  });

  $(".a3").hover(function() {
    $(this).attr('class', 'c_large3');
  });



/*---legibility---*/

  $(".a2").hover(function() {
    $(this).attr('class', 'c_illegible');
  });

  $(".a2b").hover(function() {
    $(this).attr('class', 'c_illegible2');
  });


/*---font---*/

  $(".a4").hover(function() {
    $(this).attr('class', 'c_font');
  });

  $(".a4b").hover(function() {
    $(this).attr('class', 'c_font2');
  });




/*---color---*/

    $(".a5").hover(function() {
    $(this).attr('class', 'c_color');
  });

    $(".a5b").hover(function() {
    $(this).attr('class', 'c_color2');
  });



$(document).ready(function(){
  
  $(".refresh").click(function() {
    $(".c_font").attr('class', '.normalbody');
    $(".c_font2").attr('class', '.normalbody');
    $(".c_color").attr('class', '.normalbody');
    $(".c_color2").attr('class', '.normalbody');
    $(".c_illegible").attr('class', '.normalbody');
    $(".c_illegible2").attr('class', '.normalbody');
    $(".c_large").attr('class', '.normalbody');
    $(".c_large2").attr('class', '.normalbody');
    $(".c_large3").attr('class', '.normalbody');
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;

  });

});


// $(document).ready(function(){

//   $(".dark").click(function() {
//     $("body").css('background-color','black');
//     $("h1").css('color','white');
//     $("h2").css('color','white');
//     $("h3").css('color','white');

//   });
//     });


$(document).ready(function(){

  $(".dark").click(function() {
    $("body").css('background-color','black');
    $("h1").css('color','white');
    $("h2").css('color','white');
    $("h3").css('color','white');

    });
});

$(document).ready(function(){

  $(".bright").click(function() {
    $("body").css('background-color','white');
    $("h1").css('color','black');
    $("h2").css('color','black');
    $("h3").css('color','black');

    });
});

