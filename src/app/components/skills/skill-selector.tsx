import { useKeyboardNavigation } from "@/app/hooks/useKeyboardNavigation";
import { MenuItems } from "../list-items";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const SkillSelector = ({
  skills,
  selected,
  setSelected,
  handleSelected,
}: {
  skills: any;
  selected: any;
  setSelected: any;
  handleSelected: any;
}) => {
  const handleConfirm = () => {
    return;
  };

  useKeyboardNavigation({
    list: skills,
    selected,
    setSelected,
  });
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".skillsContainer",
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.25,
        }
      );
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <div className="space-y-2 w-[200px] skillsContainer ">
        <div className=" outline-1 outline-primary ">
          <div>
            <MenuItems
              margin="space-y-0"
              hasMoreProps={true}
              menuItems={skills}
              handleConfirm={handleConfirm}
              handleSelected={handleSelected}
              selected={selected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
