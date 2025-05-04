import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Lines = () => {
  const lineRef = useRef();

  // Animación ondulada
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = lineRef.current.geometry.attributes.position.array;
    const len = positions.length / 3;

    for (let i = 0; i < len; i++) {
      const x = positions[i * 3];
      positions[i * 3 + 1] = Math.sin(x * 2 + time) * 0.1;
    }

    lineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // Crear puntos
  const points = [];
  for (let i = -5; i <= 5; i += 0.1) {
    points.push(new THREE.Vector3(i, 0, 0));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial attach="material" color="#00ff88" linewidth={2} />
    </line>
  );
};

const AnimatedLines = () => {
  return (
    <div style={{ width: "100%", height: "150px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Lines />
      </Canvas>
    </div>
  );
};

export default AnimatedLines;
