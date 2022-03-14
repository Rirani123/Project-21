var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    createSprite = surface1(10, 40, 10, 190);
    surface1.shapeColor = "blue";
    createSprite = surface2(200, 40, 10, 190);
    surface2.shpaeColor = "red";
    createSprite = surface3(400, 40, 10, 190);
    surface3.shapeColor = "yellow";
    createSprite = surface4(600, 40, 10, 190);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    createSprite = box(20, 20, 400, 300);
    box.velocityX = 10;
    box.velocityY = 8;
    box.shapeColor = "white";
    createSprite(random(20,750));
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprite(600, 0, 0, 800);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "blue;"
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = "red";
    }

    if(surface3.isTouching(box)) {
        box.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(surface.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "green";
    }
}
