import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter") || "";

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: filter,
              mode: "insensitive",
            },
          },
        ],
      },
      take: 20,
      skip: 0,
    });

    const sanitizedProducts = products.map((product) => ({
      ...product,
      id: Number(product.id),
      categoryId: product.categoryId ? Number(product.categoryId) : null,
    }));

    return NextResponse.json(sanitizedProducts);
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }
}
