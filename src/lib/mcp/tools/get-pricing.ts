import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { BUNDLES, BUSINESS_INFO, INDIVIDUAL_PRICING, MONTHLY_PLANS } from "../data";

export default defineTool({
  name: "get_pricing",
  title: "Get pricing",
  description:
    "Get Royal Digital Elevation pricing in KES: individual service rates, bundle packages, monthly plans, bulk-bundle discounts and payment terms. Optionally filter to one service category.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe(
        'Optional service category to filter by, e.g. "Graphic Design", "Video Editing", "Social Media Marketing", "Copywriting", "Email Marketing", "SMS Marketing". Omit for everything.'
      ),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const filter = (obj: Record<string, unknown>) => {
      if (!category) return obj;
      const match = Object.keys(obj).find((k) =>
        k.toLowerCase().includes(category.toLowerCase())
      );
      return match ? { [match]: obj[match] } : {};
    };

    const pricing = {
      currency: "KES",
      individual: filter(INDIVIDUAL_PRICING),
      bundles: filter(BUNDLES),
      monthlyPlans: filter(MONTHLY_PLANS),
      bulkDiscounts: BUSINESS_INFO.bulkDiscounts,
      bulkDiscountNote: BUSINESS_INFO.bulkDiscountNote,
      paymentTerms: BUSINESS_INFO.paymentTerms,
      howToOrder:
        "Orders are placed via WhatsApp (+254 746 388 308) with a pre-filled message from the site.",
    };

    return {
      content: [{ type: "text", text: JSON.stringify(pricing, null, 2) }],
      structuredContent: pricing,
    };
  },
});
