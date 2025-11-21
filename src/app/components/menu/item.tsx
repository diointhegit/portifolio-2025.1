"use client";
import { cn } from "@/app/util/cn";
import { BsSquareFill } from "react-icons/bs";
import Cursor from "../../../assets/cursor.svg";
import CursorSelected from "../../../assets/cursor-selected.svg";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/all";
export const Item = ({
  name,
  index,
  selected,
  onSelect,
  confirmed,
  onConfirm,
}: {
  name: string;
  index: number;
  confirmed?: undefined | string;
  selected: undefined | number;
  onConfirm: (arg1: number) => void;
  onSelect?: (arg1: number) => void;
}) => {
  gsap.registerPlugin(useGSAP, ScrambleTextPlugin);
  const menuSelect = new Audio("/menuSelect.wav");
  const menuConfirm = new Audio("/menuConfirm.wav");

  const container = useRef(null);
  useGSAP(
    () => {
      if (selected == index) {
        gsap.to(".selectedState", { scaleX: 1, duration: 0.25 });
        gsap.to(".selectedStateContainer", {
          color: "#dad3b9",
          duration: 0.25,
        });
      }
    },
    { dependencies: [selected], scope: container, revertOnUpdate: true } // re-run only when selection changes
  );
  const textRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (textRef.current != null) {
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
          duration: 0.6,
          scrambleText: {
            text: textRef.current.innerHTML,
            chars: "01<>?/\\[]{}#$%&_ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            speed: 0.4,
            revealDelay: 0.05,
            tweenLength: true,
          },
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <div
      tabIndex={0}
      ref={container}
      className="relative focus:outline-none focus-visible:outline-none"
      id="itemsContainer"
      onMouseEnter={() => {
        if (confirmed === undefined && onSelect) {
          menuSelect.play();
          onSelect(index);
        }
      }}
      onFocus={() => {
        if (confirmed === undefined && onSelect) {
          menuSelect.play();
          onSelect(index);
        }
      }}
    >
      {selected == index && (
        <div className="absolute -translate-x-15 flex items-center   transition-all duration-300 text-3xl">
          <Image
            src={confirmed == undefined ? Cursor : CursorSelected}
            height={20}
            width={20}
            alt="cursor"
            className="rotate-90"
          />
        </div>
      )}

      <div
        onClick={() => {
          menuConfirm.play();
          onConfirm(index);
        }}
        className={cn(
          "cursor-pointer selectedStateContainer px-3 w-full py-1 relative bg-accent text-primary"
        )}
      >
        <div className="absolute selectedState flex items-center gap-5 px-3 bg-primary inset-0 origin-left z-0 w-full scale-x-0"></div>
        <span className="flex items-center gap-5">
          <BsSquareFill className="z-10" />
          <p className="z-10" ref={textRef}>
            {name}
          </p>
        </span>
      </div>
    </div>
  );
};
