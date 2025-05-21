import { Metadata } from "next";
import { getProductById } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found | Royal Matka Tea",
    };
  }

  return {
    title: `${product.name} | Royal Matka Tea`,
    description: product.description,
  };
}
