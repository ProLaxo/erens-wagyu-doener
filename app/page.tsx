import Image from "next/image";

import { ScrollSequence } from "@/components/scroll-sequence";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-clip bg-sequence text-white">
      <section className="relative isolate flex min-h-[96vh] flex-col justify-between overflow-hidden px-5 pb-8 pt-6 sm:px-8 lg:px-12">
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
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#08080a_0%,rgba(8,8,10,0.28)_28%,rgba(8,8,10,0.28)_72%,#08080a_100%),linear-gradient(180deg,rgba(8,8,10,0.54)_0%,rgba(8,8,10,0.22)_44%,#08080a_100%),radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.07),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(208,110,54,0.18),transparent_32%)]"
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
      </footer>
    </main>
  );
}
