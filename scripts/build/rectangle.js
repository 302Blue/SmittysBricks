"use strict";
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setX(x) { this.x = x; }
    setY(y) { this.y = y; }
    setWidth(width) { this.width = width; }
    setHeight(height) { this.height = height; }
    getX() { return this.x; }
    getY() { return this.y; }
    getLeftX() { return this.x - this.width / 2; }
    getRightX() { return this.x + this.width / 2; }
    getTopY() { return this.y + this.height / 2; }
    getBottomY() { return this.y - this.height / 2; }
    getWidth() { return this.width; }
    getHeight() { return this.height; }
}
