// var player1 = new Player('assets/img/minotaur.png', 500, 550)

const objects = [new Player('assets/img/minotaur.png', playerPosX, playerPosY, 30, 30)];
const walls = [
	{ x: 522, y: 612, width: 10, height: 345 },
	{ x: 485, y: 620, width: 10, height: 380 },
	{ x: 443, y: 660, width: 10, height: 340 },
	{ x: 798, y: 660, width: 10, height: 250 },
	{ x: 840, y: 610, width: 10, height: 340 },
	{ x: 874, y: 580, width: 10, height: 410 },
	{ x: 765, y: 610, width: 10, height: 260 },
	{ x: 725, y: 580, width: 10, height: 250 },
	{ x: 683, y: 620, width: 10, height: 160 },
	// { x: 653, y: 655, width: 8, height: 100 },
	// { x: 621, y: 620, width: 8, height: 90 },
	// { x: 586, y: 576, width: 8, height: 90 },
	// { x: 545, y: 535, width: 8, height: 90 },
	// { x: 425, y: 490, width: 8, height: 90 },
	// { x: 380, y: 440, width: 8, height: 90 }
	// {x: 425, y: 490, width: 8, height: 90},
];
const notes1 = [
	new Note('assets/img/whole_note.png', 'assets/snd/whole_note1.wav', 500, 960),
	new Note('assets/img/whole_note.png', 'assets/snd/whole_note1.wav', 760, 920),
	new Note('assets/img/whole_note.png', 'assets/snd/whole_note1.wav', 540, 800)
];
const notes2 = [];
const notes3 = [];
const notes4 = [];
const player = objects[0];

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawImage(new Maze('../assets/img/labyrinth_minotaur.png', 0, 0, canvas.width, canvas.height, 1))
	for (const wall of walls) {
		ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
	}

	for (const thing of objects) drawImage(thing, scale);


	// for (i=0; i < walls.length; i++) {
	//     ctx.clearRect(
	//         walls[i].x,
	//         walls[i].y,
	//         walls[i].width,
	//         walls[i].height
	//     )
	// }

	for (const note of notes1) drawImage(note);
	for (const note of notes2) drawImage(note);
	for (const note of notes3) drawImage(note);
	for (const note of notes4) drawImage(note);

	requestAnimationFrame(update);
}

function drawImage(note, scale = scaleNote1) {
	ctx.drawImage(
		note.image, //image to display
		0, //Initial x coord location
		0, //Initial y coord location
		note.image.width, //image width
		note.image.height, //image height
		note.x, //x pos
		note.y, //y pos
		note.image.width * scale, //image width multiplied by scale
		note.image.height * scale //image height multiplied by scale
	);
}

function update() {
	draw();
}
setInterval(update, 10)
