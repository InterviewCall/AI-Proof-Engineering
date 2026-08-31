'use client';

import { CircleArrowRight, Download, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';

import { type PracticeTabId } from '@/types/practiceSystem';
import {
    desktopFeatureStrip,
    mobileFeatureStrip,
    practiceTaskByTab,
} from '@/utils/practiceSystemItems';

import FeatureStrip from './FeatureStrip';
import LabChecklistCard from './LabChecklistCard';
import MentorReviewCard from './MentorReviewCard';
import MobileLoopCard from './MobileLoopCard';
import MobileSummaryCards from './MobileSummaryCards';
import MockFeedbackCard from './MockFeedbackCard';
import PracticeLoopPanel from './PracticeLoopPanel';
import PracticeTabs from './PracticeTabs';
import PracticeTaskCard from './PracticeTaskCard';
import ReadinessProgressCard from './ReadinessProgressCard';

const PracticeSystemSection: FC = () => {
    const [activeTabId, setActiveTabId] = useState<PracticeTabId>('practice');

    const activeTask = practiceTaskByTab[activeTabId];

    return (
        <section
            id="practice-system"
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
                            border-(--practice-section-board-border)
                            bg-white
                            px-5
                            text-[13px]
                            font-semibold
                            uppercase
                            tracking-[-1%]
                            text-(--practice-section-eyebrow-text)
                            sm:text-[15px]
                        "
                    >
                        <Settings2
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.8}
                        />
                        <span>Practice, Labs, Mocks, Reviews</span>
                    </div>

                    {/* Desktop heading */}
                    <h2
                        className="
                            mt-4
                            hidden
                            text-[clamp(2.75rem,5.5vw,3.75rem)]
                            font-bold
                            leading-[1.1]
                            tracking-[-2%]
                            text-(--practice-section-title-text)
                            lg:block
                        "
                    >
                        What You Actually Do{' '}
                        <span className="block">
                            Between{' '}
                            <span className="text-(--practice-section-title-highlight)">
                                Sessions
                            </span>
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
                            text-(--practice-section-title-text)
                            lg:hidden
                        "
                    >
                        What You Actually Do
                        <span className="block text-(--practice-section-title-highlight)">
                            Between Sessions
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-190
                            text-[16px]
                            font-medium
                            leading-[1.5]
                            text-(--practice-section-subtitle-text)
                            sm:text-[19px]
                            lg:max-w-220
                            lg:text-[19px]
                        "
                    >
                        Every phase comes with something to solve, implement,
                        debug, or present, and someone reviews it afterward.
                    </p>
                </header>

                {/* Tabs */}
                <div className="mt-8">
                    <div className="hidden lg:block">
                        <PracticeTabs
                            activeTabId={activeTabId}
                            onChange={setActiveTabId}
                        />
                    </div>

                    {/* Desktop board */}
                    <div
                        className="
                            hidden
                            rounded-b-2xl
                            border
                            border-t-0
                            border-(--practice-section-board-border)
                            bg-(--practice-section-board-bg)
                            p-4
                            lg:block
                            xl:p-6
                        "
                    >
                        <div
                            className="
                                grid
                                gap-4
                                rounded-2xl
                                border
                                border-(--practice-section-board-border)
                                bg-white
                                lg:grid-cols-[300px_minmax(0,1fr)]
                                xl:grid-cols-[340px_minmax(0,1fr)]
                            "
                        >
                            <PracticeLoopPanel />

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-5
                                    p-4
                                    sm:grid-cols-2
                                    xl:grid-cols-3
                                    xl:p-6
                                "
                            >
                                <PracticeTaskCard task={activeTask} />
                                <LabChecklistCard />
                                <MockFeedbackCard />

                                <div className="xl:col-span-1">
                                    <MentorReviewCard />
                                </div>

                                <div className="sm:col-span-2 xl:col-span-2">
                                    <ReadinessProgressCard />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <FeatureStrip items={desktopFeatureStrip} />
                        </div>
                    </div>

                    {/* Mobile / tablet board */}
                    <div
                        className="
                            space-y-4
                            rounded-2xl
                            border
                            border-(--practice-section-board-border)
                            bg-(--practice-section-board-bg)
                            p-4
                            sm:p-5
                            lg:hidden
                        "
                    >
                        <MobileLoopCard />
                        <MobileSummaryCards />
                        <FeatureStrip items={mobileFeatureStrip} compact />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
                        <span>See How Practice Works</span>
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
                            border-(--practice-section-card-border)
                            bg-white
                            px-7
                            text-center
                            text-[16px]
                            font-semibold
                            text-(--practice-section-card-title)
                            transition-colors
                            hover:bg-(--practice-section-board-bg)
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

export default PracticeSystemSection;
