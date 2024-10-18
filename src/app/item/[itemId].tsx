import getProduct from "@/helpers/getProduct";
import { getProducts } from "@/helpers/getProducts";
import { useRouter } from "next/router";

export default function item(props: any) {
  return <div>{props.item}</div>;
}

export async function getStaticPaths(context: any) {
  const itemsFromDatabase = await getProducts("", 0, 10);
  console.log(itemsFromDatabase);
  const paths = [];

  if (itemsFromDatabase) {
    itemsFromDatabase.forEach((e: any) => {
      paths.push(e.id);
    });
  }

  console.log(context.product);
  return {
    paths: [{ params: { itemId: "1" } }, { params: { itemId: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const id: string = context.params.itemId;
  const fetchedItem = await getProduct(id);
  console.log(fetchedItem);

  return {
    props: {
      item: JSON.stringify(fetchedItem),
    },
    revalidate: 1,
  };
}
