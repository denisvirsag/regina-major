import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Il Nostro Menù",
  description: "Sfoglia il menù completo del Ristorante Pizzeria Regina Major a Manerbio. Pizze cotte nel forno a legna, antipasti sfiziosi, bevande e specialità locali.",
  alternates: {
    canonical: "https://reginamajor.it/menu",
  },
  openGraph: {
    title: "Il Nostro Menù | Ristorante Pizzeria Regina Major",
    description: "Sfoglia il menù completo di pizze cotte a legna, antipasti sfiziosi e specialità di terra e mare a Manerbio.",
    url: "https://reginamajor.it/menu",
    images: [
      {
        url: "/pizza.jpg",
        width: 1200,
        height: 630,
        alt: "Il Menù di Ristorante Pizzeria Regina Major"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Il Nostro Menù | Ristorante Pizzeria Regina Major",
    description: "Sfoglia il menù completo di pizze a legna e piatti tipici a Manerbio.",
    images: ["/pizza.jpg"],
  }
};

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
