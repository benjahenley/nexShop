import Card from "@/presentation/components/ui/product-card/page";
import { Input } from "@/presentation/components/ui/Input/page";
import { BlueButton } from "@/presentation/components/ui/buttons/page";
import {
  LargeText,
  Subtitle,
  Title,
} from "@/presentation/components/ui/texts/page";
import { useState } from "react";

interface CardProps {
  className?: string;
  results: any;
}

export default function Results({ className, results }: CardProps) {
  return (
    <div className={className + " "}>
      {!results ? (
        <LargeText className="text-center">
          No se encontraron resultados
        </LargeText>
      ) : (
        <div className={"home__results"}>
          {results.map((hit: any, key: number) => {
            const item = hit.fields;
            const url = item.Images[0].thumbnails.full.url;
            const price = item["Unit cost"];
            const title = item.Name;
            return (
              <></>
              // <Card key={key} title={title} price={price} url={url}></Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
