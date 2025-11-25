import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import logoImage from "@assets/Logo (5)_1764096543845.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to subscribe");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    newsletterMutation.mutate(email);
  };

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const services = [
    "Digital Marketing Strategy",
    "SEO & SMM",
    "Brand Development",
    "Web Development",
    "Content Marketing",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary/95 to-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src={logoImage}
              alt="Mutantss Logo"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/90 leading-relaxed">
              Infusing new digital genes. Where creativity meets evolution, and innovation drives transformation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-quick-links">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors hover-elevate rounded px-2 py-1 -ml-2 inline-block cursor-pointer"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-services">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-contact">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/90">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:9873433138" className="hover:text-primary-foreground transition-colors" data-testid="link-phone">
                  98734 33138
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/90">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@mutantss.com" className="hover:text-primary-foreground transition-colors" data-testid="link-email">
                  info@mutantss.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  B, 20, Gopinath Marg, Jayanti Market, New Colony, Jaipur, Rajasthan 302001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="max-w-md mx-auto">
            <h3 className="font-semibold text-lg mb-3 text-center" data-testid="text-newsletter-title">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4 text-center">
              Stay updated with the latest digital marketing trends and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/50"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                variant="secondary"
                disabled={newsletterMutation.isPending}
                data-testid="button-subscribe"
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80" data-testid="text-copyright">
              © {new Date().getFullYear()} Mutantss. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover-elevate active-elevate-2 rounded-md p-2"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <span className="text-primary-foreground/40">|</span>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
