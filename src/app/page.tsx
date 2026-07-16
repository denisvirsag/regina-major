"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

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
      tags: ["vegano", "senza glutine"],
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
      description: "Mozzarella di bufala, crudo di Parma, rucola fresca e scaglie di Parmigiano. La nostra firma.",
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
      description: "Rosso o bianco sfuso, selezione del nostro cantiniere. Quartino (0.25L) o mezzo litro.",
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
  ],
};

// Keep small preview items for the hero preview section
const menuPreviewItems = [
  {
    title: "Antipasti della Casa",
    description:
      "Selezione di bruschette, prosciutto crudo di Parma, mozzarella di bufala e olive taggiasche.",
    image: "/antipasto.jpg",
    badge: "Antipasti",
    price: "€14",
  },
  {
    title: "Pizza Margherita D.O.P.",
    description:
      "Pomodoro San Marzano, mozzarella di bufala campana, basilico fresco e olio EVO. Cotta nel nostro forno a legna.",
    image: "/pizza.jpg",
    badge: "Pizze a Legna",
    price: "€9",
  },
  {
    title: "Regina Major Special",
    description:
      "La nostra firma: mozzarella di bufala, crudo di Parma, rucola fresca e scaglie di Parmigiano.",
    image: "/pizza.jpg",
    badge: "⭐ Signature",
    price: "€16",
  },
];


const hours = [
  { day: "Lunedì", time: "11:45–14:30, 18:00–00:00" },
  { day: "Martedì", time: "Chiuso" },
  { day: "Mercoledì", time: "11:45–14:30, 18:00–00:00" },
  { day: "Giovedì", time: "11:45–14:30, 18:00–00:00" },
  { day: "Venerdì", time: "11:45–14:30, 18:00–00:00" },
  { day: "Sabato", time: "11:45–14:30, 18:00–00:00" },
  { day: "Domenica", time: "11:45–14:30, 18:00–00:00" },
];


/* ==================== COMPONENTS ==================== */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <a href="#hero" className="navbar-logo">
            <Image
              src="/logo.png"
              alt="Ristorante Pizzeria Regina Major"
              width={160}
              height={50}
              className="navbar-logo-img"
            />
          </a>

          {/* Links */}
          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#hero" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="/menu" onClick={handleLinkClick}>
                Il Nostro Menu
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                Chi Siamo
              </a>
            </li>
            <li>
              <a href="#info" onClick={handleLinkClick}>
                Orari &amp; Info
              </a>
            </li>
            <li>
              <a
                href="#prenota"
                className="btn-prenota"
                onClick={handleLinkClick}
              >
                Prenota Ora
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}

/* ==================== HERO ==================== */

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <Image
          src="/hero.jpg"
          alt="Interno del Ristorante Pizzeria Regina Major"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="animate-fade-in-up animate-delay-1">
          Benvenuti al Ristorante
          <br />
          Pizzeria <span className="highlight">Regina Major</span>
        </h1>
        <p className="animate-fade-in-up animate-delay-2">
          Il sapore autentico dell&apos;Italia, tra mare e terra, e le migliori
          pizze cotte a legna.
        </p>
        <div className="hero-buttons animate-fade-in-up animate-delay-3">
          <a href="/menu" className="btn-hero btn-hero-primary">
            Scopri il Menù
          </a>
          <a href="#prenota" className="btn-hero btn-hero-secondary">
            Prenota un Tavolo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ==================== MENU PREVIEW ==================== */

