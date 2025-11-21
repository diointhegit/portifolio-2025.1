import { useWindowSize } from "@/app/hooks/useWindowSize";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { BsSquare } from "react-icons/bs";
import { SiSquare } from "react-icons/si";

export const Details = ({
  project,
  closeDetails,
}: {
  project: any;
  closeDetails: any;
}) => {
  const containerRef = useRef(null);
  const { width } = useWindowSize();
  useGSAP(() => {
    if (width > 768) {
      gsap.fromTo(
        ".detailsContainer",
        {
          opacity: 0,
          x: -15,
        },
        { opacity: 1, x: 0, duration: 0.25 }
      );
    } else {
    }
    gsap.fromTo(
      ".detailsContainer",
      {
        opacity: 0,
        x: -15,
      },
      { opacity: 1, x: 0, duration: 0.25 }
    );

    {
      scope: containerRef;
    }
  });

  return (
    <div ref={containerRef}>
      <div className="outline-1 detailsContainer outline-primary h-full min-w-[250px] lg:w-full">
        <div className="text-xl flex justify-between bg-primary text-secondary py-2 px-5 ">
          <p>Details</p>
        </div>
        <div className="px-5">
          <h3 className="text-xl my-2 ">Tech Stack </h3>
          <div className="grid text-lg">
            <div className="flex justify-between">
              <p>Typescript:</p>
              <p>icon</p>
            </div>
            <div className="flex justify-between">
              <p>Typescript:</p>
              <p>icon</p>
            </div>{" "}
            <div className="flex justify-between">
              <p>Typescript:</p>
              <p>icon</p>
            </div>{" "}
            <div className="flex justify-between">
              <p>Typescript:</p>
              <p>icon</p>
            </div>
          </div>
          <hr className="my-5" />
        </div>
        <div className="px-5">
          <h3 className="text-xl my-2">Links</h3>
          <div className="flex justify-between">
            <p>Github:</p>
            <p>link</p>
          </div>
          <div className="flex justify-between">
            <p>Live:</p>
            <p>link</p>
          </div>
          <div className="lg:flex justify-center space-x-8 my-5 hidden ">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_: any, key: number) => {
              return <BsSquare key={key} />;
            })}
          </div>
          <div className="flex justify-center space-x-8 my-5 lg:hidden ">
            {[1, 1, 1, 1, 1].map((_: any, key: number) => {
              return <BsSquare key={key} />;
            })}
          </div>

          <hr className="mb-5" />
          <div className="text-center">
            <p>N O</p>
            <p>E R R O R</p>
          </div>
        </div>
      </div>
    </div>
  );
};
