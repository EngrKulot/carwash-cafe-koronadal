// Central brand + content constants for Carwash Cafe Koronadal.

// Official Carwash Cafe Koronadal logo (light lockup on transparent background).
// The uploaded PNG is a light-colored mark (avg luminance ~153) with a red
// accent droplet, so it must sit on a dark backing to remain visible.
export const LOGO = {
  src: "https://files.leadconnectorhq.com/file/6afac3d8a30b968e3fbe7e21/3eb411e3-593b-47f7-afca-8f0d5fb29ae1.png",
  // Native asset aspect ratio (horizontal lockup, ~1.72:1 content)
  aspect: 1.72,
  alt: "Carwash Cafe Koronadal official logo",
} as const;

export const SITE = {
  name: "Carwash Cafe",
  nameFull: "Carwash Cafe Koronadal",
  tagline: "Clean Rides. Good Vibes.",
  phone: "(083) 825-5745",
  phoneHref: "tel:+63838255745",
  facebook: "https://www.facebook.com/p/Carwash-CAFE-Koronadal-61557184804507/",
  messenger: "https://www.facebook.com/p/Carwash-CAFE-Koronadal-61557184804507/",
  address: {
    line1: "Purok Saint Gabriel, Judge Alba St., Zone III",
    line2: "Koronadal City, 9506 South Cotabato, Philippines",
    full: "Purok Saint Gabriel, Judge Alba St., Zone III, Koronadal City, 9506 South Cotabato, Philippines",
  },
  hours: [{ day: "Open Daily", time: "7:00 AM to 5:00 PM" }],
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Carwash Cafe Koronadal, Judge Alba St, Zone III, Koronadal City, South Cotabato, Philippines",
    ) +
    "&output=embed",
} as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

