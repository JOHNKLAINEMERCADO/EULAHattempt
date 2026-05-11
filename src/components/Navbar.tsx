"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import ExtensionPopup from "./ExtensionPopup";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/analyzer", label: "Analyzer" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname() ?? "";
  const [popupOpen, setPopupOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full border-b border-border bg-nav-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/EULAH-Logo.png"
            alt="EULAH Logo"
            width={36}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-text-primary">
              EULAH
            </span>
            <span className="text-[10px] font-medium tracking-wide text-eulah">
              AI ASSISTANT
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 transition-colors duration-200 ${
                    active
                      ? "text-eulah"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-[-2px] left-0 h-[2.5px] w-full rounded-full bg-eulah" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setPopupOpen((p) => !p)}
                className="relative flex items-center gap-1.5 rounded-full bg-card px-2 py-1.5 shadow-md shadow-eulah/20 ring-1 ring-border transition-all hover:shadow-lg active:scale-[0.96]"
              >
                <Image
                  src="/EULAH-Logo.png"
                  alt="EULAH Extension"
                  width={20}
                  height={20}
                  className="h-5 w-auto"
                />
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-nav-bg" />
              </button>
              {popupOpen && (
                <ExtensionPopup onClose={() => setPopupOpen(false)} />
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-border transition-colors hover:bg-eulah-muted"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
