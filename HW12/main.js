var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 200;
const squareSize = 20;
const scoreboard = document.getElementById("scoreboard");
scoreboard.innerText = "Score: 0";
const apples = [];

drawCircle();
setInterval(update, 1000);

function drawCircle() {
  ctx.beginPath();
  ctx.arc(x + 10, y + 10, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
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

function drawApples() {
  for (let i = 0; i < apples.length; i++) {
    const apple = apples[i];
    apple.draw();

    if (
      x < apple.x + 10 &&
      x + squareSize > apple.x &&
      y < apple.y + 10 &&
      y + squareSize > apple.y
    ) {
      apples.splice(i, 1);

      const score = parseInt(scoreboard.innerText.split(": ")[1]);
      const newScore = score + 1;
      scoreboard.innerText = "Score: " + newScore.toString();
      console.log("Score: " + newScore.toString());
    }
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

    for (let obstacle of obstacles) {
        if (
            x < obstacle.x + obstacle.width &&
            x + squareSize > obstacle.x &&
            y < obstacle.y + obstacle.height &&
            y + squareSize > obstacle.y
        ) {
            x = 50;
            y = 200;
            break;
        }
    }
}


setInterval(drawPlayer);

function handleKeyPress(event) {
    event.preventDefault();
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
    const data = await response.json();
    return data.obstacles;
  }
  
  let obstacles = [];
  
  async function setup() {
    obstacles = await getObstacles();
  }
  
  setup();
  
  function drawObstacles() {
    for (let obstacle of obstacles) {
      obstacle = new Obstacle(obstacle.x, obstacle.y, obstacle.width, obstacle.height, obstacle.color);
      obstacle.draw();
    }
  }

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawApples();
    drawPlayer();
    drawObstacles();
  }, 5000);

async function getFood() {
  try {
    const response = await fetch("apples.json");
    const food = await response.json();
    const randomFood = food.map((apple) => {
      const randomX = Math.floor(Math.random() * (canvas.width - 20));
      const randomY = Math.floor(Math.random() * (canvas.height - 20));
      return {
        ...apple,
        x: randomX,
        y: randomY,
      };
    });
    return randomFood;
  } catch (error) {
    console.error("Failed to get food:", error);
    return [];
  }
}
async function setup() {
  obstacles = await getObstacles();
  await getFood();
}

async function update() {
  const newApples = await getFood();
  console.log(newApples);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  newApples.forEach((apple) => {
    const newAppleObj = new Apple(apple.color, apple.x, apple.y);
    newAppleObj.draw();
  });
  drawObstacles();
}