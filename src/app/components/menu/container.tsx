"use client";
import { useEffect, useState } from "react";
import { getMainMenuItems } from "@/app/util/getOptions";
import { MenuItems } from "../list-items";
import {
  BsArrowDownCircleFill,
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsArrowUpCircleFill,
} from "react-icons/bs";

export const Menu = ({ confirmed, setConfirmed }: any) => {
  const [selected, setSelected] = useState<number>(0);
  const menuSelect = new Audio("/MenuSelect.wav");
  const menuConfirm = new Audio("/MenuConfirm.wav");
  const handleSelected = (id: number): void => {
    setSelected(id);
    menuSelect.play();
    return;
  };

  const handleConfirm = (id: number) => {
    if (selected != id) {
      handleSelected(id);
      menuSelect.play();
      return;
    }
    setConfirmed(menuItems[id]);
    menuConfirm.play();
  };

  const menuItems = getMainMenuItems();

  useEffect(() => {
    if (confirmed === undefined) {
      const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault();
            setSelected((prev) =>
              prev === 0 ? menuItems.length - 1 : prev - 1
            );
            menuSelect.play();
            break;
          case "ArrowDown":
            e.preventDefault();
            setSelected((prev) =>
              prev === menuItems.length - 1 ? 0 : prev + 1
            );
            menuSelect.play();
            break;
          case "ArrowRight":
          case "Enter":
            e.preventDefault();
            handleConfirm(selected);
            menuConfirm.play();

            break;
        }
      };

      window.addEventListener("keydown", handleKeyDown, true);
      return () => window.removeEventListener("keydown", handleKeyDown, true);
    }
  }, [selected, confirmed]);

  return (
    <div>
      <div className="flex">
        <MenuItems
          menuItems={menuItems}
          confirmed={confirmed}
          handleConfirm={handleConfirm}
          handleSelected={handleSelected}
          selected={selected}
        />
      </div>

      <div className="bottom-20 hidden lg:flex absolute w-[90vw] h-[30px] items-center  justify-between bg-bg outline-primary outline-1 text-primary  pr-20 mr-20">
        <div className="w-[200px] h-full flex gap-1">
          <div className="h-full bg-primary w-[10px]"></div>
          <div className="h-full bg-primary w-[5px]"></div>
        </div>

        <div>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <BsArrowUpCircleFill />
                <BsArrowDownCircleFill />
              </div>
              Move
            </div>
            <div className="flex gap-2 items-center">
              <BsArrowLeftCircleFill />
              Back
            </div>
            <div className="flex gap-2 items-center">
              <BsArrowRightCircleFill />
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
