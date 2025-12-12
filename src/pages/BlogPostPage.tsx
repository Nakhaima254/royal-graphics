import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogBySlug, getRelatedPosts, blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug || "") || blogPosts[0];
  const relatedPosts = getRelatedPosts(slug || "");

  const shareUrl = window.location.href;
  const shareTitle = post.title;

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

  return (
    <div className="pt-16">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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

          <div className="mb-8">
            <img
              src={post.image.replace('w=800', 'w=1200')}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
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
