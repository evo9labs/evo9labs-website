import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { blog_posts } from "@/constant";

export async function generateStaticParams() {
  return blog_posts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface PageProps {
  params: { id: string };
}

const BlogPostPage = ({ params }: PageProps) => {
  const id = Number(params.id);
  const post = blog_posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blogs">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blog_posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <article className="relative pt-32 pb-20">
        {/* Ambient lights */}
        <div className="ambient-light w-[600px] h-[600px] bg-primary/30 top-0 right-0" />
        <div className="ambient-light w-[500px] h-[500px] bg-secondary/30 top-20 left-0" />

        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          {/* Category badge */}
          <div className="mb-6">
            <span className="px-4 py-2 text-sm font-semibold bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 scroll-reveal">
            <span className="gradient-text">{post.title}</span>
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 mb-12 text-muted-foreground scroll-reveal">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Author info */}
          <div className="flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg mb-12 scroll-reveal">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
              {post.author.avatar}
            </div>
            <div>
              <div className="font-semibold">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">
                {post.author.role}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg prose-invert max-w-none scroll-reveal
              prose-headings:gradient-text prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6
              prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:mb-6 prose-li:mb-2
              prose-strong:text-foreground prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 
              prose-blockquote:italic prose-blockquote:text-foreground prose-blockquote:bg-card/30 
              prose-blockquote:backdrop-blur-sm prose-blockquote:py-4 prose-blockquote:rounded-r-lg
              prose-blockquote:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 relative border-t border-border/50">
          {/* Ambient lights */}
          <div className="ambient-light w-[400px] h-[400px] bg-primary/20 bottom-0 left-1/4" />

          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center scroll-reveal">
              <span className="gradient-text">Related Articles</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  href={`/blogs/${relatedPost.id}`}
                  className="group scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="h-full relative pt-0 overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(14,165,233,0.3)] hover:scale-[1.02] hover:-translate-y-1">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-primary/20 rounded-full filter blur-[80px]" />
                    </div>

                    <div className="relative h-32 bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="absolute bottom-3 left-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {relatedPost.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(relatedPost.date).toLocaleDateString(
                              "en-US",
                              { month: "short", day: "numeric" }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
