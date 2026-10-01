import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface InteractiveBackground3DProps {
  className?: string;
  variant?: 'light' | 'dark';
  density?: 'low' | 'normal' | 'high';
}

export const InteractiveBackground3D: React.FC<InteractiveBackground3DProps> = ({
  className = '',
  variant = 'light',
  density = 'normal',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // WebGL support check
    try {
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Color definitions based on variant
    const isDark = variant === 'dark';
    const primaryColor = isDark ? 0x38bdf8 : 0x0284c7; // sky blue
    const secondaryColor = isDark ? 0x00c2ff : 0x0369a1; // cyan / deeper blue
    const lineColor = isDark ? 0x0ea5e9 : 0x38bdf8;

    // 1. Interactive 3D Undulating Lattice Plane (Geometrical Mesh)
    const cols = density === 'high' ? 36 : density === 'low' ? 20 : 28;
    const rows = density === 'high' ? 24 : density === 'low' ? 14 : 18;
    const count = cols * rows;

    const latticeGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const xSpacing = 1.3;
    const ySpacing = 1.1;
    const xOffset = ((cols - 1) * xSpacing) / 2;
    const yOffset = ((rows - 1) * ySpacing) / 2;

    const c1 = new THREE.Color(primaryColor);
    const c2 = new THREE.Color(secondaryColor);

    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * xSpacing - xOffset;
        const y = j * ySpacing - yOffset;
        const z = Math.sin(i * 0.4) * Math.cos(j * 0.4) * 1.5;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        originalPositions[idx * 3] = x;
        originalPositions[idx * 3 + 1] = y;
        originalPositions[idx * 3 + 2] = z;

        const lerpFactor = (i / cols + j / rows) / 2;
        const pointColor = c1.clone().lerp(c2, lerpFactor);
        colors[idx * 3] = pointColor.r;
        colors[idx * 3 + 1] = pointColor.g;
        colors[idx * 3 + 2] = pointColor.b;

        idx++;
      }
    }

    latticeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    latticeGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isDark ? 0.22 : 0.18,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.75 : 0.5,
    });
    const particlePoints = new THREE.Points(latticeGeo, particleMat);
    scene.add(particlePoints);

    // 2. Dynamic Interconnection Hairline Grid
    const lineIndices: number[] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const current = i * rows + j;
        if (i < cols - 1) {
          const right = (i + 1) * rows + j;
          lineIndices.push(current, right);
        }
        if (j < rows - 1) {
          const up = i * rows + (j + 1);
          lineIndices.push(current, up);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', latticeGeo.getAttribute('position'));
    lineGeo.setIndex(lineIndices);

    const lineMat = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: isDark ? 0.22 : 0.14,
    });
    const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineMesh);

    // 3. Floating Ambient 3D Polyhedra
    const polyGroup = new THREE.Group();
    scene.add(polyGroup);

    const polyMeshes: { mesh: THREE.Mesh; rotSpeedX: number; rotSpeedY: number; baseY: number; floatSpeed: number }[] = [];
    const polyGeos = [
      new THREE.IcosahedronGeometry(0.9, 0),
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.TetrahedronGeometry(1.0, 0),
      new THREE.IcosahedronGeometry(0.7, 0),
    ];

    const polyPositions: [number, number, number][] = [
      [-9, 4, 3],
      [10, -3, 2],
      [-10, -5, 4],
      [9, 5, 1],
    ];

    polyPositions.forEach((pos, i) => {
      const geo = polyGeos[i % polyGeos.length];
      const mat = new THREE.MeshBasicMaterial({
        color: isDark ? 0x38bdf8 : 0x0284c7,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.35 : 0.22,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      polyGroup.add(mesh);
      polyMeshes.push({
        mesh,
        rotSpeedX: 0.006 * (i % 2 === 0 ? 1 : -1),
        rotSpeedY: 0.008 * (i % 2 === 0 ? -1 : 1),
        baseY: pos[1],
        floatSpeed: 0.8 + i * 0.2,
      });
    });

    // Mouse Tracking for Parallax & Ripple Effect
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 2.5;
      mouseY = y * 2.0;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera dampening on mouse move
      targetCameraX += (mouseX - targetCameraX) * 0.05;
      targetCameraY += (mouseY - targetCameraY) * 0.05;
      camera.position.x = targetCameraX;
      camera.position.y = targetCameraY;
      camera.lookAt(0, 0, 0);

      // Undulate 3D Lattice Waves
      const posAttr = latticeGeo.getAttribute('position') as THREE.BufferAttribute;
      const currentPos = posAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];

        // Complex wave combining two sinusoidal frequencies + mouse wave
        const wave1 = Math.sin(elapsed * 1.2 + ox * 0.35 + oy * 0.25) * 1.1;
        const wave2 = Math.cos(elapsed * 0.8 + ox * 0.2 - oy * 0.3) * 0.8;

        currentPos[i * 3 + 2] = wave1 + wave2;
      }
      posAttr.needsUpdate = true;

      // Animate floating polyhedra
      polyMeshes.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.position.y = item.baseY + Math.sin(elapsed * item.floatSpeed) * 0.6;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);

      latticeGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      polyGeos.forEach((g) => g.dispose());
      renderer.dispose();
    };
  }, [variant, density]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Subtle Fallback or Ambient Gradient Overlay to preserve text contrast */}
      <div
        className={`absolute inset-0 ${
          variant === 'light'
            ? 'bg-gradient-to-b from-white/70 via-transparent to-white/95'
            : 'bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/90'
        }`}
      />
    </div>
  );
};
