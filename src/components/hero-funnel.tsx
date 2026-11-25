"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Node layout: a wide intake row that funnels down to a single decision point,
// then feeds the agentic loop. x/y in world units, z = depth for parallax.
type Node = { x: number; y: number; z: number; r: number; lane: number };

const INTAKE_XS = [-4.6, -2.8, -1.0, 0.8, 2.6, 4.4];
const LANE_YS = [2.1, 1.1, 0.1];

const NODES: Node[] = [
  ...INTAKE_XS.flatMap((x, i) =>
    LANE_YS.map((y, j) => ({ x, y, z: -0.4 - j * 0.5, r: 0.052, lane: (i + j) % 3 })),
  ),
  { x: -1.4, y: -1.3, z: 0, r: 0.075, lane: 0 },
  { x: 0, y: -1.9, z: 0.2, r: 0.11, lane: 1 },
  { x: 1.4, y: -1.3, z: 0, r: 0.075, lane: 2 },
  { x: -2.9, y: -2.5, z: -0.3, r: 0.06, lane: 2 },
  { x: 2.9, y: -2.5, z: -0.3, r: 0.06, lane: 0 },
];

// Edges funnelling intake -> merge -> hub, expressed as node index pairs.
const EDGES: [number, number][] = [];
for (let i = 0; i < INTAKE_XS.length; i += 1) {
  for (let j = 0; j < LANE_YS.length; j += 1) {
    const idx = i * LANE_YS.length + j;
    if (i < 3) EDGES.push([idx, 18]);
    else EDGES.push([idx, 20]);
    if (j === 1) EDGES.push([idx, 19]);
  }
}
EDGES.push([18, 19], [19, 20], [19, 21], [19, 22], [18, 21], [20, 22]);

type Palette = { bg: number; line: number; hot: number; cool: number; fog: number };

function palette(light: boolean): Palette {
  return light
    ? { bg: 0xf4f7fc, line: 0x1d5fd8, hot: 0x6d3fd4, cool: 0x0a7a58, fog: 0.55 }
    : { bg: 0x05070d, line: 0x4c8dff, hot: 0x8b5cf6, cool: 0x10b981, fog: 0.72 };
}

