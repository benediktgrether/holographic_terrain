import * as THREE from "three";
import ThreeApp from "../../../ThreeApp";
import Time from "../../../Utils/Time";

export default class BasicCube {
    threeApp: ThreeApp;
    scene: THREE.Scene;
    time: Time;
    geometry: THREE.BoxGeometry;
    texture: {};
    material: THREE.MeshBasicMaterial;
    mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;

    constructor() {
        this.threeApp = new ThreeApp();
        this.scene = this.threeApp.scene;
        this.time = this.threeApp.time;

        this.setGeometry();
        this.setTexture();
        this.setMaterial();
        this.setMesh();

    }
    setGeometry(): void {
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
    }

    setTexture(): void {
        this.texture = {};
    }

    setMaterial(): void {
        this.material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: false
        });
    }

    setMesh(): void {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.y = 1 / 2;
        this.scene.add(this.mesh);
    }
}