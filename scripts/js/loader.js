import * as THREE from "./three/build/three.module.js";
import {GLTFLoader} from "./three/examples/jsm/loaders/GLTFLoader.js";

// https://cdn.glitch.me/07663bcf-a284-4c24-87db-d7d40a3546ee/museum1.glb?v=1662412951344
// let data = await fetch("../assets/models/museum5.gltf");
// let modelJson = await data.json();
// let loader = new GLTFLoader();
// loader.parse(
//     JSON.stringify(modelJson),
//     "",
//     (gltf)=>{
//         var scene = document.querySelector('a-scene').object3D;
//         var model = gltf.scene;
//         model.position.set(0, 0, -22);
//         scene.add( gltf.scene );
//     },
//     (err)=>{
//         console.log(err)
//     }
// )
// getData();

// async function getData(){
//     let data = await fetch("../assets/models/museum4.gltf");
//     let modelJson = await data.json();
//     let loader = new GLTFLoader();
//     loader.parse(
//         JSON.stringify(modelJson),
//         "",
//         (gltf)=>{
//             var scene = document.querySelector('a-scene').object3D;
//             var model = gltf.scene;
//             model.position.set(0, 0, -22);
//             scene.add( gltf.scene );
//         },
//         (err)=>{
//             console.log(err)
//         }
//     )
// }







let loader = new GLTFLoader()
loader.load(
    "../show-your-talent-2/assets/models/museum3.glb",
    (gltf)=>{
        var scene = document.querySelector('a-scene').object3D;
        var model = gltf.scene;
        model.position.set(0, 0, -22);
        scene.add( gltf.scene );
    },
    (model)=>{
        let fraction = model.loaded/model.total*100;
        let percentage = Math.trunc(fraction);
        document.getElementById("status").innerHTML = "Assets are loading!<br>"+percentage+"% loaded &#128571;";
        document.getElementById("progress").style.width = percentage+"%";
        if(percentage===100||percentage>100){
            document.getElementById("status").innerHTML = "Assets are loaded!&#129409; Your browser is rendering<br>Please wait a FEW SECONDS!";
            document.getElementById("progress").style.width = "100%";
            setTimeout(()=>{
                document.getElementById("preloader").style.display="none";
            },5000)
        }
    }
)
