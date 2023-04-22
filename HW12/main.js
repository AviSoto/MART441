var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
const squareSize = 20;
const scoreboard = document.getElementById("scoreboard");
scoreboard.innerText = "Score: 0";
let apples = [];
let obstacles = [];
let speed = 500;

setup();

async function getFood() {
  const response = await fetch("apples.json");
  const data = await response.json();
  console.log(data);
  apples = data;

}

async function getObstacles() {
  const response = await fetch("obstacles.json");
  const data = await response.json();
  console.log(data);
  obstacles = data;
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
  

function drawApples(apples) {
  for (let apple of apples) {
    apple = new Apple(apple.color, apple.x, apple.y);
    apple.draw();
  }
}

function drawObstacles(obstacles) {
    for (let obstacle of obstacles) {
      obstacle = new Obstacle(obstacle.x, obstacle.y, obstacle.width, obstacle.height, obstacle.color);
      obstacle.draw();
    }
}
  
function drawPlayer() {
  ctx.fillStyle = "green";
  ctx.fillRect(x, y, squareSize, squareSize);

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
 
  for (let apple of apples) {
      if (
          x < apple.x + 20 &&
          x + squareSize > apple.x &&
          y < apple.y + 20 &&
          y + squareSize > apple.y
      )
      {
        console.log("eat apple")

        const munchSound = new Audio("munch.mp3");
        munchSound.play();

        apple.x = Math.floor(Math.random() * (canvas.width - 20));
        apple.y = Math.floor(Math.random() * (canvas.height - 20));

        let score = parseInt(scoreboard.innerText.split(" ")[1]);
        score++;

        scoreboard.innerText = `Score: ${score}`;
      }
  }

  for (let obstacle of obstacles) {
      if (
          x < obstacle.x + obstacle.width &&
          x + squareSize > obstacle.x &&
          y < obstacle.y + obstacle.height &&
          y + squareSize > obstacle.y
      ) {
          x = 50;
          y = 50;
        scoreboard.innerText = "Score: 0";
      
          break;
      }
  }

}

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

function moveObstacles(obstacle) {
  setInterval(() => {
    for (let obstacle of obstacles) {
      const randomDirection = Math.floor(Math.random() * 4);
      if (randomDirection === 0 && obstacle.x > 20) {
        obstacle.x -= squareSize;
      } else {
        obstacle.x += squareSize;
      }

      if (randomDirection === 1 && obstacle.y > 20) {
        obstacle.y -= squareSize;
      } else {
        obstacle.y += squareSize;
      }

      if (randomDirection === 2 && obstacle.x < canvas.width - 20) {
        obstacle.x += squareSize;
      } else {
        obstacle.x -= squareSize;
      }
      
      if (randomDirection === 3 && obstacle.y < canvas.height - 20) {
        obstacle.y += squareSize;
      } else {
        obstacle.y -= squareSize;
      }
    }

  }, speed);


}

moveObstacles();

function setup() {
  setInterval(draw, 1000 / 60);
  getObstacles();
  getFood(); 
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObstacles(obstacles);
  drawApples(apples);
  
  drawPlayer();
  // moveFood();
}

function moveFood() {
  setInterval(() => {
    for (let apple of apples) {

      const randomDirection = Math.floor(Math.random() * 4);
      if (randomDirection === 0 && apple.x > 20) {
        apple.x -= squareSize;
      } else {
        apple.x += squareSize;
      }
        
        
      if (randomDirection === 1 && apple.y > 20) {
        apple.y -= squareSize;
      } else {
        apple.y += squareSize;
      }

      if (randomDirection === 2 && apple.x < canvas.width - 20) {
        apple.x += squareSize;
      } else {
        apple.x -= squareSize;
      }
      if (randomDirection === 3 && apple.y < canvas.height - 20) {
        apple.y += squareSize;
      } else {
        apple.y -= squareSize;
      }

    }
  }, 1000);
} 

moveFood();