import React from "react";
import DevDynamicMenu, {
  MenuItemsProps,
  NavLink,
} from "../(dev-dynamic-menu)/dev-dynamic-menu";
import DevDrawerV1 from "../../drawers/(dev-drawer-v1)/dev-drawer-v1";
import { RiMenu2Fill } from "react-icons/ri";
import Link from "next/link";

type NavbarProps = {
  menuItems: NavLink[];
  logo: React.ReactNode;
};
const ResponsiveNavbar = ({ menuItems, logo }: NavbarProps) => {
  return (
    <header className="p-3 px-5 w-full flex items-center gap-3 justify-between rounded-full bg-rtlLight dark:bg-rtlDark border border-accentNeon/30 pr-3">
      <Link href="/">{logo}</Link>
      <div className="md:block hidden">
        <DevDynamicMenu menuItems={menuItems} />
      </div>
      <div className="md:hidden block">
        <DevDrawerV1
          position="right"
          title="Menu"
          openBtn={
            <button className="p-2 rounded-full bg-accentNeon/20 text-accentNeon text-2xl">
              <RiMenu2Fill />
            </button>
          }
        >
          <DevDynamicMenu menuItems={menuItems} />
        </DevDrawerV1>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
