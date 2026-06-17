import Image from "next/image";
import Link from "next/link";
import { AboutAnimations } from "../components/AboutAnimations";
import { SiteChrome } from "../components/SiteChrome";
import { assets, products } from "../data";

export default function ProductsPage() {
  return (
    <SiteChrome>
      <AboutAnimations />
      <section className="products-hero" aria-labelledby="products-title">
        <div className="products-hero-copy product-reveal reveal-from-left">
          <p className="eyebrow">Shop from us</p>
          <h1 id="products-title">Our products</h1>
          <p>
            Find what you need from our diverse portfolio of office furniture systems to
            create the perfect environment in the modern workplace.
          </p>
        </div>
        <Image
          className="products-hero-image product-reveal reveal-from-right reveal-delay-1"
          src={assets.productHero}
          alt="Detailed view of premium office furniture"
          width={958}
          height={828}
          priority
        />
      </section>

      <section className="catalog-section" aria-label="Product categories">
        <div className="catalog-grid">
          {products.map((product) => (
            <article
              className="catalog-card"
              key={product.name}
            >
              <Link href={`/products/${product.slug}`} aria-label={product.name}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={648}
                  height={776}
                  quality={95}
                  unoptimized
                  sizes="(min-width: 900px) 366px, (min-width: 640px) 50vw, 100vw"
                  style={product.position ? { objectPosition: product.position } : undefined}
                />
                <h2>{product.name}</h2>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
