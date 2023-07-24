class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");

        this.player = new Player (
            this.gameScreen,
            10,
            300,
            300,
            250,
            "/docs/images/Linguini.png"
        );

        this.width = 950;
        this.height = 500;

        this.obstacles = [];

        this.isPushingObstacles = false;

        this.score = 0;
        this.lives = 3;

        this.gameIsOver = false;
    }

    start() {
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`; 

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";

        this.gameLoop();
    }

    gameLoop() {
        console.log("Game Loop");

        if(this.gameIsOver) {
            return;
        }

        this.update();

        this.frame ++;

        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        let score = document.getElementById('score');
        let lives = document.getElementById('lives');

        score.innerHTML = this.score;
        lives.innerHTML = this.lives;

        if(this.lives === 0) {
            this.endGame();
        }

        this.player.move();

        // Check for collision and if an obstacles still on the screen
        for (let i = 0; i < this.obstacles.length; i++) {
            // Grabbing an obstacle and moving it downards
            const obstacle = this.obstacles[i];
            obstacle.move();

            // Check if the player collide with an obstacle
            if(this.player.didCollide(obstacle)) {
                // Remove the obstacle from the DOM/HTML
                obstacle.element.remove();

                // Remove obstacle from the array
                this.obstacles.splice(i,1);

                // Remove player's live by 1
                this.lives --; //instead of ++
            }


            // Check if the obstacle is off the screen (at the bottom)
            else if(obstacle.top > this.height) {
                // Congratulations to you, you avoided one obstacle
                this.score ++;

                // Remove the obstacle from the HTML
                obstacle.element.remove();

                // Remove the obstacle from the array of obstacles
                this.obstacles.splice(i,1); //i = index and 1 = only one element will be removed
            }
        }

        // Update Obstacles - only when there is no other obstacles on the screen
        if(!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true;
            setTimeout(() => {
                this.obstacles.push(new Obstacle(this.gameScreen));
                this.isPushingObstacle = false;
            }, 500);
        }
    }

    endGame() {
        // remove player
        this.player.element.remove();

        // Remove all obstacles from the array of obstacles
        this.obstacles.forEach(obstacle => {
            // Remove from the HTML
            obstacle.element.remove();
        })

        this.obstacles = [] // my obstacles array is empty

        this.gameIsOver = true;

        // Hide the game screen
        this.gameScreen.style.display = "none"; 

        // Show en game screen
        this.gameEndScreen.style.display = "block";
    }
}