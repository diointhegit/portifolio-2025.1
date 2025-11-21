"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../context/useMenuContext";
import { BsSquareFill } from "react-icons/bs";
import { SkillSelector } from "./skill-selector";
import { SkillTree } from "./skill-tree";
import { getSkillByPath, getSkills } from "@/app/util/getOptions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Container = ({
  path,
  setConfirmed,
}: {
  path: any;
  setConfirmed: any;
}) => {
  const { setSubMenuOpen } = useContext(MenuContext);

  const menuConfirm = new Audio("/menuConfirm.wav");
  useEffect(() => {
    const menuBack = new Audio("/menuBack.wav");

    setSubMenuOpen(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          handleClose();
          menuBack.play();
        case "Escape":
          handleClose();
          menuBack.play();
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [path]);

  const [selected, setSelected] = useState<number>(0);
  const menuBack = new Audio("/menuBack.wav");

  const handleSelected = (id: number): void => {
    setSelected(id);
    return;
  };
  const handleClose = () => {
    setConfirmed();
    setSubMenuOpen(false);
  };

  const skillsByPath = getSkillByPath(path.title);

  let skills = skillsByPath.map((skill: any) => {
    return skill;
  });

  skillsByPath.forEach((skill: any) => {
    if (skill.sub) {
      skill.sub.forEach((sub: any) => {
        skills.push(sub);
      });
      return;
    }
  });
  const CloseWithEffets = () => {
    menuBack.play();
    handleClose();
  };

  return (
    <div>
      <div
        className="mb-5 flex items-center gap-5 px-5 bg-primary text-secondary py-2 w-fit  hover:bg-secondary hover:text-primary transition-all duration-150 ease-in-out cursor-pointer outline-1 outline-primary"
        onClick={CloseWithEffets}
      >
        <p>Back</p>
      </div>

      <div className="grid w-full lg:w-[500px] gap-6 lg:grid-cols-2 skillsContainer">
        <SkillSelector
          setSelected={setSelected}
          skills={skills}
          handleSelected={handleSelected}
          selected={selected}
        />
        <SkillTree skills={skillsByPath} selected={selected} />
      </div>
    </div>
  );
};
