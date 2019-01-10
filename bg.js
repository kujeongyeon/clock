const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    //const image = document.createElement("img");
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomnumber = genRandom();
    console.log(randomnumber);
    paintImage(randomnumber);
}
init();