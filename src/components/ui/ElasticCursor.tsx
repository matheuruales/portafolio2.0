/**
 * Disclaimer: This component is not entirely my own
 */

"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { useMouse } from "@/hooks/use-mouse";
import { usePreloader } from "../preloader";
import { useMediaQuery } from "@/hooks/use-media-query";

// Gsap Ticker Function
function useTicker(callback: any, paused: boolean) {
  useEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback);
    }
    return () => {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
}

const EMPTY = {} as {
  x: Function;
  y: Function;
  r?: Function;
  width?: Function;
  rt?: Function;
  sx?: Function;
  sy?: Function;
};
function useInstance(value = {}) {
  const ref = useRef(EMPTY);
  if (ref.current === EMPTY) {
    ref.current = typeof value === "function" ? value() : value;
  }
  return ref.current;
}

// Function for Mouse Move Scale Change
function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 735, 0.35);
}

// Function For Mouse Movement Angle in Degrees
function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

function getRekt(el: HTMLElement) {
  if (el.classList.contains("cursor-can-hover"))
    return el.getBoundingClientRect();
  else if (el.parentElement?.classList.contains("cursor-can-hover"))
    return el.parentElement.getBoundingClientRect();
  else if (
    el.parentElement?.parentElement?.classList.contains("cursor-can-hover")
  )
    return el.parentElement.parentElement.getBoundingClientRect();
  return null;
}

const CURSOR_DIAMETER = 50;

function ElasticCursor() {
  const { loadingPercent, isLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 768px)");

  // React Refs for Jelly Blob and Text
  const jellyRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const { x, y } = useMouse();
  const lastMouseRef = useRef({ x: 0, y: 0 });

  // Save pos and velocity Objects
  const pos = useInstance(() => ({ x: 0, y: 0 }));
  const vel = useInstance(() => ({ x: 0, y: 0 }));
  const set = useInstance();

  // Set GSAP quick setter Values on useLayoutEffect Update
  useLayoutEffect(() => {
    set.x = gsap.quickSetter(jellyRef.current, "x", "px");
    set.y = gsap.quickSetter(jellyRef.current, "y", "px");
    set.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    set.sx = gsap.quickSetter(jellyRef.current, "scaleX");
    set.sy = gsap.quickSetter(jellyRef.current, "scaleY");
    set.width = gsap.quickSetter(jellyRef.current, "width", "px");
  }, []);

  // Start Animation loop
  const loop = useCallback(() => {
    if (!set.width || !set.sx || !set.sy || !set.r) return;
    // Calculate angle and scale based on velocity
    var rotation = getAngle(+vel.x, +vel.y); // Mouse Move Angle
    var scale = getScale(+vel.x, +vel.y); // Blob Squeeze Amount

    // Set GSAP quick setter Values on Loop Function
    if (!isHovering && !isLoading) {
      set.x(pos.x);
      set.y(pos.y);
      set.width(50 + scale * 300);
      set.r(rotation);
      set.sx(1 + scale);
      set.sy(1 - scale * 2);
    } else {
      set.r(0);
    }
  }, [isHovering, isLoading]);

  // Dot ref — actualización directa al DOM sin pasar por React state
  const dotRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (isMobile) return;
    const moveDot = (e: MouseEvent) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    };
    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, [isMobile]);

  const [cursorMoved, setCursorMoved] = useState(false);
  useEffect(() => {
    lastMouseRef.current = { x, y };
  }, [x, y]);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      if (!jellyRef.current) return;
      if (isHovering) {
        setIsHovering(false);
        gsap.to(jellyRef.current, {
          borderRadius: 50,
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
          duration: 0.2,
          ease: "power2.out",
        });
      }

      const { x: lastX, y: lastY } = lastMouseRef.current;
      pos.x = lastX;
      pos.y = lastY;
      if (set.x && set.y) {
        set.x(lastX);
        set.y(lastY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHovering, isMobile, pos, set]);
  // Run on Mouse Move
  useLayoutEffect(() => {
    if (isMobile) return;
    // Caluclate Everything Function
    const setFromEvent = (e: MouseEvent) => {
      if (!jellyRef.current) return;
      if (!cursorMoved) {
        setCursorMoved(true);
      }
      const el = e.target as HTMLElement;
      const hoverElemRect = getRekt(el);
      if (hoverElemRect) {
        const rect = el.getBoundingClientRect();
        setIsHovering(true);
        gsap.to(jellyRef.current, {
          rotate: 0,
          duration: 0,
        });
        gsap.to(jellyRef.current, {
          width: el.offsetWidth + 20,
          height: el.offsetHeight + 20,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          borderRadius: 10,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        });

        // return;
      } else {
        gsap.to(jellyRef.current, {
          borderRadius: 50,
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
        });
        setIsHovering(false);
      }
      // Mouse X and Y
      const x = e.clientX;
      const y = e.clientY;

      // Animate Position and calculate Velocity with GSAP
      gsap.to(pos, {
        x: x,
        y: y,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        onUpdate: () => {
          // @ts-ignore
          vel.x = (x - pos.x) * 1.2;
          // @ts-ignore
          vel.y = (y - pos.y) * 1.2;
        },
      });

      loop();
    };

    if (!isLoading) window.addEventListener("mousemove", setFromEvent);
    return () => {
      if (!isLoading) window.removeEventListener("mousemove", setFromEvent);
    };
  }, [isLoading]);

  useEffect(() => {
    if (!jellyRef.current) return;
    if (isLoading) {
      jellyRef.current.style.height = "2rem";
      jellyRef.current.style.borderRadius = "1rem";
      jellyRef.current.style.width = loadingPercent * 2 + "vw";
      return;
    }

    jellyRef.current.style.width = `${CURSOR_DIAMETER}px`;
    jellyRef.current.style.height = `${CURSOR_DIAMETER}px`;
    jellyRef.current.style.borderRadius = "50%";
  }, [loadingPercent, isLoading]);

  useTicker(loop, isLoading || !cursorMoved || isMobile);
  if (isMobile) return null;
  // Return UI
  return (
    <>
      <div
        ref={jellyRef}
        id={"jelly-id"}
        className={cn(
          `w-[${CURSOR_DIAMETER}px] h-[${CURSOR_DIAMETER}px] border-2 border-black dark:border-white`,
          "jelly-blob fixed left-0 top-0 rounded-lg z-[999] pointer-events-none will-change-transform",
          "translate-x-[-50%] translate-y-[-50%]"
        )}
        style={{
          zIndex: 100,
          backdropFilter: "invert(100%)",
          opacity: cursorMoved ? 1 : 0,
        }}
      ></div>
      <div
        ref={dotRef}
        className="w-3 h-3 rounded-full fixed top-0 left-0 pointer-events-none"
        style={{ backdropFilter: "invert(100%)", opacity: cursorMoved ? 1 : 0 }}
      />
    </>
  );
}

export default ElasticCursor;
