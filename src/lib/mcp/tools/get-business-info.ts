import { defineTool } from "@lovable.dev/mcp-js";
import { BUSINESS_INFO } from "../data";

export default defineTool({
  name: "get_business_info",
  title: "Get business info",
  description:
    "Get Royal Digital Elevation's public business details: contact email, phone, WhatsApp, location, social media links, and payment terms.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(BUSINESS_INFO, null, 2) }],
    structuredContent: { business: BUSINESS_INFO },
  }),
});
