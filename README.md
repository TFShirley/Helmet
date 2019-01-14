# Helmet
A Javascript game created by Thomas Shirley

Thank you for playing!

<h2>What is it?</h2>

Helmet is a game about risk and patience. Guide the builders from the left building to the safehouse on the right, whilst avoiding the tools falling from above. This game is a recreation of the original Game & Watch game, also called Helmet, which was released by Nintendo in 1981.

<h2>Controls</h2>

To start, pause and resume gameplay, click the button below the screen.

To move the builders, use the left and right arrow keys respectively.

That's all there is to it!

<h2>Playing the game</h2>

<h4>Objective</h4>

You start the game with three lives. Your builders will appear inside the building on the left. Your objective is to direct as many builders to the safehouse on the right before you run out of lives. When the safehouse is green, the doors are open! Get as many builders inside before it turns back to grey! As soon as a builder enters the safehouse, another builder will appear instantly by the left building for you to guide to safety.

<h4>Obstacles</h4>

Tools will fall from the sky in front of you in a random pattern that you must avoid. Touching one of these tools will cause you to lose a life, and your current builder will have to start from the beginning. If touching a tool causes you to run out of lives, the game will end. You will be able to see your score at the top of the page, and if you wish to play again, pressing the button below the screen will restart the game, as well as your lives and score.

<h2>Development</h2>

<h4>Initial Idea</h4>

I wanted to create a game that would allow me to utilise what I learnt when creating my pong-like game. In that game, I had a paddle that could move vertically, as well as a ball that would bounce off the floor and wall of its container. As it collides with the paddle, the paddle reflects the ball at a different speed depending on whether the paddle was moving or not as it came into contact with the ball. With these game pieces, I decided to reuse the paddle code to create a player object, as well as the ball code to create obstacles. The first game that came to my mind was the aforementioned Game & Watch game Helmet, and so I went from there in an attempt to recreate the classic game.

With the blessings of modern technology at my side, I also thought about implementing additional challenges. Ideas that I had include a temporary barrier that would cover up the middle section of the screen in such a way that you'd only see where tools appear at the top of the screen and where they land once they reappear at the bottom of the barrier. In addition to this, I also had plans for platforms that would damage after being hit by tools, forcing the player to have to jump across, as well as a power-up in the form of an umbrella, which would allow the player to take a single hit without losing a life.

<h4>What went well</h4>

Adapting and reworking the code from the pong game took little effort to achieve and saved me a lot of time thanks to not having to figure out how both of the objects behave. In this process I also learned how to identify key presses and bind logic to them. Had I had more time to work on this I believe I could use this knowledge to program a lot more functionality than was present in the original Helmet game by.

The logic that was present in the pong game also helped me figure out how to get collision working and I was able to easily program in collision between the player and the buildings, as well as collision between the player and the obstacles. 

I was able to successfuly implement random chance into the game to create a game feel similar to the original. The tools appear at a random x-coordinate between the safehouse and some space away from the front of the start building (to allow some leeway when respawning). In addition to this, they are also flung into the air at a random amount of force before falling, causing each to fall at a slightly different speed to one another. I had issues with all of the objects following one another initially, meaning they would bunch together and follow the same exact pattern. I'm very thankful that I was able to achieve this though.

<h4>Problems I faced</h4>

For reasons still unknown to me, I had a lot of issues when trying to tell my game objects where to position themselves. I wanted to use the direct width and height of each object by referring specifically to it rather than hard-coding it just in case I had to change the size of certain objects later in development, as well as making programming certain parts of the collision logic easier for myself. However, whenever I did, the game would use a completely different value for positioning. Due to this, I resorted to hard-coding a lot of positioning for this game.

When creating the tool obstacles, I intended to steadily increase the number of tools to increase the difficulty of the game as time passed. Due to time constraints, I wasn't able to figure out how to implement this feature properly and instead resorted to using three divs that had their own id. That way they could behave independently of one another.

I came across an interesting bug early in development that taught me something important. This bug would cause the game to count the player scoring a point twice when it should have only scored once. Had I not figured this bug out sooner, I'm certain it would have the same effect when colliding with tools. What happened was I had defined the player's collision before the container's, which had the knock-on effect of cycling through the game's logic twice before updating the player. I knew code position was important before, but this served as a healthy reminder of how significant the insignificant changes may be.

As I mentioned earlier, I planned to implement several new obstacles into the game that weren't present in the original. However, by the time I had implemented the base game, I was already out of time.

<h4>Conclusion</h4>

In conclusion, I've learned a lot from this process in terms of javascript techniques as well as development skills. I'm pleased with the progress made on the game, although a part of me still wishes that I had enough time to implement further functionality.

If I were to tackle a similar challenge again, I will make sure to focus my energy on the base functionality before trying to implement ambitious features. I will also make sure that by the time something like this comes around again, I understand what was happening with my positioning logic and why my code wasn't doing what I believe I was asking it to do.

<H3>Thank you for reading, and I hope you enjoyed playing my game!</h3>
