$(document).ready(function(){
    var images = ["images/Ground.jpg", "images/Birds.jpg", "images/Mountains.jpg"];
    var currentIndex = 0;
    var text = ["“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”―Neil Gaiman", "“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.” —Unknown", "“Work hard in silence, let your success be the noise.” ―Frank Ocean", "“Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.” ―Christine Caine", "“In the middle of every difficulty lies opportunity.” ―Albert Einstein", "“If you judge people, you have no time to love them.” ―Mother Teresa" ];
    var currentTextIndex = 0;

    function changeImage(){
        $("#image").fadeOut(1000, function(){
            currentIndex = (currentIndex + 1) % images.length;
            $(this).attr("src", images[currentIndex]).fadeIn(1000);
        });
    }

    function changeText(){
        currentTextIndex = (currentTextIndex + 1) % text.length;
        $("#text").text(text[currentTextIndex]);
    }

    function moveSquare(){
        $("#square").animate({left:920}).animate({top:10}).animate({left:470}).animate({top:360}).fadeOut(1000, function(){
            $(this).css({
                "-webkit-border-radius": "50%",
                "-moz-border-radius": "50%",
                "border-radius": "50%"
            });
            $("#circle").fadeIn(1000, function(){
                moveCircle();
            });
        });
    }

    function moveCircle(){
        $("#circle").animate({left:920}).animate({top:10}).animate({left:470}).animate({top:360}).fadeOut(1000, function(){
            $(this).css({
                "-webkit-border-radius": "0%",
                "-moz-border-radius": "0%",
                "border-radius": "0%"
            });
            $("#square").fadeIn(1000, function(){
                moveSquare();
            });
        });
    }

    setInterval(changeImage, 8000);
    setInterval(changeText, 4000);
    setTimeout(moveSquare, 1000);
});
