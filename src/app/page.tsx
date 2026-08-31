import AssessmentBanner from '@/components/AssessmentBanner/AssessmentBanner';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import AlumniSection from '@/components/Sections/Alumni/AlumniSection';
import BuildProofSection from '@/components/Sections/BuildProof/BuildProofSection';
import CapstoneProofSection from '@/components/Sections/CapstoneProof/CapstoneProofSection';
import CareerInsightsSection from '@/components/Sections/CareerInsights/CareerInsightsSection';
import CareerPathSection from '@/components/Sections/CareerPath/CareerPathSection';
import EcosystemSection from '@/components/Sections/Ecosystem/EcosystemSection';
import FaqSection from '@/components/Sections/Faq/FaqSection';
import GuidedSystemSection from '@/components/Sections/GuidedSystem/GuidedSystemSection';
import HeroSection from '@/components/Sections/Hero/HeroSection';
import PracticeSystemSection from '@/components/Sections/PracticeSystem/PracticeSystemSection';
import ProgramGlanceSection from '@/components/Sections/ProgramGlance/ProgramGlanceSection';
import RealProgressSection from '@/components/Sections/RealProgress/RealProgressSection';
import SolutionSection from '@/components/Sections/Solution/SolutionSection';
import SpecialistsSection from '@/components/Sections/Specialists/SpecialistsSection';
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
                <PracticeSystemSection />
                <CapstoneProofSection />
                <SpecialistsSection />
                <RealProgressSection />
                <AlumniSection />
                <CareerInsightsSection />
                <ProgramGlanceSection />
                <BuildProofSection />
                <EcosystemSection />
                <FaqSection />
            </main>
            <Footer />
        </div>
    );
}
