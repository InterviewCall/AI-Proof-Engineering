import { ArrowRight, CalendarCheck, CircleArrowRight, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { glanceInfoCards, mobileGlanceInfoCards } from '@/utils/programGlanceItems';

import MobileProgramInfoCard from './MobileProgramInfoCard';
import MobileProgramOverviewPanel from './MobileProgramOverviewPanel';
import ProgramAudienceBand from './ProgramAudienceBand';
import ProgramInfoCard from './ProgramInfoCard';
import ProgramOverviewPanel from './ProgramOverviewPanel';

const ProgramGlanceSection: FC = () => {
    return (
        <section
            id="program-glance"
            className="
                scroll-mt-25
                bg-(--program-glance-section-bg)
                px-4
                py-14
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-25
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-370">
                {/* Header */}
                <header className="mx-auto max-w-260 text-center">
                    <div
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
                            text-(--program-glance-eyebrow-text)
                            shadow-[0_7px_14px_rgba(1,17,57,0.18)]
                            ring-1
                            ring-[#a9c3fc]
                        "
                    >
                        <CalendarCheck
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.9}
                        />
                        <span>
                            Program at a <span className="text-[#0840FD]">Glance</span>
                        </span>
                    </div>

                    {/* Desktop heading */}
                    <h2
                        className="
                            mt-4
                            hidden
                            text-[clamp(2.5rem,7.5vw,3.75rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--program-glance-section-title-text)
                            lg:block
                        "
                    >
                        The Program at a <span className="text-[#0840FD]">Glance</span>
                    </h2>

                    {/* Mobile / tablet heading */}
                    <h2
                        className="
                            mt-4
                            whitespace-nowrap
                            text-[clamp(2rem,6vw,3.75rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--program-glance-section-title-text)
                            lg:hidden
                        "
                    >
                        Program at a <span className="text-[#0840FD]">Glance</span>
                    </h2>

                    {/* Desktop subtitle */}
                    <p
                        className="
                            mx-auto
                            mt-4
                            hidden
                            max-w-220
                            text-[16px]
                            font-medium
                            leading-[1.5]
                            text-(--program-glance-section-subtitle-text)
                            lg:block
                            lg:text-[19px]
                        "
                    >
                        A structured AI-era engineering program built around
                        curriculum depth, live practice, reviews, mocks,
                        capstone proof, and career readiness.
                    </p>

                    {/* Mobile / tablet subtitle */}
                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-190
                            text-[16px]
                            font-medium
                            leading-[1.5]
                            text-(--program-glance-section-subtitle-text)
                            sm:text-[19px]
                            lg:hidden
                        "
                    >
                        A structured program built around curriculum,
                        practice, reviews, mocks, capstone proof, and career
                        readiness.
                    </p>
                </header>

                {/* Desktop board */}
                <div className="hidden lg:block">
                    <div className="mt-8 grid grid-cols-2 gap-5">
                        <ProgramOverviewPanel />

                        <div className="grid grid-cols-3 gap-4">
                            {glanceInfoCards.map((card) => (
                                <ProgramInfoCard key={card.title} card={card} />
                            ))}
                        </div>
                    </div>

                    <div className="mt-5">
                        <ProgramAudienceBand />
                    </div>

                    <div className="mx-auto mt-5 grid max-w-[735px] gap-2.5 lg:mt-6 lg:grid-cols-[1.2fr_1fr] lg:gap-6">
                        <Link
                            href="#build-proof"
                            className="
                                group
                                inline-flex
                                min-h-11
                                w-full
                                items-center
                                justify-center
                                gap-2.5
                                rounded-lg
                                bg-(--button-primary-bg)
                                px-4
                                text-center
                                text-[14px]
                                font-semibold
                                text-(--button-primary-text)
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-(--button-primary-bg-hover)
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                                lg:min-h-16
                                lg:gap-4
                                lg:px-6
                                lg:text-[20px]
                                whitespace-nowrap
                            "
                        >
                            <CircleArrowRight
                                aria-hidden="true"
                                className="h-5 w-5 lg:h-7 lg:w-7"
                                strokeWidth={1.9}
                            />
                            <span>See Admissions &amp; Fee Guidance</span>
                        </Link>

                        <Link
                            href="#program-glance"
                            className="
                                inline-flex
                                min-h-11
                                w-full
                                items-center
                                justify-center
                                gap-2.5
                                rounded-lg
                                border
                                border-(--color-brand-300)
                                bg-white
                                px-4
                                text-center
                                text-[14px]
                                font-semibold
                                text-(--color-brand-700)
                                transition-colors
                                hover:bg-(--color-brand-50)
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                                lg:min-h-16
                                lg:gap-4
                                lg:px-6
                                lg:text-[20px]
                                whitespace-nowrap
                            "
                        >
                            <CalendarCheck
                                aria-hidden="true"
                                className="h-5 w-5 lg:h-7 lg:w-7"
                                strokeWidth={1.9}
                            />
                            <span>Subscribe for Updates</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile / tablet board */}
                <div className="mt-8 lg:hidden">
                    <MobileProgramOverviewPanel />

                    <div className="mt-5  grid grid-cols-2 gap-3">
                        {mobileGlanceInfoCards.map((card) => (
                            <MobileProgramInfoCard key={card.title} card={card} />
                        ))}
                    </div>

                    <div
                        className="
                            mt-5
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            bg-(--program-glance-pill-bg)
                            px-4
                            py-3.5
                            bg-[#F5F8FC]
                        "
                    >
                        <span
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-(--program-glance-audience-icon-bg)
                                text-(--program-glance-audience-icon-text)
                            "
                        >
                            <UsersRound
                                aria-hidden="true"
                                className="h-5 w-5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <p
                            className="
                                text-[14px]
                                font-semibold
                                leading-[1.4]
                                text-(--program-glance-audience-text)
                            "
                        >
                            Built for 0-2, 2-5, and 5+ YOE software engineers
                            adapting to AI-era expectations.
                        </p>
                    </div>

                    <div className="mt-5 flex flex-col items-center gap-4">
                        <Link
                            href="#build-proof"
                            className="
                                inline-flex
                                min-h-14
                                w-full
                                items-center
                                justify-center
                                gap-3
                                rounded-lg
                                bg-(--button-primary-bg)
                                px-7
                                text-center
                                text-[16px]
                                font-semibold
                                text-(--button-primary-text)
                                transition-all
                                duration-200
                                hover:bg-(--button-primary-bg-hover)
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                            "
                        >
                            <CircleArrowRight
                                aria-hidden="true"
                                className="h-5 w-5"
                                strokeWidth={1.9}
                            />
                            <span>See Admissions &amp; Fee Guidance</span>
                        </Link>

                        <Link
                            href="#program-glance"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                text-[15px]
                                font-semibold
                                text-(--color-brand-700)
                                transition-colors
                                hover:text-(--color-brand-800)
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                            "
                        >
                            <span>Book a Track Counselling Call</span>
                            <ArrowRight
                                aria-hidden="true"
                                className="h-4.5 w-4.5"
                                strokeWidth={2}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramGlanceSection;