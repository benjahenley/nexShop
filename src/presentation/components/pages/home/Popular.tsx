"use client";

import { useEffect, useState } from "react";
import EmblaCarousel from "../../carrousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { prisma } from "@/lib/prisma";
import { getProducts } from "@/helpers/getProducts";
import { Product } from "@/infrastructure/interfaces/products";
import { ProductoMercadoLibre } from "@/infrastructure/interfaces/mercadoLibre";
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

export default function Popular({ className }: CardProps) {
  const [slides, setSlides] = useState<ProductoMercadoLibre[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts("notebook", 0, 10);
        console.log(products);
        setSlides(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      className={
        className +
        " bg-lightGray dark:bg-black py-12 flex flex-col items-center"
      }>
      <SectionSubTitle className="mb-2">Popular</SectionSubTitle>
      <SectionTitle className="mb-10 text-center">
        Best Selling Notebooks
      </SectionTitle>
      <EmblaCarousel slides={slides ? slides : []} options={OPTIONS} />
    </div>
  );
}
