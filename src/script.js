import './style.css'
import * as dat from 'lil-gui'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import CameraControls from 'camera-controls';
import { CompressedPixelFormat, Vector3 } from 'three'


CameraControls.install( { THREE: THREE } );


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x007ca9);

const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
				hemiLight.color.setHSL( 0.6, 1, 0.6 );
				hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 0, 50, 0 );
				scene.add( hemiLight );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
light.intensity = 2
scene.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffff00, 2.5 );
scene.add( directionalLight );
const plight = new THREE.PointLight( 0xffff00, 1, 1000 );
plight.position.set( -200, 0, 0 );
scene.add( plight );
const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
				dirLight.color.setHSL( 0.1, 1, 0.95 );
				dirLight.position.set( - 1, 1.75, 1 );
				dirLight.position.multiplyScalar( 30 );
				scene.add( dirLight );


// const rectLightHelper = new RectAreaLightHelper( rectLight );
// rectLight.add( rectLightHelper );




/////////////////////////////////    PLANE   //////////////////////////////////////
    const geometry = new THREE.PlaneGeometry(3200, 3200, 200, 200);
    const material = new THREE.MeshBasicMaterial({
    color: 0x333334,
    });

    const plane = new THREE.Mesh(geometry, material);

    // Here we position our plane flat in front of the camera
    plane.rotation.x = -Math.PI * 0.5;
    plane.position.y = -8;
    plane.position.z = -3;

    scene.add(plane);
/////////////////////////////////    PLANE   //////////////////////////////////////

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader()

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let mixer, mixer3, mixer4, mixer7, mixer8;
// let mixers = [];
    // let actions = [];
    // let action_1, action_2, action_3, action_4, action_5, action_6, action_7, action_8;

    // let resourceData = ['1t.gltf', '2.gltf', '3.gltf', '4b.gltf', '5.gltf', '6.gltf', '7.gltf', '8.gltf'];   
const CAR_01 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_03.png') })
const CAR_02 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_02.png') })
const CAR_03 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_03.png') })
const CAR_04 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_08.png') })
const CAR_05 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_05.png') })
const CAR_06 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_04.png') })
const CAR_07 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_06.png') })
const CAR_08 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_07.png') })
const CAR_09 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_09.png') })
const CAR_10 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_11.png') })
const CAR_11 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_10.png') })
const CAR_12 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/Car_12.png') })


    //     for (let i = 0; i < resourceData.length; i++) {
    //         let oResource = resourceData[i];

    //         gltfLoader.load( oResource, function (gltf) {
    //         const model = gltf.scene
