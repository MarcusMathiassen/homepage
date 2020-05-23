#version 300 es

precision mediump float;

#define v2 vec2
#define v3 vec3
#define v4 vec4
#define s32 int
#define u32 uint
#define f32 float
#define f64 double

#define EPSILON 0.001
#define PI 3.14159256

#define FLT_MAX 3.402823466e+38
#define FLT_MIN 1.175494351e-38

#define saturate(x) clamp(x, 0.0, 1.0)

out v4 frag;

uniform v2 uRes;
uniform v2 uMouse;
uniform v3 uBackColor;
uniform f32 uTime;
uniform f32 uPixelSize;
uniform v3 uCamPos;
uniform mat3 uCamMatrix;
uniform f32 uZoom;
uniform sampler2D uTex;
uniform s32 uFrameIndex;


v3 rotateX(in v3 p, f32 a) {
    f32 c = cos(a); f32 s = sin(a);
    return v3(p.x, c * p.y - s * p.z, s * p.y + c * p.z);
}

v3 rotateY(v3 p, f32 a) {
    f32 c = cos(a); f32 s = sin(a);
    return v3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}

v3 rotateZ(v3 p, f32 a) {
    f32 c = cos(a); f32 s = sin(a);
    return v3(c * p.x - s * p.y, s * p.x + c * p.y, p.z);
}

f32 dBox(v3 p, v3 b) {
    v3 d = abs(p) - b;
    return length(max(d,0.0)) + min(max(d.x,max(d.y,d.z)),0.0);
}
f32 dSphere(v3 p, f32 s) { return length(p) - s; }
f32 dPlane(v3 p, v3 n, f32 h) { return dot(p,n) - (h); }

#define DIFF 0
#define SPEC 1
#define REFR 2
#define CHECK 3

struct Material {
    v3 color; 
    s32 kind;
    f32 emission;

    f32 roughness;
    f32 metallic;
    f32 ao;
};

v3 opSymX(v3 p) {
    p.x = abs(p.x);
    return p;
}
v3 opSymXZ(v3 p) {
    p.xz = abs(p.xz);
    return p;
}
v3 opRep(v3 p, v3 c) { return mod(p,c)-c * 0.5; }
f32 smin(f32 a, f32 b, f32 k) {
    f32 h = saturate(0.5+0.5*(b-a)/k);
    return mix(b, a, h) - k*h*(1.0-h);
}
f32 opRound(f32 d, f32 rad) { return d - rad; }
f32 opSub( f32 d1, f32 d2 ) { return max(-d1,d2); }


v2 pU(v2 d1, v2 d2) { return (d1.x < d2.x) ? d1 : d2; }

const Material materials[9] = Material[9](
    Material(v3(.1), DIFF, 0.0, 0.5, 0.9, 0.0), // 0 matte
    Material(v3(1, .3, .4), DIFF, 10.0, 0.5, 0.5, 0.5), // 1
    Material(v3(1, .8, .7), DIFF, 10.0, 0.0, 0.9, 0.5), // 2 matte
    Material(v3(1), SPEC, 0.0, 0.5, 0.5, 0.5), // 3
    Material(v3(1), REFR, 0.0, 0.5, 0.5, 0.5), // 4
    Material(v3(1, .1, .1), DIFF, 0.0, 0.5, 0.5, 0.5), // 5
    Material(v3(.3, .4, 3), SPEC, 0.0, 0.1, 0.1, 0.9), // 6
    Material(v3(.1, .9, .3), DIFF, 0.0, 0.9, 0.5, 0.5), // 7
    Material(v3(0.1,.9,.1), REFR, 0.0, 0.5, 0.5, 0.5) // 8
);

v2 map(v3 p)
{
    v2 res = v2(FLT_MAX, -1.0);

    #define OBJECT_COUNT 14-1
    v2 objects[OBJECT_COUNT] = v2[OBJECT_COUNT](
        v2(dBox(rotateY(p - v3(3,0,0), 0.0), v3(.1, 5, 3)*0.4), 8.0),
        v2(opSub(dBox(p - v3(0,5,0), v3(1, 1, 1)*2.0), dBox(rotateZ(p - v3(0,5,0), PI*.5), v3(.1, 3.1, 3))), 2.0),
        v2(dPlane(p, v3(0,0,-1), -100.0), 0.0),
        v2(dPlane(p, v3(0,0,1), -100.0), 0.0),
        v2(dPlane(p, v3(0,1,0), -1.0), 0.0),
        v2(dPlane(p, v3(1,0,0), -100.0), 0.0),
        v2(dPlane(p, v3(0,-1,0), -100.0), 0.0),
        v2(dPlane(p, v3(-1,0,0), -100.0), 0.0),
        v2(dSphere(p-v3(0,3,0), 1.0), 3.0),
        v2(dSphere(p-v3(0,0,5), 1.0), 4.0),
        // v2(dSphere(opRep(p-v3(0,-1.0,0), v3(1,0,1)), 0.1), 1.0),
        v2(dSphere(p - v3(0,1,-4), 2.0), 5.0),
        v2(dBox(p-v3(-50,30,-0.9), v3(.1,10,50)), 2.0),
        v2(opSub(
            dSphere(p - v3(.3,1,0), 1.0), 
            dSphere(p - v3(0,0,0), 1.0)), 
        6.0)
    );

    for (s32 i = 0; i < OBJECT_COUNT; ++i) {
        res = pU(res, objects[i]);
    }

    return res;
}

