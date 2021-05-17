class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function (data){
            gameState=data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState==0){
            background("orange")

            player=new Player();
            var playerCountref=await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
                player.getCount();
            }

            form=new Form();
            form.display();
        }

        car1=createSprite(100,200);
        car1.addImage(car1Img);
        car2=createSprite(300,200);
        car2.addImage(car2Img);
        car3=createSprite(500,200);
        car3.addImage(car3Img);
        car4=createSprite(700,200);
        car4.addImage(car4Img);

        cars=[car1,car2,car3,car4];
    }

    play(){
        form.hide();
        Player.getPlayerinfo();
    
        if(allPlayers!==undefined){
            background(groundImg);
            image(trackImg,0,-height*5,width,height*6);

            var index=0;
            var x=150,y;
            for(var plr in allPlayers){
                index+=1;
                x+=190;
                y=height-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;

                if(index===player.index){
                    cars[index-1].shapeColor="red";
                    camera.position.x=width/2;
                    camera.position.y=cars[index-1].y;
                }
                else{
                    cars[index-1].shapeColor="black";
                }
            }
        }
      
        drawSprites();

        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50;
            player.update();
        }

        if(player.distance>=3500){
            gameState=2;
        }
    }

    end(){
        if(gameState===2){
        fill("white");
        textSize(30);
        strokeWeight(5);
        text("Game-Over",width/2-50,cars[player.index-1].y-100);
        }
    }
}