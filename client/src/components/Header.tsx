import { Link, useLocation } from "wouter";
import logoImage from "@assets/Logo (5)_1764096543845.png";

export function Header() {
  const [location] = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home-logo">
            <img
              src={logoImage}
              alt="Mutantss Logo"
              className="h-10 w-auto hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2 cursor-pointer"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 cursor-pointer inline-block ${
                  location === link.path
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground"
                }`}
                data-testid={`link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="md:hidden" data-testid="nav-mobile">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-2 py-2 rounded-md text-xs font-medium transition-colors hover-elevate active-elevate-2 cursor-pointer inline-block ${
                    location === link.path
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
