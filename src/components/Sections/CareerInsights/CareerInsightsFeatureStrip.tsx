import { FC } from 'react';

import { type InsightAccent } from '@/types/careerInsights';
import { careerInsightsFeatureStrip } from '@/utils/careerInsightsItems';

const accentStyles: Record<InsightAccent, string> = {
    purple:
        'bg-(--career-insights-card-purple-bg) text-(--career-insights-card-purple-accent)',
    green:
        'bg-(--career-insights-card-green-bg) text-(--career-insights-card-green-accent)',
    orange:
        'bg-(--career-insights-card-orange-bg) text-(--career-insights-card-orange-accent)',
    blue: 'bg-(--career-insights-card-blue-bg) text-(--career-insights-card-blue-accent)',
};

const CareerInsightsFeatureStrip: FC = () => {
    return (
        <div
            className="
                grid
                grid-cols-2
                gap-x-4
                gap-y-6
                rounded-2xl
                border
                border-(--career-insights-strip-border)
                bg-(--career-insights-strip-bg)
                px-5
                py-6
                sm:grid-cols-3
                sm:px-8
                lg:grid-cols-5
                lg:divide-x
                lg:divide-(--career-insights-strip-border)
                lg:py-7
            "
        >
            {careerInsightsFeatureStrip.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="flex items-start gap-3 px-2 lg:first:pl-0"
                    >
                        <span
                            className={`
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                ${accentStyles[item.accent]}
                            `}
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-5.5 w-5.5"
                                strokeWidth={1.8}
                            />
                        </span>

                        <div className="min-w-0">
                            <p
                                className="
                                    text-[14px]
                                    font-semibold
                                    leading-tight
                                    text-(--career-insights-strip-title-text)
                                "
                            >
                                {item.title}
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[12px]
                                    leading-[1.4]
                                    text-(--career-insights-strip-text)
                                "
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CareerInsightsFeatureStrip;
