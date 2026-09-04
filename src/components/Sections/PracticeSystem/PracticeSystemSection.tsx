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
import MobilePracticeTabs from './MobilePracticeTabs';

const PracticeSystemSection: FC = () => {
    const [activeTabId, setActiveTabId] =
        useState<PracticeTabId>('practice');

    const activeTask = practiceTaskByTab[activeTabId];

    return (
        <section
            id="practice-system"
            className="
                scroll-mt-25
                bg-white
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
                <header className="mx-auto max-w-[1100px] text-center">
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
                            text-[#0a53f2]
                            shadow-[0_7px_14px_rgba(1,17,57,0.18)]
                            ring-1
                            ring-[#a9c3fc]
                        "
                    >
                        <Settings2
                            aria-hidden="true"
                            className="h-4 w-4"
                            strokeWidth={1.8}
                        />

                        <span>Practice, Labs, Mocks, Reviews</span>
                    </div>

                    {/* Keep existing text exactly unchanged */}
                    <h2
                        className="
                            mt-4
                            text-[clamp(1.75rem,5vw,3.125rem)]
                            font-bold
                            leading-[1.06]
                            tracking-[-0.04em]
                            lg:whitespace-nowrap
                            text-[#071536]
                        "
                    >
                        What You Actually Do Between{' '}
                        <span className="text-[#0a53f2]">
                            Sessions
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-[850px]
                            text-[15px]
                            font-bold
                            leading-[1.5]
                            text-[#52617d]
                            sm:text-[18px]
                        "
                    >
                        Every phase comes with something to solve, implement,
                        debug, or present, and someone reviews it afterward.
                    </p>
                </header>

                {/* Tabs + board */}
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
                            overflow-hidden
                            rounded-[14px]
                            border
                            border-[#dce6fa]
                            bg-white
                            lg:block
                        "
                    >
                        <div
                            className="
                                grid
                                overflow-hidden
                                rounded-[13px]
                                bg-white
                                lg:grid-cols-[320px_minmax(0,1fr)]
                                xl:grid-cols-[360px_minmax(0,1fr)]
                            "
                        >
                            {/* Left practice-loop panel */}
                            <div
                                className="
                                    border-r
                                    border-[#dce6fa]
                                    bg-white
                                "
                            >
                                <PracticeLoopPanel />
                            </div>

                            {/* Right cards */}
                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-3
                                    bg-white
                                    p-4
                                    sm:grid-cols-2
                                    xl:grid-cols-[1.2fr_0.9fr_1fr]
                                    xl:p-5
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

                        {/* Feature strip */}
                        <div className="border-t border-[#e2eafd] px-5 py-4">
                            <FeatureStrip items={desktopFeatureStrip} />
                        </div>
                    </div>

                    {/* Mobile / tablet board */}
                    <div
                        className="
                            space-y-4
                            lg:hidden
                        "
                    >
                        <MobilePracticeTabs
                            activeTab={activeTabId}
                            onTabChange={setActiveTabId}
                        />

                        <MobileLoopCard />

                        <MobileSummaryCards />

                        <FeatureStrip
                            items={mobileFeatureStrip}
                            compact
                        />
                    </div>
                </div>

                {/* CTA */}
                <div
                    className="
                        mx-auto
                        mt-5
                        grid
                        max-w-[735px]
                        gap-2.5
                        lg:mt-6
                        lg:grid-cols-[1.2fr_1fr]
                        lg:gap-1
                    "
                >
                    {/* See How Practice Works */}
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
                            bg-[#0a53f2]
                            px-4
                            text-center
                            text-[14px]
                            font-semibold
                            text-white
                            shadow-[0_8px_20px_rgba(10,83,242,0.12)]
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-[#0847d4]
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-[#0a53f2]/20
                            lg:min-h-[58px]
                            lg:w-[90%]
                            lg:justify-self-start
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

                        <span>See How Practice Works</span>
                    </Link>

                    {/* Download Curriculum */}
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
                            border-[#cbd8f0]
                            bg-white
                            px-4
                            text-center
                            text-[14px]
                            font-semibold
                            text-[#0a53f2]
                            transition-colors
                            hover:bg-[#f6f8fd]
                            focus-visible:outline-none
                            focus-visible:ring-4
                            focus-visible:ring-[#0a53f2]/20
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
        </section>
    );
};

export default PracticeSystemSection;