// Is this thing on??
var interval;
var progRunning = false;

// Defining game variables
var container = $("#container");
var building = $(".building");
var start = $("#start");
var house = $("#house");
var score = 0;
var lives = 3;

// Player variables
var player = $("#player");
var playerPosX = 100;
var playerPosY = 500;
var playerGravity = 0.1;
var playerGravSpd = 0;
var arrived = false;

// Tool variables
var tool = $("#tool");
var toolPosX = 350;
var toolPosY = 100;
var toolGravity = 0.003;
var toolGravSpd = -0.2;


// ----- Controls -----
// Flags for movement
var left = false, up = false, right = false, jumping = true;
// On press
$(document).keydown(function(e) {
  switch (e.which) {
    case 37:
      left = true
      break;
    case 38:
      up = true
      break;
    case 39:
      right = true
      break;
    default: return;
  }
  e.preventDefault();
})
// On release
$(document).keyup(function(e) {
  switch (e.which) {
    case 37:
      left = false
      break;
    case 38:
      up = false
      break;
    case 39:
      right = false
      break;
    default: return;
  }
  e.preventDefault();
})
//  -------------------

$("#btn").click(function(){
  if (progRunning) {
    progRunning = false;
    clearInterval(interval);
    $("#btn").html(">");
    console.log("Stopped");
  } else {
    progRunning = true;
    console.log("Started");
    $("#btn").html("||");

    interval = setInterval(function(){

      // Defined object edges
      // --------------------
      // Container
      var containerLeft = container.offset().left;
      var containerRight = containerLeft + container.width();
      var containerTop = container.offset().top;
      var containerBottom = containerTop + container.height();
      // Tracking player movement
      player.css({
        'left': playerPosX + "px",
        'top': playerPosY + "px"
      })

      tool.css({
        'left': toolPosX + "px",
        'top': toolPosY + "px"
      })
      // Start location for buildings
      start.css({
        'left': 0 + "px",
        'top': containerBottom - 345 + "px"
      })
      house.css({
        'left': containerRight - building.width() + "px",
        'top': containerBottom - 345 + "px"
      })
      // Player
      var playerLeft = player.offset().left;
      var playerRight = playerLeft + player.width();
      var playerTop = player.offset().top;
      var playerBottom = playerTop + player.height();
      // Tool
      var toolLeft = tool.offset().left;
      var toolRight = toolLeft + tool.width();
      var toolTop = tool.offset().top;
      var toolBottom = toolTop + tool.height();
      // Start building
      var startLeft = start.offset().left;
      var startRight = startLeft + start.width();
      var startTop = start.offset().top;
      var startBottom = startTop + start.height();
      // Safehouse
      var houseLeft = house.offset().left;
      var houseRight = houseLeft + house.width();
      var houseTop = house.offset().top;
      var houseBottom = houseTop + house.height();
      // --------------------


      // ----- PLAYER CODE -----
      // Moving left (& collision with the start building)
      if (left && playerLeft >= startRight - 26) {
        if (jumping) {
          playerPosX -= 1.5;
        } else{
          playerPosX -= 3;
        }
        console.log ("left");
      }

      // if (playerLeft < startRight) {
      //   playerPosX = 81;
      // }

      // Moving right
      if (right) {
        if (jumping) {
          playerPosX += 1.8;
        } else{
          playerPosX += 3;
        }
        console.log ("right");
      }

      // Touching the Safehouse
      if (playerRight >= houseLeft) {
        arrived = true;
        playerPosX = 50;
        playerGravSpd = 0;
        playerPosY = containerBottom - 125;
        score++;
        $("#score").html(score);
      } else {
        arrived = false
      }

      // if (playerRight > houseLeft && arrived == false) {
      //   // Resets player position at the start building
      // }

      // Tracking jump speed
      playerGravSpd += playerGravity;
      playerPosY+= playerGravSpd;
      // Jumping
      if (up && jumping == false){
        jumping = true;
        playerGravity = 0.1;
        playerGravSpd = -5;
        console.log("up");
      }
      // Floor collision
      if (playerBottom >= containerBottom && jumping == true) {
        jumping = false;
        playerPosY = containerBottom - 125;
        playerGravity = 0;
        playerGravSpd = 0;
      }
      // -----------------------

      // ------- TOOL CODE -------
      toolGravSpd += toolGravity;
      toolPosY+= toolGravSpd;
      if (toolTop >= containerBottom) {
        toolPosY = 100;
        toolGravSpd = -0.2;
      }
    }, 6);
  }
});
