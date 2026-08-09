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
                lg:py-20
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-345">
                {/* Header */}
                <header className="mx-auto max-w-260 text-center">
                    <div
                        className="
                            inline-flex
                            min-h-9.5
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-(--color-brand-200)
                            bg-(--program-glance-eyebrow-bg)
                            px-5
                            text-[13px]
                            font-semibold
                            uppercase
                            tracking-[-1%]
                            text-(--program-glance-eyebrow-text)
                            sm:text-[15px]
                        "
                    >
                        <CalendarCheck
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.9}
                        />
                        <span>Program Snapshot</span>
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
                        The Program at a Glance
                    </h2>

                    {/* Mobile / tablet heading */}
                    <h2
                        className="
                            mt-4
                            text-[clamp(2.5rem,7.5vw,3.75rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--program-glance-section-title-text)
                            lg:hidden
                        "
                    >
                        Program at a Glance
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

                    <div className="mt-8 flex justify-center gap-3">
                        <Link
                            href="#build-proof"
                            className="
                                group
                                inline-flex
                                min-h-14
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
                                hover:-translate-y-0.5
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
                            <span>View Full Curriculum</span>
                        </Link>

                        <Link
                            href="#program-glance"
                            className="
                                inline-flex
                                min-h-14
                                items-center
                                justify-center
                                gap-3
                                rounded-lg
                                border
                                border-(--color-brand-300)
                                bg-white
                                px-7
                                text-center
                                text-[16px]
                                font-semibold
                                text-(--color-brand-700)
                                transition-colors
                                hover:bg-(--color-brand-50)
                                focus-visible:outline-none
                                focus-visible:ring-4
                                focus-visible:ring-(--focus-ring-color)
                            "
                        >
                            <CalendarCheck
                                aria-hidden="true"
                                className="h-5 w-5"
                                strokeWidth={1.9}
                            />
                            <span>Subscribe for Updates</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile / tablet board */}
                <div className="mt-8 lg:hidden">
                    <MobileProgramOverviewPanel />

                    <div className="mt-5 grid grid-cols-2 gap-3">
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
                            <span>View Full Curriculum</span>
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
