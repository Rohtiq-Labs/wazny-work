import SiteFooter from "@/components/layout/SiteFooter";
import SiteNav from "@/components/layout/SiteNav";
import BookingCtaSection from "@/components/sections/BookingCtaSection/BookingCtaSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection/ServiceAreaSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection/ShowcaseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";
import ScrollRevealInit from "@/components/shared/ScrollRevealInit";

const HomePage = () => (
  <>
    <SiteNav />
    <HeroSection />
    <ServicesSection />
    <ShowcaseSection />
    <TestimonialsSection />
    <ServiceAreaSection />
    <ContactSection />
    <BookingCtaSection />
    <SiteFooter />
    <ScrollRevealInit />
  </>
);

export default HomePage;
