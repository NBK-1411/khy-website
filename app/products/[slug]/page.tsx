import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteChrome } from "../../components/SiteChrome";
import { productDetails } from "../../data";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productDetails.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = productDetails.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} | KHY Products`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = productDetails.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <SiteChrome>
      <section className="product-detail-hero">
        <h1>{product.title}</h1>
        {product.description ? <p>{product.description}</p> : null}
        <Link className="product-quote-button" href="/contact">
          Get a quote
        </Link>
      </section>

      <section className="product-detail-list" aria-label={`${product.title} range`}>
        {product.items.map((item) => (
          <article className="product-detail-item" key={item.name}>
            <Image src={item.image} alt={item.name} width={823} height={830} />
            <h2>{item.name}</h2>
          </article>
        ))}
      </section>
    </SiteChrome>
  );
}
