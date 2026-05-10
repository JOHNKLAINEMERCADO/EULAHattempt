"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import ExtensionPopup from "./ExtensionPopup";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/analyzer", label: "Analyzer" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname() ?? "";
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#E8EDDE] bg-[#F9FAF5]">
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
            <span className="text-lg font-bold tracking-tight text-[#1a1a1a]">
              EULAH
            </span>
            <span className="text-[10px] font-medium tracking-wide text-[#9BC53D]">
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
                      ? "text-[#9BC53D]"
                      : "text-[#4a4a4a] hover:text-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-[-2px] left-0 h-[2.5px] w-full rounded-full bg-[#9BC53D]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setPopupOpen((p) => !p)}
                className="relative flex items-center gap-1.5 rounded-full bg-white px-2 py-1.5 shadow-md shadow-[#9BC53D]/20 ring-1 ring-[#E8EDDE] transition-all hover:shadow-lg active:scale-[0.96]"
              >
                <Image
                  src="/EULAH-Logo.png"
                  alt="EULAH Extension"
                  width={20}
                  height={20}
                  className="h-5 w-auto"
                />
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-[#F9FAF5]" />
              </button>
              {popupOpen && (
                <ExtensionPopup onClose={() => setPopupOpen(false)} />
              )}
            </div>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EDDE] transition-colors hover:bg-[#d4dec6]">
              <User className="h-5 w-5 text-[#4a4a4a]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
