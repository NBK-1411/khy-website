"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { assets } from "../data";

const testimonials = [
  {
    quote:
      "We are extremely satisfied with the quality, design, and professionalism delivered by this Khy Business Ltd. Their products transformed our workspace into a modern, comfortable, and highly functional environment. From consultation to installation, the service was excellent and timely. Highly recommended for businesses seeking durable and stylish office furniture solutions.",
    name: "Shirley Assa-Awuah",
    role: "Equinix Maine One, Country Manager",
  },
  {
    quote:
      "Working with Khy was a great experience. Their attention to detail, quality craftsmanship, and excellent customer service exceeded our expectations. The furniture not only enhanced the appearance of our office but also improved comfort and productivity within our workspace. We would confidently recommend them to any organization looking for reliable office furnishing solutions.",
    name: "Ellis Bruce-Quaye",
    role: "Expro, Operations Manager",
  },
  {
    quote:
      "Working with Khy was a fantastic experience. Their team brought our vision to life by transforming ideas into spaces that exceeded our expectations. They seamlessly balanced creativity and functionality, delivering a project that reflects true architectural excellence.",
    name: "Ferdinard Johnny Doe",
    role: "Glico, Contractor",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const testimonial = testimonials[active];

  const move = (direction: 1 | -1) => {
    setDirection(direction);
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonial-section" aria-labelledby="testimonial-title">
      <Image
        className="testimonial-image"
        src={assets.homeAccent}
        alt="Yellow lounge sofa"
        width={1056}
        height={520}
      />
      <div className="testimonial-copy">
        <p className="eyebrow">Testimonial</p>
        <h2 id="testimonial-title">Our client say</h2>
        <div className={`testimonial-panel ${direction === 1 ? "is-next" : "is-prev"}`} key={active}>
          <blockquote>“{testimonial.quote}”</blockquote>
          <p className="quote-name">
            - {testimonial.name}
            <span>({testimonial.role})</span>
          </p>
        </div>
        <div className="testimonial-controls" aria-label="Testimonial controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial">
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
