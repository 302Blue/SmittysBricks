"use strict";
class Board {
    constructor(leftEdgeX, rightEdgeX, topEdgeY, bottomEdgeY) {
        this.leftEdgeX = leftEdgeX;
        this.rightEdgeX = rightEdgeX;
        this.topEdgeY = topEdgeY;
        this.bottomEdgeY = bottomEdgeY;
    }
    getLeftEdgeX() { return this.leftEdgeX; }
    getRightEdgeX() { return this.rightEdgeX; }
    getTopEdgeY() { return this.topEdgeY; }
    getBottomEdgeY() { return this.bottomEdgeY; }
}
