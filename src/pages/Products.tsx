import PageBanner from "@/components/PageBanner";
import heroProducts from "@/assets/hero-products.jpg";
import whiteEggs from "@/assets/white-eggs.jpg";
import brownEggs from "@/assets/brown-eggs.jpg";
import shipping from "@/assets/shipping.jpg";

const Products = () => (
  <>
    <PageBanner image={heroProducts} title="Our Products" breadcrumb="OUR PRODUCTS" />

    <section className="py-20">
      <div className="container text-center">
        <p className="text-primary font-heading font-semibold text-sm tracking-wider mb-2">
          PROUD CHICKEN EGGS EXPORTER IN INDIA
        </p>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-12">
          WE PRIORITIZE EGG POULTRY WELFARE
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start text-left">
          <div className="space-y-6">
            <img src={whiteEggs} alt="White shell eggs" className="rounded-lg shadow-md w-full h-64 object-cover" />
            <img src={brownEggs} alt="Brown shell eggs" className="rounded-lg shadow-md w-full h-64 object-cover" />
          </div>

          <div>
            <div className="bg-card rounded-lg shadow border overflow-hidden mb-8">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Min. Order Quantity", "1312 Carton/Cartons"],
                    ["Port", "Chennai, Tuticorin, Cochin, Mumbai, Mundra"],
                    ["Payment Terms", "T/T 50% Advance, Balance 50% against B/L"],
                    ["Category", "Fresh White Shell Eggs, Brown Shell Eggs"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b last:border-0">
                      <td className="px-4 py-3 font-semibold text-foreground bg-muted/50 w-1/3">{k}</td>
                      <td className="px-4 py-3 text-muted-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-heading font-bold text-lg mb-3">Product Description</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Eggs are among the few foods classified as "superfoods." They are loaded with nutrients,
              some of which are rare in the modern diet.
            </p>
            <h4 className="font-heading font-semibold mb-2">A single large boiled egg contains:</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-6">
              {[
                "Vitamin A: 6% RDA",
                "Folate: 5% RDA",
                "Vitamin B5: 7% RDA",
                "Vitamin B12: 9% RDA",
                "Phosphorus: 9% RDA",
                "Selenium: 22% RDA",
              ].map((n) => (
                <li key={n} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="font-heading font-bold text-xl text-secondary mb-4">Packaging & Shipping</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We ship in 40 Feet High Cube reefer containers maintaining temperature of +2°C
            — favourable for eggs.
          </p>
          <div className="bg-card rounded-lg shadow p-5 border-l-4 border-primary">
            <p className="font-semibold mb-2">40 Footer Container with 7 tray box:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• 2184 Cartons per container</li>
              <li>• Each carton: 7 Trays × 30 Eggs = 210 Eggs</li>
              <li>• Container total: 4,58,640 Eggs</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg shadow p-5 border-l-4 border-primary">
            <p className="font-semibold mb-2">40 Footer Container with 12 tray box:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• 1312 Cartons per container</li>
              <li>• Each carton: 12 Trays × 30 Eggs = 360 Eggs</li>
              <li>• Container total: 4,72,320 Eggs</li>
            </ul>
          </div>
        </div>
        <img src={shipping} alt="Shipping container" className="rounded-lg shadow-md w-full h-72 object-cover" />
      </div>
    </section>
  </>
);

export default Products;
