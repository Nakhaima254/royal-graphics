// Public business data served by the MCP server. All of this is intentionally
// public marketing content that also appears on the website.

export const BUSINESS_INFO = {
  name: "Royal Digital Elevation",
  site: "https://royalgraphics.co.ke",
  email: "info@royalgraphics.co.ke",
  phone: "+254 746 388 308",
  whatsapp: "+254746388308",
  whatsappNote:
    "WhatsApp is the primary contact method. All pricing buttons and forms on the site redirect to WhatsApp with a pre-filled message.",
  location: "Nairobi, Kenya",
  founded: 2023,
  teamSize: 5,
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100090789338821",
    instagram: "https://www.instagram.com/royalgraphics254",
    tiktok: "https://www.tiktok.com/@royal.graphics.so",
  },
  paymentTerms:
    "Strict 60% upfront payment (60/40 split) for all designs and services. The 60% secures the project slot; the remaining 40% is due on final approval before file handover.",
  bulkDiscounts: [
    { minServices: 6, discount: "15%" },
    { minServices: 4, discount: "10%" },
    { minServices: 2, discount: "5%" },
  ],
  bulkDiscountNote:
    "Tiered discount applies when bundling multiple individual services in one order: 5% off 2+ services, 10% off 4+, 15% off 6+.",
} as const;

export interface Service {
  name: string;
  slug: string;
  path: string;
  summary: string;
}

export const SERVICES: Service[] = [
  {
    name: "Graphic Design",
    slug: "graphic-design",
    path: "/services/graphic-design",
    summary:
      "Logos, business cards, flyers, banners, brochures, product labels and full brand identity assets, delivered print-ready.",
  },
  {
    name: "Social Media Marketing",
    slug: "social-media-marketing",
    path: "/services/social-media-marketing",
    summary:
      "Profile setup, content calendars, post design and growth strategies for Instagram, Facebook and TikTok.",
  },
  {
    name: "Copywriting",
    slug: "copywriting",
    path: "/services/copywriting",
    summary:
      "SEO blog posts, website copy, product descriptions, ad copy and email sequences that convert.",
  },
  {
    name: "Video Editing",
    slug: "video-editing",
    path: "/services/video-editing",
    summary:
      "Basic to cinematic video editing, reels, intros/outros, color grading, subtitles and thumbnails.",
  },
  {
    name: "Email Marketing",
    slug: "email-marketing",
    path: "/services/email-marketing",
    summary:
      "Responsive templates, campaign setup, automation sequences, segmentation and analytics.",
  },
  {
    name: "SMS Marketing",
    slug: "sms-marketing",
    path: "/services/sms-marketing",
    summary:
      "Bulk SMS campaigns, sender ID registration, scheduling and delivery analytics for the Kenyan market.",
  },
  {
    name: "Web Development",
    slug: "web-development",
    path: "/services/web-development",
    summary:
      "Business websites, landing pages and e-commerce builds with modern, mobile-first design.",
  },
  {
    name: "Training",
    slug: "training",
    path: "/services/training",
    summary:
      "Practical design and digital marketing training, including a full graphic design course.",
  },
];

export interface PricedItem {
  name: string;
  priceKES: string;
  description: string;
}

