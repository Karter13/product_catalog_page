"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ProductCard } from "./ProductCard";
import { products as allProducts } from "@/data/products";
import { Product } from '@/data/types/product';

const PAGE_SIZE = 12;

export const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const nextProducts = allProducts.slice(start, end);

    setProducts((prev) => [...prev, ...nextProducts]);
    setLoading(false);
  }, [page]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product, index) => {
        if (index === products.length - 1) {
          return (
            <div key={product.id} ref={lastProductRef}>
              <ProductCard product={product} />
            </div>
          );
        } else {
          return <ProductCard key={product.id} product={product} />;
        }
      })}
      {loading && <p className="col-span-full text-center text-gray-500">Loading...</p>}
    </div>
  );
};
