import { CatalogClient } from '@/components/CatalogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Каталог товаров',
};

export default function CatalogPage() {
  return <CatalogClient />;
}
