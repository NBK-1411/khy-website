import Image from "next/image";
import Link from "next/link";
import { SiteChrome } from "./components/SiteChrome";
import { Testimonials } from "./components/Testimonials";
import { assets } from "./data";

export default function Home() {
  return (
    <SiteChrome>
      <section className="home-hero scroll-reveal reveal-from-bottom">
        <Image
          src={assets.homeHero}
          alt="Elegant furnished interior by KHY"
          width={838}
          height={546}
          priority
        />
        <div className="home-hero-copy scroll-reveal reveal-from-bottom reveal-delay-1">
          <h1>
            <span>Beyond Imagination,</span>
            <span>Beautifully Furnished</span>
          </h1>
          <Link className="hero-cta" href="/contact">
            Enquire
          </Link>
        </div>
      </section>

      <section className="intro-split">
        <div className="scroll-reveal reveal-from-left">
          <p className="eyebrow">Get to know us</p>
          <h2>About KHY</h2>
          <p>
            Khy Business Ltd was established on 18th June 2019 and specializes in the
            supply and installation of furniture and joinery solutions.
          </p>
          <Link className="read-more-button" href="/about">
            Read more
          </Link>
        </div>
        <div className="intro-image-stack scroll-reveal reveal-from-right reveal-delay-1">
          <Image
            className="intro-bg-image"
            src={assets.abstractGrey}
            alt=""
            width={692}
            height={498}
            aria-hidden="true"
          />
          <Image
            className="intro-main-image"
            src={assets.story}
            alt="Warm interior lounge with two chairs beside a round table"
            width={782}
            height={624}
          />
        </div>
      </section>

      <Testimonials />
    </SiteChrome>
  );
}
