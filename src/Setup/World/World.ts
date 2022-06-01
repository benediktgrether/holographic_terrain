import ThreeApp from "../ThreeApp";
import Terrain from "./Terrain/Terrain";
import Vignette from "./Vignette";

export default class World {
    threeApp: ThreeApp;
    scene: THREE.Scene;
    terrain: Terrain;
    resources: import("../Utils/Resources").default;
    vignette: Vignette;

    constructor() {
        this.threeApp = new ThreeApp();
        this.scene = this.threeApp.scene;

        // Loaded Basic Cube
        this.terrain = new Terrain();
        //this.vignette = new Vignette();

    }

    update(): void {
       this.terrain.update();
    }
}