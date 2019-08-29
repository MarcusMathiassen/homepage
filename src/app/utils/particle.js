import { v2 } from './math'
import { random } from './utility'

export default class Particle {
    constructor(x, y, r) {
        this.position = new v2(x, y)
        this.velocity = new v2(random(-1, 1), random(-1, 1)).scale(2)
        this.radius = r
        this.mass = r
    }

    update(bounds, gravity) {
        // Border collision
        if (this.position.x <= this.radius && this.velocity.x < 0) {
            this.position.x = this.radius
            this.velocity.x = -this.velocity.x
        }
        if (
            this.position.x >= bounds.width - this.radius &&
            this.velocity.x > 0
        ) {
            this.position.x = bounds.width - this.radius
            this.velocity.x = -this.velocity.x
        }
        if (this.position.y <= this.radius && this.velocity.y < 0) {
            this.position.y = this.radius
            this.velocity.y = -this.velocity.y
        }
        if (
            this.position.y >= bounds.height - this.radius &&
            this.velocity.y > 0
        ) {
            this.position.y = bounds.height - this.radius
            this.velocity.y = -this.velocity.y
        }
        this.velocity.add(gravity)
        this.position.add(this.velocity)
    }

    collidesWith(b) {
        // Setup variables
        const bx = b.position.x
        const by = b.position.y
        const br = b.radius
        // basic square collision check
        if (
            this.position.x - this.radius < bx + br &&
            this.position.x + this.radius > bx - br &&
            this.position.y - this.radius < by + br &&
            this.position.y + this.radius > by - br
        ) {
            // circle collision check
            const dx = bx - this.position.x
            const dy = by - this.position.y
            const sumRadius = this.radius + br
            const sqrRadius = sumRadius * sumRadius
            const distSqr = dx * dx + dy * dy
            if (distSqr <= sqrRadius) {
                return true
            }
        }
        return false
    }

    resolveCollision(b) {
        const bvel = b.velocity
        const bx = b.position.x
        const by = b.position.y
        const m1 = this.mass
        const m2 = b.mass
        const dx = bx - this.position.x
        const dy = by - this.position.y
        const vdx = bvel.x - this.velocity.x
        const vdy = bvel.y - this.velocity.y

        const d = dx * vdx + dy * vdy
        if (d < 0) {
            const norm_vec = new v2(dx, dy).normalize()
            const tang_vec = new v2(norm_vec.y * -1.0, norm_vec.x)
            const scal_norm_1 = v2.dot(norm_vec, this.velocity)
            const scal_norm_2 = v2.dot(norm_vec, bvel)
            const scal_tang_1 = v2.dot(tang_vec, this.velocity)
            const scal_tang_2 = v2.dot(tang_vec, bvel)
            const scal_norm_1_after =
                (scal_norm_1 * (m1 - m2) + 2 * m2 * scal_norm_2) / (m1 + m2)
            const scal_norm_2_after =
                (scal_norm_2 * (m2 - m1) + 2 * m1 * scal_norm_1) / (m1 + m2)
            const scal_norm_1_after_vec = v2.scale(norm_vec, scal_norm_1_after)
            const scal_norm_2_after_vec = v2.scale(norm_vec, scal_norm_2_after)
            const scal_norm_1_vec = v2.scale(tang_vec, scal_tang_1)
            const scal_norm_2_vec = v2.scale(tang_vec, scal_tang_2)

            this.velocity = scal_norm_1_vec.add(scal_norm_1_after_vec)
            b.velocity = scal_norm_2_vec.add(scal_norm_2_after_vec)
        }
    }
}