function CAR(model) {
    model.children.map(child => {
        if(child.name.indexOf('CAR_01') >= 0){
        child.material = CAR_01;
        } 
        if(child.name.indexOf('CAR_02') >= 0){
        child.material = CAR_02;
        } 
        if(child.name.indexOf('Car_03') >= 0){
        child.material = CAR_03;
        }
        if(child.name.indexOf('Car_04') >= 0){
        child.material = CAR_04;
        }
        if(child.name.indexOf('Car_05') >= 0){
        child.material = CAR_05;
        }
        if(child.name.indexOf('Car_06') >= 0){
        child.material = CAR_06;
        }
        if(child.name.indexOf('Car_07') >= 0){
        child.material = CAR_07;
        }
        if(child.name.indexOf('Car_08') >= 0){
        child.material = CAR_08;
        }
        if(child.name.indexOf('Car_09') >= 0){
        child.material = CAR_09;
        }
        if(child.name.indexOf('Car_10') >= 0){
        child.material = CAR_10;
        }
        if(child.name.indexOf('Car_11') >= 0){
        child.material = CAR_11;
        }
        if(child.name.indexOf('Car_12') >= 0){
        child.material = CAR_12;
        }
    });
}
    //         if(i == 0) {
    //             model.position.x = 180; model.position.z=150;
    //             console.log(model)
    //             CAR();
    //             // const t6 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/t.png') })
    //             // t6.flipY = false
    //             // t6.encoding = THREE.sRGBEncoding
    //             // model.children.find(child => child.name === 't6').material = t6; // cities.push(model.getObjectByName('t6'));
    //             mixer = new THREE.AnimationMixer(model);
    //             action_1 = mixer.clipAction(gltf.animations[0])
    //             console.log(action_1)
    //             // actions.push(action_1);
    //             action_1.play()
    //             scene.add(model)
    //         }
    //         // if(i == 1) {
    //         //     model.position.x = 0; model.position.z=150; model.position.y=1;
    //         //     // model.scale.set(2, 2, 2)
    //         //     const br = new THREE.Color(0xff3434)
    //         //     model.getObjectByName('BrandenburgGate001').material.color = br;
    //         //     // const s4 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/aa.png') })
    //         //     // s4.flipY = false
    //         //     // s4.encoding = THREE.sRGBEncoding;
    //         //     // model.children.find(child => child.name === 's4').material = s4;
    //         //     // model.children.find(child => child.name === 's4').scale.set(0.8, 0.8, 0.8)
    //         //     // cities.push(model.getObjectByName('s4'));
    //         //     CAR();
    //         //     // mixer = new THREE.AnimationMixer(model);
    //         //     // action_2 = mixer.clipAction(gltf.animations[0]);
    //         //     // actions.push(action_2);
    //         //     scene.add(model)
    //         // }
    //         // if(i == 2) {
    //         //     model.position.x = -150; model.position.z=150; model.position.y=1;
    //         //     // model.scale.set(2, 3, 2)
    //         //     // const s3 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/t6.png') })
    //         //     // model.children.find(child => child.name === 's3').material = s3;
    //         //     // cities.push(model.getObjectByName('s3'));
    //         //     // model.getObjectByName('Sphere').visible = false;
    //         //     // model.getObjectByName('Shark_').visible = false;
    //         //     // const c1 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/bulding M. map 2.png') })
    //         //     // model.children.map(child => {
    //         //     //     if(child.name.indexOf('City1_') >= 0){
    //         //     //         child.material = c1;
    //         //     //     } 
    //         //     // });
    //         //     CAR();
    //         //     // mixer = new THREE.AnimationMixer(model);
    //         //     // action_3 = mixer.clipAction(gltf.animations[0]);
    //         //     // actions.push(action_3);
    //         //     scene.add(model)
    //         // }
    //         // if(i == 3) {
    //         //     model.position.x = -150; model.position.z=0;
    //         //     // model.scale.set(2, 3, 2);
    //         //     // model.getObjectByName('body_helicopter').visible = false;
    //         //     // const s1003 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/t6.png') })
    //         //     // model.children.find(child => child.name === 's1003').material = s1003;
    //         //     // cities.push(model.getObjectByName('s1003'));
    //         //     CAR();
    //         //     scene.add(model)
    //         // }
    //         // if(i == 4) {
    //         //     model.position.x = 150; model.position.z = -150;
    //         //     // model.scale.set(2, 3, 2);
    //         //     // model.getObjectByName('Deer').visible = false;
    //         //     // const s1 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/t6.png') })
    //         //     // model.children.find(child => child.name === 's1').material = s1;
    //         //     // cities.push(model.getObjectByName('s1'));
    //         //     // CAR();
    //         //     scene.add(model)
    //         // }
    //         // if(i == 5) {
    //         //     model.position.x = 0; model.position.z = -150; model.position.y = 1;
    //         //     // model.scale.set(2, 3, 2);
    //         //     // const t9 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/t6.png') })
    //         //     // model.children.find(child => child.name === 't9').material = t9;
    //         //     // cities.push(model.getObjectByName('t9'));
    //         //     // CAR();
    //         //     scene.add(model)
    //         // }
    //         // if(i == 6) {
    //         //     model.position.x = -170; model.position.z = -170;
    //         //     // model.scale.set(2, 3, 2);
    //         //     // cities.push(model.getObjectByName('t1'));
    //         //     // CAR();
    //         //     scene.add(model)
    //         // }
    //         // if(i == 7) {
    //         //     model.position.x = 150; model.position.z = 0; model.position.y = 1;
    //         //     // model.scale.set(2, 2, 2);
    //         //     // CAR();
    //         //     // const t8 = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/t6.png') })
    //         //     // model.children.find(child => child.name === 't8').material = t8
    //         //     // cities.push(model.getObjectByName('t8'));
    //         //     scene.add(model)
    //         // }
    //         // activateAllActions();
    //         }, undefined, function (error) {
    //             console.error(error);
    //         })


    //     }
    //     console.log(scene)

    // function activateAllActions() {
    //     actions.forEach( function(action)  {
    //         action.play()
    //     });
    // }

