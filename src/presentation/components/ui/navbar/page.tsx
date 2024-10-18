"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatedNavItem,
  TitleWhite,
} from "@/presentation/components/ui/texts/page";
import { BurguerIcon, CartImg, CrossImg, ProfileIcon } from "public/svg";
import { DarkModeToggle } from "../darkmode-btn/page";
import SearchBarComp from "../searchBarComp/page";

function Navbar(props: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-0 left-0 z-10 px-[1rem] transition-[padding, background-color, text-color] duration-300 ease-in-out ${
        scrolled
          ? "bg-black bg-opacity-90 dark:bg-white dark:bg-opacity-90 py-0" // Smaller padding when scrolled
          : " bg-opacity-20 text-foreground dark:bg-opacity-20 dark:text-background py-2" // Larger padding when not scrolled
      }`}>
      {isMenuOpen ? (
        <div className="right-0 left-0 top-0 bottom-0 absolute bg-black">
          <div>
            <CrossImg
              className="absolute right-0 h-[5rem] w-[5rem]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Close menu"
            />
          </div>
          <ul className="flex flex-col justify-center gap-[5.625rem] items-center pl-0 h-full">
            <li>
              <Link href="/signin" className="text-decoration-none">
                <TitleWhite scrolled={scrolled} className="white">
                  Ingresar
                </TitleWhite>
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-decoration-none">
                <TitleWhite className="white">Mi Perfil</TitleWhite>
              </Link>
            </li>
            <li>
              <Link href="/search" className="text-decoration-none">
                <TitleWhite className="white">Buscar</TitleWhite>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex justify-between items-center p-1">
          <div className="flex items-center gap-5">
            <a
              href="/"
              className={`${
                scrolled
                  ? "text-white dark:text-black"
                  : "text-black dark:text-white"
              } leading-none text-3xl font-clash font-thin cursor-pointer text-foreground dark:text-background`}>
              NexShop
            </a>
          </div>

          <div className="w-full h-full hidden md:flex flex-row md:items-center gap-5 justify-end max-w-lg">
            <ul className="h-full w-auto decoration-none flex flex-row items-center justify-end gap-[1rem] flex-grow">
              <AnimatedNavItem scrolled={scrolled}>Home</AnimatedNavItem>
              <AnimatedNavItem scrolled={scrolled}>Categories</AnimatedNavItem>
              {/* <AnimatedNavItem scrolled={scrolled}>Discounts</AnimatedNavItem> */}
              <AnimatedNavItem scrolled={scrolled}>Contact</AnimatedNavItem>
            </ul>
            <SearchBarComp className="flex flex-row w-fit justify-end transition-all duration-300" />
            <DarkModeToggle
              className={`${
                scrolled
                  ? "text-white dark:text-black"
                  : "text-black dark:text-white"
              }`}
            />
            <CartImg
              onClick={() => {}}
              className={`${
                scrolled
                  ? "text-white dark:text-black"
                  : "text-black dark:text-white"
              } cursor-pointer flex-shrink-0 w-[1.5rem] text-foreground dark:text-background`}
            />
            <ProfileIcon
              onClick={() => {}}
              className={`${
                scrolled
                  ? "text-white dark:text-black"
                  : "text-black dark:text-white"
              } w-[1.5rem] flex-shrink-0 cursor-pointer text-foreground dark:text-background`}
              aria-label="Go to profile"
            />
          </div>

          <BurguerIcon
            className={`block md:hidden w-[1.5rem] h-[1.5rem] dark:text-white ${
              scrolled && "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
