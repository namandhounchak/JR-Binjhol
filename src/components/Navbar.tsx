import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/products", label: "OUR PRODUCTS" },
  { to: "/export-enquiry", label: "EXPORT ENQUIRY" },
  { to: "/contact", label: "CONTACT US" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading font-extrabold text-2xl tracking-tight text-primary">
            JR<span className="text-secondary"> BINJHOL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 text-sm font-heading font-semibold tracking-wide transition-colors hover:text-primary ${
                pathname === l.to ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+919122760000"
            className="ml-4 flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded font-heading font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone size={16} />
            Call Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="lg:hidden bg-background border-t border-border pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-heading font-semibold tracking-wide hover:text-primary ${
                pathname === l.to ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
