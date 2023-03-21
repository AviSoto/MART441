class ViewMaster {
    constructor(title, image, description, author, year) {
      this.title = title;
      this.image = image;
      this.description = description;
      this.author = author;
      this.year = year;
    }
  }
  const viewMasterObjects = [
    new ViewMaster(
      "Keep Abortion Safe and Legal",
      "images/abortion.jpg",
      "A sign seen outside the Supreme Court",
      "Gayatri Malhotra/Unsplash",
      "2022"
    ),
    new ViewMaster(
      "Black Lives Matter",
      "images/blm.jpg",
      "A fist raised in solidarity for George Floyd",
      "Clay Banks/Unsplash",
      "2020"
    ),
    new ViewMaster(
      "Pride",
      "images/pride.jpg",
      "A couple seen at the Gay Pride march organized by the Inter-LGBT",
      "Norbu Gyachung/Unsplash",
      "2021"
    ),
    new ViewMaster(
      "Cleanup",
      "images/beach.jpg",
      "A beach cleanup of plastic water bottles, along with a variety of other single use plastics that washed in with the tide",
      "Brian Yurasits/Unsplash",
      "2019"
    ),
    new ViewMaster(
      "Community Aid",
      "images/community.jpg",
      "Food being handed out to people in need",
      "Joel Muniz/Unsplash",
      "2020"
    )
  ];
  function displayRandomObject() {
    const container = document.getElementById("viewmaster-container");
    container.innerHTML = "";
    const randomObject = viewMasterObjects[Math.floor(Math.random() * viewMasterObjects.length)];
    const imageElement = document.createElement("img");
    imageElement.src = randomObject.image;
    const titleElement = document.createElement("h2");
    titleElement.innerText = randomObject.title;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = randomObject.description;
    const authorElement = document.createElement("p");
    authorElement.innerText = `By ${randomObject.author} (${randomObject.year})`;
    container.appendChild(imageElement);
    container.appendChild(titleElement);
    container.appendChild(descriptionElement);
    container.appendChild(authorElement);
  }