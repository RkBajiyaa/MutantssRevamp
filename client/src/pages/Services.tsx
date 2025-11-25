import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Megaphone,
  Palette,
  Target,
  Share2,
  TrendingUp,
  Code,
  Search,
  Smartphone,
  Bot,
  CheckCircle2,
  Zap,
  BarChart,
  Shield,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Marketing And Communications Strategy",
      icon: Megaphone,
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
      description: "Comprehensive marketing frameworks that align with your business objectives and audience insights.",
      benefits: [
        "Market research and competitive analysis",
        "Audience segmentation and persona development",
        "Multi-channel campaign planning",
        "Performance metrics and KPI definition",
      ],
    },
    {
      title: "Brand Ideology And Visual Identity Development",
      icon: Palette,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
      description: "Create a distinctive brand presence that resonates with your target audience and stands out in the market.",
      benefits: [
        "Brand strategy and positioning",
        "Logo and visual identity design",
        "Brand guidelines and style systems",
        "Brand messaging and tone of voice",
      ],
    },
    {
      title: "Go To Market Strategy Execution",
      icon: Target,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      description: "Launch products and services with precision-targeted strategies that maximize market impact.",
      benefits: [
        "Product positioning and messaging",
        "Launch timeline and milestone planning",
        "Channel strategy and activation",
        "Post-launch optimization and scaling",
      ],
    },
    {
      title: "IMC Platform Management",
      icon: Share2,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      description: "Integrated marketing communications across all touchpoints for consistent brand experiences.",
      benefits: [
        "Cross-channel campaign coordination",
        "Content calendar management",
        "Stakeholder communication",
        "Real-time campaign monitoring",
      ],
    },
    {
      title: "Media Planning, Buying And Execution",
      icon: TrendingUp,
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
      description: "Strategic media investments that deliver maximum reach and engagement at optimal costs.",
      benefits: [
        "Media mix optimization",
        "Programmatic advertising",
        "Budget allocation and pacing",
        "Performance tracking and reporting",
      ],
    },
    {
      title: "Cross-Channel Content Integration",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Cohesive content strategies that work seamlessly across all digital channels and platforms.",
      benefits: [
        "Content strategy and planning",
        "Multi-format content creation",
        "Platform-specific optimization",
        "Content performance analytics",
      ],
    },
    {
      title: "SEO, SMM, SEM",
      icon: Search,
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
      description: "Drive organic and paid traffic through search engine optimization, social media, and search marketing.",
      benefits: [
        "Keyword research and on-page SEO",
        "Social media strategy and management",
        "PPC campaign management",
        "Conversion rate optimization",
      ],
    },
    {
      title: "App/Web Development",
      icon: Smartphone,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
      description: "Custom web and mobile applications built with cutting-edge technologies and user-centric design.",
      benefits: [
        "Responsive web design and development",
        "Mobile app development (iOS & Android)",
        "E-commerce platform development",
        "API integration and custom solutions",
      ],
    },
    {
      title: "Gen AI And Automation",
      icon: Bot,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      description: "Leverage artificial intelligence and automation to scale your marketing efforts and enhance efficiency.",
      benefits: [
        "AI-powered content generation",
        "Marketing automation workflows",
        "Chatbot development and deployment",
        "Predictive analytics and insights",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: BarChart,
      title: "Data-Driven Approach",
      description: "Every decision backed by robust analytics and performance metrics to ensure measurable results.",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Agile methodologies and streamlined processes deliver campaigns quickly without compromising quality.",
    },
    {
      icon: Target,
      title: "ROI Focused",
      description: "We optimize every campaign for maximum return on investment and sustainable business growth.",
    },
    {
      icon: Shield,
      title: "Scalable Solutions",
      description: "Flexible strategies and infrastructure that grow with your business needs and ambitions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-chart-2/10 to-chart-3/10 overflow-hidden"
        data-testid="section-services-hero"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-services-title">
            OUR SERVICES
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your growth and dominate your market.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-services-grid">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Mutantss
            </h2>
            <p className="text-xl text-muted-foreground">
              The competitive advantages that set us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-why-choose-${index}`}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3" data-testid={`text-why-choose-title-${index}`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-why-choose-desc-${index}`}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-service-details">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-chart-1/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-chart-1" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Search Engine Dominance
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our SEO and SEM strategies combine technical excellence with content mastery to put your brand at the top of search results. We don't just chase rankings—we build sustainable organic visibility that compounds over time.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Technical SEO audits and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Content optimization for featured snippets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Local SEO and Google My Business optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conversion-focused PPC campaigns</span>
                  </li>
                </ul>
                <Link href="/contact" data-testid="link-learn-more-seo">
                  <Button data-testid="button-learn-more-seo">
                    Learn More
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <Card className="p-8 bg-gradient-to-br from-chart-1/5 to-chart-1/10" data-testid="card-seo-stats">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Organic Traffic Growth</span>
                    <span className="text-2xl font-bold text-chart-1">+285%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Keyword Rankings (Top 3)</span>
                    <span className="text-2xl font-bold text-chart-1">+450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Conversion Rate</span>
                    <span className="text-2xl font-bold text-chart-1">+68%</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-gradient-to-br from-chart-2/5 to-chart-2/10 md:order-first order-last" data-testid="card-social-stats">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Social Engagement Rate</span>
                    <span className="text-2xl font-bold text-chart-2">+320%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Community Growth</span>
                    <span className="text-2xl font-bold text-chart-2">+12K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Brand Mentions</span>
                    <span className="text-2xl font-bold text-chart-2">+540%</span>
                  </div>
                </div>
              </Card>
              <div>
                <div className="bg-chart-2/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Share2 className="h-8 w-8 text-chart-2" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Social Media Mastery
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Transform social platforms into powerful growth engines. We create engaging content, build vibrant communities, and drive measurable business results through strategic social media management.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Platform-specific content strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Community management and engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Influencer partnerships and collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Social advertising and retargeting campaigns</span>
                  </li>
                </ul>
                <Link href="/contact" data-testid="link-learn-more-social">
                  <Button data-testid="button-learn-more-social">
                    Learn More
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-chart-3/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-chart-3" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Web & App Development
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Build digital products that users love. Our development team creates fast, secure, and scalable web and mobile applications that deliver exceptional user experiences and drive business growth.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom web application development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Native and cross-platform mobile apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>E-commerce solutions and integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Progressive web apps (PWAs)</span>
                  </li>
                </ul>
                <Link href="/contact" data-testid="link-learn-more-dev">
                  <Button data-testid="button-learn-more-dev">
                    Learn More
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <Card className="p-8 bg-gradient-to-br from-chart-3/5 to-chart-3/10" data-testid="card-dev-stats">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Page Load Speed</span>
                    <span className="text-2xl font-bold text-chart-3">0.8s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Mobile Performance Score</span>
                    <span className="text-2xl font-bold text-chart-3">98/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">User Satisfaction</span>
                    <span className="text-2xl font-bold text-chart-3">4.9★</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
        data-testid="section-services-cta"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your Success Story
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/90">
            Ready to take your digital marketing to the next level? Let's talk about your goals and create a customized strategy.
          </p>
          <Link href="/contact" data-testid="link-services-cta">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto"
              data-testid="button-start-project"
            >
              Start Your Project
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
