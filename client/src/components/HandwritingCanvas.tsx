import { useEffect, useRef, useState } from "react";

const HandwritingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingWrapperRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 640, height: 360 });

  useEffect(() => {
    const updateSize = () => {
      const wrapper = drawingWrapperRef.current;
      if (!wrapper) return;
      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;
      if (!width || !height) return;
      setCanvasSize({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.lineWidth = 4;
    context.lineCap = "round";
    context.strokeStyle = "#ffffff";
    setCtx(context);
  }, [canvasSize]);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    const { offsetX, offsetY } = getCoordinates(e);
    ctx?.beginPath();
    ctx?.moveTo(offsetX, offsetY);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing || !ctx) return;
    const { offsetX, offsetY } = getCoordinates(e);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.preventDefault();
    setIsDrawing(false);
    ctx?.closePath();
  };

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      const touch = e.touches[0];
      return {
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top,
      };
    } else {
      return { offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY };
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 min-h-[calc(100vh-5rem)]">
        <section className="flex-1 min-h-[40vh] rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/40">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-400">
                リアルタイム反映（準備中）
              </p>
              <h1 className="mt-2 text-2xl font-semibold">
                手書き入力のプレビュー
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                バックエンドと接続したら、ここに認識結果が並びます。
              </p>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              coming soon
            </span>
          </div>
          <div className="mt-6 flex h-full flex-col gap-4 rounded-2xl border border-dashed border-white/20 bg-slate-900/60 p-6 text-slate-400">
            <p className="text-sm">
              ※ 現在は枠のみです。API連携後に描画内容がテキストやSVGで表示されます。
            </p>
            <div className="flex flex-1 flex-col gap-2 rounded-xl bg-black/20 p-4">
              <div className="h-3 w-32 rounded-full bg-white/10" />
              <div className="h-3 w-48 rounded-full bg-white/5" />
              <div className="h-3 w-40 rounded-full bg-white/5" />
              <div className="h-3 w-20 rounded-full bg-white/10" />
            </div>
          </div>
        </section>

        <section className="flex-1 min-h-[40vh] rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/40">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-400">
                キャンバス
              </p>
              <h2 className="text-xl font-semibold">自由に書いてみてください</h2>
            </div>
            <button
              onClick={clearCanvas}
              className="rounded-2xl border border-red-400/50 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-200 hover:bg-red-500/20"
            >
              クリア
            </button>
          </div>
          <div
            ref={drawingWrapperRef}
            className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-2"
          >
            <canvas
              ref={canvasRef}
              className="h-full w-full rounded-2xl bg-transparent touch-none"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HandwritingCanvas;
