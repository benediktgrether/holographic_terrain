import * as THREE from "three";
import ThreeApp from "./ThreeApp";

export default class Renderer {

    threeApp: ThreeApp;
    canvas: HTMLCanvasElement | undefined;
    sizes: import("./Utils/Sizes").default;
    scene: any;
    camera: import("./Camera").default;
    instance: THREE.WebGLRenderer;

    constructor() {
        this.threeApp = new ThreeApp();
        this.canvas = this.threeApp.canvas;
        this.sizes = this.threeApp.sizes;
        this.scene = this.threeApp.scene;
        this.camera = this.threeApp.camera;

        this.setInstance();
    }

    setInstance(): void {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });

        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(this.sizes.pixelRatio);
    }

    resize(): void {
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(this.sizes.pixelRatio);
    }

    update(): void {
        this.instance.render(this.scene, this.camera.instancen);
    }
}