import { ArrowDown, Award, Check, X } from 'lucide-react';
import { FC } from 'react';

import { type ProgressAccent, type ProgressProof } from '@/types/realProgress';

const iconAccentStyles: Record<ProgressAccent, string> = {
    one: 'bg-(--progress-section-card-one-bg) text-(--progress-section-card-one-accent)',
    two: 'bg-(--progress-section-card-two-bg) text-(--progress-section-card-two-accent)',
    three:
        'bg-(--progress-section-card-three-bg) text-(--progress-section-card-three-accent)',
    four: 'bg-(--progress-section-card-four-bg) text-(--progress-section-card-four-accent)',
};

const badgeAccentStyles: Record<ProgressAccent, string> = {
    one: 'bg-(--progress-section-card-one-bg) text-(--progress-section-card-one-accent)',
    two: 'bg-(--progress-section-card-two-bg) text-(--progress-section-card-two-accent)',
    three:
        'bg-(--progress-section-card-three-bg) text-(--progress-section-card-three-accent)',
    four: 'bg-(--progress-section-card-four-bg) text-(--progress-section-card-four-accent)',
};

const ProgressProofCard: FC<{ proof: ProgressProof }> = ({ proof }) => {
    const Icon = proof.icon;

    return (
        <article
            className="
                rounded-2xl
                border
                border-(--progress-section-card-border)
                bg-(--progress-section-card-bg)
                p-5
            "
        >
            <span
                className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    ${iconAccentStyles[proof.accent]}
                `}
            >
                <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.7} />
            </span>

            <h3
                className="
                    mt-3
                    text-[16px]
                    font-bold
                    leading-tight
                    text-(--progress-section-card-title)
                "
            >
                {proof.title}
            </h3>

            {/* Before */}
            <div
                className="
                    mt-4
                    rounded-xl
                    bg-(--progress-section-before-bg)
                    p-3.5
                "
            >
                <div className="flex items-center justify-between gap-2">
                    <span
                        className="
                            text-[13px]
                            font-bold
                            text-(--progress-section-before-text)
                        "
                    >
                        Before
                    </span>

                    <X
                        aria-hidden="true"
                        className="h-4 w-4 text-(--progress-section-before-text)"
                        strokeWidth={2.4}
                    />
                </div>

                <p
                    className="
                        mt-1.5
                        text-[13px]
                        leading-[1.4]
                        text-(--progress-section-card-text)
                    "
                >
                    {proof.before}
                </p>
            </div>

            <div className="flex justify-center py-2">
                <ArrowDown
                    aria-hidden="true"
                    className="h-4 w-4 text-(--progress-section-before-text)"
                    strokeWidth={2.2}
                />
            </div>

            {/* After */}
            <div
                className="
                    rounded-xl
                    bg-(--progress-section-after-bg)
                    p-3.5
                "
            >
                <div className="flex items-center justify-between gap-2">
                    <span
                        className="
                            text-[13px]
                            font-bold
                            text-(--progress-section-after-text)
                        "
                    >
                        After
                    </span>

                    <Check
                        aria-hidden="true"
                        className="h-4 w-4 text-(--progress-section-after-text)"
                        strokeWidth={2.4}
                    />
                </div>

                <p
                    className="
                        mt-1.5
                        text-[13px]
                        leading-[1.4]
                        text-(--progress-section-card-text)
                    "
                >
                    {proof.after}
                </p>
            </div>

            {/* Badge */}
            <div
                className={`
                    mt-4
                    flex
                    items-start
                    gap-2.5
                    rounded-xl
                    p-3.5
                    ${badgeAccentStyles[proof.accent]}
                `}
            >
                <Award
                    aria-hidden="true"
                    className="h-4.5 w-4.5 shrink-0"
                    strokeWidth={1.9}
                />

                <p className="text-[13px] font-semibold leading-[1.35]">
                    {proof.badge}
                </p>
            </div>
        </article>
    );
};

export default ProgressProofCard;