// Authentic Carwash Cafe Koronadal business photography + supplementary assets
export const IMAGES = {
  // Verified Carwash Cafe Koronadal facility & detailing photos
  facilityWide:
    "https://vibe.filesafe.space/1794817991761046358/attachments/bda1dd6e-359c-4a2b-9ddb-8896a599acc1.png",
  handWashSuds:
    "https://vibe.filesafe.space/1794817991761046358/attachments/85acd095-3192-4d58-988f-6aafc4d4e802.png",
  washBaysActive:
    "https://vibe.filesafe.space/1794817991761046358/attachments/1fc3ddab-8e3e-446d-bf16-139084e4525f.png",
  underwashRampRedTruck:
    "https://vibe.filesafe.space/1794817991761046358/attachments/54ca0ff2-52b5-456b-ad95-830d17bb04c6.png",
  underwashRampRaptor:
    "https://vibe.filesafe.space/1794817991761046358/attachments/1c58e427-3889-4ed0-b4d0-8ee037caa76c.png",

  // Newly provided authentic business photos
  foamWashSedanBay:
    "https://vibe.filesafe.space/1794817991761046358/attachments/e1a4a3f3-89cd-49d6-8092-18d047178810.png",
  cafeLoungeInteriorMural:
    "https://vibe.filesafe.space/1794817991761046358/attachments/5a74f464-1009-4f99-8b33-4099dc7440af.png",
  underwashFortunerRamp:
    "https://vibe.filesafe.space/1794817991761046358/attachments/97835ce4-9503-4c6e-8053-06c950222ea1.png",
  engineBayDetailing:
    "https://vibe.filesafe.space/1794817991761046358/attachments/ebc0508d-ad49-4e63-a094-048a565c621a.png",
  foamWashCommercialTruck:
    "https://vibe.filesafe.space/1794817991761046358/attachments/54dd4508-8413-4553-8e84-0b4c2d991bbf.png",
  cafeBrandedIcedFrappe:
    "https://vibe.filesafe.space/1794817991761046358/attachments/34924b5a-3cfe-4a4a-9701-c4fb37a0c92c.png",
  engineBayCleanToyotaBlack:
    "https://vibe.filesafe.space/1794817991761046358/attachments/34493fac-32bf-4538-838a-516c360adda0.png",
  engineBayRestoredToyotaRed:
    "https://vibe.filesafe.space/1794817991761046358/attachments/d5c2c3a1-2859-41eb-9ea0-886f66c04e92.png",
  raptorWashRinse:
    "https://vibe.filesafe.space/1794817991761046358/attachments/4f0d1d28-aa83-4bb4-bacd-77ef606b8320.png",
  underwashRedIsuzuRamp:
    "https://vibe.filesafe.space/1794817991761046358/attachments/de3751c8-84d5-44df-adce-062d53463d27.png",

  // Illustrative café lifestyle imagery
  cafeInterior:
    "https://vibe.filesafe.space/1794817991761046358/assets/8700d479-4f45-40e6-a7c4-d7cb4c4fd581.png",
  customerLounge:
    "https://vibe.filesafe.space/1794817991761046358/assets/5e117933-6cd5-4e58-98ca-c6e7e77a0dc1.png",
  cafeLifestyle:
    "https://vibe.filesafe.space/1794817991761046358/assets/a70333aa-c4d8-4c19-8956-801e03be53f8.png",
  wifiTableSign:
    "https://vibe.filesafe.space/1794817991761046358/attachments/1fe1bd48-bebb-4e44-8c11-d75f1b46e5dc.png",
  restroomWallSign:
    "https://vibe.filesafe.space/1794817991761046358/attachments/9235ca27-92dd-4a7c-9cf1-dcbbdae45bb9.png",

  // Page heroes & supplementary photography
  teamPhoto:
    "https://vibe.filesafe.space/1794817991761046358/attachments/6ae6b4ba-f254-46e3-99fe-2e01b7d5cb24.png",
  homeHero:
    "https://vibe.filesafe.space/1794817991761046358/attachments/1acf42ac-e6da-4ea2-afbf-6a8096e982ce.png",
  aboutHero:
    "https://vibe.filesafe.space/1794817991761046358/attachments/6ae6b4ba-f254-46e3-99fe-2e01b7d5cb24.png",
  servicesHero:
    "https://vibe.filesafe.space/1794817991761046358/attachments/85acd095-3192-4d58-988f-6aafc4d4e802.png",
  galleryHero:
    "https://vibe.filesafe.space/1794817991761046358/attachments/1c58e427-3889-4ed0-b4d0-8ee037caa76c.png",
  contactHero:
    "https://vibe.filesafe.space/1794817991761046358/attachments/45bae882-8303-4239-9b2f-3857f0423add.png",
  streetEntrance:
    "https://vibe.filesafe.space/1794817991761046358/attachments/45bae882-8303-4239-9b2f-3857f0423add.png",
  extEntrance:
    "https://vibe.filesafe.space/1794817991761046358/attachments/45bae882-8303-4239-9b2f-3857f0423add.png",
  foamCannon:
    "https://vibe.filesafe.space/1794817991761046358/assets/4dea2d90-f733-431f-9bda-d4207dd49176.png",
  cafeLounge:
    "https://vibe.filesafe.space/1794817991761046358/attachments/5a74f464-1009-4f99-8b33-4099dc7440af.png",
  polisher:
    "https://vibe.filesafe.space/1794817991761046358/attachments/b4131b86-d115-4160-91b7-902bb169e0d8.png",
  windowTint:
    "https://vibe.filesafe.space/1794817991761046358/attachments/7bfa8b30-223a-416c-8e66-dc65a5dc47e1.png",
  underwash:
    "https://vibe.filesafe.space/1794817991761046358/assets/05d35034-07e0-4343-86ec-4b89cf4255f1.png",
  interiorDetail:
    "https://vibe.filesafe.space/1794817991761046358/assets/ce00b7dd-eae1-4cbc-95a7-e03f4189e39c.png",
  latte:
    "https://vibe.filesafe.space/1794817991761046358/assets/a2af6ea2-d954-487a-9618-149320b609fb.png",
  washBay:
    "https://vibe.filesafe.space/1794817991761046358/assets/129cf8ca-1ad1-4de3-ac0f-40f948e36886.png",
} as const;

export type ServiceItem = {
  id: string;
  title: string;
  blurb: string;
  points: string[];
  image: string;
  alt: string;
};

