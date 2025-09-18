import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import {
  Code,
  Smartphone,
  Palette,
  ShoppingCart,
  Cloud,
  Settings,
  Brush,
  TrendingUp,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { services } from "@/constant";

export const metadata: Metadata = {
  title: "Services - Evo9 Labs | Digital Evolution Services",
  description:
    "Comprehensive digital services including web development, mobile apps, UI/UX design, e-commerce solutions, and cloud services.",
};

export default function Services() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We analyze your business needs, target audience, and goals to create a comprehensive digital strategy.",
      deliverables: [
        "Project Roadmap",
        "Technical Specifications",
        "Timeline & Budget",
        "Risk Assessment",
      ],
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and interactive prototypes to visualize the final product before development.",
      deliverables: [
        "Wireframes",
        "UI/UX Design",
        "Interactive Prototype",
        "Design System",
      ],
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Building your solution using best practices, with continuous testing to ensure quality and performance.",
      deliverables: [
        "Clean Code",
        "Quality Assurance",
        "Performance Testing",
        "Security Audit",
      ],
    },
    {
      number: "04",
      title: "Deployment & Support",
      description:
        "Launching your solution and providing ongoing support to ensure optimal performance and user satisfaction.",
      deliverables: [
        "Live Deployment",
        "User Training",
        "Documentation",
        "Ongoing Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Our 9 Dimensions of</span>
            <br />
            <span className="text-foreground">Digital Evolution</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Comprehensive digital solutions designed to transform your business
            across all 9 dimensions of modern technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Evolution <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful digital
              transformation from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="text-center">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Deliverables:
                  </h4>
                  <ul className="space-y-1 text-center">
                    {step.deliverables.map((deliverable, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-center justify-center"
                      >
                        <ArrowRight className="w-3 h-3 text-primary mr-2" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your{" "}
            <span className="text-gradient">Digital Evolution</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a customized solution that
            drives your business forward.
          </p>
          <Link href="/contact">
            <Button className="btn-evolution text-lg px-8 py-4">
              Let's Evolve Together
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
