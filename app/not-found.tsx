import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PAGES } from '@/config/pages.config';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-6 text-center px-4">
      <h1 className="text-5xl font-extrabold text-red-600">404</h1>
      <h2 className="text-2xl font-bold">Страница не найдена</h2>
      <p className="text-gray-600 max-w-md">
        Похоже, вы перешли по неправильному адресу или такой страницы не существует.
      </p>

      <Link href={PAGES.CATALOG}>
        <Button className="mt-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white cursor-pointer">
          Вернуться в каталог
        </Button>
      </Link>
    </div>
  );
}