export const AUTO_SERVICES: ServiceItem[] = [
  {
    id: "basic-full-wash",
    title: "Basic & Full Wash",
    blurb:
      "Complete interior and exterior car washing with active foam wash bays, gentle hand-sponge cleaning, and spotless rinse for sedans, SUVs, and pickups.",
    points: [
      "Active foam bath & hand wash",
      "Interior vacuum & wipe-down",
      "Door jambs & glass detailing",
    ],
    image: IMAGES.handWashSuds,
    alt: "Technician hand washing a foam-covered black sedan at Carwash Cafe Koronadal",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning & Underwash",
    blurb:
      "Engine bay cleaning with specialized degreaser brushes and air blowout, elevated ramp underwash for chassis mud and road grime, and Bac to Zero cabin sanitizing.",
    points: [
      "Detailer engine bay cleaning & dressing",
      "Elevated ramp underchassis wash",
      "Bac to Zero antibacterial cabin sanitize",
    ],
    image: IMAGES.engineBayDetailing,
    alt: "Technician detailing an open vehicle engine bay with cleaning bottles, brushes, and air tools at Carwash Cafe Koronadal",
  },
  {
    id: "exterior-restoration",
    title: "Exterior Restoration",
    blurb:
      "Machine waxing, asphalt and tar stain removal, and a multi-step buffing process using professional MTX Microtex compounds to lift scratches and restore high gloss.",
    points: [
      "MTX Microtex machine polish & wax",
      "Asphalt / tar stain removal",
      "Multi-step buffing for scratch removal",
    ],
    image: IMAGES.polisher,
    alt: "Carwash Cafe detailer buffing and polishing the roof of a black SUV in bay 6",
  },
  {
    id: "window-tinting",
    title: "Window Tinting",
    blurb:
      "Auto glass tint installation using Magic Tint film. Specifications as supplied by the product: 99% UV rejection and 93% infrared rejection.",
    points: [
      "Magic Tint film installation",
      "99% UV rejection (per product spec)",
      "93% infrared rejection (per product spec)",
    ],
    image: IMAGES.windowTint,
    alt: "White Toyota Hilux pickup with installed dark window tint at Carwash Cafe Koronadal",
  },
] as const;

export const CAFE_SERVICES: ServiceItem[] = [
  {
    id: "dine-in-cafe",
    title: "Dine-in Café",
    blurb:
      "Coffee, iced specialties, refreshments, food, and snacks served fresh while your vehicle is being cared for.",
    points: ["Freshly brewed coffee & iced specialties", "Cold refreshments", "Food & snacks"],
    image: IMAGES.cafeBrandedIcedFrappe,
    alt: "Carwash Cafe branded iced frappe with whipped cream and chocolate flakes on cafe counter",
  },
  {
    id: "lounge",
    title: "Comfortable Waiting Area",
    blurb:
      "An air-conditioned customer lounge where you can relax in comfort instead of waiting outside.",
    points: ["Air-conditioned lounge", "Comfortable seating", "Relaxed atmosphere"],
    image: IMAGES.cafeLoungeInteriorMural,
    alt: "Carwash Cafe Koronadal air-conditioned lounge with wall mural and customer tables",
  },
  {
    id: "wifi",
    title: "Free Wi-Fi",
    blurb:
      "Stay connected and productive while your vehicle is being detailed. Complimentary Wi-Fi for every guest.",
    points: ["Complimentary Wi-Fi", "Work or stream while you wait", "Fast, reliable connection"],
    image: IMAGES.wifiTableSign,
    alt: "Transparent acrylic Free Wi-Fi tabletop sign on wooden cafe table at Carwash Cafe Koronadal",
  },
  {
    id: "restrooms",
    title: "Restroom Facilities",
    blurb:
      "Clean, convenient restroom facilities available on-site for all customers during their visit.",
    points: ["On-site restrooms", "Clean & maintained", "Customer convenience"],
    image: IMAGES.restroomWallSign,
    alt: "Modern black restroom wall sign with male and female symbols and red accent",
  },
] as const;

