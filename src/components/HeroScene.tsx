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
    scene.fog = new THREE.Fog(0xeee5e9, 10, 38);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 400);
    camera.position.set(0, 7, 18);
    camera.lookAt(0, -1.5, 0);
    scene.add(camera);

    // Particle Wave Grid with BlazeByte Palette
    const width = 65;
    const count = 1600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorRust = new THREE.Color('#cf5c36'); // Brand rust orange
    const colorGold = new THREE.Color('#efc88b'); // Soft gold
    const colorBlue = new THREE.Color('#2391FF'); // BlazeByte blue

    let pIndex = 0;
    for (let i = 0; i < 40; i++) {
      for (let j = 0; j < 40; j++) {
        const u = (i / 40 - 0.5) * width;
        const v = (j / 40 - 0.5) * width;
        positions[pIndex * 3] = u;
        positions[pIndex * 3 + 1] = -2.5;
        positions[pIndex * 3 + 2] = v;

        const mixColor = i % 2 === 0
          ? colorRust.clone().lerp(colorGold, j / 40)
          : colorBlue.clone().lerp(colorRust, i / 40);

        colors[pIndex * 3] = mixColor.r;
        colors[pIndex * 3 + 1] = mixColor.g;
        colors[pIndex * 3 + 2] = mixColor.b;
        pIndex++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Crisp soft particle texture
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const pctx = particleCanvas.getContext('2d');
    if (pctx) {
      const gradient = pctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.35, 'rgba(207,92,54,0.85)');
      gradient.addColorStop(0.75, 'rgba(239,200,139,0.3)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      pctx.fillStyle = gradient;
      pctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas);

    const material = new THREE.PointsMaterial({
      size: 0.75,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

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
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      camera.position.set(0, 7, 18);
      camera.lookAt(0, -1.5, 0);

      // Undulate particle mesh below text level
      const pos = geometry.attributes.position.array as Float32Array;
      let idx = 0;
      for (let i = 0; i < 40; i++) {
        for (let j = 0; j < 40; j++) {
          const u = (i / 40 - 0.5) * 65;
          const v = (j / 40 - 0.5) * 65;
          const wave1 = Math.sin(u * 0.14 + time * 1.1) * Math.cos(v * 0.14 + time * 0.7) * 1.8;
          const wave2 = Math.sin((u + v) * 0.08 + time * 1.3) * 0.9;
          pos[idx * 3 + 1] = wave1 + wave2 - 2.8;
          idx++;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Gentle rotation
      particles.rotation.y = time * 0.025;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60 filter saturate-125"
      aria-hidden="true"
    />
  );
};
