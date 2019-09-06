export default class v2 {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }
    neg() {
        this.x = -this.x
        this.y = -this.y
        return this
    }
    add(v) {
        this.x += v.x
        this.y += v.y
        return this
    }
    sub(v) {
        this.x -= v.x
        this.y -= v.y
        return this
    }
    scale(v) {
        this.x *= v
        this.y *= v
        return this
    }
    div(v) {
        if (v != 0) {
            this.x /= v
            this.y /= v
        }
        return this
    }
    dot(v) {
        return this.x * v.x + this.y * v.y
    }
    length() {
        return Math.sqrt(this.dot(this))
    }
    normalize() {
        return this.div(this.length())
    }

    static distance(a, b) {
        return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y))
    }
    static neg(v) {
        return new v2(-v.x, -v.y)
    }
    static add(a, b) {
        return new v2(a.x + b.x, a.y + b.y)
    }
    static adds(a, b) {
        return new v2(a.x + b, a.y + b)
    }
    static sub(a, b) {
        return new v2(a.x - b.x, a.y - b.y)
    }
    static subs(a, b) {
        return new v2(a.x - b, a.y - b)
    }
    static scale(a, b) {
        return new v2(a.x * b, a.y * b)
    }
    static div(a, b) {
        return new v2(a.x / b, a.y / b)
    }
    static dot(a, b) {
        return a.x * b.x + a.y * b.y
    }
}
