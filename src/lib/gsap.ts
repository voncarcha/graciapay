"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

export type StaggerOptions = {
  staggerAmount?: number;
  delay?: number;
  duration?: number;
  ease?: string;
  startPosition?: string;
};

export const ensureGsapWithScrollTrigger = (): void => {
  if (pluginsRegistered) return;
  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
};

export const createStaggerAnimation = (
  selector: string,
  options: StaggerOptions = {}
): (() => void) => {
  ensureGsapWithScrollTrigger();

  const {
    staggerAmount = 0.4,
    delay = 300,
    duration = 0.8,
    ease = "power2.out",
    startPosition = "top 70%",
  } = options;

  gsap.set(selector, { opacity: 0, y: 30, visibility: "hidden" });

  const timeoutId = window.setTimeout(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        toggleActions: "play none none none",
        start: startPosition,
      },
    });

    timeline.to(selector, {
      opacity: 1,
      y: 0,
      visibility: "visible",
      duration,
      ease,
      stagger: { amount: staggerAmount, from: "start" },
    });
  }, delay);

  return () => window.clearTimeout(timeoutId);
};

export const refreshScrollTriggersDelayed = (delayMs = 800): (() => void) => {
  ensureGsapWithScrollTrigger();
  const id = window.setTimeout(() => ScrollTrigger.refresh(), delayMs);
  return () => window.clearTimeout(id);
};

export const animateWithGsap = (
  target: gsap.TweenTarget,
  animationProps: gsap.TweenVars,
  scrollProps: Partial<ScrollTrigger.Vars> = {}
): gsap.core.Tween => {
  ensureGsapWithScrollTrigger();
  return gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target as Element | string,
      toggleActions: "play none none none",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export { gsap, ScrollTrigger };


