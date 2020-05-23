#version 300 es
precision mediump float;

out vec4 frag_color;

uniform sampler2D uTex;
uniform int uFrameIndex;
uniform vec2 uRes;

vec3 OECF_sRGBFast(const vec3 linear) {
    return pow(linear, vec3(1.0 / 2.2));
}

vec3 Tonemap_ACES(const vec3 x) {
    // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"
    const float a = 2.51;
    const float b = 0.03;
    const float c = 2.43;
    const float d = 0.59;
    const float e = 0.14;
    return (x * (a * x + b)) / (x * (c * x + d) + e);
}

void main() {
    vec2 uv = gl_FragCoord.xy / uRes.xy;
    vec3 col = texture(uTex, uv).rgb;
            
    // ACES Tonemapping
    col = Tonemap_ACES(col);

    // Gamma correction
    col = OECF_sRGBFast(col);
    
    frag_color = vec4(col, 1);
}
