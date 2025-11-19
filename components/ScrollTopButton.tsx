"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "./ui/button";
import { scrollToTop } from '@/utils/scrollToTop';

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6
        rounded-full p-3 shadow-xl cursor-pointer
        bg-black text-white hover:bg-neutral-800
        dark:bg-white dark:text-black dark:hover:bg-neutral-300
      "
    >
      <ArrowUp size={20} />
    </Button>
  );
}
