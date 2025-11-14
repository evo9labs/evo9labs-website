"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { nav_items } from "@/constant";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname(); // get current route

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const blog_path = { name: "Blogs", path: "/blogs" };
  const NavItems = [...nav_items, blog_path];

  return (
    <footer className="panel-glass-alt border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 pb-6">
              <Image
                priority
                draggable={false}
                src="/logo.webp"
                alt="Evo9 Labs Logo"
                width={180}
                height={59}
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              We evolve your business digitally with complete end-to-end
              solutions across 9 essential dimensions of modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {NavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block transition-colors ${
                    isActive(item.path)
                      ? "text-primary font-bold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@evo9labs.com</span>
              </div>

              <div>
                <h3 className="text-foreground font-semibold mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/evo9labs"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/evo9labs"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/evo9labs"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {currentYear} Evo9Labs. All rights reserved. Evolving the
            digital future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
