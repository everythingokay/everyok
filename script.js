//image slideshow

let images = [
    'images/slide01.jpg',
    'images/slide02.jpg',
    'images/slide03.jpg',
    'images/slide04.jpg',
    'images/slide05.jpg',
    'images/slide06.jpg',
    'images/slide07.jpg',
    'images/slide08.jpg',
    'images/slide09.jpg',
    'images/slide10.jpg',
    'images/slide11.jpg',
    'images/slide12.jpg',
];

let left = document.getElementById('left');
let right = document.getElementById('right');
let box = document.getElementById('box');

let index = 0;


left.addEventListener("click", moveLeft)
right.addEventListener("click", moveRight)

function assignImage() {
    box.src = images[index];
}


function moveLeft() {
    index = index - 1
    if (index < 0) {
        index = images.length-1
    }
    box.src = images[index];
}

function moveRight() {
    index = index + 1
    if (index > images.length-1) {
        index = 0
    }
    box.src = images[index];
}

window.onLoad = assignImage();



//fun fact modal

let fact = document.getElementById('fact')

setTimeout(function(){
    if (fact.style.display === "none" || fact.style.display === "") {
        fact.style.display = "block";
    }
}, 3000)


let leave = document.getElementById('leave')

leave.addEventListener("click", done)

function done(){
    fact.style.display = "none";
}



// contact modal

let button = document.getElementById('button')
let contact = document.getElementById('contact')


button.addEventListener("click", enter)

function enter() {
    if (contact.style.display === "none" || contact.style.display === "") {
        contact.style.display = "block";
    }
}

let close = document.getElementById('close')

close.addEventListener("click", exit)

function exit(){
    contact.style.display = "none";
}