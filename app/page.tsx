import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Добро пожаловать в наш магазин!</h1>
      <Link
        href="/catalog"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition"
      >
        Перейти в каталог
      </Link>
    </div>
  );
}
