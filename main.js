canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

rover_width = 100;

rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;

rover_y = 10;

function add() {

    background_imageTag = new Image();

    background_imageTag.onload = uploadBackground;

    background_imageTag.src = background_image;

    rover_imageTag = new Image();

    rover_imageTag.onload = uploadRover;

    rover_imageTag.src = rover_image;

}

function uploadBackground() {

    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {

    ctx.drawImage(rover_imageTag, rover_x,rover_y, rover_width, rover_height);
}