"use client";

import { EmblaOptionsType } from "embla-carousel";

import {
  SectionTitle,
  Subtitle,
  Text,
  Title,
  SectionSubTitle,
} from "../../ui/texts/page";

interface CardProps {
  className?: string;
}

const OPTIONS: EmblaOptionsType = {};

export default function MissionStatement({ className }: CardProps) {
  return (
    <div
      className={
        className +
        " bg-lightGray dark:bg-black py-12 flex flex-row items-center"
      }>
      <div></div>
      <SectionTitle className="mb-10 text-center p-2">
        Discover what to buy at the best prices on the market.
      </SectionTitle>
      <div></div>
    </div>
  );
}
