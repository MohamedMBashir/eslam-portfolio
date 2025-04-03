"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { PerspectiveCamera, Sky, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Hook to track scroll position
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
}

// Auto-rotating scene wrapper with scroll effects
function SceneRotator({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  const scrollY = useScrollPosition();
  const initialRender = useRef(true);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Basic rotation
      groupRef.current.rotation.y += delta * 0.05;
      
      // Scroll-based effects
      if (!initialRender.current) {
        // Subtle tilt based on scroll
        const targetTiltX = (scrollY / 2000) * 0.2; // Max tilt of 0.2 radians at 2000px scroll
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          targetTiltX,
          delta * 2
        );
        
        // Subtle zoom out/camera adjustment as user scrolls
        const targetY = -1.5 - (scrollY / 2000) * 0.5; // Subtle downward movement
        groupRef.current.position.y = THREE.MathUtils.lerp(
          groupRef.current.position.y,
          targetY,
          delta * 2
        );
      } else {
        groupRef.current.rotation.x = 0;
        groupRef.current.position.y = 0;
        initialRender.current = false;
      }
    }
  });
  
  return <group ref={groupRef}>{children}</group>;
}

// Floating sand particles
function SandParticles() {
  const particlesRef = useRef<THREE.Points>(null!);
  const particleCount = 100;
  
  const [positions] = useState(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  });
  
  useFrame((state, delta) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] -= delta * 0.1 * (Math.random() * 0.5 + 0.5);
        if (positions[i * 3 + 1] < 0) {
          positions[i * 3 + 1] = 5;
          positions[i * 3] = (Math.random() - 0.5) * 20;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#e2d3b8" 
        transparent 
        opacity={0.6} 
        sizeAttenuation 
      />
    </points>
  );
}

// Desert dunes in the background
function DesertGround() {
  const createDesertTexture = () => {
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    
    // Base sand color
    ctx.fillStyle = '#f3e9d9';
    ctx.fillRect(0, 0, size, size);
    
    // Create sand texture with variations
    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = Math.random() * 3 + 0.5;
      const alpha = Math.random() * 0.1 + 0.05;
      
      ctx.fillStyle = Math.random() > 0.5 
        ? `rgba(226, 211, 184, ${alpha})` 
        : `rgba(209, 190, 157, ${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Add some subtle dune lines
    for (let i = 0; i < 20; i++) {
      const y = Math.random() * size;
      const amplitude = Math.random() * 5 + 2;
      const lineWidth = Math.random() * 1 + 0.5;
      
      ctx.strokeStyle = `rgba(226, 211, 184, 0.3)`;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      
      for (let x = 0; x < size; x += 5) {
        const noiseY = y + Math.sin(x * 0.01) * amplitude;
        if (x === 0) {
          ctx.moveTo(x, noiseY);
        } else {
          ctx.lineTo(x, noiseY);
        }
      }
      
      ctx.stroke();
    }
    
    return new THREE.CanvasTexture(canvas);
  };
  
  const [texture] = useState(() => createDesertTexture());
  
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <planeGeometry args={[50, 50, 128, 128]} />
      <meshStandardMaterial 
        color="#f3e9d9" 
        roughness={1}
        map={texture}
        bumpMap={texture}
        bumpScale={0.2}
        displacementMap={texture}
        displacementScale={0.5}
      />
    </mesh>
  );
}

function Pyramid(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Create pyramid geometry (square base)
  const createPyramidGeometry = () => {
    const geometry = new THREE.BufferGeometry();
    
    // Vertices - pyramid with square base
    const vertices = new Float32Array([
      // Base
      -2, 0, -2,
      2, 0, -2,
      2, 0, 2,
      -2, 0, 2,
      // Apex
      0, 4, 0
    ]);
    
    // Faces (triangles)
    const indices = [
      // Base (2 triangles)
      0, 1, 2,
      0, 2, 3,
      // Sides (4 triangles)
      0, 4, 1,
      1, 4, 2,
      2, 4, 3,
      3, 4, 0
    ];
    
    // UV coordinates for texture mapping
    const uv = new Float32Array([
      // Base
      0, 0,
      1, 0,
      1, 1,
      0, 1,
      // Apex
      0.5, 0.5
    ]);
    
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geometry.computeVertexNormals();
    
    return geometry;
  };
  
  // Create procedural texture for limestone blocks
  const createPyramidTexture = () => {
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    
    // Base color - sandy limestone
    ctx.fillStyle = '#E6D9B8';
    ctx.fillRect(0, 0, size, size);
    
    // Draw stone blocks
    const blockSize = 32;
    ctx.strokeStyle = '#C1B59F';
    ctx.lineWidth = 2;
    
    // Horizontal lines
    for (let y = 0; y < size; y += blockSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(size, y);
      ctx.stroke();
      
      // Add some random variations to blocks
      for (let x = 0; x < size; x += blockSize) {
        // Random block color variation
        const variation = Math.random() * 20 - 10;
        ctx.fillStyle = `rgba(230, 217, 184, ${0.8 + Math.random() * 0.2})`;
        ctx.fillRect(x, y, blockSize, blockSize);
        
        // Add some random cracks and details
        if (Math.random() > 0.8) {
          ctx.strokeStyle = '#A99D85';
          ctx.beginPath();
          ctx.moveTo(x + Math.random() * blockSize, y);
          ctx.lineTo(x + Math.random() * blockSize, y + blockSize);
          ctx.stroke();
          ctx.strokeStyle = '#C1B59F';
        }
      }
    }
    
    // Vertical lines
    for (let x = 0; x < size; x += blockSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, size);
      ctx.stroke();
    }
    
    // Create weathering effects
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = Math.random() * 5 + 1;
      const alpha = Math.random() * 0.3;
      
      ctx.fillStyle = `rgba(160, 145, 125, ${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  };
  
  const [geometry] = useState(() => createPyramidGeometry());
  const [texture] = useState(() => createPyramidTexture());

  return (
    <mesh 
      {...props} 
      ref={meshRef} 
      geometry={geometry}
      rotation={[0, 0, 0]} 
      castShadow
    >
      <meshPhysicalMaterial 
        map={texture}
        bumpMap={texture}
        bumpScale={0.05}
        color="#E6D9B8"
        metalness={0.05}
        roughness={0.9}
        transmission={0}
      />
    </mesh>
  );
}

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0"> 
      <Canvas scene={{ background: new THREE.Color(0xfcf8f3) }}>
        <fog attach="fog" args={['#fcf8f3', 15, 30]} />
        <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={50} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.3}
          dampingFactor={0.08}
          enableDamping={true}
        />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 15, 8]} intensity={1.5} castShadow />
        <directionalLight position={[-8, -5, -3]} intensity={0.5} />
        <SceneRotator>
          <Pyramid position={[-1.5, -1.5, 0]} />
          <DesertGround />
          <SandParticles />
        </SceneRotator>
        <Sky distance={450000} sunPosition={[5, 1, 8]} turbidity={8} rayleigh={6} mieCoefficient={0.005} mieDirectionalG={0.7} />
      </Canvas>
    </div>
  );
};

export default HeroBackground; 