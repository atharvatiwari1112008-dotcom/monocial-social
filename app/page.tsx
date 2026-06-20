"use client";

import { useState, type ReactNode } from "react";

type Card = {
  title: string;
  text: string;
  tag: string;
};

const features: Card[] = [
  {
    title: "Photo Posts",
    text: "Upload and share images in a clean feed.",
    tag: "visual",
  },
  {
    title: "Reels",
    text: "Short videos with a fast, simple layout.",
    tag: "motion",
  },
  {
    title: "Thoughts",
    text: "Quick text updates without clutter.",
    tag: "text",
  },
  {
    title: "Chat",
    text: "Private conversations later, after login.",
    tag: "private",
  },
];

const roadmap: Card[] = [
  {
    title: "Login",
    text: "Sign in with Google and create a session.",
    tag: ""
  },
  {
    title: "Profile",
    text: "Unique username, avatar, and bio.",
    tag: "",
  },
  {
    title: "Feed",
    text: "Show real posts from real users.",
    tag: "you are the one",
  },
];

const buildNotes = [
  "Simple Profiles",
  "Minimal design",
  "No clutter",
  "For people who want to share and connect without noise",
];

function MonocialMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="14"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path
        d="M16 20L32 36L48 20"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 20V44H28"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 20V44H36"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="40" r="4.5" fill="currentColor" />
    </svg>
  );
}

function BrandLogo() {
  const sources = ["/logo.jpeg", "/logo.png"] as const;
  const [step, setStep] = useState(0);

  if (step >= sources.length) {
    return <MonocialMark className="h-11 w-11 text-white" />;
  }

  return (
    <img
      src={sources[step]}
      alt="Monocial logo"
      className="h-11 w-11 rounded-2xl border border-white/10 bg-black object-cover"
      onError={() =>
        setStep((current) => Math.min(current + 1, sources.length))
      }
    />
  );
}

function Tag({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/55 ${className}`}
    >
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.35em] text-white/40">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
        {text}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <BrandLogo />
            <div>
              <div className="text-xl font-semibold tracking-tight">
                Monocial
              </div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Finally, a platform that listens.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden items-center gap-6 text-sm text-white/65 md:flex">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#inside" className="transition hover:text-white">
                Inside
              </a>
              <a href="#roadmap" className="transition hover:text-white">
                Roadmap
              </a>
            </div>

            <a
              href="/login"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-20">
        <div>
          <Tag>A new social experience</Tag>

          <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.92] sm:text-6xl md:text-7xl">
            Connect.
            <br />
            Share.
            <br />
            Discover.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Monocial keeps the first version clean and fun. No fake counts, no
            clutter, no noisy layout. Just a strong base for posts, reels,
            thoughts, profiles, and chat.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#features"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Explore
            </a>
            <a
              href="#inside"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              See inside
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Tag>Black & white</Tag>
            <Tag>Minimal</Tag>
            <Tag>Resume project</Tag>
            <Tag>Built from scratch</Tag>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BrandLogo />
              <div>
                <p className="text-sm font-semibold">Monocial</p>
                <p className="text-xs text-white/45">branding preview</p>
              </div>
            </div>

            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
              live
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {buildNotes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              current focus
            </p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Building the foundations of a simpler social experience.
              feed.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-8">
        <SectionTitle
          eyebrow="features"
          title="What Monocial will feature"
          text="The first version stays small and clear. Each block below is a real building block for the app, not a fake social feed."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {item.tag}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="inside" className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
          <SectionTitle
            eyebrow="inside the app"
            title="Real content will appear here"
            text="After login, this area becomes the actual product: feed, profile, post composer, reels, and trending sections built from live data."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                feed
              </p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Posts from real users, not placeholder cards.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                trending
              </p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Trends created by actual content, not fake text.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                messages
              </p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Private chat and notifications after the basic app works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-6xl px-6 py-8">
        <SectionTitle
          eyebrow="roadmap"
          title="Build path"
          text="A small, clean roadmap keeps the project real. The goal is a working app, then improvements, then features."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {roadmap.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {item.tag}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap gap-3 text-sm text-white/45">
          <Tag>simple</Tag>
          <Tag>fun</Tag>
          <Tag>minimal</Tag>
          <Tag>black & white</Tag>
          <Tag>real data later</Tag>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Monocial. Built by Atharva.</p>
          <p>Monocial • Built with simplicity in mind.</p>
        </div>
      </footer>
    </main>
  );
}