export const INDIVIDUAL_PRICING: Record<string, PricedItem[]> = {
  "Graphic Design": [
    { name: "Logo Design", priceKES: "2,000", description: "Unique logo with 2-3 concepts, vector files (AI, EPS, PNG, JPG)" },
    { name: "Business Card", priceKES: "800", description: "Double-sided design, print-ready files, multiple formats" },
    { name: "Letterhead", priceKES: "700", description: "Professional letterhead design with your branding, editable template" },
    { name: "Brochure", priceKES: "650/page", description: "Bi-fold or tri-fold design, print-ready PDF, source files" },
    { name: "Banners", priceKES: "1,000", description: "Web or print banners, custom sizes, high-resolution output" },
    { name: "Posters", priceKES: "400", description: "Eye-catching poster design, any size, print-ready files" },
    { name: "Flyers", priceKES: "800", description: "Single or double-sided, A4/A5 size, print-ready PDF" },
    { name: "Invoice/Receipt", priceKES: "650", description: "Professional invoice template, editable Word/Excel format" },
    { name: "Email Signature", priceKES: "300", description: "HTML email signature, works with Gmail, Outlook & more" },
    { name: "Catalog/Menu", priceKES: "500/page", description: "Multi-page catalog or menu design, print-ready files" },
    { name: "Product Label", priceKES: "500", description: "Custom product label design, die-cut ready, all formats" },
    { name: "Infographics", priceKES: "600", description: "Data visualization, custom icons, shareable formats" },
    { name: "3D Mockups", priceKES: "500", description: "Realistic product mockups, multiple angles, high-res images" },
    { name: "Calendar", priceKES: "600", description: "Custom calendar design, wall or desk format, print-ready" },
  ],
  "Video Editing": [
    { name: "Basic Edit (3 min)", priceKES: "3,000", description: "Basic cuts, transitions, background music, text overlays" },
    { name: "Standard Edit (10 min)", priceKES: "8,000", description: "Advanced editing, motion graphics, sound design" },
    { name: "Premium Edit", priceKES: "20,000", description: "Cinematic production, custom animations, professional mix" },
    { name: "Thumbnail Design", priceKES: "500", description: "Eye-catching YouTube/video thumbnails" },
    { name: "Intro/Outro", priceKES: "2,500", description: "Custom animated intro or outro for your channel" },
    { name: "Color Grading", priceKES: "1,500", description: "Professional color correction and grading" },
    { name: "Subtitles/Captions", priceKES: "1,000", description: "Accurate subtitles with timing and styling" },
    { name: "Short-Form Reel", priceKES: "2,000", description: "TikTok/Reels/Shorts optimized vertical video" },
  ],
  "Social Media Marketing": [
    { name: "Post Design (Single)", priceKES: "300", description: "Custom social media post graphic" },
    { name: "Post Design (10 Pack)", priceKES: "2,500", description: "10 custom social media graphics" },
    { name: "Stories Template", priceKES: "500", description: "Custom Instagram/Facebook story template" },
    { name: "Profile Setup", priceKES: "1,500", description: "Complete profile optimization and branding" },
    { name: "Content Calendar", priceKES: "2,000", description: "30-day content strategy and calendar" },
    { name: "Hashtag Research", priceKES: "800", description: "Industry-specific hashtag strategy" },
    { name: "Competitor Analysis", priceKES: "3,000", description: "In-depth competitor social media analysis" },
    { name: "Engagement Strategy", priceKES: "2,500", description: "Custom engagement and growth strategy" },
  ],
  Copywriting: [
    { name: "Blog Post (500 words)", priceKES: "2,500", description: "SEO-optimized blog article" },
    { name: "Blog Post (1000 words)", priceKES: "4,000", description: "In-depth SEO-optimized article" },
    { name: "Website Copy (per page)", priceKES: "3,000", description: "Compelling website page content" },
    { name: "Product Description", priceKES: "500", description: "Persuasive product descriptions" },
    { name: "Email Sequence (3 emails)", priceKES: "3,500", description: "Conversion-focused email series" },
    { name: "Ad Copy (5 variations)", priceKES: "2,000", description: "High-converting ad copy set" },
    { name: "Social Media Captions (10)", priceKES: "1,500", description: "Engaging social media captions" },
    { name: "Tagline/Slogan", priceKES: "1,000", description: "Memorable brand tagline creation" },
  ],
  "Email Marketing": [
    { name: "Email Template Design", priceKES: "2,000", description: "Custom responsive email template" },
    { name: "Campaign Setup", priceKES: "3,000", description: "Full email campaign configuration" },
    { name: "Automation Sequence", priceKES: "5,000", description: "Automated drip campaign setup" },
    { name: "List Segmentation", priceKES: "2,500", description: "Strategic subscriber segmentation" },
    { name: "A/B Testing Setup", priceKES: "1,500", description: "Split testing configuration" },
    { name: "Newsletter Design", priceKES: "1,800", description: "Branded newsletter template" },
    { name: "Cleanup & Optimization", priceKES: "2,000", description: "List cleaning and optimization" },
    { name: "Analytics Report", priceKES: "1,000", description: "Detailed campaign performance report" },
  ],
  "SMS Marketing": [
    { name: "Campaign Setup", priceKES: "1,500", description: "SMS campaign configuration" },
    { name: "500 SMS Credits", priceKES: "3,000", description: "Bulk SMS message credits" },
    { name: "2,500 SMS Credits", priceKES: "12,000", description: "Business SMS package" },
    { name: "Custom Sender ID", priceKES: "2,000", description: "Branded sender ID registration" },
    { name: "Contact Import", priceKES: "1,000", description: "Contact list setup and import" },
    { name: "Scheduled Campaigns", priceKES: "1,500", description: "Advanced scheduling setup" },
    { name: "Analytics Dashboard", priceKES: "2,000", description: "Custom analytics and reporting" },
  ],
};

