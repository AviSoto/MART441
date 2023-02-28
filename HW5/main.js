const section = document.querySelector('selection');

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
  const cardArray = getCards();
  cardArray.sort(() => Math.random() - 0.5);
  return cardArray;
};

const cardGenerator = () => {
  const cardArray = randomize();

  cardArray.forEach(item => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
   
    face.src = item.imgSrc;

    selection.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
  });
};

cardGenerator();
