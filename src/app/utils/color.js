import { v4 } from './math'

export default class Color {
    constructor(r = 0, g = 0, b = 0, a = 0) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }

    as255() {
        this.r *= 255
        this.g *= 255
        this.b *= 255
        this.a *= 255
    }

    normalized() {
        this.r /= 255
        this.g /= 255
        this.b /= 255
        this.a /= 255
    }

    rgb() {
        return {
            r: this.r,
            g: this.g,
            b: this.b,
        }
    }

    v4() {
        return new v4(this.r, this.g, this.b, this.a)
    }
}
