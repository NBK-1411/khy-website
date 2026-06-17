import Image from "next/image";
import Link from "next/link";
import { SiteChrome } from "../components/SiteChrome";
import { assets } from "../data";

const services = [
  {
    title: "Space Planning & Project Design",
    body: "Our team of professionals develops and coordinates all the necessary actions for space planning and designing partial or complete projects. We implement projects both in the country and abroad.",
    image: assets.servicesPlan,
    alt: "Office layout plan for space planning",
  },
  {
    title: "Maintenance & After Sale Support",
    body: "We offer maintenance and after-sale services for your furniture to operate at its maximum.",
    image: assets.servicesInstall,
    alt: "Furniture installation support",
  },
  {
    title: "Furniture Rental",
    body: "In addition to our high-quality products, we also offer a variety of services to our customers. These include space planning, installation, and ongoing maintenance and support. We are committed to ensuring that our customers have the best possible experience.",
    image: "/website-images/WhatsApp%20Image%202026-06-01%20at%205.09.21%20PM.jpeg",
    alt: "Office furniture delivery and installation",
  },
];

export default function ServicesPage() {
  return (
    <SiteChrome>
      <section className="services-wix-hero" aria-labelledby="services-title">
        <div className="services-wix-hero-copy">
          <p>Our services</p>
          <h1 id="services-title">Reimagine your office space</h1>
          <h2>
            Our team of experts is here to help you create a brand new workspace,
            tailored to your needs.
          </h2>
        </div>
        <Image
          className="services-wix-hero-image"
          src={assets.productHero}
          alt="Allure executive desk detail"
          width={1306}
          height={908}
          priority
        />
      </section>

      <section className="services-wix-list" aria-label="Service offerings">
        {services.map((service) => (
          <article key={service.title}>
            <Image src={service.image} alt={service.alt} width={708} height={720} />
            <div>
              <h2>{service.title}</h2>
              <p>{service.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="services-wix-process" aria-labelledby="services-process-title">
        <h2 id="services-process-title">Consult. Design. Plan. Deliver.</h2>
        <p>
          Needing support to create the perfect environment for your office? Our
          experienced sales, design and installation teams are here to help. We
          collaborate with you in four easy steps to create innovative and efficiently
          designed workspace solutions individually tailored to your space, needs and
          timescales.
        </p>
        <Link href="/contact">Enquire about our services</Link>
      </section>
    </SiteChrome>
  );
}
