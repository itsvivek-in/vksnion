$(document).scroll(function() {

  if($(window).scrollTop() > 350){

   $(".vks-nav").addClass('vks-nav-style');

  }
  else if($(window).scrollTop() < 350){

    $(".vks-nav").removeClass('vks-nav-style');

  }

  if($(window).scrollTop() > 500){

    $(".vks-div4-box").addClass('vks-div4-box-animation');

  }
  else {
    
    $(".vks-div4-box").removeClass('vks-div4-box-animation');

  }

});

