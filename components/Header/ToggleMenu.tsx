"use client";
import React, { useState } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavigationsType } from "@types";
interface Props {
  navigations: NavigationsType[];
}
const ToggleMenu = ({ navigations }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    // toggle here
    setShowMenu((prev) => !prev);
  };
  const [menuIds, setMenuIds] = useState<string[]>([]);

  const handleOpenSubMenu = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (menuIds.includes(id)) {
      setMenuIds(menuIds.filter((menuid) => menuid != id));
    } else {
      setMenuIds([...menuIds, id]);
    }
  };
  return (
    <>
      <div className="menu-extras mr-3">
        <div className="menu-item">
          <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 ${
          showMenu ? "" : "hidden"
        }`}
        onClick={toggleMenu}
      >
        <div className="fixed top-0 left-0 h-full w-1/2 bg-white">
          <XMarkIcon className="w-6 h-6 absolute right-3 top-3 z-10 cursor-pointer hover:text-gray-600" />
          <div className="w-full flex flex-col">
            <div id="navigation open">
              <ul className="navigation-menu mt-10">
                <li className="active">
                  <Link href="/" className="sub-menu-item active">
                    Home
                  </Link>
                </li>
                {navigations.map(
                  ({ title, link, submenu, id }: NavigationsType) => (
                    <li
                      className={` ${
                        submenu ? "has-submenu" : ""
                      }  parent-parent-menu-item`}
                    >
                      <Link
                        onClick={(e) =>
                          submenu.length > 0 && handleOpenSubMenu(e, id)
                        }
                        href={link}
                      >
                        {title}
                      </Link>
                      {submenu?.length > 0 && (
                        <>
                          <span className="menu-arrow"></span>
                          <ul
                            className={`submenu megamenu ${
                              menuIds.includes(id) ? "open" : ""
                            }`}
                          >
                            {submenu.map(({ title, link }) => (
                              <li>
                                <Link className="sub-menu-item" href={link}>
                                  {title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleMenu;
