"use client";

import { useState, useEffect } from "react";
import HomeLanding from "./HomeLanding";
import Results from "./Results";
import Image from "next/image";
import Popular from "./Popular";
import { getProducts } from "@/helpers/getProducts";
import MissionStatement from "./Mission";

interface CardProps {
  className?: string;
}

export default function HomeComp({ className }: CardProps) {
  const [values, setValues] = useState([]);

  // Handle form submission to fetch products
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const searchValue = e.target.busqueda.value;
  //   const results = await getProducts(searchValue);
  //   console.log(results);
  //   setValues(results);
  // };

  // Update scroll position for parallax effect

  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* Parallax Background Image */}

      {/* Home Landing Section */}
      <HomeLanding
        className="flex items-center min-h-screen"
        // onSubmit={handleSubmit}
      />

      <MissionStatement></MissionStatement>

      <Popular></Popular>

      <Results
        results={values}
        className="grid grid-cols-2 p-12 w-full max-w-[1000px] gap-5 place-items-center"
      />
    </div>
  );
}
