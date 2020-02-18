// Setting the background

var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");

canvas.width = 978;
canvas.height = 1080;

var xCenter = canvas.width/2;
var yCenter = canvas.height/2;
// var dx = 2;
// var dy = -2;
var playerRadius = 15;
var pWidth = 60;
var pHeight = 60;
var scale = 0.3;
var scaleNote1 = 0.03;
var speed = 1;

var objects = [];
var player = null;

// Placing a controllable element (player icon)

class Player {
    constructor (image, x, y) {
        this.x = x;
        this.y = y;
        
        this.image = new Image();
        this.image.src = image;
    }
    Update() {
        this.y += speed;

        var touchpre = false;

        for (var i = 0; i < notes1.length; i++) {
            touchpre = player.Collide(notes1[i]);
            notes1[i].image = '';
            console.log('test')
        }
    }
    Move(v, d) {
        // var temp = d;
        if (v=='x') { // X-axis movement
            this.x += d;

            if (this.x + this.image.width * scale > canvas.width) {
                this.x -= d;
            }
            // for (var i = 0; i < walls.length; i++) {
            //     if (this.x + this.image.width * scale > walls[i].width)
            //     {
            //         this.x -= d;
            //     }
            //     // if (this.x + this.image.width * scale > walls[i].x && this.x < walls[i].x + walls[i].height * scale) {
            //     //     this.x -= d;
            //     // }
            // }
            
            if (this.x < 0) {
                this.x = 0;
            }
        } else { // Y-axis movement
            this.y += d;
            
            if (this.y + this.image.height * scale > canvas.height) {
                this.y -= d;
            }
            
            if (this.y < 0) {
                this.y = 0;
            }
            for (var i = 0; i < walls.length; i++) {
                if (this.x > walls[0].x - walls[0].width && this.x < walls[0].x + walls[0].width) {
                    this.x -= d;
                }
                if (this.y > walls[0].y - walls[0].height && this.y < walls[0].y + walls[0].height) {
                    this.y -= d;
                }
            }
        }
    }
    Collide(note) {
        var touch = false;

        if (this.y < note.y + note.image.height * scale && this.y + this.image.height * scale > note.y) {
            if (this.x + this.image.width * scale > note.x && this.x < note.x + note.image.height * scale) {
                touch = true;
            }
        }

        return touch;
    }
}

// Objects to collect

class Note {
    constructor (image, sound, x, y) {
        this.x = x;
        this.y = y;

        this.image = new Image();
        this.image.src = image;

        this.sound = sound;
    }
}

// Walls



// Functions

window.addEventListener("keydown", function (e) { KeyDown(e); });

function KeyDown(e) {
    switch(e.which) {
        case 65:
            player.Move('x', -speed);
            break;
        case 68:
            player.Move('x', speed);
            break;
        case 87:
            player.Move('y', -speed);
            break;
        case 83:
            player.Move('y', speed);
            break;
        case 37: // Right
            player.Move('x', -speed);
            break;
        case 39: // Left
            player.Move('x', speed);
            break;
        case 38: // Up
            player.Move('y', -speed);
            break;
        case 40: // Down
            player.Move('y', speed);
            break;
    }
}

function Update() {
    draw();
}

// function drawBall() {
//     // let dx = 2;
//     // let dy = -2;
//     // let x = xCenter;
//     // let y = yCenter+15;
//     ctx.beginPath();
//     ctx.arc(x, y, playerRadius, 0, Math.PI*2, false);
//     ctx.fillStyle='green';
//     ctx.fill();
//     ctx.closePath();
// }


