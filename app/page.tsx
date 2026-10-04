import Header from "@/component/header";
import Hero from "@/component/hero";
import Program from "@/component/program";
import AlurPeserta from "@/component/alurpeserta";
import Why from "@/component/why";
import Gallery from "@/component/gallery";
import Lokasi from "@/component/lokasi";
import Contact from "@/component/contact";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Program />
      <AlurPeserta />
      <Why />
      <Gallery />
      <Lokasi />
      <Contact />
      <Footer />
    </>
  );
}
