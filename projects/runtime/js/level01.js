var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "reward", "x": 2000, "y": groundY - 60},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);
        createSawBlade(1000,200)
        createSawBlade(700,300)
        createSawBlade(500,150)
        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y){

        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
       
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);

        var obstacleImage = draw.bitmap("img/sawblade.png");
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -24
        obstacleImage.y = -26
        }

        
            function createEnemy(x,y) {
                var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.rect(50, 50, "red");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        
        enemy.x = 1000;
        enemy.y = groundY - 50;

        game.addGameItem(enemy);

        enemy.velocityX = -5
        enemy.rotationalVelocity = 30

        enemy.onPlayerCollision = function () {;
            game.changeIntegrity(-10)
        }
        enemy.onProjectileCollision = function () {;
            game.increaseScore(100);
            enemy.fadeOut();    
        }
                // all code from TODO 11 and 12
              }
              createEnemy(400, groundY - 10);
              createEnemy(800, groundY - 100);
              createEnemy(1200, groundY - 50);
              createReward()
              function createReward() {
                var reward = game.createGameItem("reward", 25);
                var redSquare = draw.rect(50, 50, "blue");
                redSquare.x = -25;
                redSquare.y = -25;
                reward.addChild(redSquare);
                
                reward.x = 1600;
                reward.y = groundY - 50;
        
                game.addGameItem(reward);
        
                reward.velocityX = -5
                reward.rotationalVelocity = 30
        
                reward.onPlayerCollision = function () {;
                    game.changeIntegrity(15)
                    reward.fadeOut();
                }
                reward.onProjectileCollision = function () {;
                    game.increaseScore(100);
                }   
        
              }

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
