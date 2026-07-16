"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* ==================== DATA ==================== */

const fullMenu = {
  antipasti: [
    {
      name: "Bruschetta al Pomodoro",
      description: "Pane artigianale tostato con pomodorini freschi, aglio, basilico e olio EVO.",
      price: "€7",
      tags: ["vegano"],
    },
    {
      name: "Antipasto della Casa",
      description: "Selezione di affettati misti, mozzarella di bufala, olive e verdure sott'olio.",
      price: "€14",
      tags: [],
    },
    {
      name: "Prosciutto e Melone",
      description: "Prosciutto crudo di Parma DOP con melone fresco di stagione.",
      price: "€12",
      tags: [],
    },
    {
      name: "Carpaccio di Manzo",
      description: "Sottili fette di manzo con rucola, scaglie di Parmigiano e limone.",
      price: "€13",
      tags: [],
    },
    {
      name: "Verdure Grigliate",
      description: "Zucchine, melanzane, peperoni e radicchio grigliati con olio e erbe aromatiche.",
      price: "€9",
      tags: ["vegano", "senza glutine"],
    },
    {
      name: "Mozzarella di Bufala",
      description: "Mozzarella di bufala campana DOP con pomodori cuore di bue e basilico.",
      price: "€11",
      tags: ["vegetariana", "senza glutine"],
    },
  ],
  pizze: [
    {
      name: "Margherita",
      description: "Pomodoro San Marzano, fior di latte, basilico fresco, olio EVO.",
      price: "€9",
      tags: ["vegetariana"],
    },
    {
      name: "Diavola",
      description: "Pomodoro, mozzarella, salame piccante calabrese, peperoncino fresco.",
      price: "€11",
      tags: ["piccante"],
    },
    {
      name: "Quattro Stagioni",
      description: "Pomodoro, mozzarella, prosciutto cotto, carciofi, funghi porcini, olive.",
      price: "€13",
      tags: [],
    },
    {
      name: "Capricciosa",
      description: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofini e olive nere.",
      price: "€13",
      tags: [],
    },
    {
      name: "Salsiccia e Friarielli",
      description: "Mozzarella, salsiccia di maiale artigianale, friarielli saltati in padella.",
      price: "€14",
      tags: [],
    },
    {
      name: "Regina Major Special",
      description:
        "Mozzarella di bufala, crudo di Parma, rucola fresca e scaglie di Parmigiano. La nostra firma.",
      price: "€16",
      tags: ["signature"],
    },
    {
      name: "Marinara",
      description: "Pomodoro San Marzano, aglio, origano, olio EVO. La pizza della tradizione.",
      price: "€8",
      tags: ["vegano"],
    },
    {
      name: "Quattro Formaggi",
      description: "Mozzarella, Gorgonzola, Emmental, Parmigiano Reggiano e un filo di miele.",
      price: "€14",
      tags: ["vegetariana"],
    },
    {
      name: "Bufalina",
      description: "Pomodorini freschi, mozzarella di bufala DOP, basilico e olio EVO a crudo.",
      price: "€15",
      tags: ["vegetariana"],
    },
    {
      name: "Funghi Porcini",
      description: "Mozzarella fiordilatte, funghi porcini trifolati, aglio e prezzemolo.",
      price: "€13",
      tags: ["vegetariana"],
    },
    {
      name: "Tonno e Cipolla",
      description: "Pomodoro, mozzarella, tonno in olio di oliva, cipolle rosse di Tropea.",
      price: "€12",
      tags: [],
    },
    {
      name: "Wurstel e Patatine",
      description: "Mozzarella, wurstel di suino, patatine fritte. La preferita dai più piccoli!",
      price: "€10",
      tags: [],
    },
  ],
  bevande: [
    {
      name: "Acqua Naturale / Frizzante",
      description: "Bottiglia 0.75L.",
      price: "€2",
      tags: [],
    },
    {
      name: "Birra Artigianale alla Spina",
      description: "Birra bionda artigianale locale. Piccola (0.3L) o grande (0.5L).",
      price: "€4 / €6",
      tags: [],
    },
    {
      name: "Vino della Casa",
      description: "Rosso o bianco sfuso. Quartino (0.25L) o mezzo litro.",
      price: "€4 / €7",
      tags: [],
    },
    {
      name: "Coca-Cola / Fanta / Sprite",
      description: "Lattina 330ml.",
      price: "€3",
      tags: [],
    },
    {
      name: "Succo di Frutta",
      description: "Albicocca, pesca o pera. Brick 200ml.",
      price: "€2.50",
      tags: [],
    },
    {
      name: "Limoncello Artigianale",
      description: "Prodotto localmente, servito freddo come digestivo.",
      price: "€3.50",
      tags: [],
    },
    {
      name: "Caffè Espresso",
      description: "Miscela 100% arabica torrefatta artigianalmente.",
      price: "€1.50",
      tags: [],
    },
    {
      name: "Tisane & Tè",
      description: "Selezione di tisane biologiche e tè in foglie.",
      price: "€2.50",
      tags: [],
    },
    {
      name: "Spritz Aperol",
      description: "Prosecco, Aperol e uno splash di soda. Servito con oliva e fettina d'arancia.",
      price: "€5",
      tags: [],
    },
    {
      name: "Limonata Fresca",
      description: "Limonata fatta in casa con limoni freschi siciliani e menta.",
      price: "€4",
      tags: ["vegano"],
    },
  ],
};

