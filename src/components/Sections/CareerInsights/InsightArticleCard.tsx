import { Bookmark, Clock, FileText } from 'lucide-react';
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

const tagStyles: Record<InsightAccent, string> = {
    purple:
        'bg-(--career-insights-card-purple-bg) text-(--career-insights-card-purple-accent)',
    green:
        'bg-(--career-insights-card-green-bg) text-(--career-insights-card-green-accent)',
    orange:
        'bg-(--career-insights-card-orange-bg) text-(--career-insights-card-orange-accent)',
    blue: 'bg-(--career-insights-card-blue-bg) text-(--career-insights-card-blue-accent)',
};

const InsightArticleCard: FC<{ article: InsightArticle }> = ({ article }) => {
    const Icon = article.icon;
    const DurationIcon = article.durationType === 'read' ? FileText : Clock;

    return (
        <article
            className="
                flex
                flex-col
                rounded-2xl
                border
                border-(--career-insights-card-border)
                bg-(--career-insights-card-bg)
                p-5
            "
        >
            <div className="flex items-start justify-between gap-3">
                <span
                    className={`
                        inline-flex
                        min-h-6.5
                        items-center
                        rounded-md
                        px-2.5
                        text-[11.5px]
                        font-bold
                        uppercase
                        tracking-[0.02em]
                        ${labelStyles[article.accent]}
                    `}
                >
                    {article.label}
                </span>

                <Bookmark
                    aria-hidden="true"
                    className="h-4.5 w-4.5 shrink-0 text-(--career-insights-card-bookmark)"
                    strokeWidth={1.8}
                />
            </div>

            <div className="mt-4 flex items-start gap-3.5">
                <span
                    className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        ${iconStyles[article.accent]}
                    `}
                >
                    <Icon
                        aria-hidden="true"
                        className="h-5.5 w-5.5"
                        strokeWidth={1.7}
                    />
                </span>

                <h3
                    className="
                        text-[16px]
                        font-bold
                        leading-[1.3]
                        text-(--career-insights-card-title)
                    "
                >
                    {article.title}
                </h3>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-(--career-insights-card-border) pt-4">
                <div className="flex items-center gap-1.5">
                    <DurationIcon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-(--career-insights-card-text)"
                        strokeWidth={1.9}
                    />

                    <span
                        className="
                            text-[12.5px]
                            font-medium
                            whitespace-nowrap
                            text-(--career-insights-card-text)
                        "
                    >
                        {article.duration}
                    </span>
                </div>

                <span
                    className={`
                        inline-flex
                        min-h-6.5
                        items-center
                        rounded-full
                        px-2.5
                        text-[11.5px]
                        font-semibold
                        whitespace-nowrap
                        ${tagStyles[article.accent]}
                    `}
                >
                    {article.tag}
                </span>
            </div>
        </article>
    );
};

export default InsightArticleCard;
