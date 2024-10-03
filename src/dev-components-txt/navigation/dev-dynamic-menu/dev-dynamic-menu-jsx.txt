import React from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const MenuItem = ({ item, depth = 0 }) => {
  const isFirstLevel = depth === 0;

  //More paths can be added according to the max subLinks on each level
  const paths = {
    0: [
      "group/item1",
      `group-hover/item1:opacity-100 group-hover/item1:scale-100`,
    ],
    1: [
      "group/item2",
      `group-hover/item2:opacity-100 group-hover/item2:scale-100`,
    ],
    2: [
      "group/item3",
      `group-hover/item3:opacity-100 group-hover/item3:scale-100`,
    ],
    3: [
      "group/item4",
      `group-hover/item4:opacity-100 group-hover/item4:scale-100`,
    ],
  };

  return (
    <li
      className={`
      ${paths[depth] ? paths[depth][0] : ""} 
      relative p-2 px-4
      ${
        isFirstLevel
          ? "flex items-center justify-center flex-col"
          : "w-full hover:bg-accentNeon/20"
      }
    `}
    >
      <Link
        href={item.path}
        className="cursor-pointer w-full whitespace-nowrap hover:text-accentNeon
          flex items-center justify-between"
      >
        {item.name}
        {item.subLinks && <RiArrowDropDownLine className="text-2xl" />}
      </Link>

      {item.subLinks && (
        <ul
          className={`
          bg-rtlLight dark:bg-rtlDark 
          divide-y divide-accentNeon/30 
          opacity-0 
          scale-0 
          z-40 
          ${paths[depth] ? paths[depth][1] : ""}
          border border-accentNeon/30 
          shadow-md font-normal text-sm 
          absolute 
          transition-all duration-200
          m-1
          rounded-md
          ${
            isFirstLevel
              ? "origin-top top-full "
              : "origin-top-left left-full top-3 "
          }
        `}
        >
          {item.subLinks.map((subItem, index) => (
            <MenuItem key={index} item={subItem} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const DevDynamicMenu = ({ menuItems, className }) => {
  return (
    <nav className={`bg-rtlLight dark:bg-rtlDark ${className}`}>
      <ul className="flex items-center justify-between">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default DevDynamicMenu;
