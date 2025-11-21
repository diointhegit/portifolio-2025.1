import { getProjects } from "../../util/getOptions";
import { MenuItems } from "../list-items";
import { useContext, useRef, useState } from "react";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
import { Container } from "./container";
import { MenuContext } from "../context/useMenuContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Projects = ({ handleClose }: { handleClose: any }) => {
  const { projects, titles } = getProjects();

  const [selected, setSelected] = useState<number>(0);
  const [confirmed, setConfirmed] = useState<any>();

  const handleSelected = (id: number): void => {
    setSelected(id);
    return;
  };

  const handleConfirm = () => {
    setConfirmed(projects[selected]);
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
        ".projectsContainer",
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
      <div className="w-[250px] projectsContainer">
        {confirmed ? (
          <Container confirmedProject={confirmed} setConfirmed={setConfirmed} />
        ) : (
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
        )}
      </div>
    </div>
  );
};
