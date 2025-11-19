import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Каталог товаров",
  description: "Страница каталога товаров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
