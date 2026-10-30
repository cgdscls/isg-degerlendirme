"use client";

import { useState } from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function NavLinks({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Masaüstü: yatay menü */}
      <nav className="hidden items-center gap-5 md:flex">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm text-gray-600 hover:text-brand-700"
          >
            {l.label}
          </Link>
        ))}
        <LogoutButton />
      </nav>

      {/* Mobil: hamburger buton */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menü"
        className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-600 md:hidden"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-52 rounded-lg border border-gray-200 bg-white py-2 shadow-lg md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-1 border-t border-gray-100 px-4 pt-2">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
}
