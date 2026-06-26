import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, d as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { I as redirect } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { a as Root, b as Track, R as Range, T as Thumb } from "../_libs/radix-ui__react-slider.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-collection.mjs";
const appCss = "/assets/styles-Bjk8c9wY.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SCS Carport Konfigurator – Maßgeschneiderte Carports in Premium-Qualität" },
      { name: "description", content: "Planen und konfigurieren Sie Ihr individuelles Einzel- oder Doppelcarport aus PEFC-zertifiziertem Holz. 180 Jahre Erfahrung, 100% kostenlose Lieferung in DE." },
      { name: "author", content: "SCS Carport" },
      { property: "og:title", content: "SCS Carport Konfigurator" },
      { property: "og:description", content: "Planen und konfigurieren Sie Ihr individuelles Einzel- oder Doppelcarport aus PEFC-zertifiziertem Holz. 180 Jahre Erfahrung." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SCS Carport Konfigurator" },
      { name: "twitter:description", content: "Planen und konfigurieren Sie Ihr individuelles Einzel- oder Doppelcarport aus PEFC-zertifiziertem Holz." },
      // Geo tags for Germany
      { name: "geo.region", content: "DE" },
      { name: "geo.placename", content: "Deutschland" },
      { name: "geo.position", content: "51.165691;10.451526" },
      { name: "ICBM", content: "51.165691, 10.451526" }
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SCS Carport",
    "description": "Hersteller von Premium-Carports aus PEFC-zertifiziertem Holz mit Online-Konfigurator.",
    "areaServed": "DE",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "priceRange": "€€€"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "de-DE", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: JSON.stringify(schemaOrgJSONLD) }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$3 = () => import("./lieferung-639Znehz.mjs");
