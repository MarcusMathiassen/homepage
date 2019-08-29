let gl
class Shader {
    constructor() {
        this.name
        this.isLinked = false

        this.shaders = []
        this.uniformsMap = new Map()
        this.attribsMap = new Map()

        this.program
        this.sources = []
        this.attribs = []
        this.uniforms = []
    }
    destroy() {
        gl.deleteProgram(this.program)
    }

    link() {
        gl.linkProgram(this.program)
        gl.validateProgram(this.program)

        for (const shader of this.shaders) {
            gl.detachShader(this.program, shader)
            gl.deleteShader(shader)
        }
        this.isLinked = true

        for (const uniform in this.uniforms) {
            this.uniformsMap.set(
                uniform,
                gl.getUniformLocation(this.program, uniform)
            )
        }
    }
    bind() {
        gl.useProgram(this.program)
    }

    finish() {
        this.program = gl.createProgram()
        for (const source of this.sources) {
            let shader
            switch (source.type) {
                case 'vertex':
                    shader = gl.createShader(gl.VERTEX_SHADER)
                    break
                case 'fragment':
                    shader = gl.createShader(gl.FRAGMENT_SHADER)
                    break
                case 'geometry':
                    shader = gl.createShader(gl.GEOMETRY_SHADER)
                    break
                case 'compute':
                    shader = gl.createShader(gl.COMPUTE_SHADER)
                    break
            }
            gl.shaderSource(shader, source.src)
            gl.compileShader(shader)
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(
                    'ERROR compiling shader!',
                    gl.getShaderInfoLog(shader)
                )
                return
            }
            gl.attachShader(this.program, shader)
            this.shaders.push(shader)
        }

        let i = 0
        for (const attrib of this.attribs) {
            // this.uniformsMap.set(uniform, i)
            gl.bindAttribLocation(this.program, i, attrib)
            i++
        }

        this.link()
    }

    setUniform2f(name, x, y) {
        gl.uniform2f(this.uniformsMap.get(name), x, y)
    }
    setUniform3f(name, x, y, z) {
        gl.uniform3f(this.uniformsMap.get(name), x, y, z)
    }
    setUniform2fv(name, v) {
        gl.uniform2f(this.uniformsMap.get(name), v.x, v.y)
    }
    setUniform3fv(name, v) {
        gl.uniform3f(this.uniformsMap.get(name), v.x, v.y, v.z)
    }
    setUniform4fv(name, v) {
        gl.uniform4f(this.uniformsMap.get(name), v.x, v.y, v.z, v.w)
    }
    setUniformMatrix4fv(name, m) {
        gl.uniformMatrix4fv(this.uniformsMap.get(name), 1, gl.FALSE, m[0][0])
    }
    setUniformMatrix3fv(name, m) {
        gl.uniformMatrix3fv(this.uniformsMap.get(name), 1, gl.FALSE, m[0][0])
    }
    setUniform1f(name, val) {
        gl.uniform1f(this.uniformsMap.get(name), val)
    }
    setUniform1i(name, val) {
        gl.uniform1i(this.uniformsMap.get(name), val)
    }
}

class VBO {
    constructor() {
        this.handle = 0
        this.data = 0
        this.dataSize = 0
        this.usage = 0
        this.dataMemberCount = 0
        this.stride = 0
        this.pointer = 0
        this.divisor = 0
        this.isMatrix = false
        this.attribNum = 0
    }
}

class Buffer {
    constructor() {
        this.vao
        this.vbos = new Map()
        this.attribCounter = 0
    }
    update(name, data, dataSize) {
        gl.bindVertexArray(this.vao)
        let vbo = this.vbos.get(name)

        gl.bindBuffer(vbo.type, vbo.handle)
        if (dataSize > vbo.dataSize) {
            gl.bufferData(vbo.type, dataSize, data, vbo.usage)
            vbo.dataSize = dataSize
        } else {
            gl.bufferSubData(vbo.type, 0, vbo.dataSize, data)
        }
    }

    destroy() {
        gl.deleteVertexArray(this.vao)
        this.vbos.forEach((key, vbo) => {
            gl.deleteBuffer(vbo.handle)
        })
    }
    bind() {
        gl.bindVertexArray(this.vao)
    }
    finish() {
        this.vao = gl.createVertexArray()
        this.bind()
        let updatedMap = new Map()
        this.vbos.forEach((key, vbo) => {
            vbo.handle = gl.createBuffer()

            if (vbo.hasData) {
                gl.bufferData(vbo.type, vbo.dataSize, vbo.data, vbo.usage)
            }

            if (!vbo.isMatrix) {
                gl.enableVertexAttribArray(vbo.attribNum)
                gl.vertexAttribPointer(
                    vbo.attribNum,
                    vbo.dataMemberCount,
                    gl.FLOAT,
                    gl.FALSE,
                    vbo.stride,
                    vbo.pointer
                )
                if (vbo.divisor) {
                    gl.vertexAttribDivisor(vbo.attrib_num, vbo.divisor)
                }
            } else {
                for (let i = 0; i < vbo.dataMemberCount; i++) {
                    gl.enableVertexAttribArray(i + vbo.attribNum)
                    gl.vertexAttribPointer(
                        i + vbo.attribNum,
                        vbo.dataMemberCount,
                        gl.FLOAT,
                        gl.FALSE,
                        vbo.stride,
                        i * vbo.pointer
                    )
                    if (vbo.divisor) {
                        gl.vertexAttribDivisor(i + vbo.attribNum, vbo.divisor)
                    }
                }
            }
            updatedMap.set(key, vbo)
        })
        this.vbos = updatedMap
    }
}

class CommandBuffer {
    constructor() {
        this.primitiveCount = -1
        this.first = 0
        this.count = 0
        this.hasIndices = false
        this.type = gl.TRIANGLES
    }
    commit() {
        if (this.primitiveCount != -1) {
            if (this.hasIndices) {
                gl.drawElementsInstanced(
                    this.type,
                    this.count,
                    gl.UNSIGNED_SHORT,
                    0,
                    this.primitiveCount
                )
            } else {
                gl.drawArraysInstanced(
                    this.type,
                    this.first,
                    this.count,
                    this.primitiveCount
                )
            }
        } else {
            if (this.hasIndices) {
                gl.drawElements(this.type, this.count, gl.UNSIGNED_SHORT, 0)
            } else {
                gl.drawArrays(this.type, this.first, this.count)
            }
        }
    }
}

class Renderer {
    constructor() {
        this.name = ''
        this.shader = new Shader()
        this.buffer = new Buffer()
    }
    updateBuffer(name, data, dataSize) {
        this.buffer.bind()
        this.buffer.update(name, data, dataSize)
    }
    bind() {
        this.buffer.bind()
        this.shader.bind()
    }
    draw(cmd) {
        cmd.commit()
    }
    makeShader() {
        return this.shader
    }
    makeBuffer(name) {
        let vbo = new VBO()
        vbo.attribNum = this.buffer.attribCounter++
        return this.buffer.vbos.set(name, vbo)
        // return vbo
    }
    finish() {
        this.shader.finish()
        this.buffer.finish()
    }
}

export { Renderer, Shader, Buffer, VBO, CommandBuffer }
