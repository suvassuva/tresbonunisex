import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Brands & Products | Aveda, 3TENX, Wella, Jeannot, Dermafig, Depilève",
  description:
    "Explore the authentic international hair, skin, and waxing laboratories partnered with TRÈS BON Unisex Salon in Bengaluru: Aveda botanical care, 3TENX, Wella Professionals, Jeannot Ceuticals, Dermafig, Depilève, and Rica Italian wax.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
