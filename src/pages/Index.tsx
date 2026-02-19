import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Truck,
  Shield,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import heroHome from "@/assets/hero-home.jpg";
import whiteEggs from "@/assets/white-eggs.jpg";
import brownEggs from "@/assets/brown-eggs.jpg";

/* 🔥 AUTO IMPORT GALLERY IMAGES */
const galleryModules = import.meta.glob(
  "@/assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const galleryImages = Object.values(galleryModules).map(
  (mod: any) => mod.default
);

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "500K+", label: "Eggs / Day" },
  { value: "FSSAI", label: "Certified" },
  { value: "HSPCB", label: "Certified" },
  { value: "MSME", label: "Registered" },
  { value: "100+", label: "Happy Buyers" },
];

const qualities = [
  { label: "Bio-secure poultry environments", pct: 100 },
  { label: "Strict grading & inspection protocols", pct: 97 },
  { label: "Clean, hygienic, export-ready packaging", pct: 95 },
  { label: "Logistics support for international shipping", pct: 100 },
];

const Index = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex + 1) % galleryImages.length
      );
    }
  };

  /* Close with ESC + Arrow Navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[600px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroHome})` }}
      >
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 container text-center py-24">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary-foreground mb-6">
            Premium Egg Exporters<br />from India
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-4">
            Delivering export-grade fresh eggs with consistency, hygiene, and reliability.
          </p>
          <p className="text-primary-foreground/80 mb-8 italic">
            From farm to table, our poultry is simply incredible!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3.5 rounded font-heading font-bold text-sm tracking-wider hover:opacity-90 transition-opacity"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      {/* Welcome / Stats */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
            Welcome to JR Group
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-number">{s.value}</div>
                <div className="text-sm font-heading font-semibold mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            JR Group is a professionally managed enterprise led by seasoned poultry industry experts.
            Our farms operate at scale, delivering consistent, high-quality eggs tailored for international trade requirements.
          </p>
        </div>
      </section>

      {/* Production */}
      <section className="section-light py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-2 text-center">
            Providing Premium Poultry
          </h2>
          <p className="text-center text-primary font-heading font-semibold mb-10">
            Large-Scale Production for Bulk Export Needs
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4">
              {[
                "Advanced commercial layer farm units",
                "Daily production capacity of 500,000+ eggs",
                "Multi-location operations for supply stability",
                "Bio-secure, hygienic farm environments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={whiteEggs}
                alt="White shell eggs"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img
                src={brownEggs}
                alt="Brown shell eggs"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Export Quality */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8 text-center">
            Export-Grade Quality You Can Rely On
          </h2>
          <div className="space-y-5">
            {qualities.map((q) => (
              <div key={q.label}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{q.label}</span>
                  <span className="text-primary font-bold">{q.pct}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${q.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Certifications */}
      <section className="section-light py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: "White Shell Eggs" },
              { icon: Award, label: "Brown Shell Eggs" },
              { icon: CheckCircle, label: "FSSAI Certified" },
              { icon: CheckCircle, label: "HSPCB Certified" },
              { icon: CheckCircle, label: "MSME Registered" },
              { icon: Truck, label: "Global Shipping" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="p-6">
                <Icon className="mx-auto text-primary mb-3" size={36} />
                <span className="font-heading font-semibold text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <p className="text-primary font-semibold tracking-widest mb-2">
            OUR GALLERY
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-red-600 mb-12">
            Get to know JR Poultry Farm
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                onClick={() => setSelectedIndex(index)}
                className="rounded-xl shadow-md w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-6 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={galleryImages[selectedIndex]}
            alt="Selected"
            className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
          />

          <button
            onClick={showNext}
            className="absolute right-6 text-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="bg-secondary py-16 text-center">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground mb-4">
            Your Reliable Egg Export Partner from India
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            A Commitment to Quality, Punctuality, and Customer Satisfaction
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-heading font-bold text-sm tracking-wider hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
