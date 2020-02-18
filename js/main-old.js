// Logic
// if (hasJustCollided) {push back - return to last position}


// Vars

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d");
var scale = 0.2;

var colliders = [];
var notes1 = [];
var notes2 = [];

var player = null;

var maze = 
[
  new Maze("assets/img/labyrinth_minotaur.png", 0),
  new Maze("assets/img/labyrinth_minotaur.png", 978),
]

// Initial functions

window.addEventListener("keydown", function (e) { KeyDown(e); })

function Draw() {
  ctx.context.clearRect(0, 0, canvas.width, canvas.height);
}

function Update() {
  Draw();
}

function Start() {
  timer = setInterval(Update, 1000/60); // For updating frame rate
}

function Stop() {
  clearInterval(timer);
}

// function moveDiv(e) {
//   switch(e.which) {
//     case 37:
//       // collider.moveableDiv.shiftPosition(-5, 0);
      
//       if (hasJustCollided) {
//         collider.moveableDiv.shiftPosition(5, 0);
//       }
//       break;
//     case 38:
//       // collider.moveableDiv.shiftPosition(0, -5);
//       if (hasJustCollided) {
//         collider.moveableDiv.shiftPosition(0, 5);
//       }
//       break;
//     case 39:
//       // collider.moveableDiv.shiftPosition(5, 0);
//       if (hasJustCollided) {
//         collider.moveableDiv.shiftPosition(-5, 0);
//       }
//       break;
//     case 40:
//       // collider.moveableDiv.shiftPosition(0, 5);
//       if (hasJustCollided) {
//         collider.moveableDiv.shiftPosition(0, -5);
//       }
//       break;
//     default:
//       console.log('not an arrow');
//       break;
//   }
// }

function KeyDown(e)
{
    switch(e.keyCode)
    {
        case 37: // Left
            colliders[player].Move("x", -speed);
            break;
 
        case 39: // Right
            colliders[player].Move("x", speed);
            break;
 
        case 38: // Up
            colliders[player].Move("y", -speed);
            break;
 
        case 40: // Down
            colliders[player].Move("y", speed);
            break;
    }
}

// Classes

// class BaseDiv {
//   constructor(position) {
//     this.position = position
//   }
// }

class Maze 
{
  constructor(image, y)
  {
    this.x = 0;
    this.y = y;

    this.image = new Image();

    this.image.src = image;
  }
}

// class Player extends BaseDiv {
class Player {
  constructor(image, x, y) {
    // super(position);
    // this.ref = ref

    this.x = x;
    this.y = y;
    
    this.image = new Image();

    this.image.src = image;
  };
  // shiftPosition(x, y) {
  //   this.position.left += x;
  //   this.position.top += y;
  //   this.reDraw();
  // }
  // reDraw() {
  //   this.ref.setAttribute('style', `top: ${this.position.left}px; top: ${this.position.top}px`);
  //   collider.checkCollision();
  // }
  Update() {
    this.y += speed;
  }

  Move(v, d) {
    if(v == "x") // X-axis movement
    {
      this.x += d; // Dislocation

      //If the object tries to leave the border
      if(this.x + this.image.width * scale > canvas.width)
      {
          this.x -= d; 
      }

      if(this.x < 0)
      {
          this.x = 0;
      }
    }
    else // Y-axis movement
    {
      this.y += d;

      if(this.y + this.image.height * scale > canvas.height)
      {
          this.y -= d;
      }

      if(this.y < 0)
      {
          this.y = 0;
      }
    }
  }
}
// function positionCreator(currentDiv) {
//   return {
//     left: currentDiv.getBoundingClientRect().left,
//     top: currentDiv.getBoundingClientRect().top,
//     height: currentDiv.getBoundingClientRect().height,
//     width: currentDiv.getBoundingClientRect().width
//   };
// }

// From MDN



const collider = {
    // moveableDiv: document.querySelector('.player'),
    moveableDiv: null,
    checkCollision: function() {
      var hasJustCollided = false;
      for (let i = 0; i < this.staticDivs.length; i++) {
        const currentDiv = this.staticDivs[i];
        if (currentDiv.position.left < this.moveableDiv.position.left + this.moveableDiv.position.width &&
        currentDiv.position.left + currentDiv.position.width > this.moveableDiv.position.left &&
        currentDiv.position.top < this.moveableDiv.position.top + this.moveableDiv.position.height &&
        currentDiv.position.height + currentDiv.position.top > this.moveableDiv.position.top) {
          hasJustCollided = true;
          // stuff below makes it green by default, but we don't use it anyway
        //   if (!this.moveableDiv.ref.classList.contains('collision-state')) {
        //     this.moveableDiv.ref.classList.add('collision-state');
        //   }
        // } else if (this.moveableDiv.ref.classList.contains('collision-state') && !hasJustCollided) {
        //     this.moveableDiv.ref.classList.remove('collision-state');
        }
      }
    },
  
  };


// document.addEventListener('keydown', (e) => moveDiv(e));


  


// MDN: This block below is for spawning random divs
  
// (() => {
//   const allTheDivs = document.querySelectorAll('.collision');
//   for (let i = 0; i < allTheDivs.length; i++) {
//     const currentDiv = allTheDivs[i];
//     if (currentDiv.dataset.dynamic === 'true') {
//       currentDiv.setAttribute('style', 'left: 500px; top: 300px;');
//       const moveableDiv = new MoveDiv(positionCreator(currentDiv), currentDiv);
//       collider.moveableDiv = moveableDiv;
//     } else {
//       currentDiv.setAttribute('style', `left: ${Math.floor(Math.random() * 400)}px; top: ${Math.floor(Math.random() * 600)}px;`);
//       const staticDiv = new BaseDiv(positionCreator(currentDiv));
//       collider.staticDivs.push(staticDiv);
//     }
//   }
//   document.addEventListener('keydown', (e) => moveDiv(e));
// })();

// (() => {
const moveableDiv = new Player();
moveableDiv.className += 'player';
moveableDiv.innerHTML = '<img src="../labyrinth/assets/img/minotaur.png" alt="" class="player">'
collider.moveableDiv = moveableDiv;
// })