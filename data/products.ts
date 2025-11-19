import { Product } from './types/product';

export const products: Product[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Товар ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 10,
  description: `Описание для товара ${i + 1}`,
  image: `/images/product_${(i % 10) + 1}.png`,
}));
