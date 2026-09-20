"use client";

import { animate, inView, stagger, type AnimationPlaybackControls } from "motion";
import { useEffect } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ScrollMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    const activeAnimations: AnimationPlaybackControls[] = [];
    const observers: Array<() => void> = [];
    const play = (...args: Parameters<typeof animate>) => {
      const controls = animate(...args);
      activeAnimations.push(controls);
      return controls;
    };

    const revealTargets = document.querySelectorAll(
      "[data-motion-group] > [data-motion], [data-motion-project] > [data-motion], [data-motion-project] [data-motion='meta-row'], [data-motion-project] [data-motion-device], [data-motion-row]",
    );
    play(revealTargets, { opacity: 0 }, { duration: 0 });

    observers.push(
      inView(
        "[data-motion-group]",
        (group) => {
          const items = Array.from(group.querySelectorAll(":scope > [data-motion]"));
          if (!items.length) return;

          play(
            items,
            { opacity: [0, 1], y: [34, 0] },
            { duration: 0.72, delay: stagger(0.1), ease: easeOut },
          );
        },
        { amount: 0.2, margin: "0px 0px -8% 0px" },
      ),
    );

    observers.push(
      inView(
        "[data-motion-project]",
        (project) => {
          const reverse = project.classList.contains("project--reverse");
          const index = project.querySelector("[data-motion='project-index']");
          const media = project.querySelector("[data-motion='project-media']");
          const copy = project.querySelector("[data-motion='project-copy']");
          const desktop = project.querySelector("[data-motion-device='desktop']");
          const phone = project.querySelector("[data-motion-device='phone']");
          const metaRows = project.querySelectorAll("[data-motion='meta-row']");

          if (index) {
            play(index, { opacity: [0, 1], scaleY: [0.65, 1] }, { duration: 0.72, ease: easeOut });
          }
          if (media) {
            play(
              media,
              { opacity: [0, 1], y: [54, 0], scale: [0.965, 1] },
              { duration: 0.9, delay: 0.06, ease: easeOut },
            );
          }
          if (desktop) {
            play(desktop, { opacity: [0, 1], x: [-24, 0] }, { duration: 0.78, delay: 0.22, ease: easeOut });
          }
          if (phone) {
            play(
              phone,
              { opacity: [0, 1], y: [38, 0], scale: [0.9, 1] },
              { duration: 0.9, delay: 0.36, ease: easeOut },
            );
          }
          if (copy) {
            play(
              copy,
              { opacity: [0, 1], x: [reverse ? -42 : 42, 0] },
              { duration: 0.82, delay: 0.16, ease: easeOut },
            );
          }
          if (metaRows.length) {
            play(
              metaRows,
              { opacity: [0, 1], y: [16, 0] },
              { duration: 0.5, delay: stagger(0.07, { startDelay: 0.42 }), ease: easeOut },
            );
          }
        },
        { amount: 0.16, margin: "0px 0px -6% 0px" },
      ),
    );

    observers.push(
      inView(
        "[data-motion-row]",
        (row) => {
          play(
            row,
            { opacity: [0, 1], x: [-22, 0] },
            { duration: 0.62, delay: Number(row.getAttribute("data-motion-delay") ?? 0), ease: easeOut },
          );
        },
        { amount: 0.35, margin: "0px 0px -5% 0px" },
      ),
    );

    return () => {
      observers.forEach((stop) => stop());
      activeAnimations.forEach((animation) => animation.stop());
    };
  }, []);

  return null;
}
