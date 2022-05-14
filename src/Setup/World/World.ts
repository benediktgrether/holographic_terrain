import ThreeApp from "../ThreeApp";
import Terrain from "./Terrain/Terrain";

export default class World {
    threeApp: ThreeApp;
    scene: THREE.Scene;
    terrain: Terrain;
    resources: import("../Utils/Resources").default;

    constructor() {
        this.threeApp = new ThreeApp();
        this.scene = this.threeApp.scene;

        // Loaded Basic Cube
        this.terrain = new Terrain();

    }

    update(): void {
        this.terrain.update();
    }
}