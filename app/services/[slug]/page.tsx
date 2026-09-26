import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData, ServiceItem } from "@/data/services";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Clock,
  CheckCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} in BTM 2nd Stage`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | TRÈS BON Unisex Salon Bengaluru`,
      description: service.shortDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "provider": {
      "@type": "BeautySalon",
      "name": "TRÈS BON Unisex Salon",
    },
    "description": service.shortDescription,
    "offers": {
      "@type": "Offer",
      "price": service.startingPrice.replace(/[^0-9]/g, ""),
      "priceCurrency": "INR",
    },
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#111111] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.name}
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-[#B59A72]/40 bg-[#111111]/60 text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
            <span>{service.category} Ritual</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight">
            {service.name}
          </h1>

          <p className="font-editorial text-xl sm:text-2xl text-[#B59A72] font-light italic">
            “{service.tagline}”
          </p>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed pt-2">
            {service.shortDescription}
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs tracking-wider">
            <span className="bg-white/10 px-4 py-2 text-white flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#B59A72]" />
              {service.duration}
            </span>
            <span className="bg-[#B59A72] text-[#111111] font-semibold px-4 py-2">
              Starting from {service.startingPrice}
            </span>
          </div>

          <div className="pt-4">
            <Link
              href={`/appointment?service=${encodeURIComponent(service.name)}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B59A72] text-[#111111] hover:bg-white text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#111111]" />
              <span>Book This Service</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Service Introduction */}
      <section className="py-20 lg:py-24 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeading
            badge="The Philosophy"
            title="THE ARTISTRY"
            description=""
          />
          <p className="text-stone-800 text-lg sm:text-xl font-light leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* 3. What We Offer */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Step by Step"
            title="WHAT WE OFFER"
            description="Our structured ritual designed for restorative perfection and lasting wear."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.offerings.map((offering, idx) => (
              <div
                key={offering.title}
                className="bg-[#F7F4EF] border border-[#E5E1DA] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B59A72] transition-colors"
              >
                <div>
                  <span className="font-editorial text-3xl text-[#B59A72] font-light block mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="font-editorial text-xl font-medium text-[#111111] mb-2">
                    {offering.title}
                  </h4>
                  <p className="text-sm text-[#777777] leading-relaxed">
                    {offering.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits */}
      <section className="py-20 lg:py-24 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why TRÈS BON"
            title="SERVICE BENEFITS"
            description="Experience tangible, health-conscious transformation with each visit."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5E1DA] p-6 flex items-start gap-4 shadow-xs"
              >
                <div className="p-2 bg-[#F7F4EF] text-[#B59A72] shrink-0 border border-[#E5E1DA]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-light">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service Image Gallery */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Visual Evidence"
            title="LOOKBOOK SHOWCASE"
            description={`Moments and editorial finishes achieved for our ${service.name.toLowerCase()} clients.`}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] overflow-hidden bg-stone-100 border border-[#E5E1DA] group"
              >
                <Image
                  src={img}
                  alt={`${service.name} showcase ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Tiers */}
      <section className="py-20 lg:py-24 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Transparent Rates"
            title="SERVICE PRICING"
            description="Clear, honest pricing. Rates may vary depending on hair length and customized requirements."
          />

          <div className="mt-12 bg-white border border-[#E5E1DA] divide-y divide-[#E5E1DA] shadow-xs">
            {service.pricingTiers.map((tier) => (
              <div
                key={tier.item}
                className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
              >
                <div>
                  <h4 className="font-editorial text-xl text-[#111111] font-light">
                    {tier.item}
                  </h4>
                  {tier.note && (
                    <p className="text-xs text-[#777777] mt-1">{tier.note}</p>
                  )}
                </div>
                <div className="text-left sm:text-right">
                  <span className="font-editorial text-2xl text-[#111111] font-normal">
                    {tier.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-[#777777]">
            💡 Detailed cost estimation provided during your initial consultation prior to beginning any service.
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E1DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Inquiries"
            title="FREQUENT QUESTIONS"
            description="Everything you should know before stepping into the salon."
          />

          <div className="mt-12 space-y-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#F7F4EF] border border-[#E5E1DA] p-6 sm:p-7 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#B59A72] shrink-0" />
                  <h4 className="font-editorial text-xl font-light text-[#111111]">
                    {faq.question}
                  </h4>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Strong Book Appointment CTA */}
      <CTASection
        title={`BOOK YOUR ${service.name.toUpperCase()}`}
        subtitle="Reserve your tailored session with our master artists in BTM 2nd Stage."
      />
    </div>
  );
}
