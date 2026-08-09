import { ChevronRight, Clock } from 'lucide-react';
import { FC } from 'react';

import { type InsightAccent, type InsightArticle } from '@/types/careerInsights';

const labelStyles: Record<InsightAccent, string> = {
    purple:
        'bg-(--career-insights-card-purple-bg) text-(--career-insights-card-purple-accent)',
    green:
        'bg-(--career-insights-card-green-bg) text-(--career-insights-card-green-accent)',
    orange:
        'bg-(--career-insights-card-orange-bg) text-(--career-insights-card-orange-accent)',
    blue: 'bg-(--career-insights-card-blue-bg) text-(--career-insights-card-blue-accent)',
};

const iconStyles: Record<InsightAccent, string> = {
    purple:
        'bg-(--career-insights-card-purple-bg) text-(--career-insights-card-purple-accent)',
    green:
        'bg-(--career-insights-card-green-bg) text-(--career-insights-card-green-accent)',
    orange:
        'bg-(--career-insights-card-orange-bg) text-(--career-insights-card-orange-accent)',
    blue: 'bg-(--career-insights-card-blue-bg) text-(--career-insights-card-blue-accent)',
};

const MobileInsightRow: FC<{ article: InsightArticle }> = ({ article }) => {
    const Icon = article.icon;

    return (
        <div
            className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-(--career-insights-card-border)
                bg-(--career-insights-card-bg)
                p-4
            "
        >
            <span
                className={`
                    flex
                    h-13
                    w-13
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${iconStyles[article.accent]}
                `}
            >
                <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
            </span>

            <div className="min-w-0 flex-1">
                <span
                    className={`
                        inline-flex
                        min-h-6
                        items-center
                        rounded-md
                        px-2.5
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.02em]
                        ${labelStyles[article.accent]}
                    `}
                >
                    {article.label}
                </span>

                <h3
                    className="
                        mt-2
                        text-[15px]
                        font-bold
                        leading-[1.3]
                        text-(--career-insights-card-title)
                    "
                >
                    {article.title}
                </h3>

                <div className="mt-2 flex items-center gap-1.5">
                    <Clock
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-(--career-insights-card-text)"
                        strokeWidth={1.9}
                    />

                    <span
                        className="
                            text-[12px]
                            font-medium
                            text-(--career-insights-card-text)
                        "
                    >
                        {article.duration}
                    </span>
                </div>
            </div>

            <ChevronRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-(--career-insights-mobile-chevron)"
                strokeWidth={2.2}
            />
        </div>
    );
};

export default MobileInsightRow;
