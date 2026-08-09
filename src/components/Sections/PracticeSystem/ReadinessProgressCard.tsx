import { ChevronDown, LineChart } from 'lucide-react';
import { FC } from 'react';

import { type ReadinessAccent } from '@/types/practiceSystem';
import { readinessMetrics } from '@/utils/practiceSystemItems';

import StatusPill from './StatusPill';

const accentStyles: Record<ReadinessAccent, string> = {
    blue: 'bg-(--progress-section-card-one-bg) text-(--progress-section-card-one-accent)',
    purple:
        'bg-(--progress-section-card-two-bg) text-(--progress-section-card-two-accent)',
    green:
        'bg-(--progress-section-card-three-bg) text-(--progress-section-card-three-accent)',
    orange:
        'bg-(--progress-section-card-four-bg) text-(--progress-section-card-four-accent)',
};

const ReadinessProgressCard: FC = () => {
    return (
        <article
            className="
                flex
                h-full
                flex-col
                rounded-2xl
                border
                border-(--practice-section-card-border)
                bg-(--practice-section-card-bg)
                p-5
            "
        >
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <LineChart
                        aria-hidden="true"
                        className="h-5 w-5 text-(--color-brand-700)"
                        strokeWidth={1.9}
                    />

                    <h3
                        className="
                            text-[15px]
                            font-semibold
                            text-(--practice-section-card-title)
                        "
                    >
                        Readiness Progress
                    </h3>
                </div>

                <span
                    className="
                        inline-flex
                        min-h-8
                        items-center
                        gap-1.5
                        rounded-lg
                        border
                        border-(--practice-section-card-border)
                        px-3
                        text-[12px]
                        font-semibold
                        whitespace-nowrap
                        text-(--practice-section-card-text)
                    "
                >
                    This Week
                    <ChevronDown
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                        strokeWidth={2}
                    />
                </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {readinessMetrics.map((metric) => {
                    const Icon = metric.icon;

                    return (
                        <div
                            key={metric.label}
                            className="
                                flex
                                min-w-0
                                items-center
                                justify-between
                                gap-2
                                rounded-lg
                                border
                                border-(--practice-section-card-border)
                                px-3
                                py-2.5
                            "
                        >
                            <span className="flex min-w-0 items-center gap-2">
                                <span
                                    className={`
                                        flex
                                        h-7
                                        w-7
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-[7px]
                                        ${accentStyles[metric.accent]}
                                    `}
                                >
                                    <Icon
                                        aria-hidden="true"
                                        className="h-4 w-4"
                                        strokeWidth={1.9}
                                    />
                                </span>

                                <span
                                    className="
                                        text-[12.5px]
                                        font-semibold
                                        whitespace-nowrap
                                        text-(--practice-section-card-title)
                                    "
                                >
                                    {metric.label}
                                </span>
                            </span>

                            <StatusPill status={metric.status} />
                        </div>
                    );
                })}
            </div>
        </article>
    );
};

export default ReadinessProgressCard;
