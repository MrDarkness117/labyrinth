var objects = [
  new Player("assets/img/minotaur.png", playerPosX, playerPosY, 1, 1)
];
var notes1 = [
  new Note(
    "assets/img/whole_note.png",
    "assets/snd/whole_note1.wav",
    590,
    1060
  ),
  new Note(
    "assets/img/whole_note.png",
    "assets/snd/whole_note2.wav",
    900,
    1015
  ),
  new Note("assets/img/whole_note.png", "assets/snd/whole_note3.wav", 650, 880),
  new Note("assets/img/whole_note.png", "assets/snd/whole_note4.wav", 980, 650),
  new Note("assets/img/whole_note.png", "assets/snd/whole_note5.wav", 760, 606),
  new Note("assets/img/whole_note.png", "assets/snd/whole_note6.wav", 890, 510),
  new Note("assets/img/whole_note.png", "assets/snd/whole_note7.wav", 980, 130),
  new Note("assets/img/whole_note.png", "assets/snd/whole_note8.wav", 650, 266)
];
var notes2 = [
  new Note("assets/img/half_note.png", "assets/snd/half_note1.wav", 520, 340),
  new Note("assets/img/half_note.png", "assets/snd/half_note2.wav", 70, 280),
  new Note("assets/img/half_note.png", "assets/snd/half_note3.wav", 420, 220),
  new Note("assets/img/half_note.png", "assets/snd/half_note4.wav", 290, 360)
];
var notes3 = [
  new Note(
    "assets/img/quarter_note.png",
    "assets/snd/quarter_note1.wav",
    620,
    510
  ),
  new Note(
    "assets/img/quarter_note.png",
    "assets/snd/quarter_note2.wav",
    430,
    550
  ),
  new Note(
    "assets/img/quarter_note.png",
    "assets/snd/quarter_note3.wav",
    70,
    600
  ),
  new Note(
    "assets/img/quarter_note.png",
    "assets/snd/quarter_note4.wav",
    70,
    940
  ),
  new Note(
    "assets/img/quarter_note.png",
    "assets/snd/quarter_note5.wav",
    450,
    960
  ),
  new Note(
    "assets/img/quarter_note.png",
    "assets/snd/quarter_note6.wav",
    200,
    800
  ),
  new Note(
    "assets/img/quarter_note.png",
    "assets/snd/quarter_note7.wav",
    450,
    770
  ),
  new Note(
    "assets/img/quarter_note.png",
    "assets/snd/quarter_note8.wav",
    290,
    630
  )
];
var notes4 = [
  new Note(
    "assets/img/crochet_note.png",
    "assets/snd/crochet_note1.wav",
    450,
    660
  ),
  new Note(
    "assets/img/crochet_note.png",
    "assets/snd/crochet_note2.wav",
    524,
    740
  ),
  new Note(
    "assets/img/crochet_note.png",
    "assets/snd/crochet_note3.wav",
    524,
    900
  ),
  new Note(
    "assets/img/crochet_note.png",
    "assets/snd/crochet_note4.wav",
    524,
    1060
  )
];
let finish = new Finish("assets/img/finish.png", "", 30, 1050);
let endGif = new Finish("assets/img/minotaur.gif", '', -200, 0);
// let replay = new Finish("assets/img/play.png", '', 530, 570);
var player = objects[0];

function draw() {
  isColliding(player);
  ctx.clearRect(0, 0, canvas.width, canvas.height);



  // This was needed to draw visual representation of real object boundaries

  // for (let node of nodes) {
  //     ctx.fillRect(node.x+40, node.y+40, 10, 10)
  //     ctx.fillStyle='rgb(255,100, 0)';
  // }
  // for (let notes of [notes1, notes2, notes3, notes4]) {
  //     for (let note of notes) {
  //         ctx.fillRect(note.x, note.y, 30, 30)
  //         ctx.fillStyle='rgb(100,100,255)';
  //     }
  // }
  // for (let i=99; i < 110; i++) {
  //     ctx.fillRect(nodes[i].x+40, nodes[i].y+40, 10, 10);
  //     ctx.fillStyle='rgb(255, 0, 0)'
  // }

  ctx.fillRect(finish.x+30, finish.y+40, 30, 50);
  ctx.fillStyle='rgb(255, 0, 0)'

  player.x += dx;
  player.y += dy;

  for (i = 0; i < objects.length; i++) {
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
    );
  }
  for (i = 0; i < notes1.length; i++) {
    ctx.drawImage(
      notes1[i].image,
      0,
      0,
      notes1[i].image.width,
      notes1[i].image.height,
      notes1[i].x,
      notes1[i].y,
      notes1[i].image.width * scaleNote1,
      notes1[i].image.height * scaleNote1
    );
  }
  for (i = 0; i < notes2.length; i++) {
    ctx.drawImage(
      notes2[i].image,
      0,
      0,
      notes2[i].image.width,
      notes2[i].image.height,
      notes2[i].x,
      notes2[i].y,
      notes2[i].image.width * scaleNote2,
      notes2[i].image.height * scaleNote2
    );
  }
  for (i = 0; i < notes3.length; i++) {
    ctx.drawImage(
      notes3[i].image,
      0,
      0,
      notes3[i].image.width,
      notes3[i].image.height,
      notes3[i].x,
      notes3[i].y,
      notes3[i].image.width * scaleNote3,
      notes3[i].image.height * scaleNote3
    );
  }
  for (i = 0; i < notes4.length; i++) {
    ctx.drawImage(
      notes4[i].image,
      0,
      0,
      notes4[i].image.width,
      notes4[i].image.height,
      notes4[i].x,
      notes4[i].y,
      notes4[i].image.width * scaleNote4,
      notes4[i].image.height * scaleNote4
    );
  }
  ctx.drawImage(
    finish.image,
    0,
    0,
    finish.image.width,
    finish.image.height,
    finish.x,
    finish.y,
    finish.image.width * scaleF,
    finish.image.height * scaleF
  );

  
  if (drawGif) { // Will have to replace this in HTML - gif doesn't work here.
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle="rgb(0, 0, 0)";
    ctx.drawImage(
      endGif.image,
      0,
      0,
      endGif.image.width,
      endGif.image.height,
      endGif.x,
      endGif.y,
      endGif.image.width * 4.5,
      endGif.image.height * 4.5
    )
    // ctx.drawImage(
    //   replay.image,
    //   0,
    //   0,
    //   replay.image.width,
    //   replay.image.height,
    //   replay.x,
    //   replay.y,
    //   replay.image.width,
    //   replay.image.height
    // )
  }
}

function Update() {
  draw();
}

setInterval(Update, 10);
