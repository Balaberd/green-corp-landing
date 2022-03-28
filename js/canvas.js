const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];
const BUBBLE_DENSITY = 100;

function generateDecimalBetween(left, right) {
    return (Math.random() * (left - right) + right).toFixed(2);
}

class Bubble {
    constructor(canvas) {
        this.canvas = canvas;
        this.getCanvasSize();
        this.init();
      }
    
    getCanvasSize() {
        this.canvasWidth = this.canvas.clientWidth;
        this.canvasHeight = this.canvas.clientHeight;
    }
    
    init() {
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.size = generateDecimalBetween(1, 3);
      this.alpha = (Math.floor(Math.random() * 6) + 5) / 10;
      this.translateX = Math.floor(Math.random() * this.canvasWidth);
      this.translateY = Math.floor(Math.random() * this.canvasHeight);
      this.velocity = generateDecimalBetween(20, 40);
      this.movementX = generateDecimalBetween(-2, 2) / this.velocity;
      this.movementY = generateDecimalBetween(1, 20) / this.velocity;
    }
  
    move() {
        this.translateX = this.translateX - this.movementX;
        this.translateY = this.translateY - this.movementY;
        if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth) {
            this.init();
            this.translateY = this.canvasHeight;
        }
    }
}

//const canvas = document.getElementById("orb-canvas");

class CanvasBackground {
    constructor(id) {
        this.canvas = document.getElementById(...);
        this.ctx = canvas.getContext('2d');
        this.dpr = window.devicePixelRatio;
        
    }
  
    start() {
        this.canvasSize();
        this.generateBubbles();
        this.animate();
    }

    canvasSize() {
        this.canvas.width = this.canvas.offsetWidth * this.dpr;
        this.canvas.height = this.canvas.offsetHeight * this.dpr;
     
        this.ctx.scale(this.dpr, this.dpr);
    }

    generateBubbles() {
        this.bubblesList = [];
        for (let i = 0; i < BUBBLE_DENSITY; i++) {
            this.bubblesList.push(new Bubble(this.canvas))
        }
    }
}
  