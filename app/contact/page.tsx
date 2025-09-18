"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/sendmail.php", {
        method: "POST",
        body: new URLSearchParams(formData as any), // send as form-data
      });

      console.log("Response status:", response);

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Message could not be sent. Try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "support@evo9labs.com",
      description: "Send us an email anytime",
    },
    // {
    //   icon: <Phone className="w-6 h-6 text-primary" />,
    //   title: "Phone",
    //   value: "+1 (555) 123-4567",
    //   description: "Mon-Fri from 8am to 6pm",
    // },
    // {
    //   icon: <MapPin className="w-6 h-6 text-primary" />,
    //   title: "Location",
    //   value: "Innovation District",
    //   description: "Digital evolution headquarters",
    // },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Hours",
      value: "Mon-Fri 8AM-6PM",
      description: "We'll get back to you within 24 hours",
    },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Blockchain Services",
    "E-commerce Solutions",
    "Cloud Services",
    "Custom Software",
    "Branding & Identity",
    "Digital Marketing",
    "Maintenance & Support",
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity, but most web projects take 4-8 weeks, while mobile apps typically require 8-16 weeks.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages to keep your digital solutions running smoothly and securely.",
    },
    {
      question: "What's your development process?",
      answer:
        "We follow a proven 4-step process: Discovery & Strategy, Design & Prototyping, Development & Testing, and Deployment & Support.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We excel at collaborative partnerships and can integrate seamlessly with your existing development team or stakeholders.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Let's Start</span>
            <br />
            <span className="text-foreground">Your Evolution</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Ready to transform your digital presence? Get in touch and let's
            discuss how we can help you evolve across all 9 dimensions of
            digital success.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-evolution w-full md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Services */}
            <div className="space-y-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Get in touch
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      {info.icon}
                      <div>
                        <div className="font-semibold text-foreground">
                          {info.title}
                        </div>
                        <div className="text-primary">{info.value}</div>
                        <div className="text-sm text-muted-foreground">
                          {info.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Checklist */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  What we can help with
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="service-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
