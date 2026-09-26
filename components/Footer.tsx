import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-24 lg:pb-16 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-editorial text-3xl tracking-[0.2em] font-light text-white uppercase block">
                TRÈS BON
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#B59A72] uppercase font-medium">
                UNISEX SALON
              </span>
            </Link>
            <p className="text-xs uppercase tracking-[0.25em] text-white/80 font-medium">
              {siteConfig.brandTagline}
            </p>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              An architectural approach to hair, beauty, and grooming. Curated experiences designed around your individuality in Bengaluru.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] uppercase tracking-wider text-[#B59A72] border border-[#B59A72]/30 px-3 py-1">
                Founder: {siteConfig.founder.name}
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/appointment"
                  className="text-[#B59A72] hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-1 font-medium"
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
              Signature Offerings
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link href="/services/haircut" className="hover:text-white transition-colors">
                  Creative Haircuts & Styling
                </Link>
              </li>
              <li>
                <Link href="/services/hair-colour" className="hover:text-white transition-colors">
                  Artisan Balayage & Colour
                </Link>
              </li>
              <li>
                <Link href="/services/hair-spa" className="hover:text-white transition-colors">
                  Ozone Scalp & Hair Spa
                </Link>
              </li>
              <li>
                <Link href="/services/facial" className="hover:text-white transition-colors">
                  Radiance & Dewy Facials
                </Link>
              </li>
              <li>
                <Link href="/services/beard-grooming" className="hover:text-white transition-colors">
                  Precision Beard Sculpting
                </Link>
              </li>
              <li>
                <Link href="/services/bridal" className="hover:text-white transition-colors">
                  Bespoke Bridal & Occasion
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Operational Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
              Salon & Hours
            </h4>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B59A72] shrink-0 mt-0.5" />
                <span>
                  790, 5th Cross, BTM 2nd Stage, opposite Kuvempu Park, Bengaluru 560076
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B59A72] shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneClean}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B59A72] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="pt-2 border-t border-white/10 space-y-1">
                <div className="flex items-start gap-2 text-xs text-stone-300">
                  <Clock className="w-3.5 h-3.5 text-[#B59A72] shrink-0 mt-0.5" />
                  <div>
                    <p>Mon–Fri: 10:00 AM – 9:00 PM</p>
                    <p>Sat–Sun: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} TRÈS BON Unisex Salon. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="https://instagram.com/tresbonsalon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B59A72] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/tresbonsalon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B59A72] transition-colors"
            >
              Facebook
            </a>
            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B59A72] transition-colors"
            >
              Google Reviews
            </a>
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B59A72] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
