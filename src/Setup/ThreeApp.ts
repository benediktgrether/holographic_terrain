import * as THREE from "three";

import Debug from "./Utils/Debug";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";
import Resources from "./Utils/Resources";

// @ts-ignore
// import BokehPass from "./Passes/BokehPass";

// tslint:disable-next-line: no-any
let instance: any = null;

export default class ThreeApp {
    canvas: HTMLCanvasElement | undefined;
    sizes: Sizes;
    time: Time;
    scene: THREE.Scene;
    camera: Camera;
    renderer: Renderer;
    world: World;
    resources: Resources;
    debug: Debug;
    // bokehPass: BokehPass;


    constructor(_canvas?: HTMLCanvasElement) {

        // Singleton
        if (instance) {
            return instance;
        }

        instance = this;

        this.canvas = _canvas;

        this.debug = new Debug();

        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();


        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();


        // this.bokehPass = BokehPass;
        // console.log(this.bokehPass);

        // Size resize event
        this.sizes.on("resize", () => {
            this.resize();
        });

        // Time updateAnimationFrame event
        this.time.on("updateAnimationFrame", () => {
            this.update();
        });
    }

    resize(): void {
        this.camera.resize();
        this.renderer.resize();
    }

    update(): void {
        this.camera.update();
        this.world.update();
        this.renderer.update();
    }
}