function MenuSection() {
  return (
    <section id="menu-preview" className="menu-section">
      <div className="container">
        <RevealWrapper>
          <h2 className="section-title">Un assaggio del Nostro Menù</h2>
          <hr className="gold-line" />
          <p className="section-subtitle">
            Ogni piatto racconta la passione per la tradizione culinaria
            italiana, con ingredienti freschi e di prima qualità.
          </p>
        </RevealWrapper>

        <div className="menu-grid">
          {menuPreviewItems.map((item, i) => (
            <RevealWrapper key={item.title} delay={i * 0.12}>
              <div className="menu-card">
                <div className="menu-card-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="menu-card-badge">{item.badge}</span>
                </div>
                <div className="menu-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="menu-card-price">{item.price}</span>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="/menu" className="btn-hero btn-hero-primary" style={{ display: "inline-flex" }}>
              Vedi il Menù Completo
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ==================== FULL MENU ==================== */

type MenuCategory = "antipasti" | "pizze" | "bevande";

const categoryConfig: Record<MenuCategory, { label: string; icon: string; color: string }> = {
  antipasti: { label: "Antipasti", icon: "🥗", color: "#c0392b" },
  pizze:     { label: "Pizze a Legna", icon: "🍕", color: "#e67e22" },
  bevande:   { label: "Bevande", icon: "🍷", color: "#8e44ad" },
};

const tagConfig: Record<string, { label: string; bg: string; color: string }> = {
  vegano:       { label: "🌿 Vegano",       bg: "#e8f5e9", color: "#2e7d32" },
  vegetariana:  { label: "🥦 Vegetariana",  bg: "#f3e5f5", color: "#6a1b9a" },
  "senza glutine": { label: "🌾 Senza Glutine", bg: "#fff8e1", color: "#f57f17" },
  piccante:     { label: "🌶️ Piccante",     bg: "#fce4ec", color: "#c62828" },
  signature:    { label: "⭐ Signature",    bg: "#fff9e6", color: "#b8860b" },
};

function FullMenuSection() {
  const [activeTab, setActiveTab] = useState<MenuCategory>("antipasti");

  const items = fullMenu[activeTab];

  return (
    <section id="menu" className="full-menu-section">
      <div className="container">
        <RevealWrapper>
          <h2 className="section-title">Il Nostro Menù</h2>
          <hr className="gold-line" />
          <p className="section-subtitle">
            Cucina autentica con ingredienti selezionati, pizze cotte nel forno a legna
            e una carta delle bevande per ogni gusto.
          </p>
        </RevealWrapper>

        {/* Tab navigation */}
        <RevealWrapper delay={0.1}>
          <div className="menu-tabs">
            {(Object.keys(categoryConfig) as MenuCategory[]).map((key) => {
              const cfg = categoryConfig[key];
              return (
                <button
                  key={key}
                  id={`menu-tab-${key}`}
                  className={`menu-tab-btn ${activeTab === key ? "active" : ""}`}
                  onClick={() => setActiveTab(key)}
                  style={activeTab === key ? { borderColor: cfg.color, color: cfg.color } : {}}
                >
                  <span className="menu-tab-icon">{cfg.icon}</span>
                  {cfg.label}
                </button>
              );
            })}
          </div>
        </RevealWrapper>

        {/* Menu items list */}
        <div className="full-menu-list">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="full-menu-item"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="full-menu-item-left">
                <div className="full-menu-item-name">
                  {item.name}
                  {item.tags.includes("signature") && (
                    <span className="signature-star">★</span>
                  )}
                </div>
                <div className="full-menu-item-desc">{item.description}</div>
                {item.tags.length > 0 && (
                  <div className="full-menu-item-tags">
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
              <div className="full-menu-item-dots" />
              <div className="full-menu-item-price">{item.price}</div>
            </div>
          ))}
        </div>

        {/* Allergen note */}
        <RevealWrapper delay={0.2}>
          <p className="menu-allergen-note">
            ℹ️ Per informazioni su allergeni e ingredienti, il nostro personale è a vostra disposizione.
            Tutti i piatti sono preparati in cucina dove si utilizzano prodotti contenenti glutine, frutta a guscio e altri allergeni.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ==================== CHI SIAMO ==================== */


function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <RevealWrapper>
            <div className="about-image">
              <Image
                src="/hero.jpg"
                alt="Il forno a legna del Ristorante Regina Major"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.15}>
            <div className="about-text">
              <h2>
                La Nostra <span className="about-highlight">Tradizione</span>
              </h2>
              <hr className="gold-line" style={{ margin: "1rem 0 1.5rem" }} />
              <p>
                Da anni il Ristorante Pizzeria Regina Major è un punto di
                riferimento a Manerbio per gli amanti della buona cucina
                italiana. Il nostro forno a legna sforna ogni giorno pizze
                fragranti e croccanti, preparate con impasti a lunga
                lievitazione.
              </p>
              <p>
                Il nostro menù spazia dai piatti della tradizione lombarda e
                italiana ai sapori di mare, sempre con la massima attenzione
                alla freschezza e alla qualità degli ingredienti.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <span className="about-feature-icon">🔥</span>
                  <span>Forno a legna</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">🌿</span>
                  <span>Opzioni vegane</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">🪑</span>
                  <span>Tavoli all&apos;aperto</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">🍷</span>
                  <span>Sala privata</span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

/* ==================== ORARI & INFO ==================== */

function InfoSection() {
  return (
    <section id="info" className="info-section">
      <div className="container">
        <RevealWrapper>
          <h2 className="section-title">Orari &amp; Informazioni</h2>
          <hr className="gold-line" />
        </RevealWrapper>

        <div className="info-grid">
          {/* Orari */}
          <RevealWrapper delay={0}>
            <div className="info-card">
              <div className="info-card-icon">🕐</div>
              <h3>Orari di Apertura</h3>
              <table className="hours-table">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day}>
                      <td>{h.day}</td>
                      <td className={h.time === "Chiuso" ? "closed" : ""}>
                        {h.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealWrapper>

          {/* Indirizzo */}
          <RevealWrapper delay={0.12}>
            <div className="info-card">
              <div className="info-card-icon">📍</div>
              <h3>Dove Siamo</h3>
              <address>
                Via Artigianale, 1
                <br />
                25025 Manerbio (BS)
                <br />
                Italia
              </address>
              <p style={{ marginTop: "1rem" }}>
                <a
                  href="https://www.google.com/maps/place/Ristorante+Pizzeria+Regina+Major/@45.3548622,10.1242104,17z/data=!3m1!4b1!4m6!3m5!1s0x4781090bef44cea5:0x6106f73352f1398f!8m2!3d45.3548622!4d10.1267853!16s%2Fg%2F1ptw4z2rq?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apri in Google Maps →
                </a>
              </p>
            </div>
          </RevealWrapper>

          {/* Contatti */}
          <RevealWrapper delay={0.24}>
            <div className="info-card">
              <div className="info-card-icon">📞</div>
              <h3>Contatti</h3>
              <p>
                Telefono:{" "}
                <a href="tel:+390309380709">030 938 0709</a>
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Fascia di prezzo: 10–20 €
              </p>
              <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
                ⭐ 4,3 / 5 — 1.772 recensioni
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

/* ==================== PRENOTAZIONE ==================== */

function ReservationSection() {
  return (
    <section id="prenota" className="reservation-section">
      <div className="container">
        <RevealWrapper>
          <h2 className="section-title">Prenota il Tuo Tavolo</h2>
          <hr className="gold-line" />
          <p className="section-subtitle">
            Assicurati un tavolo per te e i tuoi ospiti. Compila il modulo e ti
            confermeremo la prenotazione.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.15}>
          <form
            className="reservation-form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.querySelector('#res-name') as HTMLInputElement).value;
              const phone = (form.querySelector('#res-phone') as HTMLInputElement).value;
              const date = (form.querySelector('#res-date') as HTMLInputElement).value;
              const time = (form.querySelector('#res-time') as HTMLSelectElement).value;
              const guests = (form.querySelector('#res-guests') as HTMLSelectElement).value;
              const pref = (form.querySelector('#res-pref') as HTMLSelectElement).value;
              const notes = (form.querySelector('#res-notes') as HTMLTextAreaElement).value;

              const message = `Salve, vorrei prenotare un tavolo al Ristorante Regina Major.\n\n*Nome:* ${name}\n*Telefono:* ${phone}\n*Data:* ${date}\n*Orario:* ${time}\n*Ospiti:* ${guests}\n*Preferenza:* ${pref || 'Nessuna'}\n*Note:* ${notes || 'Nessuna'}`;
              
              const whatsappUrl = `https://wa.me/393276354869?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            <div className="form-group">
              <label htmlFor="res-name">Nome e Cognome</label>
              <input
                id="res-name"
                type="text"
                placeholder="Mario Rossi"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="res-phone">Telefono</label>
              <input
                id="res-phone"
                type="tel"
                placeholder="+39 333 123 4567"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="res-date">Data</label>
              <input id="res-date" type="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="res-time">Orario</label>
              <select id="res-time" required>
                <option value="">Seleziona orario</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="res-guests">Numero Ospiti</label>
              <select id="res-guests" required>
                <option value="">Quante persone?</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "persona" : "persone"}
                  </option>
                ))}
                <option value="9+">9 o più</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="res-pref">Preferenza</label>
              <select id="res-pref">
                <option value="">Nessuna preferenza</option>
                <option value="interno">Interno</option>
                <option value="esterno">Tavolo all&apos;aperto</option>
                <option value="privata">Sala privata</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="res-notes">Note o richieste speciali</label>
              <textarea
                id="res-notes"
                placeholder="Allergie, compleanni, seggioloni..."
                rows={3}
              />
            </div>
            <button type="submit" className="btn-submit">
              Conferma Prenotazione
            </button>
          </form>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-name">🍕 Regina Major</div>
          <p>
            Ristorante Pizzeria a Manerbio. Il sapore autentico della cucina
            italiana dal pranzo a tarda sera.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigazione</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="/menu">Il Nostro Menu</a>
            </li>
            <li>
              <a href="#about">Chi Siamo</a>
            </li>
            <li>
              <a href="#info">Orari &amp; Info</a>
            </li>
            <li>
              <a href="#prenota">Prenota</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contatti</h4>
          <p>📍 Via Artigianale, 1 — 25025 Manerbio (BS)</p>
          <p>📞 <a href="tel:+390309380709">030 938 0709</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Ristorante Pizzeria Regina Major — Tutti
          i diritti riservati.
        </p>
      </div>
    </footer>
  );
}

/* ==================== REVEAL WRAPPER ==================== */

function RevealWrapper({
  children,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <>{children}</>;
}

/* ==================== PAGE ==================== */

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Ristorante Pizzeria Regina Major",
    "image": "https://reginamajor.it/hero.jpg",
    "@id": "https://reginamajor.it/#restaurant",
    "url": "https://reginamajor.it",
    "telephone": "030 938 0709",
    "priceRange": "€€",
    "menu": "https://reginamajor.it/menu",
    "servesCuisine": ["Italian", "Pizza"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Artigianale, 1",
      "addressLocality": "Manerbio",
      "addressRegion": "BS",
      "postalCode": "25025",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.3548622,
      "longitude": 10.1267853
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:45",
        "closes": "14:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "18:00",
        "closes": "00:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "reviewCount": "1772"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <ReservationSection />
      <InfoSection />
      <Footer />
    </>
  );
}
