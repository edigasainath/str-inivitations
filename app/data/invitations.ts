export interface Invitation {
  slug: string
  url: string
  title: string
  category: string
  price: string
  tag: string
  desc: string
  colorTheme: string
  deliveryTime: string
  features: string[]
  rating: number
  reviewsCount: number
}

export const INVITATIONS: Invitation[] = [
  {
    slug: "rushikesh-prajakta",
    url: "https://rushikesh-prajakta.invitationmedia.in",
    title: "Rushikesh & Prajakta",
    category: "Wedding Website",
    price: "₹2,999/-",
    tag: "Royal Gold",
    desc: "Luxury royal wedding invitation featuring custom music backdrop, countdown timer & guest photo gallery.",
    colorTheme: "Regal Gold & Cream",
    deliveryTime: "Instant 24-hour setup",
    rating: 5.0,
    reviewsCount: 38,
    features: [
      "Royal Mandap & Ceremony Timelines",
      "Interactive Mobile RSVP Form",
      "One-Touch Google Maps Navigation",
      "Couples Music Player with Autoplay",
      "Live Days-Hours-Mins Countdown",
      "High-Resolution Photo Gallery",
      "Direct WhatsApp RSVP Management"
    ]
  },
  {
    slug: "deeksha-chetan",
    url: "https://deeksha-chetan.invitationmedia.in",
    title: "Deeksha & Chetan",
    category: "Wedding Website",
    price: "₹2,999/-",
    tag: "Elegant Pastel",
    desc: "Pastel floral aesthetic with interactive ceremony timeline, location maps & RSVP management.",
    colorTheme: "Pastel Rose & Sage Green",
    deliveryTime: "Instant 24-hour setup",
    rating: 4.9,
    reviewsCount: 29,
    features: [
      "Blooming Floral Entry Animation",
      "Complete Multi-Day Itinerary",
      "Interactive RSVP & Dietary Notes",
      "Navigation Pins for All Venues",
      "Romantic Background Soundscape",
      "Photo Memories Slider",
      "Mobile-Optimized Touch Gestures"
    ]
  },
  {
    slug: "ananya-vartika",
    url: "https://ananya-vartika.invitationmedia.in",
    title: "Ananya & Vartika",
    category: "Wedding Website",
    price: "₹2,999/-",
    tag: "Floral Gold",
    desc: "Grand wedding theme with golden borders, music playback, event schedule & animated envelope opening.",
    colorTheme: "Gilded Gold & Ivory",
    deliveryTime: "Instant 24-hour setup",
    rating: 4.9,
    reviewsCount: 34,
    features: [
      "Custom 3D Envelope Wax Seal Opening",
      "Multi-Event Schedule (Haldi, Mehendi, Sangeet, Wedding)",
      "Smart RSVP with Guest Counter",
      "Interactive Map with Venue Directions",
      "Curated Couple Song Playback",
      "Personalized Greetings for Guests",
      "Fast Loading on All Mobile Networks"
    ]
  },
  {
    slug: "harshjot-karanpreet",
    url: "https://harshjotkaur-karanpreetsingh.invitationmedia.in",
    title: "Harshjot Kaur & Karanpreet Singh",
    category: "Wedding Website",
    price: "₹2,999/-",
    tag: "Sikh Royal",
    desc: "Regal Anand Karaj ceremony theme with traditional motifs, photo gallery & instant RSVP.",
    colorTheme: "Imperial Emerald & Gold",
    deliveryTime: "Instant 24-hour setup",
    rating: 5.0,
    reviewsCount: 51,
    features: [
      "Traditional Anand Karaj Visual Motifs",
      "Gurdwara Navigation Pin & Timing Details",
      "Interactive Guest Attendance Form",
      "Shabad / Music Backdrop Integration",
      "Family & Blessing Section",
      "Full Ceremony Schedule",
      "Instant WhatsApp Share Card"
    ]
  },
  {
    slug: "jinal-hitarth",
    url: "https://jinal-hitarth.invitationmedia.in",
    title: "Jinal & Hitarth",
    category: "Wedding Website",
    price: "₹2,999/-",
    tag: "Traditional Heritage",
    desc: "Rich cultural wedding website with custom event schedule, venue location pins & guest greetings.",
    colorTheme: "Heritage Crimson & Marigold",
    deliveryTime: "Instant 24-hour setup",
    rating: 4.8,
    reviewsCount: 27,
    features: [
      "Ornate Heritage Border Patterns",
      "Interactive Mobile RSVP Form",
      "Venue Map Directions with Transit Info",
      "Custom Couple Audio Playback",
      "Milestone Journey Timeline",
      "Ceremony Dress Code Details",
      "Real-Time Guest Attendance Tracking"
    ]
  },
  {
    slug: "swapnil-ritu",
    url: "https://swapnil-ritu.invitationmedia.in",
    title: "Swapnil & Ritu",
    category: "Wedding Website",
    price: "₹2,999/-",
    tag: "Velvet Luxury",
    desc: "Grand celebration website with dark velvet aesthetic, live countdown & music player.",
    colorTheme: "Midnight Velvet & Champagne Gold",
    deliveryTime: "Instant 24-hour setup",
    rating: 4.9,
    reviewsCount: 33,
    features: [
      "Ultra-Luxe Dark Velvet UI",
      "Smooth Animated Envelope Opening",
      "Digital RSVP with Meal Preference",
      "Live Precision Countdown",
      "Ambient Romantic Audio Track",
      "Guest Wishes Wall",
      "Google Maps Navigation Integration"
    ]
  },
  {
    slug: "roopa-anoop",
    url: "https://roopa-anoop.invitationmedia.in",
    title: "Roopa & Anoop",
    category: "Wedding Website",
    price: "₹2,999/-",
    tag: "Modern Minimal",
    desc: "Sleek contemporary design with clean typography, interactive map pins & instant WhatsApp sharing.",
    colorTheme: "Warm Sand & Charcoal",
    deliveryTime: "Instant 24-hour setup",
    rating: 4.8,
    reviewsCount: 22,
    features: [
      "Editorial Clean Typography Layout",
      "Instant 1-Click RSVP via WhatsApp",
      "Interactive Venue Route Guidance",
      "Live Event Countdown Widget",
      "Couple Story Highlights",
      "Ceremony Timeline Breakdown",
      "Add to Calendar ICS Sync"
    ]
  },
  {
    slug: "bhushan-pragyansa",
    url: "https://bhushan-pragyansa.invitationmedia.in",
    title: "Bhushan & Pragyansa",
    category: "Wedding Website",
    price: "₹2,999/-",
    tag: "Classic Romance",
    desc: "Timeless romantic invitation featuring couple story timeline & interactive venue directions.",
    colorTheme: "Blush Pink & Vintage Gold",
    deliveryTime: "Instant 24-hour setup",
    rating: 5.0,
    reviewsCount: 46,
    features: [
      "Love Journey Milestone Timeline",
      "Interactive RSVP & Confirmation",
      "Google Maps Venue Coordinates",
      "Romantic Background Music Track",
      "Live Wedding Day Countdown",
      "Pre-Wedding Photo Gallery",
      "Downloadable Invitation PDF / Pass"
    ]
  },
  {
    slug: "saiyam-jenny",
    url: "https://saiyam-jenny.invitationmedia.in",
    title: "Saiyam & Jenny",
    category: "Wedding Website",
    price: "₹2,999/-",
    tag: "Bespoke Glamour",
    desc: "High-end wedding experience with smooth animations, custom music & live guest book.",
    colorTheme: "Champagne Sparkle & Slate",
    deliveryTime: "Instant 24-hour setup",
    rating: 4.9,
    reviewsCount: 39,
    features: [
      "Bespoke Micro-Animations & Glows",
      "Live Guest Book & Blessings",
      "Interactive Mobile RSVP Form",
      "Venue Maps with Parking Notes",
      "Audio Player with Custom Playlist",
      "Countdown Clock with Live Ticker",
      "Dress Code & Event FAQs"
    ]
  },
  {
    slug: "saheba-apramit",
    url: "https://sahebaapramit-savethedate.invitationmedia.in/",
    title: "Saheba & Apramit",
    category: "Save the Date",
    price: "₹1,999/-",
    tag: "Quick Announcement",
    desc: "Chic and modern Save the Date announcement with countdown timer & add-to-calendar feature.",
    colorTheme: "Minimal Ivory & Espresso",
    deliveryTime: "Instant 12-hour setup",
    rating: 4.9,
    reviewsCount: 19,
    features: [
      "Save the Date Countdown Timer",
      "1-Click Google Calendar & Apple Calendar Sync",
      "Instant WhatsApp Broadcast Card",
      "Couple Milestone Portrait",
      "City & Destination Preview",
      "Quick RSVP Intent Form"
    ]
  },
  {
    slug: "shreya-shubham",
    url: "https://shreyashubham-savethedate.invitation-media.in/",
    title: "Shreya & Shubham",
    category: "Save the Date",
    price: "₹1,999/-",
    tag: "Modern Card",
    desc: "Beautiful digital Save the Date card with animated floral accents & instant WhatsApp sharing.",
    colorTheme: "Soft Coral & Peach",
    deliveryTime: "Instant 12-hour setup",
    rating: 4.8,
    reviewsCount: 25,
    features: [
      "Animated Botanical Flourishes",
      "Live Countdown to Wedding Date",
      "Digital Save-the-Date Pass",
      "Direct WhatsApp Sharing Link",
      "Destination Information",
      "Calendar Reminder Button"
    ]
  },
  {
    slug: "viraj-vithika",
    url: "https://virajvithika-savethedate.invitation-media.in",
    title: "Viraj & Vithika",
    category: "Save the Date",
    price: "₹1,999/-",
    tag: "Minimalist",
    desc: "Clean, elegant Save the Date website featuring couple portraits & venue date reminder.",
    colorTheme: "Monochrome Black & Silver",
    deliveryTime: "Instant 12-hour setup",
    rating: 4.9,
    reviewsCount: 18,
    features: [
      "Contemporary Minimal Typography",
      "Interactive Date Countdown",
      "Calendar Integration (Google/Apple)",
      "High-Resolution Photo Reel",
      "Direct WhatsApp Share Buttons"
    ]
  },
  {
    slug: "manav-drashti",
    url: "https://manav-drashti.invitationmedia.in/",
    title: "Manav & Drashti",
    category: "Engagement Website",
    price: "₹2,499/-",
    tag: "Rings Ceremony",
    desc: "Stylish engagement invitation featuring ring exchange countdown, venue map & RSVP.",
    colorTheme: "Emerald Green & Gold",
    deliveryTime: "Instant 24-hour setup",
    rating: 4.9,
    reviewsCount: 31,
    features: [
      "Ring Exchange Special Animation",
      "Interactive Guest RSVP Form",
      "Google Maps Venue Directions",
      "Engagement Ceremony Timeline",
      "Celebration Music Player",
      "Couple Gallery Showcase"
    ]
  },
  {
    slug: "rishav-ranjeeta",
    url: "https://rishav-ranjeeta.invitationmedia.in/",
    title: "Rishav & Ranjeeta",
    category: "Engagement Website",
    price: "₹2,499/-",
    tag: "Chic Celebration",
    desc: "Modern engagement website with elegant gold accents, background music & event details.",
    colorTheme: "Warm Amber & Cream",
    deliveryTime: "Instant 24-hour setup",
    rating: 5.0,
    reviewsCount: 28,
    features: [
      "Golden Shimmer Entry Effect",
      "Event Venue Navigation & Timings",
      "Interactive Mobile RSVP Form",
      "Engagement Music Backdrop",
      "Couple Journey Timeline",
      "Family & Blessings Note"
    ]
  },
  {
    slug: "abhedya-anku",
    url: "http://abhedya-anku.invitationmedia.in/",
    title: "Abhedya & Anku",
    category: "Engagement Website",
    price: "₹2,499/-",
    tag: "Floral Sparkle",
    desc: "Vibrant floral engagement invite with interactive itinerary & venue navigation.",
    colorTheme: "Ruby Rose & Champagne",
    deliveryTime: "Instant 24-hour setup",
    rating: 4.8,
    reviewsCount: 20,
    features: [
      "Floral Petal Fall Animation",
      "Interactive RSVP & Attendance",
      "Complete Event Program Itinerary",
      "Navigation Links for Google Maps",
      "Couple Photo Collage",
      "WhatsApp Invite Sharing"
    ]
  },
  {
    slug: "rumit-mahek",
    url: "https://rumit-mahek.invitationmedia.in/",
    title: "Rumit & Mahek",
    category: "Engagement Website",
    price: "₹2,499/-",
    tag: "Royal Engagement",
    desc: "Grand engagement celebration theme with photo gallery & guest RSVP form.",
    colorTheme: "Sapphire Blue & Silver",
    deliveryTime: "Instant 24-hour setup",
    rating: 4.9,
    reviewsCount: 37,
    features: [
      "Virtual Envelope Opening Effect",
      "Real-Time RSVP Tracking",
      "Interactive Venue Map Pins",
      "Custom Couple Audio Backdrop",
      "Countdown Clock Widget",
      "Memories Photo Carousel"
    ]
  },
  {
    slug: "gayathri-baranitharan",
    url: "https://gaythribaranitharan.invitationmedia.in/",
    title: "Gayathri & Baranitharan",
    category: "Engagement Website",
    price: "₹2,499/-",
    tag: "Traditional Ring",
    desc: "Cultural engagement website with music, traditional motifs & event timeline.",
    colorTheme: "South Indian Temple Gold & Red",
    deliveryTime: "Instant 24-hour setup",
    rating: 5.0,
    reviewsCount: 41,
    features: [
      "Traditional South Indian Design Motifs",
      "Muhurtham Timing & Ceremony Schedule",
      "Google Maps Route Guide",
      "Interactive RSVP Form",
      "Nadaswaram & Music Integration",
      "Family Blessings Section"
    ]
  },
  {
    slug: "krishna-baby-shower",
    url: "https://krishnababyshower-sajode.invitationmedia.in/",
    title: "Krishna Baby Shower",
    category: "Baby Shower Website",
    price: "₹1,999/-",
    tag: "Joyful Arrival",
    desc: "Adorable baby shower invitation with soft pastel illustrations, venue map & RSVP.",
    colorTheme: "Sky Blue & Cloud White",
    deliveryTime: "Instant 12-hour setup",
    rating: 5.0,
    reviewsCount: 35,
    features: [
      "Cute Animated Baby Motifs",
      "Interactive RSVP with Guest Notes",
      "Event Venue Directions",
      "Lullaby / Sweet Music Background",
      "Mom & Dad-to-be Highlights",
      "Calendar Reminder Sync"
    ]
  },
  {
    slug: "nidhi-baby-shower",
    url: "https://nidhibabyshower.invitation-media.in",
    title: "Nidhi Baby Shower",
    category: "Baby Shower Website",
    price: "₹1,999/-",
    tag: "Pastel Celebration",
    desc: "Cute digital baby shower invite with cheerful animations, countdown & music player.",
    colorTheme: "Blush Pink & Mint",
    deliveryTime: "Instant 12-hour setup",
    rating: 4.9,
    reviewsCount: 24,
    features: [
      "Cheerful Pastels & Balloon Animations",
      "Celebration Date Countdown",
      "Guest Attendance & Dietary Notes",
      "One-Touch Location Directions",
      "Sweet Welcome Audio",
      "WhatsApp Invite Broadcast Link"
    ]
  },
  {
    slug: "simoni-rushabh",
    url: "https://simoni-rushabh.invitationmedia.in",
    title: "Simoni & Rushabh",
    category: "Baby Shower Website",
    price: "₹1,999/-",
    tag: "Cute Theme",
    desc: "Sweet Godh Bharai / Baby Shower invite with photo gallery & guest blessings form.",
    colorTheme: "Soft Sunshine Yellow & Ivory",
    deliveryTime: "Instant 12-hour setup",
    rating: 4.9,
    reviewsCount: 29,
    features: [
      "Traditional Godh Bharai Ceremony Details",
      "Interactive Blessings & Wishes Wall",
      "Guest RSVP Tracker",
      "Google Maps Venue Coordinates",
      "Maternity Photo Showcase",
      "Direct WhatsApp Sharing"
    ]
  },
  {
    slug: "sinita-baby-shower",
    url: "https://sinitababyshower.invitationmedia.in/",
    title: "Sinita Baby Shower",
    category: "Baby Shower Website",
    price: "₹1,999/-",
    tag: "Warm Blessings",
    desc: "Charming baby shower celebration website with instant WhatsApp location directions.",
    colorTheme: "Lavender & Warm Beige",
    deliveryTime: "Instant 12-hour setup",
    rating: 4.8,
    reviewsCount: 21,
    features: [
      "Playful Animations & Confetti",
      "Celebration Program Timings",
      "Instant WhatsApp Directions Link",
      "Guest Confirmation Form",
      "Gentle Melody Soundscape",
      "Add to Calendar Reminder"
    ]
  }
]

export const CATEGORIES = [
  "All",
  "Wedding Website",
  "Save the Date",
  "Engagement Website",
  "Baby Shower Website"
]

export function getInvitationBySlug(slug: string): Invitation | undefined {
  return INVITATIONS.find((item) => item.slug === slug)
}

export function getAllSlugs(): string[] {
  return INVITATIONS.map((item) => item.slug)
}
