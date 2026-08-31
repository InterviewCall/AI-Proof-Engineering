import { FC } from 'react';

import { alumniMiniStories } from '@/utils/alumniItems';

import AlumniCompanyBar from './AlumniCompanyBar';
import AlumniCtaBar from './AlumniCtaBar';
import AlumniMiniCard from './AlumniMiniCard';
import FeaturedAlumniCard from './FeaturedAlumniCard';

const AlumniSection: FC = () => {
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
            <div className="mx-auto w-full max-w-345">
                {/* Header */}
                <header className="mx-auto max-w-220 text-center">
                    <p
                        className="
                            text-[13px]
                            font-bold
                            uppercase
                            tracking-[0.08em]
                            text-(--alumni-section-eyebrow-text)
                            sm:text-[14px]
                        "
                    >
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
                        "
                    >
                        Real Engineers. Real Career Journeys.
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
                        grid
                        grid-cols-1
                        items-stretch
                        gap-5
                        sm:grid-cols-3
                        lg:grid-cols-[minmax(0,2.3fr)_repeat(3,minmax(0,1fr))]
                        lg:items-start
                    "
                >
                    <div className="sm:col-span-3 lg:col-span-1">
                        <FeaturedAlumniCard />
                    </div>

                    {alumniMiniStories.map((story) => (
                        <AlumniMiniCard key={story.name} story={story} />
                    ))}
                </div>

                <AlumniCompanyBar />

                <AlumniCtaBar />
            </div>
        </section>
    );
};

export default AlumniSection;
