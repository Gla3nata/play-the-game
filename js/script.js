let pos = 1;
let boatPos = 1;
let beePos = 1


let timerId = setTimeout(function tick() {
    flagMove();
    beeMove();
    squirrelMove();
    timerId = setTimeout(tick, 200);
}, 200);

function flagMove() {
    let flagImg = document.getElementsByClassName('flag')[0].querySelector('img');

    if (pos == 7) {
        pos = 1;
    } else {
        pos++;
    }

    flagImg.src = 'img/flag-' + pos + '.png';
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