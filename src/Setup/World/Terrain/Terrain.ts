import * as THREE from "three";
import ThreeApp from "../../ThreeApp";

// @ts-ignore
import terrainVertexShader from "../../Shaders/Terrain/vertex.glsl";
// @ts-ignore
import terrainFragmentxShader from "../../Shaders/Terrain/fragment.glsl";

export default class Terrain {
    threeApp: ThreeApp;
    geometry: THREE.PlaneGeometry;
    material: THREE.ShaderMaterial;
    scene: THREE.Scene;
    mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
    constructor() {
        this.threeApp = new ThreeApp();
        this.scene = this.threeApp.scene;

        this.setGeometry();
        this.setMaterial();
        //this.setTexture();
        this.setRotation();
        this.setMesh();
    }

    setGeometry(): void {
        this.geometry = new THREE.PlaneGeometry(1, 1, 1000, 1000);
    }

    setMaterial(): void {
        // this.material = new THREE.MeshBasicMaterial({
        //     color: 0xffffff,
        //     wireframe: true
        // });
        this.material = new THREE.ShaderMaterial({
            vertexShader: terrainVertexShader,
            fragmentShader: terrainFragmentxShader
        });
    }

    setRotation(): void {
        this.geometry.rotateX(- Math.PI * 0.5);
    }

    setMesh(): void {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.scale.set(10, 10, 10);
        this.scene.add(this.mesh);
    }
}