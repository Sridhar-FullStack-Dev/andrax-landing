"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import "./PixelCursor.scss";

export default function PixelCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cells, setCells] = useState<number[]>([]);

  const PIXEL_SIZE = 110;

  useEffect(() => {
    const calculateGrid = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;

      const cols = Math.ceil(clientWidth / PIXEL_SIZE);
      const rows = Math.ceil(clientHeight / PIXEL_SIZE);

      const totalCells = cols * rows;
      setCells(Array.from({ length: totalCells }, (_, i) => i));
      containerRef.current.style.setProperty("--cols", cols.toString());
      containerRef.current.style.setProperty("--pixel-size", `${PIXEL_SIZE}px`);
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
    const cols = Math.ceil(rect.width / PIXEL_SIZE);

    const cellWidth = rect.width / cols;
    const cellHeight = PIXEL_SIZE;

    const col = Math.floor(x / cellWidth);
    const row = Math.floor(y / cellHeight);

    const index = row * cols + col;
    const cell = containerRef.current.children[index] as HTMLElement;

    if (cell) {
      gsap.killTweensOf(cell);

      gsap.set(cell, {
        opacity: 1,
        scale: 1,
        backgroundColor: "#9f9d98",
      });

      gsap.to(cell, {
        opacity: 0,
        scale: 1,
        duration: 1.0,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cells]);

  return (
    <div
      ref={containerRef}
      className="pixel-cursor-container"
      style={
        {
          display: "grid",
          gridTemplateColumns: `repeat(var(--cols), 1fr)`,
        } as React.CSSProperties
      }
    >
      {cells.map((id) => (
        <div key={id} className="pixel-cell" style={{ height: PIXEL_SIZE }} />
      ))}
    </div>
  );
}
