class Brick {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.range = 25;
        this.x = x;
        this.y = y;
        this.status = false;





    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }
}