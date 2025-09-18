import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Code,
  Lightbulb,
  Shield,
  Heart,
} from "lucide-react";
import { services } from "@/constant";

export const metadata: Metadata = {
  title: "About - Evo9 Labs | Digital Evolution Company",
  description:
    "Learn about Evo9 Labs, our mission to drive digital evolution, our values, and our commitment to transforming businesses through technology.",
};

export default function About() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "9", label: "Core Dimensions" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Purpose-Driven",
      description:
        "Every solution we create serves a meaningful purpose, driving real business transformation and user value.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and innovative approaches to solve complex digital challenges.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality & Security",
      description:
        "We maintain the highest standards of code quality, security, and performance in every project we deliver.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaborative",
      description:
        "We work closely with our clients as partners, ensuring transparent communication and shared success.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Growth Minded",
      description:
        "We focus on scalable solutions that grow with your business and adapt to changing market needs.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "User-Centric",
      description:
        "Every decision we make is guided by creating exceptional user experiences and meaningful interactions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">About Evo9Labs</span>
            <br />
            <span className="text-foreground">Digital Evolution</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            We are passionate digital evolution specialists, transforming
            businesses through innovative technology solutions across 9
            essential dimensions.
          </p>
          <Link href="/contact">
            <Button className="btn-evolution text-lg px-8 py-4 animate-fade-in">
              Start Your Evolution
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Philosophy Section */}

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Philosophy Behind Evo9 Labs
            </h2>
            <p className="text-xl text-muted-foreground">
              Understanding our name reveals our mission
            </p>
          </div>
          <div className="space-y-12">
            <div className="panel-glass rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">Evo</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Evolution
                  </h3>
                  <p className="text-muted-foreground">
                    We don't just build technology; we evolve your entire
                    business digitally, adapting to change and growth.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">9</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Completeness
                  </h3>
                  <p className="text-muted-foreground">
                    Nine essential dimensions covering every aspect of digital
                    transformation - no gaps, no compromises.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      Labs
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Innovation Hub
                  </h3>
                  <p className="text-muted-foreground">
                    A place where ideas transform into working solutions, where
                    experimentation meets execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why <span className="text-gradient">Evo9 Labs</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The "9" in Evo9 Labs represents the 9 essential dimensions of
                digital evolution that we believe every modern business needs to
                master to thrive in the digital age.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From user experience design to cloud infrastructure, from mobile
                applications to data analytics, we provide comprehensive
                solutions that address all aspects of digital transformation.
              </p>
              <p className="text-lg text-muted-foreground">
                Our name reflects our commitment to evolutionary rather than
                revolutionary change - we believe in sustainable, strategic
                digital growth that builds upon your existing strengths while
                introducing innovative capabilities.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-primary/10 rounded-lg flex flex-col items-center justify-center text-center p-3 group hover:bg-primary/20 transition-colors"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to
              excellence in digital evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="service-card text-center group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Evolve <span className="text-gradient">Together</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business through
            strategic digital evolution across all 9 dimensions.
          </p>
          <Link href="/contact">
            <Button className="btn-evolution text-lg px-8 py-4">
              Start the Conversation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
