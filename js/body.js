finishTxt = document.querySelector('.restart-text');

function showText() {
    if (finished) {
        finishTxt.style.display = "block";
    } else {
        finishTxt.style.display = "none";
    }
}