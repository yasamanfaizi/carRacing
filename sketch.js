var database;
var player, form, game, playerCount
var gameState = 0;
var players
var distance = 0;

function setup(){
    database = firebase.database()
    createCanvas(400,400);  
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    if (playerCount === 4){
        game.updateState(1)
    }
    if (gameState === 1){
        game.play()
    }
}


