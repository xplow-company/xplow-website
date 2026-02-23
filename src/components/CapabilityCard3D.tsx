"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import * as THREE from "three";

const ACCENT = new THREE.Color("#ff1f4f");

type CapabilityVariant =
  | "brand-signal"
  | "product-clarity"
  | "precision-build"
  | "living-motion"
  | "structured-scale"
  | "momentum-layer"
  | "intelligence-layer";

interface CapabilityCard3DProps {
  variant: CapabilityVariant;
  isHovered?: boolean;
  className?: string;
}

// 1. Brand Signal — 3D broadcast sphere with radiating rings
function BrandSignalScene({ isHovered }: { isHovered?: boolean }) {
  const groupRef = useRef<Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = 0.25;
      groupRef.current.rotation.y += (isHovered ? 0.7 : 0.2) * delta;
    }
  });
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central brand core — solid sphere */}
      <mesh>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={isHovered ? 0.95 : 0.7}
        />
      </mesh>
      {/* Radiating signal rings — thick torus for clear visibility */}
      {[0.4, 0.55, 0.7].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r, 0.06, 16, 48]} />
          <meshBasicMaterial
            color={ACCENT}
            transparent
            opacity={isHovered ? 0.7 - i * 0.15 : 0.45 - i * 0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// 2. Product Clarity — wireframe cube (product mockup)
function ProductClarityScene({ isHovered }: { isHovered?: boolean }) {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += (isHovered ? 0.4 : 0.1) * delta;
      meshRef.current.rotation.y += (isHovered ? 0.5 : 0.12) * delta;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshBasicMaterial
        color={ACCENT}
        wireframe
        transparent
        opacity={isHovered ? 0.6 : 0.2}
      />
    </mesh>
  );
}

// 3. Precision Build — layered planes (pixel-perfect layers)
function PrecisionBuildScene({ isHovered }: { isHovered?: boolean }) {
  const groupRef = useRef<Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (isHovered ? 0.5 : 0.1) * delta;
    }
  });
  return (
    <group ref={groupRef}>
      {[0, 0.15, 0.3].map((z, i) => (
        <mesh key={i} position={[0, 0, z]}>
          <planeGeometry args={[0.7 - i * 0.15, 0.5 - i * 0.1]} />
          <meshBasicMaterial
            color={ACCENT}
            transparent
            opacity={isHovered ? 0.5 - i * 0.1 : 0.15 - i * 0.03}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// 4. Living Motion — flowing sphere with orbiting ring
function LivingMotionScene({ isHovered }: { isHovered?: boolean }) {
  const groupRef = useRef<Group>(null);
  const orbitRef = useRef<Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (isHovered ? 0.6 : 0.2) * delta;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += (isHovered ? 1.2 : 0.4) * delta;
    }
  });
  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={isHovered ? 0.35 : 0.12}
          wireframe
        />
      </mesh>
      <group ref={orbitRef} position={[0, 0, 0]}>
        <mesh position={[0.5, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.15, 0.02, 8, 24]} />
          <meshBasicMaterial
            color={ACCENT}
            transparent
            opacity={isHovered ? 0.8 : 0.3}
          />
        </mesh>
      </group>
    </group>
  );
}

// 5. Structured Scale — stacked modular blocks
function StructuredScaleScene({ isHovered }: { isHovered?: boolean }) {
  const groupRef = useRef<Group>(null);
  const blocks = useMemo(
    () => [
      [0, 0, 0],
      [0.2, 0.15, 0],
      [-0.15, 0.3, 0],
      [0.1, 0.45, 0],
    ],
    []
  );
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (isHovered ? 0.4 : 0.08) * delta;
    }
  });
  return (
    <group ref={groupRef}>
      {blocks.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.25 - i * 0.03, 0.12, 0.2]} />
          <meshBasicMaterial
            color={ACCENT}
            transparent
            opacity={isHovered ? 0.5 - i * 0.08 : 0.15 - i * 0.02}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

// 6. Momentum Layer — upward trending bars (chart)
function MomentumLayerScene({ isHovered }: { isHovered?: boolean }) {
  const groupRef = useRef<Group>(null);
  const heights = [0.2, 0.35, 0.5, 0.65, 0.8];
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (isHovered ? 0.5 : 0.1) * delta;
    }
  });
  return (
    <group ref={groupRef} position={[0, -0.05, 0]}>
      {heights.map((h, i) => (
        <mesh key={i} position={[-0.4 + i * 0.2, h / 2, 0]}>
          <boxGeometry args={[0.12, h, 0.08]} />
          <meshBasicMaterial
            color={ACCENT}
            transparent
            opacity={isHovered ? 0.4 + i * 0.08 : 0.1 + i * 0.03}
          />
        </mesh>
      ))}
    </group>
  );
}

// 7. Intelligence Layer — neural network nodes (AI/automation)
function IntelligenceLayerScene({ isHovered }: { isHovered?: boolean }) {
  const groupRef = useRef<Group>(null);
  const nodes = useMemo(
    () => [
      [-0.4, 0.3, 0],
      [0.4, 0.2, 0],
      [-0.15, -0.4, 0],
      [0.35, -0.35, 0],
    ] as [number, number, number][],
    []
  );
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (isHovered ? 0.6 : 0.15) * delta;
    }
  });
  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshBasicMaterial
            color={ACCENT}
            transparent
            opacity={isHovered ? 0.7 : 0.25}
          />
        </mesh>
      ))}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={isHovered ? 0.9 : 0.4}
        />
      </mesh>
    </group>
  );
}

function SceneContent({ variant, isHovered }: { variant: CapabilityVariant; isHovered?: boolean }) {
  switch (variant) {
    case "brand-signal":
      return <BrandSignalScene isHovered={isHovered} />;
    case "product-clarity":
      return <ProductClarityScene isHovered={isHovered} />;
    case "precision-build":
      return <PrecisionBuildScene isHovered={isHovered} />;
    case "living-motion":
      return <LivingMotionScene isHovered={isHovered} />;
    case "structured-scale":
      return <StructuredScaleScene isHovered={isHovered} />;
    case "momentum-layer":
      return <MomentumLayerScene isHovered={isHovered} />;
    case "intelligence-layer":
      return <IntelligenceLayerScene isHovered={isHovered} />;
    default:
      return null;
  }
}

export function CapabilityCard3D({ variant, isHovered, className = "" }: CapabilityCard3DProps) {
  return (
    <span
      className={`absolute top-4 right-4 z-10 w-[160px] h-[160px] transition-[filter] duration-300 ease-out group-hover:drop-shadow-[0_0_12px_#ff1f4f] pointer-events-none inline-block ${className}`}
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        dpr={[1, 2]}
        frameloop="always"
        style={{ width: "100%", height: "100%", display: "block" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1} color="#ff1f4f" />
        <SceneContent variant={variant} isHovered={isHovered} />
      </Canvas>
    </span>
  );
}
