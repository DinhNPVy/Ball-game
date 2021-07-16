const PI = Math.PI;
class Circle {
    constructor(x, y, radius, color, SpeedX, SpeedY){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.SpeedX = SpeedX;
        this.SpeedY = SpeedY;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.color = color;
    }

    DrawCircle(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2*PI);
        this.ctx.fill();
        this.ctx.stroke();
    }


    MoveBall(){
        
        this.x +=this.SpeedX;
        this.y +=this.SpeedY;

        this.left = this.x - this.radius;
        this.top = this.y - this.radius;
        this.right = this.x + this.radius;
        this.bottom = this.y + this.radius;
    }
    CheckBorder(){
        if(this.left <= 0 || this.right >= this.canvas.width) {
            this.SpeedX = -this.SpeedX;
        }
        if(this.top <= 0 || (this.bottom >= this.canvas.height - rect.height && this.x >= rect.x && this.x <= rect.x+rect.width)){
            this.SpeedY = -this.SpeedY;
        } 
    }


    /*CheckBorder(){
        if (this.y == this.radius){
            this.SpeedY = -this.SpeedY;
        }

        if (this.x ==0 || this.x == this.canvas.width-this.radius){
            this.SpeedX = -this.SpeedX;
        }
    }*/
}

/* Xử lý các case chạm biên
Nếu y= chiều cao của canvas: Chạm đáy ---> stop
Nếu y= 0, chạm cạnh trên: thực hiện hàm DownLeft nếu vừa thực hiệp Upleft, thực hiện hàm DownRight nếu vừa thực hiện UpRight
Nếu x= 0, chạm cạnh bên trái: Thực hiện hàm DownRight nếu vừa thực hiện hàm DownLeft, thực hiện hàm UpRight nếu vừa thực hiện hàm UpLeft
Nếu x= độ rộng Canvas: Chạm cạnh bên phải: Thực hiện DownLeft nếu vừa thực hiện DownRight, thực hiện UpLeft nếu vừa thực hiện hàm UpRight
*/

/*
TH2: y=0.
Tạo 1 hàm Move: trong hàm Move này sẽ có các quy luật chạm, nảy của quả bóng
Move()
if y = 0 {

}
*/
