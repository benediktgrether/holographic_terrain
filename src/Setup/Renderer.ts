import * as THREE from "three";
import ThreeApp from "./ThreeApp";

//Bokeh -> When it needed export in seperated file
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { BokehPass } from "three/examples/jsm/postprocessing/BokehPass";

export default class Renderer {

    threeApp: ThreeApp;
    canvas: HTMLCanvasElement | undefined;
    sizes: import("./Utils/Sizes").default;
    camera: import("./Camera").default;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    effectComposer: EffectComposer;
    renderTarget: THREE.WebGLMultipleRenderTargets;

    constructor() {
        this.threeApp = new ThreeApp();
        this.canvas = this.threeApp.canvas;
        this.sizes = this.threeApp.sizes;
        this.scene = this.threeApp.scene;
        this.camera = this.threeApp.camera;

        this.setRenderer();
        this.setPostProcessing();
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
        const bokehPass: BokehPass = new BokehPass(this.scene, this.camera.instance, {
            focus: 1.0,
            aperture: 0.025,
            maxblur: 0.01,

            width: this.sizes.width,
            height: this.sizes.height
        });

        this.effectComposer.addPass(bokehPass);
    }

    resize(): void {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    update(): void {
        // this.renderer.render(this.scene, this.camera.instance);
        this.effectComposer.render();
    }
}