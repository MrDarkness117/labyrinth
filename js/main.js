// Setting the background

var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");

// canvas.width = 920;
// canvas.height = 960;
canvas.width = 1151;
canvas.height = 1200;

var xCenter = canvas.width/2;
var yCenter = canvas.height/2;

var playerRadius = 15;
var scale = 0.3;
var scaleNote1 = 0.03;
// var step = 4;

let dx = 0;
let dy = 0;
let retrX = 0;
let retrY = 0;
let movement = false;

// Blocks for movement through nodes

let blockUp = false;
let blockDn = false;
let blockLt = false;
let blockRt = false;

var playerPosX = 530;
var playerPosY = 570;
var playerHeight = 30;
var playerWidth = 30;

// Classes

class Player {
    constructor(image, x, y, width, height) {
        this.x = x;
        this.y = y;

        this.image = new Image();
        this.image.src = image;

        this.width = width;
        this.height = height;
    }
    update() {
        // this.x += dx;
        // this.y += dy;
        if (isColliding(player)) {dx = 0; dy = 0}
            // x += 5;

    }
    isColliding() {
        if (this.x /*+ this.image.width*/ > canvas.width || this.x < 0) {movement = false; return true;}
        if (this.y /*+ this.image.height*/ > canvas.height || this.y < 0) {movement = false; return true;}
    
        // for (const wall of walls) {
        //   const isInXRange = this.x > wall.x && this.x < this.x < wall.x + wall.width;
        //   const isInYRange = this.y > wall.y && this.y < this.y < wall.y + wall.height;
    
        //   if (isInXRange && isInYRange) return true;
        for (const node of nodes) {
            if (this.x == node.x && this.y == node.y) {
                movement = false;
                return true;
            }
        }
        // }
    
        return false;
    }
    // Boundary() {
    //     if (this.x + this.image.width > canvas.width) {
    //         this.x -= step;
    //     }
    //     if (this.x < 0) {
    //         this.x += step;
    //     }
    //     if (this.y + this.image.height > canvas.height) {
    //         this.y -= step;
    //     }
    //     if (this.y < 0) {
    //         this.y += step;
    //     }
        
        // for (var i of walls) {
        //     if (this.x > i.x - i.width && this.x < i.x + i.width && this.y > i.y - i.height && this.y < i.y + i.height) {
        //         step = step * -1;
        //     } else { step = 4 };
        // }
    // }
}

function collideHandler() {
    dx = 0; 
    dy = 0; 
    console.log('collided'); 
    movement = false;
    player.x += retrX;
    player.y += retrY;
    retrX = 0;
    retrY = 0; 
    // return true
}

function isColliding(el) {
    if (el.x /*+ el.image.width*/ > canvas.width || el.x < 0) {player.x = 530; player.y = 570};
    if (el.y /*+ el.image.height*/ > canvas.height || el.y < 0) {player.x = 530; player.y = 570};

    // for (const wall of walls) {
    //   const isInXRange = this.x > wall.x && this.x < this.x < wall.x + wall.width;
    //   const isInYRange = this.y > wall.y && this.y < this.y < wall.y + wall.height;

    //   if (isInXRange && isInYRange) return true;
    for (const node of nodes) {
        if (el.x === node.x && el.y === node.y && movement === true) {
            setTimeout(collideHandler, 1);
        }
    }
    // }

    return false;
}

class Note {
    constructor (image, sound, x, y) {
        this.x = x;
        this.y = y;

        this.image = new Image();
        this.image.src = image;

        this.sound = sound;
    }
}

// Functions

function processKey(e) {
    if (movement === false) {
        dx = 0;
        dy = 0;
        checkPos();
        if (e.keyCode == 38 && blockUp === false) {movement = true; player.y += -2; dy = -2; retrY = 2;}
        if (e.keyCode == 40 && blockDn === false) {movement = true; player.y += 2; dy = 2; retrY = -2;}
        if (e.keyCode == 37 && blockLt === false) {movement = true; player.x += -2; dx = -2; retrX = 2;}
        if (e.keyCode == 39 && blockRt === false) {movement = true; player.x += 2; dx = 2; retrX = -2;}
    }
}

window.addEventListener("keydown", function (e) { processKey(e); });

// function keyPressed(e) {
//     switch(e.which) {
//         case 65:
//             objects[0].x -= step;
//             // objects[0].Boundary();
//             objects[0].isColliding();
//             if (objects[0].isColliding){
//                 objects[0].x += step;
//             };
//             break;
//         case 68:
//             objects[0].x += step;
//             // objects[0].Boundary();
//             objects[0].isColliding();
//             if (objects[0].isColliding){
//                 objects[0].x -= step;
//             };
//             break;
//         case 87:
//             objects[0].y -= step;
//             // objects[0].Boundary();
//             objects[0].isColliding();
//             if (objects[0].isColliding){
//                 objects[0].y += step;
//             };
//             break;
//         case 83:
//             objects[0].y += step;
//             // objects[0].Boundary();
//             objects[0].isColliding();
//             if (objects[0].isColliding){
//                 objects[0].y -= step;
//             };
//             break;
//         case 37: // Right
//             playerPosX -= 4;
//             break;
//         case 39: // Left
//             playerPosX += 4;
//             break;
//         case 38: // Up
//             playerPosY -= 4;
//             break;
//         case 40: // Down
//             playerPosY += 1;
//             break;
//     }
// }