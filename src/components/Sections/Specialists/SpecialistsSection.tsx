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
            <div className="mx-auto w-full max-w-345">
                {/* Header */}
                <header className="mx-auto max-w-280 text-center">
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
                            bg-(--specialists-section-eyebrow-bg)
                            px-5
                            text-[13px]
                            font-semibold
                            uppercase
                            tracking-[-1%]
                            text-(--specialists-section-eyebrow-text)
                            sm:text-[15px]
                        "
                    >
                        <Users
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.9}
                        />
                        <span>Mentors</span>
                    </div>

                    {/* Desktop heading */}
                    <h2
                        className="
                            mt-4
                            hidden
                            text-[clamp(2.5rem,6vw,3.75rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--specialists-section-title-text)
                            lg:block
                        "
                    >
                        Who Teaches

                        <span className="block text-(--specialists-section-title-highlight)">
                            What
                        </span>
                    </h2>

                    {/* Mobile / tablet heading */}
                    <h2
                        className="
                            mt-4
                            text-[clamp(2.5rem,7.5vw,3.75rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--specialists-section-title-text)
                            lg:hidden
                        "
                    >
                        Who Teaches

                        <span className="block text-(--specialists-section-title-highlight)">
                            What
                        </span>
                    </h2>

                    {/* Subtitle */}
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
                            lg:text-[19px]
                        "
                    >
                        System design, AI workflows, mock interviews, and
                        capstone reviews are each led by someone who focuses
                        on that part.
                    </p>
                </header>

                {/* Desktop board: sidebar + mentor cards + feature strip */}
                <div className="hidden lg:block">
                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-[240px_minmax(0,1fr)]
                            divide-x
                            divide-(--specialists-sidebar-divider)
                            rounded-2xl
                            border
                            border-(--specialist-card-border)
                            bg-(--specialist-card-bg)
                        "
                    >
                        <div className="p-6">
                            <MentorshipSystemPanel />
                        </div>

                        <div className="grid grid-cols-5 gap-3 p-5">
                            {specialists.map((specialist) => (
                                <SpecialistCard
                                    key={specialist.name}
                                    specialist={specialist}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <SpecialistsFeatureStrip />
                    </div>
                </div>

                {/* Mobile / tablet board: mentor rows + feature strip */}
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

                {/* Desktop CTA */}
                <div className="mt-8 hidden justify-center gap-3 lg:flex">
                    <Link
                        href="#specialists"
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
                        <span>Meet the Mentor Panel</span>
                    </Link>

                    <a
                        href="/documents/ai-engineering-curriculum.pdf"
                        download
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
                        <Download
                            aria-hidden="true"
                            className="h-5 w-5"
                            strokeWidth={1.9}
                        />
                        <span>Download Curriculum</span>
                    </a>
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
