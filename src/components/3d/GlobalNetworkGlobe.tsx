import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Globe, ShieldCheck, Zap, RotateCw, Activity, Layers } from 'lucide-react';

interface HubNode {
  name: string;
  region: string;
  lat: number;
  lng: number;
  type: 'pod' | 'client' | 'hq';
  latency: string;
  sla: string;
  description: string;
}

const HUBS: HubNode[] = [
  {
    name: 'Kerala / Kochi Operational Core',
    region: 'South Asia (India)',
    lat: 9.9312,
    lng: 76.2673,
    type: 'hq',
    latency: '8ms local / 110ms global',
    sla: '99.8% First-Contact Resolution',
    description: 'Central operations hub of profit-sharing partners handling omnichannel tier-1 and back-office processing.'
  },
  {
    name: 'London & Western Europe Desk',
    region: 'United Kingdom & EU',
    lat: 51.5074,
    lng: -0.1278,
    type: 'client',
    latency: '95ms',
    sla: '24/7 GDPR-compliant desk',
    description: 'Serving UK & European e-commerce retail brands with evening and night shift time-zone alignment.'
  },
  {
    name: 'New York & East Coast Pod',
    region: 'North America',
    lat: 40.7128,
    lng: -74.0060,
    type: 'client',
    latency: '160ms',
    sla: '100% US Business Hours Coverage',
    description: 'Direct client CRM integration with live customer care and telecalling qualification.'
  },
  {
    name: 'Dubai & Gulf Operations',
    region: 'Middle East (UAE)',
    lat: 25.2048,
    lng: 55.2708,
    type: 'client',
    latency: '45ms',
    sla: 'Bilingual English/Arabic dispatch',
    description: 'Logistics, delivery tracking, and COD dispatch coordination for regional marketplaces.'
  },
  {
    name: 'Singapore APAC Hub',
    region: 'Southeast Asia',
    lat: 1.3521,
    lng: 103.8198,
    type: 'client',
    latency: '60ms',
    sla: 'Sub-30s Chat Response',
    description: 'High-velocity order verification and catalog processing across APAC merchant platforms.'
  },
  {
    name: 'California & West Coast Pod',
    region: 'North America',
    lat: 37.7749,
    lng: -122.4194,
    type: 'client',
    latency: '185ms',
    sla: 'Extended Evening Shift Coverage',
    description: 'Tech support ticket triaging, bug reports logging, and SaaS user onboarding.'
  }
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export const GlobalNetworkGlobe: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedHub, setSelectedHub] = useState<HubNode>(HUBS[0]);
  const [activeMode, setActiveMode] = useState<'coverage' | 'security' | 'latency'>('coverage');
  const [isRotating, setIsRotating] = useState(true);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // WebGL Check
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
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 5, 26);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Group to hold all rotating elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Core Sphere (Deep Translucent Navy)
    const sphereRadius = 8;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 48, 48);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x05152b,
      emissive: 0x030a16,
      specular: 0x0096c7,
      shininess: 25,
      transparent: true,
      opacity: 0.88,
    });
    const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(globeMesh);

    // 2. Wireframe / Longitude-Latitude Latice
    const wireframeGeo = new THREE.SphereGeometry(sphereRadius + 0.05, 28, 28);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x00b4d8,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    globeGroup.add(wireframeMesh);

    // 3. Dot Grid / Continental Particle Cloud
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const r = sphereRadius + 0.12;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      // Subtle cyan to blue gradient
      particleColors[i * 3] = 0.05; // R
      particleColors[i * 3 + 1] = 0.6 + Math.random() * 0.3; // G
      particleColors[i * 3 + 2] = 0.95; // B
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particleField);

    // 4. Outer Glowing Atmosphere Rim
    const haloGeo = new THREE.SphereGeometry(sphereRadius + 0.9, 32, 32);
    const haloMat = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x00c2ff) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(glowColor, intensity * 0.45);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(haloMesh);

    // 5. Hub Markers & Pins
    const markerGroup = new THREE.Group();
    globeGroup.add(markerGroup);

    const kochiVector = latLngToVector3(HUBS[0].lat, HUBS[0].lng, sphereRadius);

    const arcCurvePoints: THREE.Vector3[][] = [];

    HUBS.forEach((hub) => {
      const pos = latLngToVector3(hub.lat, hub.lng, sphereRadius + 0.15);

      // Pin Mesh
      const isHq = hub.type === 'hq';
      const markerGeo = new THREE.SphereGeometry(isHq ? 0.38 : 0.26, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: isHq ? 0x38bdf8 : 0x00e5ff,
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(pos);
      markerGroup.add(marker);

      // Outer Pulsing Ring
      const ringGeo = new THREE.RingGeometry(0.35, 0.55, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isHq ? 0x00c2ff : 0x0284c7,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      markerGroup.add(ring);

      // Connection Arcs between Kochi HQ and Global Client Pods
      if (!isHq) {
        const start = kochiVector;
        const end = pos;
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        const distance = start.distanceTo(end);
        mid.normalize().multiplyScalar(sphereRadius + distance * 0.28);

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const curvePoints = curve.getPoints(50);
        arcCurvePoints.push(curvePoints);

        const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
        const arcMat = new THREE.LineBasicMaterial({
          color: 0x00b4d8,
          transparent: true,
          opacity: 0.55,
          linewidth: 2,
        });
        const arcLine = new THREE.Line(arcGeo, arcMat);
        globeGroup.add(arcLine);
      }
    });

    // 6. Traveling Data Packets on Arcs
    const packetCount = arcCurvePoints.length * 3;
    const packetGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const packetMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < packetCount; i++) {
      const p = new THREE.Mesh(packetGeo, packetMat);
      globeGroup.add(p);
      packetMeshes.push(p);
    }

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x0a2540, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight1.position.set(15, 20, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0077b6, 1.8);
    dirLight2.position.set(-20, -10, -15);
    scene.add(dirLight2);

    // Pointer Interaction (Orbit & Drag)
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0.2;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMouseX = clientX;
      previousMouseY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - previousMouseX;
      const deltaY = clientY - previousMouseY;

      targetRotationY += deltaX * 0.006;
      targetRotationX += deltaY * 0.006;
      targetRotationX = Math.max(-0.8, Math.min(0.8, targetRotationX));

      previousMouseX = clientX;
      previousMouseY = clientY;
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
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth damped rotation
      if (isRotating && !isDragging) {
        targetRotationY += 0.0035;
      }
      globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.08;
      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.08;

      // Animate Traveling Data Packets along Arcs
      packetMeshes.forEach((mesh, index) => {
        const arcIndex = Math.floor(index / 3);
        const subOffset = (index % 3) * 0.33;
        const progress = (elapsedTime * 0.3 + subOffset) % 1;
        const curvePoints = arcCurvePoints[arcIndex];
        if (curvePoints && curvePoints.length > 0) {
          const ptIndex = Math.floor(progress * (curvePoints.length - 1));
          mesh.position.copy(curvePoints[ptIndex]);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
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

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousedown', onPointerDown);
      canvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);

      sphereGeo.dispose();
      sphereMat.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      renderer.dispose();
    };
  }, [isRotating]);

  return (
    <div className={`relative bg-radial from-slate-900 via-[#071527] to-[#030914] text-white rounded-2xl overflow-hidden border border-slate-800 shadow-2xl ${className}`}>
      {/* Top HUD Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 bg-gradient-to-b from-slate-950/80 to-transparent pointer-events-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight flex items-center gap-2">
              Global Operations Mesh
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE 24/7
              </span>
            </h4>
            <p className="text-xs text-slate-400">Interactive 3D spatial node routing across client timezones</p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-950/70 border border-slate-800 rounded-lg text-xs">
          <button
            onClick={() => setActiveMode('coverage')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
              activeMode === 'coverage' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Coverage</span>
          </button>
          <button
            onClick={() => setActiveMode('security')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
              activeMode === 'security' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero-Leak Shield</span>
          </button>
          <button
            onClick={() => setActiveMode('latency')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
              activeMode === 'latency' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>SLA Latency</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div ref={containerRef} className="w-full h-[440px] sm:h-[500px] lg:h-[560px] cursor-grab active:cursor-grabbing relative">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Fallback if WebGL unavailable */}
        {!webglSupported && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-900">
            <Globe className="w-12 h-12 text-blue-400 mb-3 animate-pulse" />
            <p className="text-sm font-medium text-slate-300">3D WebGL acceleration not available in current environment.</p>
            <p className="text-xs text-slate-500 mt-1">Rendering high-reliability SVG connectivity mesh.</p>
          </div>
        )}

        {/* Orbit Helper Tip */}
        <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 backdrop-blur-xs">
          <RotateCw className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Click & drag to rotate 3D globe</span>
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="ml-2 text-blue-400 hover:underline font-mono"
          >
            [{isRotating ? 'Pause' : 'Play'}]
          </button>
        </div>
      </div>

      {/* Interactive Hub Node Drawer / Inspector (Bottom) */}
      <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Selected Node</span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">{selectedHub.region}</span>
            </div>
            <h5 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              {selectedHub.name}
              {selectedHub.type === 'hq' && (
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Global Hub
                </span>
              )}
            </h5>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">{selectedHub.description}</p>
          </div>

          {/* Metrics Pill Grid */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-left min-w-[130px]">
              <span className="block text-[10px] font-mono uppercase text-slate-400">SLA Standard</span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-400 tabular-nums">{selectedHub.sla}</span>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-left min-w-[110px]">
              <span className="block text-[10px] font-mono uppercase text-slate-400">Network Latency</span>
              <span className="text-xs sm:text-sm font-semibold text-blue-300 tabular-nums">{selectedHub.latency}</span>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-left min-w-[110px]">
              <span className="block text-[10px] font-mono uppercase text-slate-400">Security State</span>
              <span className="text-xs sm:text-sm font-semibold text-cyan-300 flex items-center gap-1">
                <Zap className="w-3 h-3 text-cyan-400" /> Port Locked
              </span>
            </div>
          </div>
        </div>

        {/* Hub Selector Buttons */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-mono text-slate-500 uppercase shrink-0">Switch Node:</span>
          {HUBS.map((hub) => (
            <button
              key={hub.name}
              onClick={() => setSelectedHub(hub)}
              className={`px-3 py-1 rounded text-xs whitespace-nowrap transition-colors ${
                selectedHub.name === hub.name
                  ? 'bg-blue-600 text-white font-medium'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {hub.name.split(' ')[0]} ({hub.region.split(' ')[0]})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
