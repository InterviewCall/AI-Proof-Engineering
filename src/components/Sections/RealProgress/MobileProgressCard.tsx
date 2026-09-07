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
                overflow-hidden
                rounded-2xl
                border
                border-(--progress-section-card-border)
                bg-(--progress-section-card-bg)
            "
        >
            {/* Top: icon + title */}
            <div
                className="
                    flex
                    items-center  
                    justify-center      
                    gap-3
                    px-4
                    py-4
                "
            >
                <span
                    className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ${iconAccentStyles[proof.accent]}
                    `}
                >
                    <Icon
                        aria-hidden="true"
                        className="h-6 w-6"
                        strokeWidth={1.7}
                    />
                </span>

                <h3
                    className="
                        min-w-0
                        text-center
                        text-[15px]
                        font-bold
                        leading-[1.2]
                        text-(--progress-section-card-title)
                    "
                >
                    {proof.title}
                </h3>
            </div>

            {/* Before → After */}
            <div
                className="
                    grid
                    grid-cols-[1fr_auto_1fr]
                    items-start
                    border-t
                    border-(--progress-section-sidebar-divider)
                    px-4
                    py-3
                "
            >
                {/* Before */}
                <div className="min-w-0 text-center">
                    <span
                        className="
                            inline-flex
                            min-h-5.5
                            items-center
                            justify-center
                            rounded-full
                            bg-(--progress-section-mobile-before-bg)
                            px-2
                            text-[12px]
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

                {/* Arrow */}
                <div
                    className="
                        flex
                        h-full
                        items-center
                        justify-center
                        px-2
                        pt-5
                    "
                >
                    <ArrowRight
                        aria-hidden="true"
                        className="
                            h-4
                            w-4
                            shrink-0
                            text-(--progress-section-before-text)
                        "
                        strokeWidth={2.2}
                    />
                </div>

                {/* After */}
                <div className="min-w-0 text-center">
                    <span
                        className="
                            inline-flex
                            min-h-5.5
                            items-center
                            justify-center
                            rounded-full
                            bg-(--progress-section-after-bg)
                            px-2
                            text-[12px]
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