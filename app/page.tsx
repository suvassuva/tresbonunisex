import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ReviewCard } from "@/components/ReviewCard";
import { CTASection } from "@/components/CTASection";
import { GoogleMap } from "@/components/GoogleMap";
import { servicesData } from "@/data/services";
import { reviewsData } from "@/data/reviews";
import { siteConfig } from "@/data/site";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Compass,
  Phone,
  MessageSquare,
  Navigation,
  Clock,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  const previewReviews = reviewsData.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* 01. Hero */}
      <Hero />

      {/* 02. Introduction: The Art of Personal Style */}
      <section className="py-20 lg:py-28 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Editorial Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-xl border border-[#E5E1DA]">
                <Image
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80"
                  alt="TRÈS BON Salon styling session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-[#111111] text-white p-6 max-w-xs shadow-2xl border-l-2 border-[#B59A72] hidden sm:block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B59A72] font-semibold block mb-1">
                  Our Philosophy
                </span>
                <p className="font-editorial text-xl italic font-light">
                  “Style is personal. Beyond trends, labels and expectations.”
                </p>
              </div>
            </div>

            {/* Editorial Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
                <span className="w-6 h-[1px] bg-[#B59A72]" />
                <span>The Editorial Approach</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-tight">
                THE ART OF PERSONAL STYLE
              </h2>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                At TRÈS BON, style is personal. We create thoughtful hair, beauty and grooming experiences designed around you — beyond trends, labels and expectations.
              </p>

              <p className="text-[#777777] text-sm sm:text-base leading-relaxed">
                Nestled directly opposite Kuvempu Park in BTM 2nd Stage, our salon provides a tranquil retreat where architectural precision merges with welcoming warmth. Whether you are reinventing your silhouette or indulging in a restorative scalp therapy, every moment is custom tailored to your authentic presence.
              </p>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111111] text-white hover:bg-[#B59A72] text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 group"
                >
                  <span>Discover TRÈS BON</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Main Services Section */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Curated Craft"
            title="OUR SERVICES"
            description="Explore our signature hair, colour, skin, and grooming rituals crafted with meticulous artistry."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 04. Experience: 15+ Years of Mastery */}
      <section className="py-20 lg:py-28 bg-[#111111] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B59A72] font-semibold block">
                Heritage & Mastery
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
                15+ YEARS OF EXPERIENCE
              </h2>
              <p className="text-stone-300 text-base leading-relaxed font-light">
                Crafting distinct identities through bespoke cosmetology, hair design, and restorative care in Bengaluru. We do not mass-produce haircuts; we listen, sculpt, and elevate.
              </p>
              <div className="pt-2">
                <Link
                  href="/appointment"
                  className="inline-block px-7 py-3.5 bg-[#B59A72] text-[#111111] hover:bg-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300"
                >
                  Book Your Experience
                </Link>
              </div>
            </div>

            {/* 4 Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] p-6 sm:p-8 border border-white/10 hover:border-[#B59A72]/50 transition-colors">
                <Sparkles className="w-6 h-6 text-[#B59A72] mb-4" />
                <h3 className="font-editorial text-xl sm:text-2xl font-light text-white mb-2">
                  Personalized Styling
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Every haircut and tint is tailored to your hair texture, growth patterns, and bone structure.
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-6 sm:p-8 border border-white/10 hover:border-[#B59A72]/50 transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#B59A72] mb-4" />
                <h3 className="font-editorial text-xl sm:text-2xl font-light text-white mb-2">
                  Professional Expertise
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Directed by Kamala, bringing 15+ years of European precision techniques and advanced colour chemistry.
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-6 sm:p-8 border border-white/10 hover:border-[#B59A72]/50 transition-colors">
                <Compass className="w-6 h-6 text-[#B59A72] mb-4" />
                <h3 className="font-editorial text-xl sm:text-2xl font-light text-white mb-2">
                  Premium Experience
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Unrushed appointments, serene botanical ambiance, ozone steam rituals, and organic elixirs.
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-6 sm:p-8 border border-white/10 hover:border-[#B59A72]/50 transition-colors">
                <HeartHandshake className="w-6 h-6 text-[#B59A72] mb-4" />
                <h3 className="font-editorial text-xl sm:text-2xl font-light text-white mb-2">
                  Gender-Inclusive
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  A sanctuary that celebrates individual expression. Style is an art without gendered boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Gallery Preview: Style In Motion */}
      <section className="py-20 lg:py-28 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Visual Journal"
            title="STYLE IN MOTION"
            description="A curated preview of haircuts, balayage, skin radiance, and groom styling created at TRÈS BON."
          />

          <div className="mt-12">
            <GalleryGrid previewOnly limit={8} />
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white hover:bg-[#B59A72] text-xs uppercase tracking-[0.25em] font-medium transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 06. Founder Spotlight: Meet Kamala */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text details */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
                <span className="w-6 h-[1px] bg-[#B59A72]" />
                <span>Founder & Creative Director</span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#111111]">
                MEET KAMALA
              </h2>

              <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed">
                {siteConfig.founder.bio}
              </p>

              <blockquote className="p-6 bg-[#F7F4EF] border-l-2 border-[#B59A72] text-stone-800 font-editorial text-xl italic leading-relaxed">
                “{siteConfig.founder.philosophy}”
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
                <div>
                  <h4 className="font-editorial text-lg text-[#111111]">
                    Precision Hair Sculpting
                  </h4>
                  <p className="text-xs text-[#777777] mt-1 leading-normal">
                    Trained in structural geometry and custom texturizing.
                  </p>
                </div>
                <div>
                  <h4 className="font-editorial text-lg text-[#111111]">
                    Bespoke Colour Science
                  </h4>
                  <p className="text-xs text-[#777777] mt-1 leading-normal">
                    Specialist in Asian and Indian hair undertone harmony.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111111] text-white hover:bg-[#B59A72] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Founder Portrait */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-xl border border-[#E5E1DA]">
                <Image
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80"
                  alt="Kamala - Founder and Creative Director of TRÈS BON Unisex Salon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-xs text-white p-4 border-t border-[#B59A72]">
                  <p className="font-editorial text-xl font-light">Kamala</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#B59A72]">
                    Founder & Creative Director • 15+ Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. Reviews: Client Love */}
      <section className="py-20 lg:py-28 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="CLIENT LOVE"
            description="Read firsthand experiences from our discerning clientele across Bengaluru."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300"
            >
              <span>View On Google Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 08. Location & Salon Hours */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sanctuary"
            title="VISIT TRÈS BON"
            description="Located in BTM 2nd Stage, Bengaluru, right opposite Kuvempu Park."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Salon Details Card */}
            <div className="lg:col-span-5 bg-[#F7F4EF] border border-[#E5E1DA] p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B59A72] font-semibold">
                  Location & Timing
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#111111] font-light">
                  TRÈS BON UNISEX SALON
                </h3>
                <div className="space-y-3 text-sm text-stone-600 pt-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B59A72] shrink-0 mt-1" />
                    <span>
                      790, 5th Cross, BTM 2nd Stage, opposite Kuvempu Park, Bengaluru 560076
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#B59A72] shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-[#111111]">MONDAY – FRIDAY</p>
                      <p className="text-xs">10:00 AM – 9:00 PM</p>
                      <p className="font-medium text-[#111111] mt-2">SATURDAY – SUNDAY</p>
                      <p className="text-xs">9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E5E1DA] space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${siteConfig.contact.phoneClean}`}
                    className="flex items-center justify-center gap-2 py-3 px-3 bg-[#111111] text-white hover:bg-[#B59A72] text-xs uppercase tracking-wider font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                  <a
                    href={getGeneralWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-3 border border-[#B59A72] text-[#B59A72] hover:bg-[#B59A72] hover:text-white text-xs uppercase tracking-wider font-medium transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-3 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white text-xs uppercase tracking-wider font-medium transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[380px]">
              <GoogleMap className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 09. Final CTA */}
      <CTASection
        title="READY FOR YOUR NEXT LOOK?"
        subtitle="Your style. Your confidence. Your TRÈS BON experience."
      />
    </div>
  );
}
