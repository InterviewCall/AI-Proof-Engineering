import { ArrowRight, Lightbulb, Mic } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { mockFeedbackMetrics } from '@/utils/practiceSystemItems';

import StatusPill from './StatusPill';

const RADIUS = 38;
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
                        text-[15px]
                        font-semibold
                        text-(--practice-section-card-title)
                    "
                >
                    Mock Feedback
                </h3>
            </div>

            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
                    <svg
                        viewBox="0 0 96 96"
                        className="h-24 w-24 -rotate-90"
                        aria-hidden="true"
                    >
                        <circle
                            cx="48"
                            cy="48"
                            r={RADIUS}
                            fill="none"
                            stroke="var(--practice-section-progress-track)"
                            strokeWidth="8"
                        />
                        <circle
                            cx="48"
                            cy="48"
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

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 text-center">
                        <span
                            className="
                                text-[9px]
                                font-semibold
                                leading-tight
                                text-(--practice-section-card-text)
                            "
                        >
                            Overall
                            <br />
                            Readiness
                        </span>

                        <span className="text-[12px] font-bold leading-tight text-(--color-brand-700)">
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
                                        className="h-3.5 w-3.5 shrink-0 text-(--practice-section-card-text)"
                                        strokeWidth={1.9}
                                    />

                                    <span
                                        className="
                                            truncate
                                            text-[12px]
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

            <div
                className="
                    mt-0
                    flex
                    items-start
                    gap-2
                    rounded-lg
                    bg-(--practice-section-board-bg)
                    px-3.5
                    py-3
                "
            >
                <Lightbulb
                    aria-hidden="true"
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-(--color-brand-700)"
                    strokeWidth={1.9}
                />

                <p
                    className="
                        text-[12px]
                        leading-[1.4]
                        text-(--practice-section-card-text)
                    "
                >
                    Focus on edge cases and clearer communication.
                </p>
            </div>

            <Link
                href="#practice-system"
                className="
                    group
                    mt-0
                    inline-flex
                    items-center
                    gap-1.5
                    text-[13px]
                    font-semibold
                    text-(--color-brand-700)
                "
            >
                <span>View Detailed Feedback</span>
                <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={2}
                />
            </Link>
        </article>
    );
};

export default MockFeedbackCard;
