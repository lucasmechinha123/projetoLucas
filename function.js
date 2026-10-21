 const QUANTIDADE = 75, VELOCIDADE = 0.35, RAIO_MIN = 1.5, RAIO_MAX = 3.2, DIST = 130;
  const CORES = ["94,224,196", "120,170,255"];
  const mouse = { x: -9999, y: -9999 };
  const canvas = document.getElementById("bolinhas");
  const ctx = canvas.getContext("2d");
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, bolinhas = [];

  function ajustar() {
    const dpr = window.devicePixelRatio || 1;
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  const aleat = (a, b) => a + Math.random() * (b - a);
  function criar() {
    return {
      x: aleat(0, w), y: aleat(0, h), r: aleat(RAIO_MIN, RAIO_MAX),
      vx: aleat(-1, 1) * VELOCIDADE, vy: aleat(-1, 1) * VELOCIDADE,
      cor: CORES[Math.floor(Math.random() * CORES.length)],
      alpha: aleat(0.6, 1)
    };
  }
  function desenhar() {
    ctx.clearRect(0, 0, w, h);
    for (const b of bolinhas) {
      if (!reduzir) {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;
      }
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + b.cor + "," + b.alpha + ")";
      ctx.shadowColor = "rgba(" + b.cor + ",.9)";
      ctx.shadowBlur = 10;
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    ctx.lineWidth = 1;
    for (let i = 0; i < bolinhas.length; i++) {
      const a = bolinhas[i];
      for (let j = i + 1; j < bolinhas.length; j++) {
        const c = bolinhas[j];
        const d = Math.hypot(a.x - c.x, a.y - c.y);
        if (d < DIST) {
          ctx.strokeStyle = "rgba(94,224,196," + (1 - d / DIST) * 0.35 + ")";
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(c.x, c.y);
          ctx.stroke();
        }
      }
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < DIST * 1.4) {
        ctx.strokeStyle = "rgba(120,170,255," + (1 - dm / (DIST * 1.4)) * 0.6 + ")";
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
    if (!reduzir) requestAnimationFrame(desenhar);
  }
  ajustar();
  bolinhas = Array.from({ length: QUANTIDADE }, criar);
  desenhar();
  window.addEventListener("resize", () => { ajustar(); if (reduzir) desenhar(); });
  window.addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });