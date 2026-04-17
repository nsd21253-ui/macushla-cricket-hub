import { createFileRoute } from "@tanstack/react-router";
import coachImg from "@/assets/coach-shivil.jpg";
import { Award, Flame, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Macushla Cricket Academy & Coach Shivil Kaushik" },
      {
        name: "description",
        content:
          "Meet Shivil Kaushik — India's left-arm chinaman bowler — and the story behind Macushla Cricket Academy in HSR Layout, Bengaluru.",
      },
      { property: "og:title", content: "About Macushla Cricket Academy" },
      {
        property: "og:description",
        content: "Founded by India's Shivil Kaushik. Building cricketers in HSR Layout, Bengaluru.",
      },
      { property: "og:image", content: coachImg },
      { name: "twitter:image", content: coachImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Our Story
          </span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance max-w-4xl">
            A house of cricket — built by a cricketer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/75">
            Macushla Cricket Academy was founded by Shivil Kaushik, the unorthodox left-arm
            chinaman bowler from Karnataka, with a single mission: give the next generation
            of Bengaluru's cricketers the coaching, infrastructure and exposure he wishes
            he'd had on his own journey.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-ball opacity-20 blur-2xl" />
            <img
              src={coachImg}
              alt="Coach Shivil Kaushik"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-2xl shadow-elegant"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              The Coach
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Shivil Kaushik</h2>
            <p className="mt-4 italic text-muted-foreground">
              Left-arm chinaman · Former Karnataka & IPL bowler · Head Coach
            </p>
            <p className="mt-6 leading-relaxed text-foreground/85">
              Born in Punjab and raised in Bangalore, Shivil rose through Karnataka's
              competitive cricket circuits with a bowling action so distinctive it drew
              comparisons to South Africa's Paul Adams — the famous "frog-in-a-blender."
              His IPL debut put him on the national map; today, he channels that
              experience into mentoring the next wave of cricketers at Macushla.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "10+", l: "Years pro" },
                { v: "IPL", l: "Experience" },
                { v: "₹0", l: "Trial fee" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-border bg-card p-4 text-center">
                  <div className="font-display text-2xl text-primary">{s.v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-balance max-w-2xl">
            What we stand for.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Flame,
                t: "Passion",
                d: "Cricket isn't a hobby here — it's a craft. Every drill matters, every session counts.",
              },
              {
                icon: Award,
                t: "Excellence",
                d: "World-class coaching standards, modern facilities, and uncompromising attention to fundamentals.",
              },
              {
                icon: Users,
                t: "Community",
                d: "A close-knit family of players, parents and coaches who lift each other up.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl bg-card p-8 border border-border">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