const Route$4 = createFileRoute("/lieferung")({
  head: () => ({
    meta: [{
      title: "Versand & Lieferung – Lieferzonen & Versandkosten | SCS"
    }, {
      name: "description",
      content: "Erfahren Sie alles über das SCS Liefergebiet, Lieferzonen, Speditionskosten für Fuhrpark und Paketversand sowie Selbstabholung."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./konfigurator-D8IQWQ8K.mjs");
const Route$3 = createFileRoute("/konfigurator")({
  head: () => ({
    meta: [{
      title: "3D Carport Konfigurator – Planen Sie Ihr Wunsch-Carport online | SCS"
    }, {
      name: "description",
      content: "Nutzen Sie unseren 3D Carport Konfigurator, um Einzel- und Doppelcarports nach Maß zu planen. Kostenlose Lieferung und höchste Holzqualität aus Deutschland."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BPe9Yc23.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SCS Carport Konfigurator – Einzel- & Doppelcarport individuell planen"
    }, {
      name: "description",
      content: "Planen Sie Ihren Carport in 5 einfachen Schritten – wählen Sie zwischen Einzel- und Doppelcarport und konfigurieren Sie Dach, Größe und Verkleidung."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const Route$1 = createFileRoute("/konfigurator/")({
  beforeLoad: () => {
    throw redirect({
      to: "/konfigurator/$step",
      params: { step: "typ" }
    });
  }
});
const roofNone = "/assets/roof-none-DXh9GL6t.jpg";
const roofWell = "/assets/roof-wellplatte-Bme-QWtd.jpeg";
const roofTrapezRed = "/assets/roof-trapez-red-FBMFcxUi.jpg";
const roofTrapezAnth = "/assets/roof-trapez-anthracite-BpC5EYla.jpeg";
const roofSandwichAnth = "/assets/roof-sandwich-anthracite-CoWs22lV.jpeg";
const roofSandwichRed = "/assets/roof-sandwich-red-Dhy4hju8.jpg";
const dachFlach = "/assets/dach-flach-new-Bq_rC4wC.jpg";
const dachSattel = "/assets/dach-satteldach-new-BPt1MTEA.jpg";
const sideBlockhaus = "/assets/side-blockhaus-Bgi4W1i4.jpg";
const sideBdsch = "/assets/side-bdsch-BGboKt1N.jpg";
const sideRund = "/assets/side-rund-B_KQHQHm.jpg";
const sideFase = "/assets/side-fase-DTBTHtIw.jpg";
const sideHnf = "/assets/side-hnf-BNXhPMH4.jpg";
const sideTrapezFichte = "/assets/side-trapez-fichte-BAMGTdSO.png";
const sideRhombusLaerche = "/assets/side-rhombus-laerche-CbVFvxtf.jpg";
const sideRhombusDuraKristall = "/assets/side-rhombus-dura-kristall-CObyK-Bu.jpg";
const sideRhombusDuraLava = "/assets/side-rhombus-dura-lava-BNG_WPq9.jpg";
const sideMarienhofLava = "/assets/side-marienhof-lava-DZUU6Twy.jpg";
const sideRhombusNfSchwarz = "/assets/side-rhombus-nf-schwarz-CLfy-W_O.jpg";
const sideOpenNew = "/assets/side-open-new-BpbELPnd.png";
const sideLaerche = "/assets/side-laerche-GUaKmEPC.jpg";
const sideRhombusKeim4870 = "/assets/side-laerche-GUaKmEPC.jpg";
const STEPS = [
  { key: "typ", label: "Carport Typ", short: "01" },
  { key: "groesse", label: "Größe", short: "02" },
  { key: "dachart", label: "Dachart", short: "03" },
  { key: "dachbelag", label: "Dachbelag", short: "04" },
  { key: "seiten", label: "Seiten", short: "05" },
  { key: "zusammenfassung", label: "Zusammenfassung", short: "06" },
  { key: "cart", label: "Warenkorb", short: "07" }
];
const VARIANT_META = {
  single: {
    title: "Einzelcarport",
    subtitle: "Für ein Fahrzeug – kompakt und elegant",
    basePrice: 4647.92,
    cars: 1,
    widthRange: [2.5, 4.75],
    depthRange: [3, 6]
  },
  double: {
    title: "Doppelcarport",
    subtitle: "Für zwei Fahrzeuge – großzügig und stabil",
    basePrice: 7826.9,
    cars: 2,
    widthRange: [5, 8],
    depthRange: [3, 6]
  }
};
const HEIGHT_RANGE = [2.25, 3];
const DACHART = [
  { id: "flachdach", name: "Flachdach", description: "Modern und schlicht. Passt gut zu klaren Hausformen.", price: 0, image: dachFlach },
  { id: "satteldach", name: "Satteldach", description: "Klassisch und praktisch. Wasser und Schnee laufen besser ab.", price: 719.99, image: dachSattel }
];
const DACHBELAG = [
  { id: "ohne", name: "Ohne Dacheindeckung", description: "Für alle, die den Dachbelag selbst wählen oder später ergänzen.", price: 0, image: roofNone },
  { id: "wellplatte", name: "Wellplatte", description: "Einfache, leichte Lösung. Gut für funktionalen Wetterschutz.", price: 412.5, priceSattel: 495, image: roofWell },
  { id: "trapez-anth", name: "Trapezblech anthrazit", description: "Robust und modern. Passt gut zu grauen oder dunklen Dächern.", price: 487.5, priceSattel: 536.25, image: roofTrapezAnth },
  { id: "trapez-rot", name: "Trapezblech rotbraun", description: "Robust und klassisch. Passt gut zu roten oder braunen Dächern.", price: 487.5, priceSattel: 536.25, image: roofTrapezRed },
  { id: "sandwich-anth", name: "Sandwichpaneele anthrazit", description: "Hochwertiger Dachbelag. Stabiler, gedämmter und leiser bei Regen.", price: 750, priceSattel: 825, image: roofSandwichAnth },
  { id: "sandwich-rot", name: "Sandwichpaneele rotbraun", description: "Gedämmter Dachbelag. Klassische Optik mit besserem Regenschutz.", price: 750, priceSattel: 825, image: roofSandwichRed }
];
const SEITEN = [
  { id: "ohne", name: "Ohne Seitenwand", description: "Offen und luftig. Gut, wenn kein Sichtschutz nötig ist.", price: 0, priceLR: 0, priceH: 0, swatch: "repeating-linear-gradient(45deg,#f1f1ee,#f1f1ee 6px,#e6e4df 6px,#e6e4df 12px)", image: sideOpenNew },
  { id: "fase-fichte", name: "Fasebretter Fichte", description: "Schlichte Holzoptik. Solider Sichtschutz zum fairen Preis.", price: 121.5, priceLR: 121.5, priceH: 101.25, swatch: "linear-gradient(180deg,#e7c896,#cfa463)", image: sideFase },
  { id: "rund-fichte", name: "Rundprofil Fichte", description: "Rustikale Holzoptik. Passt gut zu natürlichen Grundstücken.", price: 209.25, priceLR: 209.25, priceH: 174.38, swatch: "linear-gradient(180deg,#e9caa0,#caa069)", image: sideRund },
  { id: "hnf-fichte", name: "HNF Bretter Fichte", description: "Geradlinige Bretteroptik. Ruhig, einfach und funktional.", price: 202.5, priceLR: 202.5, priceH: 168.75, swatch: "linear-gradient(180deg,#ebcfa8,#c89e6a)", image: sideHnf },
  { id: "blockhaus-fichte", name: "Blockhausprofil Fichte", description: "Kräftige Holzoptik. Wirkt stabil, klassisch und natürlich.", price: 270, priceLR: 270, priceH: 225, swatch: "linear-gradient(180deg,#dfb98a,#a37a4c)", image: sideBlockhaus },
  { id: "bdsch-fichte", name: "Boden-Deckel Fichte", description: "Blickdichte Holzfläche. Gut für mehr Schutz und Privatsphäre.", price: 222.75, priceLR: 222.75, priceH: 185.63, swatch: "repeating-linear-gradient(90deg,#d7ad7a,#d7ad7a 14px,#a87a47 14px,#a87a47 18px)", image: sideBdsch },
  { id: "bdsch-laerche", name: "Boden-Deckel Lärche", description: "Blickdicht und hochwertig. Lärche ist robuster für außen.", price: 452.25, priceLR: 452.25, priceH: 376.88, swatch: "repeating-linear-gradient(90deg,#caa073,#caa073 14px,#8b5e34 14px,#8b5e34 18px)", image: sideLaerche },
  { id: "rhombus-laerche", name: "Rhombusleisten Lärche", description: "Modern mit Luftspalt. Sichtschutz, ohne komplett geschlossen zu wirken.", price: 587.25, priceLR: 587.25, priceH: 587.25, swatch: "repeating-linear-gradient(90deg,#c79d6f,#c79d6f 10px,#9c6f44 10px,#9c6f44 14px)", image: sideRhombusLaerche },
  { id: "rhombus-keim-4870", name: "Rhombusleisten hellgrau", description: "Helle moderne Optik. Passt gut zu hellen Fassaden.", price: 661.5, priceLR: 661.5, priceH: 489.38, swatch: "repeating-linear-gradient(90deg,#4b463f,#4b463f 10px,#2e2a25 10px,#2e2a25 14px)", image: sideRhombusKeim4870 },
  { id: "rhombus-dura-lava", name: "Rhombusleisten lavagrau", description: "Dunkle moderne Optik. Passt gut zu Anthrazit und Beton.", price: 776.25, priceLR: 776.25, priceH: 646.88, swatch: "repeating-linear-gradient(90deg,#5a5550,#5a5550 10px,#3b3835 10px,#3b3835 14px)", image: sideRhombusDuraLava },
  { id: "rhombus-dura-kristall", name: "Rhombusleisten kristallgrau", description: "Neutrale graue Optik. Modern, aber weniger dunkel.", price: 776.25, priceLR: 776.25, priceH: 646.88, swatch: "repeating-linear-gradient(90deg,#a8a9a4,#a8a9a4 10px,#7e7f7a 10px,#7e7f7a 14px)", image: sideRhombusDuraKristall },
  { id: "rhombus-nf-schwarz", name: "Rhombus mit schwarzer Fuge", description: "Designstarke Optik. Gut für moderne, kontrastreiche Häuser.", price: 573.75, priceLR: 573.75, priceH: 478.13, swatch: "repeating-linear-gradient(90deg,#caa073,#caa073 12px,#0d0d0d 12px,#0d0d0d 15px)", image: sideRhombusNfSchwarz },
  { id: "trapez-fichte", name: "Trapezprofil Fichte", description: "Strukturierte Holzfläche. Etwas lebendiger als glatte Bretter.", price: 216, priceLR: 216, priceH: 180, swatch: "repeating-linear-gradient(90deg,#e3c08c,#e3c08c 8px,#b08856 8px,#b08856 12px)", image: sideTrapezFichte },
  { id: "trapez-laerche", name: "Trapezprofil Lärche", description: "Strukturierte Premium-Optik. Robuster für dauerhafte Außennutzung.", price: 452.25, priceLR: 452.25, priceH: 376.88, swatch: "repeating-linear-gradient(90deg,#caa073,#caa073 8px,#8b5e34 8px,#8b5e34 12px)", image: sideLaerche },
  { id: "marienhof-lava", name: "Marienhofprofil lavagrau", description: "Ruhige graue Fläche. Modern, dezent und pflegeleicht wirkend.", price: 776.25, priceLR: 776.25, priceH: 646.88, swatch: "linear-gradient(180deg,#5a5550,#332f2b)", image: sideMarienhofLava }
];
const SIDE_SLOTS = [
  { key: "links", label: "Links" },
  { key: "rechts", label: "Rechts" },
  { key: "hinten", label: "Hinten" }
];
function defaultConfig(variant) {
  const meta = VARIANT_META[variant];
  return {
    variant,
    dachart: "flachdach",
    breite: meta.widthRange[0],
    tiefe: meta.depthRange[0],
    hoehe: 2.5,
    dachbelag: "ohne",
    seitenLinks: "ohne",
    seitenRechts: "ohne",
    seitenHinten: "ohne"
  };
}
function computePrice(c) {
  const meta = VARIANT_META[c.variant];
  const dachart = DACHART.find((d) => d.id === c.dachart)?.price ?? 0;
  const dachbelagOpt = DACHBELAG.find((d) => d.id === c.dachbelag);
  const belag = c.dachart === "satteldach" ? dachbelagOpt?.priceSattel ?? dachbelagOpt?.price ?? 0 : dachbelagOpt?.price ?? 0;
  const seitenLinks = SEITEN.find((s) => s.id === c.seitenLinks);
  const seitenRechts = SEITEN.find((s) => s.id === c.seitenRechts);
  const seitenHinten = SEITEN.find((s) => s.id === c.seitenHinten);
  const seitenSum = (seitenLinks?.priceLR ?? seitenLinks?.price ?? 0) + (seitenRechts?.priceLR ?? seitenRechts?.price ?? 0) + (seitenHinten?.priceH ?? seitenHinten?.price ?? 0);
  const minArea = meta.widthRange[0] * meta.depthRange[0];
  const area = c.breite * c.tiefe;
  const areaDifference = Math.max(0, area - minArea);
  const heightDifference = Math.max(0, c.hoehe - 2.5);
  const sizeSurcharge = areaDifference * 75 + heightDifference * 480;
  return Math.round((meta.basePrice + dachart + belag + seitenSum + sizeSurcharge) * 100) / 100;
}
function formatEur(n) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}
const ConfigContext = reactExports.createContext(null);
const STORAGE_PREFIX = "scs-carport-config";
function ConfigProvider({ children }) {
  const storageKey = `${STORAGE_PREFIX}-main`;
  const [config, setConfig] = reactExports.useState(() => defaultConfig("single"));
  const [maxStepReached, setMaxStepReachedState] = reactExports.useState(0);
  reactExports.useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.variant) setConfig(parsed);
      }
      const rawMax = typeof window !== "undefined" ? window.localStorage.getItem(`${storageKey}-maxstep`) : null;
      if (rawMax) {
        setMaxStepReachedState(parseInt(rawMax, 10));
      }
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(config));
    } catch {
    }
  }, [config, storageKey]);
  const set = reactExports.useCallback((key, value2) => {
    setConfig((prev) => ({ ...prev, [key]: value2 }));
  }, []);
  const setMaxStepReached = reactExports.useCallback((val) => {
    setMaxStepReachedState(val);
    try {
      window.localStorage.setItem(`${storageKey}-maxstep`, val.toString());
    } catch {
    }
  }, [storageKey]);
  const reset = reactExports.useCallback(() => {
    setConfig((prev) => defaultConfig(prev.variant));
    setMaxStepReachedState(0);
    try {
      window.localStorage.setItem(`${storageKey}-maxstep`, "0");
    } catch {
    }
  }, [storageKey]);
  const value = reactExports.useMemo(() => ({ config, set, reset, maxStepReached, setMaxStepReached }), [config, set, reset, maxStepReached, setMaxStepReached]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigContext.Provider, { value, children });
}
function useConfig() {
  const ctx = reactExports.useContext(ConfigContext);
  if (!ctx) throw new Error("useConfig must be used inside ConfigProvider");
  return ctx;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Slider = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Root,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = Root.displayName;
const $$splitComponentImporter = () => import("./konfigurator._step-DZ6_JchT.mjs");
const Route = createFileRoute("/konfigurator/$step")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const LieferungRoute = Route$4.update({
  id: "/lieferung",
  path: "/lieferung",
  getParentRoute: () => Route$5
});
const KonfiguratorRoute = Route$3.update({
  id: "/konfigurator",
  path: "/konfigurator",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const KonfiguratorIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => KonfiguratorRoute
});
const KonfiguratorStepRoute = Route.update({
  id: "/$step",
  path: "/$step",
  getParentRoute: () => KonfiguratorRoute
});
const KonfiguratorRouteChildren = {
  KonfiguratorStepRoute,
  KonfiguratorIndexRoute
};
const KonfiguratorRouteWithChildren = KonfiguratorRoute._addFileChildren(
  KonfiguratorRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  KonfiguratorRoute: KonfiguratorRouteWithChildren,
  LieferungRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ConfigProvider as C,
  DACHART as D,
  HEIGHT_RANGE as H,
  Route as R,
  SEITEN as S,
  VARIANT_META as V,
  DACHBELAG as a,
  SIDE_SLOTS as b,
  STEPS as c,
  Slider as d,
  computePrice as e,
  formatEur as f,
  roofTrapezAnth as g,
  roofWell as h,
  router as i,
  roofSandwichAnth as r,
  useConfig as u
};
