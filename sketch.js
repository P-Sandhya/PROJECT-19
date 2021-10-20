var spaceImg,space;
var starImg,star,starsGroup;
var boomImg,boom,boomGroup; 
var rocketImg,rocket;
var gameState="PLAY"
var Score = 0

function preload(){
spaceImg = loadImage("space.png")
starImg = loadImage("smile.png")
boomImg = loadImage("boom.png")
rocketImg = loadImage("rocket.png")

}

function setup(){
    createCanvas(400,400);
    space = createSprite(200,200)
    space.addImage("space",spaceImg)
    space.velocityY = 3;
    
    rocket = createSprite(200,200)
    rocket.addImage("rocket",rocketImg)
    rocket.velocityY = 1;
    rocket.scale = 1

    starsGroup = new Group()
    
    boomGroup = new Group()
}
    function draw(){
    background(200)
    
  
     
    if(gameState==="PLAY")
    
     

    {
      if(space.y > 200){
        space.y = 100
      } 
      rocket.velocityY =  rocket.velocityY +0.8
      if(keyDown("space")) 
      {
        rocket.velocityY = -10 
      } 
      if(keyDown("left"))
      {
        rocket.x = rocket.x -3
      }
      if(keyDown("right"))
      {
        rocket.x = rocket.x +3 
      } 
      
     

      spawnStars()
      if(rocket.isTouching(starsGroup) && rocket.y>350 ){
        gameState="PLAY"
        rocket.velocityY = 0
      }
      if(rocket.isTouching(boomGroup) && rocket.y>380 ){
        gameState="END"
        rocket.velocityY = 0
        rocket.destroy()
      space.destroy()
      }


      drawSprites();
     
    }
    
      if(gameState === "END"){
       background(0)
      
       fill("cyan")
     stroke("cyan") 
     textSize(12) 
     text("GAMEOVER ,YOUR ROCKET HAS BEEN CRASHED" ,100,200)
     


     starsGroup.destroyEach ()
    
     boomGroup.destroyEach ()
    
    
    
     space.destroy()
    
      } 
     
    
    
 
    }
    function spawnStars () { 
        if (frameCount % 50 === 0)
        {                                            
        var star =createSprite(250,50)
        var boom = createSprite(300,10) 
        
        
       star.y = Math.round(random (120,5)) 
        boom.y =star.y
        

      
        
        star.addImage (starImg) 
        star.scale=0.1
       //Score = score +1                                                                             
         
         
         
      boom.addImage (boomImg) 
        boom.scale=0.5
        star.velocityY =10
        boom.velocityY =15
       
        
        
        
   rocket.depth = star.depth 
       rocket.depth +=1 
        
        star.lifetime = 50 
        
        boom.lifetime = 50                
        
        
        starsGroup.add(star)
        
        boomGroup.add(boom)
        
        }
        
        }

       
          