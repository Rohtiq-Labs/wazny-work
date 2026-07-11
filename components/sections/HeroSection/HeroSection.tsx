"use client";

import { useEffect, useRef } from "react";
import { HERO_MEDIA } from "@/data/media";
import ArrowIcon from "@/components/shared/ArrowIcon";
import MediaCover from "@/components/shared/MediaCover";

const CYCLE_WORDS = ["Automotive", "Aircraft", "Marine"];

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const cycleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    heroRef.current?.classList.add("loaded");
  }, []);

  useEffect(() => {
    let wordIndex = 0;
    const cycleEl = cycleRef.current;
    if (!cycleEl) return;

    const interval = setInterval(() => {
      wordIndex = (wordIndex + 1) % CYCLE_WORDS.length;
      cycleEl.style.transition = "opacity .5s ease, transform .5s ease";
      cycleEl.style.opacity = "0";
      cycleEl.style.transform = "translateY(6px)";

      setTimeout(() => {
        cycleEl.textContent = CYCLE_WORDS[wordIndex];
        cycleEl.style.transform = "translateY(-6px)";
        requestAnimationFrame(() => {
          cycleEl.style.opacity = "0.85";
          cycleEl.style.transform = "translateY(0)";
        });
      }, 500);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-media">
        <MediaCover {...HERO_MEDIA} priority sizes="100vw" />
      </div>
      <div className="grain" />
      <div className="hero-top">
        <div className="hero-cycle-wrap">
          <div className="hero-cycle">
            <span ref={cycleRef}>Automotive</span>
          </div>
        </div>
      </div>

      <div className="hero-mid">
        <h1 className="hero-title">
          <span className="line">
            <span>WAZNY</span>
          </span>
          <span className="line">
            <span>WORKS</span>
          </span>
        </h1>
        <p className="hero-sub">Protecting what moves you.</p>
      </div>

      <div className="hero-bottom">
        <a href="#book" className="btn on-dark">
          Book an appointment
          <ArrowIcon />
        </a>
        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="stick" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
