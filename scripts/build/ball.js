"use strict";
class Ball {
    constructor(x, y, vx, vy, radius) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
    }
    moveAndCollide(gameState, bricks, board, paddle, delta, ballStrength) {
        let prevX = this.x;
        let prevY = this.y;
        // Move
        this.x += this.vx * delta;
        this.y += this.vy * delta;
        // Collide bricks
        for (let [i, brick] of bricks) {
            if (brick.getStrength() < 1) {
                continue;
            }
            let c = this.checkCollideRect(brick);
            if (c.hit) {
                // Move back to position before collision
                this.x = prevX;
                this.y = prevY;
                // Bounce
                if (Math.abs(c.distX) < Math.abs(c.distY)) {
                    // Collision with horizontal side
                    this.vy = -this.vy;
                }
                else {
                    // Collision with vertical side
                    this.vx = -this.vx;
                }
                // Lower strength of brick
                brick.decrementStrengthBy(ballStrength);
                // Give points for destroying brick
                if (brick.getStrength() < 1) {
                    gameState.incrementScoreBy(5);
                }
                else if (brick.getStrength() == 1) {
                    gameState.incrementScoreBy(2);
                }
                else {
                    gameState.incrementScoreBy(1);
                }
                return;
            }
        }
        // Collide walls
        if (this.x - board.getLeftEdgeX() < this.radius
            || board.getRightEdgeX() - this.x < this.radius) {
            // Move back to position before collision
            this.x = prevX;
            this.y = prevY;
            // Bounce
            this.vx = -this.vx;
            return;
        }
        else if (board.getTopEdgeY() - this.y < this.radius) {
            // Move back to position before collision
            this.x = prevX;
            this.y = prevY;
            // Bounce
            this.vy = -this.vy;
            return;
        }
        else if (this.y - board.getBottomEdgeY() < this.radius) {
            if (gameState.getFloor()) {
                // If there is a solid floor, just bounce
                this.x = prevX;
                this.y = prevY;
                this.vy = -this.vy;
            }
            else {
                // Move back to original position
                this.x = BOARD_WIDTH / 2;
                this.y = 100;
                this.vx = 0;
                this.vy = 0;
                this.radius = 10;
                gameState.endPowerUp();
                if (gameState.getGameMode() != "ZenMode") {
                    gameState.decrementLives();
                }
                // Lose state
                if (gameState.getLives() < 1) {
                    if (gameState.getGameMode() == "NormalMode") {
                        gameState.decrementScoreBy(gameState.getScore());
                        for (let i = 0; i < 3; i++) {
                            gameState.incrementLives();
                        }
                    }
                    else if (gameState.getGameMode() == "HardCoreMode") {
                        gameState.decrementScoreBy(gameState.getScore());
                        gameState.incrementLives();
                    }
                    if (gameState.getGameMode() != "ZenMode") {
                        location.reload();
                    }
                }
            }
        }
        // Collide paddle
        let c = this.checkCollideRect(paddle);
        if (c.hit) {
            // Move back to position before collision
            this.x = prevX;
            this.y = prevY;
            // Bounce
            if (Math.abs(c.distX) < Math.abs(c.distY)) {
                // Collision with horizontal side
                this.vy = -this.vy;
                this.vx = (this.x - paddle.getX()) / (paddle.getWidth() / 2) * 0.5;
                /* TODO remove "* 0.1" above and add real speed multiplier */
            }
            else {
                // Collision with vertical side
                this.vx = -this.vx;
            }
        }
    }
    checkCollideRect(rect) {
        let testX = this.x;
        var testY = this.y;
        if (this.x < rect.getLeftX()) {
            testX = rect.getLeftX();
        }
        else if (this.x > rect.getRightX()) {
            testX = rect.getRightX();
        }
        if (this.y < rect.getBottomY()) {
            testY = rect.getBottomY();
        }
        else if (this.y > rect.getTopY()) {
            testY = rect.getTopY();
        }
        let distX = this.x - testX;
        let distY = this.y - testY;
        let distance = Math.sqrt(distX * distX + distY * distY);
        return {
            "hit": distance <= this.radius,
            "distX": distX,
            "distY": distY
        };
    }
    setVY(num) { this.vy = num; }
    getX() { return this.x; }
    getY() { return this.y; }
    getVX() { return this.vx; }
    getVY() { return this.vy; }
    getRadius() { return this.radius; }
}
