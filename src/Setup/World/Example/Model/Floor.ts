import * as THREE from "three";
import ThreeApp from "../../../ThreeApp";

export default class Floor {
    threeApp: ThreeApp;
    scene: THREE.Scene;
    resources: import("../../../Utils/Resources").default;
    geometry: THREE.CircleGeometry;
    texture: any;
    material: THREE.MeshStandardMaterial;
    mesh: THREE.Mesh<THREE.CircleGeometry, THREE.MeshStandardMaterial>;

    constructor() {
        this.threeApp = new ThreeApp();
        this.scene = this.threeApp.scene;
        this.resources = this.threeApp.resources;

        this.setGeometry();
        this.setTextures();
        this.setMaterial();
        this.setMesh();
    }

    setGeometry(): void {
        this.geometry = new THREE.CircleGeometry(5, 64);
    }

    setTextures(): void {
        // tslint:disable-next-line: no-unused-expression
        this.texture = {};

        this.texture.color = this.resources.items.grassColorTexture;
        this.texture.color.encoding = THREE.sRGBEncoding;
        this.texture.color.repeat.set(1.5, 1.5);
        this.texture.color.wrapS = THREE.RepeatWrapping;
        this.texture.color.wrapT = THREE.RepeatWrapping;

        this.texture.normal = this.resources.items.grassNormalTexture;
        this.texture.normal.repeat.set(1.5, 1.5);
        this.texture.normal.wrapS = THREE.RepeatWrapping;
        this.texture.normal.wrapT = THREE.RepeatWrapping;
    }

    setMaterial(): void {
        this.material = new THREE.MeshStandardMaterial({
            map: this.texture.color,
            normalMap: this.texture.normal
        });
    }

    setMesh(): void {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.rotation.x = - Math.PI * 0.5;
        this.mesh.receiveShadow = true;
        this.scene.add(this.mesh);
    }
}