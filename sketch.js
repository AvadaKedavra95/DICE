var START=4;
var ROLE=1;
var NUMBER=0;
var STATE=START;
var bg;
var count=Math.round(random(1,10));
var count2=Math.round(random(1,10));
var countTime
var press,pressImg
var count3;
var sign;
var reset,resetImg;
var m,s,d,p;
var signGroup;









function preload(){
  bg = loadImage("bg.jpg");
  press=loadImage("press.png");
  resetImg = loadImage("reset.png");
  m = loadImage("multi.png");
  s = loadImage("sub.png");
  d = loadImage("div.png");
  p = loadImage("p.png");
}









function setup(){
  createCanvas(1000,500);
  signGroup=createGroup();
  countTime=50;
  reset = createSprite(950,450,10,10);
  reset.addImage("reset",resetImg);
  reset.scale=0.25;
  reset.visible=false;
  sign=createSprite(400,300,10,10);
  sign.visible=false;

}








function draw(){
  background(bg)
  
  console.log(countTime);
  
  drawSprites();









  if(STATE===START){
    push();
    
    imageMode(CENTER);
    image(press,500,200,800,200)
    pop();

    if(keyDown("space")||touches.length>0||mouseIsPressed){
      STATE=ROLE;
      touches = [];
    }
  }








  if(STATE===ROLE){
    
    countTime-=2;
    count=Math.round(random(1,10));
    count2=Math.round(random(1,10));
   
    fill("white");
    stroke("red")
    textSize(220)
    text(count +  "        "  +  count2 ,10,200)
    if(countTime<0){
      STATE=NUMBER;
    }
  }








  if(STATE===NUMBER){
    reset.visible=true;
    
    
    stroke("black")
    fill("white");
    textSize(220)
    text(count+"        "+count2 ,10,200)


    if(mousePressedOver(reset)||touches.length>0){
      STATE=ROLE;
      touches=[];
      countTime=50;
      reset.visible=false;
    }
    
    

      
    
  }

 
}

function SIGN(){
  sign=createSprite(400,300,10,10);
  visible=false;
  var rand = Math.round(random(1,4))
  switch(rand){
    case 1: sign.addImage("sign1",m);
        break;
    case 2: sign.addImage("sign2",s);
        break;
    case 3: sign.addImage("sign3",d);
        break;
    case 4 :sign.addImage("sign4",p);
        break;
        default:break;
  }

  signGroup.add(sign);
}

