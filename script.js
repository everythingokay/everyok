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

let title = document.getElementById('title');
let fact = document.getElementById('fact')

title.addEventListener("click", funFact)

function funFact() {
    if (fact.style.display === "none" || fact.style.display === "") {
        fact.style.display = "block";
    }
}


let leave = document.getElementById('leave')

leave.addEventListener("click", done)

function done() {
    fact.style.display = "none";
}



// contact modal

let contact = document.getElementById('contact')
let mail = document.getElementById('mail')
contact.innerHTML = "here";

contact.addEventListener("click", email)

function email() {
    if (mail.style.display === "none" || mail.style.display === "") {
        mail.style.display = "inline";
        contact.innerHTML = "alison.feldish@gmail.com"
        contact.style.fontWeight = "500";
    }
    else {
        mail.style.display = "inline";
        mail.style.display = "none";
        contact.innerHTML = "here";
        contact.style.fontWeight = "600";
    }
}

    // button.addEventListener("click", abra)
    // button.innerHTML = "CLICK"


    // function abra() {
    //     if (box.style.display === "none") {
    //         box.style.display = "block";
    //         button.innerHTML = "CLICKED";
    //     }


    //  }

let close = document.getElementById('close')

close.addEventListener("click", exit)

function exit() {
    contact.style.display = "none";
}