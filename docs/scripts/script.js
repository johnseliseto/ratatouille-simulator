window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const creditsButton = document.getElementById("credits-button");
  const creditScreen = document.getElementById("credits");
  const startScreen = document.getElementById("game-intro");
  const menuButton = document.getElementById("credits");
  const instructionScreen = document.getElementById("instructions");
  const instructionsButton = document.getElementById("instructions-button");
  const instructionsMenuButton = document.getElementById(
    "instructionsMenuButton"
  );

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  creditsButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    creditScreen.style.display = "block";
  });

  creditsButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    creditScreen.style.display = "block";
  });

  menuButton.addEventListener("click", function () {
    creditScreen.style.display = "none";
    startScreen.style.display = "flex";
  });

  instructionsButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    instructionScreen.style.display = "block";
  });

  instructionsMenuButton.addEventListener("click", function () {
    instructionScreen.style.display = "none";
    startScreen.style.display = "flex";
  });

  function startGame() {
    console.log("start game");

    game = new Game();

    game.start();
    console.log(game);
  }

  function restartGame() {
    location.reload();
  }

  function handleKeyDown(event) {
    const key = event.key;
    const possibleKeystrokes = ["ArrowLeft", "ArrowRight"];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -5;
            break;

          case "ArrowRight":
            game.player.directionX = 5;
            break;
        }
      }
    }
  }

  function handleKeyUp(event) {
    const key = event.key;
    const possibleKeystrokes = ["ArrowLeft", "ArrowRight"];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = 0;
            break;

          case "ArrowRight":
            game.player.directionX = 0;
            break;
        }
      }
    }
  }

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
};
