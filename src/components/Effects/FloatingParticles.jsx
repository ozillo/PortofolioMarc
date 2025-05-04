import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const FloatingParticles = () => {
  return (
    <div style={{ width: "100%", height: "200px" }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={100}      // tamaño de la esfera donde se distribuyen
          depth={50}        // profundidad en Z
          count={600}       // ✅ aumentamos la cantidad
          factor={4}        // tamaño relativo de las partículas
          saturation={0}    // sin color dinámico
          fade              // fade automático
          speed={1}         // velocidad de movimiento
        />
      </Canvas>
    </div>
  );
};

export default FloatingParticles;
