export default class CircleArray {
    constructor(data) {
        this.data = data
        this.iter = 0
    }
    append(item) {
        this.data.append(item)
    }
    curr() {
        return this.data[this.iter]
    }
    next() {
        this.iter = this.iter >= this.data.length ? 0 : this.iter
        return this.data[this.iter++]
    }
}
