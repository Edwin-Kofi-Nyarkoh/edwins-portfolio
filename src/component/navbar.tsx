"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const [cvOpen, setCvOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLDivElement>(null);
  const cvRef = useRef<HTMLDivElement>(null);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle ALL outside clicks (sidebar + CV)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      // Close CV dropdown
      if (cvRef.current && !cvRef.current.contains(target)) {
        setCvOpen(false);
      }

      // Close sidebar
      if (navRef.current && !navRef.current.contains(target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/90 text-black shadow-sm backdrop-blur dark:border-white/10 dark:bg-neutral-950/85 dark:text-white">
      
      {/* WRAP EVERYTHING */}
      <div ref={navRef}>
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

          {/* MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-yellow-700 transition hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:text-yellow-400 dark:hover:bg-neutral-900"
          >
            {isOpen ? <HiOutlineX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
          </button>

          {/* LOGO */}
          <Link href="/" className="text-lg font-bold tracking-wide sm:text-2xl">
            MR. SOFT
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <Link
              href="/blog"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-yellow-700 transition hover:bg-yellow-50 dark:text-yellow-400 dark:hover:bg-neutral-900 sm:inline-flex"
            >
              Blog
            </Link>

            {/* CV DROPDOWN */}
            <div className="relative" ref={cvRef}>
              <button
                onClick={() => setCvOpen((prev) => !prev)}
                className="rounded-full bg-yellow-500 px-6 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
              >
                CV
              </button>

              {cvOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-md bg-white shadow-lg ring-1 ring-black/10 dark:bg-neutral-900">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800"
                  >
                    Preview CV
                  </a>

                  <a
                    href="/cv.pdf"
                    download
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800"
                  >
                    Download CV
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* OVERLAY */}
        {isOpen && (
          <button
            className="fixed inset-0 top-16 z-40 bg-black/30 backdrop-blur-[1px]"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <aside
          className={`fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-72 max-w-[85vw] border-r border-black/10 bg-white p-6 shadow-xl transition-transform duration-300 dark:border-white/10 dark:bg-neutral-950 ${
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
      </div>
    </header>
  );
}