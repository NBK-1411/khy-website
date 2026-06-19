import Image from "next/image";
import { SiteChrome } from "../components/SiteChrome";
import { assets, clients } from "../data";

const clientCards = [
  {
    ...clients[0],
    image: "/website-images/glico%20healthcare.png",
  },
  {
    ...clients[1],
    image: "/website-images/Stanbic-IBTC-scaled.jpg",
  },
  {
    ...clients[2],
    image: "/website-images/Norfund_logo_as_of_2022%20(1).png",
  },
  {
    ...clients[3],
    name: "Equinix",
    image: "/website-images/Untitled%20design%20(6).png",
  },
  {
    name: "Maine One",
    description: clients[3].description,
    image: "/website-images/maine%20one%20.png",
  },
  {
    ...clients[4],
    image: "/website-images/Expro.jpg",
  },
  {
    ...clients[5],
    image: "/website-images/nestle-4-logo-png-transparent.png",
  },
  {
    ...clients[6],
    image: "/website-images/ERIS.png",
  },
  {
    ...clients[7],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ghana_Revenue_Authority_logo_%28new%29.jpg/250px-Ghana_Revenue_Authority_logo_%28new%29.jpg",
  },
];

const galleryImages = [
  { src: "/website-images/PHOTO-2023-04-29-20-11-47.jpg", orientation: "portrait" },
  { src: "/website-images/PHOTO-2025-03-03-00-52-45.jpg", orientation: "portrait" },
  { src: "/website-images/PHOTO-2025-04-12-17-51-11%20(1).jpg", orientation: "portrait" },
  { src: "/website-images/PHOTO-2025-04-14-15-20-02%203.jpg", orientation: "landscape" },
  { src: "/website-images/PHOTO-2025-10-24-09-45-35%202%20(1).jpg", orientation: "landscape" },
  { src: "/website-images/PHOTO-2025-10-24-09-45-36.jpg", orientation: "landscape" },
  { src: "/website-images/PHOTO-2025-10-24-09-45-37%20(1).jpg", orientation: "landscape" },
  { src: "/website-images/PHOTO-2025-10-24-09-45-38%20(1).jpg", orientation: "landscape" },
  { src: "/website-images/PHOTO-2025-10-24-09-45-39.jpg", orientation: "landscape" },
  { src: "/website-images/PHOTO-2025-10-24-09-45-39%202.jpg", orientation: "landscape" },
];

export default function ClientsPage() {
  return (
    <SiteChrome>
      <section className="clients-wix-hero scroll-reveal reveal-from-bottom" aria-labelledby="clients-title">
        <p>Who we have served</p>
        <h1 id="clients-title">Our clientele</h1>
        <h2>We believe every client is a valuable long-term partner.</h2>
      </section>

      <section className="clients-wix-trusted" aria-label="Trusted by industry leaders">
        <Image
          className="scroll-reveal reveal-from-left"
          src={assets.clientsHero}
          alt="Completed client workspace with lounge furniture"
          width={1033}
          height={810}
          priority
        />
        <div className="clients-wix-trusted-card scroll-reveal reveal-from-right reveal-delay-1">
          <h2>
            <span>Trusted by</span>
            <strong>Industry Leaders</strong>
          </h2>
          <p>
            We have delivered projects for banks, multinational companies, NGOs, and local
            enterprises across Ghana. We offer a wide range of modern and stylish office
            furniture designs to enhance your workspace aesthetic. From sleek desks to
            comfortable chairs, our expertly curated selection will take your office space to
            the next level.
          </p>
        </div>
      </section>

      <section className="clients-wix-grid" aria-label="Client project descriptions">
        {clientCards.map((client, index) => (
          <article
            className={`scroll-reveal reveal-from-bottom reveal-delay-${(index % 5) + 1}`}
            key={client.name}
          >
            <div className="clients-wix-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.image}
                alt={client.name}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "128px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="clients-wix-copy">
              <h3>{client.name}</h3>
              <p>
                <strong>Project Description:</strong> {client.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="clients-wix-gallery" aria-labelledby="projects-gallery-title">
        <h2 className="scroll-reveal reveal-from-bottom" id="projects-gallery-title">
          Projects Gallery
        </h2>
        <div>
          {galleryImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt=""
              width={960}
              height={720}
              unoptimized
              className={`${image.orientation === "portrait" ? "portrait " : ""}scroll-reveal reveal-from-bottom reveal-delay-${(index % 5) + 1}`}
            />
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
