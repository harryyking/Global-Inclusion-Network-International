import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import EventsCarousel from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import TeamShowcase from "@/components/Team"
import Volunteer from "@/components/Volunteer";

export default function Home() {
  return (
    <>
     
      <Hero/>
      <AboutUs/>
      <MissionVision/>
      <TeamShowcase/>
      <Testimonials/>
      <EventsCarousel/>
      <Volunteer/>
    </>
  );
}
