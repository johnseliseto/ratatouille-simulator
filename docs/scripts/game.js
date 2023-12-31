class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-container");
    this.gameEndScreen = document.getElementById("game-end");
    this.creditScreen = document.getElementById("credits");

    this.gameOverMusic = document.createElement("audio");
    this.gameOverMusic.src = "docs/sounds/gameover-music.mp3";
    this.gameEndScreen.appendChild(this.gameOverMusic);

    this.player = new Player(
      this.gameScreen,
      78,
      712,
      250,
      200,
      "docs/images/Linguini.png"
    );

    this.width = 1500;
    this.height = 700;

    // create empty arrays for all the ingredients that will store that ingredient
    this.egglplants = [];
    this.garlic = [];
    this.romaTomatoes = [];
    this.yellowPepper = [];
    this.yellowSquashes = [];
    this.zucchinis = [];

    this.arcdeTriomphe = [];
    this.bycicle = [];
    this.lock = [];
    this.moulinRouge = [];
    this.notreDame = [];
    this.tourDeEifle = [];

    this.isPushingObstacles = false;

    this.score = 0;
    this.lives = 3;

    this.gameIsOver = false;

    this.backgroundMusic = null;
  }

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameLoop();

    this.backgroundMusic = document.createElement("audio");
    this.backgroundMusic.src = "docs/sounds/game-music.mp3";
    this.backgroundMusic.loop = true;

    /*     this.backgroundMusic.addEventListener("ended", () => {
      this.backgroundMusic.currentTime = 0;
      this.backgroundMusic.play();
    }); */

    this.gameScreen.appendChild(this.backgroundMusic);
    this.backgroundMusic.play();
  }

  gameLoop() {
    console.log("Game Loop");

    if (this.gameIsOver) {
      return;
    }

    this.update();

    this.frame++;

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    if (this.lives === 0) {
      this.endGame();
    }

    this.player.move();

    // ----- EGGPLANTS -------Check for collision and if an obstacles still on the screen
    for (let i = 0; i < this.egglplants.length; i++) {
      const eggPlantsObject = this.egglplants[i];
      eggPlantsObject.move();

      if (this.player.didCollide(eggPlantsObject)) {
        eggPlantsObject.element.remove();
        this.egglplants.splice(i, 1);
        this.score++;
      } else if (eggPlantsObject.top > this.height) {
        eggPlantsObject.element.remove();
        this.egglplants.splice(i, 1);
      }
    }

    if (!this.egglplants.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.egglplants.push(new Eggplants(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- ARC DE TRIOUMPHE ------
    for (let i = 0; i < this.arcdeTriomphe.length; i++) {
      const arcdeTriompheObject = this.arcdeTriomphe[i];
      arcdeTriompheObject.move();

      // Check if the player collide with an obstacle
      if (this.player.didCollide(arcdeTriompheObject)) {
        arcdeTriompheObject.element.remove();
        this.arcdeTriomphe.splice(i, 1);
        this.lives--;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (arcdeTriompheObject.top > this.height) {
        arcdeTriompheObject.element.remove();
        this.arcdeTriomphe.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.arcdeTriomphe.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.arcdeTriomphe.push(new ArcDeTriomphe(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- GARLIC -------Check for collision and if an obstacles still on the screen
    for (let i = 0; i < this.garlic.length; i++) {
      const garlictObject = this.garlic[i];
      garlictObject.move();

      if (this.player.didCollide(garlictObject)) {
        garlictObject.element.remove();
        this.garlic.splice(i, 1);
        this.score++;
      } else if (garlictObject.top > this.height) {
        garlictObject.element.remove();
        this.garlic.splice(i, 1);
      }
    }

    if (!this.garlic.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.garlic.push(new Garlic(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- BYCICLE ------
    for (let i = 0; i < this.bycicle.length; i++) {
      const bycicleObject = this.bycicle[i];
      bycicleObject.move();

      // Check if the player collide with an obstacle
      if (this.player.didCollide(bycicleObject)) {
        bycicleObject.element.remove();
        this.bycicle.splice(i, 1);
        this.lives--;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (bycicleObject.top > this.height) {
        bycicleObject.element.remove();
        this.bycicle.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.bycicle.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.bycicle.push(new Bycicle(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- ROMATOMATOES -------//
    for (let i = 0; i < this.romaTomatoes.length; i++) {
      const romaTomatoesObject = this.romaTomatoes[i];
      romaTomatoesObject.move();

      if (this.player.didCollide(romaTomatoesObject)) {
        romaTomatoesObject.element.remove();
        this.romaTomatoes.splice(i, 1);
        this.score++;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (romaTomatoesObject.top > this.height) {
        romaTomatoesObject.element.remove();
        this.romaTomatoes.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.romaTomatoes.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.romaTomatoes.push(new RomaTomatoes(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- LOCK ------
    for (let i = 0; i < this.lock.length; i++) {
      const lockObject = this.lock[i];
      lockObject.move();

      // Check if the player collide with an obstacle
      if (this.player.didCollide(lockObject)) {
        lockObject.element.remove();
        this.lock.splice(i, 1);
        this.lives--;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (lockObject.top > this.height) {
        lockObject.element.remove();
        this.lock.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.lock.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.lock.push(new Lock(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- YELLOW PEPPERS -------//
    for (let i = 0; i < this.yellowPepper.length; i++) {
      const yellowPeperObject = this.yellowPepper[i];
      yellowPeperObject.move();

      // Check if the player collide with an obstacle
      if (this.player.didCollide(yellowPeperObject)) {
        yellowPeperObject.element.remove();
        this.yellowPepper.splice(i, 1);
        this.score++;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (yellowPeperObject.top > this.height) {
        yellowPeperObject.element.remove();
        this.yellowPepper.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.yellowPepper.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.yellowPepper.push(new YellowPepper(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- MOULIN ROUGE ------
    for (let i = 0; i < this.moulinRouge.length; i++) {
      // Grabbing an obstacle and moving it downards
      const moulinRougeObject = this.moulinRouge[i];
      moulinRougeObject.move();

      // Check if the player collide with an obstacle
      if (this.player.didCollide(moulinRougeObject)) {
        moulinRougeObject.element.remove();
        this.moulinRouge.splice(i, 1);
        this.lives--;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (moulinRougeObject.top > this.height) {
        moulinRougeObject.element.remove();
        this.moulinRouge.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.moulinRouge.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.moulinRouge.push(new MoulinRouge(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- YELLOW SQUASHES ------
    for (let i = 0; i < this.yellowSquashes.length; i++) {
      const yellowSquashesObject = this.yellowSquashes[i];
      yellowSquashesObject.move();

      if (this.player.didCollide(yellowSquashesObject)) {
        yellowSquashesObject.element.remove();
        this.yellowSquashes.splice(i, 1);
        this.score++;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (yellowSquashesObject.top > this.height) {
        yellowSquashesObject.element.remove();
        this.yellowSquashes.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.yellowSquashes.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.yellowSquashes.push(new YellowSquashes(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- NOTRE DAME ------
    for (let i = 0; i < this.notreDame.length; i++) {
      // Grabbing an obstacle and moving it downards
      const notreDameObject = this.notreDame[i];
      notreDameObject.move();

      // Check if the player collide with an obstacle
      if (this.player.didCollide(notreDameObject)) {
        notreDameObject.element.remove();
        this.notreDame.splice(i, 1);
        this.lives--;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (notreDameObject.top > this.height) {
        notreDameObject.element.remove();
        this.notreDame.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.notreDame.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.notreDame.push(new NotreDame(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- ZUCCINIS ------
    for (let i = 0; i < this.zucchinis.length; i++) {
      const zucchinisObject = this.zucchinis[i];
      zucchinisObject.move();

      // Check if the player collide with an obstacle
      if (this.player.didCollide(zucchinisObject)) {
        zucchinisObject.element.remove();
        this.zucchinis.splice(i, 1);
        this.score++;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (zucchinisObject.top > this.height) {
        zucchinisObject.element.remove();
        this.zucchinis.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.zucchinis.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.zucchinis.push(new Zucchinis(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }

    // ----- TOUR DE EIFFLE ------
    for (let i = 0; i < this.tourDeEifle.length; i++) {
      const tourDeEifleObject = this.tourDeEifle[i];
      tourDeEifleObject.move();

      // Check if the player collide with an obstacle
      if (this.player.didCollide(tourDeEifleObject)) {
        tourDeEifleObject.element.remove();
        this.tourDeEifle.splice(i, 1);
        this.lives--;
      }

      // Check if the obstacle is off the screen (at the bottom)
      else if (tourDeEifleObject.top > this.height) {
        tourDeEifleObject.element.remove();
        this.tourDeEifle.splice(i, 1);
      }
    }

    // Update Obstacles - only when there is no other obstacles on the screen
    if (!this.tourDeEifle.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true;
      setTimeout(() => {
        this.tourDeEifle.push(new ToureDeEifel(this.gameScreen));
        this.isPushingObstacle = false;
      }, 500);
    }
  }

  endGame() {
    this.player.element.remove();

    this.egglplants.forEach((egglplant) => {
      egglplant.element.remove();
    });

    this.egglplants = [];
    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";

    this.backgroundMusic.pause();
    this.gameOverMusic.play();
  }
}
