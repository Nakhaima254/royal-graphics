import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPostsData } from "../blog-data";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description:
    "List blog posts from Royal Digital Elevation (SEO, Design, Social Media and Marketing topics) with title, excerpt, category, date and featured image. Optionally filter by category.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe('Optional category filter, e.g. "SEO", "Design", "Social Media", "Marketing". Omit for all posts.'),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const posts = blogPostsData
      .filter(
        (p) =>
          !category || p.category.toLowerCase().includes(category.toLowerCase())
      )
      .map(({ slug, title, excerpt, category: cat, date, readTime, image, author }) => ({
        slug,
        title,
        excerpt,
        category: cat,
        date,
        readTime,
        image,
        author: author.name,
        url: `https://royalgraphics.co.ke/blogs/${slug}`,
      }));

    return {
      content: [{ type: "text", text: JSON.stringify(posts, null, 2) }],
      structuredContent: { count: posts.length, posts },
    };
  },
});
