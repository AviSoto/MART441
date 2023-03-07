const section = document.querySelector('section');
let attempt = 0;
let score = 0;

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

let timeLeft = 60;

const timer = setInterval(() => {
  timeLeft--;
  document.getElementById("timer").textContent = timeLeft;
  if (timeLeft == 0) {
    clearInterval(timer);
    window.location = "page3.html";
  }
}, 1000);

const correctSound = new Audio("./sounds/correct.mp3");
const incorrectSound = new Audio("./sounds/incorrect.mp3");

function checkCards() {
  let first_card = document.getElementsByClassName("flip")[0]
  let second_card = document.getElementsByClassName("flip")[1]

  attempt += 1;
  

  setTimeout(() => {

    if (first_card.getAttribute("name") == second_card.getAttribute("name")) {

      first_card.remove()
      second_card.remove()
      document.getElementById("attempt").innerHTML = attempt;
      correctSound.play();
      score += 1;
    }

    else {
      first_card.classList.toggle("flip");
      second_card.classList.toggle("flip");
      incorrectSound.play();
    }
    if (score == 8) {
    window.location = "page3.html";
    }
  }, 1000)

}

