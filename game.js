```javascript
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

const scoreText = document.getElementById("score");
const gameOver = document.getElementById("gameOver");
const finalScore = document.getElementById("finalScore");

let jumping = false;
let gameRunning = true;

let playerBottom = 40;

let obstacleRight = -50;

let score = 0;

let speed = 6;


// ======================
// NHẢY
// ======================

function jump() {

    if (jumping || !gameRunning) {
        return;
    }

    jumping = true;

    let up = setInterval(function () {

        playerBottom += 8;

        player.style.bottom = playerBottom + "px";

        if (playerBottom >= 180) {

            clearInterval(up);

            let down = setInterval(function () {

                playerBottom -= 8;

                player.style.bottom = playerBottom + "px";

                if (playerBottom <= 40) {

                    playerBottom = 40;

                    player.style.bottom = "40px";

                    jumping = false;

                    clearInterval(down);
                }

            }, 20);
        }

    }, 20);
}


// ======================
// DI CHUYỂN CHƯỚNG NGẠI
// ======================

function moveObstacle() {

    if (!gameRunning) {
        return;
    }

    obstacleRight += speed;

    obstacle.style.right = obstacleRight + "px";


    // Nếu chướng ngại vật đi qua màn hình
    if (obstacleRight > 950) {

        obstacleRight = -50;

        score++;

        scoreText.textContent = score;

        // Cứ 5 điểm thì tăng tốc
        if (score % 5 === 0) {
            speed += 1;
        }
    }


    // ======================
    // KIỂM TRA VA CHẠM
    // ======================

    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
    ) {

        endGame();
    }
}


// ======================
// GAME OVER
// ======================

function endGame() {

    gameRunning = false;

    finalScore.textContent = score;

    gameOver.style.display = "block";
}


// ======================
// CHƠI LẠI
// ======================

function restartGame() {

    location.reload();
}


// ======================
// BÀN PHÍM
// ======================

document.addEventListener("keydown", function(event) {

    if (
        event.code === "Space" ||
        event.code === "ArrowUp"
    ) {

        event.preventDefault();

        jump();
    }

});


// ======================
// CHẠY GAME
// ======================

setInterval(moveObstacle, 20);
```
