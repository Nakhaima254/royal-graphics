import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon, User, List } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogBySlug, getRelatedPosts, blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug || "") || blogPosts[0];
  const relatedPosts = getRelatedPosts(slug || "");
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showToc, setShowToc] = useState(false);

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  // Extract headings from content for table of contents
  const tableOfContents = useMemo<TocItem[]>(() => {
    const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/gi;
    const headings: TocItem[] = [];
    let match;
    
    while ((match = headingRegex.exec(post.content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].replace(/<[^>]*>/g, '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ id, text, level });
    }
    
    return headings;
  }, [post.content]);

  // Add IDs to headings in content
  const contentWithIds = useMemo(() => {
    let content = post.content;
    tableOfContents.forEach(({ id, text }) => {
      const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      content = content.replace(
        new RegExp(`(<h[2-3][^>]*>)(${escapedText})(</h[2-3]>)`, 'i'),
        `$1<span id="${id}">$2</span>$3`
      );
    });
    return content;
  }, [post.content, tableOfContents]);

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, progress)));

      // Update active section
      const headingElements = tableOfContents.map(({ id }) => document.getElementById(id));
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setShowToc(false);
  };

  return (
    <div className="pt-16">
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.image || "/images/og-default.png"}
        url={`/blogs/${slug}`}
        type="article"
      />
      <div className="fixed top-16 left-0 right-0 h-1 bg-muted z-50">
        <motion.div 
          className="h-full bg-primary"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
        />
      </div>

      <div className="bg-primary-dark py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 lg:gap-12">
            {/* Table of Contents - Desktop Sidebar */}
            {tableOfContents.length > 0 && (
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block text-left text-sm transition-colors hover:text-primary ${
                          item.level === 3 ? 'pl-4' : ''
                        } ${
                          activeSection === item.id 
                            ? 'text-primary font-medium border-l-2 border-primary pl-3' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {item.text}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

              <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Mobile Table of Contents */}
              {tableOfContents.length > 0 && (
                <div className="lg:hidden mb-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowToc(!showToc)}
                    className="w-full justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <List className="w-4 h-4" />
                      Table of Contents
                    </span>
                    <span className="text-xs text-muted-foreground">{tableOfContents.length} sections</span>
                  </Button>
                  {showToc && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 p-4 bg-secondary/20 rounded-lg space-y-2"
                    >
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`block text-left text-sm transition-colors hover:text-primary ${
                            item.level === 3 ? 'pl-4' : ''
                          } ${
                            activeSection === item.id 
                              ? 'text-primary font-medium' 
                              : 'text-muted-foreground'
                          }`}
                        >
                          {item.text}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              )}

              <div className="mb-8">
                <img
                  src={post.image.replace('w=800', 'w=1200')}
                  alt={post.title}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>

              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
                style={{ color: 'hsl(var(--foreground))' }}
              />

              <div className="border-t border-b border-border py-8 mb-12">
                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                <div className="flex gap-3 flex-wrap">
                  <Button variant="outline" size="sm" onClick={() => handleShare('facebook')} className="gap-2">
                    <Facebook className="w-4 h-4" /> Facebook
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('twitter')} className="gap-2">
                    <Twitter className="w-4 h-4" /> Twitter
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')} className="gap-2">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" onClick={copyLink} className="gap-2">
                    <LinkIcon className="w-4 h-4" /> Copy Link
                  </Button>
                </div>
              </div>

              <div className="bg-secondary/20 rounded-xl p-8 mb-12">
                <div className="flex gap-6 items-start flex-col sm:flex-row">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                    <p className="text-muted-foreground mb-3">{post.author.bio}</p>
                    <p className="text-sm font-semibold text-primary">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} to={`/blogs/${relatedPost.slug}`}>
                <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-elegant transition-smooth group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">{relatedPost.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{relatedPost.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">{relatedPost.title}</h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