export function HeroFunnel() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isLight = () => document.documentElement.classList.contains("light");

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "low-power" });
    } catch {
      return; // No WebGL: the CSS grid + gradient behind this stays as the backdrop.
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setClearAlpha(0);
    host.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.set(0, 0.5, 8.4);

    const world = new THREE.Group();
    scene.add(world);

    const pal = palette(isLight());
    const light = isLight();

    // ---- layered geometry background ---------------------------------------
    // Three depth planes: a far hex mesh, a mid neural lattice, and a near
    // perspective floor. Each sits at its own z so parallax reads as depth.

    // Helper: a flat pointy-top hex grid as line segments (no fill = no overdraw).
    function hexGrid(
      cols: number,
      rows: number,
      radius: number,
      plane: "xy" | "xz",
      jitter: number,
    ) {
      const pts: number[] = [];
      const w = Math.sqrt(3) * radius;
      const h = 1.5 * radius;
      for (let c = 0; c < cols; c += 1) {
        for (let r = 0; r < rows; r += 1) {
          const cx = c * w + (r % 2 ? w / 2 : 0) - (cols * w) / 2;
          const cy = r * h - (rows * h) / 2;
          // Deterministic per-cell skip keeps it irregular rather than a fabric.
          const seed = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453;
          if (seed - Math.floor(seed) < 0.24) continue;
          const wob = Math.sin(c * 3.1 + r * 1.7) * jitter;
          for (let k = 0; k < 6; k += 1) {
            const a0 = (Math.PI / 180) * (60 * k - 30);
            const a1 = (Math.PI / 180) * (60 * (k + 1) - 30);
            const x0 = cx + Math.cos(a0) * radius;
            const y0 = cy + Math.sin(a0) * radius;
            const x1 = cx + Math.cos(a1) * radius;
            const y1 = cy + Math.sin(a1) * radius;
            if (plane === "xy") {
              pts.push(x0, y0 + wob, 0, x1, y1 + wob, 0);
            } else {
              pts.push(x0, 0, y0 + wob, x1, 0, y1 + wob);
            }
          }
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
      return g;
    }

    // Far plane: large, slow, very faint hex mesh behind everything.
    const farHexGeo = hexGrid(11, 9, 1.05, "xy", 0.05);
    const farHexMat = new THREE.LineBasicMaterial({
      color: pal.line,
      transparent: true,
      opacity: light ? 0.1 : 0.13,
    });
    const farHex = new THREE.LineSegments(farHexGeo, farHexMat);
    farHex.position.set(0, 0.1, -6.5);
    farHex.rotation.z = 0.18;
    world.add(farHex);

    // Mid plane: tighter hex lattice, slight counter-rotation.
    const midHexGeo = hexGrid(7, 6, 0.62, "xy", 0.02);
    const midHexMat = new THREE.LineBasicMaterial({
      color: pal.hot,
      transparent: true,
      opacity: light ? 0.14 : 0.16,
    });
    const midHex = new THREE.LineSegments(midHexGeo, midHexMat);
    midHex.position.set(-2.6, -1.1, -3.2);
    midHex.rotation.z = -0.35;
    world.add(midHex);

    // Neural lattice: hex cells with a synapse node at each live vertex.
    const neuralGroup = new THREE.Group();
    neuralGroup.position.set(2.7, 1.5, -2.2);
    neuralGroup.rotation.z = 0.42;
    world.add(neuralGroup);

    const cellR = 0.46;
    const cellW = Math.sqrt(3) * cellR;
    const cells: { x: number; y: number }[] = [];
    for (let c = 0; c < 4; c += 1) {
      for (let r = 0; r < 4; r += 1) {
        cells.push({ x: c * cellW + (r % 2 ? cellW / 2 : 0), y: r * 1.5 * cellR });
      }
    }
    const sx = cells.reduce((s, p) => s + p.x, 0) / cells.length;
    const sy = cells.reduce((s, p) => s + p.y, 0) / cells.length;
    cells.forEach((p) => {
      p.x -= sx;
      p.y -= sy;
    });

    const synapsePts: number[] = [];
    const synapseLinks: number[] = [];
    cells.forEach((cell, i) => {
      synapsePts.push(cell.x, cell.y, 0);
      const seed = Math.sin(i * 7.31) * 43758.5453;
      if (seed - Math.floor(seed) > 0.45) {
        const j = (i + 1 + Math.floor(Math.abs(seed) % 3)) % cells.length;
        synapseLinks.push(cell.x, cell.y, 0, cells[j].x, cells[j].y, 0);
      }
    });

    const synapseMat = new THREE.LineBasicMaterial({
      color: pal.cool,
      transparent: true,
      opacity: light ? 0.3 : 0.42,
    });
    const synapseGeo = new THREE.BufferGeometry();
    synapseGeo.setAttribute("position", new THREE.Float32BufferAttribute(synapseLinks, 3));
    neuralGroup.add(new THREE.LineSegments(synapseGeo, synapseMat));

    const nodeDotGeo = new THREE.SphereGeometry(0.035, 6, 6);
    const nodeDotMat = new THREE.MeshBasicMaterial({
      color: pal.hot,
      transparent: true,
      opacity: 0.85,
    });
    const synapseDots = new THREE.InstancedMesh(nodeDotGeo, nodeDotMat, cells.length);
    const dummy = new THREE.Object3D();
    cells.forEach((cell, i) => {
      dummy.position.set(cell.x, cell.y, 0);
      dummy.updateMatrix();
      synapseDots.setMatrixAt(i, dummy.matrix);
    });
    neuralGroup.add(synapseDots);

    // Near floor: perspective hex carpet, replaces the old square GridHelper.
    const floorHexGeo = hexGrid(18, 7, 0.9, "xz", 0);
    const floorHexMat = new THREE.LineBasicMaterial({
      color: pal.line,
      transparent: true,
      opacity: light ? 0.2 : 0.18,
    });
    const floorHex = new THREE.LineSegments(floorHexGeo, floorHexMat);
    floorHex.position.set(0, -3.6, -3);
    world.add(floorHex);

    // Bright seam plane: a thin horizon line that reads as the processing floor.
    const seamGeo = new THREE.BufferGeometry();
    seamGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        [-14, -3.55, -3, 14, -3.55, -3, -14, -3.55, -3.6, 14, -3.55, -3.6],
        3,
      ),
    );
    const seamMat = new THREE.LineBasicMaterial({
      color: pal.line,
      transparent: true,
      opacity: light ? 0.14 : 0.12,
    });
    world.add(new THREE.LineSegments(seamGeo, seamMat));

    // ---- node field ---------------------------------------------------------
    const nodeGeo = new THREE.SphereGeometry(1, 10, 10);
    const lanes = [pal.line, pal.cool, pal.hot];
    const nodeMats = lanes.map(
      (c) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.9 }),
    );
    const nodeMeshes = NODES.map((n, i) => {
      const m = new THREE.Mesh(nodeGeo, nodeMats[n.lane]);
      m.position.set(n.x, n.y, n.z);
      m.scale.setScalar(n.r);
      m.userData.phase = i * 0.7;
      m.userData.base = n.r;
      world.add(m);
      return m;
    });

    // ---- edge graph ---------------------------------------------------------
    const edgePts: number[] = [];
    EDGES.forEach(([a, b]) => {
      edgePts.push(NODES[a].x, NODES[a].y, NODES[a].z, NODES[b].x, NODES[b].y, NODES[b].z);
    });
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.Float32BufferAttribute(edgePts, 3));
    const edgeMat = new THREE.LineBasicMaterial({
      color: pal.line,
      transparent: true,
      opacity: isLight() ? 0.22 : 0.2,
    });
    world.add(new THREE.LineSegments(edgeGeo, edgeMat));

    // ---- travelling pulses along the funnel --------------------------------
    const PULSES = 26;
    const pulseGeo = new THREE.BufferGeometry();
    pulseGeo.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(PULSES * 3), 3));
    const pulseMat = new THREE.PointsMaterial({
      color: pal.cool,
      size: 0.075,
      transparent: true,
      opacity: isLight() ? 0.7 : 0.9,
      sizeAttenuation: true,
      depthWrite: false,
      blending: isLight() ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    const pulses = new THREE.Points(pulseGeo, pulseMat);
    world.add(pulses);

    const pulseState = new Float32Array(PULSES).map(() => Math.random());

    // ---- perspective grid floor --------------------------------------------
    const grid = new THREE.GridHelper(46, 30, pal.line, pal.line);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = isLight() ? 0.16 : 0.14;
    grid.position.set(0, -3.4, -2);
    world.add(grid);

    let raf = 0;
    let running = true;
    const clock = new THREE.Clock();
    const pos = pulseGeo.getAttribute("position") as THREE.BufferAttribute;

    function resize() {
      const r = host!.getBoundingClientRect();
      const w = Math.max(r.width, 1);
      const h = Math.max(r.height, 1);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.fov = h < 620 ? 60 : 46;
      camera.updateProjectionMatrix();
    }

    function frame() {
      raf = requestAnimationFrame(frame);
      if (!running) return;
      const t = clock.getElapsedTime();

      // Slow drift keeps it alive without competing with the copy.
      world.rotation.y = Math.sin(t * 0.09) * 0.13;
      world.rotation.x = Math.sin(t * 0.06) * 0.035;

      // Each plane moves at its own rate so the layers separate in depth.
      farHex.rotation.z = 0.18 + t * 0.012;
      farHex.position.y = 0.1 + Math.sin(t * 0.22) * 0.08;
      midHex.rotation.z = -0.35 - t * 0.02;
      midHex.position.x = -2.6 + Math.sin(t * 0.17) * 0.14;
      neuralGroup.rotation.z = 0.42 + Math.sin(t * 0.13) * 0.06;
      neuralGroup.position.y = 1.5 + Math.sin(t * 0.29) * 0.09;
      floorHex.position.z = -3 + ((t * 0.55) % 1.2);

      // Synapses brighten in a slow wave, mimicking signal propagation.
      synapseMat.opacity = (light ? 0.3 : 0.42) + Math.sin(t * 0.9) * 0.12;

      nodeMeshes.forEach((m, i) => {
        const ph = m.userData.phase as number;
        const base = m.userData.base as number;
        m.scale.setScalar(base * (1 + Math.sin(t * 1.6 + ph) * 0.16));
        (m.material as THREE.MeshBasicMaterial).opacity = 0.72 + Math.sin(t * 1.6 + ph) * 0.22;
        m.position.z = NODES[i].z;
      });

      for (let i = 0; i < PULSES; i += 1) {
        pulseState[i] += 0.0032 + (i % 5) * 0.0009;
        if (pulseState[i] > 1) pulseState[i] -= 1;
        const e = EDGES[i % EDGES.length];
        const a = NODES[e[0]];
        const b = NODES[e[1]];
        const s = pulseState[i];
        // ease so pulses accelerate into the merge point
        const k = s * s * (3 - 2 * s);
        pos.setXYZ(
          i,
          a.x + (b.x - a.x) * k,
          a.y + (b.y - a.y) * k,
          a.z + (b.z - a.z) * k,
        );
      }
      pos.needsUpdate = true;

      renderer.render(scene, camera);
    }

    function retheme() {
      const p = palette(isLight());
      nodeMats[0].color.setHex(p.line);
      nodeMats[1].color.setHex(p.cool);
      nodeMats[2].color.setHex(p.hot);
      edgeMat.color.setHex(p.line);
      pulseMat.color.setHex(p.cool);
      farHexMat.color.setHex(p.line);
      midHexMat.color.setHex(p.hot);
      floorHexMat.color.setHex(p.line);
      synapseMat.color.setHex(p.cool);
      nodeDotMat.color.setHex(p.hot);
      seamMat.color.setHex(p.line);
    }

    const onChange = () => retheme();
    const mo = new MutationObserver(onChange);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running) clock.getDelta();
    };
    document.addEventListener("visibilitychange", onVis);

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    if (reduce) {
      // Static composition: one render, no animation loop.
      renderer.render(scene, camera);
    } else {
      frame();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat?.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] opacity-70 [mask-image:radial-gradient(ellipse_70%_62%_at_50%_18%,#000_36%,transparent_82%)] light:opacity-45"
    />
  );
}
