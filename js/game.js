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
            "./images/Linguini.png"
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

            this.player.move();
        }
    }
}