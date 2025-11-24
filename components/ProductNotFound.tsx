"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ProductNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-6 px-4">
      <h1 className="text-3xl font-bold text-red-600">Товар не найден</h1>

      <p className="text-gray-600 max-w-md">
        Похоже, товара с таким идентификатором не существует или он был удалён.
      </p>

      <Link href="/catalog">
        <Button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white cursor-pointer">
          Вернуться в каталог
        </Button>
      </Link>
    </div>
  );
};
