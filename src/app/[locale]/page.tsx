import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Subjects from "@/components/sections/Subjects";
import Classes from "@/components/sections/Classes";
import Admission from "@/components/sections/Admission";
import Leadership from "@/components/sections/Leadership";
import Activities from "@/components/sections/Activities";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <About />
      <Subjects />
      <Classes />
      <Admission />
      <Leadership />
      <Activities />
      <Testimonials />
      <Location />
      <Contact />
    </main>
  );
}
