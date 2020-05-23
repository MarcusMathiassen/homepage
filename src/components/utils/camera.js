
import { v3 } from "./math.js"

// Default camera values
const YAW = -123.8488
const PITCH = -11.60
const SPEED =  20.5
const SENSITIVTY =  0.3
const ZOOM =  1.0
const MIN_ZOOM = 0.4 
const MAX_ZOOM = 10.0

const radians = deg => deg / 180.0 * Math.PI

export default class Camera {
    constructor() {
        this.states = {
            MOVE_LEFT: 0,
            MOVE_RIGHT: 1,
            MOVE_UP: 2,
            MOVE_DOWN: 3,
            MOVE_FORWARD: 4,
            MOVE_BACKWARD: 5,
        };
        this.position = new v3(13.433692, 6.3185554, 20.717651)
        this.front = new v3(-0.5511119, -0.20278727, -0.80941516)
        this.right = new v3(0.8265894, 0.0, -0.5628054)
        this.up = new v3(-0.11412979, 0.97922283, -0.16762182)
        this.world_up = new v3(0,1,0)
        this.yaw = YAW
        this.pitch = PITCH
        this.movement_speed = SPEED
        this.mouse_sensitivity = SENSITIVTY
        this.zoom = ZOOM
        this.first_mouse = 1
        this.last_x = 512 / 2.0
        this.last_y = 512 / 2.0 
    }
    
    updateCameraVectors() {
        const n_front = new v3(
            Math.cos(radians(this.yaw)) * Math.cos(radians(this.pitch)),
            Math.sin(radians(this.pitch)),
            Math.sin(radians(this.yaw)) * Math.cos(radians(this.pitch))
        )
        this.front = v3.normalize(n_front);
        this.right = v3.normalize(v3.cross(this.front, this.world_up))
        this.up = v3.normalize(v3.cross(this.right, this.front))
    }
    
    process_keyboard(direction, deltaTime) {
        const velocity = this.movement_speed * deltaTime;
        switch (direction) {
        case this.states.MOVE_FORWARD:
            this.position = v3.add(this.position, v3.scale(this.front, velocity));
            break;
        case this.states.MOVE_BACKWARD:
            this.position = v3.sub(this.position, v3.scale(this.front, velocity));
            break;
        case this.states.MOVE_LEFT:
            this.position = v3.sub(this.position, v3.scale(this.right, velocity));
            break;
        case this.states.MOVE_RIGHT:
            this.position = v3.add(this.position, v3.scale(this.right, velocity));
            break;
        case this.states.MOVE_DOWN:
            this.position = v3.sub(this.position, v3.scale(this.up, velocity));
            break;
        case this.states.MOVE_UP:
            this.position = v3.add(this.position, v3.scale(this.up, velocity));
            break;
        }
    }
    
    process_mouse_movement(xpos, ypos) {
        this.yaw += xpos * this.mouse_sensitivity;
        this.pitch -= ypos * this.mouse_sensitivity;
    
        // Make sure that when pitch is out of bounds, screen doesn't get flipped
        if (this.pitch > 89.0) {
            this.pitch = 89.0;
        }
        if (this.pitch < -89.0) {
            this.pitch = -89.0;
        }
    
        // Update front, right and Up Vectors using the updated Eular angles
        this.updateCameraVectors()
    }
}
