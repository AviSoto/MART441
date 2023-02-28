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

    card.addEventListener("click", (e) => {
        card.classList.toggle("flip");
     });

    });
};

cardGenerator();

const cards = document.querySelectorAll('card');
function flipCard() {
    this.classList.toggle('flip');
    card.addEventListener("click", (e)=> { console.log("hello");});
 }
 
 cards.forEach(card => card.addEventListener('click', flipCard));