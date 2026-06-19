import Image from "next/image";
import { PageHero, SiteChrome } from "../components/SiteChrome";
import { assets, team, values } from "../data";

export default function AboutPage() {
  return (
    <SiteChrome>
      <div className="about-page">
        <div className="about-reveal reveal-from-bottom">
          <PageHero
            eyebrow="Get to know us"
            title="About KHY"
            copy="Founded in 2019, Khy specializes in premium furniture supply and joinery installations across Ghana."
          />
        </div>

        <section className="story-section" aria-labelledby="story-title">
          <div className="story-media about-reveal reveal-from-left">
            <Image
              src={assets.story}
              alt="Warm interior lounge with two chairs beside a round table"
              width={1000}
              height={985}
              priority
            />
          </div>
          <div className="story-content about-reveal reveal-from-right reveal-delay-1">
            <div className="section-pill" id="story-title">
              Our story
            </div>
            <p>
              Khy Business Ltd was established on 18th June 2019 and specializes in the
              supply and installation of furniture and joinery solutions.
            </p>
            <p>
              Our multi-skilled team is dedicated to understanding each project in an
              integral way that allows us to meet the unique needs of our clients. Our
              focus is to bring each design to life through the implementation of
              innovative furniture and joinery solutions.
            </p>
            <p>
              We believe beauty does not always have to be expensive and we are inspired
              by this. We use a wide range of furniture solutions to create beautiful and
              functional spaces that provide value for money without sacrificing quality,
              aesthetics, and customer satisfaction.
            </p>
            <dl className="stats">
              <div>
                <dt>Projects Completed</dt>
                <dd>29</dd>
              </div>
              <div>
                <dt>Years of Experience</dt>
                <dd>6</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mission-section" aria-label="KHY mission and vision">
          <Image
            className="mission-image about-reveal reveal-from-right"
            src={assets.mission}
            alt="Furniture layout rendering for a modern workspace"
            width={542}
            height={492}
          />
          <div className="mission-card about-reveal reveal-from-left reveal-delay-1">
            <p className="mini-brand">KHY</p>
            <div>
              <h2>Mission</h2>
              <p>
                To provide innovative furniture solutions that transform ordinary spaces
                into extraordinary environments.
              </p>
            </div>
            <div>
              <h2>Vision</h2>
              <p>
                To create beautiful and functional spaces that inspire and enrich
                everyday living.
              </p>
            </div>
          </div>
        </section>

        <section className="values-section" aria-labelledby="values-title">
          <div className="section-pill about-reveal reveal-from-bottom" id="values-title">
            Our values
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article
                className={`about-reveal reveal-from-bottom reveal-delay-${index + 1}`}
                key={value.title}
              >
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="team-section" aria-labelledby="team-title">
          <h2 className="about-reveal reveal-from-bottom" id="team-title">
            Meet the team
          </h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <article
                className={`team-member team-member-${member.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")} about-reveal reveal-from-bottom reveal-delay-${index + 1}`}
                key={member.name}
              >
                <Image src={member.image} alt={member.name} width={218} height={228} />
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteChrome>
  );
}
