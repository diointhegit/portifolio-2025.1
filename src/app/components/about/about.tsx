import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
import { useRef } from "react";

export const About = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  gsap.registerPlugin(useGSAP, ScrambleTextPlugin);
  useGSAP(() => {
    if (textRef.current && textRef.current.innerHTML) {
      gsap.fromTo(
        textRef.current,
        {
          scrambleText: {
            text: "",
            chars: "01<>?/\\[]{}#$%&_ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            revealDelay: 0.1,
            speed: 0.3,
          },
        },
        {
          duration: 1.5,
          scrambleText: {
            text: textRef.current.innerHTML,
            chars: "01<>?/\\[]{}#$%&_ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            speed: 0.4,
            revealDelay: 0.2,
            tweenLength: true,
          },
          ease: "power2.out",
        }
      );
    }
  });

  return (
    <div ref={container} className="w-[250px] lg:w-auto text-xl bg-background">
      <div className="aboutText flex flex-col gap-5 w-[250px] lg:w-[600px]">
        <p>
          I'm Denis, a passionate Full-Stack Developer who loves turning ideas
          into clean, efficient, and visually engaging products.
        </p>
      </div>
      <p>
        I work mainly with TypeScript, React, Next.js, Tailwind, Node.js, Bun
        and Java, always aiming for performance, accessibility, and great
        developer experience.
      </p>
      <p>
        {" "}
        Worked in Clarice.AI, building real-world solutions with modern web
        technologies.
      </p>
      sa
      <p ref={textRef}>
        Outside of coding, I’m into philosophy, design, video games, and music,
        i play the guitar!
      </p>
    </div>
  );
};
