"use client";

import { DayImg, NightImg } from "public/svg";
import { useTheme } from "../../providers/darkMode";

type Props = {
  className: string;
};

export const DarkModeToggle = ({ className }: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={className}>
      {theme === "light" ? (
        <NightImg className="w-[1.5rem] h-[1.5rem]"></NightImg>
      ) : (
        <DayImg className="w-[1.5rem] h-[1.5rem]"></DayImg>
      )}
    </button>
  );
};
