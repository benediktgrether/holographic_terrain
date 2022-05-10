import ThreeApp from "../ThreeApp";
import BasicCube from "./Example/Primitives/BasicCube";
import foxFloor from "./Example/Model/Floor";
import Environment from "./Example/Model/Environment";
import Fox from "./Example/Model/Fox";

export default class World {
    threeApp: ThreeApp;
    scene: THREE.Scene;
    basicCube: BasicCube;
    keyup: boolean;
    resources: import("../Utils/Resources").default;
    foxFloor: foxFloor;
    environment: Environment;
    fox: Fox;

    constructor() {
        this.threeApp = new ThreeApp();
        this.scene = this.threeApp.scene;
        // this.resources = this.threeApp.resources;

        // Loaded Basic Cube
        this.basicCube = new BasicCube();

        //#region basic setup
        //Physic
        //this.floor = new Floor();
        //this.basicCollideCube = new BasicCollideCube();

        //Wait for resources
        // this.resources.on("ready", () => {
        //     this.foxFloor = new foxFloor();
        //     this.fox = new Fox();
        //     this.environment = new Environment();
        // });
        //#endregion

    }

    update(): void {

        //#region basic setup
        //this.basicCollideCube.update();
        // if (this.fox) {
        //     this.fox.update();
        // }
        //#endregion

    }
}