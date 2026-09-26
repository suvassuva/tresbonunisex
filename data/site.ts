export interface SiteConfig {
  name: string;
  brandTagline: string;
  founder: {
    name: string;
    role: string;
    experience: string;
    bio: string;
    philosophy: string;
  };
  contact: {
    phone: string;
    phoneClean: string;
    email: string;
    whatsapp: string;
    whatsappClean: string;
  };
  address: {
    street: string;
    area: string;
    landmark: string;
    city: string;
    pincode: string;
    full: string;
    mapsUrl: string;
    embedUrl: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
  };
  navLinks: Array<{ label: string; href: string }>;
  socials: Array<{ name: string; href: string; icon: string }>;
}

export const siteConfig: SiteConfig = {
  name: "TRÈS BON Unisex Salon",
  brandTagline: "STYLE BEYOND GENDER",
  founder: {
    name: "Kamala",
    role: "Founder & Creative Director",
    experience: "15+ Years of Industry Mastery",
    bio: "With over a decade and a half of dedicated artistry in contemporary cosmetology and precision hair design, Kamala founded TRÈS BON to redefine Bengaluru's salon landscape. Her vision centers on individual self-expression without gender constraints.",
    philosophy: "Style isn't dictated by labels or fleeting trends—it is an authentic reflection of who you are. Every cut, tint, and treatment should elevate your innate confidence.",
  },
  contact: {
    phone: "+91 7483 502 470",
    phoneClean: "917483502470",
    email: "info@tresbonsalon.com",
    whatsapp: "+91 7483 502 470",
    whatsappClean: "917483502470",
  },
  address: {
    street: "790, 5th Cross",
    area: "BTM 2nd Stage",
    landmark: "Opposite Kuvempu Park",
    city: "Bengaluru",
    pincode: "560076",
    full: "790 TRÈS BON UNISEX SALON, 5th Cross, BTM 2nd Stage, opposite Kuvempu Park, Bengaluru 560076",
    mapsUrl: "https://maps.google.com/?q=790+5th+Cross+BTM+2nd+Stage+opposite+Kuvempu+Park+Bengaluru+560076",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8596637318184!2d77.60835497578768!3d12.916738987393437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150119e7a8e7%3A0xbce5cbbba3e7cf18!2sKuvempu%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  hours: {
    weekdays: "Monday – Friday: 10:00 AM – 9:00 PM",
    weekends: "Saturday – Sunday: 9:00 AM – 7:00 PM",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com/tresbonsalon", icon: "instagram" },
    { name: "Facebook", href: "https://facebook.com/tresbonsalon", icon: "facebook" },
    { name: "Google Reviews", href: "https://maps.google.com/?q=790+5th+Cross+BTM+2nd+Stage+opposite+Kuvempu+Park+Bengaluru+560076", icon: "map-pin" },
    { name: "WhatsApp", href: "https://wa.me/917483502470", icon: "message-circle" },
  ],
};
