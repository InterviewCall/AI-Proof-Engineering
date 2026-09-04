import { FC, Fragment } from 'react';

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

const MobileCareerInsightsFeatureStrip: FC = () => {
    const items = careerInsightsFeatureStrip;

    return (
        <div
            className="
                flex
                flex-nowrap
                items-center
                gap-x-3
                overflow-x-auto
                rounded-2xl
                bg-(--career-insights-mobile-strip-bg)
                px-5
                py-5
            "
        >
            {items.map((item, index) => {
                const Icon = item.icon;
                const isLastItem = index === items.length - 1;

                return (
                    <Fragment key={item.title}>
                        <div className="flex shrink-0 items-center gap-2">
                            <span
                                className={`
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    ${accentStyles[item.accent]}
                                `}
                            >
                                <Icon
                                    aria-hidden="true"
                                    className="h-4.5 w-4.5"
                                    strokeWidth={1.8}
                                />
                            </span>

                            <span
                                className="
                                    whitespace-nowrap
                                    text-[13.5px]
                                    font-semibold
                                    leading-tight
                                    text-(--career-insights-strip-title-text)
                                "
                            >
                                {item.title}
                            </span>
                        </div>

                        {!isLastItem && (
                            <span
                                aria-hidden="true"
                                className="
                                    shrink-0
                                    self-center
                                    text-(--career-insights-mobile-eyebrow-text)
                                "
                            >
                                •
                            </span>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default MobileCareerInsightsFeatureStrip;