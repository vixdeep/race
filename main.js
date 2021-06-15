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
//new things STARTS HERE
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
    ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height);
}

function uploadRover(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
  
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keypressed);
    if(keyPressed == '38')
    {
        up();
    }
    if(keyPressed == '40')
    {
        down();
    }
    if(keyPressed == '37')
    {
        left();
    }
    if(keyPressed == '39')
    {
        right();
    }
}


function down(){
    if(car_y <=500){
        car_y += 10;
        console.log("when down arrow is pressed, x = " + car_x + ", y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function down(){
    if(car2_y <=500){
        car2_y += 10;
        console.log("when down arrow is pressed, x = " + car2_x + ", y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}


function up(){
    if(car_y >= 0){
        car_y -= 10;
        console.log("when down arrow is pressed, x = " + car_x + ", y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function up(){
    if(car2_y >= 0){
        car2_y -= 10;
        console.log("when down arrow is pressed, x = " + car2_x + ", y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}


function right(){
    if(car_x <=700){
        car_x += 10;
        console.log("when down arrow is pressed, x = " + car_x + ", y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function left(){
    if(rover_x >=0 ){
        rover_x -= 10;
        console.log("when down arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadcar2();
    }
}

