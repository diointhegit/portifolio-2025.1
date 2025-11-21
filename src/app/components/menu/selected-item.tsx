import { createContext, useEffect, useRef, useState } from "react";
import { Item } from "./item";
import { About } from "../about/about";
import { BsSquareFill } from "react-icons/bs";
import { Projects } from "../projects/projects";
import { Skills } from "../skills/skills";
import { Contact } from "../contact/contact";
import { MenuContext } from "../context/useMenuContext";
import BackButton from "../back-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Modal } from "../modal";
import ReturnToTitle from "./return";

export const SelectedItem = ({
  itemName,
  onCancel,
  confirmed,
  exitToMainMenu,
}: {
  itemName: string;
  onCancel: () => void;
  confirmed: string;
  exitToMainMenu: any;
}) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [contactConfirm, setContactConfirm] = useState(false);
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    const menuBack = new Audio("/menuBack.wav");
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!subMenuOpen) {
        switch (e.key) {
          case "ArrowLeft":
            onCancel();
            menuBack.play();

          case "Escape":
            onCancel();
            menuBack.play();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [confirmed, subMenuOpen]);
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".menuContainer",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.25 }
      );
    },
    { scope: container }
  );

  const quit = () => {
    exitToMainMenu();
  };

  return (
    <div className="" ref={container}>
      <BackButton handleClose={onCancel} />

      <div className="flex gap-15 ">
        <div>
          <div className="w-2 h-full bg-accent"></div>
        </div>
        <MenuContext.Provider value={{ subMenuOpen, setSubMenuOpen }}>
          <div className="menuContainer">
            {itemName == "About" && <About />}
            {itemName == "Projects" && <Projects handleClose={onCancel} />}
            {itemName == "Skills" && <Skills handleClose={onCancel} />}
            {itemName == "Contact" && (
              <Contact
                handleClose={onCancel}
                setContactConfirm={setContactConfirm}
              />
            )}
            {itemName == "Exit" && (
              <ReturnToTitle exitToMainMenu={exitToMainMenu} />
            )}
          </div>
          {contactConfirm && <Modal />}
          {exiting && (
            <div className="h-screen absolute z-50 w-screen inset-0 blackScreen">
              <p className="text-white " onClick={() => setExiting(false)}>
                ataclicaaqui
              </p>
            </div>
          )}
        </MenuContext.Provider>
      </div>
    </div>
  );
};
