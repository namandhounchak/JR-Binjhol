import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import heroProducts from "@/assets/hero-products.jpg";
import { useToast } from "@/components/ui/use-toast";

const ExportEnquiry = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", country: "",
    product: "", quantity: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Sent!", description: "We will get back to you shortly." });
    setForm({ name: "", company: "", email: "", phone: "", country: "", product: "", quantity: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <>
      <PageBanner image={heroProducts} title="Export Enquiry" breadcrumb="EXPORT ENQUIRY" />

      <section className="py-20">
        <div className="container max-w-3xl">
          <p className="text-primary font-heading font-semibold text-sm tracking-wider text-center mb-2">
            INTERESTED IN IMPORTING?
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary text-center mb-4">
            Send Us Your Export Enquiry
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Fill in the form below and our export team will respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required className={inputClass} />
              <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className={inputClass} />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required className={inputClass} />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" required className={inputClass} />
              <input name="country" value={form.country} onChange={handleChange} placeholder="Country *" required className={inputClass} />
              <select name="product" value={form.product} onChange={handleChange} required className={inputClass}>
                <option value="">Select Product *</option>
                <option value="white">White Shell Eggs</option>
                <option value="brown">Brown Shell Eggs</option>
                <option value="both">Both</option>
              </select>
            </div>
            <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Required Quantity (e.g., 2184 cartons)" className={inputClass} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Additional Requirements / Message" rows={5} className={inputClass} />
            <div className="text-center">
              <button type="submit" className="bg-primary text-primary-foreground px-10 py-3.5 rounded font-heading font-bold text-sm tracking-wider hover:opacity-90 transition-opacity">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ExportEnquiry;
