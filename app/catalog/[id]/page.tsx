import { SelectedCard } from '@/components/SelectedCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Карточка товара',
};

export default function SelectedProductPage() {
  return <SelectedCard />;
}
