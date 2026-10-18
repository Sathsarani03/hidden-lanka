
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import {
  AnimatePresence,
  motion,
  useReducedMotion
} from 'motion/react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin
} from 'lucide-react';

import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import Reveal from '../components/Reveal';

const count = destinations.length;

const wrap = (n) => (n + count) % count;

const signedOffset = (index, current) => {
  let difference = (index - current + count) % count;

  if (difference > count / 2) {
    difference -= count;
  }

  return difference;
};

const ease = [0.22, 1, 0.36, 1];

export default function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const place = destinations[active];

  const go = (direction) => {
    setActive((previous) => wrap(previous + direction));
  };

  useEffect(() => {
    if (paused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((previous) => wrap(previous + 1));
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(1);
    }
  };

  return (
    <main>
      {/* CINEMATIC HERO */}
      <section
        className="cinema-hero"
        aria-label="Featured Sri Lankan destinations"
      >
        {/* ANIMATED BACKGROUND */}
        <AnimatePresence initial={false}>
          <motion.div
            key={place.slug}
            className="cinema-background"
            style={{
              backgroundImage: `url("${place.image}")`
            }}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 1.08 }
            }
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.6,
              ease
            }}
          />
        </AnimatePresence>

        <div className="cinema-shade" />

        <div className="cinema-content container-wide">
          {/* TOP KICKER */}
          <motion.p
            className="cinema-kicker"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: -35 }
            }
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.1,
              ease
            }}
          >
            THE ISLAND OF UNTOLD STORIES
            <span className="cinema-line" />
            EST. SRI LANKA
          </motion.p>

          {/* MAIN TITLE */}
          <div className="cinema-title-block">
            <motion.p
              className="cinema-overline"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: -65 }
              }
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.2,
                ease
              }}
            >
              DISCOVER WHAT LIES BEYOND
            </motion.p>

            <motion.h1
              className="cinema-title"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.55,
                      y: 110,
                      filter: 'blur(12px)'
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: 'blur(0px)'
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.25,
                delay: reduceMotion ? 0 : 0.25,
                ease
              }}
            >
              HIDDEN <em>LANKA.</em>
            </motion.h1>

            {/* ACTIVE DESTINATION DETAILS */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={place.slug}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -70,
                        filter: 'blur(7px)'
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: 'blur(0px)'
                }}
                exit={{
                  opacity: 0,
                  x: 35
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.15,
                  ease
                }}
              >
                <div className="cinema-place-label">
                  <MapPin size={15} />
                  {place.region}, Sri Lanka
                  <span>—</span>
                  {place.category}
                </div>

                <h2 className="cinema-place-name">
                  {place.name}
                </h2>

                <p className="cinema-description">
                  {place.description}
                </p>

                <Link
                  to={`/destinations/${place.slug}`}
                  className="cinema-cta"
                >
                  Explore this place
                  <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CAROUSEL ENTRANCE */}
          <motion.div
            className="cinema-carousel-area"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 110,
                    scale: 0.75,
                    filter: 'blur(10px)'
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)'
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.25,
              delay: reduceMotion ? 0 : 0.55,
              ease
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget
                )
              ) {
                setPaused(false);
              }
            }}
          >
            <div className="cinema-carousel-header">
              <div>
                <span className="cinema-small-label">
                  CURATED FOR THE CURIOUS
                </span>

                <h3>Explore the extraordinary</h3>
              </div>

              <span className="cinema-counter">
                {String(active + 1).padStart(2, '0')}
                <span> / </span>
                {String(count).padStart(2, '0')}
              </span>
            </div>

            <div className="cinema-carousel-controls">
              <button
                className="cinema-arrow"
                onClick={() => go(-1)}
                aria-label="Previous destination"
              >
                <ArrowLeft size={20} />
              </button>

              <div
                className="cinema-carousel-stage"
                tabIndex={0}
                role="group"
                aria-label="Rotating destination carousel; use left and right arrow keys"
                onKeyDown={onKeyDown}
                onTouchStart={(event) => {
                  touchStart.current =
                    event.touches[0].clientX;
                }}
                onTouchEnd={(event) => {
                  if (touchStart.current === null) return;

                  const delta =
                    event.changedTouches[0].clientX -
                    touchStart.current;

                  if (Math.abs(delta) > 45) {
                    go(delta < 0 ? 1 : -1);
                  }

                  touchStart.current = null;
                }}
              >
                {destinations.map((item, index) => {
                  const offset = signedOffset(index, active);
                  const visible = Math.abs(offset) <= 2;

                  return (
                    <motion.button
                      key={item.slug}
                      type="button"
                      aria-label={`Select ${item.name}`}
                      aria-pressed={offset === 0}
                      tabIndex={visible ? 0 : -1}
                      className={`cinema-card ${
                        offset === 0
                          ? 'cinema-card-active'
                          : ''
                      }`}
                      style={{
                        backgroundImage: `linear-gradient(
                          180deg,
                          transparent 42%,
                          rgba(5,17,13,.9)
                        ), url("${item.image}")`,
                        pointerEvents: visible
                          ? 'auto'
                          : 'none'
                      }}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              x: '0%',
                              y: 70,
                              scale: 0.35,
                              rotateY: 0,
                              rotateZ: 0,
                              opacity: 0,
                              filter: 'blur(12px)'
                            }
                      }
                      animate={{
                        x: `${offset * 82}%`,
                        y: Math.abs(offset) * 28,
                        scale:
                          offset === 0
                            ? 1
                            : Math.abs(offset) === 1
                              ? 0.84
                              : 0.65,
                        rotateY: offset * -22,
                        rotateZ: offset * -4,
                        opacity: visible
                          ? Math.abs(offset) === 2
                            ? 0.45
                            : 1
                          : 0,
                        zIndex: 10 - Math.abs(offset),
                        filter:
                          offset === 0
                            ? 'brightness(1)'
                            : 'brightness(0.72)'
                      }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : {
                              type: 'spring',
                              stiffness: 85,
                              damping: 20,
                              mass: 1.1,
                              delay: 0.65 + index * 0.09
                            }
                      }
                      onClick={() => {
                        if (offset === 0) {
                          navigate(
                            `/destinations/${item.slug}`
                          );
                        } else {
                          setActive(index);
                        }
                      }}
                    >
                      <span className="cinema-card-category">
                        {item.category}
                      </span>

                      <span className="cinema-card-name">
                        {item.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <button
                className="cinema-arrow"
                onClick={() => go(1)}
                aria-label="Next destination"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            <div
              className="cinema-dots"
              aria-label="Choose a destination"
            >
              {destinations.map((item, index) => (
                <button
                  key={item.slug}
                  aria-label={`Show ${item.name}`}
                  aria-current={
                    index === active ? 'true' : undefined
                  }
                  className={
                    index === active ? 'active' : ''
                  }
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <a className="cinema-scroll" href="#discover">
          SCROLL TO DISCOVER
          <ArrowDown size={14} />
        </a>
      </section>

      {/* DESTINATION GRID */}
      <section
        id="discover"
        className="container-wide py-24 md:py-32"
      >
        <Reveal>
          <p className="eyebrow">
            OFF THE BEATEN PATH
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-4 mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="section-title">
              Find your next <em>escape.</em>
            </h2>

            <Link
              to="/explore"
              className="pill pill-light"
            >
              View all destinations
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {destinations.slice(0, 3).map((item, index) => (
            <Reveal
              key={item.slug}
              delay={index * 0.13}
            >
              <DestinationCard place={item} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#eae3d3] px-6 py-28 text-center text-[#142d25]">
        <Reveal>
          <p className="eyebrow">
            OUR PHILOSOPHY
          </p>

          <h2 className="section-title mx-auto mt-5 max-w-4xl">
            The best stories begin{' '}
            <em>off the map.</em>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8">
            Discover the quiet corners, wild landscapes
            and living heritage of Sri Lanka.
            Explore thoughtfully, travel respectfully.
          </p>

          <Link
            to="/about"
            className="pill pill-dark mt-9"
          >
            Our story
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
