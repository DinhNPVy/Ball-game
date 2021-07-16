let canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');
let width_canvas = document.getElementById('my-canvas').width;
let height_canvas = document.getElementById('my-canvas').height
const width_rect = 100;
const height_rect = 10;
const radius_circle = 10;
let X_firstPoint_Circle = Math.floor(Math.random() * (width_canvas - 2 * radius_circle) + radius_circle);
let Y_firstPoint_Circle = Math.floor(Math.random() * height_canvas / 3 + radius_circle);

let rect = new Rectangle((width_canvas / 2 - width_rect / 2), (height_canvas - height_rect), width_rect, height_rect);
let bar = rect.DrawRect();

let circle = new Circle(X_firstPoint_Circle, Y_firstPoint_Circle, radius_circle, 'red', 2, 2);
circle.DrawCircle();

let listBrick = [];

function createlistBrick() {

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 9; j++) {
            // 50 = 25 (tọa độ x) + j * (do dai vien gach + khoang cach)
            let brick = new Brick(25 + j * (25 + 35), 25 + i * (10 + 10), 40, 10);
            listBrick.push(brick)
        }
    }
}
createlistBrick();

function drawBrick() {
    listBrick.forEach((item) => {
        if (!item.status) {
            item.draw()

        }
    })
}
drawBrick();

function checkcollision(circle) {
    listBrick.forEach((item) => {
        if (!item.status) {
            if (circle.x >= item.x && circle.x <= item.x + item.width &&
                (circle.y - circle.radius <= (item.y + item.height))) {
                item.status = true;
                circle.SpeedY = -circle.SpeedY;
            }
        }
    })
}


function Play() {
    let y = circle.y;
    let x = circle.x;
    if (circle.bottom >= canvas.height) {
        playInboxRingTone();
        return;
    }

    setTimeout(function () {

        clearScreen();
        circle.MoveBall();
        circle.CheckBorder();
        circle.DrawCircle();
        checkcollision(circle);
        rect.DrawRect();
        drawBrick();
        Play();
    }, 20);
}

function clearScreen() {
    ctx.clearRect(0, 0, width_canvas, height_canvas);
}

window.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 37:
            rect.MoveLeft();
            break;
        case 39:
            rect.MoveRight();
            break;
        case 38:
            circle.SpeedX *= 2;
            circle.SpeedY *= 2;
            break;
        case 40:
            circle.SpeedX /= 2;
            circle.SpeedY /= 2;
            break;
        case 32:
            Play();
            break;
    }

})

function playInboxRingTone() {
    var audio = new Audio('Warning2.mp3');
    audio.play();
}

function accleratePlus() {
    circle.SpeedX *= 2;
    circle.SpeedY *= 2;
}

function acclerateMinus() {
    circle.SpeedX /= 2;
    circle.SpeedY /= 2;
}