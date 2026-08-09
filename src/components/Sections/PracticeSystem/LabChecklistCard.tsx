import { CheckCircle2, Circle, FlaskConical, TrendingUp } from 'lucide-react';
import { FC } from 'react';

import { labChecklist } from '@/utils/practiceSystemItems';

const LabChecklistCard: FC = () => {
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
                <FlaskConical
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
                    Lab Checklist
                </h3>
            </div>

            <div className="mt-4 space-y-3">
                {labChecklist.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center gap-2.5"
                    >
                        {item.done ? (
                            <CheckCircle2
                                aria-hidden="true"
                                className="h-5 w-5 shrink-0 text-(--practice-section-success-text)"
                                strokeWidth={2}
                            />
                        ) : (
                            <Circle
                                aria-hidden="true"
                                className="h-5 w-5 shrink-0 text-(--practice-section-card-border)"
                                strokeWidth={2}
                            />
                        )}

                        <p
                            className={`
                                text-[14px]
                                font-medium
                                ${
                                    item.done
                                        ? 'text-(--practice-section-card-title)'
                                        : 'text-(--practice-section-card-text)'
                                }
                            `}
                        >
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            <div
                className="
                    mt-5
                    flex
                    items-start
                    gap-2.5
                    rounded-lg
                    bg-(--practice-section-board-bg)
                    px-3.5
                    py-3
                "
            >
                <TrendingUp
                    aria-hidden="true"
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-(--color-brand-700)"
                    strokeWidth={1.9}
                />

                <p
                    className="
                        text-[13px]
                        leading-[1.4]
                        text-(--practice-section-card-text)
                    "
                >
                    Build, test, and iterate with real-world scenarios.
                </p>
            </div>
        </article>
    );
};

export default LabChecklistCard;
