import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Benefits from "@/components/benefits";
import PhotoGallery from "@/components/photo-gallery";

export default function Home() {
  return (
    <>
      <Hero />

      <Benefits />

      <Services />

      <About />

      <PhotoGallery />

    </>
  );
}
