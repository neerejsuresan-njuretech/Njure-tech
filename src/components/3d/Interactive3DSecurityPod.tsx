import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Shield, Lock, Key, EyeOff, FileText, CheckCircle2, Rotate3d } from 'lucide-react';

interface SecurityLayer {
  id: string;
  title: string;
  badge: string;
  icon: typeof Lock;
  color: string;
  position: [number, number, number];
  headline: string;
  technicalSpecification: string;
  njureStandard: string;
}

const SECURITY_LAYERS: SecurityLayer[] = [
  {
    id: 'port-lock',
    title: 'Hardware Port & USB Lockdown',
    badge: 'Endpoint Isolation',
    icon: Lock,
    color: '#00c2ff',
    position: [0, -0.5, 3.2],
    headline: 'Endpoint Isolation & Restricted External Storage',
    technicalSpecification: 'Workstation endpoints are configured with mass storage bus restrictions, preventing unauthorized local data exports or USB flash drive connections.',
    njureStandard: 'Operating system policies enforce endpoint restrictions. Workstations operate in strictly monitored environments with clean-screen compliance.'
  },
  {
    id: 'sso-custody',
    title: 'Client-Controlled Identity (SSO / MFA)',
    badge: 'Identity Custody',
    icon: Key,
    color: '#38bdf8',
    position: [-3.2, 1.2, 0],
    headline: 'Zero Credential Holding — Clients Retain 100% Identity Sovereignty',
    technicalSpecification: 'All operational accounts are provisioned directly within client identity providers (Google Workspace, Okta, Microsoft Entra) under least-privilege roles.',
    njureStandard: 'Specialists log in through your mandated MFA requirements. Your administrative team retains real-time access logs and immediate one-click revocation authority.'
  },
  {
    id: 'ephemeral-session',
    title: 'Ephemeral Browser Session',
    badge: 'Zero Local Persistence',
    icon: EyeOff,
    color: '#00e5ff',
    position: [0, 2.8, 0],
    headline: 'Cloud-Confined Workspace with Zero Local Storage',
    technicalSpecification: 'Customer support ticketing, data entry, and CRM operations run strictly inside authenticated browser sessions without saving local records.',
    njureStandard: 'All customer data remains inside your cloud infrastructure (Zendesk, Shopify, HubSpot). Browser sessions terminate securely upon shift completion.'
  },
  {
    id: 'partner-accountability',
    title: 'Bilateral Legal NDA & Governance',
    badge: 'Governance & Quality',
    icon: FileText,
    color: '#10b981',
    position: [3.2, 1.2, 0],
    headline: 'Enforceable Confidentiality & Supervisor Quality Controls',
    technicalSpecification: 'Every remote specialist executes bilateral non-disclosure agreements prior to onboarding. Daily standups ensure procedural adherence.',
    njureStandard: 'Operations leads perform queue spot-checks, call audits, and shift synchronization to ensure standard operating procedure (SOP) compliance.'
  }
];

