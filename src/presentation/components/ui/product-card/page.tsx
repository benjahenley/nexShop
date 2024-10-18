import {
  LargeText,
  Subtitle,
  Text,
  TextAllwaysBlack,
  TinyText,
} from "@/presentation/components/ui/texts/page";

interface CardProps {
  id: string;
  className?: string;
  title: string;
  price: string | number;
  url: string;
}

export default function ProductCard(props: CardProps) {
  const highResUrl = props.url.replace("-I.jpg", "-O.jpg");
  return (
    <div className="max-w-[100vw] shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-[1.8rem] text-[4rem] font-semibold flex items-center justify-center h-[var(--slide-height)] select-none pt-5 flex-col bg-white dark:bg-white py-5">
      <img
        alt={props.title}
        src={highResUrl}
        className="max-h-[80%] w-full object-contain"
      />

      <div className="text-center flex flex-col items-center mt-2">
        <TextAllwaysBlack>
          {props.title.split(" ").slice(0, 2).join(" ")}
        </TextAllwaysBlack>
        <TextAllwaysBlack>${props.price}</TextAllwaysBlack>
      </div>
    </div>
  );
}
