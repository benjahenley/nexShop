"use client";

import {
  BodyTitle,
  LargeText,
  Subtitle,
  TinyText,
  Title,
} from "@/presentation/components/ui/texts/page";
import Image from "next/image";
import { BlueButton, BlueButtonAnimated } from "../../ui/buttons/page";
import { useEffect, useState } from "react";

interface CardProps {
  className?: string;
  onSubmit?: any;
}

export default function HomeLanding({ className, onSubmit }: CardProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="dark:bg-opacity-80 dark:bg-black fixed top-0 left-0 z-[-1] right-0 w-full h-[100vh]"
        style={
          {
            // transform: `translateY(-${scrollPosition * 0.1}px)`, // Control the speed of the parallax effect
            // transition: "transform 0.1s ease-out", // Smooth out the movement
          }
        }>
        <Image
          objectFit="cover"
          alt="hero"
          fill
          src="/img/banner.png"
          className="bg-white opacity-55 dark:opacity-20"
        />
      </div>
      <form
        className={`${className} flex flex-col justify-center items-center`}
        onSubmit={onSubmit}>
        <Title className="text-center">NexShop</Title>
        <TinyText className="max-w-sm text-center mt-4 ">
          Discover the latest trends and exclusive deals, all wrapped up in a
          modern, user-friendly interface.
        </TinyText>

        <BlueButtonAnimated className="mb-5 mt-8">
          Find Products
        </BlueButtonAnimated>
      </form>
    </>
  );
}
