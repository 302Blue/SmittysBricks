"use strict";
class GameState {
    constructor(score, lives, level, activePowerUp, paddle, gameMode) {
        this.score = score;
        this.activePowerUp = activePowerUp;
        this.level = level;
        this.lives = lives;
        this.gameMode = gameMode;
        this.paddle = paddle;
        this.timer = 0;
        this.solidFloor = false;
    }
    startGameState() {
        if (this.gameMode == "NormalMode") {
            this.lives = 3;
        }
        else if (this.gameMode == "HardCoreMode") {
            this.lives = 1;
        }
        else if (this.gameMode == "AILab") {
        }
        else if (this.gameMode == "LevelEditor") {
        }
    }
    updateGameState() {
        if (this.gameMode == "NormalMode") {
            $("#lives").text(`Lives: ${this.lives}`);
            $("#score").text(`Score: ${this.score}`);
        }
        else if (this.gameMode == "ZenMode") {
            $("#lives").text("Lives: ∞");
            $("#score").text(`Score: ${this.score}`);
        }
        else if (this.gameMode == "HardCoreMode") {
            $("#lives").text(`Lives: ${this.lives}`);
            $("#score").text(`Score: ${this.score}`);
        }
        else if (this.gameMode == "AILab") {
        }
        else if (this.gameMode == "LevelEditor") {
        }
    }
    endPowerUp() {
        this.activePowerUp = new PowerUp(0, 0);
        console.log("Cleared PowerUp");
    }
    setPowerup(p) { this.activePowerUp = p; }
    setFloor(sf) { this.solidFloor = sf; }
    setGameMode(str) { this.gameMode = str; }
    decrementScoreBy(num) { this.score -= num; }
    incrementScoreBy(num) { this.score += num; }
    decrementLives() { this.lives -= 1; }
    incrementLives() { this.lives += 1; }
    getPowerUp() { return this.activePowerUp; }
    getFloor() { return this.solidFloor; }
    getScore() { return this.score; }
    getLives() { return this.lives; }
    getGameMode() { return this.gameMode; }
}