gltfLoader.load( './1.gltf', function (gltf) {
    const model = gltf.scene;
    gltf.scene.traverse((node) => {  
        if (node.isMesh) node.frustumCulled = false;
        if (node.isMesh) node.castShadow = true;
    });
    mixer = new THREE.AnimationMixer(model);
    CAR(model)
    model.children.find(child => child.name === 't6').material.metalness = 0.9;
    model.children.find(child => child.name === 't6').material.roughness = 0.2;
    model.children.find(child => child.name === 'NurbsPath001').visible = false;
    let action = mixer.clipAction(gltf.animations[0])
    action.play();
    model.getObjectByName('Plane').visible = false
    scene.add(model);
});
gltfLoader.load( './2.gltf', function (gltf) {
    const model = gltf.scene;
    model.position.set(160, 0, 0)
    gltf.scene.traverse((node) => {  
        if (node.isMesh) node.frustumCulled = false;
        if (node.isMesh) node.castShadow = true;
    });
    const Joga = new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/jet.png') })
    model.children.find(child => child.name === 'BrandenburgGate001').material = Joga;
    CAR(model)
    scene.add(model);
});
gltfLoader.load( './3.gltf', function (gltf) {
    const model = gltf.scene;
    model.position.set(-160, 0, 0)
    gltf.scene.traverse((node) => {  
        if (node.isMesh) node.frustumCulled = false;
        if (node.isMesh) node.castShadow = true;
    });
    CAR(model)
    model.children.find(child => child.name === 's3').material.metalness = 0.9;
    model.children.find(child => child.name === 's3').material.roughness = 0.2;
    model.children.find(child => child.name === 'Sphere').visible = false;
    mixer3 = new THREE.AnimationMixer(model);
    let action = mixer3.clipAction(gltf.animations[0])
    action.play();
    scene.add(model);
});
gltfLoader.load( './4.gltf', function (gltf) {
    const model = gltf.scene;
    model.position.set(-160, 0, -160)
    gltf.scene.traverse((node) => {  
        if (node.isMesh) node.frustumCulled = false;
        if (node.isMesh) node.castShadow = true;
    });
    CAR(model)
    model.children.find(child => child.name === 's1003').material.metalness = 0.9;
    model.children.find(child => child.name === 's1003').material.roughness = 0.2;
    mixer4 = new THREE.AnimationMixer(model);
    let action = mixer4.clipAction(gltf.animations[0])
    action.play();
    scene.add(model);
});
gltfLoader.load( './5.gltf', function (gltf) {
    const model = gltf.scene;
    model.position.set(-160, 0, -320)
    model.children.find(child => child.name === 's1').material.metalness = 0.9;
    model.children.find(child => child.name === 's1').material.roughness = 0.2;
    gltf.scene.traverse((node) => {  
        if (node.isMesh) node.frustumCulled = false;
        if (node.isMesh) node.castShadow = true;
    });
    CAR(model)
    scene.add(model);
});
gltfLoader.load( './6.gltf', function (gltf) {
    const model = gltf.scene;
    model.position.set(0, 0, -320)
    model.children.find(child => child.name === 't9').material.metalness = 0.9;
    model.children.find(child => child.name === 't9').material.roughness = 0.2;
    gltf.scene.traverse((node) => {  
        if (node.isMesh) node.frustumCulled = false;
        if (node.isMesh) node.castShadow = true;
    });
    CAR(model)
    scene.add(model);
});
gltfLoader.load( './7.gltf', function (gltf) {
    const model = gltf.scene;
    model.position.set(160, 0, -320)
    gltf.scene.traverse((node) => {  
        if (node.isMesh) node.frustumCulled = false;
        if (node.isMesh) node.castShadow = true;
    });
    // model.children.find(child => child.name === 't1').material.metalness = 0.9;
    // model.children.find(child => child.name === 't1').material.roughness = 0.2;
    model.children.find(child => child.name === 'Armature').children[2].visible = false;
    model.children.find(child => child.name === 'tt1').material.metalness = 0.9;
    model.children.find(child => child.name === 'tt1').material.roughness = 0.2;
    // const material1 = new THREE.SkinnedMesh({
    //     color: 0x292a34,
    //     });
    // model.children.find(child => child.name === 'Armature').children[3].material = material1
    mixer7 = new THREE.AnimationMixer(model);
    let action = mixer7.clipAction(gltf.animations[0])
    action.play();
    CAR(model)
    scene.add(model);
});
gltfLoader.load( './8.gltf', function (gltf) {
    const model = gltf.scene;
    model.position.set(160, 0, -160)
    model.children.find(child => child.name === 't8').material.metalness = 0.9;
    model.children.find(child => child.name === 't8').material.roughness = 0.2;
    gltf.scene.traverse((node) => {  
        if (node.isMesh) node.frustumCulled = false;
        if (node.isMesh) node.castShadow = true;
    });
    mixer8 = new THREE.AnimationMixer(model);
    let action = mixer8.clipAction(gltf.animations[0])
    action.play();
    CAR(model)
    scene.add(model);
});
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const cameraState = {
    mousePos: new THREE.Vector2(0, 0),
    virtualMousePos: new THREE.Vector2(0, 0),
    cameraAngle: [
        new THREE.Vector3(50, 600, 0),
        new THREE.Vector3(150, 500, 0),
        new THREE.Vector3(250, 400, 0),
        new THREE.Vector3(300, 350, 0),
        new THREE.Vector3(300, 300, 0),
        new THREE.Vector3(300, 200, 0),
        new THREE.Vector3(200, 100, 0),
        new THREE.Vector3(130, 50, 0),
        new THREE.Vector3(100, 40, 0),
        new THREE.Vector3(60, 30, 0),
    ],
    cameraMethod: 5,
    isClicked: false,
    targetPos: new THREE.Vector3(0, 0, 0),
    isTargetMoving: false,
};
const yAxis = new THREE.Vector3(0, 1, 0);
const xAxis = new THREE.Vector3(1, 0, 0);
const basePlane = new THREE.Plane(yAxis, 0);
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.01, 1000)
camera.position.set(0,10,20)
scene.add(camera)

