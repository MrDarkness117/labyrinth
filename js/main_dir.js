window.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    drawMaze("assets/img/labyrinth_minotaur.png", 0, 0);
    window.onkeydown = processKey;
    var x = 0;
    var y = 0;
    var timer;
    
    function processKey(e) {
        dx = 0;
        dy = 0;
        if (e.keyCode == 38) {dy = -1;}
        if (e.keyCode == 40) {dy = 1;}
        if (e.keyCode == 37) {dx = -1;}
        if (e.keyCode == 39) {dx = 1;}
    }


    function drawMaze(mazeFile, startingX, startingY){
        clearTimeout(timer);
        dx = 0;
        dy = 0;
        var imgMaze = new Image();
        imgMaze.onload = function() {
            canvas.width = imgMaze.width;
            canvas.height = imgMaze.height;
            context.drawImage(imgMaze, 0,0);
            x = startingX;
            y = startingY;
            let imgMinotaur = document.getElementById("player");
            context.drawImage(imgMinotaur, canvas.width/2, canvas.height/2);
            context.stroke();
            timer = setTimeout(drawFrame, 10);
            for (let breakPoint of breakPoints) {
                context.fillRect(breakpoint.x, breakpoint.y, 30, 30);
            }
            
        };
        imgMaze.src = mazeFile;
    }
    
    function drawFrame() {
        if (dx != 0, dy != 0) {
            x += dx;
            x += dy;
            if (checkForCollision()) {
                x -= dx;
                y -= dy;
                dx = 0;
                dy = 0;
            }
            let imgMinotaur = document.getElementById("player");
            context.drawImage(imgMinotaur, x, y);
        }
        timer = setTimeout(drawFrame, 10);

    }

    function checkForCollision() {
        let imgMinotaur = document.querySelector("player");
        for (let breakPoint of breakPoints) {
            if (imgMinotaur.x === breakPoint.x && imgMinotaur.y === breakPoint.y) {
                return true
            }
        }
        return false
    }

}