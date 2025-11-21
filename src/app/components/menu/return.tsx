import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

export default function ReturnToTitle({
  exitToMainMenu,
}: {
  exitToMainMenu: any;
}) {
  useEffect(() => {
    exitToMainMenu();
  }, []);

  return <div></div>;
}
