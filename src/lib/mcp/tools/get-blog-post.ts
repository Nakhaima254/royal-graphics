import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPostsData } from "../blog-data";

export default defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description:
    "Get the full content of a single Royal Digital Elevation blog post by its slug (from list_blog_posts). Returns title, metadata, featured image and full HTML content.",
  inputSchema: {
    slug: z.string().trim().min(1).describe("The post slug, e.g. \"10-essential-seo-tips-for-2025\"."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const post = blogPostsData.find((p) => p.slug === slug);
    if (!post) {
      throw new ToolError(
        `No blog post found with slug "${slug}". Call list_blog_posts to see available slugs.`
      );
    }

    const result = {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      image: post.image,
      author: post.author,
      url: `https://royalgraphics.co.ke/blogs/${post.slug}`,
      contentHtml: post.content,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