// Only authentic Carwash Cafe Koronadal photography is shown here.
// AI-generated / stock supplementary images (the /assets/ lifestyle and
// studio shots) have been removed so the gallery reflects the real business.
// Spans are tuned so the "All" view tiles into complete rows on mobile (2 col),
// tablet (3 col) and desktop (4 col) with no orphaned final tile.
export const GALLERY: { src: string; alt: string; span?: string; tag?: string }[] = [
  {
    src: IMAGES.facilityWide,
    alt: "Full view of Carwash Cafe Koronadal multi-bay wash facility with Land Cruisers and sedans serviced",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    tag: "Facility",
  },
  {
    src: IMAGES.underwashFortunerRamp,
    alt: "Toyota Fortuner SUV elevated on the dedicated heavy-duty steel underwash service ramp under canopy",
    span: "lg:row-span-2",
    tag: "Underwash Ramp",
  },
  {
    src: IMAGES.cafeLoungeInteriorMural,
    alt: "Authentic Carwash Cafe Koronadal air-conditioned dine-in lounge with tropical leaf mural, Carwash Cafe wall logo, and potted plant tables",
    span: "lg:row-span-2",
    tag: "Café Lounge",
  },
  {
    src: IMAGES.engineBayRestoredToyotaRed,
    alt: "Spotless detailed Toyota engine bay with vibrant red chassis and dressed engine cover at Carwash Cafe",
    span: "sm:col-span-2 lg:col-span-2",
    tag: "Engine Detail",
  },
  {
    src: IMAGES.washBaysActive,
    alt: "Active covered wash bays with SUVs and trucks under canopy",
    span: "sm:col-span-2 lg:col-span-2",
    tag: "Facility",
  },
  {
    src: IMAGES.cafeBrandedIcedFrappe,
    alt: "Official Carwash Cafe Koronadal branded iced frappe drink with whipped cream and chocolate drizzle",
    tag: "Café",
  },
  {
    src: IMAGES.engineBayDetailing,
    alt: "Technician detailing vehicle engine bay using spray degreasers, microfibers, detail brushes, and air blower tools",
    tag: "Engine Detail",
  },
  {
    src: IMAGES.engineBayCleanToyotaBlack,
    alt: "Completed deep engine bay cleaning on Toyota Hilux showing spotless battery, intake, and alternator bay",
    tag: "Engine Detail",
  },
  {
    src: IMAGES.foamWashSedanBay,
    alt: "Black sedan covered in active thick foam wash in Bay 6 with yellow safety pillar at Carwash Cafe",
    tag: "Foam Wash",
  },
  {
    src: IMAGES.foamWashCommercialTruck,
    alt: "Commercial delivery truck coated in thick active snow foam during full exterior wash service",
    span: "sm:col-span-2 lg:col-span-2",
    tag: "Foam Wash",
  },
  {
    src: IMAGES.handWashSuds,
    alt: "Detailing technician hand washing suds on a black sedan in Bay 6",
    tag: "Foam Wash",
  },
  {
    src: IMAGES.underwashRampRaptor,
    alt: "Ford Raptor truck elevated on the underwash steel service ramp",
    tag: "Underwash Ramp",
  },
  {
    src: IMAGES.polisher,
    alt: "Carwash Cafe detailer buffing and polishing the roof of a black SUV in bay 6",
    span: "lg:col-span-2",
    tag: "Restoration",
  },
  {
    src: IMAGES.windowTint,
    alt: "White Toyota Hilux pickup with installed dark window tint at Carwash Cafe Koronadal",
    span: "lg:col-span-2",
    tag: "Restoration",
  },
] as const;

export const WHY_CHOOSE = [
  {
    icon: "Sparkles",
    title: "Detail-First Care",
    body: "Every vehicle gets the attention of a detailing studio, not just a quick rinse.",
  },
  {
    icon: "Coffee",
    title: "Café While You Wait",
    body: "Skip the standing around. Enjoy coffee, food, and a comfortable lounge during your service.",
  },
  {
    icon: "Wifi",
    title: "Free Wi-Fi",
    body: "Stay connected, catch up on work, or relax online while we take care of your ride.",
  },
  {
    icon: "MapPin",
    title: "Convenient Location",
    body: "Centrally located in Koronadal City, easy to reach and easy to wait at.",
  },
] as const;
