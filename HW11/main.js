class Square {
    constructor(options) {
      this.x = options.x;
      this.y = options.y;
      this.height = options.height;
      this.width = options.width;
      this.color = options.color;
    }
  
    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    getColor() {
      return this.color;
    }
}

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext('2d');

  var x = 50;
  var y = 50;
  var x2 = 300;
  var y2 = 300;

  var square1 = new Square({ x: 10, y: 20, height: 50, width: 50, color: "hotpink" });
  var square2 = new Square({ x: 50, y: 100, height: 50, width: 50, color: "purple" });
  
  $(document).ready(function () {
   
    drawSquare();
    setInterval(updateCanvas, 1000 / 60);
  });

  function updateCanvas() {
    drawSquare();
    moveSquare2random();

    var didCollide = hasCollided(square1, square2);

    if (didCollide) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
      
        square1.width = square1.width - 1;
        square1.height = square1.height - 1;
        square2.width = square2.width + 1;
        square2.height = square2.height + 1;
    }
  }

function drawSquare() {
  ctx.clearRect(0, 0, 800, 600);
  ctx.fillStyle = square1.getColor();
  ctx.fillRect(
    square1.getX(),
    square1.getY(),
    square1.getWidth(),
    square1.getHeight()
  );

  ctx.fillStyle = square2.getColor();
  ctx.fillRect(
    square2.getX(),
    square2.getY(),
    square2.getWidth(),
    square2.getHeight()
  );   
}
var xVelocity;
var yVelocity;

xVelocity = Math.floor((Math.random() * (4-2)+2));
yVelocity = Math.floor((Math.random() * (4-2)+2));

function moveSquare2random() {
  if (square2.x + square2.width > canvas.width) {
    square2.x = canvas.width - square2.width; 
  }
  if (square2.x <= 0) { 
    xVelocity *= -1;
    xVelocity += Math.floor((Math.random()))
  }
   else if (square2.x + square2.width >= canvas.width) {
    xVelocity *= -1; 
    xVelocity += -Math.floor((Math.random()))
    
  }
  
  if (square2.y <= 0 || square2.y + square2.height >= canvas.height) {
    yVelocity *= -1;
 
  }

  square2.x += xVelocity;
  square2.y += yVelocity;
  drawSquare(); 
}

window.addEventListener("keydown", keyHandlerDown);
window.addEventListener("keyup", keyHandlerDown);

function keyHandlerDown(e) {
 if (e.keyCode == 65 && square1.x > 0) {
    square1.x -= 10;
  } else if (e.keyCode == 83 && square1.y < canvas.height - square1.height) {
    square1.y += 10;
  } else if (e.keyCode == 87 && square1.y > 0) {
    square1.y -= 10; 
  } else if (e.keyCode == 68 && square1.x < canvas.width - square1.width) {
    square1.x += 10;   
  }
}

function hasCollided(object1, object2) {
    return !(
      object1.y + object1.height < object2.y ||
      object1.y > object2.y + object2.height ||
      object1.x + object1.width < object2.x ||
      object1.x > object2.x + object2.width
    );
  }