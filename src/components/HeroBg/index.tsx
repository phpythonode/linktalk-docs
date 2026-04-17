import {useEffect, useRef} from 'react';

export default function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;
    let t = 0;

    // ── resize ────────────────────────────────────────
    function resize() {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // ── 1. 音频波形 ───────────────────────────────────
    // 模拟多层声波，从中心向两侧扩散
    type WaveBar = { phase: number; speed: number; color: string; yOffset: number };
    const waveBands: WaveBar[] = [
      { phase: 0,    speed: 0.04,  color: 'rgba(36,112,204,0.55)',  yOffset: 0 },
      { phase: 1.2,  speed: 0.055, color: 'rgba(74,158,255,0.35)',  yOffset: 0 },
      { phase: 2.5,  speed: 0.03,  color: 'rgba(124,58,237,0.25)',  yOffset: 0 },
    ];

    function drawAudioWave() {
      const cx = W * 0.5;
      const cy = H * 0.52;
      const totalWidth = W * 0.72;
      const barCount = 64;
      const barW = 3;
      const gap = (totalWidth - barCount * barW) / (barCount - 1);

      waveBands.forEach(band => {
        band.phase += band.speed;
        ctx.beginPath();
        for (let i = 0; i < barCount; i++) {
          const x = cx - totalWidth / 2 + i * (barW + gap);
          // 多频叠加，中间高两侧低
          const envelope = Math.sin((i / barCount) * Math.PI);
          const h =
            envelope * 60 * Math.abs(Math.sin(i * 0.28 + band.phase)) +
            envelope * 30 * Math.abs(Math.sin(i * 0.55 + band.phase * 1.3)) +
            envelope * 15 * Math.abs(Math.sin(i * 0.9  + band.phase * 0.7)) +
            4;

          const grad = ctx.createLinearGradient(x, cy - h, x, cy + h);
          grad.addColorStop(0,   'rgba(74,158,255,0)');
          grad.addColorStop(0.3, band.color);
          grad.addColorStop(0.5, band.color);
          grad.addColorStop(1,   'rgba(74,158,255,0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.roundRect(x, cy - h, barW, h * 2, 2);
          ctx.fill();
        }
      });
    }

    // ── 2. 地球经纬线（椭圆投影）────────────────────
    function drawGlobe() {
      const cx = W * 0.82;
      const cy = H * 0.42;
      const rx = Math.min(W, H) * 0.18;
      const ry = rx;

      ctx.save();
      // 裁剪到圆形内
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.clip();

      const lineColor = 'rgba(36,112,204,0.18)';
      const lineW = 0.8;

      // 纬线
      for (let lat = -80; lat <= 80; lat += 20) {
        const latRad = (lat * Math.PI) / 180;
        const yr = ry * Math.cos(latRad);
        const yc = cy + ry * Math.sin(latRad);
        ctx.beginPath();
        ctx.ellipse(cx, yc, rx, yr * 0.28, 0, 0, Math.PI * 2);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineW;
        ctx.stroke();
      }

      // 经线（随时间旋转）
      const rotOffset = t * 0.003;
      for (let i = 0; i < 9; i++) {
        const angle = (i / 9) * Math.PI + rotOffset;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx * Math.abs(Math.cos(angle)), ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineW;
        ctx.stroke();
      }

      // 高亮一条经线
      const hlAngle = rotOffset % Math.PI;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx * Math.abs(Math.cos(hlAngle)), ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(74,158,255,0.45)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.restore();

      // 外圈光晕
      const glow = ctx.createRadialGradient(cx, cy, rx * 0.7, cx, cy, rx * 1.2);
      glow.addColorStop(0, 'rgba(36,112,204,0)');
      glow.addColorStop(1, 'rgba(36,112,204,0.12)');
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx * 1.2, ry * 1.2, 0, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // 外圆边框
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(36,112,204,0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // ── 3. 数据流光线（从地球射出）──────────────────
    type DataLine = {
      startAngle: number; len: number;
      speed: number; progress: number;
      alpha: number; active: boolean; delay: number;
    };

    const dataLines: DataLine[] = Array.from({length: 12}, (_, i) => ({
      startAngle: (i / 12) * Math.PI * 2,
      len: 60 + Math.random() * 80,
      speed: 0.012 + Math.random() * 0.01,
      progress: Math.random(),
      alpha: 0.6 + Math.random() * 0.4,
      active: Math.random() > 0.5,
      delay: Math.random() * 200,
    }));

    function drawDataLines() {
      const cx = W * 0.82;
      const cy = H * 0.42;
      const r  = Math.min(W, H) * 0.18;

      dataLines.forEach(line => {
        if (!line.active) {
          line.delay--;
          if (line.delay <= 0) { line.active = true; line.progress = 0; }
          return;
        }
        line.progress += line.speed;
        if (line.progress > 1) {
          line.active = false;
          line.delay = 30 + Math.random() * 120;
          line.startAngle = Math.random() * Math.PI * 2;
          return;
        }

        const sx = cx + Math.cos(line.startAngle) * r;
        const sy = cy + Math.sin(line.startAngle) * r;
        const ex = sx + Math.cos(line.startAngle) * line.len * line.progress;
        const ey = sy + Math.sin(line.startAngle) * line.len * line.progress;

        const grad = ctx.createLinearGradient(sx, sy, ex, ey);
        grad.addColorStop(0, `rgba(74,158,255,${line.alpha})`);
        grad.addColorStop(1, `rgba(74,158,255,0)`);
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // 头部光点
        ctx.beginPath();
        ctx.arc(ex, ey, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,220,255,${line.alpha * line.progress})`;
        ctx.fill();
      });
    }

    // ── 4. 水平扫描线 ────────────────────────────────
    function drawScanLine() {
      const y = ((t * 0.6) % (H + 40)) - 20;
      const grad = ctx.createLinearGradient(0, y - 20, 0, y + 20);
      grad.addColorStop(0,   'rgba(36,112,204,0)');
      grad.addColorStop(0.5, 'rgba(36,112,204,0.06)');
      grad.addColorStop(1,   'rgba(36,112,204,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, y - 20, W, 40);
    }

    // ── 5. 角落装饰框 ────────────────────────────────
    function drawCornerDeco() {
      const size = 24;
      const pad  = 28;
      const color = 'rgba(36,112,204,0.35)';
      const lw = 1.5;

      [[pad, pad], [W - pad, pad], [pad, H - pad], [W - pad, H - pad]].forEach(([x, y], i) => {
        const sx = i % 2 === 0 ? 1 : -1;
        const sy = i < 2 ? 1 : -1;
        ctx.strokeStyle = color;
        ctx.lineWidth = lw;
        ctx.beginPath();
        ctx.moveTo(x, y + sy * size);
        ctx.lineTo(x, y);
        ctx.lineTo(x + sx * size, y);
        ctx.stroke();
      });
    }

    // ── 主循环 ───────────────────────────────────────
    function draw() {
      ctx.clearRect(0, 0, W, H);
      t++;

      drawScanLine();
      drawAudioWave();
      drawCornerDeco();

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
