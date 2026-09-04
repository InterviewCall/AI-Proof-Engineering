import { CircleArrowRight, Lightbulb, Mail } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { insightArticles } from '@/utils/careerInsightsItems';

import CareerInsightsFeatureStrip from './CareerInsightsFeatureStrip';
import FeaturedTalkCard from './FeaturedTalkCard';
import InsightArticleCard from './InsightArticleCard';
import MobileCareerInsightsFeatureStrip from './MobileCareerInsightsFeatureStrip';
import MobileFeaturedTalkCard from './MobileFeaturedTalkCard';
import MobileInsightRow from './MobileInsightRow';

const CareerInsightsSection: FC = () => {
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
                        <FeaturedTalkCard />

                        <div className="grid grid-cols-2 gap-4">
                            {insightArticles.map((article) => (
                                <InsightArticleCard
                                    key={article.title}
                                    article={article}
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
                    <MobileFeaturedTalkCard />

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
                        {insightArticles.slice(0, 2).map((article) => (
                            <MobileInsightRow
                                key={article.title}
                                article={article}
                            />
                        ))}
                    </div>

                    <div className="mt-6">
                        <MobileCareerInsightsFeatureStrip />
                    </div>
                </div>

                {/* CTA */}
                <div className="mx-auto mt-4.5 grid max-w-[735px] gap-2.5 lg:mt-5.5 lg:grid-cols-[1.2fr_1fr] lg:gap-6">
                    <Link
                        href="#career-insights"
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
                            text-[14.5px]
                            whitespace-nowrap
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
                        <span>See More From the Career Desk</span>
                    </Link>

                    <Link
                        href="#career-insights"
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
                            text-[14.5px]
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
                        <Mail
                            aria-hidden="true"
                            className="h-5 w-5 lg:h-7 lg:w-7"
                            strokeWidth={1.9}
                        />
                        <span>Subscribe for Updates</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CareerInsightsSection;