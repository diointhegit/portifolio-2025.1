"use client";
import { useState } from "react";
import StartScreen from "./components/start-screen";
import Wrapper from "./components/wrapper";
import Blog from "./components/blog";

export default function Page() {
  const [isStarted, setStarted] = useState(false);
  const [mode, setMode] = useState<string | undefined>(undefined);

  const handleStart = () => {
    setStarted(true);
    return;
  };

  function exitToMainMenu() {
    setStarted(false);
    setMode(undefined);
  }

  function handleMode(title: string) {
    setMode(title);
  }

  const options = [
    {
      title: "Portifolio",
      function: function () {
        handleMode(this.title);
      },
    },
    {
      title: "Blog",
      function: function () {
        handleMode(this.title);
      },
    },
  ];

  return (
    <div className="overflow-x-hidden m-0 p-0">
      {isStarted ? (
        <>
          {mode == "Portifolio" && <Wrapper exitToMainMenu={exitToMainMenu} />}
          {mode == "Blog" && <Blog exitToMainMenu={exitToMainMenu} />}
        </>
      ) : (
        <StartScreen handleStart={handleStart} options={options} />
      )}
    </div>
  );
}
