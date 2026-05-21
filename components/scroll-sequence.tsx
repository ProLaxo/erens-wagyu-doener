"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 41;
const SEQUENCE_BACKGROUND = "#08080a";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Chapter = {
  body: string;
  end: number;
  start: number;
  title: string;
};

const chapters: Chapter[] = [
  {
    body: "Aus kontrollierter Aufzucht. Ruhig, reich und bewusst gewählt.",
    end: 0.36,
    start: 0.08,
    title: "Origin",
  },
  {
    body: "Wagyu-Marmorierung, sichtbar bevor das Messer den ersten Schnitt setzt.",
    end: 0.68,
    start: 0.34,
    title: "Premium Wagyu",
  },
  {
    body: "Holzfeuer baut Kruste, Rauch und den letzten warmen Zug auf.",
    end: 0.95,
    start: 0.66,
    title: "Wood-Fired",
  },
];

function getFramePath(index: number) {
  return `${basePath}/sequence/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;
}

function drawFrame(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
) {
  const rect = canvas.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(rect.width, 1);
  const height = Math.max(rect.height, 1);
  const nextWidth = Math.round(width * pixelRatio);
  const nextHeight = Math.round(height * pixelRatio);

  if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
    canvas.width = nextWidth;
    canvas.height = nextHeight;
  }

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.fillStyle = SEQUENCE_BACKGROUND;
  context.fillRect(0, 0, width, height);

  const imageRatio = image.naturalWidth / image.naturalHeight;
  const viewportRatio = width / height;
  const mobileFit = width < 760;
  const scale = mobileFit
    ? Math.max(width / image.naturalWidth, height / image.naturalHeight)
    : Math.min(width / image.naturalWidth, height / image.naturalHeight);
  const fallbackScale =
    viewportRatio > imageRatio
      ? height / image.naturalHeight
      : width / image.naturalWidth;
  const renderScale = Number.isFinite(scale) ? scale : fallbackScale;
  const renderWidth = image.naturalWidth * renderScale;
  const renderHeight = image.naturalHeight * renderScale;
  const x = (width - renderWidth) / 2;
  const y = (height - renderHeight) / 2;

  context.drawImage(image, x, y, renderWidth, renderHeight);
}

export function ScrollSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCache = useRef<HTMLImageElement[]>([]);
  const requestedFrame = useRef(0);
  const renderRequest = useRef<number | null>(null);
  const resizeFrame = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: sectionRef,
  });
  const sceneLift = useTransform(scrollYProgress, [0, 1], ["4vh", "-4vh"]);

  function renderFrame(index: number) {
    const canvas = canvasRef.current;
    const image = frameCache.current[index];

    if (!canvas || !image?.complete) {
      return;
    }

    const context = canvas.getContext("2d", { alpha: false });

    if (!context) {
      return;
    }

    drawFrame(canvas, context, image);
  }

  useEffect(() => {
    let active = true;
    const frames = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image();
      image.decoding = "async";
      image.fetchPriority = index === 0 ? "high" : "auto";
      image.addEventListener("load", () => {
        if (active && requestedFrame.current === index) {
          renderFrame(index);
        }
      });
      image.src = getFramePath(index);
      return image;
    });

    frameCache.current = frames;

    const firstFrame = frames[0];

    firstFrame
      .decode()
      .catch(() => undefined)
      .finally(() => {
        if (!active) {
          return;
        }

        setReady(true);
        renderFrame(0);
      });

    const onResize = () => {
      if (resizeFrame.current) {
        cancelAnimationFrame(resizeFrame.current);
      }

      resizeFrame.current = requestAnimationFrame(() => {
        renderFrame(requestedFrame.current);
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      active = false;
      window.removeEventListener("resize", onResize);

      if (resizeFrame.current) {
        cancelAnimationFrame(resizeFrame.current);
      }

      if (renderRequest.current) {
        cancelAnimationFrame(renderRequest.current);
      }
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frame = prefersReducedMotion
      ? 0
      : Math.min(FRAME_COUNT - 1, Math.round(latest * (FRAME_COUNT - 1)));

    if (requestedFrame.current === frame) {
      return;
    }

    requestedFrame.current = frame;

    if (renderRequest.current) {
      cancelAnimationFrame(renderRequest.current);
    }

    renderRequest.current = requestAnimationFrame(() => renderFrame(frame));
  });

  return (
    <section
      className="relative h-[420vh] bg-sequence"
      id="sequence"
      ref={sectionRef}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="sequence-frame absolute inset-0"
          style={{ y: prefersReducedMotion ? 0 : sceneLift }}
        >
          <canvas
            aria-label="Scroll animation of the Wagyu doener skewer rotating over fire."
            className="h-full w-full"
            ref={canvasRef}
            role="img"
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#08080a_0%,transparent_22%,transparent_78%,#08080a_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#08080a_0%,transparent_18%,transparent_78%,#08080a_100%)]"
        />

        <div className="pointer-events-none relative mx-auto h-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="absolute inset-x-5 top-7 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40 sm:inset-x-8 lg:inset-x-12">
            <p>Erens Wagyu Döner</p>
            <p>{ready ? "Skewer in motion" : "Loading sequence"}</p>
          </div>

          {chapters.map((chapter) => (
            <ChapterOverlay
              chapter={chapter}
              key={chapter.title}
              progress={scrollYProgress}
            />
          ))}

          <p className="absolute bottom-8 left-5 max-w-56 text-sm leading-6 text-white/50 sm:left-8 lg:left-12">
            Scroll weiter. Jeder Frame folgt deinem Tempo.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChapterOverlay({
  chapter,
  progress,
}: {
  chapter: Chapter;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(
    progress,
    [
      chapter.start,
      chapter.start + 0.08,
      chapter.end - 0.08,
      chapter.end,
    ],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    [chapter.start, chapter.end],
    ["10vh", "-8vh"],
  );

  return (
    <motion.article
      className="absolute left-5 top-[28%] max-w-[18rem] [text-shadow:0_12px_32px_rgba(0,0,0,0.92)] sm:left-8 sm:max-w-sm lg:left-auto lg:right-12 lg:top-[30%] lg:max-w-md"
      style={{ opacity, y }}
    >
      <h2 className="text-[clamp(2rem,5vw,5rem)] font-medium leading-none tracking-[0] text-white/90">
        {chapter.title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
        {chapter.body}
      </p>
    </motion.article>
  );
}
