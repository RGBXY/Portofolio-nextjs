import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="h-[1000vh] dark:bg-black dark:text-white">
      <Hero />
      <div className="relative w-full px-6 md:px-16">
        <FloatingNav navItems={navItems} />
      </div>
    </main>
  );
}
