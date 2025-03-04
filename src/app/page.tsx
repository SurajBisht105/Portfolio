import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import Footer from "@/components/Footer";
import ContactCard from '@/components/ContactCard';


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      {/* <UpcomingWebinar/> */}
      <Instructors/>
      <FeaturedCourses/>
      <MusicSchoolTestimonialCards />
      <ContactCard/>
      {/* <WhyChooseUs /> */}
      <Footer/>
      
    </main>
  );
}
