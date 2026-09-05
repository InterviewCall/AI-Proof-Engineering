'use client';

import { FC, useState } from 'react';
import { Users } from 'lucide-react';
import { alumniStories } from '@/utils/alumniItems';
import { type AlumniStory } from '@/types/alumni';

import AlumniCompanyBar from './AlumniCompanyBar';
import AlumniCtaBar from './AlumniCtaBar';
import AlumniMiniCard from './AlumniMiniCard';
import FeaturedAlumniCard from './FeaturedAlumniCard';
import AlumniMobileCarousel from './AlumniMobileCarousel';

const AlumniSection: FC = () => {
    const [selectedAlumni, setSelectedAlumni] = useState<AlumniStory>(
        alumniStories[0], // Ananya Iyer is default
    );

    return (
        <section
            id="alumni"
            className="
                scroll-mt-25
                bg-(--alumni-section-bg)
                px-4
                py-14
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-20
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-370">
                {/* Header */}
                <header className="mx-auto max-w-220 text-center">
                    <p
                        className="
                            mx-auto
                            flex
                            w-fit
                            min-h-10
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-[#AFC7FF]
                            bg-[#EEF4FF]
                            px-6
                            text-[clamp(0.875rem,1.1vw,1.0625rem)]
                            font-semibold
                            uppercase
                            tracking-[0.015em]
                            text-(--career-insights-section-eyebrow-text)
                            shadow-[0_7px_14px_rgba(1,17,57,0.18)]
                            ring-1
                            ring-[#a9c3fc]
                        "
                    >
                        <Users
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.9}
                        />
                        Alumni &amp; Career Journeys
                    </p>

                    <span className="mx-auto mt-2 block h-1 w-10 rounded-full bg-(--alumni-section-eyebrow-underline)" />

                    <h2
                        className="
                            mt-4
                            text-[clamp(2.25rem,6.5vw,3.25rem)]
                            font-bold
                            leading-[1.1]
                            tracking-[-2%]
                            text-(--alumni-section-title-text)
                            lg:whitespace-nowrap
                        "
                    >
                        Real Engineers. Real Career{" "} 
                        <span className="text-(--progress-section-title-highlight)">
                            Journeys
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-175
                            text-[16px]
                            font-medium
                            leading-[1.5]
                            text-(--alumni-section-subtitle-text)
                            sm:text-[18px]
                        "
                    >
                        Verified stories from InterviewCall learners across
                        different experience levels and engineering
                        backgrounds.
                    </p>
                </header>

                {/* Featured + mini cards */}
                <div
                    className="
                        mt-10
                        hidden
                        items-stretch
                        gap-5
                        sm:grid
                        sm:grid-cols-3
                        lg:grid-cols-[minmax(0,3fr)_repeat(3,minmax(0,1fr))]
                    "
                >
                    <div className="sm:col-span-3 lg:col-span-1 h-full">
                        <FeaturedAlumniCard story={selectedAlumni} />
                    </div>

                    {alumniStories.map((story) => (
                        <AlumniMiniCard
                            key={story.name}
                            story={story}
                            isSelected={story.name === selectedAlumni.name}
                            onSelect={() => setSelectedAlumni(story)}
                        />
                    ))}
                </div>

                {/* Mobile-only layout */}
                <div className="mt-10 sm:hidden">
                    <FeaturedAlumniCard story={selectedAlumni} />

                    <h3
                        className="
                            mt-8
                            text-center
                            text-[18px]
                            font-bold
                            text-(--alumni-section-title-text)
                        "
                    >
                        More Alumni Journeys
                    </h3>

                    <div className="mt-4">
                        <AlumniMobileCarousel
    stories={alumniStories}
    selectedAlumni={selectedAlumni}
    onSelect={setSelectedAlumni}
/>
                    </div>
                </div>


                <AlumniCompanyBar />

                <AlumniCtaBar />
            </div>
        </section>
    );
};

export default AlumniSection;