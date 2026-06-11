import { useRef, useEffect } from "react";
import { useMainContext } from "../context/useMainContext";
const START_CELL_SIZE = 168;
const END_CELL_SIZE = 5;
const ANIMATION_DURATION_MS = 900;
// type CanvasProps = {
//   imageUrl: string;
// };
export function Canvas() {
  const { imageCanvasUrl } = useMainContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const hoverActiveRef = useRef(false);
  const animStartRef = useRef(0);
  const originalImageDataRef = useRef<Uint8ClampedArray | null>(null);
  const imageLoadedRef = useRef(false);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Helper functions
  const getRegionAverageColor = (
    data: Uint8ClampedArray,
    w: number,
    h: number,
    x: number,
    y: number,
    regionW: number,
    regionH: number,
  ) => {
    let r = 0,
      g = 0,
      b = 0,
      count = 0;
    const startX = Math.max(0, Math.floor(x));
    const startY = Math.max(0, Math.floor(y));
    const endX = Math.min(w, Math.floor(x + regionW));
    const endY = Math.min(h, Math.floor(y + regionH));
    for (let py = startY; py < endY; py++) {
      for (let px = startX; px < endX; px++) {
        const idx = (py * w + px) * 4;
        r += data[idx];
        g += data[idx + 1];
        b += data[idx + 2];
        count++;
      }
    }
    if (count === 0) return { r: 0, g: 0, b: 0 };
    return { r: r / count, g: g / count, b: b / count };
  };

  const renderMosaic = (cellSize: number) => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    if (cellSize <= END_CELL_SIZE) {
      ctx.drawImage(imgRef.current!, 0, 0, canvas.width, canvas.height);
      return;
    }
    if (!originalImageDataRef.current) return;
    const w = canvas.width,
      h = canvas.height;
    const imgData = originalImageDataRef.current;
    ctx.clearRect(0, 0, w, h);
    const cols = Math.ceil(w / cellSize);
    const rows = Math.ceil(h / cellSize);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * cellSize;
        const y = row * cellSize;
        const cellW = Math.min(cellSize, w - x);
        const cellH = Math.min(cellSize, h - y);
        if (cellW <= 0 || cellH <= 0) continue;
        const avg = getRegionAverageColor(imgData, w, h, x, y, cellW, cellH);
        ctx.fillStyle = `rgb(${avg.r}, ${avg.g}, ${avg.b})`;
        ctx.fillRect(x, y, cellW, cellH);
      }
    }
  };

  const renderOriginal = () => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!imageLoadedRef.current || !ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgRef.current!, 0, 0, canvas.width, canvas.height);
  };

  const startGridAnimation = () => {
    if (!imageLoadedRef.current) return;
    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    hoverActiveRef.current = true;
    animStartRef.current = performance.now();

    const animate = (now: number) => {
      if (!hoverActiveRef.current) {
        if (animFrameIdRef.current)
          cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
        renderOriginal();
        return;
      }
      const elapsed = now - animStartRef.current;
      const progress = Math.min(1, elapsed / ANIMATION_DURATION_MS);
      const eased = 1 - Math.pow(1 - progress, 2);
      let cellSize =
        START_CELL_SIZE + (END_CELL_SIZE - START_CELL_SIZE) * eased;
      cellSize = Math.max(END_CELL_SIZE, Math.min(START_CELL_SIZE, cellSize));
      renderMosaic(cellSize);
      if (progress < 1) {
        animFrameIdRef.current = requestAnimationFrame(animate);
      } else {
        renderMosaic(END_CELL_SIZE);
        animFrameIdRef.current = null;
      }
    };
    animFrameIdRef.current = requestAnimationFrame(animate);
  };

  const onEnter = () => {
    if (!imageLoadedRef.current) return;
    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    hoverActiveRef.current = true;
    renderMosaic(START_CELL_SIZE);
    startGridAnimation();
  };

  const onLeave = () => {
    hoverActiveRef.current = false;
    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    animFrameIdRef.current = null;
    renderOriginal();
  };

  // Setup effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    canvas.width = 340;
    canvas.height = 340;

    const img = new Image();
    imgRef.current = img;
    img.onload = () => {
      if (!ctxRef.current) return;
      ctxRef.current.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imgData = ctxRef.current.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      );
      originalImageDataRef.current = new Uint8ClampedArray(imgData.data);
      imageLoadedRef.current = true;
      renderOriginal();

      canvas.addEventListener("mouseenter", onEnter);
      canvas.addEventListener("mouseleave", onLeave);
      canvas.style.cursor = "pointer";
    };
    img.src = imageCanvasUrl;

    // Cleanup
    return () => {
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []); // run only once on mount

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
}
