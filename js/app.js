// Is this thing on??
var interval;
var progRunning = false;
var paused = false;
// Defining game variables
var container = $("#container");
var building = $(".building");
var start = $("#start");
var house = $("#house");
var doorClock;
var doorOpen = false;
var score = 0;
var lives = 0;
// Player variables
var player = $("#player");
var playerPosX = 50;
var playerPosY = 500;
var playerGroundSpd = 2.5;
var arrived = false;
// Tool variables
var tool = $(".tool");
var tool1 = $("#tool1");
var tool2 = $("#tool2");
var tool3 = $("#tool3");
var toolPosX = [Math.floor((Math.random() * 450) + 200),
  Math.floor((Math.random() * 450) + 200),
  Math.floor((Math.random() * 450) + 200)];
var toolPosY = [200,200,200];
var toolGravity = 0.01;
var toolGravSpd = [-0.5,-0.2,-0.9];

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
  // Pause
  if (progRunning == true && paused == false) {
    progRunning = false;
    paused = true; 
    clearInterval(interval);
    $("#btn").html(">");
    console.log("Paused");
    // Unpause
  } else {
    progRunning = true;
    paused = false;
    // If you're dead, restart
    if (lives == 0) {
      lives = 3;
      score = 0;
      $("#lives").html(lives);
      $("#score").html(score);
      console.log("Started");
      // Otherwise carry on
    } else {
      console.log("Unpaused");
    }
    $("#btn").html("||");

    interval = setInterval(function(){
      // Defined object edges
      // Container
      var containerLeft = container.offset().left;
      var containerRight = containerLeft + container.width();
      var containerTop = container.offset().top;
      var containerBottom = containerTop + container.height();

      player.css({
        'left': playerPosX + "px",
        'top': playerPosY + "px"
      })
      tool1.css({
        'left': toolPosX[0] + "px",
        'top': toolPosY[0] + "px"
      })
      tool2.css({
        'left': toolPosX[1] + "px",
        'top': toolPosY[1] + "px"
      })
      tool3.css({
        'left': toolPosX[2] + "px",
        'top': toolPosY[2] + "px"
      })
      // Tracking player movement
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
      if (left && playerLeft >= startRight - 50) {
        playerPosX -= playerGroundSpd;
        console.log ("left");
      }
      // Moving right
      if (right && playerRight <= houseLeft - 1) {
        playerPosX += playerGroundSpd;
        console.log ("right");
      }
      // Touching the Safehouse
      function resetPlayerPos() {
        playerPosX = 50;
        playerPosY = 500;
      }
      if (playerRight >= houseLeft && doorOpen == true) {
        arrived = true;
        resetPlayerPos();
        score++;
        $("#score").html(score);
      } else {
        arrived = false
      }
    // Touching a Tool
      tool.each(function(index){
        if (playerRight >= $(this).offset().left && playerTop <= ($(this).offset().top + $(this).height())
        && playerLeft <= ($(this).offset().left + $(this).width())) {
          resetToolPos(index);
          resetPlayerPos();
          lives--;
          $("#lives").html(lives);
          if (lives == 0) {
            lives == 3;
            score == 0;
            progRunning = false;
            doorOpen = false;
            clearInterval(interval);
            $("#btn").html("start");
          }
        }
      })
      // -----------------------

      // ------- TOOL CODE -------
      // Tracking fall speed
      for (var i = 0; i < toolGravSpd.length; i++) {
        toolGravSpd[i] += toolGravity;
      }
      for (var i = 0; i < toolPosY.length; i++) {
        toolPosY[i]+=toolGravSpd[i]
      }
      function resetToolPos(i) {
        toolPosY[i] = 200;
        toolGravSpd[i] = Math.floor((Math.random() * (0.7) -0.2).toFixed(1));
        toolPosX[i] = Math.floor((Math.random() * 450) + 200);
      }
      tool.each(function(index){
        if ($(this).offset().top >= 640) {
          resetToolPos(index);
        }
      })
      // ------------------------

      // SAFE HOUSE CODE
      doorClock = setInterval(function(){
        if (doorOpen == false) {
          doorOpen = true;
          $("#house").css('background', 'lime');
          console.log("Opened the door");
        // } else {
        //   doorOpen = false;
        //   $("#house").css('background', 'lightsteelblue');
        }

      }, 1000);

    }, 6);
  }
});
