var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "white";

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;
 
}




function draw() {
  background(0);  

  if(car.collide(wall)){
        deformation = (0.5*weight*speed*speed)/22500;

        if(deformation<100){
          car.shapeColor = "green";
        }

        else if(deformation>=100 && deformation<=180){
          car.shapeColor = "yellow"
        }

        else{
          car.shapeColor = "red";
        }
  }

  drawSprites();
 
}