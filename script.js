// Inițializarea scenei, camerei și renderer-ului
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x123456); // Fundal albastru

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 30); // Mută camera mai în față

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crearea unui cub roșu de test
const geometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Roșu
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01; // Rotire continuă
    renderer.render(scene, camera);
}

animate();


