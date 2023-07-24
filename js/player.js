class Player {
    constructor (gameScreen, left, top, width, height, imgSrc) {

        this.gameScreen = gameScreen;

        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

        // direction of the player's moving horizontally
        this.directionX = 0;
        this.directionY = 0; // not needed

        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";

        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY; // not needed

        if(this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width;
        }
        else if (this.left < 0) {
            this.left = 0;
        }

        if(this.top + this.height > this.gameScreen.offsetHeight) {
            this.top = this.gameScreen.offsetHeight - this.height;
        }
        else if (this.top < 0) {
            this.top = 0;
        }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
}