v3 calcNormal(v3 p)
{
    v2 eps = v2(EPSILON, 0.0);
    return normalize(v3(
        map(p + eps.xyy).x - map(p - eps.xyy).x,
        map(p + eps.yxy).x - map(p - eps.yxy).x,
        map(p + eps.yyx).x - map(p - eps.yyx).x));
}

struct Hit
{
    f32 t;
    s32 material_id;
    s32 steps;
};

Hit castRay(v3 ro, v3 rd, s32 steps, f32 t_min, f32 t_max)
{
    f32 t = t_min;
    for (s32 i = 0; i < steps && t < t_max; ++i)
    {
        v2 r = map(ro + rd * t);
        if (r.x < t_min*t) return Hit(t, s32(r.y), i);
        t += r.x;
    }
    return Hit(FLT_MAX, 0, 0);
}

v2 SS2NDC(v2 uv, v2 res)
{
    return (uv - res * 0.5) / res.y;
}

v3 SS2NDC(v3 uv, v3 res)
{
    return (uv - res * 0.5) / res.y;
}

mat3 setCamera( in vec3 ro, in vec3 ta, float cr )
{
	vec3 cw = normalize(ta-ro);
	vec3 cp = vec3(sin(cr), cos(cr),0.0);
	vec3 cu = normalize( cross(cw,cp) );
	vec3 cv =          ( cross(cu,cw) );
    return mat3( cu, cv, cw );
}

struct Light {
    v3 pos;
    v3 color;
    f32 intensity;
};

v3 Irradiance_SphericalHarmonics(v3 n)
{
    // Irradiance from "Ditch River" IBL
    // (http://www.hdrlabs.com/sibl/archive.html)
    return max(v3(0.754554516862612, 0.748542953903366, 0.790921515418539) + v3(0.3, 0.3, 0.3) * (n.y) + v3(0.35, 0.36, 0.35) * (n.z) + v3(-0.2, -0.24, -0.24) * (n.x),
        0.0);
}


v3 directLight(Light light, v3 eye, v3 P, v3 N)
{
    v3 lightDelta = light.pos - P;
    v3 L = normalize(lightDelta);
    f32 NdotL = saturate(dot(L, N));

    // Diffuse
    v3 lightContrib = v3(0);
    {
        f32 halfLambert = NdotL * 0.5 + 0.5; // half lambert
        f32 lightDistSqr = dot(lightDelta, lightDelta);
        lightContrib = light.intensity * v3(light.color) * halfLambert / lightDistSqr;
    }

    // Specular
    v3 V = normalize(eye - P);
    v3 specularContrib = v3(0);
    {
        v3 halfVector = normalize(L + V);
        f32 NdotH = saturate(dot(N, halfVector));
        f32 glossiness = 16.0;
        f32 specularIntensity = pow(NdotH, glossiness * glossiness);
        f32 specularIntensitySmooth = specularIntensity;
        v3 specColor = v3(light.color);

        specularContrib = specularIntensitySmooth * specColor;
    }

    // Rim
    v3 rimContrib = v3(0);
    {
        f32 threshold = 0.5;
        f32 NdotV = dot(N, V);
        f32 rimDot = (1.0 - NdotV) * pow(NdotL, threshold);
        f32 intensity = rimDot;
        rimContrib = intensity * v3(light.color);
    }

    return (lightContrib + specularContrib + rimContrib);
}

v3 ambientLight(v3 P, v3 N)
{
    v3 al = Irradiance_SphericalHarmonics(N) * v3(0.7, 0.76, 0.85);
    return al;
}

void main()
{
    v2 uv = SS2NDC(v2(gl_FragCoord.xy), v2(uRes));

    v3 ro = uCamPos;
    v3 rd = uCamMatrix * normalize(v3(uv, uZoom));

    v3 sdfArea = v3(1,1,1)*1000.0;

    f32 farClip = 1000.0;//(distance(ro, rd * sdfArea));
    s32 maxStepCount = 128;
    f32 nearClip = uPixelSize;

    v3 col = uBackColor;

    Hit hit = castRay(ro, rd, maxStepCount, nearClip, farClip);
    if (hit.t < farClip) {

        v3 P = ro + rd * hit.t;
        v3 N = calcNormal(P);

        Light light = Light(v3(10.0*cos(uTime),10.0,10.0*sin(uTime)), v3(1,.8,.6), 1.0);

        f32 sha = 1.0;
        f32 ao = 1.0;

        // Direct Illumination
        v3 directLightContrib = v3(0);
        {
            v3 eye = ro;
            directLightContrib += directLight(light, eye, P, N);
        }

        // Ambient Illumination
        v3 ambientLightContrib = v3(0);
        {
            ambientLightContrib = ambientLight(P, N);
        }

        {
            v3 albedo = materials[hit.material_id].color;
            col = albedo * (sha * directLightContrib + ao * ambientLightContrib);
        }
    }
    frag = v4(col, 1.0);
}
