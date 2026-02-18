import { Link } from "react-router-dom";

interface PageBannerProps {
  image: string;
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ image, title, breadcrumb }: PageBannerProps) => (
  <section
    className="page-banner"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="relative z-10 container">
      <nav className="text-sm text-primary-foreground/80 font-heading font-medium mb-2">
        <Link to="/" className="hover:underline">HOME</Link>
        <span className="mx-2">|</span>
        <span>{breadcrumb}</span>
      </nav>
      <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-foreground">
        {title}
      </h1>
    </div>
  </section>
);

export default PageBanner;
