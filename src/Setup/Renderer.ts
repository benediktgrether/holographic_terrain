import * as THREE from "three";
import ThreeApp from "./ThreeApp";

//Bokeh -> When it needed export in seperated file
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

// @ts-ignore
import  BokehPass  from "./Passes/BokehPass.js";


export default class Renderer {

    threeApp: ThreeApp;
    canvas: HTMLCanvasElement | undefined;
    sizes: import("./Utils/Sizes").default;
    camera: import("./Camera").default;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    effectComposer: EffectComposer;
    renderTarget: THREE.WebGLMultipleRenderTargets;
    debug: import("./Utils/Debug").default;
    bokehPass: BokehPass;
    world: any;

    constructor() {
        this.threeApp = new ThreeApp();
        this.canvas = this.threeApp.canvas;
        this.sizes = this.threeApp.sizes;
        this.scene = this.threeApp.scene;
        this.camera = this.threeApp.camera;
        this.debug = this.threeApp.debug;
        this.world = this.threeApp.world;

        this.setRenderer();
        this.setPostProcessing();

        if (this.debug.active) {
            this.setDebug();
        }
    }

    setRenderer(): void {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setClearColor(0x333333, 1);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    /**
     * Setting Post Processing for Bokeh.
     */
    setPostProcessing(): void {

        // Effect composer
        this.renderTarget =  new THREE.WebGLMultipleRenderTargets(this.sizes.width, this.sizes.height, 1, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            encoding: THREE.sRGBEncoding
        });

        this.effectComposer = new EffectComposer(this.renderer);
        this.effectComposer.setSize(this.sizes.width, this.sizes.height);
        this.effectComposer.setPixelRatio(this.sizes.pixelRatio);

        // Render Pass
        const renderPass: RenderPass = new RenderPass(this.scene, this.camera.instance);
        this.effectComposer.addPass(renderPass);

        // Bokeh Pass
        this.bokehPass = new BokehPass(this.scene, this.camera.instance, {
            focus: 1.0,
            aperture: 0.025,
            maxblur: 0.01,

            width: this.sizes.width * this.sizes.pixelRatio,
            height: this.sizes.height * this.sizes.pixelRatio
        });

        //this.bokehPass.enabled = false;
        // this.bokehPass.materialDepth = this.threeApp.world.terrain.depthMaterial;
        this.effectComposer.addPass(this.bokehPass);
    }

    resize(): void {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);

        // Update effect Composer
        this.effectComposer.setSize(this.sizes.width, this.sizes.height);
        this.effectComposer.setPixelRatio(this.sizes.pixelRatio);

        //Update Bokehpass
        this.bokehPass.renderTargetDepth.width = this.sizes.width * this.sizes.pixelRatio;
        this.bokehPass.renderTargetDepth.height = this.sizes.height * this.sizes.pixelRatio;
    }

    update(): void {
        // this.renderer.render(this.scene, this.camera.instance);
        this.effectComposer.render();
    }

    setDebug(): void {
        const bokehPassGui: any = this.debug.gui.addFolder("bokehPass");

        // Add Togglebox enabled and disabled

        bokehPassGui.add(this.bokehPass.materialBokeh.uniforms.focus, "value")
            .min(0)
            .max(10)
            .step(0.01)
            .name("focus");

        bokehPassGui.add(this.bokehPass.materialBokeh.uniforms.aperture, "value")
            .min(0.0002)
            .max(0.1)
            .step(0.0001)
            .name("aperture");

        bokehPassGui.add(this.bokehPass.materialBokeh.uniforms.maxblur, "value")
            .min(0)
            .max(0.02)
            .step(0.0001)
            .name("maxblur");
    }
}