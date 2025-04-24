// Inițializarea scenei, camerei și renderer-ului
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('globCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crearea unui glob 3D
const geometry = new THREE.SphereGeometry(5, 32, 32); // Definim geometria

// Încărcarea texturii globului 🌍
const textureLoader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({ 
    map: textureLoader.load('https://username.github.io/repository-name/earth_texture.jpg') 
});

// Crearea obiectului Mesh cu geometria și materialul
const globe = new THREE.Mesh(geometry, material);
scene.add(globe); // Adăugăm globul în scenă

// Setarea poziției camerei
camera.position.z = 10;

// Funcția de animație 🔄
function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.01; // Rotire continuă
    renderer.render(scene, camera);
}

animate();

});
