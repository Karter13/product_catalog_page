"use client";

import { ProductGrid } from "./components/ProductGrid";
import { products as allProducts } from "@/data/products";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useSortedProducts } from '@/hooks/useSortedProducts';
import { ScrollTopButton } from '@/components/ScrollTopButton';

export default function CatalogPage() {
  const { filteredProducts, sort, handleSortChange } = useSortedProducts(allProducts);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">

      <div className="sticky top-0 z-10 bg-zinc-50 dark:bg-black pb-2 shadow-md">
        <h1 className="text-3xl font-bold text-center py-6">Каталог товаров</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <Select value={sort} onValueChange={handleSortChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Без сортировки</SelectItem>
              <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
              <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
              <SelectItem value="alpha">По алфавиту</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ProductGrid products={filteredProducts} />

      <ScrollTopButton />
    </div>
  );
}
