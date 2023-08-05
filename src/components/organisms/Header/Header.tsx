"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);

  const handleMenuOpenChange = () => {
    setIsMenuOpen(prev => !prev);
  };

  const menuItems = [
    {
      title: "トップ",
      link: "/",
    },
    {
      title: "言語一覧",
      link: "/lang",
    },
    {
      title: "JavaScript",
      link: "/lang/javascript",
    },
  ];
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            Flash Code
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-sm" href={item.link} onClick={handleMenuOpenChange}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
