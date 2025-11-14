"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { nav_items } from "@/constant";

const Navbar = () => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper: check if nav item is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-lg border-b border-border/50`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 ">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-[215px] h-[40px]">
              <Image
                src="/logo.webp"
                alt="Evo9 Labs Logo"
                fill
                priority
                draggable={false}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {nav_items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-white border-b-2 border-primary pb-1" // active link
                    : "text-gray-300 hover:text-white" // default
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all">
              Start Your Evolution
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 mt-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {nav_items.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors pl-3 ${
                    isActive(item.path)
                      ? "text-white border-l-4 border-primary" // active item
                      : "text-gray-300 hover:text-white" // default
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link href="/contact" onClick={closeMobileMenu}>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all">
                  Start Your Evolution
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
