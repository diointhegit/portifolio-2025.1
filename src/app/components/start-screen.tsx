import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";
import { cn } from "../util/cn";
import { ScrambleTextPlugin } from "gsap/all";

export default function StartScreen({
  handleStart,
  options,
}: {
  options: any;
  handleStart: () => void;
}) {
  const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState(0);

  function handleConfirm() {
    if (started) {
      handleStart();
      const menuConfirm = new Audio("/MenuConfirm.wav");
      menuConfirm.play();
      options[selected].function();
    }
  }

  const textRef = useRef<HTMLParagraphElement | null>(null);

  gsap.registerPlugin(useGSAP, ScrambleTextPlugin);
  useGSAP(() => {
    if (textRef.current?.innerHTML) {
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
  useKeyboardNavigation({
    list: options,
    selected,
    setSelected,
    handleConfirm,
  });

  useEffect(() => {
    if (!started) {
      const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
          case "Enter":
            e.preventDefault();
            setStarted(true);
            const menuConfirm = new Audio("/MenuConfirm.wav");

            menuConfirm.play();

            break;
        }
      };

      window.addEventListener("keydown", handleKeyDown, true);
      return () => window.removeEventListener("keydown", handleKeyDown, true);
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".startOptions",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
      }
    );
  });

  return (
    <div className="lg:bg-[url('/title-large.png')] bg-[url('/title-small.png')] bg-cover bg-no-repeat h-screen mainMenuStart">
      <div>
        <div>
          <p className="text-white text-center text-3xl pt-30 px-5">
            Hi, i'm Denis
          </p>
          <p className="text-white text-3xl text-center  px-5" ref={textRef}>
            Software Engineer
          </p>
        </div>
      </div>
      {started ? (
        <div className="startOptions">
          <div className="flex items-end h-[60vh] justify-center ">
            <div className=" text-white/60 space-y-5">
              <div className="space-y-5">
                {options.map((item: any, id: number) => {
                  return (
                    <div
                      onMouseEnter={() => {
                        setSelected(id);
                        const menuSelect = new Audio("/MenuSelect.wav");

                        menuSelect.play();
                      }}
                      key={item.title}
                      // className="bg-white px-10 py-2 rounded-tr-full rounded-bl-full relative w-full h-2 flex items-center"
                      className="flex justify-center items-center focus:none focus:outline-none w-[130%] hover:cursor-pointer"
                    >
                      <p
                        tabIndex={0}
                        onClick={handleConfirm}
                        className={cn(
                          "text-center focus:none focus:outline-none ",
                          options[selected].title == item.title
                            ? "text-white"
                            : ""
                        )}
                      >
                        {item.title}
                      </p>
                      {options[selected].title == item.title && (
                        <div className="w-[100px] bg-white h-1 pr-5 mt-8 absolute"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="text-backg"></p>
        </div>
      ) : (
        <div
          className="absolute bottom-20  w-full"
          onClick={() => {
            setStarted(true);
            const menuConfirm = new Audio("/MenuConfirm.wav");

            menuConfirm.play();
          }}
        >
          <p className="text-white h-[60vh] items-center flex flex-col justify-end">
            Click or press Enter to start
          </p>
        </div>
      )}
    </div>
  );
}
