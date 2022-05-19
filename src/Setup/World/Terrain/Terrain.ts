import * as THREE from "three";
import ThreeApp from "../../ThreeApp";

// @ts-ignore
import terrainVertexShader from "../../Shaders/Terrain/vertex.glsl";
// @ts-ignore
import terrainFragmentShader from "../../Shaders/Terrain/fragment.glsl";
// @ts-ignore
import terrainDepthVertextShader from "../../Shaders/TerrainDepth/vertex.glsl";
// @ts-ignore
import terrainDepthFragmentShader from "../../Shaders/TerrainDepth/fragment.glsl";
import Renderer from "../../Renderer";


export default class Terrain {
    threeApp: ThreeApp;
    geometry: THREE.PlaneGeometry;
    material: THREE.ShaderMaterial;
    scene: THREE.Scene;
    mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
    texture: any;
    debug: import("../../Utils/Debug").default;
    time: import("../../Utils/Time").default;
    // depthMaterial: THREE.ShaderMaterial;
    depthMaterial: any;
    renderer: Renderer;

    constructor() {
        this.threeApp = new ThreeApp();
        this.scene = this.threeApp.scene;
        this.debug = this.threeApp.debug;
        this.time = this.threeApp.time;
        this.renderer = this.threeApp.renderer;

        // Set Texture
        this.initTerrainTexture();

        // Set Geometry and Material and Setup
        this.setGeometry();
        this.setMaterial();
        //this.setTexture();
        this.setRotation();
        this.setDepthMaterial();
        this.setMesh();

        if (this.debug.active) {
            this.setDebug();
        }
    }

    initTerrainTexture(): void {
        this.texture = {};
        this.texture.linesCount = 5;
        this.texture.bigLinewidth = 0.08;
        this.texture.smallLinewidth = 0.01;
        this.texture.alpha = 0.5;
        this.texture.width = 32;
        this.texture.height = 128;
        this.texture.canvas = document.createElement("canvas");
        this.texture.canvas.width = this.texture.width;
        this.texture.canvas.height = this.texture.height;
        this.texture.canvas.style.position = "fixed";
        this.texture.canvas.style.top = 0;
        this.texture.canvas.style.left = 0;
        this.texture.canvas.style.zIndex = 1;
        document.body.append(this.texture.canvas);
        this.texture.context = this.texture.canvas.getContext("2d");

        this.texture.instance = new THREE.CanvasTexture(this.texture.canvas);
        this.texture.uElevation = 2;

        // Repeat the Texture for Terrain Outlines
        this.texture.instance.wrapS = THREE.RepeatWrapping;
        this.texture.instance.wrapT = THREE.RepeatWrapping;

        this.texture.instance.magFilter = THREE.NearestFilter;

        this.texture.uniforms = {
            uTexture: { value: this.texture.instance },
            uElevation: { value: 2 },
            uTextureFrequency: { value: 10 },
            uTime: { value: 0 },
            uHslTimeFrequency: {value: 0.1},
            uHslHue: { value: 1.0 },
            uHslHueOffset: { value: 0.0 },
            uHslHueFrequency: { value: 10.0},
            uHslLightness: { value: 0.75},
            uHslLightnessVariation: { value: 0.25 },
            uHslLightnessFrequency: { value: 20.0 }
        };

        this.setTerrainTextureUpdate();
    }

    setTerrainTextureUpdate(): void {
        this.texture.update = () => {
            this.texture.context.clearRect(0, 0, this.texture.width, this.texture.height);

            const actualBigLineWidth: number = Math.round(this.texture.height * this.texture.bigLinewidth);
            const smallLinesHeight: number = Math.round((this.texture.height - actualBigLineWidth) / this.texture.linesCount);
            const actualSmallLineWidth: number = Math.round(this.texture.height * this.texture.smallLinewidth);

            //Big Lines
            this.setContext(
                "#ffffff",
                1,
                0,
                actualBigLineWidth
                );

            // Small Lines
            for (let i: number = 0; i < (this.texture.linesCount - 1); i++) {
                this.setContext(
                    "#00ffff",
                    this.texture.alpha,
                    smallLinesHeight * (i + 1),
                    actualSmallLineWidth

                );
            }

            this.texture.instance.needsUpdate = true;

        };
        this.texture.update();
    }

    /**
    * Drawing the lines on the canvas for the Terrain Outline
    */
    setContext(_fillStyle: string, _alpha: number, _heightMultiplyFirst: number, _heightMultiplySecond: number): void {
        this.texture.context.fillStyle = _fillStyle;
        this.texture.context.globalAlpha = _alpha;
        this.texture.context.fillRect(
            0,
            _heightMultiplyFirst,
            this.texture.width,
            _heightMultiplySecond
            );
    }

