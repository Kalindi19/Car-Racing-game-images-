class Form{
    constructor(){
        this.title=createElement('h1');
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement('h2');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    } 

    display(){
      
        this.title.html("Car Racing Game!");
        this.title.position(width/2-50,0);
        
        this.input.position(width/2-40,height/2-80);
        
        this.button.position(width/2+30,height/2);
        this.button.mousePressed(
             ()=> {
                this.input.hide();
                this.button.hide();

                 player.name=this.input.value();
                playerCount+=1;
                player.index=playerCount;

                player.update();
                player.updateCount(playerCount);

                this.greeting.html(" Hello "+player.name + " Welcome!");
                this.greeting.position(width/2-70,height/2);
            }
        )

    }
}