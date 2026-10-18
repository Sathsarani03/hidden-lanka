
import { Link } from 'react-router';
import {
  ArrowUpRight,
  Leaf,
  Map,
  Heart,
  BookOpen,
  Compass
} from 'lucide-react';
import { destinations } from '../data/destinations';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[75vh] items-end bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, #101d19, rgba(0,0,0,.2)), url("${destinations[4].image}")`
        }}
      >
        <div className="container-wide pb-20 pt-44">
          <p className="eyebrow mb-5">Our story</p>

          <h1 className="section-title max-w-4xl">
            An island full of{' '}
            <em className="text-[#d2b07c]">wonder.</em>
          </h1>
        </div>
      </section>

      {/* OUR STORY & WHY HIDDEN LANKA */}
      <section className="container-wide py-24 md:py-28">
        <div className="about-cards-grid">

          {/* CARD 1 */}
          <Reveal>
            <div className="about-story-card">
              <div className="about-card-icon">
                <BookOpen size={26} />
              </div>

              <p className="eyebrow mb-5">
                01 / OUR STORY
              </p>

              <h2 className="serif text-4xl leading-tight md:text-5xl">
                An island full of untold stories.
              </h2>

              <p className="mt-7 text-base leading-8 text-white/70">
                Hidden Lanka is a portfolio concept created
                to celebrate Sri Lanka's natural beauty,
                heritage and diverse landscapes.
              </p>

              <p className="mt-5 text-base leading-8 text-white/60">
                It's a place to discover destinations,
                gather inspiration and build your own wishlist.
              </p>
            </div>
          </Reveal>

          {/* CARD 2 */}
          <Reveal delay={0.15}>
            <div className="about-story-card">
              <div className="about-card-icon">
                <Compass size={26} />
              </div>

              <p className="eyebrow mb-5">
                02 / WHY HIDDEN LANKA?
              </p>

              <h2 className="serif text-4xl leading-tight md:text-5xl">
                Because the best stories aren't always
                on the main road.
              </h2>

              <p className="mt-7 text-base leading-8 text-white/70">
                We believe exploration should be thoughtful.
                Respect local communities, protect nature,
                and discover the quieter corners of the island.
              </p>

              <p className="mt-5 text-base leading-8 text-white/60">
                Every destination has a story worth discovering.
                Always verify local conditions before visiting
                remote areas.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#ede7da] py-24 text-[#16251d]">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-3">

            {[
              [
                Leaf,
                'Nature first',
                'Leave places as beautiful as you found them.'
              ],
              [
                Map,
                'Curiosity always',
                'Look beyond the familiar and discover new perspectives.'
              ],
              [
                Heart,
                'Travel with respect',
                'Support local communities and responsible experiences.'
              ]
            ].map(([Icon, title, desc]) => (
              <div key={title}>
                <Icon
                  size={32}
                  className="mb-5 text-[#8d6a41]"
                />

                <h3 className="serif text-3xl">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#516052]">
                  {desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-wide py-24 text-center">
        <h2 className="serif text-5xl">
          Ready to discover more?
        </h2>

        <Link
          to="/explore"
          className="pill pill-light mt-8"
        >
          Explore the island
          <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}
