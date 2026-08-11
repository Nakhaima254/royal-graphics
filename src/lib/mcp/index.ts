import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getPricingTool from "./tools/get-pricing";
import listBlogPostsTool from "./tools/list-blog-posts";
import getBlogPostTool from "./tools/get-blog-post";
import getBusinessInfoTool from "./tools/get-business-info";

export default defineMcp({
  name: "royal-digital-elevation",
  title: "Royal Digital Elevation",
  version: "0.1.0",
  instructions:
    "Tools for Royal Digital Elevation, a digital design and marketing studio in Nairobi, Kenya. " +
    "Use list_services to see offerings, get_pricing for KES prices, bundles, bulk discounts and the 60/40 payment terms, " +
    "list_blog_posts and get_blog_post for blog content, and get_business_info for contact details. " +
    "All tools serve public marketing content; no authentication is required.",
  tools: [
    listServicesTool,
    getPricingTool,
    listBlogPostsTool,
    getBlogPostTool,
    getBusinessInfoTool,
  ],
});
