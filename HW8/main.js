function animateSquare() {
    $(".stuff").fadeOut();
    $("#third").toggle();
    setInterval(moveSquare, 1000);
    $(allDogs[0].theSelector).fadeOut().fadeIn();
  }
  
  function moveSquare() {
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
  }
  
  animateSquare();
  