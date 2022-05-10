import * as THREE from "three";
import ThreeApp from "./ThreeApp";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
    threeApp: ThreeApp;

    scene: THREE.Scene;
    canvas: HTMLCanvasElement | undefined;
    instancen: any;
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
        this.instancen = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100);

        this.instancen.position.set(6, 4, 8);

        this.scene.add(this.instancen);
    }

    setOrbitControls(): void {
        this.controls = new OrbitControls(this.instancen, this.canvas);
        this.controls.enableDamping = true;
    }

    resize(): void {
        this.instancen.aspect = this.sizes.width / this.sizes.height;
        this.instancen.updateProjectionMatrix();
    }

    update(): void {
        this.controls.update();
    }
}