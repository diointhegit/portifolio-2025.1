import { cn } from "../util/cn";
import { Item } from "./menu/item";

export const MenuItems = ({
  menuItems,
  confirmed,
  handleConfirm,
  handleSelected,
  hasMoreProps,
  selected,
  margin,
}: {
  menuItems: any;
  hasMoreProps?: boolean;
  confirmed?: any;
  margin?: string;
  handleConfirm?: any;
  handleSelected: any;
  selected: any;
}) => {
  return (
    <div className={cn(margin ? margin : "")}>
      {menuItems.map((item: any, _key: number) => {
        return (
          <Item
            confirmed={confirmed}
            onConfirm={handleConfirm}
            key={_key}
            onSelect={handleSelected}
            name={hasMoreProps ? item.title : item}
            index={_key}
            selected={selected}
          />
        );
      })}
    </div>
  );
};
