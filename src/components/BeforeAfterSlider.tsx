import { useCallback, useEffect, useRef, useState } from "react";
import { GripVertical } from "lucide-react";

interface Props {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  alt = "Before and after comparison",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-card select-none cursor-ew-resize bg-muted"
      onMouseDown={(e) => { dragging.current = true; setFromClientX(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; setFromClientX(e.touches[0].clientX); }}
    >
      {/* After (full) */}
      <img src={after} alt={alt} className="absolute inset-0 h-full w-full object-cover pointer-events-none" draggable={false} />
      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={alt}
          className="h-full w-full object-cover"
          style={{ width: containerRef.current?.clientWidth ?? "100%", maxWidth: "none" }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-bold text-foreground shadow">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow">
        {afterLabel}
      </span>

      {/* Divider + handle */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none" style={{ left: `${pos}%` }} />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-11 w-11 place-items-center rounded-full bg-white text-primary shadow-lg ring-2 ring-primary transition-transform hover:scale-110"
        style={{ left: `${pos}%` }}
      >
        <GripVertical className="h-5 w-5" />
      </div>
    </div>
  );
}
