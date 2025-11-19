"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { SelectedCard } from './SelectedCard/SelectedCard';
import { ProductNotFound } from '../components/ProductNotFound';

export default function SelectedProductPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center items-start p-6">
      <SelectedCard product={product} />
    </div>
  );
}
