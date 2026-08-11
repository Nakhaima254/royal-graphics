import { defineTool } from "@lovable.dev/mcp-js";
import { SERVICES } from "../data";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the digital design and marketing services offered by Royal Digital Elevation (Nairobi, Kenya), with summaries and site paths.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
