// Inițializarea scenei, camerei și renderer-ului
const scene = new THREE.Scene();

// Setează fundalul scenei pentru a verifica randarea
scene.background = new THREE.Color(0x123456);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lumina pentru efecte mai realiste
const light = new THREE.AmbientLight(0xffffff, 1); 
scene.add(light);

// Crearea unui glob 3D
const geometry = new THREE.SphereGeometry(5, 32, 32); // Definim geometria
const textureLoader = new THREE.TextureLoader();

// Încărcarea texturii globului 🌍 și gestionarea erorilor
textureLoader.load(
    'https://mariabunas.github.io/glob-pamantesc/earth_texture.jpg',
    function(texture) { // Dacă textura se încarcă
        const material = new THREE.MeshStandardMaterial({ map: texture });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);
    
        // Setarea poziției camerei
        camera.position.z = 10;
    
        // Funcția de animație 🔄
        function animate() {
            requestAnimationFrame(animate);
            globe.rotation.y += 0.01; // Rotire continuă
            renderer.render(scene, camera);
        }
    
        animate();
    },
    undefined,
    function(error) { // Dacă apare o eroare la încărcare
        console.error("Eroare la încărcarea texturii:", error);
    }
);

