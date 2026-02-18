import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-heading font-bold text-xl mb-4">
          JR<span className="text-primary"> BINJHOL</span>
        </h3>
        <p className="text-sm opacity-80 leading-relaxed">
          Premium egg exporters from India. Delivering export-grade fresh eggs with consistency, hygiene, and reliability.
        </p>
      </div>
      <div>
        <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          <li><Link to="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
          <li><Link to="/export-enquiry" className="hover:text-primary transition-colors">Export Enquiry</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading font-bold text-lg mb-4">Contact Info</h4>
        <ul className="space-y-3 text-sm opacity-80">
          <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> +91 91227 60000</li>
          <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> jrbinjol@gmail.com</li>
          <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> V.P.O Binjhol, Panipat</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-background/20 py-4 text-center text-sm opacity-60">
      © {new Date().getFullYear()} JR Binjhol. All rights reserved.
    </div>
  </footer>
);

export default Footer;
