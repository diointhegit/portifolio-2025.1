import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
import { RefObject } from "react";

export function UseScramble({ textRef }: { textRef: RefObject<HTMLElement> }) {
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
}