/**
 * Renderer
 */




const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputEncoding = THREE.sRGBEncoding
document.body.appendChild( renderer.domElement );
// renderer.setAnimationLoop( tick );



// Controls
const cameraControls = new CameraControls( camera, renderer.domElement );
cameraControls.dampingFactor = 0.05;
cameraControls.draggingDampingFactor = 0.25;
cameraControls.verticalDragToForward = true;
cameraControls.dollyToCursor = true;
// cameraControls.maxPolarAngle = (Math.PI * 0.5) - 0.25;
// cameraControls.minPolarAngle = (Math.PI * 0.5) - 0.3;
cameraControls.minDistance = 200;
cameraControls.maxDistance = 1000;
cameraControls.maxZoom = 100;
cameraControls.minZoom = 100;
document.addEventListener('wheel', e => {
    if (e.deltaY < 0) {
        cameraState.cameraMethod = Math.min(cameraState.cameraMethod + 1, cameraState.cameraAngle.length - 1);
    } else {
        cameraState.cameraMethod = Math.max(cameraState.cameraMethod - 1, 0);
    }
})
document.addEventListener('mousedown', e => {
    cameraState.isClicked = true;
    cameraState.mousePos.setX(e.pageX);   cameraState.mousePos.setY(e.pageY);
    cameraState.targetPos = cameraControls.getTarget();
    cameraState.virtualMousePos.setX(e.pageX);   cameraState.virtualMousePos.setY(e.pageY);

    
	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects( scene.children );
if(cameraState.cameraMethod < 6){
    for ( let i = 0; i < intersects.length; i ++ ) {
        
        if(intersects[i].object.name === 't6' || intersects[i].object.name === 's3' || intersects[i].object.name === 't9' || intersects[i].object.name === 'trophy' || intersects[i].object.name === 's1003' || intersects[i].object.name === 's1' || intersects[i].object.name === 'tt1' || intersects[i].object.name === 't9' || intersects[i].object.name === 't8' || (intersects[i].object.name.indexOf('Baked') >= 0)){
            // intersects[i].object.material.color.set(0xff0000);

            cameraState.cameraMethod = 8;
            cameraState.isTargetMoving = true;
            cameraState.targetPos = intersects[i].point.clone().setY(0);
            console.log(intersects[i].point)
        }   
    }

    }
})
const mouseMoveHandler = e => {
    if (!cameraState.isClicked) {
        e.preventDefault();
        return;
    }
    cameraState.mousePos.setX(e.pageX);   cameraState.mousePos.setY(e.pageY);
}
document.addEventListener('mousemove', mouseMoveHandler);

