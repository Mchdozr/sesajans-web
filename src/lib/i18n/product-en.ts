import type { ProductSpec } from "../products";

type ProductLocale = {
  tagline: string;
  excerpt: string;
  intro: string;
  highlights: string[];
  specs: ProductSpec[];
  useCases: string[];
  faqs: { q: string; a: string }[];
};

export const productEn: Record<string, ProductLocale> = {
  "beam-king-380": {
    tagline: "Powerful beam moving head · prism king",
    excerpt:
      "380W beam moving head with 2° narrow beam, 14-color wheel, 13 gobos and 4 prisms — ideal for concerts and clubs.",
    intro:
      "Beam King 380 is a professional beam moving head designed for stage and event production. With a 380W light source, ultra-narrow 2° beam and rich effect set, it delivers sharp light beams over long distances for concerts, festivals, nightclubs and TV studios.",
    highlights: [
      "380W light source (optional 420W)",
      "2° narrow beam · 152mm lens",
      "14 colors + 13 fixed gobos · 4 prisms",
      "Pan 540° / Tilt 270° · 16-bit",
      "DMX512/RDM · 17 channels",
    ],
    specs: [
      { label: "Light Source", value: "380W (optional 420W)" },
      { label: "Color Temp.", value: "7800K" },
      { label: "Lifetime", value: "3500 hours" },
      { label: "Beam Angle", value: "2°" },
      { label: "Control", value: "DMX512 / RDM · 17CH" },
      { label: "Power", value: "AC 100–240V · 380W" },
      { label: "IP Rating", value: "IP20" },
      { label: "Weight", value: "13.2 kg" },
    ],
    useCases: ["Concert & festival", "Nightclub", "TV studio", "Trade show & launch"],
    faqs: [
      {
        q: "What venues is Beam King 380 suitable for?",
        a: "Designed for indoor stage, club and studio use. IP20 rating — not recommended for outdoor use.",
      },
      {
        q: "How many DMX channels?",
        a: "Standard mode is 17 channels with DMX512 and RDM support.",
      },
      {
        q: "Do you provide installation support?",
        a: "Yes. SESAJANS offers truss mounting, DMX programming and commissioning. Contact us for a quote.",
      },
    ],
  },
  "beam-king-ip": {
    tagline: "Outdoor beam · Pan Infinity · CMY color",
    excerpt:
      "IP66 body, 420W source, CMY mixing, 17 gobos and 6 prisms — premium outdoor beam for concerts and architectural lighting.",
    intro:
      "Beam King IP is a premium beam moving head built for demanding outdoor conditions. Magnesium-aluminum IP66 body, infinite pan and CMY color mixing deliver top performance at large-scale events.",
    highlights: [
      "Philips 420W LL · CRI 77",
      "CMY + CTO 3600–6600K",
      "Pan Infinity / Tilt 270°",
      "IP66 magnesium-aluminum body",
      "Optional Art-Net / CRMX",
    ],
    specs: [
      { label: "Light Source", value: "Philips 420W LL (optional Ushio 450W)" },
      { label: "Beam Angle", value: "1.7°" },
      { label: "Control", value: "DMX512/RDM · 18/29/30CH" },
      { label: "Power", value: "AC 100–240V · 600W" },
      { label: "IP Rating", value: "IP66" },
      { label: "Weight", value: "26 kg" },
    ],
    useCases: ["Outdoor concert", "Architectural projection", "Festival", "Large arena"],
    faqs: [
      {
        q: "Can it be used in rain?",
        a: "IP66 body protects against dust and powerful water jets — safe for professional outdoor events.",
      },
      { q: "What is Pan Infinity?", a: "Continuous rotation without cable wrap limits." },
      {
        q: "Network control available?",
        a: "DMX512/RDM standard. Art-Net and CRMX optional.",
      },
    ],
  },
  "blinder-400-ip": {
    tagline: "Compact IP65 blinder · 2×200W LED",
    excerpt:
      "2×200W LED blinder with 50° beam, IP65 protection and operation down to -40°C for outdoor stage and architectural use.",
    intro:
      "Blinder 400 IP delivers high-output blinder performance in a compact IP65-rated housing. Two 200W LED modules make it ideal for front-of-stage, architectural accent and stadium effects.",
    highlights: [
      "2 × 200W LED (WW/CW/RGBW options)",
      "IP65 · -40°C to 45°C operation",
      "50° beam · 93° field angle",
      "OLED display · DMX512/RDM",
      "Die-cast aluminum · 6 kg",
    ],
    specs: [
      { label: "LED", value: "2 × 200W" },
      { label: "Power", value: "AC 110–240V · 400W" },
      { label: "IP Rating", value: "IP65" },
      { label: "Weight", value: "6 kg" },
    ],
    useCases: ["Front blinder", "Stadium", "Architectural", "Outdoor event"],
    faqs: [
      { q: "RGBW version available?", a: "Yes — WW, CW, WW+CW and RGBW configurations." },
      { q: "DMX channel modes?", a: "4/8 (RGBW), 1/5 (WW), 2/6 (WW+CW)." },
      { q: "Mounting options?", a: "Omega bracket for truss or wall. Safety cable point included." },
    ],
  },
  "blinder-800-ip": {
    tagline: "4-lens high-power blinder · IP65",
    excerpt:
      "4×200W LED, 800W total power and IP65 protection for large-stage and outdoor blinder applications.",
    intro:
      "Blinder 800 IP features four 200W LED modules for 800W total output. Wide 93° field angle and IP65 rating suit stadiums, festivals and large outdoor productions.",
    highlights: [
      "4 × 200W LED modules",
      "800W total power",
      "IP65 · die-cast aluminum",
      "16/20 channel RGBW control",
      "OLED display · smart fan control",
    ],
    specs: [
      { label: "LED", value: "4 × 200W" },
      { label: "Power", value: "AC 110–240V · 800W" },
      { label: "IP Rating", value: "IP65" },
      { label: "Weight", value: "16 kg" },
    ],
    useCases: ["Large stage", "Stadium & arena", "Festival", "TV production"],
    faqs: [
      {
        q: "Difference vs Blinder 400?",
        a: "Blinder 800 offers double the power and wider coverage for large venues.",
      },
      { q: "Outdoor rated?", a: "IP65 — operates from -40°C to 45°C." },
      { q: "Flight case option?", a: "4-in-1 flight case packaging available on request." },
    ],
  },
  "diamond-line-1240-eco": {
    tagline: "Modular linear LED bar · energy efficient",
    excerpt:
      "Linkable linear LED bar for concerts, trade shows and architectural line lighting — compact, modular and efficient.",
    intro:
      "Diamond Line 1240 Eco is an energy-efficient modular LED bar for long linear lighting runs. Units link together for custom lengths — ideal for booths, concert decor and architectural accents.",
    highlights: [
      "Modular linkable design",
      "RGBW full color control",
      "Tilt movement · zoom effect",
      "Art-Net network control",
      "Eco series efficiency",
    ],
    specs: [
      { label: "Type", value: "Linear LED bar · modular" },
      { label: "LED", value: "12 × 40W RGBW 4in1" },
      { label: "Control", value: "DMX512 · Art-Net" },
      { label: "Features", value: "Tilt · zoom · modular linking" },
    ],
    useCases: ["Trade show booth", "Concert decor", "Architectural line light", "Stage floor effect"],
    faqs: [
      { q: "How long can it be linked?", a: "Multiple units chain to project length — share your dimensions for a config." },
      { q: "Outdoor use?", a: "Primarily indoor; see our IP65 range for outdoor projects." },
      { q: "DMX addressing?", a: "Each module can have its own address or pixel-map over the network." },
    ],
  },
  "led-beam-wash-150": {
    tagline: "7×40W RGBW · 7°–45° zoom beam/wash",
    excerpt:
      "Compact 6 kg fixture with 7×40W RGBW LED, motorized zoom and dual beam/wash mode for clubs and small stages.",
    intro:
      "LED Beam Wash 150 packs strong output into a compact moving head. Seven 40W RGBW 4in1 LEDs, 7°–45° motorized zoom and dual beam/wash modes suit bars, clubs and small-to-medium stages.",
    highlights: [
      "7 × 40W RGBW 4in1 LED",
      "7° – 45° motorized zoom",
      "2800K – 8000K color temperature",
      "DMX512/RDM · 17 channels",
      "Only 6 kg · IP20",
    ],
    specs: [
      { label: "LED", value: "7 × 40W RGBW 4in1" },
      { label: "Zoom", value: "7° – 45°" },
      { label: "Power", value: "AC 90–240V · 250W" },
      { label: "Weight", value: "6 kg" },
    ],
    useCases: ["Bar & club", "Wedding & event", "Small concert", "Showroom"],
    faqs: [
      { q: "Beam vs wash mode?", a: "Motorized zoom adjusts from 7° beam to 45° wash via DMX." },
      { q: "Sound-active mode?", a: "Yes — DMX, master-slave, auto and music-triggered modes." },
      { q: "Ceiling mount suitable?", a: "6 kg and compact size suit low ceilings. Safety cable required." },
    ],
  },
  "strike-pro-ip": {
    tagline: "Strobe + wash 2in1 · 71,620 lm · IP65",
    excerpt:
      "784 RGB + 392 cool-white LEDs, 180° tilt and 1400W — flicker-free for TV and large-stage strobe/wash.",
    intro:
      "Strike Pro IP combines strobe and wash in one high-output fixture. Up to 71,620 lumens, 180° electric tilt and IP65 rating for concerts, festivals and broadcast. PWM up to 25 kHz for flicker-free camera work.",
    highlights: [
      "Up to 71,620 lumens",
      "784 RGB + 392 cool-white LEDs",
      "180° electric tilt",
      "IP65 · flicker-free 25 kHz PWM",
      "DMX/Art-Net/sACN · up to 97CH",
    ],
    specs: [
      { label: "Lumen", value: "Up to 71,620 lm" },
      { label: "Tilt", value: "180° electric" },
      { label: "Control", value: "DMX/RDM/Art-Net/sACN · 8–97CH" },
      { label: "Power", value: "100–240V AC · 1400W" },
      { label: "IP Rating", value: "IP65" },
      { label: "Weight", value: "10.8 kg" },
    ],
    useCases: ["Large concert", "Festival", "TV & film", "Outdoor event"],
    faqs: [
      { q: "Flicker on camera?", a: "Up to 25 kHz PWM — flicker-free for broadcast." },
      { q: "Pixel control?", a: "Yes — segment pixel control in 97-channel mode." },
      { q: "Floor or truss mount?", a: "Rubber feet for floor; omega bracket for truss." },
    ],
  },
  "tornado-ip": {
    tagline: "5-head moving LED bar · IP65",
    excerpt:
      "5×120W RGBWL + 120×0.5W RGB ring LEDs, 3°–30° zoom and IP65 for outdoor moving bar effects.",
    intro:
      "Tornado IP is an innovative five-head LED bar. Each head has 120W RGBWL plus a 24-LED RGB ring. Motorized 3°–30° zoom and IP65 protection for festivals, architecture and large stages.",
    highlights: [
      "5 × 120W RGBWL + 120 × 0.5W RGB ring",
      "13,000 lumen output",
      "3° – 30° motorized zoom",
      "IP65 outdoor rated",
      "DMX · 21–170 channel modes",
    ],
    specs: [
      { label: "Main LED", value: "5 × 120W RGBWL 4in1" },
      { label: "Beam Angle", value: "3° – 30°" },
      { label: "Power", value: "AC 100–240V · 800W" },
      { label: "IP Rating", value: "IP65" },
      { label: "Weight", value: "30 kg" },
    ],
    useCases: ["Outdoor festival", "Large concert", "Architectural mapping", "Main stage trade show"],
    faqs: [
      { q: "Independent head control?", a: "Yes — each head and ring independently in 170CH mode." },
      { q: "Outdoor durable?", a: "IP65 rated for professional outdoor events." },
      { q: "Rigging weight?", a: "30 kg — verify truss capacity and use safety cables." },
    ],
  },
  "wash-3715": {
    tagline: "37×15W RGBW · 10°–60° zoom wash",
    excerpt:
      "37×15W RGBW high CRI LEDs, 10°–60° electronic zoom and 500W professional wash moving head.",
    intro:
      "Wash 3715 produces homogeneous, vivid color washes with 37×15W RGBW high CRI LEDs. Electronic 10°–60° zoom and rich DMX modes suit concerts, theatre and corporate events.",
    highlights: [
      "37 × 15W RGBW high CRI LED",
      "10° – 60° electronic zoom",
      "Ring control · color macro effects",
      "DMX/RDM · up to 37 channels",
      "LCD display · firmware updates",
    ],
    specs: [
      { label: "LED", value: "37 × 15W RGBW 4in1 high CRI" },
      { label: "Zoom", value: "10° – 60° electronic" },
      { label: "Power", value: "AC 100–240V · 500W" },
      { label: "IP Rating", value: "IP20" },
      { label: "Weight", value: "19.5 kg" },
    ],
    useCases: ["Concert & festival", "Theatre", "Corporate event", "TV studio"],
    faqs: [
      { q: "Suitable for theatre?", a: "High CRI LEDs and quiet fan modes suit theatre and studio." },
      { q: "DMX channel modes?", a: "37, 21, 15, 10, 11 and 25 channel modes supported." },
      { q: "Why zoom on a wash?", a: "10° for spot accents, 60° for wide stage washes — one fixture, many looks." },
    ],
  },
};
