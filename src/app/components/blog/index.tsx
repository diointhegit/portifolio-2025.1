import { BiSquare } from "react-icons/bi";

export default function Blog({ exitToMainMenu }: { exitToMainMenu: any }) {
  return (
    <div className="bg-background h-screen">
      <div className="w-screen justify-center flex flex-col items-center pt-20 space-y-5">
        <div className="space-y-5">
          <p>E R R O R </p>
          <div className="flex space-x-5">
            {[1, 2, 3, 4, 5].map(() => {
              return <BiSquare />;
            })}
          </div>
          <p>No entries found in the BLOG section </p>
          <div className="flex space-x-5">
            {[1, 2, 3, 4, 5].map(() => {
              return <BiSquare />;
            })}
          </div>
          <button onClick={exitToMainMenu} className="cursor-pointer">
            Click HERE to Return to main menu{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