export interface Bundle {
  name: string;
  bundlePriceKES: string;
  originalPriceKES: string;
}

export const BUNDLES: Record<string, Bundle[]> = {
  "Graphic Design": [
    { name: "Starter Brand Package", bundlePriceKES: "2,500", originalPriceKES: "2,800" },
    { name: "Business Essentials Package", bundlePriceKES: "3,200", originalPriceKES: "3,800" },
    { name: "Ultimate Brand Package", bundlePriceKES: "4,200", originalPriceKES: "5,250" },
  ],
  "Video Editing": [
    { name: "Content Creator Starter", bundlePriceKES: "4,500", originalPriceKES: "5,500" },
    { name: "Social Media Pro", bundlePriceKES: "6,000", originalPriceKES: "7,500" },
    { name: "Professional Video Suite", bundlePriceKES: "22,000", originalPriceKES: "28,000" },
  ],
  "Social Media Marketing": [
    { name: "Social Starter", bundlePriceKES: "3,500", originalPriceKES: "4,300" },
    { name: "Growth Accelerator", bundlePriceKES: "6,800", originalPriceKES: "8,500" },
    { name: "Enterprise Social Suite", bundlePriceKES: "10,500", originalPriceKES: "13,300" },
  ],
};

export interface Plan {
  name: string;
  priceKES: string;
  description: string;
}

export const MONTHLY_PLANS: Record<string, Plan[]> = {
  "Social Media Marketing": [
    { name: "Starter", priceKES: "10,000", description: "Get started with social media" },
    { name: "Growth", priceKES: "25,000", description: "Accelerate your growth" },
    { name: "Enterprise", priceKES: "50,000", description: "Full social media management" },
  ],
  "Video Editing": [
    { name: "Basic", priceKES: "3,000", description: "Simple edits (up to 3 min)" },
    { name: "Standard", priceKES: "8,000", description: "Professional edits (up to 10 min)" },
    { name: "Premium", priceKES: "20,000", description: "Cinematic production" },
  ],
  Copywriting: [
    { name: "Basic", priceKES: "2,500", description: "Website & blog content" },
    { name: "Standard", priceKES: "7,500", description: "Marketing copy package" },
    { name: "Premium", priceKES: "25,000", description: "Ongoing content creation" },
  ],
  "Email Marketing": [
    { name: "Starter", priceKES: "8,000", description: "Basic email campaigns" },
    { name: "Professional", priceKES: "18,000", description: "Advanced email marketing" },
    { name: "Enterprise", priceKES: "40,000", description: "Full email marketing suite" },
  ],
  "SMS Marketing": [
    { name: "Basic", priceKES: "3,000", description: "Small campaigns" },
    { name: "Business", priceKES: "12,000", description: "Regular campaigns" },
    { name: "Enterprise", priceKES: "45,000", description: "High-volume campaigns" },
  ],
};
