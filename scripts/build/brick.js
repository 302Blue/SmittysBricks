"use strict";
class Brick extends Rectangle {
    constructor(x, y, width, height, endX, endY, strength, p) {
        super(x, y, width, height);
        this.strength = strength;
        this.initX = x;
        this.initY = y;
        this.endX = endX;
        this.endY = endY;
        this.speedX = 1;
        this.speedY = 1;
        this.powerup = p;
    }
    updateBrick() {
        if (this.speedX > 0) {
            if (this.x + this.speedX < this.endX) {
                this.x += this.speedX;
            }
            else {
                this.speedX = this.speedX * -1;
            }
        }
        else {
            if (this.x + this.speedX > this.initX) {
                this.x += this.speedX;
            }
            else {
                this.speedX = this.speedX * -1;
            }
        }
        if (this.speedY > 0) {
            if (this.y + this.speedY < this.endY) {
                this.y += this.speedY;
            }
            else {
                this.speedY = this.speedY * -1;
            }
        }
        else {
            if (this.y + this.speedY > this.initY) {
                this.y += this.speedY;
            }
            else {
                this.speedY = this.speedY * -1;
            }
        }
    }
    clone() {
        return new Brick(super.getX(), super.getY(), super.getWidth(), super.getHeight(), this.getEndX(), this.getEndY(), this.getStrength(), this.getPowerUp());
    }
    decrementStrengthBy(amt) { this.strength -= amt; }
    setStrength(strength) { this.strength = strength; }
    setPowerUp(powerup) { this.powerup = powerup; }
    getStrength() { return this.strength; }
    getInitX() { return this.initX; }
    getInitY() { return this.initY; }
    getEndX() { return this.endX; }
    getEndY() { return this.endY; }
    getSpeedX() { return this.speedX; }
    getSpeedY() { return this.speedY; }
    getPowerUp() { return this.powerup; }
}
