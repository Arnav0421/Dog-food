var dog,sadDog,happyDog,garden,washroom, database;
var foodS,foodStock;
var fedTime,lastFed,currentTime;
var feed,addFood;
var foodObj;
var gameState,readState;

function preload(){
  sadDog=loadImage("Images/Dog.png");
happyDog=loadImage("Images/happy dog.png");
garden=loadImage("Images/Garden.png");
washroom=loadImage("Images/Wash Room.png");
bedroom=loadImage("Images/Bed Room.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(400,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
   
   feed=createButton('Feed Dogo');
   feed.position(700,95);
   feed.mousePressed(addFoods);
   
   addFood=createButton("Add Food");
   addFood.position(800,95);
   addFood.mousePressed(addFoods);
   
   foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  
  getfoodStock=createSprite()
   
   feTime=database.ref('FeedTime');
   fedTime.on("value" ,function(data){
      gameState=data.va;();
}};
              
     readState=database.ref('gameState');
   readState.on("value" ,function(data){
      gameState=data.val();
   }};
// function to display UI
function draw() {
 currentTime=Hour();
      if(currentTime==(lasteFed+1)){
         update("Plating");
         foodObj.garden():
      }else if(currentTime==lastFed+2)){
         update("Sleeping");
      }else if(currentTime>(lastFed+2) && currentTime<+(lastfed+4)){
         updat("Bathing");
         foodObj.washroom();
      }else{
         update("Hungry")
         foobObj.display();
         
         if(gameState!="Hungry"){
            fee.hide();
            dog.remove();
         }else{
            feed.show();
            dog.addImage(sadDog);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}
         function feedDog(){
            dog.addImage(happyDog);
            
            foodObj.updateFoodStock(foodObj.getFoodStock()-1);
            database.ref('/').update({
               Food:foodObj.getFoodStock(),
               FeedTime:hour(),
               gameState:"Hungry"
            })
                                     }
         function addFoods(){
            foodS++;
            database.ref('/').update({
               Food:foodS
            })
         }
         
         function update(state){
            database.ref('/').update({
               gameSTate:state
            })
         }
