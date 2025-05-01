import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";

export default function Background3D() {
  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#00ffff" wireframe />
        </mesh>
      </Float>
      <Stars radius={50} depth={50} count={300} factor={4} fade />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </Canvas>
  );
}
