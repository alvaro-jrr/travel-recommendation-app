import { DestinationsCarousel } from "../components/destinations-carousel";
import { Features } from "../components/features";
import { Hero } from "../components/hero";
import { NavBar } from "../components/navbar";

export function HomePage() {
  return (
    <div className="min-h-svh">
      <NavBar className="py-3.5" />

      <main className="w-full px-6">
        <Hero className="py-24" />

        <DestinationsCarousel />

        <Features className="py-24" />
      </main>
    </div>
  );
}
