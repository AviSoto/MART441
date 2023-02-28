const cardArray = () => [
{
    name: 'Callisto',imgSrc: 'images/Callisto.jpg'
},
{
    name: 'Charon', imgSrc: 'images/Charon.jpg'
},
{
    name: 'Dione', imgSrc: 'images/Dione.jpg'
},
{
    name: 'Enceladus', imgSrc: 'images/Enceladus.jpg'
},
{
    name: 'Europa', imgSrc: 'images/Europa.jpg'
},
{
    name: 'Ganymede', imgSrc: 'images/Ganymede.jpg'
},
{
    name: 'Mimas', imgSrc: 'images/Mimas.jpg'
},
{
    name: 'Titan', imgSrc: 'images/Titan.jpg'
},
{
    name: 'Callisto', imgSrc: 'images/Callisto.jpg'
},
{
    name: 'Charon', imgSrc: 'images/Charon.jpg'
},
{
    name: 'Dione', imgSrc: 'images/Dione.jpg'
},
{
    name: 'Enceladus', imgSrc: 'images/Enceladus.jpg'
},
{
    name: 'Europa', imgSrc: 'images/Europa.jpg'
},
{
    name: 'Ganymede', imgSrc: 'images/Ganymede.jpg'
},
{
    name: 'Mimas', imgSrc: 'images/Mimas.jpg'
},
{
    name: 'Titan', imgSrc: 'images/Titan.jpg'
},

];

const randomize = () => {
    const cardArray = getCards();
    cardArray.sort() => Math.random() - 0.5);
    return cardArray;
};

const cardGenerator = () => {
   const cardArray = randomize();
   cardArray.forEach(item => {
    console.log(item);
   })
   const card = document.createElement("div");
   const face = document.createElement("img");
   const back = document.createElement("div");
   card.classList = 'card';
   face.classList = 'face';
   back.classList = 'back';


}

cardGenerator();









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