//option 1

function hitMe() {
    document.body.style.backgroundColor = 'blue';
}

// option 2

const makeBlue = document.getElementById('yellow-me');
makeBlue.onclick = makeYellow;
function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
}

//option 3
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurples() {
    document.body.style.backgroundColor = 'purple';
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
})

// option 4

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// final version
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})