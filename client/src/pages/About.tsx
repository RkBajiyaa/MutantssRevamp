import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Zap, Target, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: TrendingUp,
      title: "Data Driven",
      description: "Every strategy backed by robust analytics and insights",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Agile delivery without compromising on quality",
    },
    {
      icon: Target,
      title: "ROI Focused",
      description: "Maximizing returns on every marketing investment",
    },
    {
      icon: Users,
      title: "Scalable",
      description: "Solutions that grow with your business ambitions",
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative py-20 md:py-32 bg-gradient-to-br from-primary/95 to-primary text-primary-foreground overflow-hidden"
        data-testid="section-about-hero"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-primary-foreground rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-primary-foreground rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-about-title">
            YOUR GROWTH PARTNER IN THE DIGITAL ERA
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-about-content">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-8 mb-16">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              At <span className="font-semibold">Mutantss</span>, we're not just another digital marketing agency. We're a team of creative strategists, data scientists, and growth hackers who believe in the power of evolution. Just as the natural world adapts and thrives through mutation, we help brands transform and dominate their digital landscapes.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Based in the vibrant city of <span className="font-semibold">Jaipur</span>, we've built a full-service digital agency that merges cutting-edge creativity with strategic precision. Our expertise spans <span className="font-semibold">SEO, PPC, social media marketing, content creation, web development</span>, and everything in between. But what truly sets us apart is our relentless focus on data-driven growth and measurable results.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover-elevate"
                  data-testid={`card-value-${index}`}
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Why Work With Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Strategic Partnership</h3>
                  <p className="text-muted-foreground">
                    We become an extension of your team, deeply invested in your success and growth trajectory.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Our track record speaks for itself with 500+ successful projects and measurable ROI improvements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovation First</h3>
                  <p className="text-muted-foreground">
                    We stay ahead of trends, leveraging the latest technologies and strategies to keep you competitive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Transparent Communication</h3>
                  <p className="text-muted-foreground">
                    Regular updates, detailed reporting, and open dialogue ensure you're always in the loop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-mission">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            To empower businesses with digital strategies that don't just follow best practices—they set new standards. We're here to help brands evolve, adapt, and thrive in an ever-changing digital ecosystem.
          </p>
        </div>
      </section>
    </div>
  );
}
