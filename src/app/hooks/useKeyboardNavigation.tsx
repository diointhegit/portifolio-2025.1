import { useEffect } from "react";

interface UseKeyboardNavigationProps<T> {
  list: T[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  handleConfirm?: () => void;
  confirmed?: boolean;
  toRemove?: any;
}

export function useKeyboardNavigation<T>({
  list,
  selected,
  setSelected,
  handleConfirm,
  confirmed,
  toRemove,
}: UseKeyboardNavigationProps<T>) {
  useEffect(() => {
    if (toRemove) {
      toRemove();
    }

    const menuSelect = new Audio("/MenuSelect.wav");
    const menuConfirm = new Audio("/MenuConfirm.wav");

    if (confirmed === undefined) {
      const handleMoveKeys = (e: KeyboardEvent) => {
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault();
            setSelected((prev) => (prev === 0 ? list.length - 1 : prev - 1));
            menuSelect.play();

            break;

          case "ArrowDown":
            e.preventDefault();
            setSelected((prev) => (prev === list.length - 1 ? 0 : prev + 1));
            menuSelect.play();

            break;

          case "ArrowRight":
          case "Enter":
            e.preventDefault();
            if (handleConfirm) {
              handleConfirm();
              menuConfirm.play();
            }

            break;
        }
      };

      window.addEventListener("keydown", handleMoveKeys, true);
      return () => window.removeEventListener("keydown", handleMoveKeys, true);
    }
  }, [list, selected, confirmed, setSelected, handleConfirm]);
}
