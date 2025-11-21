"use client";
import { useState } from "react";
import { Menu } from "./menu/container";
import { SelectedItem } from "./menu/selected-item";

export default function Wrapper({ exitToMainMenu }: { exitToMainMenu: any }) {
  const [confirmed, setConfirmed] = useState<string | undefined>();

  const handleCancel = () => {
    setConfirmed(undefined);
  };

  return (
    <div className="bg-background min-h-screen overflow-x-hidden pb-24 w-screen flex items-center px-20 gap-15 flex-col xl:flex-row skillsContainer pt-10 lg:pt-0 portifolioWrapper">
      <div className="h-[125px] left-[13px] w-2 bg-accent absolute  "></div>

      <Menu confirmed={confirmed} setConfirmed={setConfirmed} />
      {confirmed && (
        <SelectedItem
          exitToMainMenu={exitToMainMenu}
          confirmed={confirmed}
          onCancel={handleCancel}
          itemName={confirmed}
        />
      )}
    </div>
  );
}
