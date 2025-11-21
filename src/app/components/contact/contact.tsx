import { useRef, useState } from "react";
import { MenuItems } from "../list-items";
import { openNewTab } from "@/app/util/contactsFunctions";
import { useKeyboardNavigation } from "@/app/hooks/useKeyboardNavigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Contact = ({
  handleClose,
  setContactConfirm,
}: {
  handleClose: any;
  setContactConfirm: any;
}) => {
  const contacts: { title: string; function: () => void }[] = [
    {
      title: "Resume",
      function: () =>
        openNewTab("https://www.linkedin.com/in/developer-denis-silva/"),
    },
    {
      title: "Linkedin",
      function: () =>
        openNewTab("https://www.linkedin.com/in/developer-denis-silva/"),
    },
    {
      title: "Twitter",
      function: () => openNewTab("https://x.com/diointhecode"),
    },
  ];

  const [selected, setSelected] = useState<number>(0);
  const [confirmed, setConfirmed] = useState<any>();

  const handleSelected = (id: number): void => {
    setSelected(id);
    return;
  };

  const handleConfirm = () => {
    setContactConfirm(true);
    setTimeout(() => {
      contacts[selected].function();
      setContactConfirm(false);
    }, 2000);
  };

  useKeyboardNavigation({
    list: contacts,
    selected,
    setSelected,
    handleConfirm,
    confirmed,
  });

  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".contactsContainer",
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
    <div>
      <div className="w-[250px]" ref={containerRef}>
        <div className="contactsContainer">
          <MenuItems
            hasMoreProps
            handleConfirm={handleConfirm}
            handleSelected={handleSelected}
            menuItems={contacts}
            selected={selected}
            confirmed={confirmed}
          />
        </div>
      </div>
    </div>
  );
};
