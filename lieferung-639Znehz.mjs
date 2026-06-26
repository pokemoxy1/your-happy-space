import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-CTnTt3tR.mjs";
import { g as germanyMapActual } from "./germany-map-actual-BzMrVS1W.mjs";
import { n as MapPin, S as Search, q as Play } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function LieferungPage() {
  const [postcode, setPostcode] = reactExports.useState("");
  const [postcodeResult, setPostcodeResult] = reactExports.useState(null);
  const [postcodeError, setPostcodeError] = reactExports.useState(null);
  const [activeShippingTab, setActiveShippingTab] = reactExports.useState("fuhrpark");
  const handlePostcodeCheck = (e) => {
    e.preventDefault();
    setPostcodeError(null);
    setPostcodeResult(null);
    const cleanZip = postcode.trim();
    if (!/^\d{5}$/.test(cleanZip)) {
      setPostcodeError("Bitte geben Sie eine gültige 5-stellige deutsche Postleitzahl ein (z.B. 22095).");
      return;
    }
    const prefix = parseInt(cleanZip.slice(0, 2), 10);
    const isL1 = prefix >= 70 && prefix <= 89 || prefix >= 90 && prefix <= 94 || [55, 64, 66, 67, 68, 69].includes(prefix);
    const isL2 = [1, 2, 3, 4, 6, 7, 8, 9].includes(prefix) || // representing 01-04, 06-09
    prefix >= 10 && prefix <= 16 || prefix >= 30 && prefix <= 54 || [56, 57, 58, 59, 60, 61, 63, 65, 95, 96, 97, 98, 99].includes(prefix);
    if (isL1) {
      setPostcodeResult(`✅ Liefergebiet 1: Wir liefern an Ihre Adresse (${cleanZip})! Zustellung mit SCS-Fuhrpark und 26t-Kranentladewagen frei Bordsteinkante. Lieferzeit ca. 2-3 Wochen. Versandkostenfrei ab 1.500 € Einkaufswert.`);
    } else if (isL2) {
      setPostcodeResult(`✅ Liefergebiet 2: Wir liefern an Ihre Adresse (${cleanZip})! Zustellung mit SCS-Fuhrpark per 40t-Sattelzug mit Mitnahmestapler frei Bordsteinkante. Lieferzeit ca. 3-4 Wochen. Versandkostenfrei ab 1.500 € Einkaufswert.`);
    } else {
      setPostcodeResult(`ℹ️ Außerhalb SCS-Fuhrpark: Ihre Adresse (${cleanZip}) liegt in Norddeutschland. Wir versenden kleinere Artikel per GLS Paketversand oder organisieren eine Speditionsanlieferung für Carports auf Anfrage.`);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1440px] px-6 py-20 md:px-8 space-y-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-neutral-400", children: "Logistik" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black text-black uppercase tracking-wide mt-2", children: "Versand & Lieferung" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 mt-2 leading-relaxed font-sans font-semibold", children: "Erfahren Sie alles über unsere Liefergebiete, die Versandkonditionen unseres hauseigenen Fuhrparks, GLS Paketversand und Selbstabholung." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShippingBlock, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1.1fr_1fr] items-stretch pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 w-full md:w-[220px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-3 text-center", children: "SCS Liefergebiet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-neutral-100 shadow-sm bg-neutral-50 group cursor-zoom-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: germanyMapActual, alt: "SCS Liefergebiet Deutschland Karte mit Liefergebiet 1 und Liefergebiet 2", className: "w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-extrabold text-black uppercase tracking-wider leading-none", children: "Liefergebiete" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-sans font-semibold", children: "Waren bis maximal 13,50 Meter Länge werden mit unserem hauseigenen Fuhrpark und innerhalb der SCS-Lieferzonen zu einem Pauschalpreis ausgeliefert." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-orange-50 border border-orange-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5.5 w-5.5 rounded-lg bg-orange-100 border border-orange-200 shrink-0 flex items-center justify-center font-bold text-xs text-orange-850", children: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 leading-tight", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-black text-orange-950", children: "Liefergebiet 1 (Süddeutschland)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] text-orange-700 font-semibold font-sans mt-0.5", children: "Baden-Württemberg, Bayern, Saarland, Südhälfte Hessen & RLP" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-yellow-50 border border-yellow-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5.5 w-5.5 rounded-lg bg-yellow-100 border border-yellow-200 shrink-0 flex items-center justify-center font-bold text-xs text-yellow-850", children: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 leading-tight", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-black text-yellow-950", children: "Liefergebiet 2 (Mittel- & Ostdeutschland)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] text-yellow-700 font-semibold font-sans mt-0.5", children: "NRW, Hessen, Niedersachsen, Thüringen, Sachsen, Sachsen-Anhalt, Berlin, Brandenburg" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] leading-relaxed text-neutral-400 font-medium font-sans", children: "*Philippsburg, Gundremmingen, Egling a. d. Paar, Ruhpolding und Plattling bieten zudem Abholmöglichkeiten (Selbstabholung)." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-lg font-black text-black uppercase tracking-wide flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-neutral-700" }),
                "Lieferbarkeit prüfen"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 mt-2 leading-relaxed font-sans font-semibold", children: "Tragen Sie Ihre Postleitzahl ein und prüfen Sie sofort, ob sich Ihre Adresse in einem unserer Fuhrpark-Liefergebiete befindet." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePostcodeCheck, className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", maxLength: 5, value: postcode, onChange: (e) => setPostcode(e.target.value.replace(/\D/g, "")), placeholder: "PLZ eingeben (z.B. 22095)", className: "w-full h-11 px-4 pr-10 border border-neutral-300 rounded-xl placeholder-neutral-400 focus:outline-none focus:border-neutral-400 text-sm font-semibold text-neutral-800" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute right-3.5 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-neutral-400" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "h-11 px-5 bg-black hover:bg-neutral-900 text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer", children: "Prüfen" })
            ] }),
            postcodeError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-red-50 text-red-700 border border-red-100 text-xs font-semibold leading-relaxed", children: [
              "⚠️ ",
              postcodeError
            ] }),
            postcodeResult && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs font-semibold leading-relaxed", children: postcodeResult })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-neutral-200 space-y-4 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-black uppercase tracking-wider text-neutral-400 leading-none", children: "Abholstandorte (Selbstabholung)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 text-[10px] font-bold text-neutral-600", children: ["Philippsburg", "Gundremmingen", "Egling a. d. Paar", "Plattling", "Ruhpolding"].map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 bg-neutral-50 px-2.5 py-1.5 rounded-full border border-neutral-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-amber-500 shrink-0" }),
              " ",
              loc
            ] }, loc)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl border border-neutral-200 p-6 md:p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-neutral-200 pb-4", children: [{
          id: "fuhrpark",
          label: "SCS Fuhrpark (Sperrgut)"
        }, {
          id: "gls",
          label: "GLS Paketversand"
        }, {
          id: "selbstabholung",
          label: "Selbstabholung"
        }, {
          id: "videos",
          label: "Anlieferungs-Videos"
        }].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveShippingTab(tab.id), className: `h-10 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${activeShippingTab === tab.id ? "bg-black text-white" : "bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border border-neutral-200"}`, children: tab.label }, tab.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 font-sans", children: [
          activeShippingTab === "fuhrpark" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-black text-black uppercase tracking-wider mb-2", children: "Lieferung mit eigenem LKW-Fuhrpark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-semibold", children: "Waren bis maximal 13,50 Meter Länge werden mit unserem hauseigenen Fuhrpark und innerhalb der SCS-Lieferzonen zu einem Pauschalpreis basierend auf dem Warenwert ausgeliefert." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-neutral-100 border-b border-neutral-200 font-black text-neutral-400 uppercase tracking-wider", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Warenwert (Euro)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-right", children: "Versandkosten (inkl. MwSt.)" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "font-semibold text-neutral-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-200 bg-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "bis 499,- €" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-black font-bold", children: "199,- €" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-200 bg-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "ab 500,- bis 999,- €" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-black font-bold", children: "99,- €" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-200 bg-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "ab 1000,- bis 1499,- €" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-black font-bold", children: "75,- €" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-emerald-50/20 text-emerald-900 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "ab 1500,- €" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-emerald-600 font-black", children: "Versandkostenfrei" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-amber-50/50 border border-amber-100 text-xs text-neutral-600 leading-relaxed font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-black text-amber-900 uppercase tracking-wider mb-2", children: "⚠️ Wichtiger Hinweis zur Anlieferung" }),
              "Die Zufahrt mit einem 40 Tonnen-Sattelzug bzw. 26 Tonnen-Kranfahrzeug muss gewährleistet sein (Breite min. 3m, Höhe min. 4m). Anlieferungen durch unseren Fuhrpark erfolgen Montag bis Freitag frei Bordsteinkante. Bitte haben Sie Verständnis, dass unsere Fahrer aus versicherungstechnischen Gründen keine Handentladung vornehmen können.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Anlieferungen mit unserem 26-Tonnen-Kranfahrzeug sind nur in Baden-Württemberg, Bayern, Saarland sowie den südlichen Teilen von Hessen und Rheinland-Pfalz (Liefergebiet 1) möglich. Alle weiteren Liefergebiete werden per 40-Tonnen-Sattelzug und Mitnahmestapler beliefert. Bitte vermerken Sie Wünsche zur Entladung im Kommentarfeld der Bestellung."
            ] })
          ] }),
          activeShippingTab === "gls" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-black text-black uppercase tracking-wider mb-2", children: "GLS Paketversand & Kleinprodukte" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-semibold font-sans", children: "Liefergebiet: deutschlandweit (ohne Inseln). Für kleinere Produkte bis zu einer Länge von max. 1,20 m bzw. einem Gewicht von max. 100 kg." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-neutral-100 border-b border-neutral-200 font-black text-neutral-400 uppercase tracking-wider", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Gewicht (kg)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-right", children: "Versandkosten (inkl. MwSt.)" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "font-semibold text-neutral-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-200 bg-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "bis 10 kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-black font-bold", children: "9,90 € / Paket" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-200 bg-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "von 10,1 - 30 kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-black font-bold", children: "14,90 € / Paket" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-neutral-200 bg-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "von 30,1 - 40 kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-black font-bold", children: "29,90 € / Paket" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "von 40,1 - 100 kg (Stückgut mit div. Speditionen)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-black font-bold", children: "59,90 € / Paket" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-semibold font-sans", children: "Der zuverlässige Paketversand ist die Stärke von GLS. Pakete erreichen innerhalb von 3 Werktagen ihr Ziel. GLS stellt montags bis freitags während der üblichen Geschäftszeiten zu. Haben Sie Produkte verschiedener Versandarten gemeinsam im Warenkorb, findet immer die höchste Versandart Anwendung." })
          ] }),
          activeShippingTab === "selbstabholung" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-black text-black uppercase tracking-wider", children: "Selbstabholung an unseren Standorten" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-semibold", children: 'Die Selbstabholung der Ware an den SCS Standorten ist ebenfalls möglich. Bitte wählen Sie dazu im Bestellvorgang "Selbstabholung" und den gewünschten Standort.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-semibold", children: "Ein Kundenberater wird sich mit Ihnen in Verbindung setzen, um Ihnen den frühestmöglichen Abholtermin mitzuteilen. In einigen Fällen muss die Ware erst von einem anderen SCS-Zentrallager angeliefert werden." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-black uppercase tracking-wider text-neutral-400", children: "Unsere Standorte zur Abholung:" }),
                ["Philippsburg", "Gundremmingen", "Egling a. d. Paar", "Plattling", "Ruhpolding"].map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-neutral-700 bg-neutral-50 p-2 rounded-xl border border-neutral-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-[var(--brand-yellow)] shrink-0" }),
                  " ",
                  loc
                ] }, loc))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-black uppercase tracking-wider", children: "Unsere Logistik ist Ihr Vorteil" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-semibold", children: "Waren bis 13,50 m Länge werden innerhalb der SCS-Lieferzonen mit unserem 25 LKW umfassenden, unternehmenseigenen Fuhrpark ausgeliefert." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-semibold", children: "Um jeder Anliefersituation gerecht zu werden, verfügt SCS über topgepflegte, moderne Sattelzüge mit offenen und geschlossenen Aufliegern, einen 40-Tonnen-Sattelzug mit geschlossenem Auflieger inkl. Mitnahmestapler sowie über Kranfahrzeuge und 7,5-Tonner." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed text-neutral-400 font-sans text-[10px]", children: "Die Scheiffele-Schmiederer KG nimmt Rücknahmepflichten für Verpackungen gemäß § 15 Abs. 1 VerpackG bei Anlieferung und Abholung am Lager wahr." })
            ] })
          ] }),
          activeShippingTab === "videos" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-black text-black uppercase tracking-wider mb-2", children: "SCS-Fuhrpark in Aktion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-semibold font-sans", children: "Sehen Sie sich an, wie Ihre Bestellung durch unseren SCS-Lieferservice bis zu Ihrer Haustüre geliefert wird." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-neutral-950 flex items-center justify-center relative cursor-pointer group-hover:brightness-90 transition-all", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 fill-white ml-0.5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 text-[10px] bg-black/60 backdrop-blur-md text-white/90 px-2 py-1 rounded font-bold font-sans", children: "Video Anlieferung Liefergebiet 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 flex-grow flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100 uppercase tracking-wider", children: "Kran-Entladung" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-black text-black mt-2", children: "Kranentladewagen (Baden-Württemberg, Bayern, Saarland etc.)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 mt-1.5 leading-relaxed font-sans font-semibold", children: "Erleben Sie die präzise Kranentladung unserer langen Holzbauteile per 26t Kran-LKW direkt auf das Grundstück." })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-neutral-950 flex items-center justify-center relative cursor-pointer group-hover:brightness-90 transition-all", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 fill-white ml-0.5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 text-[10px] bg-black/60 backdrop-blur-md text-white/90 px-2 py-1 rounded font-bold font-sans", children: "Video Anlieferung Liefergebiet 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 flex-grow flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-100 uppercase tracking-wider", children: "Stapler-Entladung" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-black text-black mt-2", children: "40t Sattelzug & Mitnahmestapler (Mittel- & Ostdeutschland)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 mt-1.5 leading-relaxed font-sans font-semibold", children: "Sehen Sie den Ablauf der Lieferung per 40t LKW und mobilem Mitnahmestapler für enge Einfahrten." })
                ] }) })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function ShippingBlock() {
  const steps = [{
    step: "01",
    title: "Passgenau gefertigt",
    desc: "Ihr Carport wird bei SCS passgenau gefertigt. Die Holzteile kommen zugeschnitten, vorgebohrt und montagebereit bei Ihnen an. So wird aus vielen Einzelteilen ein Bausatz, der logisch zusammenpasst.",
    time: "Tag 1 - 3"
  }, {
    step: "02",
    title: "Alles dabei",
    desc: "Von Pfostenträgern über Schrauben bis zur Montageanleitung ist das wichtige Zubehör enthalten. Statik und Fundamentplan sind inklusive, damit Sie sauber planen und direkt loslegen können.",
    time: "Tag 4"
  }, {
    step: "03",
    title: "Lieferung mit eigenem Fuhrpark",
    desc: "Große Carport Bauteile brauchen mehr als Paketversand. SCS liefert mit eigenen Fahrzeugen im Liefergebiet und bringt lange Holzbauteile zuverlässig zu Ihnen nach Hause.",
    time: "Woche 2"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "select-none max-w-4xl mx-auto relative mt-16 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-neutral-200 -translate-x-1/2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12 relative", children: steps.map((s, index) => {
      const isEven = index % 2 === 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col md:flex-row items-stretch gap-6 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-[calc(50%-2rem)] flex flex-col justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-all ${isEven ? "text-left" : "text-left md:text-right"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-amber-600 tracking-wider uppercase block mb-1", children: s.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-black text-black uppercase tracking-wider mb-2", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 leading-relaxed font-semibold font-sans", children: s.desc })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 md:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--brand-yellow)] text-sm font-black text-[var(--brand-ink)] shadow-md z-10", children: s.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-[calc(50%-2rem)]" })
      ] }, s.step);
    }) })
  ] });
}
export {
  LieferungPage as component
};
