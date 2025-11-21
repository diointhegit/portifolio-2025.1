"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { Details } from "./details";
import { Visualizer } from "./visualizer";
import { MenuContext } from "../context/useMenuContext";
import { BsSquareFill } from "react-icons/bs";
import BackButton from "../back-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Container = ({
  confirmedProject,
  setConfirmed,
}: {
  confirmedProject: any;
  setConfirmed: any;
}) => {
  const { setSubMenuOpen } = useContext(MenuContext);

  const [isDetailsOpen, setDetailsOpen] = useState(false);

  const handleClose = () => {
    setConfirmed();
    setSubMenuOpen(false);
  };

  useEffect(() => {
    const menuBack = new Audio("/MenuBack.wav");

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
  }, [confirmedProject]);

  const openDetails = () => {
    setDetailsOpen(true);
  };
  const closeDetails = () => {
    setDetailsOpen(false);
  };
  const ContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".projectsContainer",
        {
          opacity: 0,
          x: -15,
        },
        { opacity: 1, x: 0, duration: 0.25 }
      );
    },
    { scope: ContainerRef }
  );

  return (
    <div ref={ContainerRef}>
      <BackButton handleClose={handleClose} />

      <div className="grid projectsContainer w-[30vw] lg:w-[50vw] gap-10 xl:grid-cols-2  ">
        <Visualizer project={confirmedProject} openDetails={openDetails} />

        <Details project={confirmedProject} closeDetails={closeDetails} />
      </div>
    </div>
  );
};
