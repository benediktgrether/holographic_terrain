varying float vElevation;

void main() {
    float elevation = vElevation + 0.5;
    gl_FragColor = vec4(elevation, elevation, elevation, 1.0);
}