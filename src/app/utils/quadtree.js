let data = []

import { v2 } from './math'
import { Rect } from './utility'

const DEFAULT_MAX_NODE_CAPACITY = 10
const DEFAULT_MAX_NODE_DEPTH = 5

export default class Quadtree {
    constructor(depth, bounds) {
        this.maxCapacityPerNode = DEFAULT_MAX_NODE_CAPACITY
        this.maxDepth = DEFAULT_MAX_NODE_DEPTH
        this.depth = depth
        this.bounds = bounds
        this.subnodes = [4]
        this.indices = []
        this.hasSplit = false
    }

    split() {
        const min = this.bounds.min
        const max = this.bounds.max
        const x = min.x
        const y = min.y
        const width = max.x - min.x
        const height = max.y - min.y
        const w = width * 0.5
        const h = height * 0.5
        const SW = new Rect(new v2(x, y), new v2(x + w, y + h))
        const SE = new Rect(new v2(x + w, y), new v2(x + width, y + h))
        const NW = new Rect(new v2(x, y + h), new v2(x + w, y + height))
        const NE = new Rect(new v2(x + w, y + h), new v2(x + width, y + height))
        this.subnodes[0] = new Quadtree(this.depth + 1, SW)
        this.subnodes[1] = new Quadtree(this.depth + 1, SE)
        this.subnodes[2] = new Quadtree(this.depth + 1, NW)
        this.subnodes[3] = new Quadtree(this.depth + 1, NE)
        this.hasSplit = true
    }

    input(objects) {
        data = objects
        const objectCount = data.length
        for (let i = 0; i < objectCount; i++) {
            this.insert(i)
        }
    }

    contains(index) {
        return this.bounds.containsPoint(
            data[index].position,
            data[index].radius
        )
    }

    insert(index) {
        // If this node has split add it to the children instead
        if (this.hasSplit) {
            if (this.subnodes[0].contains(index)) {
                this.subnodes[0].insert(index)
            }
            if (this.subnodes[1].contains(index)) {
                this.subnodes[1].insert(index)
            }
            if (this.subnodes[2].contains(index)) {
                this.subnodes[2].insert(index)
            }
            if (this.subnodes[3].contains(index)) {
                this.subnodes[3].insert(index)
            }
            return
        }
        // .. else add it here.
        this.indices.push(index)
        // Then if we've reached our max capacity..
        if (
            this.indices.length > this.maxCapacityPerNode &&
            this.depth < this.maxDepth
        ) {
            // ..split..
            this.split()
            //  ..and move the indices from this node to the new ones
            for (const i of this.indices) {
                if (this.subnodes[0].contains(i)) {
                    this.subnodes[0].insert(i)
                }
                if (this.subnodes[1].contains(i)) {
                    this.subnodes[1].insert(i)
                }
                if (this.subnodes[2].contains(i)) {
                    this.subnodes[2].insert(i)
                }
                if (this.subnodes[3].contains(i)) {
                    this.subnodes[3].insert(i)
                }
            }
            // .. and clear this one out
            this.indices = []
        }
    }

    getIndices(nodes) {
        if (this.hasSplit) {
            this.subnodes[0].getIndices(nodes)
            this.subnodes[1].getIndices(nodes)
            this.subnodes[2].getIndices(nodes)
            this.subnodes[3].getIndices(nodes)
            return
        }
        if (this.indices.length != 0) {
            nodes.push(this.indices)
        }
    }

    getNeighbours(nodes, object) {
        if (this.hasSplit) {
            if (
                this.subnodes[0].bounds.containsPoint(
                    object.position,
                    object.radius
                )
            ) {
                this.subnodes[0].getNeighbours(nodes, object)
            }
            if (
                this.subnodes[1].bounds.containsPoint(
                    object.position,
                    object.radius
                )
            ) {
                this.subnodes[1].getNeighbours(nodes, object)
            }
            if (
                this.subnodes[2].bounds.containsPoint(
                    object.position,
                    object.radius
                )
            ) {
                this.subnodes[2].getNeighbours(nodes, object)
            }
            if (
                this.subnodes[3].bounds.containsPoint(
                    object.position,
                    object.radius
                )
            ) {
                this.subnodes[3].getNeighbours(nodes, object)
            }
            return false
        }
        if (this.indices.length != 0) {
            nodes.push(this.indices)
        }
    }

    getNeighbourNodes(nodes, object) {
        if (this.hasSplit) {
            if (
                this.subnodes[0].bounds.containsPoint(
                    object.position,
                    object.radius
                )
            )
                this.subnodes[0].getNeighbourNodes(nodes, object)

            if (
                this.subnodes[1].bounds.containsPoint(
                    object.position,
                    object.radius
                )
            )
                this.subnodes[1].getNeighbourNodes(nodes, object)

            if (
                this.subnodes[2].bounds.containsPoint(
                    object.position,
                    object.radius
                )
            )
                this.subnodes[2].getNeighbourNodes(nodes, object)
            if (
                this.subnodes[3].bounds.containsPoint(
                    object.position,
                    object.radius
                )
            )
                this.subnodes[3].getNeighbourNodes(nodes, object)
            return
        }
        nodes.push(this)
    }

    getNodesBounds(container) {
        if (this.hasSplit) {
            this.subnodes[0].getNodesBounds(container)
            this.subnodes[1].getNodesBounds(container)
            this.subnodes[2].getNodesBounds(container)
            this.subnodes[3].getNodesBounds(container)
            return
        }
        container.push(this.bounds)
    }

    colorNeighbours(position, radius, color) {
        if (this.hasSplit) {
            if (this.subnodes[0].bounds.containsPoint(position, radius)) {
                this.subnodes[0].colorNeighbours(position, radius, color)
            }
            if (this.subnodes[1].bounds.containsPoint(position, radius)) {
                this.subnodes[1].colorNeighbours(position, radius, color)
            }
            if (this.subnodes[2].bounds.containsPoint(position, radius)) {
                this.subnodes[2].colorNeighbours(position, radius, color)
            }
            if (this.subnodes[3].bounds.containsPoint(position, radius)) {
                this.subnodes[3].colorNeighbours(position, radius, color)
            }
            return false
        }
        this.bounds.color = color
    }
}
