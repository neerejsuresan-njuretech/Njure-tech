import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Cpu, Zap, ArrowRight, Play, Pause } from 'lucide-react';

export const InteractivePipeline3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: '1. Ingestion', desc: 'Inbound omnichannel tickets, calls & e-commerce orders' },
    { name: '2. Triage & OCR', desc: 'Real-time sentiment categorization & document verification' },
    { name: '3. Partner Pod', desc: 'Remote profit-sharing specialist execution & resolution' },
    { name: '4. Direct Sync', desc: 'Instant bi-directional CRM / ERP sync with zero lag' },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 3, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    const pipelineGroup = new THREE.Group();
    scene.add(pipelineGroup);

    // 4 Pipeline Stage Nodes
    const nodeCount = 4;
    const nodeSpacing = 2.4;
    const nodes: THREE.Mesh[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = (i - (nodeCount - 1) / 2) * nodeSpacing;

      // Hexagonal / Torus Node
      const nodeGeo = new THREE.CylinderGeometry(0.7, 0.7, 0.3, 6);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: i === 2 ? 0x00c2ff : 0x0f2744,
        roughness: 0.3,
        metalness: 0.8,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, 0, 0);
      nodeMesh.rotation.x = Math.PI / 4;
      pipelineGroup.add(nodeMesh);
      nodes.push(nodeMesh);

      // Connecting tube to next node
      if (i < nodeCount - 1) {
        const nextX = (i + 1 - (nodeCount - 1) / 2) * nodeSpacing;
        const tubeGeo = new THREE.CylinderGeometry(0.08, 0.08, nodeSpacing, 16);
        const tubeMat = new THREE.MeshBasicMaterial({
          color: 0x0284c7,
          transparent: true,
          opacity: 0.4,
        });
        const tube = new THREE.Mesh(tubeGeo, tubeMat);
        tube.position.set((x + nextX) / 2, 0, 0);
        tube.rotation.z = Math.PI / 2;
        pipelineGroup.add(tube);
      }
    }

    // Floating Data Packets moving through pipeline
    const packetCount = 20;
    const packetGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const packetMeshes: { mesh: THREE.Mesh; progress: number }[] = [];

    const startX = -((nodeCount - 1) / 2) * nodeSpacing;
    const totalLength = (nodeCount - 1) * nodeSpacing;

    for (let i = 0; i < packetCount; i++) {
      const p = new THREE.Mesh(packetGeo, packetMat);
      pipelineGroup.add(p);
      packetMeshes.push({ mesh: p, progress: i / packetCount });
    }

    // Lights
    const ambient = new THREE.AmbientLight(0x0c2540, 2.0);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 3.0);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Spin nodes gently
      nodes.forEach((n, idx) => {
        n.rotation.y = elapsed * 0.8 + idx * 0.5;
      });

      // Move packets
      if (isPlaying) {
        packetMeshes.forEach((item) => {
          item.progress = (item.progress + 0.005) % 1;
          const currentX = startX + item.progress * totalLength;
          item.mesh.position.set(
            currentX,
            Math.sin(item.progress * Math.PI * 4) * 0.2,
            Math.cos(item.progress * Math.PI * 4) * 0.2
          );
        });
      }

      pipelineGroup.rotation.y = Math.sin(elapsed * 0.2) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      nodes.forEach((n) => {
        n.geometry.dispose();
      });
      renderer.dispose();
    };
  }, [isPlaying]);

  return (
    <div className={`relative bg-slate-950 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-xl ${className}`}>
      {/* Top Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
            Automated Operations Pipeline Flow
          </span>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-800"
        >
          {isPlaying ? <Pause className="w-3 h-3 text-cyan-400" /> : <Play className="w-3 h-3 text-cyan-400" />}
          <span>{isPlaying ? 'Pause' : 'Play'}</span>
        </button>
      </div>

      {/* 3D Viewport */}
      <div ref={containerRef} className="w-full h-[220px] sm:h-[260px] relative">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Step Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 sm:p-4 bg-slate-900/60 border-t border-slate-800/80">
        {steps.map((st, i) => (
          <button
            key={st.name}
            onClick={() => setActiveStep(i)}
            className={`p-2.5 rounded-lg border text-left transition-colors ${
              activeStep === i
                ? 'bg-blue-600/20 border-cyan-400'
                : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <div className="text-xs font-semibold text-white">{st.name}</div>
            <div className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">{st.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
