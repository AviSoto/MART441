const section = document.querySelector('section');

const cardArray = () => [
  { name: "Callisto", imgSrc: "./images/Callisto.jpg"},
  { name: "Charon", imgSrc: "./images/Charon.jpg"},
  { name: "Dione", imgSrc: "./images/Dione.jpg"},
  { name: "Enceladus", imgSrc: "./images/Enceladus.jpg"},
  { name: "Europa", imgSrc: "./images/Europa.jpg"},
  { name: "Ganymede", imgSrc: "./images/Ganymede.jpg"},
  { name: "Mimas", imgSrc: "./images/Mimas.jpg"},
  { name: "Titan", imgSrc: "./images/Titan.jpg"},
  { name: "Callisto", imgSrc: "./images/Callisto.jpg"},
  { name: "Charon", imgSrc: "./images/Charon.jpg"},
  { name: "Dione", imgSrc: "./images/Dione.jpg"},
  { name: "Enceladus", imgSrc: "./images/Enceladus.jpg"},
  { name: "Europa", imgSrc: "./images/Europa.jpg"},
  { name: "Ganymede", imgSrc: "./images/Ganymede.jpg"},
  { name: "Mimas", imgSrc: "./images/Mimas.jpg"},
  { name: "Titan", imgSrc: "./images/Titan.jpg"},
];

const randomize = () => {
  const cards = cardArray();
  cards.sort(() => Math.random() - 0.5);
  return cards;
};

const cardGenerator = () => {
  const cardArray = randomize();

  cardArray.forEach(item => {
    const card = document.createElement("div");
    const back = document.createElement("img");
    const face = document.createElement("img");
    card.classList = "card";
    back.classList = "back";
    face.classList = "face";
   
    back.src = "./images/Blank.jpg";
    face.src = item.imgSrc;

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", function () {
      card.classList.toggle("flip");
    });

    });
};

cardGenerator();

function getInformation() {
  var information = {
    "firstname": document.getElementById("firstName").value,
    "lastname": document.getElementById("lastName").value,
    "age": document.getElementById("age").value
  };
  document.getElementById("info").innerHTML = information.firstname + ":" + information.lastname + ":" + information.age;
  localStorage.setItem("information", JSON.stringify(information));
}

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

