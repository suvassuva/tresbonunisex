export interface AppointmentPayload {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  stylist?: string;
  message?: string;
}

const SALON_WHATSAPP_NUMBER = "917483502470";

export function getGeneralWhatsAppLink(customMsg?: string): string {
  const text = customMsg || "Hi TRÈS BON Salon, I would like to book an appointment.";
  return `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getAppointmentWhatsAppLink(data: AppointmentPayload): string {
  const lines = [
    "Hi TRÈS BON Salon, I would like to request an appointment.",
    `• Name: ${data.name || "Not provided"}`,
    `• Phone: ${data.phone || "Not provided"}`,
    `• Service: ${data.service || "General Inquiry"}`,
    `• Preferred Date: ${data.date || "Anytime"}`,
    `• Preferred Time: ${data.time || "Flexible"}`,
  ];

  if (data.stylist && data.stylist !== "Any Stylist") {
    lines.push(`• Preferred Stylist: ${data.stylist}`);
  }

  if (data.message && data.message.trim().length > 0) {
    lines.push(`• Message: ${data.message.trim()}`);
  }

  return `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
