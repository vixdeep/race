canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = 125;
car_height = 115;
car_x = 10;
car_y = 10;
background_image = "https://postimg.cc/p9D2dqqZ";
car_image = "https://postimg.cc/9rqYz9HM";

car2_width = 125;
car2_height = 115;
car2_x = 30;
car2_y = 10;
background_image = "https://postimg.cc/p9D2dqqZ";
car2_image = "https://postimg.cc/9rqYz9HM";

function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover;
    rover_imgtag.src = rover_image;
}


function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
