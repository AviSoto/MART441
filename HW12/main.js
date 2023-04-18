    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = 50;
    var y = 50;
    drawCircle();
    setInterval(update, 1000);

    function update() {
        drawCircle();
    }
    
    function drawCircle() {
        ctx.beginPath();
        ctx.arc(x+10, y+10, 10, 0, 2*Math.PI);
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
        ctx.arc(this.x, this.y, 10, 0, 2*Math.PI);
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
        new Apple ("blue", 150, 50)

    ];
    
    setInterval(drawApples, 1000);
    
    function drawApples() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let apple of apples) {
        apple.draw();
        }
    }
    async function getFood() {
        const response = await fetch('/apples.json');
        const food = await response.json();
        console.log(response);
        console.log(food);
      }
