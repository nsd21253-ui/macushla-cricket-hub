import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trophy, Users, Target, Star, MapPin, Clock } from "lucide-react";
import heroImg from "@/assets/hero-cricket.jpg";
import ballImg from "@/assets/cricket-ball.jpg";
import juniorImg from "@/assets/junior-training.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Macushla Cricket Academy — Coaching by Shivil Kaushik | HSR Layout" },
      {
        name: "description",
        content:
          "Train at Macushla Cricket Academy in HSR Layout, Bengaluru. Founded by India's Shivil Kaushik. Turf nets, structured programs for kids & adults.",
      },
      { property: "og:title", content: "Macushla Cricket Academy — by Shivil Kaushik" },
      {
        property: "og:description",
        content: "Premier cricket coaching in HSR Layout, Bengaluru. Book your free trial today.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-pitch-deep text-cream">
        <img
          src={heroImg}
          alt="Young cricketer batting at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-28 md:py-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-background/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              By Shivil Kaushik · HSR Layout
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide text-balance">
              Where champions
              <span className="block text-primary">take guard.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80">
              Macushla Cricket Academy is Bengaluru's home for serious cricket coaching —
              elite turf nets, structured pathways, and mentorship from a former IPL bowler.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
              >
                Book a Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex h-12 items-center rounded-md border border-cream/40 px-7 text-sm font-bold uppercase tracking-wider text-cream backdrop-blur transition-colors hover:bg-cream/10"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>

        {/* stat strip */}
        <div className="relative border-t border-cream/15 bg-pitch-deep/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: "500+", v: "Players Coached" },
              { k: "12+", v: "Expert Coaches" },
              { k: "6", v: "Pro Turf Nets" },
              { k: "4.3★", v: "Playo Rated" },
            ].map((s) => (
              <div key={s.v} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl text-primary">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-cream/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Why Macushla
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl text-balance">
              Built around the player. Driven by the game.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Trophy,
                t: "Pro Lineage",
                d: "Founded by Shivil Kaushik — India's left-arm chinaman bowler with first-class & IPL experience.",
              },
              {
                icon: Target,
                t: "Structured Pathways",
                d: "From first ball to tournament debut — programs tailored to age, skill, and ambition.",
              },
              {
                icon: Users,
                t: "Small Group Focus",
                d: "Low coach-to-player ratios so every grip, stance and follow-through is corrected in real time.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl tracking-wide">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT — coaching philosophy */}
      <section className="bg-secondary text-secondary-foreground py-24 md:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={juniorImg}
              alt="Young cricketers training at the academy"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-xl shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:flex h-32 w-32 rounded-full bg-gradient-ball items-center justify-center shadow-glow animate-ball-spin">
              <span className="font-display text-cream text-xl rotate-12">EST.</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Our Philosophy
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
              Discipline on the pitch. Joy in the game.
            </h2>
            <p className="mt-6 text-lg text-secondary-foreground/75 leading-relaxed">
              We believe great cricketers are forged through repetition, intelligent feedback,
              and a love for the sport. Our sessions blend technical drills with match
              simulations — so what's learned at practice transfers to the middle.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Video analysis & technique review",
                "Match-day exposure with inter-academy fixtures",
                "Strength, conditioning & nutrition guidance",
                "Mental conditioning for big-stage performance",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Star className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                  <span className="text-secondary-foreground/85">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-pitch-deep p-10 md:p-16 text-cream shadow-elegant">
            <img
              src={ballImg}
              alt=""
              width={1280}
              height={896}
              loading="lazy"
              className="absolute -right-20 -top-20 h-[420px] w-[420px] object-cover opacity-30 blur-sm"
            />
            <div className="relative max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl">
                Ready to step on the pitch?
              </h2>
              <p className="mt-4 text-cream/75">
                Book a complimentary trial session. Bring your kit — we'll bring the rest.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
                >
                  Book Trial <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://playo.co/venues/hsr-layout-bengaluru/macushla-cricket-academy-by-shivil-kaushik-hsr-layout-bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center rounded-md border border-cream/40 px-7 text-sm font-bold uppercase tracking-wider text-cream hover:bg-cream/10"
                >
                  Book on Playo
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-cream/70">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" /> HSR Layout, Sector 6
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> 7 Days a Week
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
