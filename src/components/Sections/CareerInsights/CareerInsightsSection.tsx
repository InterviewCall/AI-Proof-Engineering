'use client';

import { Download, Lightbulb, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';

import { insightArticles } from '@/utils/careerInsightsItems';
import { type InsightArticle } from '@/types/careerInsights';

import CareerInsightsFeatureStrip from './CareerInsightsFeatureStrip';
import FeaturedTalkCard from './FeaturedTalkCard';
import InsightArticleCard from './InsightArticleCard';
import MobileCareerInsightsFeatureStrip from './MobileCareerInsightsFeatureStrip';
import MobileFeaturedTalkCard from './MobileFeaturedTalkCard';
import MobileInsightRow from './MobileInsightRow';
import DownloadCurriculumButton from '@/components/Shared/DownloadCurriculumButton';
import BookTrackCounsellingButton from '@/components/Shared/BookTrackCounsellingButton';

const CareerInsightsSection: FC = () => {
    const defaultArticle = insightArticles[0];

    const [selectedArticle, setSelectedArticle] =
        useState<InsightArticle>(defaultArticle);

    return (
        <section
            id="career-insights"
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
            <div className="mx-auto w-full max-w-370">
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
                            text-(--career-insights-section-eyebrow-text)
                            shadow-[0_7px_14px_rgba(1,17,57,0.18)]
                            ring-1
                            ring-[#a9c3fc]
                        "
                    >
                        <Lightbulb
                            aria-hidden="true"
                            className="h-4.5 w-4.5"
                            strokeWidth={1.9}
                        />
                        <span>Career Desk</span>
                    </div>

                    {/* Desktop heading */}
                    <h2
                        className="
                            mt-4
                            hidden
                            text-[clamp(2.25rem,5.5vw,3.75rem)]
                            font-bold
                            leading-[103%]
                            tracking-[0%]
                            text-(--career-insights-section-title-text)
                            lg:block
                        "
                    >
                        What We&apos;re{' '}
                        <span className="text-(--career-insights-section-title-highlight)">
                            Writing About
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
                            text-(--career-insights-section-title-text)
                            lg:hidden
                        "
                    >
                        What We&apos;re

                        <span className="block text-(--career-insights-section-title-highlight)">
                            Writing About
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
                            text-(--career-insights-section-subtitle-text)
                            sm:text-[19px]
                            lg:text-[19px]
                        "
                    >
                        Hiring, system design, and what&apos;s actually
                        changing in engineering work.
                    </p>
                </header>

                {/* Desktop: featured talk + insight articles + feature strip */}
                <div className="hidden lg:block">
                    <div className="mt-10 grid grid-cols-2 gap-5">
                        <FeaturedTalkCard article={selectedArticle} />

                        <div className="grid grid-cols-2 gap-4">
                            {insightArticles.map((article) => (
                                <InsightArticleCard
                                    key={article.title}
                                    article={article}
                                    isSelected={
                                        selectedArticle.title === article.title
                                    }
                                    onSelect={() => setSelectedArticle(article)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <CareerInsightsFeatureStrip />
                    </div>
                </div>

                {/* Mobile / tablet: featured talk + insight rows + feature strip */}
                <div className="mt-10 lg:hidden">
                    <MobileFeaturedTalkCard article={selectedArticle} />

                    <span
                        className="
                            mt-8
                            block
                            text-[13.5px]
                            font-bold
                            uppercase
                            tracking-[0.04em]
                            text-(--career-insights-mobile-eyebrow-text)
                        "
                    >
                        More Insights
                    </span>

                    <div className="mt-4 space-y-3">
                        {insightArticles.slice(0, 4).map((article) => (
                            <MobileInsightRow
                                key={article.title}
                                article={article}
                                isSelected={
                                    selectedArticle.title === article.title
                                }
                                onSelect={() => setSelectedArticle(article)}
                            />
                        ))}
                    </div>

                    <div className="mt-6">
                        <MobileCareerInsightsFeatureStrip />
                    </div>
                </div>

                {/* CTA */}
                
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
                    <DownloadCurriculumButton />

                    <BookTrackCounsellingButton />
                </div>
            </div>
        </section>
    );
};

export default CareerInsightsSection;