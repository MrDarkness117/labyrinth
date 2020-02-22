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
var scaleNote2 = 0.5;
var scaleNote3 = 0.2;
var scaleNote4 = 0.1;
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
        if (isColliding(player)) {dx = 0; dy = 0}
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
}

// The handler that makes the player stop + controls their location

function collideHandler() {
    dx = 0; 
    dy = 0;  
    movement = false;
    player.x += retrX;
    player.y += retrY;
    retrX = 0;
    retrY = 0; 
}

// The conditions for collisions

function isColliding(el) {
    if (el.x > canvas.width || el.x < 0) {player.x = 530; player.y = 570};
    if (el.y > canvas.height || el.y < 0) {player.x = 530; player.y = 570};

    for (const note of notes1) {
        let isInXRange = el.x + 40 > note.x && el.x + 40 < note.x + 30;
        let isInYRange = el.y + 40 > note.y && el.y + 40 < note.y + 30;

        if (isInXRange && isInYRange) {
            note.x = canvas.width + 30;
        
            let audio = new Audio(note.sound);
            audio.play();
        }
        
    }
    for (const note of notes2) {
        let isInXRange = el.x + 40 > note.x+30 && el.x + 40 < note.x + 75;
        let isInYRange = el.y + 40 > note.y && el.y + 40 < note.y + 50;
        
        if (isInXRange && isInYRange) {
            note.x = canvas.width + 30;
            
            let audio = new Audio(note.sound);
            audio.play();
        }

    }
    for (const note of notes3) {
        let isInXRange = el.x + 40 > note.x+30 && el.x + 40 < note.x + 60;
        let isInYRange = el.y + 40 > note.y+10 && el.y + 40 < note.y + 75;
        
        if (isInXRange && isInYRange) {
            note.x = canvas.width + 30
            
            let audio = new Audio(note.sound);
            audio.play();
        };

    }
    for (const note of notes4) {
        let isInXRange = el.x + 40 > note.x+10 && el.x + 40 < note.x + 40;
        let isInYRange = el.y + 40 > note.y-10 && el.y + 40 < note.y + 30;

        if (isInXRange && isInYRange) {
            note.x = canvas.width + 30;
    
            let audio = new Audio(note.sound);
            audio.play();
        }
    }

    // Condition that calls the collideHandler() - stop the player movement when colliding

    for (const node of nodes) {
        if (el.x === node.x && el.y === node.y && movement === true) {
            setTimeout(collideHandler, 1);
        }
    }

    return false;
}

class Note {
    constructor (image, sound, x, y, width, height) {
        this.x = x;
        this.y = y;

        this.width = 30;
        this.height = 30;

        this.image = new Image();
        this.image.src = image;

        this.sound = sound;
    }
}

// Functions for movement

function processKey(e) {
    if (movement === false) {
        dx = 0;
        dy = 0;
        checkPos();
        if (e.keyCode == 38 && blockUp === false) {movement = true; player.y += -2; dy = -2; retrY = 2;} // UpArrow
        if (e.keyCode == 40 && blockDn === false) {movement = true; player.y += 2; dy = 2; retrY = -2;} // DownArrow
        if (e.keyCode == 37 && blockLt === false) {movement = true; player.x += -2; dx = -2; retrX = 2;} // RightArrow
        if (e.keyCode == 39 && blockRt === false) {movement = true; player.x += 2; dx = 2; retrX = -2;} // LeftArrow
        if (e.keyCode == 87 && blockUp === false) {movement = true; player.y += -2; dy = -2; retrY = 2;} // W
        if (e.keyCode == 83 && blockDn === false) {movement = true; player.y += 2; dy = 2; retrY = -2;} // S
        if (e.keyCode == 65 && blockLt === false) {movement = true; player.x += -2; dx = -2; retrX = 2;} // A
        if (e.keyCode == 68 && blockRt === false) {movement = true; player.x += 2; dx = 2; retrX = -2;} // D
    }
}

window.addEventListener("keydown", function (e) { processKey(e); });