    setGeometry(): void {
        this.geometry = new THREE.PlaneGeometry(1, 1, 1000, 1000);
    }

    setMaterial(): void {

        /**
         * In combination with the shader in /Terrain/fragment.glsl with the alpha
         * you had the Terrain outlines.
         * You need from the Material following settings
         * transparent on true,
         * blending mode Additive Blending and
         * and side double side because of the plane geometry
         */
        this.material = new THREE.ShaderMaterial({
            transparent: true,
            // blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
            vertexShader: terrainVertexShader,
            fragmentShader: terrainFragmentShader,

            uniforms: this.texture.uniforms
        });
    }

    setRotation(): void {
        this.geometry.rotateX(- Math.PI * 0.5);
    }

    setDepthMaterial(): void {

        // tslint:disable-next-line: typedef
        const uniforms = THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.displacementmap
        ]);

        for (const uniformKey in this.texture.uniforms) {
            uniforms[uniformKey] = this.texture.uniforms[uniformKey];
        }

        this.depthMaterial = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: terrainDepthVertextShader,
            fragmentShader: terrainDepthFragmentShader
        });

        this.depthMaterial.depthPacking = THREE.RGBADepthPacking;
        this.depthMaterial.blending = THREE.NoBlending;

        // Set Depth Material to bokeh Pass
        // this.renderer.bokehPass.materialDepth = this.depthMaterial;

    }

    setMesh(): void {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.scale.set(10, 10, 10);
        this.mesh.userData.depthMaterial = this.depthMaterial;
        this.scene.add(this.mesh);
    }

    update(): void {

        // Update terrain
        this.texture.uniforms.uTime.value = this.time.elapsed * 0.001;
    }

    setDebug(): void {

        const texturesGui: any = this.debug.gui.addFolder("textures");
        const hslGui: any = this.debug.gui.addFolder("hls");
        texturesGui.add(this.texture, "linesCount")
            .min(1)
            .max(10)
            .step(1)
            .name("Lines Count")
            .onChange(() => {
                this.texture.update();
            });

        texturesGui.add(this.texture, "bigLinewidth")
            .min(0)
            .max(0.5)
            .step(0.001)
            .name("Big Line Width")
            .onChange(() => {
                this.texture.update();
            });

        texturesGui.add(this.texture, "smallLinewidth")
            .min(0)
            .max(0.1)
            .step(0.001)
            .name("Small Line Width")
            .onChange(() => {
                this.texture.update();
            });

        texturesGui.add(this.texture, "alpha")
            .min(0)
            .max(1)
            .step(0.001)
            .name("Small Line Alpha")
            .onChange(() => {
                this.texture.update();
            });

        texturesGui.add(this.texture.uniforms.uElevation, "value")
            .min(0)
            .max(5)
            .step(1)
            .name("uElevation")
            .onChange(() => {
                console.log(this.texture.uniforms.uElevation);
            });

        texturesGui.add(this.texture.uniforms.uTextureFrequency, "value")
            .min(0.1)
            .max(50)
            .step(0.01)
            .name("uTextureFrequency");

        hslGui.add(this.texture.uniforms.uHslTimeFrequency, "value")
            .min(0)
            .max(1)
            .step(0.001)
            .name("uHslTimeFrequency");

        hslGui.add(this.texture.uniforms.uHslHue, "value")
            .min(0)
            .max(1)
            .step(0.001)
            .name("uHslHue");

        hslGui.add(this.texture.uniforms.uHslHueOffset, "value")
            .min(0)
            .max(1)
            .step(0.001)
            .name("uHslHueOffset");

        hslGui.add(this.texture.uniforms.uHslHueFrequency, "value")
            .min(0)
            .max(50)
            .step(0.01)
            .name("uHslHueFrequency");

        hslGui.add(this.texture.uniforms.uHslLightness, "value")
            .min(0)
            .max(1)
            .step(0.001)
            .name("uHslLightness");

        hslGui.add(this.texture.uniforms.uHslLightnessVariation, "value")
            .min(0)
            .max(1)
            .step(0.001)
            .name("uHslLightnessVariation");

        hslGui.add(this.texture.uniforms.uHslLightnessFrequency, "value")
            .min(0)
            .max(50)
            .step(0.01)
            .name("uHslLightnessFrequency");
    }
}