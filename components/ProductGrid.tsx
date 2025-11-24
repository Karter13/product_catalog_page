'use client';

import { ProductCard } from './ProductCard';
import { Product } from '@/data/types/product';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export const PAGE_SIZE = 24;

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products: allProducts }: ProductGridProps) => {
  const { lastElementRef, getCurrentItems } = useInfiniteScroll(PAGE_SIZE);
  const safeProducts = Array.isArray(allProducts) ? allProducts : [];

  const currentProducts = getCurrentItems(safeProducts);

  if (safeProducts.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        Товары не найдены
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[2040px] w-full">
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-6 p-6"
      >
        {currentProducts.map((product, index) => {
          const isLast = index === currentProducts.length - 1;
          return (
            <div
              key={product.id}
              ref={isLast ? lastElementRef : null}
              className="flex justify-center"
            >
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
