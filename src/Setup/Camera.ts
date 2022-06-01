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
    cameraCoordinates: { position: { x: number; y: number; z: number; }; rotation: { x: number; y: number; z: number; }; focus: number; }[];


    constructor() {
        this.threeApp = new ThreeApp();
        this.sizes = this.threeApp.sizes;
        this.scene = this.threeApp.scene;
        this.canvas = this.threeApp.canvas;

        // Coordinates
        this.cameraCoordinates = [
            {
                position: {
                    x: 0,
                    y: 2.243895100179859,
                    z: 0
                },
                rotation: {
                    x: -1.5707953264174506,
                    y: 2.7951244627709526,
                    z: 0
                },
                focus: 2.26
            },
            {
                position: {
                    x: 1.8491494533673176,
                    y: 0.6671950558077681,
                    z: -1.2985638129153
                },
                rotation: {
                    x: -0.2985425319204561,
                    y: 1.1895260648968295,
                    z: 0
                },
                focus: 0.56
            },
            {
                position: {
                    x: 1.1490514787966348,
                    y: 0.9421703020881406,
                    z: 1.673788091687199
                },
                rotation: {
                    x: -0.4344909243363589,
                    y: 0.6016063409602449,
                    z: 0
                },
                focus: 1.34
            },
            {
                position: {
                    x: 1.3803252782053264,
                    y: 0.2314712192025106,
                    z: -0.04347204374079028
                },
                rotation: {
                    x: -0.15674906863749621,
                    y: 1.2704523223525868,
                    z: 0
                },
                focus: 0.56
            }
        ];

        this.setInstance();
        this.setOrbitControls();
        this.changeView(0);
    }

    setInstance(): void {
        this.instance = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100);

        this.instance.rotation.reorder("YXZ");

        this.instance.position.x = 1;
        this.instance.position.y = 1;
        this.instance.position.z = 0;

        this.scene.add(this.instance);

        this.instance.position.copy(this.cameraCoordinates[2].position);
        this.instance.rotation.set(this.cameraCoordinates[2].rotation);

        // @ts-ignore
        window.camera = this.instance;
    }

    setOrbitControls(): void {
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
    }

    changeView(_index: number): void {
        this.instance.position.copy(this.cameraCoordinates[_index].position);
        this.instance.rotation.set(this.cameraCoordinates[_index].rotation);
    }

    resize(): void {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update(): void {
        this.controls.update();
    }
}