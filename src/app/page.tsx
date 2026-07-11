import AssessmentBanner from '@/components/AssessmentBanner/AssessmentBanner';
import Navbar from '@/components/Navbar/Navbar';
import CareerPathSection from '@/components/Sections/CareerPath/CareerPathSection';
import GuidedSystemSection from '@/components/Sections/GuidedSystem/GuidedSystemSection';
import HeroSection from '@/components/Sections/Hero/HeroSection';
import SolutionSection from '@/components/Sections/Solution/SolutionSection';
import StructuredJourneySection from '@/components/Sections/StructuredJourney/StructuredJourneySection';
import WhyNowSection from '@/components/Sections/WhyNow/WhyNowSection';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AssessmentBanner />
        <WhyNowSection />
        <SolutionSection />
        <CareerPathSection />
        <StructuredJourneySection />
        <GuidedSystemSection />
      </main>
    </div>
  );
}