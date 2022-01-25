let pos = 1;
let boatPos = 1;
beePos = 1


let timerId = setTimeout(function tick() {
    tailMove();
    boatMove();
    beeMove();
    squirrelMove();
    timerId = setTimeout(tick, 200);
}, 200);

function tailMove() {
    let tailImg = document.getElementsByClassName('flag')[0].querySelector('img');

    if (pos == 7) {
        pos = 1;
    } else {
        pos++;
    }

    tailImg.src = 'img/flag-' + pos + '.png';
}

function boatMove() {
    let boatImg = document.getElementsByClassName('boat')[0].querySelector('img');

    if (boatPos == 3) {
        boatPos = 1;
    } else {
        boatPos++;
    }

    boatImg.src = 'img/boat-' + boatPos + '.png';
}

function beeMove() {
    let beeImg = document.getElementsByClassName('bee')[0].querySelector('img');

    if (beePos == 5) {
        beePos = 1;
    } else {
        beePos++;
    }

    beeImg.src = 'img/bee-' + beePos + '.png';
}

function squirrelMove() {
    let squirrelImg = document.getElementsByClassName('squirrel')[0].querySelector('img');

    if (pos == 7) {
        pos = 1;
    } else {
        pos++;
    }

    squirrelImg.src = 'img/squirrel-' + pos + '.png';
}