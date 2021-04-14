var car1, car2, car3, lane1, lane2, lane3, wall1;
var speed, weight;

function setup() {
  createCanvas(1600,2000);
  car1 = createSprite(100, 50, 150, 50);
  car1.shapeColor = 'blue';

  car2 = createSprite(100, 170, 150, 50);
  car2.shapeColor = 'red';

  car3 = createSprite(100, 270, 150, 50);
  car3.shapeColor = 'green';


  lane1 = createSprite(100, 120, 2920, 20);
  lane1.shapeColor = 'white';

  lane2 = createSprite(100, 220, 2920, 20);
  lane2.shapeColor = 'white';

  lane3 = createSprite(100, 320, 2920, 20);
  lane3.shapeColor = 'white';

  wall1 = createSprite(1590, 50, 60, 2000)
  wall1.shapeColor = 'orange'

  speed = random(50, 200)
  weight = random(400, 1500)

  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;


}

function draw() {
  background(0,0,0);  

  console.log('speed = ' + speed)

  if(wall1.x - car1.x < (car1.width + wall1.width)/2){

    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;


    if(deformation > 180){

      car1.shapeColor = color(255, 0, 0);

    }

    if(deformation < 180 && deformation > 100){

      car1.shapeColor = color(230, 230, 0);
    }

    if(deformation <100){
      car1.shapeColor = color(0, 250, 0);
    }

  }

  if(wall1.x - car2.x < (car2.width + wall1.width)/2){

    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;


    if(deformation > 180){

      car2.shapeColor = color(255, 0, 0);

    }

    if(deformation < 180 && deformation > 100){

      car2.shapeColor = color(230, 230, 0);
    }

    if(deformation <100){
      car2.shapeColor = color(0, 250, 0);
    }

  }


  if(wall1.x - car3.x < (car3.width + wall1.width)/2){

    car3.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;


    if(deformation > 180){

      car3.shapeColor = color(255, 0, 0);

    }

    if(deformation < 180 && deformation > 100){

      car3.shapeColor = color(230, 230, 0);
    }

    if(deformation <100){
      car3.shapeColor = color(0, 250, 0);
    }
  
  }

  console.log(deformation)




  drawSprites();
}