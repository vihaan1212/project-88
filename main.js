var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_y = 10;
player_x = 10;
var player_object = "";
block_image_object = "";

function drawplayer() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function drawblock(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed=='80'){
         console.log("p and shift pressed together");
         block_image_width=block_image_width+10;
         block_image_height=block_image_height+10;
         document.getElementById("current_width").innerHTML=block_image_width;
         document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey == true && keypressed=='77'){
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
   }
   if(keypressed=='38'){
       up();
       console.log("up");
   }
   if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
if(keypressed=='87'){
    drawblock('wall.jpg');
    console.log("w");
}
if(keypressed=='71'){
    drawblock('ground.png');
    console.log("g");
}
if(keypressed=='76'){
    drawblock('light_green.png');
    console.log("l");
}
if(keypressed=='84'){
    drawblock('trunk.jpg');
    console.log("t");
}
if(keypressed=='82'){
    drawblock('roof.jpg');
    console.log("r");
}
if(keypressed=='89'){
    drawblock('yellow_wall.png');
    console.log("y");
}
if(keypressed=='68'){
    drawblock('dark_green.png');
    console.log("d");
}
if(keypressed=='85'){
    drawblock('unique.png');
    console.log("u");
}
if(keypressed=='67'){
    drawblock('cloud.jpg');
    console.log("c");
}
}
function up(){
    if(player_y>0){
        player_y=player_y-block_image_height;
        console.log("When up arrow key is pressed, x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        drawplayer();
    }
}
function down(){
    if(player_y<460){
        player_y=player_y+block_image_height;
        console.log("When up arrow key is pressed, x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        drawplayer();
    }
}
function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        console.log("When up arrow key is pressed, x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        drawplayer();
    }
}
function right(){
    if(player_x<850){
        player_x=player_x+block_image_width;
        console.log("When up arrow key is pressed, x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        drawplayer();
    }
}
function clearArea(){
    canvas.clear();
}