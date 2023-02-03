$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms  
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform (1,150,100,10)
    createPlatform(300, 280, 100, 20)
    createPlatform (150,400,500,20)
    createPlatform (550,400,100,20)
    createPlatform (400,300,100,20)
    // TODO 2
    // Create collectables
    createCollectable("steve", 150, 300, 10, 1);
    createCollectable("grace",200, 20, 0.8);
    createCollectable("diamond", 250, 150, 30, 0.2);
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    
    
    
    
    // TODO 3
    // Create cannons
    createCannon("left", 250, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("right", 450, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 450, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("right", 670, 1000); // cannon on left wall, 600px down, shooting once per second
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)






    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
