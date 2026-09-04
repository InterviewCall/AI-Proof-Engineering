import { ArrowRight, CircleArrowRight, Download, Users } from 'lucide-react'; 
import Link from 'next/link'; 
import { FC } from 'react';

import { mobileSpecialists, specialists } from '@/utils/specialistsItems';

import MentorshipSystemPanel from './MentorshipSystemPanel';
import MobileMentorRow from './MobileMentorRow';
import MobileSpecialistsFeatureStrip from './MobileSpecialistsFeatureStrip';
import SpecialistCard from './SpecialistCard';
import SpecialistsFeatureStrip from './SpecialistsFeatureStrip';

const SpecialistsSection: FC = () => {
    return (
        <section
            id="specialists"
            className="
                scroll-mt-25
                px-4
                py-14
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-20
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-[1540px]">
                {/* Header */}
                <header className="mx-auto max-w-280 text-center">
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
                            text-(--specialists-section-eyebrow-text)
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

                        <span>Mentors</span>
                    </div>

                    <h2
                        className="
                            mt-4
                            whitespace-nowrap
                            text-[clamp(1.75rem,5vw,3.125rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--specialists-section-title-text)
                        "
                    >
                        Who Teaches{' '}
                        <span className="text-(--specialists-section-title-highlight)">
                            What
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-220
                            text-[16px]
                            font-medium
                            leading-[1.5]
                            text-(--specialists-section-subtitle-text)
                            sm:text-[19px]
                        "
                    >
                        System design, AI workflows, mock interviews, and
                        capstone reviews are each led by someone who focuses
                        on that part.
                    </p>
                </header>

                {/* Desktop */}
                <div className="hidden lg:block">
                    {/* Main mentorship board */}
                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-[330px_minmax(0,1fr)]
                            items-start
                            divide-x
                            divide-(--specialists-sidebar-divider)
                            rounded-2xl
                            border
                            border-(--specialist-card-border)
                            bg-(--specialist-card-bg)
                        "
                    >
                        {/* Sidebar */}
                        <div className="min-w-0 p-5">
                            <MentorshipSystemPanel />
                        </div>

                        {/* Mentor cards */}
                        <div
                            className="
                                grid
                                grid-cols-5
                                items-start
                                gap-3
                                p-5
                            "
                        >
                            {specialists.map((specialist) => (
                                <SpecialistCard
                                    key={specialist.name}
                                    specialist={specialist}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Feature strip */}
                    <div className="mt-5">
                        <SpecialistsFeatureStrip />
                    </div>

                    {/* Desktop CTA */}
                    <div className="mx-auto mt-5 grid max-w-[735px] gap-2.5 lg:mt-6 lg:grid-cols-[1.2fr_1fr] lg:gap-2">
                        <Link
                            href="#specialists"
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
                                lg:w-[90%]
                                lg:justify-self-start
                                lg:gap-1
                                lg:px-6
                                lg:text-[20px]
                            "
                        >
                            <CircleArrowRight
                                aria-hidden="true"
                                className="h-5 w-5 lg:h-7 lg:w-7"
                                strokeWidth={1.9}
                            />

                            <span>Meet the Mentor Panel</span>
                        </Link>

                        <a
                            href="/documents/ai-engineering-curriculum.pdf"
                            download
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
                            "
                        >
                            <Download
                                aria-hidden="true"
                                className="h-5 w-5 lg:h-7 lg:w-7"
                                strokeWidth={1.9}
                            />

                            <span>Download Curriculum</span>
                        </a>
                    </div>
                </div>

                {/* Mobile / tablet */}
                <div className="mt-10 lg:hidden">
                    <span
                        className="
                            text-[13px]
                            font-bold
                            uppercase
                            tracking-[0.04em]
                            text-(--specialists-sidebar-eyebrow-text)
                        "
                    >
                        Mentor Specialists
                    </span>

                    <div className="mt-4 space-y-3">
                        {mobileSpecialists.map((specialist) => (
                            <MobileMentorRow
                                key={specialist.title}
                                specialist={specialist}
                            />
                        ))}
                    </div>

                    <div className="mt-6">
                        <MobileSpecialistsFeatureStrip />
                    </div>
                </div>

                {/* Mobile / tablet CTA */}
                <div className="mt-8 flex flex-col items-center gap-4 lg:hidden">
                    <Link
                        href="#specialists"
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
                            sm:w-auto
                            sm:px-10
                        "
                    >
                        <CircleArrowRight
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.9}
                        />

                        <span>Meet the Mentor Panel</span>
                    </Link>

                    <a
                        href="/documents/ai-engineering-curriculum.pdf"
                        download
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
                        <span>Download Curriculum</span>

                        <ArrowRight
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={2}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SpecialistsSection;