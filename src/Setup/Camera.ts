import * as THREE from "three";
import ThreeApp from "./ThreeApp";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
    threeApp: ThreeApp;

    scene: THREE.Scene;
    canvas: HTMLCanvasElement | undefined;
    instance: any;
    controls: OrbitControls;
    sizes: import("./Utils/Sizes").default;


    constructor() {
        this.threeApp = new ThreeApp();
        this.sizes = this.threeApp.sizes;
        this.scene = this.threeApp.scene;
        this.canvas = this.threeApp.canvas;

        this.setInstance();
        this.setOrbitControls();
    }

    setInstance(): void {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100);

        this.instance.position.set(1, 1, 0);

        this.scene.add(this.instance);
    }

    setOrbitControls(): void {
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
    }

    resize(): void {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update(): void {
        this.controls.update();
    }
}