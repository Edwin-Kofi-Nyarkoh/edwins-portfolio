"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import ThemeToggle from "./themeToggle";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/service", "Services"],
  ["/project", "Projects"],
  ["/skill", "Skills"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/90 text-black shadow-sm backdrop-blur dark:border-white/10 dark:bg-neutral-950/85 dark:text-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-yellow-700 transition hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:text-yellow-400 dark:hover:bg-neutral-900"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiOutlineX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
        </button>

        <Link href="/" className="text-lg font-bold tracking-wide sm:text-2xl">
          MR. SOFT
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/blog"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-yellow-700 transition hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:text-yellow-400 dark:hover:bg-neutral-900 sm:inline-flex"
            aria-label="Search"
          >
            Blog 
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
          >
            Login
          </Link>
        </div>
      </nav>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 top-16 z-40 bg-black/30 backdrop-blur-[1px]"
          aria-label="Close navigation overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-72 max-w-[85vw] border-r border-black/10 bg-white p-6 text-black shadow-xl transition-transform duration-300 dark:border-white/10 dark:bg-neutral-950 dark:text-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2">
          {links.map(([href, label]) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/15 dark:text-yellow-300"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </aside>
    </header>
  );
}
