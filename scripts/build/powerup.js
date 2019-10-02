"use strict";
class PowerUp {
    constructor(p, d) {
        this.pid = p;
        this.duration = d;
        this.state = 'block';
        this.x = 0;
        this.y = 0;
        this.radius = 15;
    }
    getX() { return this.x; }
    getY() { return this.y; }
    getPid() { return this.pid; }
    getState() { return this.state; }
    getDuration() { return this.duration; }
    clone() { return new PowerUp(this.getPid(), this.getDuration()); }
}
