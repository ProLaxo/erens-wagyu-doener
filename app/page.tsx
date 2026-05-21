import Image from "next/image";

import { ScrollSequence } from "@/components/scroll-sequence";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ingredients = [
  {
    body: "Knusprig angeröstet, damit der Saft bleibt und jeder Biss Struktur hat.",
    title: "Ofenwarmes Brot",
  },
  {
    body: "Tomate, Gurke und fein geschnittener Eisbergsalat für kalte Frische.",
    title: "Frische",
  },
  {
    body: "Rotkohl, Petersilie und Zwiebel mit Sumach für Säure und Tiefe.",
    title: "Aromatik",
  },
  {
    body: "Cremige Kräuterbasis, Knoblauch und Chili als klarer letzter Zug.",
    title: "Saucen",
  },
];

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-clip bg-sequence text-white">
      <section className="relative isolate flex min-h-[96vh] flex-col justify-between overflow-hidden px-5 pb-8 pt-6 sm:px-8 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[-10%] scale-125 opacity-55 blur-3xl"
        >
          <Image
            alt=""
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
            src={`${basePath}/sequence/ezgif-frame-001.jpg`}
          />
        </div>
        <div
          aria-hidden="true"
          className="hero-frame pointer-events-none absolute inset-0 opacity-55"
        >
          <Image
            alt=""
            className="object-contain object-center"
            fill
            priority
            sizes="100vw"
            src={`${basePath}/sequence/ezgif-frame-001.jpg`}
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,12,15,0.94)_0%,rgba(7,12,15,0.22)_28%,rgba(7,12,15,0.22)_72%,rgba(7,12,15,0.94)_100%),linear-gradient(180deg,rgba(7,12,15,0.68)_0%,rgba(7,12,15,0.18)_44%,#070c0f_100%),radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(208,110,54,0.18),transparent_34%)]"
        />

        <header className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-5 text-sm text-white/60">
          <p className="text-white/90">Erens Wagyu Döner</p>
          <p>Herten</p>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center pb-16 pt-20 text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.22em] text-white/45">
            Pasture-raised Wagyu, wood-fired finish
          </p>
          <h1 className="max-w-6xl text-balance text-[clamp(3.2rem,10vw,10.5rem)] font-medium leading-[0.88] tracking-[0] text-white/90">
            Erens Wagyu Döner
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-7 text-white/60 sm:text-lg">
            Marmoriertes Wagyu trifft Feuer, Ruhe und präzise Hitze. Scroll
            durch den Spieß, bevor er in Herten serviert wird.
          </p>
        </div>

        <div className="relative z-10 flex items-end justify-between gap-4 text-sm text-white/60">
          <p className="max-w-52">Premium Döner, langsam aufgebaut.</p>
          <a
            className="group inline-flex items-center gap-3 text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="#sequence"
          >
            Scroll to Explore
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-transform duration-500 group-hover:translate-y-1"
            >
              &darr;
            </span>
          </a>
        </div>
      </section>

      <ScrollSequence />

      <section className="relative isolate overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(236,139,67,0.18),transparent_32%),linear-gradient(180deg,rgba(7,12,15,0)_0%,rgba(7,12,15,0.92)_18%,#070c0f_100%)]"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm uppercase tracking-[0.22em] text-white/45">
                Der Aufbau
              </p>
              <h2 className="text-balance text-[clamp(2.35rem,4.8vw,5.6rem)] font-medium leading-[0.94] tracking-[0] text-white/90">
                Klassische Döner-Zutaten, auf Wagyu-Niveau geführt.
              </h2>
            </div>
            <p className="max-w-xl text-pretty text-base leading-7 text-white/60 sm:text-lg lg:justify-self-end">
              Der Spieß bleibt der Mittelpunkt. Brot, Gemüse, Kräuter und
              Saucen setzen Frische, Säure und Schärfe so präzise, dass das
              Wagyu nicht überdeckt wird.
            </p>
          </div>

          <div className="mt-14 grid border-y border-white/10 md:grid-cols-2 xl:grid-cols-4">
            {ingredients.map((ingredient) => (
              <article
                className="min-h-56 border-b border-white/10 px-0 py-8 md:px-7 md:[&:nth-last-child(-n+2)]:border-b-0 xl:min-h-72 xl:border-b-0 xl:border-r xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0"
                key={ingredient.title}
              >
                <h3 className="text-2xl font-medium tracking-[0] text-white/90">
                  {ingredient.title}
                </h3>
                <p className="mt-5 max-w-xs leading-7 text-white/60">
                  {ingredient.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative isolate overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,139,67,0.22),transparent_32%)]"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 border-t border-white/10 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-white/45">
              Herten, served hot
            </p>
            <h2 className="text-balance text-[clamp(2.25rem,6vw,6.5rem)] font-medium leading-[0.94] tracking-[0] text-white/90">
              Wagyu am Spieß. Döner ohne Kompromiss.
            </h2>
          </div>

          <a
            className="inline-flex min-h-14 items-center justify-center border border-white bg-white px-7 text-base font-medium text-black transition-colors hover:bg-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="#sequence"
          >
            Spieß erleben
          </a>
        </div>

        <div className="relative mx-auto mt-20 flex max-w-6xl flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Erens Wagyu Döner</p>
          <nav
            aria-label="Platzhalter für rechtliche und soziale Links"
            className="flex flex-wrap gap-x-7 gap-y-3 uppercase tracking-[0.18em]"
          >
            <span>Impressum</span>
            <span>Standort</span>
            <span>Instagram</span>
          </nav>
        </div>
      </footer>
    </main>
  );
}
