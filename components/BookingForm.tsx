"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/data/services";
import { getAppointmentWhatsAppLink } from "@/lib/whatsapp";
import { Calendar, Clock, User, Phone, Scissors, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";

interface BookingFormProps {
  preselectedService?: string;
}

export function BookingForm({ preselectedService }: BookingFormProps) {
  const searchParams = useSearchParams();
  const urlService = searchParams ? searchParams.get("service") : null;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: preselectedService || urlService || servicesData[0].name,
    date: "",
    time: "11:00 AM",
    stylist: "Any Stylist",
    message: "",
  });

  useEffect(() => {
    if (urlService) {
      setFormData((prev) => ({ ...prev, service: urlService }));
    }
  }, [urlService]);

  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
  ];

  const stylists = [
    "Any Stylist",
    "Kamala (Founder & Creative Director)",
    "Senior Hair Specialist",
    "Colour & Balayage Artisan",
    "Grooming & Barber Specialist",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getAppointmentWhatsAppLink(formData);
    setLastWhatsAppUrl(url);
    setSubmitted(true);
    // Launch WhatsApp
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white border border-[#E5E1DA] p-6 sm:p-10 shadow-sm max-w-2xl mx-auto">
      {submitted ? (
        <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-[#B59A72]/20 text-[#B59A72] flex items-center justify-center rounded-full mx-auto">
            <CheckCircle className="w-8 h-8 stroke-[1.5]" />
          </div>
          <h3 className="font-editorial text-3xl font-light text-[#111111]">
            Appointment Request Ready
          </h3>
          <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
            WhatsApp should have opened in a new tab with your prefilled appointment summary. If it didn&apos;t open automatically, tap the button below:
          </p>

          <div className="bg-[#F7F4EF] p-4 text-left border border-[#E5E1DA] text-xs space-y-1.5 max-w-md mx-auto text-stone-700">
            <p><strong className="text-[#111111]">Client:</strong> {formData.name} ({formData.phone})</p>
            <p><strong className="text-[#111111]">Service:</strong> {formData.service}</p>
            <p><strong className="text-[#111111]">Date & Time:</strong> {formData.date} at {formData.time}</p>
            {formData.stylist !== "Any Stylist" && (
              <p><strong className="text-[#111111]">Stylist:</strong> {formData.stylist}</p>
            )}
          </div>

          <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={lastWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111111] text-white hover:bg-[#B59A72] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#B59A72]" />
              Open WhatsApp Now
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center justify-center px-6 py-3.5 border border-[#E5E1DA] text-[#777777] hover:text-[#111111] hover:border-[#111111] text-xs uppercase tracking-[0.2em] transition-colors"
            >
              Edit Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center pb-4 border-b border-[#E5E1DA]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B59A72] font-semibold block mb-1">
              Direct WhatsApp Dispatch
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#111111] font-light">
              Reserve Your Salon Experience
            </h3>
            <p className="text-xs text-[#777777] mt-1.5">
              Fill in your preferences. We will confirm your slot instantly on WhatsApp.
            </p>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5 flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5 text-[#B59A72]" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="e.g. Priya Sharma"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-[#E5E1DA] focus:border-[#B59A72] focus:bg-white focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B59A72]" />
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-[#E5E1DA] focus:border-[#B59A72] focus:bg-white focus:outline-hidden transition-colors"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label
              htmlFor="service"
              className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5 flex items-center gap-1.5"
            >
              <Scissors className="w-3.5 h-3.5 text-[#B59A72]" />
              Select Service *
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-[#E5E1DA] focus:border-[#B59A72] focus:bg-white focus:outline-hidden transition-colors"
            >
              {servicesData.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name} ({s.category}) — From {s.startingPrice}
                </option>
              ))}
              <option value="Consultation / Multiple Services">
                Custom Consultation / Multiple Services
              </option>
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#B59A72]" />
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-[#E5E1DA] focus:border-[#B59A72] focus:bg-white focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5 flex items-center gap-1.5"
              >
                <Clock className="w-3.5 h-3.5 text-[#B59A72]" />
                Preferred Time Slot *
              </label>
              <select
                id="time"
                required
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-[#E5E1DA] focus:border-[#B59A72] focus:bg-white focus:outline-hidden transition-colors"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Preferred Stylist */}
          <div>
            <label
              htmlFor="stylist"
              className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5"
            >
              Preferred Stylist (Optional)
            </label>
            <select
              id="stylist"
              value={formData.stylist}
              onChange={(e) =>
                setFormData({ ...formData, stylist: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-[#E5E1DA] focus:border-[#B59A72] focus:bg-white focus:outline-hidden transition-colors"
            >
              {stylists.map((stylist) => (
                <option key={stylist} value={stylist}>
                  {stylist}
                </option>
              ))}
            </select>
          </div>

          {/* Message / Special Requests */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5"
            >
              Special Notes / Hair Length / Requests
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Tell us about your hair type, desired shade, or any questions..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-[#E5E1DA] focus:border-[#B59A72] focus:bg-white focus:outline-hidden transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#111111] text-white hover:bg-[#B59A72] transition-colors duration-300 text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2 group shadow-md"
          >
            <span>Request Appointment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-center text-[11px] text-stone-500">
            🔒 By submitting, you will be redirected to WhatsApp to confirm directly with our reception.
          </p>
        </form>
      )}
    </div>
  );
}
