window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    //const mainMenuButton = document.getElementById("menu-button");
  
    let game;
  
    startButton.addEventListener("click", function() {
      startGame();
    });
  
    restartButton.addEventListener("click", function() {
      restartGame();
    });

   /*  mainMenuButton.addEventListener("click", function() {
        mainMenuButton();
    }); */
  
    function startGame() {
      console.log("start game");
  
      game = new Game();
  
      game.start();
      console.log(game)
    }

    function restartGame() {
       location.reload();
    }

    function handleKeyDown(event) {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowRight",
        ]

        if(possibleKeystrokes.includes(key)) {
            event.preventDefault();

            if(game) {
                switch(key) {
                    case "ArrowLeft": game.player.directionX = -3;
                    break;

                    case "ArrowRight": game.player.directionX = 3;
                    break;
                }
            }
        }
    }

    function handleKeyUp(event) {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowRight"
        ]

        if(possibleKeystrokes.includes(key)) {
            event.preventDefault();

            if(game) {
                switch(key) {
                    case "ArrowLeft": game.player.directionX = 0;
                    break;

                    case "ArrowRight": game.player.directionX = 0;
                    break;
                }
            }
        }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
}