const cameraMover = (delta) => {
    let camPos, targetPos;
    let arm;
    camPos = cameraControls.getPosition();
    targetPos = cameraControls.getTarget();
    arm = targetPos.clone().sub(camPos);
    const norm = arm.clone().setY(0).normalize().multiplyScalar(delta.y * Math.log(camPos.y) / 10);
    arm.applyAxisAngle(yAxis, delta.x / 1000);
    targetPos = camPos.clone().add(arm);
    camPos.add(norm);
    targetPos.add(norm);
    targetPos.setY(0);
    
    // camPos.x -= deltaX;
    // targetPos.x -= deltaX;
    // camPos.z -= deltaY;
    // targetPos.z -= deltaY;
    cameraControls.setPosition(...camPos);
    cameraControls.setTarget(...targetPos);
    cameraState.virtualMousePos.add(delta);
};
const updateCamera = () => {
    const delta = cameraState.mousePos.clone().sub(cameraState.virtualMousePos).multiplyScalar(0.05);
    cameraMover(delta);

    const cameraPos = cameraControls.getPosition();
    const targetPos = cameraControls.getTarget();
    const cameraAngle = cameraPos.clone().sub(targetPos);
    const projectedAngle = new THREE.Vector3();
    basePlane.projectPoint(cameraAngle, projectedAngle);
    const direction = xAxis.clone().cross(projectedAngle).normalize().y;
    const angle = (Math.PI * 2 + xAxis.angleTo(projectedAngle) * direction) % (Math.PI * 2);
    const normalizedAngle = cameraAngle.clone().applyAxisAngle(yAxis, -angle);
    const newNormalizedAngle = normalizedAngle.add(cameraState.cameraAngle[cameraState.cameraMethod].clone().sub(normalizedAngle).multiplyScalar(0.05));
    const newCameraAngle = newNormalizedAngle.applyAxisAngle(yAxis, angle);
    const newCameraPos = targetPos.clone().add(newCameraAngle);

    if (cameraState.isTargetMoving) {
        const delta = cameraState.targetPos.clone().sub(targetPos);
        const newTargetPos = delta.clone().multiplyScalar(0.05).add(targetPos);
        cameraControls.setTarget(...newTargetPos);
        if (delta.length() < 1e-3) {
            cameraState.isTargetMoving = false;
        }
    }
    cameraControls.setPosition(...newCameraPos);
}
document.addEventListener('mouseup', () => {
    cameraState.isClicked = false;
})

