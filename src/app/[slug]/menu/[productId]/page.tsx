import { notFound } from "next/navigation";
import ProductHeader from "./components/product-header";

import { db } from "@/lib/prisma";

interface ProductsProps {
  params: Promise<{slug: string, productId: string}>;
}

const ProductPage = async ({params}: ProductsProps) => {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    return notFound();
  }
  return ( 
    <>
      <ProductHeader product={product} />
      <h1>{slug}</h1>
      <h1>{productId}</h1>
    </>
  );
}
 
export default ProductPage;