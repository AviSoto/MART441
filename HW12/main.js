var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
const squareSize = 20;

drawCircle();
setInterval(update, 1000);

function update() {
  drawCircle();
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(x + 10, y + 10, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "#red";
  ctx.fill();
}

class Apple {
  constructor(color, x, y) {
    this.color = color;
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let apples = [
  new Apple("red", 50, 50),
  new Apple("green", 100, 50),
  new Apple("yellow", 50, 100),
  new Apple("orange", 100, 100),
  new Apple("blue", 150, 50),
];

setInterval(drawApples, 1000);

function drawApples() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let apple of apples) {
    apple.draw();
  }
}

function drawPlayer() {
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, squareSize, squareSize);
    ctx.fillRect(x - squareSize, y, squareSize, squareSize);
    ctx.fillRect(x - squareSize * 2, y, squareSize, squareSize);
  
    if (x < 0) {
      x = 0;
    }
    if (x > canvas.width - squareSize * 3) {
      x = canvas.width - squareSize * 3;
    }
    if (y < 0) {
      y = 0;
    }
    if (y > canvas.height - squareSize) {
      y = canvas.height - squareSize;
    }
  }
  

setInterval(drawPlayer, 100);

function handleKeyPress(event) {
  if (event.keyCode === 37) {
    x -= squareSize;
  }
  if (event.keyCode === 38) {
    y -= squareSize;
  }
  if (event.keyCode === 39) {
    x += squareSize;
  }
  if (event.keyCode === 40) {
    y += squareSize;
  }

  drawPlayer();
}

document.addEventListener("keydown", handleKeyPress);

class Obstacle {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
  
    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  
  async function getObstacles() {
    const response = await fetch("obstacles.json");
    const obstacles = await response.json();
    return obstacles.map((obstacle) => new Obstacle(...Object.values(obstacle)));
  }
  
  let obstacles = [];
  
  async function setup() {
    obstacles = await getObstacles();
  }
  
  setup();
  
  function drawObstacles() {
    for (let obstacle of obstacles) {
      obstacle.draw();
    }
  }
  
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawApples();
    drawPlayer();
    drawObstacles();
  }, 100);
  

drawPlayer();

async function getFood() {
  const response = await fetch("apples.json");
  const food = await response.json();
  console.log(food);
  return food;
}

async function update() {
  const apples = await getFood();
  for (const apple of apples) {
    const newApple = new Apple(apple);
    newApple.drawApples();
  }
  drawObstacles();
}
