import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Macushla Cricket Academy" },
      {
        name: "description",
        content:
          "Cricket coaching programs at Macushla Academy: Junior Foundation, Youth Development, Advanced Performance, and Adult Cricket. HSR Layout, Bengaluru.",
      },
      { property: "og:title", content: "Programs — Macushla Cricket Academy" },
      {
        property: "og:description",
        content: "Structured cricket programs for every age and level — from first grip to elite performance.",
      },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    name: "Little Stars",
    age: "Ages 5 – 8",
    tag: "Foundation",
    desc: "First introduction to cricket through fun-based drills, hand-eye coordination games and confidence building.",
    points: ["3 sessions / week", "60-min sessions", "Soft-ball training", "Beginner-friendly"],
    featured: false,
  },
  {
    name: "Junior Development",
    age: "Ages 9 – 13",
    tag: "Most Popular",
    desc: "Building proper technique across batting, bowling and fielding — with a focus on match awareness.",
    points: [
      "4 sessions / week",
      "90-min sessions",
      "Hard-ball coaching",
      "Inter-academy matches",
    ],
    featured: true,
  },
  {
    name: "Youth Performance",
    age: "Ages 14 – 17",
    tag: "Competitive",
    desc: "Performance-focused training for players aiming at school, club and state-level cricket.",
    points: [
      "5 sessions / week",
      "Video analysis",
      "Strength & conditioning",
      "Tournament selection support",
    ],
    featured: false,
  },
  {
    name: "Adult Cricket",
    age: "18+",
    tag: "Weekend Friendly",
    desc: "For working professionals and corporate teams — enjoy the game with structured net sessions and matches.",
    points: ["Flexible slots", "Match-play focused", "Corporate group bookings", "All levels welcome"],
    featured: false,
  },
];

function ProgramsPage() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Programs
          </span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance max-w-3xl">
            A pathway for every cricketer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/75">
            From your child's very first cover drive to advanced match-prep — our
            programs are designed in tiers so progress is measurable and motivating.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                p.featured
                  ? "border-primary bg-pitch-deep text-cream shadow-glow"
                  : "border-border bg-card hover:shadow-elegant"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  {p.tag}
                </span>
              )}
              {!p.featured && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {p.tag}
                </span>
              )}
              <h3 className="mt-2 font-display text-3xl">{p.name}</h3>
              <p
                className={`text-sm ${p.featured ? "text-cream/70" : "text-muted-foreground"}`}
              >
                {p.age}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  p.featured ? "text-cream/85" : "text-foreground/75"
                }`}
              >
                {p.desc}
              </p>
              <ul className="mt-6 space-y-2 text-sm flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <Check
                      className={`h-4 w-4 mt-0.5 shrink-0 ${
                        p.featured ? "text-primary" : "text-primary"
                      }`}
                    />
                    <span className={p.featured ? "text-cream/85" : "text-foreground/80"}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                  p.featured
                    ? "text-primary hover:text-cream"
                    : "text-primary hover:text-secondary"
                }`}
              >
                Enquire <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl mt-20 px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Personal & specialised coaching available.
          </h2>
          <p className="mt-4 text-muted-foreground">
            One-on-one sessions, bowling specialty workshops, and pre-tournament intensives —
            tailored to your goals. Reach out for custom packages.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            Talk to a coach <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
