class Game{
    constructor(){

    }

    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            

            player=new Player()
           // var PCRef=database.ref('playerCount').once("value");

           
            // if(playerCountRef.exists()){
            // playerCount=PCRef.val()
                player.getCount()
           // }
           form=new Form()
            form.display();
        }

        
    }

    play(){
        form.hide()
        textSize(30)
        text("Game start",120,100)
    }
}
