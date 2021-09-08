canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var roverWidth = 100;
var roverHeight = 90;
var roverImage = "rover.png";
var roverX = 10;
var roverY = 10;
var marsImage_Array = ["Image1.jfif", "Image2.jpg", "Image3.jpg", "Img4.jpg", "mars.jpg"];  
var random_number = Math.floor(Math.random() * 5);
var backgroundImage = marsImage_Array[random_number];
console.log(backgroundImage);

function add() {
    bgImgRefrence = new Image;
    bgImgRefrence.onload = uploadBackgrond;
    bgImgRefrence.src = backgroundImage;
    RoverImgRefrence = new Image;
    RoverImgRefrence.onload = uploadRover;
    RoverImgRefrence.src = roverImage;
}

function uploadBackgrond() {
    ctx.drawImage(bgImgRefrence, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(RoverImgRefrence, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", functionKeyDown);

function functionKeyDown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '38') {
        console.log("up");
        up();
    }
    if (keypressed == '40') {
        console.log("down");
        down();
    }
    if (keypressed == '37') {
        console.log("left");
        left();
    }
    if (keypressed == '39') {
        console.log("right");
        right();
    }
}

function up() {
    if (roverY >= 0) {
        roverY -= 4;
        console.log("When up arrow is pressed X= " + roverX + " Y= " + roverY);
        uploadBackgrond();
        uploadRover();
    }
}

function down() {
    if (roverY <= 500) {
        roverY += 4;
        console.log("When down arrow is pressed X= " + roverX + " Y= " + roverY);
        uploadBackgrond();
        uploadRover();
    }
}

function left() {
    if (roverX >= 0) {
        roverX -= 4;
        console.log("When left arrow is pressed X= " + roverX + " Y= " + roverY);
        uploadBackgrond();
        uploadRover();
    }
}

function right() {
    if (roverX <= 700) {
        roverX += 4;
        console.log("When right arrow is pressed X= " + roverX + " Y= " + roverY);
        uploadBackgrond();
        uploadRover();
    }
}
