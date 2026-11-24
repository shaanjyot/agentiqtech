import { Ambient } from "@/components/ambient";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { Product } from "@/components/sections/product";
import { Agents } from "@/components/sections/agents";
import { Apps } from "@/components/sections/apps";
import { Platform } from "@/components/sections/platform";
import { Trust } from "@/components/sections/trust";
import { Team } from "@/components/sections/team";
import { Contact, Footer } from "@/components/sections/contact";

const stats = [
  { k: "17", l: "dashboard sections" },
  { k: "4", l: "apps on one record" },
  { k: "4", l: "citizen languages" },
  { k: "6", l: "governed roles" },
];

function Stats() {
  return (
    <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.l} className="bg-panel px-4 py-4 text-center backdrop-blur-sm">
          <p className="text-2xl font-semibold tracking-tight text-ink-2">{s.k}</p>
          <p className="mt-0.5 text-[10.5px] text-mist">{s.l}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative">
      <Ambient />
      <Nav />
      <main>
        <Hero>
          <Stats />
        </Hero>
        <Product />
        <Agents />
        <Apps />
        <Platform />
        <Trust />
        <Team />
        <Reveal className="mx-auto max-w-7xl px-5 sm:px-8">
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
