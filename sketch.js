var ball,database,position;
var backgroundimg,gameState=0,playerCount;
var form,player,game

function setup(){
    
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref('ball/position');
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
       //changePosition(-1,0);
       writePosition(-1,0);
       
    }
    else if(keyDown(RIGHT_ARROW)){
        //changePosition(1,0);
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        //changePosition(0,-1);
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        //changePosition(0,+1);
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;

}

function showError (){
    console.log("error while writing in database" );
}

function writePosition(x,y){
database.ref('ball/position').set({
x: position.x+x,
y:position.y+y
})
}