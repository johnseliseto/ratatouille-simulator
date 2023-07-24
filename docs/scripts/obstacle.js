/*class eggplantsObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 500 + 100);

    this.top = -10;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/eggplants.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class garlicObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/garlic.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class romatomatoesObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/romatomatoes.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class yellowpepperObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/yellowpepper.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class yellowsquashesObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/yellowsquashes.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class zucchinisObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/zucchinis.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class arcdetriompheObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/arcdetriomphe.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class bycicleObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/bicycle.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class lockObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/lock.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class moulinrougeObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/moulinrouge.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class notredameObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/notredame.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

class touredeeifelObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 300 + 100);

    this.top = 0;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/tourdeeiffel.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}*/

class Obstacle {
  constructor(gameScreen, imgSrc) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 500 + 100);

    this.top = -10;
    this.with = 100;
    this.height = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log(this.left);
    console.log(this.top);
  }

  move() {
    // Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}

const gameScreen = document.getElementById("gameScreen");

const eggplantsObstacle = new Obstacle(gameScreen, "/docs/images/eggplants.png");
const garlicObstacle = new Obstacle(gameScreen, "/docs/images/garlic.png");
const romatomatoesObstacle = new Obstacle(gameScreen, "/docs/images/romatomatoes.png");
const yellowpepperObstacle = new Obstacle(gameScreen, "/docs/images/yellowpepper.png");
const yellowsquashesObstacle = new Obstacle(gameScreen, "/docs/images/yellowsquashes.png");
const zucchinisObstacle = new Obstacle(gameScreen, "/docs/images/zucchinis.png");

const arcdetriompheObstacle = new Obstacle(gameScreen, "/docs/images/arcdetriomphe.png");
const bycicleObstacle = new Obstacle(gameScreen, "/docs/images/bicycle.png");
const lockObstacle = new Obstacle(gameScreen, "/docs/images/lock.png");
const moulinrougeObstacle = new Obstacle(gameScreen, "/docs/images/moulinrouge.png");
const notredameObstacle = new Obstacle(gameScreen, "/docs/images/notredame.png");
const touredeeifelObstacle = new Obstacle(gameScreen, "/docs/images/tourdeeiffel.png");