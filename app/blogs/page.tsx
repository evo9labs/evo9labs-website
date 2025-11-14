"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { blog_posts } from "@/constant";

const categories = [
  "All",
  "Development",
  "Blockchain",
  "Design",
  "E-commerce",
  "Cloud",
  "Marketing",
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blog_posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Ambient lights */}
        <div className="ambient-light w-[600px] h-[600px] bg-primary/30 top-0 left-0" />
        <div className="ambient-light w-[500px] h-[500px] bg-secondary/30 top-20 right-0" />

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insights{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                & Innovation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore the latest trends, insights, and best practices in digital
              transformation
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 scroll-reveal">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-105"
                    : "bg-card/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 pb-20 relative">
        {/* Ambient lights */}
        <div className="ambient-light w-[400px] h-[400px] bg-primary/20 bottom-0 left-1/4" />
        <div className="ambient-light w-[350px] h-[350px] bg-secondary/20 top-1/2 right-1/4" />

        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.id}`}
                  className="group scroll-reveal block h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="h-full relative pt-0 overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(14,165,233,0.3)] hover:scale-[1.02] hover:-translate-y-2">
                    {/* Ambient glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full filter blur-[100px]" />
                    </div>

                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="px-3 py-1.5 text-xs font-semibold bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-full shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
