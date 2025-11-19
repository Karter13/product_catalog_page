import { ProductGrid } from "./components/ProductGrid";

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold text-center py-6">Каталог товаров</h1>
      <ProductGrid />
    </div>
  );
}
