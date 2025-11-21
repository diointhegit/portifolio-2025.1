import { useContext, useRef, useState } from "react";
import { MenuContext } from "../context/useMenuContext";
import { getSkills } from "@/app/util/getOptions";
import { useKeyboardNavigation } from "@/app/hooks/useKeyboardNavigation";
import { MenuItems } from "../list-items";
import { Container } from "./container";
import { i } from "motion/react-client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Skills = ({ handleClose }: { handleClose: any }) => {
  const { skills, titles } = getSkills();
  const [selected, setSelected] = useState<number>(0);
  const [confirmed, setConfirmed] = useState<any>();

  const handleSelected = (id: number): void => {
    setSelected(id);
    return;
  };

  const handleConfirm = (id?: number) => {
    if (id == 0 && selected != 0) {
      handleSelected(0);
      return;
    }

    if (id && id == selected) {
      setConfirmed(skills[selected]);
      return;
    }

    if (!id) setConfirmed(skills[selected]);
  };

  useKeyboardNavigation({
    list: titles,
    selected,
    setSelected,
    handleConfirm,
    confirmed,
  });

  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".skillsContainer",
        { opacity: 0, x: -15, height: 0 },
        {
          opacity: 1,
          x: 0,
          height: "auto",
          duration: 0.25,
          transformOrigin: "center",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="w-[250px] skillsContainer">
        {confirmed ? (
          <Container path={confirmed} setConfirmed={setConfirmed} />
        ) : (
          <div>
            <div className="w-[200px] outline-1 outline-primary">
              <MenuItems
                margin="space-y-0"
                menuItems={titles}
                confirmed={confirmed}
                handleConfirm={handleConfirm}
                handleSelected={handleSelected}
                selected={selected}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
