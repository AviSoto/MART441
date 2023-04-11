function boundingBoxCollision(square1, square2) {
    const square1BB = square1.getBB();
    const square2BB = square2.getBB();
  return square1BB.intersects(square2BB);
}

class Square {
    constructor(x, y, height, width, color) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.color = color;
    }
getBB() {
        return {
          x1: this.x,
          y1: this.y,
          x2: this.x + this.width,
          y2: this.y + this.height,
         };
       }
    }
    setX(x) {
      this.x = x;
    }
    setY(y) {
      this.y = y;
    }
    setHeight(height) {
      this.height = height;
    }
    setWidth(width) {
      this.width = width;
    }
    setColor(color) {
      this.color = color;
    }
    get theX() {
      return this.x;
    }
    get theY() {
      return this.y;
    }
    get theHeight() {
      return this.height;
    }
    get theWidth() {
      return this.width;
    }
    get theColor() {
      return this.color;
    }
  }
  
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext('2d');

  var x = 50;
  var y = 50;
  var x2 = 300;
  var y2 = 300;
  var square1;
  var square2;

  $(document).ready(function () {
    square1 = new Square(50, 50, 50, 50, "hotpink");
    square2 = new Square(100, 100, 50, 50, "purple");
    
    drawSquare();
    $(this).keypress(function (event) {
      getKey(event);
    });
  });
  
  function drawSquare() {
    ctx.clearRect(0, 0, 800, 600); 
    square1.setX(x);
    square1.setY(y);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(
      square1.theX,
      square1.theY,
      square1.theWidth,
      square1.theHeight
    );
  
    square2.setX(x2);
    square2.setY(y2);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(
      square2.theX,
      square2.theY,
      square2.theWidth,
      square2.theHeight
    );
  }
  
  
  function moveUp() {
    y -= 20;
  }
  
  function moveDown() {
    y += 20;
  }
  function moveLeft() {
    x -= 20;
  }
  function moveRight() {
    x += 20;
  }
  
  function hasCollided(object1, object2) {
    return !(
      object1.y + object1.height < object2.y ||
      object1.y > object2.y + object2.height ||
      object1.x + object1.width < object2.x ||
      object1.x > object2.x + object2.width
    );
  }
  
  function getKey(event) {
    var didCollide = hasCollided(square1, square2);
    if (didCollide) {
      window.alert("uhoh! you crashed!");
    }
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
      moveUp();
    } else if (actualLetter == "s") {
      moveDown();
    } else if (actualLetter == "d") {
      moveRight();
    } else if (actualLetter == "a") {
      moveLeft();
    }
    drawSquare();
  }
  