"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  //test
  return (
    <footer className="panel-glass-alt border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            {/* <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-background">
                E9
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">
                  Evo9 Labs
                </div>
                <div className="text-xs text-muted-foreground">
                  The 9 Dimensions of Digital Evolution
                </div>
              </div>
            </div> */}
            <Link href="/" className="flex items-center space-x-3 pb-6">
              {/* Logo image */}
              <Image
                priority
                draggable={false}
                src="/logo.webp" // path from public folder
                alt="Evo9 Labs Logo"
                width={180} // adjust size as needed
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
              <Link
                href="/services"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@evo9labs.com</span>
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
