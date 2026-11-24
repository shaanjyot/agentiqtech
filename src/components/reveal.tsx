"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "-8% 0px -12% 0px", threshold: 0.08 },
  );
  return observer;
}

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = getObserver();
    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
