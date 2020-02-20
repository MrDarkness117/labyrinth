var objects = 
[
    new Player('assets/img/minotaur.png', playerPosX, playerPosY, 1, 1),
]
// var walls = 
// [
//     {x: 522, y: 612, width: 10, height: 345},
//     {x: 485, y: 620, width: 10, height: 380},
//     {x: 443, y: 660, width: 10, height: 340},
//     {x: 798, y: 660, width: 10, height: 250},
//     {x: 840, y: 610, width: 10, height: 340},
//     {x: 874, y: 580, width: 10, height: 410},
//     {x: 765, y: 610, width: 10, height: 260},
//     {x: 725, y: 580, width: 10, height: 250},
//     {x: 683, y: 620, width: 10, height: 160},
//     {x: 653, y: 655, width: 8, height: 100},
//     {x: 621, y: 620, width: 8, height: 90},
//     {x: 586, y: 576, width: 8, height: 90},
//     {x: 545, y: 535, width: 8, height: 90},
//     {x: 425, y: 490, width: 8, height: 90},
//     {x: 380, y: 440, width: 8, height: 90},
// ];
var notes1 = 
[
    new Note('assets/img/whole_note.png', 'assets/snd/whole_note1.wav', 500, 960),
    new Note('assets/img/whole_note.png', 'assets/snd/whole_note1.wav', 760, 920),
    new Note('assets/img/whole_note.png', 'assets/snd/whole_note1.wav', 540, 800),
];
var notes2 = [

];
var notes3 = [

];
var notes4 = [
    
];
var player = objects[0]

function draw() {
    isColliding(player);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // for (let node of nodes) {
    //     ctx.fillRect(node.x+40, node.y+40, 10, 10)
    //     ctx.fillStyle='rgb(255,100, 0)';
    // }
    for (let i=99; i < 110; i++) {
        ctx.fillRect(nodes[i].x+40, nodes[i].y+40, 10, 10);
        ctx.fillStyle='rgb(255, 0, 0)'
    }
    player.x += dx;
    player.y += dy;

    for (i=0; i < objects.length; i++) {
        ctx.drawImage(
            objects[i].image, //image to display
            0, //Initial x coord location
            0, //Initial y coord location
            objects[i].image.width, //image width
            objects[i].image.height, //image height
            objects[i].x, //x pos
            objects[i].y, //y pos
            objects[i].image.width * scale, //image width multiplied by scale
            objects[i].image.height * scale //image height multiplied by scale
        )
    }
    // for (i=0; i < walls.length; i++) {
    //     ctx.clearRect(
    //         walls[i].x, 
    //         walls[i].y, 
    //         walls[i].width, 
    //         walls[i].height
    //     )
    // }
    for (i=0; i < notes1.length; i++) {
    
        ctx.drawImage(
            notes1[i].image,
            0, 
            0, 
            notes1[i].image.width,
            notes1[i].image.height,
            notes1[i].x,
            notes1[i].y,
            notes1[i].image.width * scaleNote1,
            notes1[i].image.height * scaleNote1,
        )
    }
    for (i=0; i < notes2.length; i++) {
    
        ctx.drawImage(
            notes2[i].image,
            0, 
            0, 
            notes2[i].image.width,
            notes2[i].image.height,
            notes2[i].x,
            notes2[i].y,
            notes2[i].image.width * scaleNote1,
            notes2[i].image.height * scaleNote1,
        )
    }
    for (i=0; i < notes3.length; i++) {
    
        ctx.drawImage(
            notes3[i].image,
            0, 
            0, 
            notes3[i].image.width,
            notes3[i].image.height,
            notes3[i].x,
            notes3[i].y,
            notes3[i].image.width * scaleNote1,
            notes3[i].image.height * scaleNote1,
        )
    }
    for (i=0; i < notes4.length; i++) {
    
        ctx.drawImage(
            notes4[i].image,
            0, 
            0, 
            notes4[i].image.width,
            notes4[i].image.height,
            notes4[i].x,
            notes4[i].y,
            notes4[i].image.width * scaleNote1,
            notes4[i].image.height * scaleNote1,
        )
    }

    // drawBall();
    // if (y + dy < 0 || y + dy > canvas.height-playerRadius) {
    //     // dy = 0;
    //     dy = -dy; // To make it bounce off
    // }
    // if (x + dx > canvas.width-playerRadius || x + dx < 0) {
    //     // dx = 0;
    //     dx = -dx;
    // }
    
    // x += dx;
    // y += dy;
};

function Update() {
    draw();
}

setInterval(Update, 20);