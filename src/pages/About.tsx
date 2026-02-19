import PageBanner from "@/components/PageBanner";
import heroHome from "@/assets/hero-home.jpg";

const About = () => (
  <>
    <PageBanner image={heroHome} title="About Us" breadcrumb="ABOUT US" />

    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
            Meet Your Trusted Egg Export Partner: Our Story
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            JR Group is a professionally managed partnership firm with decades of combined experience
            in the poultry industry. Our operations are designed for scale, consistency, and
            international-grade quality.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a strong foundation in poultry farming, we have grown into a trusted name in the egg
            export business, serving buyers across the globe with premium-quality white and brown shell eggs.
          </p>
        </div>
        <div className="bg-card rounded-lg shadow-lg p-8 border-l-4 border-primary">
          <h3 className="font-heading font-bold text-xl text-primary mb-4">At JR Group,</h3>
          <p className="text-foreground leading-relaxed mb-4">
            We believe in delivering not just products, but trust. Our leadership team brings
            extensive expertise in commercial layer farming, feed manufacturing, and export logistics.
          </p>
          <p className="text-foreground leading-relaxed">
            Our commitment to bio-secure farming practices, strict quality controls, and timely
            delivery has earned us the confidence of buyers and partners worldwide.
          </p>
        </div>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary text-center mb-12">
          Our Strength in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500K+", label: "Eggs Per Day" },
            { value: "30+", label: "Years Experience" },
            { value: "2+", label: "Farm Units" },
            { value: "20+", label: "Trade Partners" },
          ].map((s) => (
            <div key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div className="text-sm font-heading font-semibold text-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-6">
          Our Mission
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          To be the most reliable and quality-focused egg export partner from India, delivering
          premium products that meet the highest international standards while maintaining
          sustainable and ethical farming practices.
        </p>
      </div>
    </section>
  </>
);

export default About;
