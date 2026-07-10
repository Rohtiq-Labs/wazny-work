"use client";

import { useCallback, useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "They treated my car the way a conservator treats a painting — I have never trusted anyone else with it since.",
    by: "— M. Alvarez, Private Collector",
  },
  {
    quote:
      "Wazny Works flew out to prep the aircraft before delivery. The finish looked factory new, if the factory cared this much.",
    by: "— J. Petronis, Aviation Client",
  },
  {
    quote:
      "Quiet, exact, uncompromising. My detailer for a decade now, and the only one I'd let near the boat.",
    by: "— R. Okafor, Marine Owner",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showTestimonial = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testi" id="testimonials">
      <div className="mark">&quot;</div>
      <div className="reveal">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            className={`testi-slide${activeIndex === index ? " active" : ""}`}
            key={testimonial.by}
          >
            <p className="quote">{testimonial.quote}</p>
            <div className="by">{testimonial.by}</div>
          </div>
        ))}
      </div>
      <div className="testi-nav">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`testi-dot${activeIndex === index ? " active" : ""}`}
            data-i={index}
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => showTestimonial(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
