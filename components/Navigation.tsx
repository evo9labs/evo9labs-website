"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Helper: check if nav item is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 panel-glass border-b border-white/10 py-3 bg-black/90">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center space-x-3">
            <Image
              priority 
              draggable={false}
              src="/logo.svg" 
              alt="Evo9 Labs Logo"
              width={220} 
              height={80}
            />
          </Link> */}

          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-[200px] h-[30px]">
              <Image
                src="/logo.svg"
                alt="Evo9 Labs Logo"
                fill
                priority
                draggable={false}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* CTA Button */}
          <Link href="/contact" className="hidden md:block">
            <Button className="btn-evolution">Start Your Evolution</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
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

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="btn-evolution w-full mt-2">
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

export default Navigation;
