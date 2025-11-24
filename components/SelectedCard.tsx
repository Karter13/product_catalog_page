'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { StarRating } from '@/components/ui/StarRating';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ProductNotFound } from '@/components/ProductNotFound';

export const SelectedCard = () => {
  const params = useParams();
  const id = Number(params.id);

  const product = products.find((p) => p.id === id);

  const handleAddToCart = () => {
    console.log(`Товар "${product?.title}" добавлен в корзину (имитация)!`);
  };

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center items-start p-6">
      <div className="flex flex-col items-center gap-6 pb-8">
        <h2 className="text-3xl font-bold text-center py-6">
          Карточка товара
        </h2>

        <Card
          className="w-full max-w-lg border-2 border-green-500 bg-green-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-green-700 font-semibold">
              {product.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col justify-between h-[450px] p-6">
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-md">
              <Image
                src={product.image}
                alt={product.title}
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>

            <CardDescription className="flex flex-col justify-between flex-1">
              <p className="text-lg mb-3 line-clamp-4 text-gray-800 dark:text-gray-200">{product.description}</p>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold text-green-800">${product.price}</p>
                <StarRating rating={product.rating} size={24} />
                <Button
                  onClick={handleAddToCart}
                  disabled={product.selected}
                  className="
                  mt-3 w-full
                  bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                  disabled:bg-gray-400 text-white font-medium cursor-pointer"
                >
                  {product.selected ? 'В корзине' : 'В корзину'}
                </Button>
              </div>
            </CardDescription>
          </CardContent>
        </Card>


        <Link href="/catalog" className="w-full max-w-lg">
          <Button
            className="w-full bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-medium cursor-pointer">
            В каталог
          </Button>
        </Link>
      </div>
    </div>
  );
};
