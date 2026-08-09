import { ArrowRight } from 'lucide-react';
import { FC } from 'react';

import { type MobileProgressProof, type ProgressAccent } from '@/types/realProgress';

const iconAccentStyles: Record<ProgressAccent, string> = {
    one: 'bg-(--progress-section-card-one-bg) text-(--progress-section-card-one-accent)',
    two: 'bg-(--progress-section-card-two-bg) text-(--progress-section-card-two-accent)',
    three:
        'bg-(--progress-section-card-three-bg) text-(--progress-section-card-three-accent)',
    four: 'bg-(--progress-section-card-four-bg) text-(--progress-section-card-four-accent)',
};

const MobileProgressCard: FC<{ proof: MobileProgressProof }> = ({ proof }) => {
    const Icon = proof.icon;

    return (
        <article
            className="
                flex
                flex-wrap
                items-center
                gap-4
                rounded-2xl
                border
                border-(--progress-section-card-border)
                bg-(--progress-section-card-bg)
                p-4
                sm:flex-nowrap
            "
        >
            <div className="flex min-w-0 flex-1 items-center gap-3 sm:flex-initial">
                <span
                    className={`
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ${iconAccentStyles[proof.accent]}
                    `}
                >
                    <Icon
                        aria-hidden="true"
                        className="h-7 w-7"
                        strokeWidth={1.7}
                    />
                </span>

                <h3
                    className="
                        text-[16px]
                        font-bold
                        leading-tight
                        text-(--progress-section-card-title)
                    "
                >
                    {proof.title}
                </h3>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2.5 sm:flex-initial">
                <div className="min-w-0 max-w-27 text-right">
                    <span
                        className="
                            inline-flex
                            min-h-5.5
                            items-center
                            rounded-full
                            bg-(--progress-section-mobile-before-bg)
                            px-2.5
                            text-[11px]
                            font-bold
                            text-(--progress-section-mobile-before-text)
                        "
                    >
                        Before
                    </span>

                    <p
                        className="
                            mt-1
                            text-[12px]
                            leading-[1.3]
                            text-(--progress-section-card-text)
                        "
                    >
                        {proof.before}
                    </p>
                </div>

                <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-(--progress-section-before-text)"
                    strokeWidth={2.2}
                />

                <div className="min-w-0 max-w-27">
                    <span
                        className="
                            inline-flex
                            min-h-5.5
                            items-center
                            rounded-full
                            bg-(--progress-section-after-bg)
                            px-2.5
                            text-[11px]
                            font-bold
                            text-(--progress-section-after-text)
                        "
                    >
                        After
                    </span>

                    <p
                        className="
                            mt-1
                            text-[12px]
                            leading-[1.3]
                            text-(--progress-section-card-text)
                        "
                    >
                        {proof.after}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default MobileProgressCard;
