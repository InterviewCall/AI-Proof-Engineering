import { CheckCircle2, Circle, FlaskConical, TrendingUp } from 'lucide-react';
import { FC } from 'react';

import { labChecklist } from '@/utils/practiceSystemItems';

const LabChecklistCard: FC = () => {
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
            <div className="flex items-center gap-2">
                <FlaskConical
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
                    Lab Checklist
                </h3>
            </div>

            <div className="mt-3 space-y-2">
                {labChecklist.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center gap-2"
                    >
                        {item.done ? (
                            <span
                                className="
                                    flex
                                    h-4
                                    w-4
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#0C9581]
                                    text-white
                                "
                            >
                        <span className="text-[10px] font-bold leading-none">✓</span>
                    </span>
                        ) : (
                            <Circle
                                aria-hidden="true"
                                className="h-5 w-5 shrink-0 text-(--practice-section-card-border)"
                                strokeWidth={2}
                            />
                        )}

                        <p
                            className={`
                                text-[15px]
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
                    mt-auto
                    flex
                    items-start
                    gap-2
                    rounded-lg
                    border
                    border-[#ECF1FD]
                    bg-[#F6F8FD]
                    px-2.5
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
                        text-[14px]
                        leading-[1.55]
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
