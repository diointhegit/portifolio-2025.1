import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AiOutlineLoading } from "react-icons/ai";
import { BsSquareFill } from "react-icons/bs";
import { FaTruckLoading } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";

export const Modal = () => {
  useGSAP(() => {
    gsap.to(".loading", {
      rotateZ: 360,
      repeat: -1,
      duration: 1,
    });
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className=" px-6 py-4 rounded-xl">
        <div className="w-[350px]   bg-background">
          <div className="bg-primary text-secondary px-5 py-2 flex gap-3 items-center">
            <BsSquareFill />
            Warning
          </div>
          <div className="flex h-[100px] items-center gap-5 justify-center">
            <p>Opening in a new tab...</p>
            <VscLoading className="loading" />
          </div>
        </div>
      </div>
    </div>
  );
};
