const section = document.querySelector('section');
let attempt = 0;

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
    card.setAttribute("name", item.name);
    back.src = "./images/Blank.jpg";
    face.src = item.imgSrc;

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    

    card.addEventListener("click", function () {
      
      if (document.getElementsByClassName("flip").length <= 1) {
        card.classList.toggle("flip");
        if (document.getElementsByClassName("flip").length == 2) {

          checkCards();
        }
      }
      else {
        return
      }
      
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

function checkCards() {
  let first_card = document.getElementsByClassName("flip")[0]
  let second_card = document.getElementsByClassName("flip")[1]

  attempt += 1;
  
  setTimeout(() => {
   
    if (first_card.getAttribute("name") == second_card.getAttribute("name")) {
      
      first_card.remove()
      second_card.removw()
      
      document.getElementById("attempt").innerHTML = attempt;
    }
    
    else {
      first_card.classList.toggle("flip");
      second_card.classList.toggle("flip");
    }
    
  }, 1000)
  
  if (attempt ==8){
    window.location = "page3.html"
  }
}

function getInformation() {
  var information = {
    "firstname": document.getElementById("firstName").value,
    "lastname": document.getElementById("lastName").value,
    "age": document.getElementById("age").value
  };
  document.getElementById("info").innerHTML = information.firstname + ":" + information.lastname + ":" + information.age;
  localStorage.setItem("information", JSON.stringify(information));
}