class Obstacle {
    constructor(gameScreen,imgSrc) {
      this.gameScreen = gameScreen;
  
      this.left = Math.floor(Math.random() * 300 + 100);
  
      this.top = 0;
      this.with = 100;
      this.height = 150;
  
      function gameObject(objects) {
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
      const eggplants = new gameObject(
        "/images/eggplants.png",
        100,
        200,
        50,
        100
      );
      const garlic = new gameObject("/images/garlic.png", 150, 300, 60, 120);
      const romatomatoes = new gameObject(
        "/images/romatomatoes.png",
        200,
        400,
        70,
        140
      );
      const yellowpeper = new gameObject(
        "/images/yellowpepper.png",
        100,
        200,
        50,
        100
      );
      const zucchinnis = new gameObject(
        "/images/zucchinis.png",
        150,
        300,
        60,
        120
      );
      const yellowsquashes = new gameObject(
        "/images/yellowsquashes.png",
        200,
        400,
        70,
        140
      );
  
      const bicycle = new gameObject("/images/bicycle.png", 100, 200, 50, 100);
      const moulinrouge = new gameObject(
        "/images/moulinrouge.png",
        150,
        300,
        60,
        120
      );
      const tourdeeiffel = new gameObject(
        "/images/moulinrouge.png",
        200,
        400,
        70,
        140
      );
      const notredame = new gameObject(
        "/images/notredame.png",
        100,
        200,
        50,
        100
      );
      const Arcdetriomphe = new gameObject(
        "/images/arcdetriomphe.png",
        150,
        300,
        60,
        120
      );
      const lock = new gameObject("/images/lock.png", 200, 400, 70, 140);
    }
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      console.log(this.left)
      console.log(this.top)
    }
  
    move() {
      // Drop the obstacle 3px to the bottom
      this.top += 3;
      this.updatePosition();
    }
  }