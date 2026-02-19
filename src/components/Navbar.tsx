import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        
        {/* 🔥 Logo + Text */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="JR Group Logo"
            className="h-14 w-auto object-contain"
          />

          <span className="font-heading font-extrabold text-2xl tracking-tight text-primary">
            JR<span className="text-secondary"> Group</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-heading font-semibold tracking-wide transition-colors hover:text-primary ${
                pathname === l.to ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
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
        <nav className="lg:hidden bg-white border-t border-gray-200 pb-4">
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
