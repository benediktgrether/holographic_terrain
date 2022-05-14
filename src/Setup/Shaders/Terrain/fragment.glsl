uniform sampler2D uTexture;

varying float vElevation;

void main() {

    vec4 textureColor = texture2D(uTexture, vec2(0.0, vElevation * 10.0));

    gl_FragColor = textureColor;

    //float elevation = vElevation + 0.5;

    // float alpha = mod(vElevation * 10.0, 1.0);
    // alpha = step(0.95, alpha);

    // gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);

    //gl_FragColor = vec4(elevation, elevation, elevation, 1.0);
}