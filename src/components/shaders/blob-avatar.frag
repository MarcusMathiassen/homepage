#version 300 es

precision mediump float;

out vec4 frag;

uniform float time;
uniform vec4 mouse;
uniform vec2 viewport_size;
uniform vec3 backColor;

uniform sampler2D sam;

#define f32 float
#define v2 vec2
#define v3 vec3
#define v4 vec4

// cosine based palette, 4 vec3 params
// https://www.iquilezles.org/www/articles/palettes/palettes.htm
v3 palette(f32 t, v3 a, v3 b, v3 c, v3 d)
{
    return a + b * cos(6.2831 * (c * t + d));
}

v3 rainbowMap(f32 t)
{
    v3 a = v3(0.5, 0.5, 0.5);
    v3 b = v3(0.5, 0.5, 0.5);
    v3 c = v3(1.0, 1.0, 1.0);
    v3 d = v3(0.00, 0.33, 0.67);
    return palette(t, a, b, c, d);
}

v3 heatMap2(f32 t)
{
    v3 a = v3(0.5, 0.5, 0.5);
    v3 b = v3(0.5, 0.5, 0.5);
    v3 c = v3(1.0, 1.0, 1.0);
    v3 d = v3(0.00, 0.10, 0.20);
    return palette(t, a, b, c, d);
}

v3 heatMap(f32 t)
{
    v3 a = v3(0.5, 0.5, 0.5);
    v3 b = v3(0.5, 0.5, 0.5);
    v3 c = v3(1.0, 0.7, 0.4);
    v3 d = v3(0.00, 0.15, 0.20);
    return palette(t, a, b, c, d);
}

v3 papayaMap(f32 t)
{
    v3 a = v3(0.8, 0.5, 0.4);
    v3 b = v3(0.2, 0.4, 0.2);
    v3 c = v3(2.0, 1.0, 1.0);
    v3 d = v3(0.00, 0.25, 0.2);
    return palette(t, a, b, c, d);
}

f32 dCircle(v2 p, f32 r)
{
    return length(p) - r;
}

f32 hash21(v2 p) {
  p = fract(p * v2(233.34, 851.74));
  p += dot(p, p + 23.45);
  return fract(p.x * p.y);
}

float opSmoothSub( float d1, float d2, float k ) {
    float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
    return mix( d2, -d1, h ) + k*h*(1.0-h);
}

f32 map(v2 p, f32 time, v2 mo)
{
    f32 d1 = dCircle(p, 0.1*sin(p.x*time)*0.9*sin(p.y*time)*0.3);
    return d1;
}

void main()
{
    // v2 uv = gl_FragCoord.xy / viewport_size;
    v2 p = (gl_FragCoord.xy - viewport_size* 0.5) / viewport_size.y;
    v2 mo = (mouse.xy-viewport_size*0.5)/viewport_size.y;
    mo.y = -mo.y;
    // f32 mask = 1.0-(texture(sam, uv*v2(1.0, 0.64308)+v2(0.0, 0.3569)).a);
    f32 d = map(p, time, mo);
    f32 r = 0.4;
    frag = v4(backColor, 1.0) * (smoothstep(r-0.01, r, d));
}