type MenuCategory = "antipasti" | "pizze" | "bevande";

const tabs: { key: MenuCategory; label: string; icon: string; desc: string }[] = [
  { key: "antipasti", label: "Antipasti", icon: "🥗", desc: "Selezioni per iniziare" },
  { key: "pizze", label: "Pizze a Legna", icon: "🍕", desc: "Dal nostro forno artigianale" },
  { key: "bevande", label: "Bevande", icon: "🍷", desc: "Vini, birre e molto altro" },
];

const tagConfig: Record<string, { label: string; bg: string; color: string }> = {
  vegano: { label: "🌿 Vegano", bg: "#e8f5e9", color: "#2e7d32" },
  vegetariana: { label: "🥦 Vegetariana", bg: "#f3e5f5", color: "#6a1b9a" },
  "senza glutine": { label: "🌾 Senza Glutine", bg: "#fff8e1", color: "#f57f17" },
  piccante: { label: "🌶️ Piccante", bg: "#fce4ec", color: "#c62828" },
  signature: { label: "⭐ Signature", bg: "#fff9e6", color: "#b8860b" },
};

/* ==================== PAGE ==================== */

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<MenuCategory>("antipasti");
  const items = fullMenu[activeTab];

  return (
    <div className="menu-page">
      {/* ── Top Bar ── */}
      <header className="menu-page-header">
        <div className="container menu-page-header-inner">
          <Link href="/" className="navbar-logo" style={{ textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="Ristorante Pizzeria Regina Major"
              width={160}
              height={50}
              className="navbar-logo-img"
            />
          </Link>
          <Link href="/#prenota" className="btn-prenota" style={{ textDecoration: "none" }}>
            Prenota Ora
          </Link>
        </div>
      </header>

      {/* ── Hero Banner ── */}
      <div className="menu-page-hero">
        <div className="menu-page-hero-overlay" />
        <div className="menu-page-hero-content">
          <p className="menu-page-hero-eyebrow">Ristorante Pizzeria Regina Major</p>
          <h1 className="menu-page-hero-title">Il Nostro Menù</h1>
          <p className="menu-page-hero-sub">
            Cucina autentica, ingredienti freschi, pizze cotte nel forno a legna.
          </p>
        </div>
      </div>

      {/* ── Tab Bar ── */}
      <div className="menu-page-tabs-bar">
        <div className="container">
          <div className="menu-page-tabs">
            {tabs.map((t) => (
              <button
                key={t.key}
                id={`tab-${t.key}`}
                className={`menu-page-tab ${activeTab === t.key ? "active" : ""}`}
                onClick={() => setActiveTab(t.key)}
              >
                <span className="menu-page-tab-icon">{t.icon}</span>
                <span className="menu-page-tab-label">{t.label}</span>
                <span className="menu-page-tab-desc">{t.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Items ── */}
      <main className="menu-page-main">
        <div className="container">
          <div className="menu-page-category-header">
            <span className="menu-page-cat-icon">
              {tabs.find((t) => t.key === activeTab)?.icon}
            </span>
            <div>
              <h2 className="menu-page-cat-title">
                {tabs.find((t) => t.key === activeTab)?.label}
              </h2>
              <p className="menu-page-cat-desc">
                {tabs.find((t) => t.key === activeTab)?.desc}
              </p>
            </div>
          </div>

          <div className="menu-page-list">
            {items.map((item, i) => (
              <div
                key={item.name}
                className="menu-page-item"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="menu-page-item-body">
                  <div className="menu-page-item-top">
                    <span className="menu-page-item-name">
                      {item.name}
                      {item.tags.includes("signature") && (
                        <span className="menu-page-signature">★ Piatto della casa</span>
                      )}
                    </span>
                    <span className="menu-page-dots" />
                    <span className="menu-page-item-price">{item.price}</span>
                  </div>
                  <p className="menu-page-item-desc">{item.description}</p>
                  {item.tags.length > 0 && (
                    <div className="menu-page-item-tags">
                      {item.tags.map((tag) => {
                        const tc = tagConfig[tag];
                        return tc ? (
                          <span
                            key={tag}
                            className="menu-tag"
                            style={{ background: tc.bg, color: tc.color }}
                          >
                            {tc.label}
                          </span>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Allergen note */}
          <div className="menu-page-allergen">
            <span>ℹ️</span>
            <p>
              Per informazioni su <strong>allergeni</strong> e ingredienti, il nostro
              personale è a vostra disposizione. I piatti sono preparati in cucina dove
              si usano prodotti contenenti glutine, frutta a guscio e altri allergeni.
            </p>
          </div>
        </div>
      </main>

      {/* ── CTA Footer ── */}
      <div className="menu-page-cta">
        <div className="container menu-page-cta-inner">
          <div>
            <p className="menu-page-cta-title">Ti è venuta l&apos;acquolina in bocca?</p>
            <p className="menu-page-cta-sub">Prenota il tuo tavolo o chiamaci al 030 938 0709</p>
          </div>
          <div className="menu-page-cta-btns">
            <Link href="/#prenota" className="btn-hero btn-hero-primary">
              Prenota un Tavolo
            </Link>
            <a href="tel:+390309380709" className="btn-hero btn-hero-secondary">
              📞 Chiama
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
