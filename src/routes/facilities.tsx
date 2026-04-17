import { createFileRoute } from "@tanstack/react-router";
import facilityImg from "@/assets/facility-nets.jpg";
import { Lightbulb, Wifi, Car, Coffee, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Macushla Cricket Academy, HSR Layout" },
      {
        name: "description",
        content:
          "Premium turf nets, floodlights, professional pitches and modern amenities at Macushla Cricket Academy in HSR Layout, Bengaluru.",
      },
      { property: "og:title", content: "Facilities — Macushla Cricket Academy" },
      {
        property: "og:description",
        content: "World-class turf nets, floodlit ground, and player amenities in HSR Layout.",
      },
      { property: "og:image", content: facilityImg },
      { name: "twitter:image", content: facilityImg },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-pitch-deep text-cream py-28">
        <img
          src={facilityImg}
          alt="Floodlit cricket nets at Macushla Academy"
          width={1280}
          height={896}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Facilities
          </span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance max-w-3xl">
            Built to a professional standard.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/80">
            Train where it matters. Our HSR Layout facility offers turf nets, expert-prepared
            pitches and floodlights — open from early morning through late evening.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-balance">
              Six pro-grade turf nets. One world-class ground.
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Our nets replicate match-day surfaces — true bounce, predictable carry, and
              turf maintained by experienced groundsmen. Whether you're working on your
              forward defence or your yorker, you train on the surface that matters.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {[
                "6 turf practice nets",
                "Floodlit evening sessions",
                "Bowling machine access",
                "Match-grade pitches",
                "Video analysis room",
                "Pro-shop & equipment",
              ].map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3"
                >
                  <Sparkles className="h-4 w-4 text-primary shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={facilityImg}
            alt="Cricket nets facility"
            width={1280}
            height={896}
            loading="lazy"
            className="rounded-2xl shadow-elegant"
          />
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Amenities
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Everything you need on-site.</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Lightbulb, t: "Floodlit Nets", d: "Train evenings into night with full LED lighting." },
              { icon: Car, t: "Parking", d: "On-site parking for cars and two-wheelers." },
              { icon: Coffee, t: "Refreshments", d: "Hydration, snacks and seating for parents." },
              { icon: ShieldCheck, t: "Safety First", d: "Helmets, pads and first-aid available on ground." },
              { icon: Wifi, t: "Wi-Fi & Lounge", d: "Comfortable waiting lounge for parents." },
              { icon: Sparkles, t: "Equipment Storage", d: "Personal kit storage for regular trainees." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
