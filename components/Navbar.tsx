"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#F7F4EF]/95 backdrop-blur-md shadow-xs border-b border-[#E5E1DA]/80 py-3.5"
            : "bg-[#F7F4EF] border-b border-[#E5E1DA]/40 py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex flex-col items-start transition-opacity hover:opacity-90"
            >
              <span className="font-editorial text-2xl sm:text-3xl tracking-[0.2em] font-light text-[#111111] uppercase">
                TRÈS BON
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#B59A72] uppercase font-medium -mt-1">
                UNISEX SALON
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xs tracking-[0.2em] uppercase font-medium transition-all duration-200 relative py-1",
                      isActive
                        ? "text-[#111111] font-semibold"
                        : "text-[#777777] hover:text-[#111111]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B59A72]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/appointment"
                className="px-5 py-2.5 text-xs font-medium tracking-[0.2em] uppercase bg-[#111111] text-white hover:bg-[#B59A72] transition-colors duration-300 shadow-xs"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#111111] hover:text-[#B59A72] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-[#F7F4EF] lg:hidden flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-6 pt-4">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#B59A72] font-semibold pb-2 border-b border-[#E5E1DA]">
              Menu Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "font-editorial text-2xl tracking-wide transition-colors py-1 flex items-center justify-between",
                      isActive
                        ? "text-[#B59A72] font-medium"
                        : "text-[#111111] hover:text-[#B59A72]"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#B59A72]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Menu Action Buttons */}
          <div className="pt-8 border-t border-[#E5E1DA] space-y-3 pb-20">
            <Link
              href="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3.5 text-xs font-semibold tracking-[0.25em] uppercase bg-[#111111] text-white hover:bg-[#B59A72] transition-colors"
            >
              Book Appointment
            </Link>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-xs font-medium tracking-wider uppercase border border-[#B59A72] text-[#B59A72] hover:bg-[#B59A72] hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="flex items-center justify-center gap-2 py-3 text-xs font-medium tracking-wider uppercase border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Salon
              </a>
            </div>

            <p className="text-center text-[11px] text-[#777777] pt-2">
              790, 5th Cross, BTM 2nd Stage, Bengaluru
            </p>
          </div>
        </div>
      )}
    </>
  );
}
