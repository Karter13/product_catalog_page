"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-6 px-4">
      <h1 className="text-3xl font-bold text-red-700">Произошла ошибка</h1>
      <p className="text-gray-700 max-w-md">
        Что-то пошло не так при загрузке страницы.
      </p>

      <Button
        onClick={reset}
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white cursor-pointer"
      >
        Попробовать снова
      </Button>
    </div>
  );
}
