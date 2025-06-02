"use client";
import { useState, useEffect, useRef } from "react";

export default function SmoothFollower() {
  const [isClient, setIsClient] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.2;

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Sử dụng MutationObserver để theo dõi thay đổi DOM
    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll(
        "a, button, img, input, textarea, select, [data-cursor-hover]"
      );

      // Xóa tất cả event listeners cũ
      document.querySelectorAll("[data-cursor-hover-bound]").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeAttribute("data-cursor-hover-bound");
      });

      // Thêm event listeners mới
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.setAttribute("data-cursor-hover-bound", "true");
      });
    });

    // Bắt đầu quan sát toàn bộ document
    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });

    const animate = () => {
      const lerp = (start: number, end: number, factor: number) =>
        start + (end - start) * factor;

      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      document.querySelectorAll("[data-cursor-hover-bound]").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        className="absolute rounded-full bg-white"
        style={{
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />
      <div
        className="absolute rounded-full border border-white"
        style={{
          width: isHovering ? "44px" : "28px",
          height: isHovering ? "44px" : "28px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </div>
  );
}
