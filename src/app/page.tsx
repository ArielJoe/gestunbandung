import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Reviews from "./components/Reviews";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CreditLogos from "./components/CreditLogos";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <CreditLogos />
      <div className="p-4 md:p-8">
        <About />
        <Advantages />
        <Reviews />
        <Locations />
      </div>
      <WhatsAppFloat />
      <Footer />
    </main>
  );
}
