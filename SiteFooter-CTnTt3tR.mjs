import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as Shield, T as Truck, b as Award, i as Headphones, L as Layers, S as Search, M as Mail, U as User, v as ShoppingCart, C as Check, j as Instagram, F as Facebook, l as Linkedin, Y as Youtube } from "../_libs/lucide-react.mjs";
const utilityItems = [
  { icon: Shield, label: "ZERTIFIZIERTER SHOP" },
  { icon: Truck, label: "SCHNELLE LIEFERUNG" },
  { icon: Award, label: "180 JAHRE ERFAHRUNG" },
  { icon: Headphones, label: "KOSTENLOSE FACHBERATUNG" },
  { icon: Layers, label: "HOHE VERFÜGBARKEIT" }
];
const navItems = [
  { label: "HOLZBAU", href: "#" },
  { label: "FASSADE", href: "#" },
  { label: "TERRASSE", href: "#" },
  { label: "CARPORT", href: "/konfigurator" },
  { label: "SALE %", href: "#", isSale: true }
];
function SiteHeader() {
  const headerRef = reactExports.useRef(null);
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const [cartCount, setCartCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const handleCartAdd = () => setCartCount((c) => c + 1);
    window.addEventListener("added-to-cart", handleCartAdd);
    return () => window.removeEventListener("added-to-cart", handleCartAdd);
  }, []);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      const sy = window.scrollY;
      setIsScrolled((prev) => {
        if (prev) {
          return sy > 20;
        } else {
          return sy > 200;
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  reactExports.useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const updateHeight = () => {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };
    updateHeight();
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    resizeObserver.observe(header);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { ref: headerRef, className: "sticky top-0 z-40 w-full bg-white select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-neutral-100 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-[1440px] overflow-x-auto scrollbar-hide whitespace-nowrap items-center justify-start md:justify-center gap-x-8 md:gap-x-12 xl:gap-x-16 px-6 py-3.5", children: utilityItems.map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "inline-flex shrink-0 items-center gap-3 text-[11.5px] xl:text-[12.5px] font-bold tracking-wider text-neutral-800",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#FFE500] text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-[13px] w-[13px] stroke-[2.5]" }) }),
          label
        ]
      },
      label
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `bg-white overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? "max-h-0 border-b-0 opacity-0 pointer-events-none" : "max-h-[300px] border-b border-neutral-200 opacity-100"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1440px] px-6 md:px-8 py-4 lg:py-5.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8 xl:gap-10", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: item.href,
                className: "text-[14.5px] xl:text-[15.5px] font-bold tracking-wider text-neutral-800 transition-colors hover:text-black whitespace-nowrap",
                children: item.isSale ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "SALE ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black", children: "%" })
                ] }) : item.label
              },
              item.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex lg:hidden items-center justify-start p-2 -ml-2 text-neutral-700 hover:text-black transition-colors animate-fade-in", "aria-label": "Menü", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center shrink-0 mx-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex flex-col items-center justify-center leading-none text-black select-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-sans font-normal tracking-[-0.02em] text-[48px] md:text-[58px] leading-[0.8] uppercase select-none",
                    style: { fontFamily: "'Bebas Neue', sans-serif" },
                    children: "SCS"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans font-medium text-[9.5px] md:text-[11px] tracking-[0.36em] leading-none uppercase mt-1 md:mt-[6px] pl-[0.36em]", children: "HOLZWERKE" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-3 sm:gap-4 md:gap-7 lg:gap-8 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden md:block w-52 xl:w-68", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Artikelsuche",
                  className: "w-full h-11 px-5 pr-12 text-[14px] xl:text-[14.5px] bg-white border border-neutral-300 rounded-full placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors font-medium text-neutral-800"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute right-4 top-1/2 -translate-y-1/2 h-[19px] w-[19px] text-neutral-500 pointer-events-none stroke-[2]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4.5 md:gap-6 xl:gap-7 text-neutral-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "block md:hidden hover:text-black transition-colors cursor-pointer",
                  "aria-label": "Suche",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-6 w-6 stroke-[1.75]" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "hover:text-black transition-colors cursor-pointer",
                  "aria-label": "Anfrage / Kontakt",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-[24px] w-[24px] xl:h-[26px] xl:w-[26px] stroke-[1.75]" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "hover:text-black transition-colors cursor-pointer",
                  "aria-label": "Konto",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-[24px] w-[24px] xl:h-[26px] xl:w-[26px] stroke-[1.75]" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: "relative hover:text-black transition-colors cursor-pointer",
                  "aria-label": "Warenkorb",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-[24px] w-[24px] xl:h-[26px] xl:w-[26px] stroke-[1.75]" }),
                    cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-black px-1 text-[10px] font-black text-white shadow", children: cartCount })
                  ]
                }
              )
            ] })
          ] })
        ] }) })
      }
    )
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "w-full bg-[#F4F4F4] text-neutral-800 font-sans select-none border-t border-neutral-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed bottom-4 left-4 z-50 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-black shadow-xl hover:bg-neutral-900 transition-all duration-300 border border-neutral-800 cursor-pointer hover:scale-105",
        title: "Privatsphäre-Einstellungen",
        "aria-label": "Privatsphäre",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#FFE500] text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-[14px] w-[14px] stroke-[4]" }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed bottom-4 right-4 z-50 bg-[#1A1A1A] text-white p-2.5 rounded-lg shadow-2xl w-[92px] flex flex-col items-center border border-neutral-800 select-none hover:scale-105 transition-all duration-300 cursor-pointer font-sans",
        "aria-label": "Trusted Shops Käuferschutz",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-white select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-[26px] w-[26px]", viewBox: "0 0 100 100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "46", fill: "#1A1A1A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "38", fill: "#FFE500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "65", textAnchor: "middle", fill: "#005A9C", fontSize: "52", fontWeight: "black", fontFamily: "Georgia, serif", children: "e" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] font-extrabold mt-1 text-white tracking-widest uppercase", children: "Käuferschutz" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-[0.5px] text-[#FFE500] text-[9.5px] my-0.5 leading-none", children: "★★★★★" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11.5px] font-black text-white leading-none", children: "4,89" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7.5px] font-bold text-neutral-400 mt-[1px] tracking-wide", children: "Hervorragend" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-8 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex flex-col items-start leading-none text-black select-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-sans font-normal tracking-[-0.02em] text-[48px] leading-[0.8] uppercase select-none",
                    style: { fontFamily: "'Bebas Neue', sans-serif" },
                    children: "SCS"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans font-medium text-[9px] tracking-[0.34em] leading-none uppercase mt-1 pl-[0.34em]", children: "HOLZWERKE" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-black mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:opacity-75 transition-opacity", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-[20px] w-[20px] stroke-[2]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:opacity-75 transition-opacity", "aria-label": "Facebook", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-[20px] w-[20px] stroke-[2]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:opacity-75 transition-opacity", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-[20px] w-[20px] stroke-[2]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:opacity-75 transition-opacity", "aria-label": "YouTube", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-[20px] w-[20px] stroke-[2]" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[14px] font-extrabold tracking-wider text-black uppercase", children: "HILFE & KONTAKT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 text-[13.5px] font-semibold text-[#666666]", children: ["Kontakt", "Versand", "Rückgabe & Widerruf", "AGB", "Datenschutz", "Impressum", "Zahlungsarten"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-black transition-colors", children: l }) }, l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[14px] font-extrabold tracking-wider text-black uppercase", children: "ÜBER SCS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 text-[13.5px] font-semibold text-[#666666]", children: ["Unternehmen", "Nachhaltigkeit", "Standorte", "Unsere Fachmärkte"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-black transition-colors", children: l }) }, l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[14px] font-extrabold tracking-wider text-black uppercase", children: "SERVICE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 text-[13.5px] font-semibold text-[#666666]", children: ["Ratgeber", "Kundenreferenzen", "FAQ"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-black transition-colors", children: l }) }, l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[14px] font-extrabold tracking-wider text-black uppercase", children: "ZAHLUNGSARTEN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-3 gap-2.5 max-w-[200px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[36px] w-[58px] bg-white border border-neutral-200 rounded flex items-center justify-center shadow-sm select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center scale-[0.85]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4.5 w-4.5 rounded-full bg-[#EB001B] z-10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4.5 w-4.5 rounded-full bg-[#F79E1B] -ml-2.5" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[36px] w-[58px] bg-white border border-neutral-200 rounded flex items-center justify-center shadow-sm select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black italic text-[#1A1F71] tracking-tight", children: "VISA" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[36px] w-[58px] bg-white border border-neutral-200 rounded flex items-center justify-center px-1 shadow-sm select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-extrabold italic text-[#003087]", children: [
              "Pay",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0079C1]", children: "Pal" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[36px] w-[58px] bg-[#FFB3C7] border border-[#FFB3C7] rounded flex items-center justify-center shadow-sm select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-bold text-black font-sans tracking-tight", children: "Klarna." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[36px] w-[58px] bg-white border border-neutral-200 rounded flex items-center justify-center shadow-sm select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-black flex items-center gap-[1px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] leading-none -mt-[3px]", children: "" }),
              " Pay"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[36px] w-[58px] bg-white border border-neutral-200 rounded flex items-center justify-center shadow-sm select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black tracking-wider text-[#0065B3]", children: "SEPA" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-10 border-t border-neutral-300 grid gap-12 md:grid-cols-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[14px] font-extrabold tracking-wider text-black uppercase", children: "KUNDENBEWERTUNGEN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4 select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#FFE500] text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif font-black text-[13px] leading-none text-black", children: "e" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11.5px] font-extrabold tracking-wide text-neutral-800 font-sans", children: "TRUSTED" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-normal tracking-[0.16em] text-neutral-700 font-sans", children: "SHOPS" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[14px] font-extrabold tracking-wider text-black uppercase", children: "UNSERE AUSZEICHNUNGEN & ZERTIFIKATE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3.5 mt-4 items-center select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[52px] w-[38px] bg-gradient-to-b from-[#C5A059] to-[#E5C48A] rounded border border-neutral-300 shadow-sm flex flex-col items-center justify-between py-1 px-[2px] text-white text-[5.5px] leading-none text-center font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[5.2px] tracking-tight", children: "Excellent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[5.5px] tracking-tight", children: "Shop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7.5px] text-[#FFE500] leading-none", children: "★★★★★" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[5px] bg-black/30 px-[2px] py-[0.5px] rounded-[1px] scale-[0.85] leading-none font-medium", children: "10 Jahre" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[52px] w-[38px] bg-white border border-[#4E9D2F] rounded shadow-sm flex flex-col items-center justify-center p-[2px] text-center leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4.5 w-4.5 border-1.5 border-[#4E9D2F] rounded-full flex items-center justify-center text-[#4E9D2F]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6.5px] font-black", children: "↑" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] font-black text-[#4E9D2F] mt-[2.5px] tracking-tight", children: "PEFC" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[3.5px] text-neutral-500 mt-[1px]", children: "PEFC/04-31" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[52px] w-[38px] bg-white border border-[#E30613] rounded shadow-sm flex flex-col items-center justify-between p-[2px] text-center leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-extrabold text-[#E30613] tracking-tighter", children: "RAL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-[#0065B3] rounded-[1px] flex flex-col items-center justify-center text-white mt-[1px] py-[2.5px] scale-[0.95]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[3.5px] font-bold tracking-tight", children: "GÜTEZEICHEN" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-[80%] bg-white my-[0.5px]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[3px] font-semibold text-neutral-200 tracking-tight", children: "Holzhandel" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[52px] w-[38px] bg-[#1E4D2B] rounded border border-[#1E4D2B] shadow-sm flex flex-col items-center justify-center p-[2px] text-white text-center leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] font-black leading-tight tracking-wider", children: "HOLZ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[5px] font-bold opacity-90 leading-tight", children: "RETTET" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] font-black text-[#FFE500] leading-tight tracking-wider", children: "KLIMA" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 pt-8 border-t border-neutral-300 flex flex-col items-center justify-center gap-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[6px] w-[45px] bg-[#FFE500]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11.5px] font-medium text-neutral-500 max-w-2xl leading-relaxed", children: "Alle Preise inklusive gesetzlicher MwSt., zzgl. Versandkosten" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#EBEBEB] border-t border-neutral-300 w-full py-5 text-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] font-medium text-neutral-500 tracking-wide font-sans", children: "Copyright © 2013 gegenwärtig Magento, Inc. Alle Rechte vorbehalten." }) })
  ] });
}
export {
  SiteFooter as S,
  SiteHeader as a
};
