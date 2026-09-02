import { ArrowDown, ArrowRight, CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

import { type AlumniMiniStory } from '@/types/alumni';

type AlumniMiniCardProps = {
    story: AlumniMiniStory;
};

const AlumniMiniCard: FC<AlumniMiniCardProps> = ({ story }) => {
    return (
        <div
            className="
                mx-auto
                flex
                h-full
                w-full
                max-w-[220px]
                flex-col
                items-center
                rounded-2xl
                border
                border-(--alumni-mini-card-border)
                bg-(--alumni-mini-card-bg)
                p-5
                text-center
            "
        >
            <span
                className="
                    inline-flex
                    min-h-6.5
                    items-center
                    gap-1
                    self-start
                    rounded-full
                    bg-(--alumni-mini-badge-bg)
                    px-2.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.03em]
                    text-(--alumni-mini-badge-text)
                "
            >
                <CircleCheck
                    aria-hidden="true"
                    className="h-3 w-3"
                    strokeWidth={2.4}
                />
                <span>Verified</span>
            </span>

            <span
                className="
                    relative
                    mt-2
                    flex
                    h-22
                    w-22
                    shrink-0
                    overflow-hidden
                    rounded-full
                    bg-(--alumni-mini-avatar-bg)
                    text-(--alumni-mini-avatar-icon)
                "
            >
                <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="75px"
                    className="object-cover"
                />
            </span>

            <h3
                className="
                    mt-2
                    text-[16px]
                    font-bold
                    leading-tight
                    text-(--alumni-mini-name-text)
                "
            >
                {story.name}
            </h3>

            <p
                className="
                    mt-1
                    text-[13px]
                    text-(--alumni-mini-meta-text)
                "
            >
                {story.role} &bull; {story.yoe}
            </p>

            <div className="mt-2 w-full">
                <p
                    className="
                        text-[10.5px]
                        font-bold
                        uppercase
                        tracking-[0.04em]
                        text-(--alumni-mini-label-text)
                    "
                >
                    Prior Focus
                </p>

                <p
                    className="
                        mt-1
                        text-[13.5px]
                        font-semibold
                        text-(--alumni-mini-value-text)
                    "
                >
                    {story.priorFocus}
                </p>

                <ArrowDown
                    aria-hidden="true"
                    className="mx-auto mt-2 h-4 w-4 text-black"
                    strokeWidth={2.9}
                />

                <p
                    className="
                        mt-2
                        text-[10.5px]
                        font-bold
                        uppercase
                        tracking-[0.04em]
                        text-(--alumni-mini-label-text)
                    "
                >
                    Career Step
                </p>

                <p
                    className="
                        mt-1
                        text-[13.5px]
                        font-semibold
                        text-(--alumni-mini-value-text)
                    "
                >
                    {story.careerStepRole}
                </p>
            </div>

            <div className="relative mt-1 h-6 w-24">
                <Image
                    src={story.companyLogo}
                    alt={story.company}
                    fill
                    sizes="96px"
                    className="object-contain"
                />
            </div>

            <div className="mt-2 w-full border-t border-(--alumni-mini-divider) pt-2">
                <p
                    className="
                        text-[10.5px]
                        leading-[1.5]
                        text-(--alumni-mini-quote-text)
                    "
                >
                    &ldquo;{story.quote}&rdquo;
                </p>
            </div>

            <button
                type="button"
                className="
                    group
                    mt-2
                    inline-flex
                    w-fit
                    
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    rounded-[6px]
                    border
                    border-[#144EFE]
                    px-4
                    py-2
                    text-[13px]
                    font-semibold
                    whitespace-nowrap
                    text-(--alumni-mini-link-text)
                    transition-colors
                    hover:text-(--alumni-mini-link-hover-text)
                "
            >
                <span>{story.ctaLabel}</span>
                <ArrowRight
                    aria-hidden="true"
                    className="
                        h-3.5
                        w-3.5
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                    "
                    strokeWidth={2}
                />
            </button>
        </div>
    );
};

export default AlumniMiniCard;
