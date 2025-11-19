"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/ui";
import Image from "next/image";
import { Product } from '@/data/types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="w-full max-w-xs hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-48 mb-2">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        <CardDescription>${product.price}</CardDescription>
      </CardContent>
    </Card>
  );
};
