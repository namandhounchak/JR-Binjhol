import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import heroContact from "@/assets/hero-contact.jpg";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We will get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <>
      <PageBanner image={heroContact} title="Contact Us" breadcrumb="CONTACT US" />

      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 content-start">
            <div className="bg-card rounded-lg shadow p-6 text-center">
              <Phone className="mx-auto text-primary mb-3" size={32} />
              <h4 className="font-heading font-bold text-secondary mb-2">Phone</h4>
              <p className="text-sm text-muted-foreground">+91 91227 60000</p>
              <p className="text-sm text-muted-foreground">+91 XXXXX XXXXX</p>
            </div>
            <div className="bg-card rounded-lg shadow p-6 text-center">
              <MapPin className="mx-auto text-primary mb-3" size={32} />
              <h4 className="font-heading font-bold text-secondary mb-2">Address</h4>
              <p className="text-sm text-muted-foreground">
                V.P.O Binjhol, Panipat <br />
              </p>
            </div>
            <div className="bg-card rounded-lg shadow p-6 text-center sm:col-span-2">
              <Mail className="mx-auto text-primary mb-3" size={32} />
              <h4 className="font-heading font-bold text-secondary mb-2">Email</h4>
              <p className="text-sm text-muted-foreground">jrbinjol@gmail.com</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="text-primary font-heading font-semibold text-sm tracking-wider mb-2">
              SEND US A MESSAGE
            </p>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-6">
              Help us with your feedback; it is of great value, so we can serve you better
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className={inputClass} />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className={inputClass} />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={5} required className={inputClass} />
              <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-bold text-sm tracking-wider hover:opacity-90 transition-opacity">
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