var timeout;
function startmove(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    var random =  getRandomInt(8)
    var c1 = new Vector3(0, 0, 0)
    var c2 = new Vector3(0, 0, -320)
    var c3 = new Vector3(160, 0, 0)
    var c4 = new Vector3(-160, 0, 0)
    var c5 = new Vector3(-160, 0, -160)
    var c6 = new Vector3(160, 0, -160)
    var c7 = new Vector3(-160, 0, -320)
    var c8 = new Vector3(160, 0, -320)
    var cities = [c1, c2, c3, c4, c5, c6, c7, c8]
cameraState.cameraMethod = 8;
cameraState.isTargetMoving = true;
cameraState.targetPos = cities[random]
}
document.addEventListener('mousemove' , function(){    
    if(timeout) {
        clearTimeout(timeout)};
    timeout = setInterval(startmove, 25000);
}, false);
// if(prepos.x-pos.x != 0) {
// cameraControls.mouseButtons.left = cameraControls.ACTION.ROTATE
// cameraControls.mouseButtons.right = cameraControls.ACTION.ROTATE
// }
// if(prepos.y-pos.y != 0) {
//     cameraControls.mouseButtons.left = cameraControls.ACTION.TRUCK
//     cameraControls.mouseButtons.right = cameraControls.ACTION.TRUCK
//     }
cameraControls.mouseButtons.left = CameraControls.ACTION.NONE
cameraControls.mouseButtons.right = CameraControls.ACTION.NONE
cameraControls.mouseButtons.middle = CameraControls.ACTION.NONE
cameraControls.mouseButtons.wheel = CameraControls.ACTION.NONE
cameraControls.addEventListener( 'controlstart', function() {
    switch ( cameraControls.currentAction ) {
            case CameraControls.ACTION.ROTATE:
            case CameraControls.ACTION.TOUCH_ROTATE: {

                renderer.domElement.classList.add( '-dragging' );
                break;

            }

            case CameraControls.ACTION.TRUCK:
            case CameraControls.ACTION.TOUCH_TRUCK: {

                renderer.domElement.classList.add( '-moving' );
                break;

            }

            case CameraControls.ACTION.DOLLY:
            case CameraControls.ACTION.ZOOM: {

                renderer.domElement.classList.add( '-zoomIn' );
                break;

            }

            case CameraControls.ACTION.TOUCH_DOLLY_TRUCK:
            case CameraControls.ACTION.TOUCH_ZOOM_TRUCK: {

                renderer.domElement.classList.add( '-moving' );
                break;

            }

            default: {
                break;
            }
        }
} );
cameraControls.addEventListener( 'controlend', function() {

    renderer.domElement.classList.remove(
        '-dragging',
        '-moving',
        '-zoomIn'
    );

} );


console.log(scene)

/**
 * Animate
 */
 const raycaster = new THREE.Raycaster();
 const pointer = new THREE.Vector2();
 
 function onPointerMove( event ) {
 
     // calculate pointer position in normalized device coordinates
     // (-1 to +1) for both components
 
     pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
     pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
 
 }

 
