'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Product } from '@/data/types/product';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/StarRating';
import { Skeleton } from '@/components/ui/skeleton';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleSelect = () => {
    router.push(`/catalog/${product.id}`);
  };

  const handleAddToCart =(e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log(`Товар "${product.title}" добавлен в корзину (имитация)!`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const imageClassName = `object-cover rounded-md ${imageLoaded ? 'opacity-100' : 'opacity-0'}`;

  return (
    <Card
      className="w-full max-w-xs hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={handleSelect}
    >
      <CardHeader>
        <CardTitle className="text-lg text-center">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between h-[350px]">
        <div className="relative w-full h-48 mb-2">
          {!imageLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-md" />}
          <Image
            src={product.image}
            alt={product.title}
            fill
            onLoad={handleImageLoad}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={imageClassName}
          />
        </div>

        <CardDescription className="flex flex-col justify-between flex-1">
          <p className="text-lg mb-2 line-clamp-3">{product.description}</p>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold">${product.price}</p>
            <StarRating rating={product.rating} />
            <Button
              onClick={handleAddToCart}
              disabled={product.selected}
              className="
                mt-2 w-full
                bg-blue-500 hover:bg-blue-600 active:bg-blue-700
                disabled:bg-gray-400 text-white"
            >
              {product.selected ? 'В корзине' : 'В корзину'}
            </Button>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
};
