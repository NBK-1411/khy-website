import Image from "next/image";
import { SiteChrome } from "../components/SiteChrome";
import { assets } from "../data";

export default function ContactPage() {
  return (
    <SiteChrome>
      <section className="contact-page">
        <div className="contact-copy">
          <p className="eyebrow">Let&apos;s talk</p>
          <h1>Get in touch with our team</h1>
          <p>
            Whether you are looking for more information about our furniture solutions,
            need help with an existing order, or want to discuss a custom offering, our
            team is ready to assist with any questions you have.
          </p>
          <address>
            <span>No. 5 Labone Crescent, Accra - Ghana</span>
            <a href="tel:+233256766464">+233 25 676 6464</a>
            <a href="mailto:info@khyltd.com">info@khyltd.com</a>
          </address>
        </div>
        <Image
          src={assets.productHero}
          alt="Close view of a premium furniture surface"
          width={428}
          height={418}
          priority
        />
      </section>
    </SiteChrome>
  );
}
