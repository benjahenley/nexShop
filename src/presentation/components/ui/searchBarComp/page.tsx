import { useState } from "react";
import { Input } from "../Input/page";

type Props = {
  className?: string;
};

function SearchBarComp({ className }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <div className={`${className}`}>
      <Input
        name="busqueda"
        placeholder="Search"
        className={`transition-all duration-300 max-w-xs ${
          isExpanded ? "w-[14rem]" : "w-[10rem]"
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default SearchBarComp;
