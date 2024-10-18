type Props = {
  children: any;
  className?: string;
  onClick?: () => void;
  scrolled?: boolean;
};

function Title({ children, className = "" }: Props) {
  return (
    <h1
      className={`${className} text-foreground letter-3d dark:text-background text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold`}>
      {children}
    </h1>
  );
}

function TitleWhite({ scrolled = false, children, className = "" }: Props) {
  return (
    <h1
      className={`${className} text-foreground dark:text-background text-4xl sm:text-5xl md:text-6xl font-thin text-black dark:text:white`}>
      {children}
    </h1>
  );
}

function Subtitle({ children, className = "" }: Props) {
  return (
    <h2
      className={`${className} text-foreground dark:text-background text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text:white`}>
      {children}
    </h2>
  );
}

function SectionTitle({ children, className = "" }: Props) {
  return (
    <h2
      className={`${className} uppercase text-foreground dark:text-background text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text:white`}>
      {children}
    </h2>
  );
}

function SectionSubTitle({ children, className = "" }: Props) {
  return (
    <h5
      className={`${className} uppercase text-foreground dark:text-background tracking-[0.5rem] text-xs sm:text-xs spacing md:text-xs font-extralight text-black dark:text:white`}>
      {children}
    </h5>
  );
}

function LargeText({ children, className = "" }: Props) {
  return (
    <h3
      className={`${className} text-foreground dark:text-background text-xl sm:text-2xl md:text-3xl font-normal`}>
      {children}
    </h3>
  );
}

function LargeBold({ children, className = "" }: Props) {
  return (
    <h3
      className={`${className} text-foreground dark:text-background text-xl sm:text-2xl md:text-3xl font-bold`}>
      {children}
    </h3>
  );
}

function BodyTitle({ children, className = "" }: Props) {
  return (
    <h4
      className={`${className} text-foreground dark:text-background text-base sm:text-lg md:text-xl font-normal`}>
      {children}
    </h4>
  );
}

function BodyBold({ children, className = "" }: Props) {
  return (
    <h4
      className={`${className} text-foreground dark:text-background text-base sm:text-sm md:text-md font-bold`}>
      {children}
    </h4>
  );
}

function TinyText({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} text-foreground dark:text-background text-xs sm:text-sm md:text-base font-normal`}>
      {children}
    </p>
  );
}

function Text({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} font-sans text-foreground dark:text-background text-xs sm:text-sm md:text-md font-light`}>
      {children}
    </p>
  );
}

function TextAllwaysBlack({ children, className = "" }: Props) {
  return (
    <p
      className={`${className} font-sans text-foreground text-xs sm:text-sm md:text-md font-normal`}>
      {children}
    </p>
  );
}

function AnimatedNavItem({
  onClick,
  scrolled = false,
  children,
  className = "",
}: Props) {
  return (
    <li
      onClick={onClick}
      className={`${className} ${
        scrolled
          ? "text-white dark:text-black" // When scrolled: white in light mode, black in dark mode
          : "text-black dark:text-white" // Default: black in light mode, white in dark mode
      } font-normal leading-none cursor-pointer transition-colors duration-300 text-xs sm:text-xs md:text-xs lg:text-xs relative overflow-hidden`}>
      <span className="h-full transition-transform duration-500 hover:animate-move-up-disappear">
        {children}
      </span>
    </li>
  );
}

export {
  Title,
  Text,
  TitleWhite,
  Subtitle,
  LargeText,
  LargeBold,
  BodyTitle,
  BodyBold,
  TinyText,
  AnimatedNavItem,
  TextAllwaysBlack,
  SectionTitle,
  SectionSubTitle,
};
