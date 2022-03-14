canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

greencar_width=75;
greencar_height= 100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y = 225;

function add() {
	background_imgTag= new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src= background_image;

	greencar_imgTag= new Image();
	greencar_imgTag.onload= uploadgreencar;
	greencar_imgTag.src= greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "37"){
       Left();
       console.log("Left");
    }

    if(keyPressed == "38"){
        Up();
        console.log("Up");
     }

     if(keyPressed == "39"){
        Right();
        console.log("Right");
     }

     if(keyPressed == "40"){
        Down();
        console.log("Down");
     }
}




function Up()
{
	if(greencar_y>=0){
		greencar_y= greencar_y-10;
		console.log("when up arrow is pressed, x=" + greencar_x + "y=" + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function Down()
{
	if(greencar_y <=500){
		greencar_y= greencar_y + 10;
		console.log("when up arrow is pressed, x=" + greencar_x + "y=" + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function Left()
{
	if(greencar_x >=0){
		greencar_x= greencar_x - 10;
		console.log("when up arrow is pressed, x=" + greencar_x + "y=" + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}	

function Right()
{
	if(greencar_x <=700){
		greencar_x= greencar_x + 10;
		console.log("when up arrow is pressed, x=" + greencar_x + "y=" + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
