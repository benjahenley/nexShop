import { RightArrow } from "public/svg";
import { BodyBold } from "../texts/page";

const Button = (props: any): any => {
  <button className={props.className}>{props.children}</button>;
};

type ButtonProps = {
  className: string;
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: any;
};

export function PinkButton({
  className,
  children,
  type,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} button pink-button`}
      type={type}>
      {children}
    </button>
  );
}
export function BlueButton({ className, children, type }: any) {
  return (
    <button
      className={`${className} p-[0.5rem] w-full max-w-[15rem] rounded-full text-white text-md uppercase font-bold bg-secondary`}
      type={type}>
      <BodyBold>{children}</BodyBold>
    </button>
  );
}

export function BlueButtonAnimated({ className, children, type }: any) {
  return (
    <button
      className={`${className} p-2 w-full max-w-xs rounded-full text-white text-md uppercase font-bold bg-secondary transition-all duration-500 hover:pr-10 flex items-center justify-center`}
      type={type}>
      <span className="relative transition-all duration-500">
        <BodyBold>{children}</BodyBold>
        <span className="absolute opacity-0 text-black right-[-1.25rem] transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:right-0">
          &raquo;
        </span>
        <span className="absolute opacity-0 right-[-1.25rem] transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:right-0">
          &raquo;
        </span>
      </span>
    </button>
  );
}

export function YellowButton({ className, children, type }: any) {
  return (
    <button className={`${className} button yellow-button`} type={type}>
      {children}
    </button>
  );
}
