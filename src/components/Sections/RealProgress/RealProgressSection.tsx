import { CircleArrowRight, Download, Users } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { mobileProgressProofs, progressProofs } from '@/utils/realProgressItems';

import MobileProgressCard from './MobileProgressCard';
import MobileProgressFeatureStrip from './MobileProgressFeatureStrip';
import ProgressFeatureStrip from './ProgressFeatureStrip';
import ProgressProofCard from './ProgressProofCard';
import ProgressSidebarPanel from './ProgressSidebarPanel';

const RealProgressSection: FC = () => {
    return (
        <section
            id="real-progress"
            className="
                scroll-mt-25
                bg-(--progress-section-bg)
                px-4
                py-14
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-20
                xl:px-12
            "
        >
            <div className="mx-auto w-full max-w-1540">
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
                            bg-(--progress-section-eyebrow-bg)
                            px-5
                            text-[13px]
                            font-semibold
                            uppercase
                            tracking-[-1%]
                            text-(--progress-section-eyebrow-text)
                            sm:text-[15px]
                        "
                    >
                        <Users
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.9}
                        />
                        <span>Learner Proof</span>
                    </div>

                    {/* Desktop heading */}
                    <h2
                        className="
                            mt-4
                            hidden
                            text-[clamp(1.75rem,5vw,3.125rem)]
                            font-bold
                            whitespace-nowrap
                            leading-[1.06]
                            tracking-[-2%]
                            text-(--progress-section-title-text)
                            lg:block
                        "
                    >
                        Before{' '}

                        <span className="text-(--progress-section-title-highlight)">
                            and After
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
                            text-(--progress-section-title-text)
                            lg:hidden
                        "
                    >
                        Before

                        <span className="block text-(--progress-section-title-highlight)">
                            and After
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
                            text-(--progress-section-subtitle-text)
                            sm:text-[19px]
                            lg:text-[19px]
                        "
                    >
                        A few examples of what mentor feedback actually
                        changes.
                    </p>
                </header>

                {/* Desktop board: sidebar + proof cards + feature strip */}
                <div className="hidden lg:block">
                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-[300px_minmax(0,1fr)]
                            divide-x
                            divide-(--progress-section-sidebar-divider)
                            overflow-hidden
                            rounded-2xl
                            border
                            border-(--progress-section-card-border)
                            bg-(--progress-section-card-bg)
                        "
                    >
                        <div className="bg-(--progress-section-sidebar-bg) p-8">
                            <ProgressSidebarPanel />
                        </div>

                        <div className="grid grid-cols-4 gap-4 p-6">
                            {progressProofs.map((proof) => (
                                <ProgressProofCard
                                    key={proof.title}
                                    proof={proof}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <ProgressFeatureStrip />
                    </div>
                </div>

                {/* Mobile / tablet board: proof rows + feature strip */}
                <div className="mt-10 lg:hidden">
                    <span
                        className="
                            text-[13px]
                            font-bold
                            uppercase
                            tracking-[0.04em]
                            text-(--progress-section-mobile-eyebrow-text)
                        "
                    >
                        Progress Examples
                    </span>

                    <div className="mt-4 space-y-3">
                        {mobileProgressProofs.map((proof) => (
                            <MobileProgressCard key={proof.title} proof={proof} />
                        ))}
                    </div>

                    <div className="mt-6">
                        <MobileProgressFeatureStrip />
                    </div>
                </div>

                {/* Desktop CTA */}
                <div className="mx-auto mt-5 hidden max-w-[735px] gap-2.5 lg:mt-6 lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-6">
                    <Link
                        href="#real-progress"
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
                        "
                    >
                        <CircleArrowRight
                            aria-hidden="true"
                            className="h-5 w-5 lg:h-7 lg:w-7"
                            strokeWidth={1.9}
                        />
                        <span>View Learner Progress</span>
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
                            gap-3
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

                {/* Mobile / tablet CTA */}
                <div className="mt-8 flex flex-col gap-3 lg:hidden">
                    <Link
                        href="#real-progress"
                        className="
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
                        <span>View Learner Progress</span>
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
            </div>
        </section>
    );
};

export default RealProgressSection;
