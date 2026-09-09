import {  Download, Users, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { mobileProgressProofs, progressProofs } from '@/utils/realProgressItems';

import MobileProgressCard from './MobileProgressCard';
import MobileProgressFeatureStrip from './MobileProgressFeatureStrip';
import ProgressFeatureStrip from './ProgressFeatureStrip';
import ProgressProofCard from './ProgressProofCard';
import ProgressSidebarPanel from './ProgressSidebarPanel';
import DownloadCurriculumButton from '@/components/Shared/DownloadCurriculumButton';
import BookTrackCounsellingButton from '@/components/Shared/BookTrackCounsellingButton';

const readinessCheckUrl = process.env.NEXT_PUBLIC_PRODUCT_READINESS_CHECK_URL;

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
                            text-(--progress-section-eyebrow-text)
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
                            whitespace-nowrap
                        "
                    >
                        Before{' '}

                        <span className="text-(--progress-section-title-highlight)">
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

                        <div 
                            className="
                                grid 
                                grid-cols-4
                                grid-rows-[auto_auto_auto_auto_auto_auto]
                                items-stretch
                                gap-4
                                p-6
                            "
                        >
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

                {/* CTA */}
                <div
                    className="
                        mx-auto
                        mt-5
                        flex
                        flex-col
                        gap-3
                        lg:mt-6
                        lg:grid
                        lg:max-w-[735px]
                        lg:grid-cols-[1.2fr_1fr]
                        lg:gap-3
                    "
                >
                    <DownloadCurriculumButton />
                    <BookTrackCounsellingButton />
                </div>
            </div>
        </section>
    );
};

export default RealProgressSection;