window.addEventListener( 'pointermove', onPointerMove );
let INTERSECTED;
let clock = new THREE.Clock();
const tick = () =>
{
    // const elapsedTime = clock.getElapsedTime()
    
    raycaster.setFromCamera( pointer, camera );
	const intersects = raycaster.intersectObjects( scene.children );
    if(cameraState.cameraMethod < 6){
    for ( let i = 0; i < intersects.length; i ++ ) {
       
        if(intersects[i].object.name === 't6'){
            let Plane =  scene.getObjectByName('Plane')
            Plane.position.set(0 , -4, 0)
            Plane.visible =true
            Plane.material.color.set(0x0072B5)
            setTimeout(back, 200);
            function back(){
            scene.getObjectByName('Plane').visible = false
            scene.getObjectByName('Plane').material.color.set(0xffffff, 0.5)
            }
        }
        if(intersects[i].object.name === 's3'){
            // intersects[i].object.material.color.set(0xff0000);
            let Plane =  scene.getObjectByName('Plane')
            Plane.position.set(-160, -4, 0)
            Plane.visible =true
            Plane.material.color.set(0x0072B5)
            setTimeout(back, 200);
            function back(){
            scene.getObjectByName('Plane').visible = false
            scene.getObjectByName('Plane').material.color.set(0xffffff, 0.5)
            }
        }    
        if(intersects[i].object.name === 'trophy'){
            // intersects[i].object.material.color.set(0xff0000);
            let Plane =  scene.getObjectByName('Plane')
            Plane.position.set(160, -4, 0)
            Plane.visible =true
            Plane.material.color.set(0x0072B5)
            setTimeout(back, 200);
            function back(){
            scene.getObjectByName('Plane').visible = false
            scene.getObjectByName('Plane').material.color.set(0xffffff, 0.5)
            }
        }
        if(intersects[i].object.name === 's1003'){
            // intersects[i].object.material.color.set(0xff0000);
            let Plane =  scene.getObjectByName('Plane')
            Plane.position.set(-160, -4, -160)
            Plane.visible =true
            Plane.material.color.set(0x0072B5)
            setTimeout(back, 200);
            function back(){
            scene.getObjectByName('Plane').visible = false
            scene.getObjectByName('Plane').material.color.set(0xffffff, 0.5)
            }
        }  
        if(intersects[i].object.name === 's1'){
            // intersects[i].object.material.color.set(0xff0000);
            let Plane =  scene.getObjectByName('Plane')
            Plane.position.set(-160, -4, -320)
            Plane.visible =true
            Plane.material.color.set(0x0072B5)
            setTimeout(back, 200);
            function back(){
            scene.getObjectByName('Plane').visible = false
            scene.getObjectByName('Plane').material.color.set(0xffffff, 0.5)
            }
        }      
        if(intersects[i].object.name === 't9'){
            // intersects[i].object.material.color.set(0xff0000);
            let Plane =  scene.getObjectByName('Plane')
            Plane.position.set(0, -4, -320)
            Plane.visible =true
            Plane.material.color.set(0x0072B5)
            setTimeout(back, 200);
            function back(){
            scene.getObjectByName('Plane').visible = false
            scene.getObjectByName('Plane').material.color.set(0xffffff, 0.5)
            }
        }  
        if(intersects[i].object.name === 'tt1'){
            // intersects[i].object.material.color.set(0xff0000);
            let Plane =  scene.getObjectByName('Plane')
            Plane.position.set(160, -4, -320)
            Plane.visible =true
            Plane.material.color.set(0x0072B5)
            setTimeout(back, 200);
            function back(){
            scene.getObjectByName('Plane').visible = false
            scene.getObjectByName('Plane').material.color.set(0xffffff, 0.5)
            }
        }  
        if(intersects[i].object.name === 't8'){
            // intersects[i].object.material.color.set(0xff0000);
            let Plane =  scene.getObjectByName('Plane')
            Plane.position.set(160, -4, -160)
            Plane.visible =true
            Plane.material.color.set(0x0072B5)
            setTimeout(back, 200);
            function back(){
            scene.getObjectByName('Plane').visible = false
            scene.getObjectByName('Plane').material.color.set(0xffffff, 0.5)
            }
        }  
        if(intersects[i].object.name.indexOf('Baked') >= 0){
            console.log(intersects[i].object.name)
            // intersects[i].object.material.blending = 2
            // setTimeout(back, 200);
            // function back(){
            //     intersects[i].object.material.blending = 1
            // }  
        } 
             
    }

    }
    var delta = clock.getDelta();
    // setTimeout(random_rotate, 300)
    // function random_rotate(){
    // cameraControls.targetPos = intersects[delta*1000%5].point.clone().setY(0);
    // }
    // console.log(delta)
  
    if ( mixer ) mixer.update( delta );
    if ( mixer3 ) mixer3.update( delta );
    if ( mixer4 ) mixer4.update( delta );
    if ( mixer7 ) mixer7.update( delta );
    if ( mixer8 ) mixer8.update( delta );

    // Update controls
    cameraControls.update(0.01)
    updateCamera();

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
setTimeout(tick, 800);

// tick()


