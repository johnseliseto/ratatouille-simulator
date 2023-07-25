class Eggplants {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = -10;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/eggplants.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class Garlic {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 150;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/garlic.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class RomaTomatoes {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/romatomatoes.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class YellowPepper {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/yellowpepper.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class YellowSquashes {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/yellowsquashes.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class Zucchinis {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/zucchinis.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class ArcDeTriomphe {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/arcdetriomphe.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class Bycicle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/bicycle.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class Lock {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/lock.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class MoulinRouge {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/moulinrouge.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class NotreDame {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/notredame.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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

class ToureDeEifel {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = Math.floor(Math.random() * 1000 + 100);

    this.top = 0;
    this.width = 100;
    // create the HTML element default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/tourdeeiffel.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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
