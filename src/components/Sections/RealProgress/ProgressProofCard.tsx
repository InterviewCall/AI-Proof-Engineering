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
                grid
                grid-rows-subgrid
                row-span-6
                justify-items-center
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
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    ${iconAccentStyles[proof.accent]}
                `}
            >
                <Icon aria-hidden="true" className="h-17 w-17" strokeWidth={1.7} />
            </span>

            <h3
                className="
                    
                    text-[17px]
                    whitespace-nowrap
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
                    
                    w-full
                    
                    overflow-hidden
                    rounded-xl
                    border
                    border-(--progress-section-card-border)
                    bg-white  
                "
            >
            <div
                className="
                    flex
                    h-5
                    items-center
                    justify-between
                    gap-1
                    bg-(--progress-section-before-bg)
                    px-3.5
                    
                "
                >
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
                        px-4
                        pt-3
                        pb-4
                        
                        text-[13px]
                        leading-[1.4]
                        text-(--progress-section-card-text)
                    "
                >
                    {proof.before}
                </p>
            </div>

            <div className="flex h-3 items-center justify-center">
                <ArrowDown
                    aria-hidden="true"
                    className="h-4 w-4 text-(--progress-section-before-text)"
                    strokeWidth={2.2}
                />
            </div>

            {/* After */}
            <div
                className="
                    w-full
                    min-h-[118px]
                    overflow-hidden
                    rounded-xl
                    bg-white
                    border
                    border-(--progress-section-card-border)
                "
            >
                <div className="
                    flex
                    h-10
                    items-center
                    justify-between
                    gap-2
                    bg-(--progress-section-after-bg)
                    px-3.5
                    
                ">
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
                        px-4
                        pt-3
                        pb-4
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
                    
                    flex
                    w-full
                    items-center
                    gap-2.5
                    rounded-xl
                    p-3.5
                    min-h-[72px]
                    ${badgeAccentStyles[proof.accent]}
                `}
            >
                <Award
                    aria-hidden="true"
                    className="h-8 w-8 shrink-0"
                    strokeWidth={1.9}
                />

                <p className="line-clamp-2 text-[13px] font-semibold leading-[1.35]">
                    {proof.badge}
                </p>
            </div>
        </article>
    );
};

export default ProgressProofCard;
