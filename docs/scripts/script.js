window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
  
    let game;
  
    startButton.addEventListener("click", function() {
      startGame();
    });
  
    restartButton.addEventListener("click", function() {
      location.reload;
    })
  
    function startGame() {
      console.log("start game");
  
      game = new Game();
  
      game.start();
      console.log(game)
    }

    function handleKeyDown(event) {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowRight"
        ]

        if(possibleKeystrokes.includes(key)) {
            event.preventDefault();

            if(game) {
                switch(key) {
                    case "ArrowLeft": game.player.directionX = -1;
                    break;

                    case "ArrowRight": game.player.directionX = 1;
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
                }
            }
        }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
}