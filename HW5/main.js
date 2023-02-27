card1 = null;
card2 = null;

var matchSound = new Audio ("sounds/correct.mp3");
var noMatchSound = new Audio ("sounds/incorrect.mp3");

    function clicked(card){
       
        if(card1==null)
        {
            card.className = "show";
            card1 = card;
        }
        else if(card2==null)
        {
            card.className = "show";
            card2 = card;
            
            setTimeout("checkMatch();", 1000);
        }
    }

    function checkMatch(){
      if(card1.src==card2.src){
        matchSound.play();
        card1 = null;
        card2 = null;
      }
      else {
        noMatchSound.play();
       card1.className = "hide";
       card2.className = "hide";
        card1 = null;
        card2 = null; 
      }
    }