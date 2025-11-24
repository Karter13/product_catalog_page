"use client";

import { products as allProducts } from '@/data/products';
import { useSortedProducts } from '@/hooks/useSortedProducts';

import { ScrollTopButton } from './ui/ScrollTopButton';
import { CatalogFilters } from './CatalogFilters';
import { ProductGrid } from './ProductGrid';

export function CatalogClient() {
  const { filteredProducts, sort, handleSortChange } = useSortedProducts(allProducts);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">

      <div className="sticky top-0 z-10 bg-zinc-50 dark:bg-black pb-2 shadow-md">
        <h1 className="text-3xl font-bold text-center py-6">Каталог товаров</h1>

        <CatalogFilters
          sort={sort}
          onSortChange={handleSortChange}
        />
      </div>

      <ProductGrid products={filteredProducts} />

      <ScrollTopButton />
    </div>
  );
}
