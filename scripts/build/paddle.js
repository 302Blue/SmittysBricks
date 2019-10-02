"use strict";
class Paddle extends Rectangle {
    constructor(x, y, width, height, speed, maxPosition) {
        super(x, y, width, height);
        this.speed = speed;
        this.maxPosition = maxPosition;
        $('#paddle').css("width", this.width);
    }
    updatePosition(direction) {
        if ((direction == 'left') && (super.getLeftX() > 0)) {
            super.setX(super.getX() - this.speed);
        }
        if ((direction == 'right') && (super.getRightX() < this.maxPosition)) {
            super.setX(super.getX() + this.speed);
        }
    }
    setWidthMultBy(scale) {
        this.width = Math.floor(this.width * scale);
        $('#paddle').css("width", this.width);
    }
}
