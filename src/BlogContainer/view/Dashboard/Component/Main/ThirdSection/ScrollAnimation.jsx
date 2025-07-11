import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollAnimation = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    textRefs.current.forEach((textElement, index) => {
      if (!textElement) return;

      let originalText = textElement.textContent.trim();
      const splitText = originalText
        .split("")
        .map((char, i) => `<span data-index="${i}">${char}</span>`)
        .join("");

      textElement.innerHTML = splitText;
      const chars = textElement.querySelectorAll("span");

      gsap.fromTo(
        chars,
        { color: "rgb(255, 255, 255, 0.2)" }, // Initial color (gray)
        {
          color: "rgb(255, 255, 255)", // Change to black
          stagger: 0.1, // Smooth transition effect
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textElement,
            start: "top 60%",
            end: "top 30%",
            scrub: true,
            onLeaveBack: () => {
              gsap.to(chars, { color: "rgb(255, 255, 255, 0.2)", duration: 1 });
            },
          },
        }
      );
    });
  }, []);

  return (
    <div className="heading-title lg:text-5xl md:text-3xl text-[16px] font-semibold lg:leading-[64px] md:leading-[48px] leading-[1.5] max-w-[800px] m-auto">
      {[
        "MAKING CREDIT WORK FOR YOU.",
        "we started BON with one simple idea: credit should work for you, not against you.",
        "so we built an AI that works for you-finding the right card, applying with precision, managing bills, boosting scores, and unlocking rewards.",
        "this is credit, finally done right. join BON, and take back control.",
        "this is the new way. the smarter way. the way it should have always been.",
        "step in and make credit work for you."
      ].map((text, i) => (
        <div
          key={i}
          className="animate"
          ref={(el) => (textRefs.current[i] = el)}>
          {text}
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
