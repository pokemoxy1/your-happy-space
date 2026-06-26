import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useConfig, R as Route, e as computePrice, c as STEPS, D as DACHART, a as DACHBELAG, S as SEITEN, f as formatEur, V as VARIANT_META, H as HEIGHT_RANGE, b as SIDE_SLOTS, d as Slider } from "./router-C0Yhzctt.mjs";
import { a as ArrowRight, A as ArrowLeft, R as RotateCcw, C as Check, m as Lock, P as Pencil, o as Maximize2, r as Ruler, e as CircleCheck, E as EyeOff, B as Box, h as FileDown, T as Truck, g as CreditCard, u as ShoppingBag } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slider.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const carportSingle = "/assets/carport-single-new-Bu7H1kQM.jpg";
const carportDouble = "/assets/carport-double-new-BlT2hWBk.jpg";
const visualStages = [
  { key: "typ", label: "Typ", short: "01" },
  { key: "groesse", label: "Größe", short: "02" },
  { key: "dachart", label: "Dachform", short: "03" },
  { key: "dachbelag", label: "Dachbelag", short: "04" },
  { key: "seiten", label: "Seitenwände", short: "05" }
];
function StepShell({ activeStep, setActiveStep, scrollToSection, canAdvance = true, children }) {
  const { config, reset, maxStepReached, setMaxStepReached } = useConfig();
  const variant = config.variant;
  const currentStageIdx = visualStages.findIndex((s) => s.key === activeStep);
  const price = computePrice(config);
  const stepperRef = reactExports.useRef(null);
  const [isPreviewExpanded, setIsPreviewExpanded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (currentStageIdx > maxStepReached) {
      setMaxStepReached(currentStageIdx);
    }
  }, [currentStageIdx, maxStepReached, setMaxStepReached]);
  reactExports.useEffect(() => {
    const stepper = stepperRef.current;
    if (!stepper) return;
    const updateHeight = () => {
      const height = stepper.offsetHeight;
      document.documentElement.style.setProperty("--stepper-height", `${height}px`);
    };
    updateHeight();
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    resizeObserver.observe(stepper);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  const idx = STEPS.findIndex((s) => s.key === activeStep);
  const next = idx < STEPS.length - 1 ? STEPS[idx + 1] : null;
  let progress = 0;
  if (activeStep === "zusammenfassung" || activeStep === "cart") {
    progress = 100;
  } else if (currentStageIdx >= 0) {
    progress = currentStageIdx / visualStages.length * 100;
  }
  const selectedDachart = DACHART.find((d) => d.id === config.dachart);
  const selectedDachbelag = DACHBELAG.find((d) => d.id === config.dachbelag);
  const activeSideId = [config.seitenLinks, config.seitenRechts, config.seitenHinten].find((id) => id !== "ohne");
  const selectedSeiten = SEITEN.find((s) => s.id === (activeSideId || "ohne"));
  const seitenSummary = () => {
    const parts = [];
    if (config.seitenLinks !== "ohne") parts.push("Links");
    if (config.seitenRechts !== "ohne") parts.push("Rechts");
    if (config.seitenHinten !== "ohne") parts.push("Hinten");
    if (parts.length === 0) return "Offen (keine Wände)";
    return `${parts.join(", ")}: ${selectedSeiten?.name}`;
  };
  const getStepSummary = (key) => {
    switch (key) {
      case "typ":
        return config.variant === "single" ? "Einzelcarport" : "Doppelcarport";
      case "groesse":
        return `${config.breite.toFixed(2)} × ${config.tiefe.toFixed(2)} m`;
      case "dachart":
        return selectedDachart?.name || "";
      case "dachbelag":
        return selectedDachbelag?.name || "";
      case "seiten":
        return seitenSummary();
      default:
        return "";
    }
  };
  reactExports.useEffect(() => {
    const container = document.getElementById("stepper-container");
    const activeEl = document.getElementById(`stepper-item-${activeStep}`);
    if (container && activeEl && window.innerWidth < 1024) {
      const containerWidth = container.clientWidth;
      const elementOffset = activeEl.offsetLeft;
      const elementWidth = activeEl.clientWidth;
      container.scrollTo({
        left: elementOffset - containerWidth / 2 + elementWidth / 2,
        behavior: "smooth"
      });
    }
  }, [activeStep]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-[#F9F9FB] font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: stepperRef,
        className: "sticky z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
        style: { top: "var(--header-height, 158px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
                  " Startseite"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  reset();
                  scrollToSection("groesse");
                },
                className: "inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-black transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
                  " Zurücksetzen"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col lg:flex-row gap-4 items-stretch overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { id: "stepper-container", className: "flex lg:grid lg:grid-cols-5 gap-2 flex-1 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory pb-2 lg:pb-0 scroll-smooth", children: visualStages.map((s, i) => {
              const isSummaryOrCart = activeStep === "zusammenfassung" || activeStep === "cart";
              const isDone = isSummaryOrCart ? true : i < currentStageIdx;
              const isActive = isSummaryOrCart ? false : i === currentStageIdx;
              const isLocked = isSummaryOrCart ? false : i > maxStepReached;
              const rawSummary = getStepSummary(s.key);
              const summaryText = rawSummary || "Option wählen";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: `stepper-item-${s.key}`, className: "flex flex-col gap-2 min-w-[240px] lg:min-w-0 shrink-0 snap-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    disabled: isLocked,
                    onClick: () => scrollToSection(s.key),
                    className: `group flex w-full items-center justify-start gap-3 rounded-2xl border px-4 py-2.5 transition-all duration-200 overflow-hidden ${isActive ? "border-black bg-black text-white shadow-sm scale-[1.02]" : isDone ? "border-emerald-200 bg-emerald-50/60 text-emerald-950 hover:border-emerald-300 cursor-pointer animate-none" : !isLocked ? "border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700 cursor-pointer" : "border-neutral-100 bg-neutral-50/40 text-neutral-300 cursor-not-allowed opacity-50"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-black leading-none ${isDone ? "bg-emerald-500 text-white" : isActive ? "bg-[#FFE500] text-black" : !isLocked ? "bg-neutral-100 text-neutral-600 border border-neutral-200" : "bg-neutral-100 text-neutral-400"}`,
                          children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 stroke-[3]" }) : isLocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }) : s.short
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-extrabold leading-none truncate", children: s.label }),
                      isDone && /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5 shrink-0 text-emerald-500 group-hover:text-emerald-700 transition-colors stroke-[2.5] ml-auto" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[12px] font-bold text-left truncate px-2 ${isActive ? "text-black" : isDone ? "text-emerald-700" : isLocked ? "text-neutral-400" : "text-neutral-500"}`, children: summaryText })
              ] }, s.key);
            }) }),
            activeStep !== "zusammenfassung" && activeStep !== "cart" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 w-full lg:w-[300px] bg-white rounded-2xl border border-neutral-200 p-2 shadow-sm flex flex-col justify-center gap-1.5 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-bl-full pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-neutral-400", children: "Gesamtpreis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[17px] font-black text-black leading-none", children: formatEur(price) })
              ] }),
              next && next.key !== "zusammenfassung" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  disabled: !canAdvance,
                  onClick: () => scrollToSection(next.key),
                  className: "w-full py-2 bg-black hover:bg-neutral-900 transition-all text-white font-extrabold text-[11px] tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 shadow-sm disabled:cursor-not-allowed disabled:opacity-50",
                  children: [
                    "Weiter: ",
                    next.label,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  disabled: !canAdvance,
                  onClick: () => scrollToSection("zusammenfassung"),
                  className: "w-full py-2 bg-[#FFE500] hover:brightness-105 transition-all text-black font-extrabold text-[11px] tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 shadow-sm disabled:cursor-not-allowed disabled:opacity-50",
                  children: [
                    "Zur Übersicht ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1.5 overflow-hidden rounded-full bg-neutral-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full bg-gradient-to-r from-[#FFE500] to-emerald-400 transition-all duration-700",
              style: { width: `${progress}%` }
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex justify-center py-8 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-[1440px]", children: activeStep === "zusammenfassung" || activeStep === "cart" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex justify-center", children }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8 items-start justify-between w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hidden lg:block w-full lg:w-1/2 shrink-0 sticky",
          style: {
            top: "calc(var(--header-height, 158px) + var(--stepper-height, 120px) + 20px)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-full aspect-[3/2] rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm relative group cursor-pointer",
              onClick: () => setIsPreviewExpanded(true),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: variant === "single" ? carportSingle : carportDouble,
                    alt: "Carport Vorschau",
                    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest text-[#FFE500] leading-none drop-shadow-md", children: "Live-Vorschau" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-6 right-6 bg-black/75 backdrop-blur-md text-xs font-black text-white px-4 py-2 rounded-full flex items-center gap-2 uppercase tracking-wider hover:bg-black transition-colors shadow-lg border border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-4 w-4" }),
                  " Vollbild"
                ] })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-1/2 flex flex-col gap-8 pb-6", children })
    ] }) }) }),
    isPreviewExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 cursor-pointer transition-all duration-300",
        onClick: () => setIsPreviewExpanded(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl flex items-center justify-center animate-in zoom-in-95 duration-300",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: variant === "single" ? carportSingle : carportDouble,
                  alt: "Carport Vorschau Groß",
                  className: "w-full h-auto max-h-[90vh] object-contain rounded-3xl"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setIsPreviewExpanded(false),
                  className: "absolute top-4 right-4 h-12 w-12 rounded-full bg-black/60 text-white hover:bg-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-white/10",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M6 18L18 6M6 6l12 12" }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase tracking-widest text-[#FFE500]", children: "Live-Vorschau" }) })
            ]
          }
        )
      }
    )
  ] });
}
function OptionCard({ option, selected, onSelect, variant = "image", displayPrice }) {
  const isImage = variant === "image" && option.image;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: onSelect,
      "aria-pressed": selected,
      className: `group relative flex w-full flex-col overflow-hidden rounded-2xl border bg-white text-left transition-all ${selected ? "border-[var(--brand-ink)] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] ring-2 ring-[var(--brand-yellow)]" : "border-neutral-200 hover:border-neutral-300 hover:shadow-sm"}`,
      children: [
        selected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-3 z-10 grid h-7 w-7 place-items-center rounded-full bg-[var(--brand-yellow)] text-[var(--brand-ink)] shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4", strokeWidth: 3 }) }),
        isImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] w-full overflow-hidden bg-neutral-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: option.image,
            alt: option.name,
            loading: "lazy",
            className: "h-full w-full object-cover transition-transform duration-500 scale-125 group-hover:scale-[1.32]"
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "aspect-[4/2] w-full border-b border-neutral-200",
            style: { background: option.swatch ?? "var(--brand-chip)" },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-1 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold leading-tight text-[var(--brand-ink)]", children: option.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs font-bold text-neutral-500", children: displayPrice ?? (option.price === 0 ? "inkl." : `+${formatEur(option.price)}`) })
          ] }),
          option.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-neutral-500", children: option.description })
        ] })
      ]
    }
  );
}
const wallToggleLeft = "/assets/wall-toggle-left-CzouvHJ8.jpg";
const wallToggleRechts = "/assets/wall-toggle-rechts-DdpU306K.jpg";
const wallToggleHinten = "/assets/wall-toggle-hinten-DaI9ok5M.jpg";
const roofFlatNone = "/assets/roof-flat-none-BBdn_Stf.png";
const roofFlatWell = "/assets/roof-flat-wellplatte-BP3C4jSa.png";
const roofFlatAnthracite = "/assets/roof-flat-anthracite-DD3la9Nd.png";
const roofFlatRed = "/assets/roof-flat-red-Z8Qvm6MN.png";
const roofSattelNone = "/assets/roof-sattel-none-DuPDCrlr.jpg";
const roofSattelWell = "/assets/roof-sattel-wellplatte-05rwDwxc.jpg";
const roofSattelAnthracite = "/assets/roof-sattel-anthracite-Bv_QwfFF.jpg";
const roofSattelRed = "/assets/roof-sattel-red-YVfC4uTY.jpg";
const roofSattelSandwichAnthracite = "/assets/roof-sattel-sandwich-anthracite-CqDBchwa.jpg";
const roofSattelSandwichRed = "/assets/roof-sattel-sandwich-red-BrLQcMKN.jpg";
function StepPage() {
  const {
    step
  } = Route.useParams();
  const stepKey = step;
  if (stepKey === "zusammenfassung") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Step5Page, {});
  }
  if (stepKey === "cart") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Step6Page, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ConfiguratorScrollContainer, { initialStep: stepKey });
}
function ConfiguratorScrollContainer({
  initialStep
}) {
  const navigate = useNavigate();
  const {
    config
  } = useConfig();
  const [activeStep, setActiveStep] = reactExports.useState(initialStep);
  const isScrollingRef = reactExports.useRef(false);
  const sections = {
    typ: reactExports.useRef(null),
    groesse: reactExports.useRef(null),
    dachart: reactExports.useRef(null),
    dachbelag: reactExports.useRef(null),
    seiten: reactExports.useRef(null)
  };
  const scrollToSection = (step) => {
    if (step === "zusammenfassung" || step === "cart") {
      navigate({
        to: "/konfigurator/$step",
        params: {
          step
        }
      });
    } else {
      isScrollingRef.current = true;
      sections[step].current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setActiveStep(step);
      navigate({
        to: "/konfigurator/$step",
        params: {
          step
        },
        replace: true,
        resetScroll: false
      });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 850);
    }
  };
  reactExports.useEffect(() => {
    if (initialStep && initialStep !== "groesse") {
      const timer = setTimeout(() => {
        isScrollingRef.current = true;
        sections[initialStep]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 850);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [initialStep]);
  reactExports.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      // triggers when element is centered
      threshold: 0.05
    };
    const observerCallback = (entries) => {
      if (isScrollingRef.current) return;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;
      if (isAtBottom) {
        setActiveStep("seiten");
        navigate({
          to: "/konfigurator/$step",
          params: {
            step: "seiten"
          },
          replace: true,
          resetScroll: false
        });
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepKey = entry.target.id.replace("section-", "");
          setActiveStep(stepKey);
          navigate({
            to: "/konfigurator/$step",
            params: {
              step: stepKey
            },
            replace: true,
            resetScroll: false
          });
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.entries(sections).forEach(([_, ref]) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;
      if (isAtBottom && activeStep !== "seiten") {
        setActiveStep("seiten");
        navigate({
          to: "/konfigurator/$step",
          params: {
            step: "seiten"
          },
          replace: true,
          resetScroll: false
        });
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeStep, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepShell, { activeStep, setActiveStep, scrollToSection, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-typ", ref: sections.typ, className: "mb-14", style: {
      scrollMarginTop: "calc(var(--header-height, 158px) + var(--stepper-height, 120px) + 20px)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-neutral-200/60 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-neutral-700", children: "Schritt 1 / 6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight", children: "Einzel- oder Doppelcarport?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: "Wähle deine Grundvariante – alle weiteren Details legst du anschließend fest." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TypSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-groesse", ref: sections.groesse, className: "mb-14", style: {
      scrollMarginTop: "calc(var(--header-height, 158px) + var(--stepper-height, 120px) + 20px)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-neutral-200/60 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-neutral-700", children: "Schritt 2 / 6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight", children: "Wie groß soll dein Carport werden?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: "Stelle Breite, Tiefe und Höhe in 25-cm-Schritten ein – die Vorschau aktualisiert sich live." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GroesseSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-dachart", ref: sections.dachart, className: "mb-14", style: {
      scrollMarginTop: "calc(var(--header-height, 158px) + var(--stepper-height, 120px) + 20px)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-neutral-200/60 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-neutral-700", children: "Schritt 3 / 6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight", children: "Welche Dachform passt zu deinem Zuhause?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: "Beide Bauarten sind statisch geprüft und für jede Schneelastzone optimierbar." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DachartSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-dachbelag", ref: sections.dachbelag, className: "mb-14", style: {
      scrollMarginTop: "calc(var(--header-height, 158px) + var(--stepper-height, 120px) + 20px)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-neutral-200/60 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-neutral-700", children: "Schritt 4 / 6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight", children: "Welcher Dachbelag passt zu deinem Carport?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: "Von der reinen Holzkonstruktion bis zum gedämmten Sandwichpaneel – alle Eindeckungen sind witterungsbeständig." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DachbelagSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-seiten", ref: sections.seiten, className: "pb-2", style: {
      scrollMarginTop: "calc(var(--header-height, 158px) + var(--stepper-height, 120px) + 20px)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-neutral-200/60 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-neutral-700", children: "Schritt 5 / 6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight", children: "Wähle deine Seitenverkleidung" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: "Eine Materialwahl für alle Seiten – einzelne Seiten kannst du offen lassen, um Licht & Luft hereinzulassen." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SeitenSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => scrollToSection("zusammenfassung"), className: "inline-flex items-center gap-2 rounded-full bg-[#FFE500] hover:brightness-105 transition-all text-black font-extrabold text-xs tracking-widest uppercase px-8 py-4 shadow-md hover:shadow-lg cursor-pointer", children: [
        "Zur Übersicht",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4.5 w-4.5" })
      ] }) })
    ] })
  ] }) });
}
function Step5Page() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = reactExports.useState("zusammenfassung");
  const scrollToSection = (step) => {
    navigate({
      to: "/konfigurator/$step",
      params: {
        step
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepShell, { activeStep, setActiveStep, scrollToSection, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-5xl mx-auto py-2 px-4 select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-neutral-200/60 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-neutral-700 font-mono", children: "Schritt 6 / 6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight", children: "Dein maßgeschneidertes Carport im Überblick" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: 'Prüfen Sie Ihre Konfiguration. Klicken Sie auf "Ändern", um beliebige Details im Konfigurator zu korrigieren, oder fahren Sie mit der Bestellung fort.' })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SummarySection, { scrollToSection })
  ] }) });
}
function Step6Page() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = reactExports.useState("cart");
  const scrollToSection = (step) => {
    navigate({
      to: "/konfigurator/$step",
      params: {
        step
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepShell, { activeStep, setActiveStep, scrollToSection, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-5xl mx-auto py-2 px-4 select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-neutral-200/60 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-neutral-700 font-mono", children: "Checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight", children: "Ihr Warenkorb & Checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: "Geben Sie Ihre Lieferdaten ein, wählen Sie optionale Servicepakete und schließen Sie Ihre Carport-Studios Bestellung sicher ab." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartSection, {})
  ] }) });
}
function TypSection() {
  const {
    config,
    set
  } = useConfig();
  const handleVariantSelect = (v) => {
    if (v !== config.variant) {
      const def = VARIANT_META[v];
      set("variant", v);
      set("breite", def.widthRange[0]);
      set("tiefe", def.depthRange[0]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 w-full select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariantCard, { title: "Einzelcarport", tagline: "Für 1 Auto. Platzsparend und ideal für schmale Einfahrten.", price: `ab ${formatEur(VARIANT_META.single.basePrice)}`, specs: ["Breite 2,50 – 4,75 m", "Tiefe 3,00 – 6,00 m", "Höhe 2,25 – 3,00 m"], image: carportSingle, selected: config.variant === "single", onClick: () => handleVariantSelect("single") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariantCard, { title: "Doppelcarport", tagline: "Für 2 Autos oder extra Platz für Fahrräder und Geräte.", price: `ab ${formatEur(VARIANT_META.double.basePrice)}`, specs: ["Breite 5,00 – 8,00 m", "Tiefe 3,00 – 6,00 m", "Höhe 2,25 – 3,00 m"], image: carportDouble, selected: config.variant === "double", onClick: () => handleVariantSelect("double") })
  ] });
}
function VariantCard({
  title,
  tagline,
  price,
  specs,
  image,
  selected,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick, className: `group flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 cursor-pointer ${selected ? "border-black shadow-lg ring-2 ring-[#FFE500]" : "border-neutral-200 hover:border-neutral-300 hover:shadow-md"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-neutral-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: title, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" }),
      selected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-4 top-4 z-10 grid h-7 w-7 place-items-center rounded-full bg-[#FFE500] text-black shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-black stroke-[2.5]" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-black tracking-wide leading-none", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-1 text-xs text-neutral-500 font-semibold", children: tagline })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs font-black text-black bg-[#FFE500]/20 px-2.5 py-1 rounded-lg", children: price })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 mb-6", children: specs.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-xs font-semibold text-neutral-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-emerald-500" }),
        s
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: `mt-auto w-full py-3 text-xs font-black uppercase tracking-widest rounded-full transition-all cursor-pointer ${selected ? "bg-black text-white" : "border-2 border-black bg-white text-black hover:bg-black hover:text-white"}`, children: selected ? "Ausgewählt" : "Auswählen" })
    ] })
  ] });
}
function GroesseSection() {
  const {
    config,
    set
  } = useConfig();
  const meta = VARIANT_META[config.variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "h-3.5 w-3.5" }),
          " Live-Grundriss"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-black", children: [
          config.breite.toFixed(2),
          " × ",
          config.tiefe.toFixed(2),
          " m"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloorPlan, { breite: config.breite, tiefe: config.tiefe, hoehe: config.hoehe, cars: meta.cars, wRange: meta.widthRange, dRange: meta.depthRange })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-6 justify-between shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SizeSlider, { label: "Breite (Außenmaß)", value: config.breite, range: meta.widthRange, step: 0.25, onChange: (v) => set("breite", v) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SizeSlider, { label: "Tiefe (Gesamtlänge)", value: config.tiefe, range: meta.depthRange, step: 0.25, onChange: (v) => set("tiefe", v) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SizeSlider, { label: "Einfahrtshöhe (lichtes Maß)", value: config.hoehe, range: HEIGHT_RANGE, step: 0.25, onChange: (v) => set("hoehe", v) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[var(--brand-yellow-soft)] border border-[#FFE500]/25 p-4 text-xs text-[var(--brand-ink)] font-semibold mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-sm font-black mb-1", children: "💡 Planungstipp:" }),
        "Plane mindestens 50 cm Bewegungsraum pro Seite ein, damit sich Autotüren auch bei abgestelltem Fahrzeug komfortabel öffnen lassen."
      ] })
    ] })
  ] });
}
function DachartSection() {
  const {
    config,
    set
  } = useConfig();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 w-full select-none", children: DACHART.map((opt) => {
    const selected = config.dachart === opt.id;
    const plainDesc = opt.description;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${selected ? "border-black shadow-lg ring-2 ring-[#FFE500]" : "border-neutral-200 hover:border-neutral-300 hover:shadow-md"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-neutral-100", children: [
        opt.image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: opt.image, alt: opt.name, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" }),
        selected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-4 top-4 z-10 grid h-7 w-7 place-items-center rounded-full bg-[#FFE500] text-black shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-black stroke-[2.5]" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-black tracking-wide leading-none", children: opt.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[10px] font-black text-neutral-500 bg-neutral-100 px-2 py-1 rounded", children: opt.price === 0 ? "Basispreis" : `+ ${formatEur(opt.price)}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-1.5", children: "Beschreibung" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-600 leading-relaxed flex-1 mb-5", children: plainDesc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => set("dachart", opt.id), className: `w-full py-3 text-xs font-black uppercase tracking-widest rounded-full transition-all cursor-pointer ${selected ? "bg-black text-white" : "border-2 border-black bg-white text-black hover:bg-black hover:text-white"}`, children: selected ? "Ausgewählt" : "Auswählen" })
      ] })
    ] }, opt.id);
  }) });
}
function DachbelagSection() {
  const {
    config,
    set
  } = useConfig();
  const getOptionImage = (id) => {
    const isFlachdach = config.dachart === "flachdach";
    const isSatteldach = config.dachart === "satteldach";
    if (isFlachdach) {
      switch (id) {
        case "ohne":
          return roofFlatNone;
        case "wellplatte":
          return roofFlatWell;
        case "trapez-anth":
        case "sandwich-anth":
          return roofFlatAnthracite;
        case "trapez-rot":
        case "sandwich-rot":
          return roofFlatRed;
        default:
          return void 0;
      }
    }
    if (isSatteldach) {
      switch (id) {
        case "ohne":
          return roofSattelNone;
        case "wellplatte":
          return roofSattelWell;
        case "trapez-anth":
          return roofSattelAnthracite;
        case "sandwich-anth":
          return roofSattelSandwichAnthracite;
        case "trapez-rot":
          return roofSattelRed;
        case "sandwich-rot":
          return roofSattelSandwichRed;
        default:
          return void 0;
      }
    }
    return DACHBELAG.find((d) => d.id === id)?.image;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 w-full select-none", children: DACHBELAG.map((opt) => {
    const selected = config.dachbelag === opt.id;
    const plainDesc = opt.description;
    const displayImage = getOptionImage(opt.id);
    const currentPrice = config.dachart === "satteldach" ? opt.priceSattel ?? opt.price : opt.price;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${selected ? "border-black shadow-lg ring-2 ring-[#FFE500]" : "border-neutral-200 hover:border-neutral-300 hover:shadow-md"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-neutral-100", children: [
        displayImage && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: displayImage, alt: opt.name, className: "h-full w-full object-cover transition-transform duration-500 scale-125 group-hover:scale-[1.3]" }),
        selected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-4 top-4 z-10 grid h-7 w-7 place-items-center rounded-full bg-[#FFE500] text-black shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-black stroke-[2.5]" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5 mb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-wider text-neutral-400", children: "Material" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-black leading-snug tracking-wide h-10 line-clamp-2", title: opt.name, children: opt.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-wider text-neutral-400", children: "Aufpreis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded", children: currentPrice === 0 ? "Inklusive" : `+ ${formatEur(currentPrice)}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-wider text-neutral-400 mb-1", children: "Beschreibung" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-neutral-600 leading-normal flex-1 mb-4 h-16 overflow-y-auto pr-1", children: plainDesc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => set("dachbelag", opt.id), className: `w-full py-3 text-xs font-black uppercase tracking-widest rounded-full transition-all cursor-pointer ${selected ? "bg-black text-white" : "border-2 border-black bg-white text-black hover:bg-black hover:text-white"}`, children: selected ? "Ausgewählt" : "Auswählen" })
      ] })
    ] }, opt.id);
  }) });
}
function SeitenSection() {
  const {
    config,
    set
  } = useConfig();
  const slots = SIDE_SLOTS;
  const selectedIds = reactExports.useMemo(() => /* @__PURE__ */ new Set([config.seitenLinks, config.seitenRechts, config.seitenHinten]), [config]);
  const setAll = (id) => {
    set("seitenLinks", id);
    set("seitenRechts", id);
    set("seitenHinten", id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-wide text-neutral-400", children: "Wände Aktivieren:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-neutral-400 font-semibold hidden md:inline", children: "Aktivierte Wände erhalten das unten gewählte Holzprofil." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center sm:justify-start gap-8", children: slots.map((s) => {
        const key = "seiten" + s.key[0].toUpperCase() + s.key.slice(1);
        const isOpen = config[key] === "ohne";
        const isActive = !isOpen;
        let bgImage = wallToggleLeft;
        if (s.key === "rechts") bgImage = wallToggleRechts;
        if (s.key === "hinten") bgImage = wallToggleHinten;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2.5 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => set(key, isOpen ? Array.from(selectedIds).find((id) => id !== "ohne") ?? "fase-fichte" : "ohne"), className: `relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 overflow-hidden transition-all duration-300 shadow-md cursor-pointer focus:outline-none ${isActive ? "border-green-600 ring-4 ring-green-600/10 scale-105" : "border-neutral-200 hover:border-neutral-400 hover:scale-102"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-cover bg-center transition-all duration-300 ${isActive ? "opacity-100 scale-100" : "opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-75"}`, style: {
              backgroundImage: `url(${bgImage})`
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 transition-colors ${isActive ? "bg-black/5 hover:bg-black/0" : "bg-black/10 hover:bg-black/0"}` }),
            !isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-white/90 p-1.5 shadow-sm text-neutral-600 backdrop-blur-xs transition group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) }) }),
            isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1.5 right-1.5 rounded-full bg-green-600 p-1 text-white shadow-xs border border-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2.5 w-2.5 stroke-[3px]" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-black transition-colors ${isActive ? "text-green-600" : "text-neutral-500 group-hover:text-neutral-800"}`, children: [
            "Wand ",
            s.label
          ] })
        ] }, s.key);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: SEITEN.slice().sort((a, b) => {
      if (a.id === "ohne") return -1;
      if (b.id === "ohne") return 1;
      return a.name.localeCompare(b.name, "de");
    }).map((opt) => {
      const isPicked = config.seitenLinks === opt.id || config.seitenRechts === opt.id || config.seitenHinten === opt.id;
      let displayPrice;
      if (opt.priceLR != null && opt.priceH != null && opt.priceLR !== opt.priceH) {
        const minPrice = Math.min(opt.priceLR, opt.priceH);
        displayPrice = minPrice === 0 ? "inkl." : `ab +${formatEur(minPrice)}`;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { option: opt, selected: isPicked, displayPrice, onSelect: () => {
        const targets = [];
        ["seitenLinks", "seitenRechts", "seitenHinten"].forEach((k) => {
          if (config[k] !== "ohne") targets.push(k);
        });
        if (targets.length === 0) setAll(opt.id);
        else targets.forEach((t) => set(t, opt.id));
      }, variant: "image" }, opt.id);
    }) })
  ] });
}
function SummarySection({
  scrollToSection
}) {
  const {
    config
  } = useConfig();
  const variant = config.variant;
  const meta = VARIANT_META[variant];
  const price = computePrice(config);
  const rows = [{
    label: "Modell",
    value: meta.title,
    stepKey: "typ"
  }, {
    label: "Dachform",
    value: DACHART.find((d) => d.id === config.dachart)?.name ?? "—",
    stepKey: "dachart"
  }, {
    label: "Breite",
    value: `${config.breite.toFixed(2).replace(".", ",")} m`,
    stepKey: "groesse"
  }, {
    label: "Tiefe",
    value: `${config.tiefe.toFixed(2).replace(".", ",")} m`,
    stepKey: "groesse"
  }, {
    label: "Höhe",
    value: `${config.hoehe.toFixed(2).replace(".", ",")} m`,
    stepKey: "groesse"
  }, {
    label: "Dachbelag",
    value: DACHBELAG.find((d) => d.id === config.dachbelag)?.name ?? "—",
    stepKey: "dachbelag"
  }, {
    label: "Wand Links",
    value: SEITEN.find((s) => s.id === config.seitenLinks)?.name ?? "—",
    stepKey: "seiten"
  }, {
    label: "Wand Rechts",
    value: SEITEN.find((s) => s.id === config.seitenRechts)?.name ?? "—",
    stepKey: "seiten"
  }, {
    label: "Wand Hinten",
    value: SEITEN.find((s) => s.id === config.seitenHinten)?.name ?? "—",
    stepKey: "seiten"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[1.1fr_1fr] items-stretch justify-center select-none w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `border-b border-neutral-100 ${i % 2 === 0 ? "bg-neutral-50/30" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 md:px-5 md:py-3.5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-neutral-400 w-1/3", children: r.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 md:px-5 md:py-3.5 text-xs md:text-sm font-extrabold text-neutral-800", children: r.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 md:px-5 md:py-3.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => scrollToSection(r.stepKey), className: "text-[10px] md:text-xs font-black text-neutral-500 hover:text-black transition-colors underline cursor-pointer", children: "Ändern" }) })
      ] }, r.label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-neutral-50 border-t border-neutral-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black uppercase text-neutral-500 tracking-wider mb-2", children: "Im Lieferumfang enthalten" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 text-[11px] font-semibold text-neutral-600", children: ["KVH Fichte statisch geprüft", "Präzisionsabbund in Deutschland", "Kompletter Edelstahl-Montagesatz", "Bebilderte Schritt-für-Schritt-Anleitung"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
        ] }, item)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-neutral-200 bg-neutral-50/50 p-5 flex flex-col gap-3.5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[10px] font-black text-neutral-400 uppercase tracking-widest leading-none", children: "3D-Modell & Dokumente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => alert("Interaktives 3D-Modell wird geladen...\nDrehen, Neigen und Zoomen Sie das Modell im separaten Vollbildfenster."), className: "relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-neutral-200 group cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: variant === "single" ? carportSingle : carportDouble, alt: "Carport 3D Preview", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/90 backdrop-blur-sm text-black px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-2 shadow-lg transform group-hover:scale-105 transition-transform", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "h-4 w-4" }),
              "Live 3D Öffnen"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => alert("Technisches Datenblatt & Montagezeichnung (PDF) werden generiert und heruntergeladen..."), className: "flex items-center justify-between gap-3 p-3 rounded-2xl border border-neutral-200 bg-white hover:border-black transition-all text-left shadow-sm group cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8.5 w-8.5 bg-neutral-100 text-red-600 group-hover:bg-red-600 group-hover:text-white rounded-xl flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[11px] font-black text-neutral-800 uppercase tracking-wider", children: "PDF-Datenblatt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[9px] text-neutral-500 font-bold mt-0.5", children: "Statik & Maße · 1.2 MB" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black text-neutral-400 group-hover:text-black transition-colors", children: "Download →" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-black bg-black p-6 text-white shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black uppercase tracking-wider text-[var(--brand-yellow)]", children: "Gesamtpreis Ihrer Konfiguration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-4xl font-black text-white", children: formatEur(price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-neutral-300 font-semibold", children: "inkl. 19% MwSt., kostenfreier Versand (DE)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          window.dispatchEvent(new Event("added-to-cart"));
          scrollToSection("cart");
        }, className: "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-yellow)] px-6 py-4 text-xs font-black uppercase tracking-widest text-[var(--brand-ink)] hover:brightness-105 transition-all shadow-sm cursor-pointer", children: [
          "In den Warenkorb & Zur Kasse ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4.5 w-4.5 stroke-[2.5]" })
        ] })
      ] })
    ] })
  ] });
}
function CartSection() {
  const {
    config,
    reset
  } = useConfig();
  const basePrice = computePrice(config);
  const [hasAssembly, setHasAssembly] = reactExports.useState(false);
  const [hasExpress, setHasExpress] = reactExports.useState(false);
  const [payment, setPayment] = reactExports.useState("paypal");
  const [showSuccess, setShowSuccess] = reactExports.useState(false);
  const [orderId, setOrderId] = reactExports.useState("");
  const [form, setForm] = reactExports.useState({
    vorname: "",
    nachname: "",
    strasse: "",
    plz: "",
    ort: "",
    email: "",
    telefon: ""
  });
  const totalPrice = basePrice + (hasAssembly ? 990 : 0) + (hasExpress ? 199 : 0);
  const selectedDachart = DACHART.find((d) => d.id === config.dachart);
  const selectedDachbelag = DACHBELAG.find((d) => d.id === config.dachbelag);
  const handleOrder = (e) => {
    e.preventDefault();
    if (!form.vorname || !form.nachname || !form.strasse || !form.plz || !form.ort || !form.email) {
      alert("Bitte füllen Sie alle erforderlichen Felder der Lieferadresse aus!");
      return;
    }
    const randNum = Math.floor(1e4 + Math.random() * 9e4);
    setOrderId(`SCS-2026-${randNum}`);
    setShowSuccess(true);
  };
  const handleCloseSuccess = () => {
    setShowSuccess(false);
    reset();
    window.location.href = "/";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "select-none relative w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleOrder, className: "grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black text-black uppercase tracking-wider border-b border-neutral-100 pb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4.5 w-4.5" }),
            " Lieferadresse"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black uppercase text-neutral-400 mb-1", children: "Vorname *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.vorname, onChange: (e) => setForm({
                ...form,
                vorname: e.target.value
              }), placeholder: "Max", className: "w-full px-4 py-2.5 text-xs font-semibold bg-neutral-50 rounded-xl border border-neutral-200 outline-none focus:bg-white focus:border-black transition-colors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black uppercase text-neutral-400 mb-1", children: "Nachname *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.nachname, onChange: (e) => setForm({
                ...form,
                nachname: e.target.value
              }), placeholder: "Mustermann", className: "w-full px-4 py-2.5 text-xs font-semibold bg-neutral-50 rounded-xl border border-neutral-200 outline-none focus:bg-white focus:border-black transition-colors" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black uppercase text-neutral-400 mb-1", children: "Straße & Hausnummer *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.strasse, onChange: (e) => setForm({
              ...form,
              strasse: e.target.value
            }), placeholder: "Hauptstraße 12", className: "w-full px-4 py-2.5 text-xs font-semibold bg-neutral-50 rounded-xl border border-neutral-200 outline-none focus:bg-white focus:border-black transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black uppercase text-neutral-400 mb-1", children: "Postleitzahl *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.plz, onChange: (e) => setForm({
                ...form,
                plz: e.target.value
              }), placeholder: "20095", className: "w-full px-4 py-2.5 text-xs font-semibold bg-neutral-50 rounded-xl border border-neutral-200 outline-none focus:bg-white focus:border-black transition-colors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black uppercase text-neutral-400 mb-1", children: "Ort / Stadt *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: form.ort, onChange: (e) => setForm({
                ...form,
                ort: e.target.value
              }), placeholder: "Hamburg", className: "w-full px-4 py-2.5 text-xs font-semibold bg-neutral-50 rounded-xl border border-neutral-200 outline-none focus:bg-white focus:border-black transition-colors" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black uppercase text-neutral-400 mb-1", children: "E-Mail-Adresse *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: form.email, onChange: (e) => setForm({
                ...form,
                email: e.target.value
              }), placeholder: "max@mustermann.de", className: "w-full px-4 py-2.5 text-xs font-semibold bg-neutral-50 rounded-xl border border-neutral-200 outline-none focus:bg-white focus:border-black transition-colors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black uppercase text-neutral-400 mb-1", children: "Telefonnummer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: form.telefon, onChange: (e) => setForm({
                ...form,
                telefon: e.target.value
              }), placeholder: "+49 170 1234567", className: "w-full px-4 py-2.5 text-xs font-semibold bg-neutral-50 rounded-xl border border-neutral-200 outline-none focus:bg-white focus:border-black transition-colors" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black text-black uppercase tracking-wider border-b border-neutral-100 pb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4.5 w-4.5" }),
            " Zahlungsweise wählen"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: [{
            id: "paypal",
            label: "PayPal",
            desc: "Direkt & sicher zahlen"
          }, {
            id: "card",
            label: "Kreditkarte",
            desc: "Visa, Mastercard, Amex"
          }, {
            id: "klarna",
            label: "Klarna",
            desc: "Sofort oder Ratenkauf"
          }, {
            id: "invoice",
            label: "Kauf auf Rechnung",
            desc: "Bequem nach Lieferung"
          }].map((p) => {
            const isPicked = payment === p.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setPayment(p.id), className: `text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${isPicked ? "border-black bg-neutral-50 ring-1 ring-black" : "border-neutral-200 bg-white hover:border-neutral-355"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-0.5 h-4 w-4 rounded-full border flex items-center justify-center ${isPicked ? "border-black bg-black text-[#FFE500]" : "border-neutral-300"}`, children: isPicked && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-[#FFE500]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-black text-black", children: p.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[9px] text-neutral-400 font-semibold mt-0.5", children: p.desc })
              ] })
            ] }, p.id);
          }) }),
          payment === "card" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 p-4 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[9px] font-black uppercase text-neutral-400 mb-1", children: "Kartennummer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "•••• •••• •••• ••••", className: "w-full px-3 py-2 text-xs font-semibold bg-white rounded-lg border border-neutral-200 outline-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[9px] font-black uppercase text-neutral-400 mb-1", children: "Gültig bis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "MM / YY", className: "w-full px-3 py-2 text-xs font-semibold bg-white rounded-lg border border-neutral-200 outline-none" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[9px] font-black uppercase text-neutral-400 mb-1", children: "CVC / Prüfziffer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "•••", className: "w-full px-3 py-2 text-xs font-semibold bg-white rounded-lg border border-neutral-200 outline-none" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6 lg:sticky", style: {
        top: "calc(var(--header-height, 158px) + var(--stepper-height, 120px) + 20px)",
        maxHeight: "calc(100vh - var(--header-height, 158px) - var(--stepper-height, 120px) - 40px)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col gap-4 overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black text-black uppercase tracking-wider border-b border-neutral-100 pb-3 flex items-center gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4.5 w-4.5" }),
          " Bestelldetails"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 bg-neutral-50 p-3.5 rounded-2xl border border-neutral-150 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-neutral-400 leading-none", children: "Konfiguration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-black text-black mt-1 leading-snug", children: "SCS Premium Carport (Maßholz)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[10px] text-neutral-500 font-semibold mt-1.5 leading-normal space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block", children: [
              "📏 ",
              config.breite.toFixed(2),
              " × ",
              config.tiefe.toFixed(2),
              " m (H ",
              config.hoehe.toFixed(2),
              " m)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block", children: [
              "🏠 Dachform: ",
              selectedDachart?.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block", children: [
              "🪵 Eindeckung: ",
              selectedDachbelag?.name
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 p-3.5 bg-neutral-50 border border-neutral-150 rounded-2xl shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-neutral-400 leading-none mb-1", children: "Optionale Zusatzleistungen" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between gap-3 text-xs font-bold text-neutral-800 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: hasAssembly, onChange: (e) => setHasAssembly(e.target.checked), className: "h-4.5 w-4.5 accent-black rounded border-neutral-300 cursor-pointer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-black text-neutral-800", children: "Aufbau-Service buchen" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[9px] text-neutral-400 font-semibold mt-0.5", children: "Professionelle Montage" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-neutral-600 shrink-0", children: "+ 990 €" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between gap-3 text-xs font-bold text-neutral-800 cursor-pointer border-t border-neutral-200/60 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: hasExpress, onChange: (e) => setHasExpress(e.target.checked), className: "h-4.5 w-4.5 accent-black rounded border-neutral-300 cursor-pointer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-black text-neutral-800", children: "Express-Produktion" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[9px] text-emerald-600 font-bold mt-0.5", children: "Zuschnitt & Versand in 7 Tagen" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-extrabold text-neutral-600 shrink-0", children: "+ 199 €" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-4 border-t border-neutral-250 flex flex-col gap-4 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs font-bold text-neutral-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Carport Bausatz" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-800", children: formatEur(basePrice) })
            ] }),
            hasAssembly && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Aufbau-Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-800", children: formatEur(990) })
            ] }),
            hasExpress && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Express-Produktion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-800", children: formatEur(199) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Spezialversand (Kran-LKW)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 uppercase font-black tracking-wide", children: "Kostenlos" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-neutral-100 pt-3 text-base items-baseline", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-black", children: "Gesamtbetrag" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black text-black leading-none", children: formatEur(totalPrice) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[9px] text-neutral-400 font-semibold mt-0.5", children: "inkl. 19% MwSt." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full py-4 bg-[#FFE500] hover:brightness-105 transition-all text-black font-extrabold text-xs tracking-widest uppercase rounded-full flex items-center justify-center gap-2 shadow-sm cursor-pointer", children: [
            "Jetzt zahlungspflichtig bestellen ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4.5 w-4.5 stroke-[2.5]" })
          ] })
        ] })
      ] }) })
    ] }),
    showSuccess && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md animate-fade-in text-neutral-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl border border-neutral-200 p-8 max-w-md w-full shadow-2xl flex flex-col items-center text-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center animate-bounce shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-8 w-8 stroke-[3.5]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full", children: "Bestellung erfolgreich" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-black uppercase tracking-wide mt-3 leading-snug", children: "Vielen Dank für Ihren Einkauf!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 mt-2 leading-relaxed font-semibold", children: "Ihr maßgeschneidertes Carport wurde erfolgreich in unsere Manufaktur übertragen." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-neutral-50 p-4 border border-neutral-200 rounded-2xl flex flex-col gap-2 font-semibold text-xs text-neutral-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bestellnummer:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-black uppercase font-mono", children: orderId })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Lieferung an:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-black", children: [
            form.vorname,
            " ",
            form.nachname
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gesamtsumme:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-black", children: formatEur(totalPrice) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-t border-neutral-200/60 pt-2 text-[11px] text-emerald-700 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CAD-Freigabe-Planung:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "In 24h per E-Mail" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCloseSuccess, className: "w-full py-3.5 bg-black hover:bg-neutral-900 text-white font-extrabold text-xs tracking-widest uppercase rounded-full transition-all cursor-pointer shadow-sm", children: "Fenster Schließen & Zurück" })
    ] }) })
  ] });
}
function SizeSlider({
  label,
  value,
  range,
  step,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2.5 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-black text-neutral-700 uppercase tracking-wide", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-black text-black bg-neutral-100 px-2 py-0.5 rounded-lg border border-neutral-200", children: [
        value.toFixed(2),
        " m"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { min: range[0], max: range[1], step, value: [value], onValueChange: ([v]) => onChange(v) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex justify-between text-[9px] font-black uppercase tracking-wider text-neutral-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Min: ",
        range[0].toFixed(2),
        " m"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Max: ",
        range[1].toFixed(2),
        " m"
      ] })
    ] })
  ] });
}
function FloorPlan({
  breite,
  tiefe,
  hoehe,
  cars,
  wRange,
  dRange
}) {
  const wPct = (breite - wRange[0]) / (wRange[1] - wRange[0]) * 0.45 + 0.45;
  const dPct = (tiefe - dRange[0]) / (dRange[1] - dRange[0]) * 0.45 + 0.45;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 border border-neutral-200 shadow-inner", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border-[3px] border-black bg-white/95 shadow-md transition-all duration-300 flex flex-col justify-between p-2", style: {
      width: `${wPct * 100}%`,
      height: `${dPct * 100}%`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1.5 -left-1.5 h-3 w-3 bg-black rounded-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1.5 -right-1.5 h-3 w-3 bg-black rounded-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-black rounded-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-black rounded-sm" }),
      tiefe >= 4.5 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 -left-1.5 h-3 w-3 bg-black rounded-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 -right-1.5 h-3 w-3 bg-black rounded-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center gap-2", children: Array.from({
        length: cars
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid h-10 flex-1 place-items-center rounded-lg bg-[var(--brand-yellow-soft)] border border-[#FFE500]/30 text-[11px] font-black text-black tracking-wide uppercase shadow-sm", children: [
        "PKW ",
        i + 1
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase text-neutral-400 tracking-wider shrink-0 bg-[#F9F9FB] px-1", children: [
        breite.toFixed(2),
        " m"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -left-9 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-black uppercase text-neutral-400 tracking-wider shrink-0 bg-[#F9F9FB] px-1", children: [
        tiefe.toFixed(2),
        " m"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-neutral-500 shadow-sm border border-neutral-100", children: [
      "Höhe ",
      hoehe.toFixed(2),
      " m"
    ] })
  ] });
}
export {
  ConfiguratorScrollContainer,
  StepPage as component
};