export const Interactive3DSecurityPod: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedLayer, setSelectedLayer] = useState<SecurityLayer>(SECURITY_LAYERS[0]);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 4, 13);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Holographic Security Pedestal / Core
    const pedestalGeo = new THREE.CylinderGeometry(2.2, 2.8, 0.6, 32);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x0a192f,
      roughness: 0.25,
      metalness: 0.85,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -1.6;
    mainGroup.add(pedestal);

    // 2. Glowing Concentric Security Rings
    const ringGroup = new THREE.Group();
    mainGroup.add(ringGroup);

    const ringRadii = [3.2, 4.0, 4.8];
    const rings: THREE.Mesh[] = [];

    ringRadii.forEach((radius, i) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.04, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i === 1 ? 0x00c2ff : 0x0284c7,
        transparent: true,
        opacity: 0.45 - i * 0.1,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -1.6 + i * 0.15;
      ringGroup.add(ring);
      rings.push(ring);
    });

    // 3. Central Cryptographic Hologram Prism
    const prismGeo = new THREE.OctahedronGeometry(1.6, 0);
    const prismMat = new THREE.MeshPhysicalMaterial({
      color: 0x00b4d8,
      emissive: 0x023e8a,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.85,
      ior: 1.5,
      transparent: true,
      opacity: 0.9,
    });
    const prism = new THREE.Mesh(prismGeo, prismMat);
    prism.position.y = 0.6;
    mainGroup.add(prism);

    // Prism Wireframe Cage
    const prismWireGeo = new THREE.OctahedronGeometry(1.65, 0);
    const prismWireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const prismWire = new THREE.Mesh(prismWireGeo, prismWireMat);
    prismWire.position.y = 0.6;
    mainGroup.add(prismWire);

    // 4. Orbital Layer Beacon Nodes
    const beaconMeshes: THREE.Mesh[] = [];

    SECURITY_LAYERS.forEach((layer) => {
      const beaconGroup = new THREE.Group();
      beaconGroup.position.set(...layer.position);

      const sphereGeo = new THREE.SphereGeometry(0.35, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(layer.color),
        emissive: new THREE.Color(layer.color),
        emissiveIntensity: 0.4,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      beaconGroup.add(sphere);

      // Orbiting pulse ring
      const ringGeo = new THREE.TorusGeometry(0.55, 0.03, 16, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(layer.color),
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      beaconGroup.add(ring);

      mainGroup.add(beaconGroup);
      beaconMeshes.push(sphere);
    });

    // 5. Surrounding Particle Grid
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Studio Lighting
    const ambLight = new THREE.AmbientLight(0x0c2138, 2.0);
    scene.add(ambLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 3.0);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0077b6, 2.0);
    dirLight2.position.set(-10, -5, -10);
    scene.add(dirLight2);

    // Pointer Drag Rotation
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let targetRotY = 0;
    let targetRotX = 0.15;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevX = x;
      prevY = y;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const dx = x - prevX;
      const dy = y - prevY;

      targetRotY += dx * 0.007;
      targetRotX += dy * 0.007;
      targetRotX = Math.max(-0.6, Math.min(0.6, targetRotX));

      prevX = x;
      prevY = y;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onPointerDown);
    canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (isRotating && !isDragging) {
        targetRotY += 0.004;
      }

      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.08;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.08;

      // Animate Central Prism
      prism.rotation.y = elapsed * 0.4;
      prism.rotation.x = Math.sin(elapsed * 0.5) * 0.2;
      prismWire.rotation.y = -elapsed * 0.3;
      prismWire.rotation.x = Math.cos(elapsed * 0.5) * 0.2;

      // Pulse rings
      rings.forEach((ring, idx) => {
        ring.rotation.z = elapsed * (0.1 + idx * 0.05);
      });

      // Float particles
      particles.rotation.y = elapsed * 0.02;

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
      canvas.removeEventListener('mousedown', onPointerDown);
      canvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);

      pedestalGeo.dispose();
      pedestalMat.dispose();
      prismGeo.dispose();
      prismMat.dispose();
      prismWireGeo.dispose();
      prismWireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [isRotating]);

  return (
    <div className={`relative bg-slate-950 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-2xl ${className}`}>
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 p-5 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">3D Spatial Security Architecture</span>
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">Njure Tech Remote Endpoint Pod</h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
          >
            <Rotate3d className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">{isRotating ? 'Pause Spin' : 'Auto Rotate'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas */}
      <div ref={containerRef} className="w-full h-[380px] sm:h-[440px] cursor-grab active:cursor-grabbing relative">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Interactive Layer Tabs (Clickable Hotspots) */}
      <div className="p-4 sm:p-6 border-t border-slate-800/80 bg-slate-900/90 backdrop-blur-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
          {SECURITY_LAYERS.map((layer) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer.id === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-blue-600/20 border-cyan-400 shadow-md shadow-cyan-950/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Icon className="w-4 h-4" style={{ color: layer.color }} />
                  <span className="text-[10px] font-mono text-slate-400">{layer.badge}</span>
                </div>
                <div className={`text-xs font-semibold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {layer.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Contrast Breakdown */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">Inspecting Safeguard</span>
              <h5 className="text-base font-bold text-white tracking-tight">{selectedLayer.headline}</h5>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 self-start sm:self-auto">
              <CheckCircle2 className="w-3.5 h-3.5" /> Enforced on Every Shift
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold block">
                Operating Protocol & Specification
              </span>
              <p className="text-slate-300 leading-relaxed">{selectedLayer.technicalSpecification}</p>
            </div>
            <div className="p-3.5 rounded-lg bg-blue-950/30 border border-cyan-800/40 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                Implemented Operating Control
              </span>
              <p className="text-slate-200 leading-relaxed font-medium">{selectedLayer.njureStandard}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
