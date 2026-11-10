import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x02160c, 5, 25);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 400);
    camera.position.set(0, 5, 14);
    scene.add(camera);

    // Particle Wave Grid
    const width = 60;
    const count = 1600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color('#0aff7f'); // Neon Green/Cyan
    const color2 = new THREE.Color('#8b4dff'); // Violet/Indigo
    const color3 = new THREE.Color('#2391FF'); // BlazeByte Blue

    let pIndex = 0;
    for (let i = 0; i < 40; i++) {
      for (let j = 0; j < 40; j++) {
        const u = (i / 40 - 0.5) * width;
        const v = (j / 40 - 0.5) * width;
        positions[pIndex * 3] = u;
        positions[pIndex * 3 + 1] = 0;
        positions[pIndex * 3 + 2] = v;

        const mixColor = i % 2 === 0 ? color1.clone().lerp(color2, j / 40) : color3.clone().lerp(color2, i / 40);
        colors[pIndex * 3] = mixColor.r;
        colors[pIndex * 3 + 1] = mixColor.g;
        colors[pIndex * 3 + 2] = mixColor.b;
        pIndex++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const pctx = particleCanvas.getContext('2d');
    if (pctx) {
      const gradient = pctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(101,255,227,0.8)');
      gradient.addColorStop(0.7, 'rgba(139,77,255,0.3)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      pctx.fillStyle = gradient;
      pctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas);

    const material = new THREE.PointsMaterial({
      size: 0.8,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating ambient motes
    const moteCount = 180;
    const moteGeo = new THREE.BufferGeometry();
    const motePos = new Float32Array(moteCount * 3);
    for (let i = 0; i < moteCount; i++) {
      motePos[i * 3] = (Math.random() - 0.5) * 35;
      motePos[i * 3 + 1] = (Math.random() - 0.5) * 20 + 4;
      motePos[i * 3 + 2] = (Math.random() - 0.5) * 35;
    }
    moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
    const moteMat = new THREE.PointsMaterial({
      size: 0.5,
      color: new THREE.Color('#b783ff'),
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const motes = new THREE.Points(moteGeo, moteMat);
    scene.add(motes);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Keep camera stable and static so it does not drift or move on its own
      camera.position.set(0, 5, 14);
      camera.lookAt(0, 0, 0);

      // Undulate particle mesh
      const pos = geometry.attributes.position.array as Float32Array;
      let idx = 0;
      for (let i = 0; i < 40; i++) {
        for (let j = 0; j < 40; j++) {
          const u = (i / 40 - 0.5) * 60;
          const v = (j / 40 - 0.5) * 60;
          const wave1 = Math.sin(u * 0.15 + time * 1.2) * Math.cos(v * 0.15 + time * 0.8) * 2.2;
          const wave2 = Math.sin((u + v) * 0.1 + time * 1.5) * 1.2;
          pos[idx * 3 + 1] = wave1 + wave2;
          idx++;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Rotate particles slightly
      particles.rotation.y = time * 0.04;
      motes.rotation.y = -time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      moteGeo.dispose();
      moteMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-85 filter contrast-125"
      aria-hidden="true"
    />
  );
};
