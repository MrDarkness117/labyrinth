// Setting the background

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.width = 920;
// canvas.height = 960;
canvas.width = 1151;
canvas.height = 1200;

let xCenter = canvas.width / 2;
let yCenter = canvas.height / 2;
// let dx = 2;
// let dy = -2;
let playerRadius = 15;
let pWidth = 60;
let pHeight = 60;
let scale = 0.3;
let scaleNote1 = 0.03;
let step = 4;

let playerPosX = 450;
let playerPosY = 400;
let playerHeight = 30;
let playerWidth = 30;

let lastXPos = playerPosX;
let lastYPos = playerPosY;

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
		if (this.isColliding()) { 
			return;
		}	
	}
	isColliding() {
		if (this.x + this.image.width > canvas.width || this.x < 0) return true;
		if (this.y + this.image.height > canvas.height || this.y < 0) return true;

		for (const wall of walls) {
			const isInXRange = this.x > wall.x && this.x < this.x < wall.x + wall.width;
			const isInYRange = this.y > wall.y && this.y < this.y < wall.y + wall.height;

			if (isInXRange && isInYRange) return true;
		}

		return false;
	}
	// Boundary() {
	// 	if (this.x + this.image.width > canvas.width) {
	// 		this.x -= step;
	// 	}
	// 	if (this.x < 0) {
	// 		this.x += step;
	// 	}
	// 	if (this.y + this.image.height > canvas.height) {
	// 		this.y -= step;
	// 	}
	// 	if (this.y < 0) {
	// 		this.y += step;
	// 	}
		// for (let i = 0; i < walls.length; i++) {
		//     if (this.x > walls[i].x - walls[i].width && this.x < walls[i].x + walls[i].width && this.y > walls[i].y - walls[i].height && this.y < walls[i].y + walls[i].height) {
		//         step = step * -1;
		//
		// for (let i of walls) {
		//     if (this.x > i.x - i.width && this.x < i.x + i.width && this.y > i.y - i.height && this.y < i.y + i.height) {
		//         step = step * -1;
		//     } else { step = 4 };
		// }
	// }
}

class Maze {
    constructor(image, x, y, width, height, scale) {
        this.x = x;
        this.y = y;

        this.image = new Image();
        this.image.src = image;

        this.image.height = this.image.height * scale;
        this.image.width = this.image.width * scale;

        this.height = height;
        this.width = width;
    }
}

class Note {
	constructor(image, sound, x, y) {
		this.x = x;
		this.y = y;

		this.image = new Image();
		this.image.src = image;

		this.sound = sound;
	}
}

class Wall {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;

		this.width = width;
		this.height = height;
	}
}

// Functions

window.addEventListener('keydown', keyPressed);

function keyPressed(e) {
	if (objects[0].isColliding()) {
		this.x = this.x + (this.x - lastXPos); 
		this.y = this.y + (this.y - lastYPos);
		// return;
	}			

	switch (e.key) {
    case "a":
	  lastXPos = objects[0].x
	  objects[0].x -= step;
      break;
	case "d":
	  lastXPos = objects[0].x
      objects[0].x += step;
      break;
    case "w":
    	lastYPos = objects[0].y
      objects[0].y -= step;
      break;
    case "s":
		lastYPos = objects[0].y
      objects[0].y += step;
	  break;
	  


	  
    case "ArrowLeft":
      objects[0].x -= step;
    //   playerPosX -= 4;
      break;
    case "ArrowRight":
      objects[0].x += step;
    //   playerPosX += 4;
      break;
    case "ArrowUp":
      objects[0].y -= step;
    //   playerPosY -= 4;
      break;
    case "ArrowDown":
      objects[0].y += step;
    //   playerPosY += 1;
      break;
  }
}
