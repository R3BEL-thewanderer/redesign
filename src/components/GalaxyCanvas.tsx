import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSystem() {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 8000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorInside = new THREE.Color('#3b0764');
    const colorOutside = new THREE.Color('#38bdf8');

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 20;
      const branchAngle = (i % 3) * ((2 * Math.PI) / 3);
      const spinAngle = radius * 0.5;
      
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 2;

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i * 3 + 1] = randomY;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone().lerp(colorOutside, radius / 20);
      mixedColor.offsetHSL(0, 0, (Math.random() - 0.5) * 0.2);

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return [positions, colors];
  }, []);

  useFrame((_state, _delta) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
      ref.current.rotation.z += 0.0002;
    }
  });

  return (
    <group rotation={[Math.PI / 8, 0, 0]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function GalaxyCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 4, 15], fov: 60 }}
      gl={{ antialias: false, alpha: false }}
      dpr={[1, 1.5]}
      style={{ width: '100%', height: '100%' }}
    >
      <color attach="background" args={['#050510']} />
      <ParticleSystem />
    </Canvas>
  );
}
