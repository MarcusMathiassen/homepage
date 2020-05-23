export default class v3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x
        this.y = y
        this.z = z
    }
    neg() {
        this.x = -this.x
        this.y = -this.y
        this.z = -this.z
        return this
    }
    add(v) {
        this.x += v.x
        this.y += v.y
        this.z += v.z
        return this
    }
    sub(v) {
        this.x -= v.x
        this.y -= v.y
        this.z -= v.z
        return this
    }
    scale(v) {
        this.x *= v
        this.y *= v
        this.z *= v
        return this
    }
    div(v) {
        if (v != 0) {
            this.x /= v
            this.y /= v
            this.z /= v
        }
        return this
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z
    }
    length() {
        return Math.sqrt(this.dot(this))
    }
    normalize() {
        return this.div(this.length())
    }
    static normalize(a) {
        return a.normalize()
    }
    static distance(a, b) {
        return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y))
    }
    static neg(v) {
        return new v3(-v.x, -v.y, -v.z)
    }
    static add(a, b) {
        return new v3(a.x + b.x, a.y + b.y, a.z + b.z)
    }
    static adds(a, b) {
        return new v3(a.x + b, a.y + b, a.z + b)
    }
    static sub(a, b) {
        return new v3(a.x - b.x, a.y - b.y, a.z - b.z)
    }
    static subs(a, b) {
        return new v3(a.x - b, a.y - b, a.z - b)
    }
    static scale(a, b) {
        return new v3(a.x * b, a.y * b, a.z * b)
    }
    static div(a, b) {
        return new v3(a.x / b, a.y / b, a.z / b)
    }
    static dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z
    }
    static cross(a, b) {
        return new v3(
            a.y*b.z - a.z*b.y,
            a.z*b.x - a.x*b.z,
            a.x*b.y - a.y*b.x)
    }
}
