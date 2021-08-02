//Create variables here
var dogImage, happydogImage;
var dog, happyDog, database, foodS, foodStock;
function preload()
{
	 dogImage = loadImage("Dog.png");
  
   happydogImge = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSrite(250, 250, 10, 10);
  dog.addImage(dogImage);

  foodStock=database.ref('Food');
   foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);

  dog.addimage(happydogImage);
}
  drawSprites();
  Text(foodStock+ 250,230);

}



