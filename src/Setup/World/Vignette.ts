import * as THREE from "three";
import ThreeApp from "../ThreeApp";

export default class Vignette {
    threeApp: ThreeApp;
    material: THREE.MeshBasicMaterial;
    geometry: THREE.PlaneGeometry;
    mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
    scene: THREE.Scene;

    constructor() {
        this.threeApp = new ThreeApp;
        this.scene = this.threeApp.scene;

        this.setGeometry();
        this.setMaterial();
        this.setMesh();
    }

    setGeometry(): void {
        this.geometry = new THREE.PlaneGeometry(2, 2);
        console.log(this.geometry);
    }

    setMaterial(): void {
        this.material = new THREE.MeshBasicMaterial({ color: "red"});
        console.log(this.material);
    }

    setMesh(): void {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        console.log(this.mesh);
        this.scene.add(this.mesh);
    }
}