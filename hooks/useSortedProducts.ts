import { useEffect, useMemo, useState } from "react";
import { Product } from "@/data/types/product";

export type SortType = "default" | "price-asc" | "price-desc" | "alpha";

export function useSortedProducts(allProducts: Product[]) {
  const [sort, setSort] = useState<SortType>("default");

  const handleSortChange = (val: SortType) => setSort(val);

  const filteredProducts: Product[] = useMemo(() => {
    const filtered = [...allProducts];

    switch (sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "alpha":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [allProducts, sort]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [sort]);

  return { filteredProducts, sort, handleSortChange };
}
