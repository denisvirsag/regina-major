import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reginamajor.it"), // fallback domain placeholder
  title: {
    default: "Ristorante Pizzeria Regina Major | Manerbio",
    template: "%s | Regina Major Manerbio"
  },
  description: "Ristorante Pizzeria Regina Major a Manerbio (BS). Specialità di carne e pesce, pizze tradizionali cotte nel forno a legna, piatti vegani, tavoli all'aperto e sala privata. Prenota al 030 938 0709.",
  keywords: [
    "ristorante manerbio",
    "pizzeria manerbio",
    "regina major",
    "pizza forno a legna manerbio",
    "cucina tipica brescia",
    "dove mangiare manerbio",
    "pizzeria vicino brescia"
  ],
  authors: [{ name: "Ristorante Pizzeria Regina Major" }],
  creator: "Ristorante Pizzeria Regina Major",
  publisher: "Ristorante Pizzeria Regina Major",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Ristorante Pizzeria Regina Major | Gusto e Tradizione a Manerbio",
    description: "Scopri il menù autentico del Ristorante Pizzeria Regina Major a Manerbio (BS). Pizze a legna, piatti tradizionali, opzioni vegane e sala privata.",
    url: "https://reginamajor.it",
    siteName: "Ristorante Pizzeria Regina Major",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Interno Ristorante Pizzeria Regina Major con forno a legna"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ristorante Pizzeria Regina Major | Manerbio",
    description: "Cucina tradizionale e pizze cotte a legna a Manerbio (BS). Prenota il tuo tavolo.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
