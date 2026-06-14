import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Macushla Cricket Academy — Premier Cricket Coaching, HSR Layout Bengaluru" },
      {
        name: "description",
        content:
          "Macushla Cricket Academy by Shivil Kaushik. Professional cricket coaching for all ages in HSR Layout, Bengaluru. Turf nets, expert coaches, structured programs.",
      },
      { name: "author", content: "Macushla Cricket Academy" },
      { property: "og:title", content: "Macushla Cricket Academy — Premier Cricket Coaching, HSR Layout Bengaluru" },
      {
        property: "og:description",
        content: "Premier cricket coaching academy in HSR Layout, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Macushla Cricket Academy — Premier Cricket Coaching, HSR Layout Bengaluru" },
      { name: "description", content: "Macushla Cricket Hub is a website for Macushla Cricket Academy, showcasing its programs and facilities." },
      { property: "og:description", content: "Macushla Cricket Hub is a website for Macushla Cricket Academy, showcasing its programs and facilities." },
      { name: "twitter:description", content: "Macushla Cricket Hub is a website for Macushla Cricket Academy, showcasing its programs and facilities." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46daf4f9-6b49-4cbd-8572-94368e101ad3/id-preview-f2247895--95b18e4c-5013-43b5-a96a-79b278d91b65.lovable.app-1781404315052.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46daf4f9-6b49-4cbd-8572-94368e101ad3/id-preview-f2247895--95b18e4c-5013-43b5-a96a-79b278d91b65.lovable.app-1781404315052.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
