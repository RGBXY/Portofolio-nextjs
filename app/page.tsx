import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/Navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className=" dark:bg-black dark:text-white">
      <div className="relative w-full px-6 md:px-16">
        <FloatingNav navItems={navItems} />
      </div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Footer />
    </main>
  );
}
