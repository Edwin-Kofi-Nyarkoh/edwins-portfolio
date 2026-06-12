"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-yellow-600 transition hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:border-white/10 dark:bg-neutral-900 dark:text-yellow-400 dark:hover:bg-neutral-800"
      aria-label="Toggle color theme"
    >
      {isDark ? <FaMoon aria-hidden size={18} /> : <FaSun aria-hidden size={18} />}
    </button>
  );
}
