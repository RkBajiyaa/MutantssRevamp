import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  TrendingUp,
  Zap,
  Target,
  ArrowUpRight,
  Users,
  Award,
  Clock,
  Sparkles,
  CheckCircle2,
  ShoppingCart,
  Laptop,
  Heart,
  GraduationCap,
  Building2,
  DollarSign,
} from "lucide-react";
import heroImage from "@assets/generated_images/digital_marketing_team_collaboration.png";
import testimonial1 from "@assets/generated_images/client_testimonial_portrait_1.png";
import testimonial2 from "@assets/generated_images/client_testimonial_portrait_2.png";
import testimonial3 from "@assets/generated_images/client_testimonial_portrait_3.png";
import { useEffect, useRef, useState } from "react";

function CountUpNumber({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "E-Commerce Ventures",
      image: testimonial1,
      quote: "Mutantss transformed our online presence completely. Our sales increased by 250% in just 6 months. Their data-driven approach and creative execution are unmatched.",
    },
    {
      name: "Priya Patel",
      company: "SaaS Solutions Inc",
      image: testimonial2,
      quote: "Working with Mutantss has been a game-changer. They don't just execute campaigns; they become true partners in growth. The ROI speaks for itself.",
    },
    {
      name: "Amit Kumar",
      company: "Real Estate Group",
      image: testimonial3,
      quote: "The team at Mutantss brings fresh perspectives and innovative strategies. They helped us reach audiences we never thought possible. Highly recommended!",
    },
  ];

  const stats = [
    { icon: Award, label: "Projects Delivered", value: 500, suffix: "+" },
    { icon: Clock, label: "Years Experience", value: 8, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 200, suffix: "+" },
    { icon: TrendingUp, label: "Average ROI Increase", value: 180, suffix: "%" },
  ];

  const industries = [
    { icon: ShoppingCart, label: "E-Commerce" },
    { icon: Laptop, label: "SaaS & Tech" },
    { icon: Heart, label: "Healthcare" },
    { icon: Building2, label: "Real Estate" },
    { icon: GraduationCap, label: "Education" },
    { icon: DollarSign, label: "Finance" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Deep dive into your business, audience, and competitive landscape",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Craft data-driven strategies aligned with your growth objectives",
    },
    {
      number: "03",
      title: "Execution",
      description: "Launch campaigns with precision and creative excellence",
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous testing and refinement for maximum performance",
    },
    {
      number: "05",
      title: "Scale",
      description: "Expand successful campaigns and multiply your impact",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
      >
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Creative team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6" data-testid="text-hero-title">
            MUTANTSS
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4">
            WHERE DIGITAL MARKETING EVOLVES
          </p>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12">
            Innovate. Dominate. Accelerate.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto"
              data-testid="button-book-strategy-call"
            >
              Book a Strategy Call
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-philosophy">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-philosophy-title">
              Our Philosophy
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Welcome to Team Mutants!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
              <p className="text-muted-foreground leading-relaxed">
                In the ever-evolving digital landscape, we believe in constant transformation. Just as species adapt to thrive, we mutate our strategies to stay ahead.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-chart-2" />
              <p className="text-muted-foreground leading-relaxed">
                We merge creativity with cutting-edge technology, crafting experiences that don't just meet expectations—they shatter them.
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-chart-3" />
              <p className="text-muted-foreground leading-relaxed">
                Our DNA is innovation. We don't follow trends; we create them. We don't adapt to change; we drive it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-impact">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight" data-testid="text-impact-quote">
              We craft digital experiences that merge design, content, and performance—turning ideas into outcomes.
            </h2>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8" data-testid="card-feature-creative">
              <Target className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Exploring Creative Depths
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We dive deep into research, design thinking, and storytelling to uncover insights that drive meaningful connections. Every campaign is a journey of discovery, where data meets intuition and strategy meets soul.
              </p>
            </Card>

            <Card className="p-8" data-testid="card-feature-brands">
              <Zap className="h-12 w-12 mb-4 text-chart-2" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Building Brands for the Long Run
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just execute campaigns; we build brand ecosystems. Our approach focuses on sustainable growth through continuous optimization, audience development, and performance enhancement that compounds over time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-chart-2/5" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Results That Speak
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that showcase our impact
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-stat-${index}`}>
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground" data-testid={`text-stat-value-${index}`}>
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from real partners
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12" data-testid="card-testimonial">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover"
                    data-testid="img-testimonial-avatar"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed" data-testid="text-testimonial-quote">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-lg" data-testid="text-testimonial-name">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-muted-foreground" data-testid="text-testimonial-company">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    data-testid={`button-testimonial-dot-${index}`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology for digital success
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-process-${index}`}>
                <div className="text-5xl font-bold text-primary/20 mb-4" data-testid={`text-process-number-${index}`}>
                  {step.number}
                </div>
                <h3 className="font-bold text-xl mb-3" data-testid={`text-process-title-${index}`}>{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-process-desc-${index}`}>
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Expertise across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-elevate active-elevate-2"
                data-testid={`card-industry-${index}`}
              >
                <industry.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="font-medium text-sm" data-testid={`text-industry-${index}`}>{industry.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
        data-testid="section-cta"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90">
            Let's create something extraordinary together. Your evolution starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="link-cta-contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 h-auto"
                data-testid="button-cta-get-started"
              >
                Get Started
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services" data-testid="link-cta-services">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-cta-explore-services"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
