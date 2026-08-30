"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.45,

      smoothWheel: true,

      wheelMultiplier: 0.85,

      touchMultiplier: 1,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);

      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    /*LINKS INTERNOS #planos / #streaming / #extras / #telefonia / #cobertura / etc*/

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const anchor = target.closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const section = document.querySelector(href);

      if (!section) {
        return;
      }

      event.preventDefault();

      lenis.scrollTo(section as HTMLElement, {
        offset: -80,

        duration: 1.6,

        easing: (t) =>
          Math.min(
            1,
            1.001 - Math.pow(2, -10 * t)
          ),
      });
    };

    document.addEventListener(
      "click",
      handleAnchorClick
    );

    return () => {
      document.removeEventListener(
        "click",
        handleAnchorClick
      );

      cancelAnimationFrame(rafId);

      lenis.destroy();
    };
  }, []);

  return null;
}