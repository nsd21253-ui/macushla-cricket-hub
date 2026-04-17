import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Trial — Macushla Cricket Academy" },
      {
        name: "description",
        content:
          "Visit Macushla Cricket Academy at Jakkasandra Cross Rd, Sector 6, HSR Layout, Bengaluru. Book a free trial session today.",
      },
      { property: "og:title", content: "Contact — Macushla Cricket Academy" },
      {
        property: "og:description",
        content: "Book a trial, visit our HSR Layout facility, or get in touch with our coaches.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Contact
          </span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance max-w-3xl">
            Let's get you on the pitch.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/75">
            Drop us a line, give us a call, or just walk in. Your first trial session is on us.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl md:text-4xl">Book your free trial.</h2>
            <p className="mt-2 text-muted-foreground">
              Fill in your details and we'll confirm your slot within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-8">
                <h3 className="font-display text-2xl text-primary">Howzat! Got it.</h3>
                <p className="mt-2 text-foreground/80">
                  Thanks for reaching out. A coach will call you shortly to confirm your trial slot.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Player age" name="age" type="number" />
                  <SelectField
                    label="Program of interest"
                    name="program"
                    options={[
                      "Little Stars (5-8)",
                      "Junior Development (9-13)",
                      "Youth Performance (14-17)",
                      "Adult Cricket (18+)",
                      "Personal Coaching",
                    ]}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground/80">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us a bit about the player and your goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center rounded-md bg-primary px-8 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <InfoCard
              icon={MapPin}
              title="Visit Us"
              body="Jakkasandra Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102"
            />
            <InfoCard icon={Phone} title="Call" body="+91 80 XXXX XXXX" />
            <InfoCard icon={Mail} title="Email" body="hello@macushlacricket.in" />
            <InfoCard
              icon={Clock}
              title="Hours"
              body={
                <span className="block leading-relaxed">
                  Mon: 4 – 9 PM<br />
                  Tue – Fri: 7 – 10 PM<br />
                  Sat: 2 – 4, 6 – 9 PM<br />
                  Sun: 6 AM – 4 PM, 6 – 9 PM
                </span>
              }
            />

            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-display text-lg">Connect</h4>
              <div className="mt-3 space-y-2 text-sm">
                <a
                  href="https://www.instagram.com/macushlasports/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary"
                >
                  <Instagram className="h-4 w-4" /> @macushlasports
                </a>
                <a
                  href="https://playo.co/venues/hsr-layout-bengaluru/macushla-cricket-academy-by-shivil-kaushik-hsr-layout-bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" /> Book on Playo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
            <iframe
              title="Macushla Cricket Academy location"
              src="https://www.google.com/maps?q=Jakkasandra+Cross+Rd,+Sector+6,+HSR+Layout,+Bengaluru&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground/80">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground/80">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="" disabled>
          Choose a program
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof MapPin;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-display text-lg">{title}</h4>
          <div className="mt-1 text-sm text-muted-foreground">{body}</div>
        </div>
      </div>
    </div>
  );
}
