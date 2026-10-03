export const brand = {
  name: "Seacoast Home Partners",
  descriptor: "Home Management & Property Stewardship",
  headline: "Your home, Handled.",
  legal: "Granite Coast Ventures, LLC d/b/a Seacoast Home Partners",
  location: "Rye, New Hampshire",
  founder: "Adam",
  email: "seacoasthomepartners@gmail.com",
  phone: "(603) 396-7828",
  phoneHref: "tel:+16033967828",
  hours: "Monday to Saturday, 8 AM to 6 PM",
  hoursShort: "Mon to Sat, 8 to 6",
} as const;

// SimplyBook.me booking page. If emptied, booking buttons fall back to the
// call-request form.
export const bookingUrl = "https://seacoasthomepartners.simplybook.me/";

export const gaMeasurementId = "G-E39TL5VSXZ";

export const towns = [
  "Rye",
  "New Castle",
  "Portsmouth",
  "North Hampton",
] as const;

export const townsLine = "Rye · New Castle · Portsmouth · North Hampton";

export const pricing = {
  assessment: 250,
  membership: 199,
  concierge: 599,
  conciergeHours: 3,
  projectPercent: 8,
} as const;

export const nav = [
  { href: "/property-stewardship", label: "Second Homes" },
  { href: "/home-independence", label: "Home Independence" },
  { href: "/#concierge", label: "Concierge" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
] as const;

export const services = [
  {
    name: "Home Operations Assessment",
    price: `$${pricing.assessment}`,
    unit: "one time",
    body: "A walkthrough of the home and a written Home Operations Plan: systems, vendors, maintenance priorities, and next steps. Not a licensed home inspection.",
  },
  {
    name: "Home Stewardship",
    price: `$${pricing.membership}`,
    unit: "per month",
    body: "One 50 point property visit each month, a photo report, your maintenance calendar, property and vendor records, and up to 30 minutes of routine coordination.",
  },
  {
    name: "Concierge",
    price: `$${pricing.concierge}`,
    unit: "per month",
    body: `Everything in Home Stewardship, plus the home to do list handled: up to ${pricing.conciergeHours} hours of concierge each month and priority scheduling.`,
    featured: true,
  },
  {
    name: "Projects and contractor coordination",
    price: `${pricing.projectPercent}%`,
    unit: "of project cost",
    body: "Repairs, installations, and improvements coordinated from quote to completion. One invoice from us covering contractor costs plus our 8% fee. Qualified contractors do the work.",
  },
] as const;

export const visitChecklist = [
  {
    area: "Exterior and grounds",
    items: [
      "Roof surface and flashing, as visible from the ground",
      "Gutters and downspouts clear and attached",
      "Siding, trim, and paint",
      "Foundation for cracks or settling",
      "Exterior doors, frames, and weatherstripping",
      "Windows, screens, and storm windows",
      "Decks, porches, steps, and railings",
      "Walkways and driveway",
      "Trees and limbs near the house or utility lines",
      "Storm or wind damage",
    ],
  },
  {
    area: "Heating, cooling, and utilities",
    items: [
      "Heat running at the set temperature",
      "Air conditioning running at the set temperature",
      "Thermostat settings and batteries",
      "HVAC filter condition",
      "Water heater for leaks or corrosion",
      "Main water shutoff accessible and dry",
      "Sump pump runs and discharges",
      "Electrical panel for tripped breakers",
      "Generator status, if present",
      "Well pump or septic warning signs, if present",
    ],
  },
  {
    area: "Water and plumbing",
    items: [
      "Run the faucet in every sink",
      "Flush every toilet",
      "Under sink cabinets for leaks",
      "Washing machine hoses",
      "Dishwasher and refrigerator water lines",
      "Ceilings and walls for water stains",
      "Outdoor faucets, by season",
      "Basement or crawl space for moisture",
    ],
  },
  {
    area: "Interior",
    items: [
      "Walk every room",
      "Floors for water or damage",
      "Signs of pests or rodents",
      "Unusual odors such as gas, mold, or smoke",
      "Test smoke detectors",
      "Test carbon monoxide detectors",
      "Refrigerator and freezer temperatures",
      "Lights and outlets in main living areas",
      "Attic for leaks or animals, where accessible",
      "Fireplace damper closed",
    ],
  },
  {
    area: "Security",
    items: [
      "All exterior doors locked",
      "All windows latched",
      "Alarm system armed and working",
      "Cameras online, if installed",
      "Garage door closed and working",
      "Signs of entry or tampering",
    ],
  },
  {
    area: "Seasonal and follow up",
    items: [
      "Mail, packages, and flyers collected",
      "Outdoor furniture and seasonal items secured",
      "Snow and ice on the roof, walks, and entries, in winter",
      "Dryer, furnace, and exhaust vents clear",
      "Anything needing a professional added to your calendar",
      "Photo report sent to you within 24 hours",
    ],
  },
] as const;

export const visitCheckCount = visitChecklist.reduce((n, g) => n + g.items.length, 0);

export const faqs = [
  {
    q: "How much does home watch and home management cost?",
    a: `The intro call is free. Every client then starts with a $${pricing.assessment} Home Operations Assessment, an in home consultation. After that, Home Stewardship is $${pricing.membership} a month and Concierge is $${pricing.concierge} a month. Larger projects are coordinated for ${pricing.projectPercent}% of the project cost. We tell you the cost of anything extra before it happens.`,
  },
  {
    q: "Are you insured and bonded?",
    a: "Yes. Seacoast Home Partners is insured and bonded.",
  },
  {
    q: "How is this different from a home watch service?",
    a: "Home watch checks the house. We also keep the maintenance plan, coordinate the professionals, manage projects, and keep the records, so one local person knows the home and takes responsibility for what happens next.",
  },
  {
    q: "Do you do the repairs yourselves?",
    a: "No. Licensed and qualified professionals do the work. We find them, schedule them, let them in, follow up, and make sure the job is finished. We are not a general contractor.",
  },
  {
    q: "Can I keep the contractors I already use?",
    a: "Yes. Your vendors can stay your vendors. We coordinate with them and keep their information organized for you.",
  },
  {
    q: "Do you provide care for older homeowners?",
    a: "No. We manage the property, not the resident. We do not provide personal care, transportation, companionship, wellness checks, medication help, or caregiving.",
  },
  {
    q: "Can you keep my family updated?",
    a: "Yes. With the homeowner's permission, we send an authorized family member updates about visits, repairs, and projects at the home.",
  },
  {
    q: "Where do you work?",
    a: "Rye, New Castle, Portsmouth, and North Hampton, New Hampshire. The small service area is deliberate, so we can respond quickly.",
  },
] as const;

export const townPages = [
  {
    slug: "rye-nh",
    town: "Rye",
    intro: "Rye homes face salt air, nor'easters, and long stretches empty between seasons. We keep an eye on the house, plan the maintenance, and manage the professionals so nothing waits for your next trip.",
    local: "Coastal homes along Ocean Boulevard and in Rye Beach take the brunt of winter storms. After major weather we check the property and send you photos, so you know the house is fine before you start to worry.",
  },
  {
    slug: "new-castle-nh",
    town: "New Castle",
    intro: "New Castle's island homes are beautiful and exposed. Seacoast Home Partners gives owners one local contact who knows the house, its systems, and the people who service it.",
    local: "Getting a contractor out to the island at the right time takes coordination. We schedule the visit, meet the professional at the door, and confirm the work is done.",
  },
  {
    slug: "portsmouth-nh",
    town: "Portsmouth",
    intro: "From historic South End homes to newer builds, Portsmouth properties need steady attention. We handle the maintenance calendar, the vendors, and the follow through, whether you live here year round or not.",
    local: "Older Portsmouth homes often need specialized trades. We keep the records, track what was done and when, and line up qualified professionals for the work.",
  },
  {
    slug: "north-hampton-nh",
    town: "North Hampton",
    intro: "North Hampton homeowners and their families use Seacoast Home Partners to keep larger properties maintained without managing every detail themselves.",
    local: "Larger lots mean more systems to watch: wells, septic, generators, and long driveways in winter. Our monthly visit covers all of it, and anything that needs a professional goes on your calendar.",
  },
] as const;
