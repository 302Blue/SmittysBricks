class Paddle extends Rectangle {
    speed: number;
    maxPosition: number;

    constructor(x: number, y: number,
                width: number, height: number,
                speed: number, maxPosition: number) {
        super(x, y, width, height);
        this.speed = speed;
        this.maxPosition = maxPosition;
        $('#paddle').css("width", this.width);
    }

    updatePosition(direction: string) {
        // For moving objects
        if ((direction == 'left') && (super.getLeftX() > 0)) {
            super.setX(super.getX() - this.speed);
        }
        if ((direction == 'right') && (super.getRightX() < this.maxPosition)) {
            super.setX(super.getX() + this.speed);
        }
    }

    setWidthMultBy(scale: number) {
        this.width = Math.floor(this.width * scale);
        $('#paddle').css("width", this.width);
    }

}
