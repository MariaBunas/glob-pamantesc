const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('globCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const textureLoader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({ map: textureLoader.load('earth_texture.jpg') });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

document.addEventListener("click", () => {
    let scale = 5;
    let interval = setInterval(() => {
        if (scale >= 15) {
            clearInterval(interval);
            globe.geometry = new THREE.PlaneGeometry(20, 10); // Se transformă într-o hartă
        } else {
            globe.scale.set(scale, scale, scale);
            scale += 0.5;
        }
    }, 100);
});
