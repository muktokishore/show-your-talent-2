import * as THREE from "./three/build/three.module.js";
import {MapControls} from "./three/examples/jsm/controls/OrbitControls.js"
import {GLTFLoader} from "./three/examples/jsm/loaders/GLTFLoader.js";
import { VRButton } from './three/examples/jsm/webxr/VRButton.js';

const renderer = new THREE.WebGLRenderer({alpha: true });


// var width = document.getElementById("product3d").clientWidth;
// var height = document.getElementById("product3d").clientHeight;

// console.log(width, height)

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfffff,0);

// document.body.appendChild(renderer.domElement);
document.body.appendChild(renderer.domElement);
document.body.appendChild( VRButton.createButton( renderer ) );
renderer.xr.enabled = true;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const control = new MapControls(camera, renderer.domElement);

camera.position.set(0, 2, 5);

control.update();


const loader = new GLTFLoader();

loader.load( '../assets/models/museum25.glb', function ( gltf ) {
    var model = gltf.scene;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const pointLight1 = new THREE.PointLight( 0xffffff, 1, 100 );
pointLight1.position.set( 0, 4, 0);
scene.add( pointLight1 );

const spotLight = new THREE.SpotLight( 0xffffff,1,0,0.6 );
spotLight.position.set( -12, 3.8, -11 );
scene.add(spotLight)
const spotLightHelper = new THREE.SpotLightHelper( spotLight );
scene.add( spotLightHelper );

const geometry = new THREE.Object3D();
geometry.position.set(-14.88, 2, -11)
scene.add( geometry );
spotLight.target = geometry;

// const pointLight2 = new THREE.PointLight( 0xffffff, 1, 100 );
// pointLight2.position.set( 0, 0, -3 );
// scene.add( pointLight2 );
// const pointLight3 = new THREE.PointLight( 0xffffff, 1, 100 );
// pointLight3.position.set( 0, 3, 0 );
// scene.add( pointLight3 );


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();