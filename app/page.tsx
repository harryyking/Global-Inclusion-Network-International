import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import EventsCarousel from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <MissionVision/>
      <Testimonials/>
      <EventsCarousel/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
