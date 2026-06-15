import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, Link as LinkIcon, AlertCircle } from "lucide-react";

interface PreviewData {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterCard: string;
  canonical: string;
}

const PRERENDER_TOKEN = "xn9crdnVZrWpm9sCxkML";

const getMeta = (doc: Document, selectors: string[]) => {
  for (const sel of selectors) {
    const el = doc.querySelector(sel) as HTMLMetaElement | HTMLLinkElement | null;
    if (el) {
      const val = (el as HTMLMetaElement).content || (el as HTMLLinkElement).href;
      if (val) return val;
    }
  }
  return "";
};

const SharePreviewPage = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<PreviewData | null>(null);
  const [source, setSource] = useState<"prerender" | "direct" | null>(null);

  const fetchPreview = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setData(null);
    setSource(null);

    let target = url.trim();
    if (!target) return;
    if (!/^https?:\/\//i.test(target)) target = "https://" + target;

    try {
      new URL(target);
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    try {
      // Try Prerender.io first (what crawlers actually see)
      let html = "";
      let used: "prerender" | "direct" = "prerender";
      try {
        const pre = await fetch(
          `https://service.prerender.io/${target}`,
          { headers: { "X-Prerender-Token": PRERENDER_TOKEN } }
        );
        if (pre.ok) html = await pre.text();
        else throw new Error("prerender failed");
      } catch {
        // Fallback: direct fetch via CORS proxy (will only see static index.html for SPAs)
        used = "direct";
        const proxy = await fetch(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(target)}`
        );
        if (!proxy.ok) throw new Error("Could not fetch the URL.");
        html = await proxy.text();
      }

      const doc = new DOMParser().parseFromString(html, "text/html");

      const preview: PreviewData = {
        title:
          getMeta(doc, ['meta[property="og:title"]']) ||
          doc.querySelector("title")?.textContent ||
          "",
        description: getMeta(doc, [
          'meta[property="og:description"]',
          'meta[name="description"]',
        ]),
        image: getMeta(doc, [
          'meta[property="og:image"]',
          'meta[property="og:image:url"]',
        ]),
        url: getMeta(doc, ['meta[property="og:url"]']) || target,
        siteName: getMeta(doc, ['meta[property="og:site_name"]']),
        twitterTitle: getMeta(doc, ['meta[name="twitter:title"]']),
        twitterDescription: getMeta(doc, ['meta[name="twitter:description"]']),
        twitterImage: getMeta(doc, ['meta[name="twitter:image"]']),
        twitterCard: getMeta(doc, ['meta[name="twitter:card"]']),
        canonical: getMeta(doc, ['link[rel="canonical"]']),
      };

      setData(preview);
      setSource(used);
    } catch (err: any) {
      setError(err.message || "Failed to fetch preview.");
    } finally {
      setLoading(false);
    }
  };

  const quickLinks = [
    "https://royal-graphics.lovable.app/",
    "https://royal-graphics.lovable.app/blogs",
    "https://royal-graphics.lovable.app/services/graphic-design",
  ];

  return (
    <div className="min-h-screen pt-[5.5rem] pb-16 px-4">
      <Helmet>
        <title>Share Preview — Royal Graphics</title>
        <meta name="description" content="Preview the OG title, description, and featured image that crawlers see for any page." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Share <span className="text-primary">Preview</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Enter any blog or service URL to see the exact title, snippet, and
            featured image social platforms will show when the link is shared.
          </p>
        </header>

        <Card className="p-6 mb-6">
          <form onSubmit={fetchPreview} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://royal-graphics.lovable.app/blogs/..."
                className="pl-9"
                disabled={loading}
              />
            </div>
            <Button type="submit" disabled={loading || !url.trim()}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Fetching…
                </>
              ) : (
                "Preview"
              )}
            </Button>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs text-muted-foreground self-center">Try:</span>
            {quickLinks.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setUrl(q)}
                className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/70 text-foreground"
              >
                {q.replace("https://royal-graphics.lovable.app", "") || "/"}
              </button>
            ))}
          </div>
        </Card>

        {error && (
          <Card className="p-4 mb-6 border-destructive/50 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Couldn't fetch preview</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          </Card>
        )}

        {data && (
          <div className="space-y-6">
            {source && (
              <p className="text-xs text-muted-foreground text-center">
                Source: {source === "prerender" ? "Prerender.io (what crawlers receive)" : "Direct fetch (static HTML only — JS not executed)"}
              </p>
            )}

            {/* Facebook / LinkedIn / WhatsApp style */}
            <div>
              <h2 className="text-sm font-semibold text-white/70 mb-2 uppercase tracking-wide">
                Facebook / LinkedIn / WhatsApp
              </h2>
              <Card className="overflow-hidden">
                {data.image ? (
                  <div className="aspect-[1.91/1] bg-muted overflow-hidden">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                ) : (
                  <div className="aspect-[1.91/1] bg-muted flex items-center justify-center text-muted-foreground text-sm">
                    No og:image found
                  </div>
                )}
                <div className="p-4 bg-card">
                  <p className="text-xs uppercase text-muted-foreground truncate">
                    {(() => {
                      try { return new URL(data.url).hostname; } catch { return data.url; }
                    })()}
                  </p>
                  <p className="font-semibold text-foreground line-clamp-2 mt-1">
                    {data.title || "(no title)"}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {data.description || "(no description)"}
                  </p>
                </div>
              </Card>
            </div>

            {/* Twitter / X style */}
            <div>
              <h2 className="text-sm font-semibold text-white/70 mb-2 uppercase tracking-wide">
                Twitter / X ({data.twitterCard || "summary"})
              </h2>
              <Card className="overflow-hidden rounded-2xl">
                {(data.twitterImage || data.image) && (
                  <div className="aspect-[1.91/1] bg-muted overflow-hidden">
                    <img
                      src={data.twitterImage || data.image}
                      alt={data.twitterTitle || data.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="p-4 bg-card">
                  <p className="font-semibold text-foreground line-clamp-2">
                    {data.twitterTitle || data.title || "(no title)"}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {data.twitterDescription || data.description || "(no description)"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 truncate">
                    {(() => {
                      try { return new URL(data.url).hostname; } catch { return data.url; }
                    })()}
                  </p>
                </div>
              </Card>
            </div>

            {/* Raw tags */}
            <div>
              <h2 className="text-sm font-semibold text-white/70 mb-2 uppercase tracking-wide">
                Raw Tags
              </h2>
              <Card className="p-4">
                <dl className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-4 gap-y-2 text-sm">
                  {[
                    ["og:title", data.title],
                    ["og:description", data.description],
                    ["og:image", data.image],
                    ["og:url", data.url],
                    ["og:site_name", data.siteName],
                    ["canonical", data.canonical],
                    ["twitter:card", data.twitterCard],
                    ["twitter:title", data.twitterTitle],
                    ["twitter:description", data.twitterDescription],
                    ["twitter:image", data.twitterImage],
                  ].map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="font-mono text-xs text-muted-foreground">{k}</dt>
                      <dd className="text-foreground break-all">
                        {v || <span className="text-muted-foreground italic">(empty)</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <a
                href={`https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(data.url)}`}
                target="_blank" rel="noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Open in Facebook Debugger ↗
              </a>
              <a
                href={`https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(data.url)}`}
                target="_blank" rel="noreferrer"
                className="text-sm text-primary hover:underline"
              >
                LinkedIn Post Inspector ↗
              </a>
              <a
                href={`https://cards-dev.twitter.com/validator?url=${encodeURIComponent(data.url)}`}
                target="_blank" rel="noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Twitter Validator ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SharePreviewPage;
