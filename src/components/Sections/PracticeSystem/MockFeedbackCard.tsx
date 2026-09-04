import { Lightbulb, Mic } from 'lucide-react';
import { FC } from 'react';

import { mockFeedbackMetrics } from '@/utils/practiceSystemItems';

import StatusPill from './StatusPill';

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const PROGRESS = 0.72;

const MockFeedbackCard: FC = () => {
    return (
        <article
            className="
                flex
                flex-col
                rounded-2xl
                border
                border-(--practice-section-card-border)
                bg-(--practice-section-card-bg)
                p-5
            "
        >
            <div className="flex items-center gap-2">
                <Mic
                    aria-hidden="true"
                    className="h-5 w-5 text-(--color-brand-700)"
                    strokeWidth={1.9}
                />

                <h3
                    className="
                        text-[16px]
                        font-semibold
                        text-(--practice-section-card-title)
                    "
                >
                    Mock Feedback
                </h3>
            </div>

            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                {/* Overall Readiness */}
                <div className="relative flex h-[104px] w-[104px] shrink-0 items-center justify-center">
                    <svg
                        viewBox="0 0 104 104"
                        className="h-[104px] w-[104px] -rotate-90"
                        aria-hidden="true"
                    >
                        <circle
                            cx="52"
                            cy="52"
                            r={RADIUS}
                            fill="none"
                            stroke="var(--practice-section-progress-track)"
                            strokeWidth="8"
                        />

                        <circle
                            cx="52"
                            cy="52"
                            r={RADIUS}
                            fill="none"
                            stroke="var(--practice-section-progress-fill)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={
                                CIRCUMFERENCE * (1 - PROGRESS)
                            }
                        />
                    </svg>

                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-0.5
                            px-2
                            text-center
                        "
                    >
                        <span
                            className="
                                text-[10px]
                                font-semibold
                                leading-tight
                                text-(--practice-section-card-text)
                            "
                        >
                            Overall
                            <br />
                            Readiness
                        </span>

                        <span
                            className="
                                text-[11px]
                                font-bold
                                leading-tight
                                whitespace-nowrap
                                text-(--color-brand-700)
                            "
                        >
                            Improving
                        </span>
                    </div>
                </div>

                <div className="min-w-0 w-full flex-1 space-y-1.5">
                    {mockFeedbackMetrics.map((metric) => {
                        const Icon = metric.icon;

                        return (
                            <div
                                key={metric.label}
                                className="flex items-center justify-between gap-2"
                            >
                                <span className="flex min-w-0 items-center gap-1.5">
                                    <Icon
                                        aria-hidden="true"
                                        className="
                                            h-3.5
                                            w-3.5
                                            shrink-0
                                            text-(--practice-section-card-text)
                                        "
                                        strokeWidth={1.9}
                                    />

                                    <span
                                        className="
                                            truncate
                                            text-[14px]
                                            font-medium
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
            </div>

            {/* Feedback focus */}
            <div
                className="
                    mt-auto
                    flex
                    min-h-[76px]
                    items-start
                    gap-3
                    rounded-xl
                    bg-[#F6F8FD]
                    px-4
                    py-4
                "
            >
                <Lightbulb
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-(--color-brand-700)"
                    strokeWidth={1.9}
                />

                <p
                    className="
                        text-[14px]
                        font-medium
                        leading-[1.5]
                        text-(--practice-section-card-text)
                    "
                >
                    Focus on edge cases and clearer communication.
                </p>
            </div>
        </article>
    );
};

export default MockFeedbackCard;