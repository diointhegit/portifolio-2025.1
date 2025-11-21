"use client";
import { BsSquareFill } from "react-icons/bs";

export default function BackButton({ handleClose }: { handleClose: any }) {
  const menuBack = new Audio("/menuBack.wav");

  const CloseWithEffets = () => {
    menuBack.play();
    handleClose();
  };

  return (
    <div
      className="mb-5 flex items-center gap-5 px-5 bg-primary text-secondary py-2 w-fit  hover:bg-secondary hover:text-primary transition-all duration-150 ease-in-out cursor-pointer outline-1 outline-primary"
      onClick={CloseWithEffets}
    >
      <BsSquareFill />
      <p>Back</p>
    </div>
  );
}
