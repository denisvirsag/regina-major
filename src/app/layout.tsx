import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ristorante Pizzeria Regina Major | Gusto e Tradizione a Manerbio",
  description:
    "Ristorante Pizzeria Regina Major a Manerbio (BS). Pizze cotte a legna, cucina tradizionale italiana, tavoli all'aperto e sala privata. Prenota il tuo tavolo al 030 938 0709.",
  keywords: [
    "ristorante manerbio",
    "pizzeria manerbio",
    "regina major",
    "pizza a legna",
    "cucina italiana",
    "ristorante brescia",
  ],
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
