"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // start loading

    try {
      const response = await fetch("/sendmail.php", {
        method: "POST",
        body: new URLSearchParams(formData as any),
      });

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
    } finally {
      setIsLoading(false); // stop loading
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("e vale", e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-6xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your digital evolution? Get in touch with us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6 scroll-reveal scroll-reveal-delay-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    required
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-card/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <Input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className="bg-card/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name (Optional)"
                    className="bg-card/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <Textarea
                    rows={6}
                    required
                    id="message"
                    name="message"
                    placeholder="Tell us about your project *"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-card/50 border-border/50 focus:border-primary min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 scroll-reveal scroll-reveal-delay-2">
              {/* Info Cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-[1px] flex-shrink-0">
                    <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">info@evo9labs.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-[1px] flex-shrink-0">
                    <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3 gradient-text">
                  Ready to Evolve?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join hundreds of successful businesses that have transformed
                  their digital presence with Evo9Labs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div
        className="ambient-light top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary to-transparent"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="ambient-light bottom-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-primary to-transparent"
        style={{ animationDelay: "5s" }}
      ></div>
    </section>
  );
};

export default Contact;
